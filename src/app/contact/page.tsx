import type { Metadata } from "next";
import Link from "next/link";
import { BusinessPageShell, BusinessPathLinks, businessEmail, inquiryHref } from "@/components/business-intake";

export const metadata: Metadata = {
  title: "Contact Smokies Insider",
  description: "Contact Smokies Insider for corrections, business listings, claims and advertising inquiries.",
};

const generalHref = inquiryHref("General inquiry - Smokies Insider", ["Page URL, if relevant", "Your message"]);

export default function ContactPage() {
  return (
    <BusinessPageShell
      eyebrow="Contact"
      title="Choose the contact path that fits"
      intro="Use a focused request so corrections, listing claims and advertising inquiries stay clear and reviewable."
    >
      <BusinessPathLinks />

      <section className="business-offer-grid contact-path-grid">
        <article>
          <h2>Request listing</h2>
          <p>Ask for a real restaurant, cabin, attraction, shop, guide, photographer, venue or service business to be reviewed.</p>
          <Link href="/business-listings">Business listings</Link>
        </article>
        <article>
          <h2>Claim your business</h2>
          <p>Request ownership review, corrections or an official link update for your business.</p>
          <Link href="/business-listings/claim">Claim your business</Link>
        </article>
        <article>
          <h2>Advertise with us</h2>
          <p>Ask about clearly labeled featured placement or other visitor-relevant visibility. Pricing is available by request.</p>
          <Link href="/advertise">Advertising inquiries</Link>
        </article>
        <article>
          <h2>Correction or general question</h2>
          <p>Include the page URL and a responsible source when reporting time-sensitive information.</p>
          <a href={generalHref}>Email {businessEmail}</a>
        </article>
      </section>

      <aside className="business-trust-note">
        <strong>No sensitive information or payments by email</strong>
        <p>Do not send passwords, payment-card information or sensitive identity documents. The site currently has no listing dashboard, payment processing or automated submission backend.</p>
        <Link href="/corrections">Read the correction path</Link>
      </aside>
    </BusinessPageShell>
  );
}
