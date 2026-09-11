import { NextRequest, NextResponse } from "next/server";
import {
  buildContactEmailHtml,
  getContactConfig,
  sendContactEmail,
  validateContactInput,
} from "@/lib/contact";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const config = getContactConfig();

  if (!config.configured) {
    return NextResponse.json(
      {
        error: "Contact form is not yet configured by the site owner.",
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

  const validation = validateContactInput({
    name: typeof body.name === "string" ? body.name : "",
    email: typeof body.email === "string" ? body.email : "",
    reason: typeof body.reason === "string" ? body.reason : "",
    message: typeof body.message === "string" ? body.message : "",
    businessName: typeof body.businessName === "string" ? body.businessName : "",
    pageUrl: typeof body.pageUrl === "string" ? body.pageUrl : "",
    website: typeof body.website === "string" && body.website ? body.website : typeof body.hpWebsite === "string" ? body.hpWebsite : "",
  });

  if (!validation.ok) {
    if (validation.code === "SPAM") {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json(
      { error: validation.error, code: validation.code },
      { status: 400 },
    );
  }

  const { data } = validation;

  try {
    const result = await sendContactEmail({
      apiKey: config.apiKey,
      from: config.from,
      to: config.to,
      replyTo: data.email,
      subject: `[Smokies Insider] ${data.reason} — ${data.name}`,
      html: buildContactEmailHtml(data),
    });

    if (!result.ok) {
      console.error("[contact] provider rejected", { error: result.error });
      return NextResponse.json(
        {
          error: "Delivery failed. Please try again in a few minutes.",
          code: "DELIVERY_FAILED",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, id: result.id });
  } catch {
    return NextResponse.json(
      {
        error: "Delivery failed. Please try again in a few minutes.",
        code: "DELIVERY_FAILED",
      },
      { status: 502 },
    );
  }
}
