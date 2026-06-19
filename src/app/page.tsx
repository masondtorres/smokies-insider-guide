import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/guide";
import { breadcrumbSchema, webPageSchema, webSiteSchema } from "@/lib/seoSchema";
import "./homepage-v2.css";

export const metadata: Metadata = {
  title: "Smoky Insider | Smoky Mountains Trip Planner",
  description:
    "Plan a Smokies trip with local-first help for routes, attractions, scenic stops, restaurants, stays, deals and before-you-go details.",
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
  { title: "Go", text: "Routes, parking, traffic and arrival timing.", href: "/go", icon: "↗" },
  { title: "Do", text: "Attractions, hikes, shows and rainy-day options.", href: "/do", icon: "◇" },
  { title: "See", text: "Overlooks, scenic drives, waterfalls and photo spots.", href: "/see", icon: "◌" },
  { title: "Eat", text: "Local restaurants, quick meals and family-friendly food.", href: "/eat", icon: "◍" },
  { title: "Stay", text: "Cabins, hotels, campgrounds and where to base your trip.", href: "/stay", icon: "⌂" },
  { title: "Deals", text: "Tickets, discounts, local savings and budget-friendly ideas.", href: "/deals", icon: "$" },
];

const utilityItems = [
  "Avoid bad timing",
  "Know parking pressure",
  "Pick the right area",
  "Save the useful stuff",
];

const beforeYouGo = [
  { label: "Parking and traffic", href: "/smokies-parking-trolley-guide" },
  { label: "Official park resources", href: "/visitor-resources" },
  { label: "Best time to visit", href: "/best-time-to-visit" },
  { label: "Rainy-day backup ideas", href: "/rainy-day-smokies-with-kids" },
  { label: "Family-friendly planning", href: "/pigeon-forge-with-kids" },
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
    <main className="smokies-home-v2">
      <header className="si-header">
        <div className="si-width si-header-inner">
          <Link className="si-wordmark" href="/" aria-label="Smoky Insider home">
            <span>Smoky</span> Insider
          </Link>
          <nav className="si-nav" aria-label="Primary navigation">
            {mainLinks.map(([label, href]) => (
              <Link href={href} key={href}>{label}</Link>
            ))}
          </nav>
        </div>
      </header>

      <section className="si-hero" aria-labelledby="home-title">
        <div className="si-ridge-one" aria-hidden="true" />
        <div className="si-ridge-two" aria-hidden="true" />
        <div className="si-ridge-three" aria-hidden="true" />
        <div className="si-width si-hero-copy">
          <p className="si-kicker">Local-first Smokies planning</p>
          <h1 id="home-title">Plan your Smokies trip without the guesswork.</h1>
          <p className="si-hero-promise">
            Local-first planning help for Gatlinburg, Pigeon Forge, Sevierville, Townsend and the Great Smoky Mountains.
          </p>
          <div className="si-actions">
            <Link className="si-button si-button-primary" href="/start-here">Start Here</Link>
            <Link className="si-button si-button-secondary" href="/my-plan">Build My Plan</Link>
          </div>
          <div className="si-utility-line" aria-label="Planning categories">
            <span>Routes</span>
            <span>Attractions</span>
            <span>Food</span>
            <span>Cabins</span>
            <span>Deals</span>
            <span>Local tips</span>
          </div>
        </div>
      </section>

      <section className="si-section si-width" aria-labelledby="planning-heading">
        <div className="si-section-heading">
          <h2 id="planning-heading">What do you need help with?</h2>
          <p>Choose one part of your trip and start planning.</p>
        </div>
        <div className="si-card-grid">
          {planningCards.map((card) => (
            <Link className="si-card" href={card.href} key={card.href}>
              <span className="si-icon" aria-hidden="true">{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <span>Plan this →</span>
            </Link>
          ))}
        </div>

        <div className="si-value-strip" aria-label="Planning value">
          {utilityItems.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="si-before" aria-labelledby="before-heading">
        <div className="si-width si-before-layout">
          <div>
            <h2 id="before-heading">Before you go</h2>
            <p>Check the practical details that usually decide whether a Smokies day feels easy or exhausting.</p>
          </div>
          <div className="si-before-grid">
            {beforeYouGo.map((note) => (
              <Link href={note.href} key={note.label}>{note.label} →</Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="si-footer si-width">
        <div>
          <strong>Smoky Insider</strong>
          <span>Independent trip-planning help for the Smoky Mountains.</span>
          <small>&copy; 2026 Smoky Insider</small>
        </div>
        <nav className="si-footer-links" aria-label="Policy and information links">
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
