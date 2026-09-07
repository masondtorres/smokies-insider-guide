import { NextRequest, NextResponse } from "next/server";
import { escapeHtml, getContactConfig, sendContactEmail } from "@/lib/contact";

export const runtime = "nodejs";

const EMAIL_RE = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const GUIDE_URL = "https://www.smokyinsider.com/parking-timing-cheat-sheet";

export async function POST(request: NextRequest) {
  const config = getContactConfig();

  if (!config.configured) {
    return NextResponse.json(
      {
        error: "Email delivery is not configured yet.",
        code: "NOT_CONFIGURED",
      },
      { status: 503 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body.", code: "INVALID_INPUT" },
      { status: 400 },
    );
  }

  const website = typeof body.website === "string" ? body.website.trim() : "";
  if (website) {
    return NextResponse.json({ ok: true, captured: false, delivered: false });
  }

  const firstName = typeof body.firstName === "string" ? body.firstName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const updatesOptIn = body.updatesOptIn === true;

  if (!firstName || firstName.length > 120 || !EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json(
      { error: "Enter a valid first name and email address.", code: "INVALID_INPUT" },
      { status: 400 },
    );
  }

  const ownerHtml =
    "<div style=\"font-family:system-ui,sans-serif;line-height:1.5;color:#111\">" +
    "<p><strong>Smoky Insider parking cheat-sheet request</strong></p>" +
    "<p><strong>Name:</strong> " + escapeHtml(firstName) + "</p>" +
    "<p><strong>Email:</strong> " + escapeHtml(email) + "</p>" +
    "<p><strong>Planning updates opt-in:</strong> " + (updatesOptIn ? "Yes" : "No") + "</p>" +
    "<p><strong>Requested:</strong> 2026 Smokies Parking &amp; Timing Cheat Sheet</p>" +
    "</div>";

  const ownerResult = await sendContactEmail({
    apiKey: config.apiKey,
    from: config.from,
    to: config.to,
    replyTo: email,
    subject: `[Smoky Insider] Parking cheat-sheet request — ${firstName}`,
    html: ownerHtml,
  });

  if (!ownerResult.ok) {
    console.error("[parking-cheat-sheet] owner capture failed", { error: ownerResult.error });
    return NextResponse.json(
      { error: "We could not save the request. Use the guide on this page for now.", code: "DELIVERY_FAILED" },
      { status: 502 },
    );
  }

  const visitorHtml =
    "<div style=\"font-family:system-ui,sans-serif;line-height:1.6;color:#111\">" +
    "<p>Hi " + escapeHtml(firstName) + ",</p>" +
    "<p>Here is the current Smokies Parking &amp; Timing Cheat Sheet:</p>" +
    "<p><a href=\"" + GUIDE_URL + "\">Open the cheat sheet</a></p>" +
    "<p>Changing road, weather, parking, trolley and park details should be rechecked with the official sources linked on the page before travel.</p>" +
    "<p>Smoky Insider</p>" +
    "</div>";

  const visitorResult = await sendContactEmail({
    apiKey: config.apiKey,
    from: config.from,
    to: email,
    replyTo: config.to,
    subject: "Your Smokies Parking & Timing Cheat Sheet",
    html: visitorHtml,
  });

  if (!visitorResult.ok) {
    console.error("[parking-cheat-sheet] visitor delivery failed", { error: visitorResult.error });
    return NextResponse.json({ ok: true, captured: true, delivered: false });
  }

  console.info("[parking-cheat-sheet] captured and delivered", {
    ownerMessageId: ownerResult.id,
    visitorMessageId: visitorResult.id,
    updatesOptIn,
  });

  return NextResponse.json({ ok: true, captured: true, delivered: true });
}
