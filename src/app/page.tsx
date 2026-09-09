import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/guide";
import { breadcrumbSchema, webPageSchema, webSiteSchema } from "@/lib/seoSchema";
import "./homepage-v2.css";

export const metadata: Metadata = {
  title: "Smoky Insider | Smoky Mountains Trip Planner",
  description:
    "Build a Smokies day that works with practical, independent help for routes, parking, weather, attractions, food, stays and backup plans.",
  alternates: { canonical: "/" },
};

const planningCards = [
  {
    title: "Start Planning",
    text: "Answer five practical questions and get recommendations that fit your base, group and day.",
    action: "Build the day",
    href: "/start-planning",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
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
    title: "Eat",
    text: "Choose food near the plan instead of adding another drive across town.",
    action: "Plan where to eat",
    href: "/eat",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Stay",
    text: "Compare lodging areas by the trip you are actually taking.",
    action: "Choose your base",
    href: "/stay",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "See",
    text: "Overlooks, scenic drives, waterfalls and park stops worth grouping together.",
    action: "Plan scenic stops",
    href: "/see",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80",
  },
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
  { label: "Check today's conditions", href: "/today" },
  { label: "Parking and timing cheat sheet", href: "/parking-timing-cheat-sheet" },
  { label: "Full parking and trolley guide", href: "/smokies-parking-trolley-guide" },
  { label: "Official park resources", href: "/visitor-resources" },
  { label: "Rainy-day backup ideas", href: "/rainy-day-smokies-with-kids" },
];

export default function Home() {
  return (
    <main className="smokies-home-v2">
      <section className="si-hero si-hero--photo" aria-labelledby="home-title">
        <div className="si-width si-hero-copy">
          <p className="si-kicker">Independent Smokies planning</p>
          <h1 id="home-title">Build a Smokies day that actually works.</h1>
          <p className="si-hero-promise">
            Choose where you are staying, who is traveling and what matters today. Get practical help with traffic, parking, weather, town choices, park stops, food and backup plans.
          </p>
          <div className="si-actions">
            <Link className="si-button si-button-primary" href="/start-planning">Start Planning</Link>
            <Link className="si-button si-button-secondary" href="/today">Check Today&apos;s Conditions</Link>
          </div>
          <p className="si-hero-text-link">
            Independent planning. Not affiliated with the National Park Service, Dollywood or any tourism board.
          </p>
        </div>
      </section>

      <section className="si-section si-width" aria-labelledby="planning-heading">
        <div className="si-section-heading">
          <p className="si-section-kicker">Start with what you need</p>
          <h2 id="planning-heading">Make the decision blocking your trip.</h2>
          <p>Pick the next useful step instead of opening another list of attractions.</p>
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
      </section>

      <section className="si-section si-width" aria-labelledby="entry-heading">
        <div className="si-section-heading">
          <p className="si-section-kicker">Quick starts</p>
          <h2 id="entry-heading">Start with the trip you are actually taking.</h2>
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
            <p className="si-section-kicker">Before you leave the cabin</p>
            <h2 id="before-heading">Check the details that can break the day.</h2>
            <p>Road status, weather, parking and timing can change after a guide is written. Verify the changing layer before you drive.</p>
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
          <p className="si-section-kicker">Independent advice. Visible sources.</p>
          <h2 id="trust-heading">Useful first. Paid placements stay labeled.</h2>
          <p>
            Time-sensitive park information links to the controlling official source. Sponsored placements cannot buy safety claims, false local endorsements or editorial rankings.
          </p>
        </div>
        <div className="si-editor-actions" style={{ marginTop: "1.25rem" }}>
          <Link className="si-button si-button-secondary" href="/source-and-verification-policy">How we verify</Link>
          <Link className="si-button si-button-secondary" href="/editorial-policy">Editorial policy</Link>
          <Link className="si-button si-button-secondary" href="/corrections">Report a correction</Link>
        </div>
      </section>

      <JsonLd data={webSiteSchema()} />
      <JsonLd data={webPageSchema({ path: "/", title: metadata.title as string, description: metadata.description ?? "" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }])} />
    </main>
  );
}
