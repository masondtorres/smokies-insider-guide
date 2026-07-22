export type ContactInput = {
  name: string;
  email: string;
  reason: string;
  message: string;
  businessName?: string;
  pageUrl?: string;
  website?: string;
};

export type ContactValidationResult =
  | {
      ok: true;
      data: Required<Pick<ContactInput, "name" | "email" | "reason" | "message">> &
        {
          businessName: string;
          pageUrl: string;
        };
    }
  | { ok: false; error: string; code: "INVALID_INPUT" | "SPAM" };

const EMAIL_RE = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const URL_RE = /^https?:\/\/[^\s]+$/i;

const LIMITS = {
  name: 120,
  email: 254,
  reason: 80,
  message: 5000,
  businessName: 160,
  pageUrl: 500,
} as const;

export function getContactConfig() {
  const apiKey = process.env.RESEND_API_KEY?.trim() || "";
  const to = process.env.CONTACT_EMAIL?.trim() || "";
  const from = process.env.EMAIL_FROM?.trim() || "";
  return {
    apiKey,
    to,
    from,
    configured: Boolean(apiKey && to && from),
  };
}

export function validateContactInput(raw: Partial<ContactInput>): ContactValidationResult {
  if (raw.website && String(raw.website).trim().length > 0) {
    return { ok: false, error: "Rejected.", code: "SPAM" };
  }

  const name = String(raw.name || "").trim();
  const email = String(raw.email || "").trim();
  const reason = String(raw.reason || "").trim();
  const message = String(raw.message || "").trim();
  const businessName = String(raw.businessName || "").trim();
  const pageUrl = String(raw.pageUrl || "").trim();

  if (!name || !email || !reason || !message) {
    return {
      ok: false,
      error: "Name, email, reason and message are required.",
      code: "INVALID_INPUT",
    };
  }

  if (name.length > LIMITS.name || email.length > LIMITS.email || reason.length > LIMITS.reason) {
    return { ok: false, error: "One or more fields exceed the allowed length.", code: "INVALID_INPUT" };
  }

  if (message.length > LIMITS.message) {
    return { ok: false, error: "Message is too long.", code: "INVALID_INPUT" };
  }

  if (businessName.length > LIMITS.businessName || pageUrl.length > LIMITS.pageUrl) {
    return { ok: false, error: "Optional fields exceed the allowed length.", code: "INVALID_INPUT" };
  }

  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Enter a valid email address.", code: "INVALID_INPUT" };
  }

  if (pageUrl && !URL_RE.test(pageUrl)) {
    return { ok: false, error: "Page URL must start with http:// or https://.", code: "INVALID_INPUT" };
  }

  return {
    ok: true,
    data: { name, email, reason, message, businessName, pageUrl },
  };
}

/** Escape without embedding HTML entities in source (GitHub content decode). */
export function escapeHtml(value: string) {
  return Array.from(value)
    .map((ch) => {
      if (ch === "&") return "\u0026amp;";
      if (ch === "<") return "\u0026lt;";
      if (ch === ">") return "\u0026gt;";
      if (ch === '"') return "\u0026quot;";
      return ch;
    })
    .join("");
}

export function buildContactEmailHtml(data: {
  name: string;
  email: string;
  reason: string;
  message: string;
  businessName: string;
  pageUrl: string;
}) {
  const rows = [
    ["Name", data.name],
    ["Reply-to", data.email],
    ["Reason", data.reason],
    ["Business", data.businessName || "-"],
    ["Page", data.pageUrl || "-"],
  ];

  const meta = rows
    .map(
      ([label, value]) =>
        "<tr><td style=\"padding:4px 12px 4px 0;font-weight:600\">" +
        escapeHtml(label) +
        "</td><td>" +
        escapeHtml(value) +
        "</td></tr>",
    )
    .join("");

  return (
    "<div style=\"font-family:system-ui,sans-serif;line-height:1.5;color:#111\">" +
    "<p><strong>Smoky Insider contact form</strong></p>" +
    "<table>" +
    meta +
    "</table>" +
    "<hr style=\"border:none;border-top:1px solid #ddd;margin:16px 0\" />" +
    "<p style=\"white-space:pre-wrap\">" +
    escapeHtml(data.message) +
    "</p></div>"
  );
}

export type ResendSendResult =
  | { ok: true; id: string }
  | { ok: false; error: string };

export async function sendContactEmail(params: {
  apiKey: string;
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  html: string;
}): Promise<ResendSendResult> {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + params.apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: params.from,
      to: [params.to],
      reply_to: params.replyTo,
      subject: params.subject,
      html: params.html,
    }),
  });

  const payload = (await response.json().catch(() => ({}))) as {
    id?: string;
    message?: string;
    name?: string;
  };

  if (!response.ok || !payload.id) {
    return {
      ok: false,
      error: payload.message || payload.name || "HTTP " + String(response.status),
    };
  }

  return { ok: true, id: payload.id };
}
