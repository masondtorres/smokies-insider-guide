import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  buildContactEmailHtml,
  getContactConfig,
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
    website: typeof body.website === "string" ? body.website : "",
  });

  if (!validation.ok) {
    if (validation.code === "SPAM") {
      // Quiet rejection for bots
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json(
      { error: validation.error, code: validation.code },
      { status: 400 },
    );
  }

  const { data } = validation;

  try {
    const resend = new Resend(config.apiKey);
    const result = await resend.emails.send({
      from: config.from,
      to: config.to,
      replyTo: data.email,
      subject: `[Smoky Insider] ${data.reason} — ${data.name}`,
      html: buildContactEmailHtml(data),
    });

    if (result.error) {
      console.error("[contact] provider rejected", {
        name: result.error.name,
        message: result.error.message,
      });
      return NextResponse.json(
        {
          error: "Delivery failed. Please try again in a few minutes.",
          code: "DELIVERY_FAILED",
        },
        { status: 502 },
      );
    }

    if (!result.data?.id) {
      return NextResponse.json(
        {
          error: "Delivery failed. Please try again in a few minutes.",
          code: "DELIVERY_FAILED",
        },
        { status: 502 },
      );
    }

    // Log only non-PII operational signal
    console.info("[contact] delivered", {
      id: result.data.id,
      reason: data.reason,
      messageLength: data.message.length,
    });

    return NextResponse.json({ ok: true, id: result.data.id });
  } catch (err) {
    console.error("[contact] delivery exception", {
      type: err instanceof Error ? err.name : "unknown",
    });
    return NextResponse.json(
      {
        error: "Delivery failed. Please try again in a few minutes.",
        code: "DELIVERY_FAILED",
      },
      { status: 502 },
    );
  }
}
