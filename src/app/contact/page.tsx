import type { Metadata } from "next";
import Link from "next/link";
import { BusinessPageShell, BusinessPathLinks, businessEmail, inquiryHref } from "@/components/business-intake";

export const metadata: Metadata = {
  title: "Contact Mason Torres | Smoky Insider",
  description: "Contact Mason Torres at veteran-owned Smoky Insider for corrections, listings, partnerships and advertising.",
};

const generalHref = inquiryHref("General inquiry - Smoky Insider", ["Page URL, if relevant", "Your message"]);

export default function ContactPage() {
  return (
    <BusinessPageShell
      eyebrow="Contact Mason Torres"
      title="Choose the contact path that fits"
      intro="Mason Torres is the founder and editor of veteran-owned Smoky Insider. Use a focused request so corrections, listing claims and advertising inquiries stay clear and reviewable."
    >
      <BusinessPathLinks />

      <section className="business-offer-grid contact-path-grid">
        <article>
          <h2>Request a listing</h2>
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
          <p>Choose from public founding-partner packages starting at $99 per year.</p>
          <Link href="/advertise">See packages and prices</Link>
        </article>
        <article>
          <h2>Correction or general question</h2>
          <p>Include the page URL and a responsible source when reporting time-sensitive information.</p>
          <a href={generalHref}>Email {businessEmail}</a>
        </article>
      </section>

      <aside className="business-trust-note">
        <strong>No sensitive information or payment-card details by email</strong>
        <p>Do not send passwords, payment-card information or sensitive identity documents. Approved commercial partners receive written terms and separate payment instructions.</p>
        <Link href="/corrections">Read the correction path</Link>
      </aside>
    </BusinessPageShell>
  );
}
