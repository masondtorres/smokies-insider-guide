import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/guide";
import { breadcrumbSchema, webPageSchema, webSiteSchema } from "@/lib/seoSchema";

export const metadata: Metadata = {
  title: "Smoky Mountains Trip Planner | Smokies Insider Guide",
  description:
    "Plan a practical Smokies trip by choosing what to do, where to go, where to eat, where to stay and what to save.",
  alternates: { canonical: "/" },
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

const planningCards = [
  { title: "Go", text: "Choose a town or route.", href: "/go" },
  { title: "Do", text: "Find the right kind of day.", href: "/do" },
  { title: "See", text: "Plan park views and scenic stops.", href: "/see" },
  { title: "Eat", text: "Keep meals close to the plan.", href: "/eat" },
  { title: "Stay", text: "Choose a base that fits the trip.", href: "/stay" },
  { title: "Deals", text: "Plan for value without guesswork.", href: "/deals" },
];

const beforeYouGo = [
  { label: "Parking & traffic", href: "/smokies-parking-trolley-guide" },
  { label: "Official resources", href: "/visitor-resources" },
  { label: "My Plan", href: "/my-plan" },
  { label: "How we verify", href: "/source-and-verification-policy" },
];

const footerLinks = [
  ["About", "/about"],
  ["Contact", "/contact"],
  ["Privacy", "/privacy"],
  ["Terms", "/terms"],
  ["Editorial Policy", "/editorial-policy"],
  ["Source & Verification", "/source-and-verification-policy"],
];

export default function Home() {
  return (
    <main className="foundation-home">
      <header className="foundation-header">
        <Link className="foundation-wordmark" href="/" aria-label="Smokies Insider home">
          <span>Smokies</span> Insider
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
        <div className="foundation-width foundation-hero-layout">
          <div className="foundation-hero-content">
            <h1>Plan your Smokies trip without the guesswork.</h1>
            <p className="foundation-hero-promise">
              Start with the path that fits what you need right now.
            </p>
            <div className="foundation-actions">
              <Link className="foundation-button foundation-button-primary" href="/start-here">Start Here</Link>
              <Link className="foundation-button foundation-button-secondary" href="/start-planning">Trip Planner</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="foundation-section foundation-width foundation-path-section" aria-labelledby="planning-heading">
        <h2 id="planning-heading">Pick your path.</h2>
        <div className="foundation-planning-grid">
          {planningCards.map((card) => (
            <Link className="foundation-planning-card" href={card.href} key={card.href}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <span className="foundation-card-link" aria-hidden="true">&rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="foundation-before-section" aria-labelledby="before-heading">
        <div className="foundation-width">
          <h2 id="before-heading">Before you go</h2>
          <div className="foundation-before-grid">
            {beforeYouGo.map((note) => (
              <Link href={note.href} key={note.label}>{note.label} <span aria-hidden="true">&rarr;</span></Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="foundation-footer">
        <div>
          <strong>Smokies Insider</strong>
          <span>Independent trip-planning help for the Smoky Mountains.</span>
          <small>&copy; 2026 Smokies Insider</small>
        </div>
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
