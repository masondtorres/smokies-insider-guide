"use client";

import { FormEvent, useState } from "react";
import styles from "./parking-cheat-sheet-lead.module.css";

type State = "idle" | "submitting" | "success" | "partial" | "not_configured" | "error";

export function ParkingCheatSheetLead() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      firstName: String(data.get("firstName") || "").trim(),
      email: String(data.get("email") || "").trim(),
      updatesOptIn: data.get("updatesOptIn") === "on",
      website: String(data.get("website") || "").trim(),
    };

    try {
      const response = await fetch("/api/parking-cheat-sheet", {
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
        setError(result?.error || "We could not save the request. Use the guide on this page for now.");
        return;
      }

      if (result?.captured && result?.delivered === false) {
        setState("partial");
        return;
      }

      setState("success");
      form.reset();
    } catch {
      setState("error");
      setError("Network error. Use the guide on this page for now.");
    }
  }

  return (
    <aside className={styles.card} aria-labelledby="email-cheat-sheet-heading">
      <div>
        <p className={styles.kicker}>Free planning tool</p>
        <h2 id="email-cheat-sheet-heading">Send the current cheat sheet to your inbox</h2>
        <p className={styles.copy}>
          Enter your email and Smoky Insider will send you a link to the current Parking & Timing Cheat Sheet.
          You can still print or save the guide from this page without signing up.
        </p>
      </div>

      {state === "success" ? (
        <div className={styles.status} role="status">
          <strong>Sent.</strong>
          <span>Check your inbox for the guide link.</span>
        </div>
      ) : state === "partial" ? (
        <div className={styles.status} role="status">
          <strong>Your request was captured.</strong>
          <span>Email delivery failed, so use the print/save option on this page.</span>
        </div>
      ) : state === "not_configured" ? (
        <div className={styles.status} role="status">
          <strong>Email delivery is not connected yet.</strong>
          <span>You can still use, print or save the full guide on this page.</span>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.honeypot} aria-hidden="true">
            <label>
              Website
              <input name="website" type="text" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <label>
            First name
            <input name="firstName" type="text" required maxLength={120} autoComplete="given-name" />
          </label>

          <label>
            Email
            <input name="email" type="email" required maxLength={254} autoComplete="email" />
          </label>

          <label className={styles.optIn}>
            <input name="updatesOptIn" type="checkbox" />
            <span>Also send me occasional Smoky Insider planning updates. Optional.</span>
          </label>

          {state === "error" && <p className={styles.error} role="alert">{error}</p>}

          <button type="submit" disabled={state === "submitting"}>
            {state === "submitting" ? "Sending…" : "Email Me the Cheat Sheet"}
          </button>
          <p className={styles.privacy}>No payment information. No sale of your email address.</p>
        </form>
      )}
    </aside>
  );
}
