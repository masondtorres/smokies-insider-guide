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

type FieldValues = {
  name: string;
  email: string;
  reason: string;
  message: string;
  businessName: string;
  pageUrl: string;
};

const emptyFields: FieldValues = {
  name: "",
  email: "",
  reason: "",
  message: "",
  businessName: "",
  pageUrl: "",
};

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fields, setFields] = useState<FieldValues>(emptyFields);

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
      website: String(data.get("website") || "").trim(),
    };

    // Keep values so a failed delivery does not wipe the visitor's work
    setFields({
      name: payload.name,
      email: payload.email,
      reason: payload.reason,
      message: payload.message,
      businessName: payload.businessName,
      pageUrl: payload.pageUrl,
    });

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
        setErrorMessage(
          result?.error ||
            (result?.code === "DELIVERY_FAILED"
              ? "Delivery failed. Your message was kept so you can try again."
              : "Something went wrong. Please try again later."),
        );
        return;
      }

      setState("success");
      setFields(emptyFields);
      form.reset();
    } catch {
      setState("error");
      setErrorMessage("Network error. Your message was kept so you can try again.");
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
          Delivery is not connected yet. The site owner must set server-only email
          credentials before messages can be received. Use the corrections path for
          urgent factual issues.
        </p>
        <p>
          <a href="/corrections">Go to the corrections page</a>
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <h2>Send a message</h2>

      {/* Honeypot — hidden from people, filled by many bots */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-10000px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="contact-form-grid">
        <label>
          Name <span aria-hidden="true">*</span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            maxLength={120}
            defaultValue={fields.name}
            key={`name-${fields.name}`}
          />
        </label>

        <label>
          Email <span aria-hidden="true">*</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={254}
            defaultValue={fields.email}
            key={`email-${fields.email}`}
          />
        </label>

        <label>
          Reason for contacting <span aria-hidden="true">*</span>
          <select name="reason" required defaultValue={fields.reason || ""} key={`reason-${fields.reason}`}>
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
          <input
            name="businessName"
            type="text"
            autoComplete="organization"
            maxLength={160}
            defaultValue={fields.businessName}
            key={`biz-${fields.businessName}`}
          />
        </label>

        <label className="contact-form-full">
          Page or listing involved (optional)
          <input
            name="pageUrl"
            type="url"
            placeholder="https://www.smokyinsider.com/..."
            maxLength={500}
            defaultValue={fields.pageUrl}
            key={`url-${fields.pageUrl}`}
          />
        </label>

        <label className="contact-form-full">
          Message <span aria-hidden="true">*</span>
          <textarea
            name="message"
            rows={6}
            required
            maxLength={5000}
            defaultValue={fields.message}
            key={`msg-${fields.message.slice(0, 20)}`}
          />
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
