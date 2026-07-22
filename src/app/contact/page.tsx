import type { Metadata } from "next";
import Link from "next/link";
import { BusinessPageShell, BusinessPathLinks } from "@/components/business-intake";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact | Smoky Insider",
  description:
    "Contact Smoky Insider for corrections, listing requests, partnerships and general questions about Smoky Mountains trip planning.",
};

export default function ContactPage() {
  return (
    <BusinessPageShell
      eyebrow="Contact"
      title="Get in touch"
      intro="Use the form below for corrections, listing claims, advertising questions or general feedback. Include the page URL when reporting time-sensitive information."
    >
      <BusinessPathLinks />

      <section className="business-offer-grid contact-path-grid" style={{ marginBottom: "2rem" }}>
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
          <p>See current packages and pricing for local partners.</p>
          <Link href="/advertise">See packages and prices</Link>
        </article>
        <article>
          <h2>Correction path</h2>
          <p>Include the page URL and a responsible source when reporting changing details.</p>
          <Link href="/corrections">Read the correction path</Link>
        </article>
      </section>

      <ContactForm />

      <aside className="business-trust-note">
        <strong>No sensitive information or payment-card details by form or email</strong>
        <p>
          Do not send passwords, payment-card information or sensitive identity documents.
          Approved commercial partners receive written terms and separate payment instructions.
        </p>
      </aside>
    </BusinessPageShell>
  );
}
