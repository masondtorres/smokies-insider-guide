import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  reason?: string;
  message?: string;
  businessName?: string;
  pageUrl?: string;
};

export async function POST(request: NextRequest) {
  const contactEmail = process.env.CONTACT_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  if (!contactEmail) {
    return NextResponse.json(
      {
        error: "Contact form is not yet configured by the site owner.",
        code: "NOT_CONFIGURED",
      },
      { status: 503 },
    );
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const reason = (body.reason || "").trim();
  const message = (body.message || "").trim();
  const businessName = (body.businessName || "").trim();
  const pageUrl = (body.pageUrl || "").trim();

  if (!name || !email || !reason || !message) {
    return NextResponse.json(
      { error: "Name, email, reason and message are required." },
      { status: 400 },
    );
  }

  // Placeholder delivery. Owner must wire a real provider (Resend, Postmark, etc.)
  // or a form service. Until then we accept the payload and return success only
  // when CONTACT_EMAIL is present so the form does not silently drop data.
  // Log structure is intentional for Vercel function logs during early setup.
  console.info("[contact]", {
    to: contactEmail,
    name,
    email,
    reason,
    businessName: businessName || null,
    pageUrl: pageUrl || null,
    messageLength: message.length,
  });

  return NextResponse.json({
    ok: true,
    message: "Message accepted. Owner must connect a real email provider for delivery.",
  });
}
