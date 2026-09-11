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

export function ContactForm({ variant = "contact" }: ContactFormProps) {
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
    setFields({
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
        setErrorMessage(result?.error || "Something went wrong. Please try again later.");
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
        <button type="button" className="button button-secondary" onClick={() => setState("idle")}>Send another message</button>
      </div>
    );
  }

  if (state === "not_configured") {
    return (
      <div className="contact-form-status" role="status">
        <h2>Contact form not yet configured</h2>
        <p>Delivery is not connected yet. The site owner must set server-only email credentials before messages can be received.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <h2>{variant === "correction" ? "Report a correction" : variant === "advertise" ? "Advertising inquiry" : "Send a message"}</h2>
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: "1px", height: "1px", overflow: "hidden" }}>
        <label>Website<input name="hpWebsite" type="text" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <div className="contact-form-grid">
        <label>Name <span aria-hidden="true">*</span><input name="name" type="text" required autoComplete="name" maxLength={120} defaultValue={fields.name} /></label>
        <label>Email <span aria-hidden="true">*</span><input name="email" type="email" required autoComplete="email" maxLength={254} defaultValue={fields.email} /></label>
        {variant === "contact" ? (
          <label>Reason for contacting <span aria-hidden="true">*</span>
            <select name="reason" required defaultValue={fields.reason || ""}>
              <option value="" disabled>Select a reason</option>
              {reasons.map((reason) => <option key={reason} value={reason}>{reason}</option>)}
            </select>
          </label>
        ) : (
          <input type="hidden" name="reason" value={variant === "correction" ? "Correction or factual update" : "Advertising or partnership"} />
        )}
        <label>Business name (optional)<input name="businessName" type="text" autoComplete="organization" maxLength={160} defaultValue={fields.businessName} /></label>
        <label className="contact-form-full">Page or listing involved (optional)<input name="pageUrl" type="url" placeholder="https://www.smokyinsider.com/..." maxLength={500} defaultValue={fields.pageUrl} /></label>
        {variant === "advertise" ? (
          <>
            <label>Phone (optional)<input name="phone" type="tel" autoComplete="tel" maxLength={40} defaultValue={fields.phone} /></label>
            <label>Business website (optional)<input name="businessWebsite" type="url" placeholder="https://" maxLength={500} defaultValue={fields.businessWebsite} /></label>
            <label className="contact-form-full">What are you interested in?<input name="interest" type="text" maxLength={160} defaultValue={fields.interest} /></label>
          </>
        ) : null}
        {variant === "correction" ? (
          <label className="contact-form-full">Correct information / source<textarea name="correctInfo" rows={3} maxLength={2000} defaultValue={fields.correctInfo} /></label>
        ) : null}
        <label className="contact-form-full">Message <span aria-hidden="true">*</span><textarea name="message" rows={6} required maxLength={5000} defaultValue={fields.message} /></label>
      </div>
      {state === "error" && <p className="contact-form-error" role="alert">{errorMessage}</p>}
      <button type="submit" className="button button-primary" disabled={state === "submitting"}>{state === "submitting" ? "Sending" : "Send message"}</button>
    </form>
  );
}
