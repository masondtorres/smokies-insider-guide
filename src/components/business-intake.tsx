import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/guide";

/**
 * Business inquiry paths always go through the contact form.
 * Receiving address is server-only and never rendered in the browser.
 */
export function inquiryHref(_subject?: string, _prompts?: string[]) {
  return "/contact";
}

export function BusinessPageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <main className="guide-page business-intake-page">
      <SiteHeader />
      <article className="business-intake-width">
        <header className="business-intake-hero">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </header>
        {children}
      </article>
      <SiteFooter />
    </main>
  );
}

export function BusinessPathLinks() {
  return (
    <nav className="business-path-links" aria-label="Business participation paths">
      <Link href="/business-listings">Business directory</Link>
      <Link href="/business-listings/claim">Claim your business</Link>
      <Link href="/advertise">Advertise with us</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
