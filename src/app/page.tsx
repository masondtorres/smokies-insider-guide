import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/guide";
import { breadcrumbSchema, webPageSchema, webSiteSchema } from "@/lib/seoSchema";
import "./homepage-v2.css";

export const metadata: Metadata = {
  title: "Smoky Insider | Smoky Mountains Trip Planner",
  description:
    "Plan a Smokies trip with practical, independent help for routes, parking, attractions, scenic stops, restaurants, stays, deals and before-you-go details.",
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
  {
    title: "Go",
    text: "Routes, parking, traffic and arrival timing.",
    action: "Plan routes & parking",
    href: "/go",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Do",
    text: "Attractions, hikes, shows and rainy-day options.",
    action: "Plan what to do",
    href: "/do",
    image: "https://images.unsplash.com/photo-1551632811-561732f1e96c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "See",
    text: "Overlooks, scenic drives, waterfalls and photo spots.",
    action: "Plan scenic stops",
    href: "/see",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Eat",
    text: "Local restaurants, quick meals and family-friendly food.",
    action: "Plan where to eat",
    href: "/eat",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Stay",
    text: "Cabins, hotels, campgrounds and where to base your trip.",
    action: "Choose your base",
    href: "/stay",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Deals",
    text: "Tickets, discounts, local savings and budget-friendly ideas.",
    action: "Plan the budget",
    href: "/deals",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
  },
];

const utilityItems = [
  "Choose one base area",
  "Plan parking before driving",
  "Keep one rainy-day backup",
  "Save the plan on your phone",
];

const entryPoints = [
  { label: "First trip", href: "/start-here" },
  { label: "Three-day trip", href: "/how-many-days" },
  { label: "Parking", href: "/smokies-parking-trolley-guide" },
  { label: "Rainy day", href: "/rainy-day-smokies-with-kids" },
  { label: "Families with children", href: "/pigeon-forge-with-kids" },
  { label: "Low-walking trips", href: "/gatlinburg-without-walking-too-much" },
  { label: "Gatlinburg vs Pigeon Forge", href: "/gatlinburg-vs-pigeon-forge" },
  { label: "Best time to visit", href: "/best-time-to-visit" },
];

const beforeYouGo = [
  { label: "Free parking and timing cheat sheet", href: "/parking-timing-cheat-sheet" },
  { label: "Full parking and trolley guide", href: "/smokies-parking-trolley-guide" },
  { label: "Official park resources", href: "/visitor-resources" },
  { label: "Best time to visit", href: "/best-time-to-visit" },
  { label: "Rainy-day backup ideas", href: "/rainy-day-smokies-with-kids" },
];

const footerLinks = [
  ["About", "/about"],
  ["Contact", "/contact"],
  ["Advertise", "/advertise"],
  ["Affiliate Disclosure", "/affiliate-disclosure"],
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

      <section className="si-hero si-hero--photo" aria-labelledby="home-title">
        <div className="si-width si-hero-copy">
          <p className="si-kicker">Independent Smokies planning</p>
          <h1 id="home-title">Plan your Smokies trip without the guesswork.</h1>
          <p className="si-hero-promise">
            Clear advice for Gatlinburg, Pigeon Forge, Sevierville, Townsend and Great Smoky Mountains National Park. Built to help first-time visitors and return trips avoid traffic, parking mistakes and overpacked days.
          </p>
          <div className="si-actions">
            <Link className="si-button si-button-primary" href="/my-plan">Build My Plan</Link>
            <Link className="si-button si-button-secondary" href="/parking-timing-cheat-sheet">Get the Free Parking Cheat Sheet</Link>
            <Link className="si-hero-text-link" href="/start-here">New here? Start here</Link>
          </div>
        </div>
      </section>

      <section className="si-section si-width" aria-labelledby="planning-heading">
        <div className="si-section-heading">
          <p className="si-section-kicker">Plan your trip</p>
          <h2 id="planning-heading">What do you need help with?</h2>
          <p>Choose the decision blocking your trip right now.</p>
        </div>
        <div className="si-card-grid">
          {planningCards.map((card) => (
            <Link
              className="si-card si-card--photo"
              href={card.href}
              key={card.href}
              style={{
                backgroundImage: `linear-gradient(to top, rgba(7,30,49,0.92) 0%, rgba(7,30,49,0.45) 55%, transparent 100%), url(${card.image})`,
              }}
            >
              <span className="si-icon">{card.title}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <span>{card.action}</span>
            </Link>
          ))}
        </div>

        <div className="si-value-strip" aria-label="Planning value">
          {utilityItems.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="si-section si-width" aria-labelledby="entry-heading">
        <div className="si-section-heading">
          <p className="si-section-kicker">Quick starts</p>
          <h2 id="entry-heading">Start with the trip you are actually taking</h2>
        </div>
        <div className="si-before-grid" style={{ marginTop: "1rem" }}>
          {entryPoints.map((item) => (
            <Link href={item.href} key={item.label}>{item.label}</Link>
          ))}
        </div>
      </section>

      <section className="si-before" aria-labelledby="before-heading">
        <div className="si-width si-before-layout">
          <div>
            <p className="si-section-kicker">Before you go</p>
            <h2 id="before-heading">Check the details that change the day.</h2>
            <p>Parking, weather, traffic and timing usually decide whether a Smokies day feels easy or exhausting.</p>
          </div>
          <div className="si-before-grid">
            {beforeYouGo.map((note) => (
              <Link href={note.href} key={note.label}>{note.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="si-section si-width" aria-labelledby="trust-heading">
        <div className="si-section-heading">
          <p className="si-section-kicker">How this guide works</p>
          <h2 id="trust-heading">Built for real decisions, not rankings</h2>
          <p>
            Built from more than 40 years of combined experience helping people in the Smoky Mountains area.
            Park facts come from official sources and carry verification labels. Paid placements stay labeled and separate from editorial judgment.
          </p>
        </div>
        <div className="si-editor-actions" style={{ marginTop: "1.25rem" }}>
          <Link className="si-button si-button-secondary" href="/about">About the guide</Link>
          <Link className="si-button si-button-secondary" href="/source-and-verification-policy">Source & verification</Link>
          <Link className="si-button si-button-secondary" href="/corrections">Report a correction</Link>
        </div>
      </section>

      <footer className="si-footer si-width">
        <div>
          <strong>Smoky Insider</strong>
          <span>Independent trip-planning help for the Smoky Mountains. Not affiliated with the National Park Service or any tourism board.</span>
          <small>&copy; {new Date().getFullYear()} Smoky Insider</small>
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
