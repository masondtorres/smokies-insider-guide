import type { Metadata } from "next";
import Link from "next/link";
import { DirectAnswer, LastUpdated, SiteFooter, SiteHeader, SourceBox } from "@/components/guide";

export const metadata: Metadata = {
  title: "Contact Smokies Insider Guide",
  description: "Contact Smokies Insider Guide for corrections, business updates and future partner interest.",
};

export default function ContactPage() {
  return (
    <main className="guide-page">
      <SiteHeader />
      <article className="guide-article">
        <header className="guide-hero">
          <p className="eyebrow">Contact</p>
          <h1>Contact Smokies Insider Guide</h1>
          <p>Use this page for corrections, business updates and future partner interest.</p>
          <LastUpdated />
        </header>
        <DirectAnswer>
          <p>
            Send correction details, business update requests or future advertising interest
            through Mason&apos;s existing contact workflow. Include the page URL and a source
            link when reporting time-sensitive information.
          </p>
        </DirectAnswer>
        <section className="guide-content-section">
          <h2>Useful contact paths</h2>
          <p>
            For outdated page details, start with <Link href="/corrections">Corrections</Link>.
            For future business visibility, start with <Link href="/advertise">Advertise</Link>.
          </p>
        </section>
        <SourceBox />
      </article>
      <SiteFooter />
    </main>
  );
}
