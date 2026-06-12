import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/guide";
import { breadcrumbSchema, webPageSchema, webSiteSchema } from "@/lib/seoSchema";

export const metadata: Metadata = {
  title: "Smoky Mountains Trip Planner | Smokies Insider Guide",
  description:
    "Explore Smokies options, save what fits and build a practical trip one stop at a time.",
};

const mainLinks = [
  ["Go", "/go"],
  ["Do", "/do"],
  ["See", "/see"],
  ["Eat", "/eat"],
  ["Stay", "/stay"],
  ["Deals", "/deals"],
  ["My Plan", "/my-plan"],
];

const primary = [
  { title: "Go", text: "Places, towns, scenic routes and park approaches.", href: "/go", mark: "G" },
  { title: "Do", text: "Activities, family time and flexible day shapes.", href: "/do", mark: "D" },
  { title: "See", text: "Views, water, wildlife planning and mountain pauses.", href: "/see", mark: "S" },
  { title: "Eat", text: "Meal timing, area choices and useful backups.", href: "/eat", mark: "E" },
];

const secondary = [
  { title: "Stay", text: "Compare a base that fits the trip.", href: "/stay", mark: "ST" },
  { title: "Deals", text: "Plan value without unverified offers.", href: "/deals", mark: "$" },
  { title: "My Plan", text: "Save ideas and check your trip shape.", href: "/my-plan", mark: "MP" },
];

const footerLinks = [
  ["About", "/about"],
  ["Advertise", "/advertise"],
  ["Contact", "/contact"],
  ["Privacy", "/privacy"],
  ["Terms", "/terms"],
  ["Business Listings", "/business-listings"],
  ["Claim a Business", "/business-listings/claim"],
];

export default function Home() {
  return (
    <main className="foundation-home">
      <header className="foundation-header">
        <Link className="foundation-wordmark" href="/">
          Smokies Insider
        </Link>
        <nav className="foundation-nav" aria-label="Primary navigation">
          {mainLinks.map(([label, href]) => (
            <Link href={href} key={href}>{label}</Link>
          ))}
        </nav>
      </header>

      <section className="foundation-hero">
        <div className="foundation-ridge foundation-ridge-back" aria-hidden="true" />
        <div className="foundation-ridge foundation-ridge-mid" aria-hidden="true" />
        <div className="foundation-ridge foundation-ridge-front" aria-hidden="true" />
        <div className="foundation-width foundation-hero-content">
          <p className="foundation-eyebrow">Independent Smokies field guide</p>
          <h1>Build your Smokies trip one stop at a time.</h1>
          <p>Explore options, save what fits and build a trip that works.</p>
          <div className="foundation-actions">
            <Link className="foundation-button foundation-button-primary" href="/start-planning">Start Planning</Link>
            <Link className="foundation-button foundation-button-secondary" href="/my-plan">View My Plan</Link>
          </div>
        </div>
      </section>

      <section className="foundation-width foundation-cards" aria-label="Planning categories">
        <div className="foundation-primary-grid">
          {primary.map((card) => (
            <article className="foundation-primary-card" key={card.href}>
              <div className="foundation-card-placeholder" aria-hidden="true"><span>{card.mark}</span></div>
              <div className="foundation-card-copy">
                <h2>{card.title}</h2>
                <p>{card.text}</p>
                <Link className="foundation-card-button" href={card.href}>Explore {card.title}</Link>
              </div>
            </article>
          ))}
        </div>

        <div className="foundation-lower-row">
          {secondary.map((card) => (
            <Link className="foundation-lower-card" href={card.href} key={card.href}>
              <span className="foundation-lower-mark" aria-hidden="true">{card.mark}</span>
              <span><strong>{card.title}</strong><small>{card.text}</small></span>
              <b aria-hidden="true">&gt;</b>
            </Link>
          ))}
        </div>
      </section>

      <aside className="foundation-width foundation-trust-note">
        <strong>Plan with a final check.</strong> Smokies Insider is an independent planning site, not an official park or tourism authority. Conditions, access, parking and business details can change.
      </aside>

      <footer className="foundation-footer">
        <div><strong>Smokies Insider</strong><span>© 2026 Smokies Insider. Independent trip-planning field guide.</span></div>
        <nav className="foundation-footer-links" aria-label="Policy and information links">
          {footerLinks.map(([label, href]) => (
            <Link href={href} key={href}>{label}</Link>
          ))}
        </nav>
      </footer>

      <JsonLd data={webSiteSchema()} />
      <JsonLd data={webPageSchema({ path: "/", title: metadata.title as string, description: metadata.description ?? "" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }])} />
    </main>
  );
}
