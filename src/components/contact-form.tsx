"use client";

import { FormEvent, useMemo, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error" | "email_fallback";

const CONTACT_EMAIL = "masondtorres@duck.com";

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
  phone: string;
  businessWebsite: string;
  interest: string;
  correctInfo: string;
};

const emptyFields: FieldValues = {
  name: "",
  email: "",
  reason: "",
  message: "",
  businessName: "",
  pageUrl: "",
  phone: "",
  businessWebsite: "",
  interest: "",
  correctInfo: "",
};

type ContactFormProps = {
  variant?: "contact" | "correction" | "advertise";
};

function subjectForVariant(variant: ContactFormProps["variant"]) {
  if (variant === "correction") return "Smoky Insider Correction Report";
  if (variant === "advertise") return "Smoky Insider Advertising Inquiry";
  return "Smoky Insider Contact";
}

function buildMailto(variant: ContactFormProps["variant"], fields: FieldValues) {
  const labels: Array<[string, string]> = [
    ["Name", fields.name],
    ["Email", fields.email],
    ["Reason", fields.reason],
    ["Business name", fields.businessName],
    ["Page / listing", fields.pageUrl],
    ["Phone", fields.phone],
    ["Business website", fields.businessWebsite],
    ["Interest", fields.interest],
    ["Correct information / source", fields.correctInfo],
    ["Message", fields.message],
  ];
  const body = labels
    .filter(([, value]) => value.trim())
    .map(([label, value]) => `${label}:\n${value.trim()}`)
    .join("\n\n");
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subjectForVariant(variant))}&body=${encodeURIComponent(body)}`;
}

export function ContactForm({ variant = "contact" }: ContactFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fields, setFields] = useState<FieldValues>(emptyFields);
  const mailtoHref = useMemo(() => buildMailto(variant, fields), [variant, fields]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setErrorMessage("");
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      reason: String(data.get("reason") || "").trim() || (variant === "correction" ? "Correction or factual update" : variant === "advertise" ? "Advertising or partnership" : ""),
      message: String(data.get("message") || "").trim(),
      businessName: String(data.get("businessName") || "").trim(),
      pageUrl: String(data.get("pageUrl") || "").trim(),
      hpWebsite: String(data.get("hpWebsite") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      businessWebsite: String(data.get("businessWebsite") || "").trim(),
      interest: String(data.get("interest") || "").trim(),
      correctInfo: String(data.get("correctInfo") || "").trim(),
    };
    const preservedFields: FieldValues = {
      name: payload.name,
      email: payload.email,
      reason: payload.reason,
      message: payload.message,
      businessName: payload.businessName,
      pageUrl: payload.pageUrl,
      phone: payload.phone,
      businessWebsite: payload.businessWebsite,
      interest: payload.interest,
      correctInfo: payload.correctInfo,
    };
    setFields(preservedFields);

    const correctionMissing = variant === "correction" && (!payload.message || (!payload.pageUrl && !payload.correctInfo));
    const standardMissing = variant !== "correction" && (!payload.name || !payload.email || !payload.reason || !payload.message);
    if (correctionMissing || standardMissing) {
      setState("error");
      setErrorMessage(
        variant === "correction"
          ? "Please describe the problem and include either the page involved or the correct information/source."
          : "Please fill in name, email, reason and message."
      );
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
        setState("email_fallback");
        return;
      }
      if (!response.ok) {
        setState("error");
        setErrorMessage(result?.error || "Something went wrong. You can use the email option below instead.");
        return;
      }
      setState("success");
      setFields(emptyFields);
      form.reset();
    } catch {
      setState("email_fallback");
    }
  }

  if (state === "success") {
    return (
      <div className="contact-form-status" role="status">
        <h2>Message received</h2>
        <p>Your submission reached the Smoky Insider contact system.</p>
        <button type="button" className="button button-secondary" onClick={() => setState("idle")}>Send another message</button>
      </div>
    );
  }

  if (state === "email_fallback") {
    return (
      <div className="contact-form-status" role="status">
        <h2>Open your email to finish sending</h2>
        <p>The website email service is not connected yet. Your information is preserved below in a pre-addressed email draft. Review it in your email app and press send.</p>
        <p><a className="button button-primary" href={mailtoHref}>Open email draft</a></p>
        <p>If no email app opens, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
        <button type="button" className="button button-secondary" onClick={() => setState("idle")}>Edit form</button>
      </div>
    );
  }

  const correction = variant === "correction";

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <h2>{correction ? "Report a correction" : variant === "advertise" ? "Advertising inquiry" : "Send a message"}</h2>
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: "1px", height: "1px", overflow: "hidden" }}>
        <label>Website<input name="hpWebsite" type="text" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <div className="contact-form-grid">
        <label>Name {correction ? "(optional)" : <span aria-hidden="true">*</span>}<input name="name" type="text" required={!correction} autoComplete="name" maxLength={120} defaultValue={fields.name} /></label>
        <label>Email {correction ? "(optional)" : <span aria-hidden="true">*</span>}<input name="email" type="email" required={!correction} autoComplete="email" maxLength={254} defaultValue={fields.email} /></label>
        {variant === "contact" ? (
          <label>Reason for contacting <span aria-hidden="true">*</span>
            <select name="reason" required defaultValue={fields.reason || ""}>
              <option value="" disabled>Select a reason</option>
              {reasons.map((reason) => <option key={reason} value={reason}>{reason}</option>)}
            </select>
          </label>
        ) : (
          <input type="hidden" name="reason" value={correction ? "Correction or factual update" : "Advertising or partnership"} />
        )}
        <label>Business name (optional)<input name="businessName" type="text" autoComplete="organization" maxLength={160} defaultValue={fields.businessName} /></label>
        <label className="contact-form-full">Page or listing involved {correction ? "" : "(optional)"}<input name="pageUrl" type="url" placeholder="https://www.smokyinsider.com/..." maxLength={500} defaultValue={fields.pageUrl} /></label>
        {variant === "advertise" ? (
          <>
            <label>Phone (optional)<input name="phone" type="tel" autoComplete="tel" maxLength={40} defaultValue={fields.phone} /></label>
            <label>Business website (optional)<input name="businessWebsite" type="url" placeholder="https://" maxLength={500} defaultValue={fields.businessWebsite} /></label>
            <label className="contact-form-full">What are you interested in?<input name="interest" type="text" maxLength={160} defaultValue={fields.interest} /></label>
          </>
        ) : null}
        {correction ? (
          <label className="contact-form-full">Correct information / source<textarea name="correctInfo" rows={3} maxLength={2000} defaultValue={fields.correctInfo} /></label>
        ) : null}
        <label className="contact-form-full">Message <span aria-hidden="true">*</span><textarea name="message" rows={6} required maxLength={5000} defaultValue={fields.message} /></label>
      </div>
      {state === "error" && (
        <div role="alert">
          <p className="contact-form-error">{errorMessage}</p>
          <p><a href={mailtoHref}>Email {CONTACT_EMAIL} instead</a></p>
        </div>
      )}
      <button type="submit" className="button button-primary" disabled={state === "submitting"}>{state === "submitting" ? "Sending" : "Send message"}</button>
      <p className="contact-form-help">If website delivery is unavailable, this form will give you a pre-addressed email draft instead of pretending your message was sent.</p>
    </form>
  );
}
