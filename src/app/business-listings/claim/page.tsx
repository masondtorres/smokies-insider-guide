import type { Metadata } from "next";
import Link from "next/link";
import { BusinessPageShell, BusinessPathLinks, inquiryHref } from "@/components/business-intake";

export const metadata: Metadata = {
  title: "Claim Your Smokies Business Listing",
  description: "Request ownership review or corrections for a Smokies Insider business listing.",
};

const claimHref = inquiryHref("Claim your business - Smokies Insider", [
  "Listing URL, if one exists",
  "Business website",
  "Your name and role",
  "Business email or other ownership evidence",
  "Details that need correction",
]);

export default function ClaimBusinessPage() {
  return (
    <BusinessPageShell
      eyebrow="Business owner path"
      title="Claim your business or request a correction"
      intro="Use this path if you own, manage or officially represent a local business. A claim starts a review; it does not automatically change or promote a listing."
    >
      <BusinessPathLinks />

      <section className="business-action-panel">
        <div>
          <p className="eyebrow">Claim option</p>
          <h2>Send an ownership review request</h2>
          <p>Include enough information to connect you to the business. Sensitive identity documents, passwords and payment details should not be sent by email.</p>
        </div>
        <a className="business-primary-action" href={claimHref}>Claim your business</a>
      </section>

      <section className="business-process-grid" aria-label="Claim review steps">
        <article><span>01</span><h2>Identify the listing</h2><p>Send the listing URL if published, or the exact business name and town if requesting a new listing.</p></article>
        <article><span>02</span><h2>Show your role</h2><p>Use a business-domain email or another reasonable public connection to the business when available.</p></article>
        <article><span>03</span><h2>Review the facts</h2><p>List corrections and provide the official source for hours, contact information, booking links or other changing details.</p></article>
      </section>

      <section className="business-intake-section">
        <p className="eyebrow">What a claim can do</p>
        <h2>Keep a listing accurate and attributable</h2>
        <ul className="business-check-list">
          <li>Request corrections to verified business details.</li>
          <li>Provide an official website, booking link and social links.</li>
          <li>Clarify family-friendly, accessibility or local notes without making unsupported claims.</li>
          <li>Ask for removal or review of information you believe is incorrect.</li>
          <li>Start a separate featured placement inquiry when commercial visibility is wanted.</li>
        </ul>
      </section>

      <aside className="business-trust-note">
        <strong>Claims and advertising stay separate</strong>
        <p>Claiming a listing does not make it sponsored or featured. Paid visibility, when available, is separately labeled and pricing is available by request.</p>
        <Link href="/advertise">Advertise with us</Link>
      </aside>
    </BusinessPageShell>
  );
}
