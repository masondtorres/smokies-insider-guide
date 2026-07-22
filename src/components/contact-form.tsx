"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error" | "not_configured";

const reasons = [
  "General question",
  "Correction or factual update",
  "Business listing request",
  "Claim an existing listing",
  "Advertising or partnership",
  "Other",
];

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      reason: String(data.get("reason") || "").trim(),
      message: String(data.get("message") || "").trim(),
      businessName: String(data.get("businessName") || "").trim(),
      pageUrl: String(data.get("pageUrl") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.reason || !payload.message) {
      setState("error");
      setErrorMessage("Please fill in name, email, reason and message.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (response.status === 503 || result?.code === "NOT_CONFIGURED") {
        setState("not_configured");
        return;
      }

      if (!response.ok) {
        setState("error");
        setErrorMessage(result?.error || "Something went wrong. Please try again later.");
        return;
      }

      setState("success");
      form.reset();
    } catch {
      setState("error");
      setErrorMessage("Network error. Please try again later.");
    }
  }

  if (state === "success") {
    return (
      <div className="contact-form-status" role="status">
        <h2>Message received</h2>
        <p>Thank you. We will review your message and respond when appropriate.</p>
        <button type="button" className="button button-secondary" onClick={() => setState("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  if (state === "not_configured") {
    return (
      <div className="contact-form-status" role="status">
        <h2>Contact form not yet configured</h2>
        <p>
          The receiving address has not been set by the site owner. Please check back later or use the
          correction path if you need to report a factual issue.
        </p>
        <LinkFallback />
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <h2>Send a message</h2>

      <div className="contact-form-grid">
        <label>
          Name <span aria-hidden="true">*</span>
          <input name="name" type="text" required autoComplete="name" />
        </label>

        <label>
          Email <span aria-hidden="true">*</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>

        <label>
          Reason for contacting <span aria-hidden="true">*</span>
          <select name="reason" required defaultValue="">
            <option value="" disabled>
              Select a reason
            </option>
            {reasons.map((reason) => (
              <option key={reason} value={reason}>
                {reason}
              </option>
            ))}
          </select>
        </label>

        <label>
          Business name (optional)
          <input name="businessName" type="text" autoComplete="organization" />
        </label>

        <label className="contact-form-full">
          Page or listing involved (optional)
          <input name="pageUrl" type="url" placeholder="https://www.smokyinsider.com/..." />
        </label>

        <label className="contact-form-full">
          Message <span aria-hidden="true">*</span>
          <textarea name="message" rows={6} required />
        </label>
      </div>

      {state === "error" && (
        <p className="contact-form-error" role="alert">
          {errorMessage}
        </p>
      )}

      <button type="submit" className="button button-primary" disabled={state === "submitting"}>
        {state === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function LinkFallback() {
  return (
    <p>
      <a href="/corrections">Go to the corrections page</a>
    </p>
  );
}
