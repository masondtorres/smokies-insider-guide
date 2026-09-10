import type { Metadata } from "next";
import Link from "next/link";
import { DecisionEngine } from "@/components/decision-engine";
import { JsonLd } from "@/components/guide";
import { breadcrumbSchema, organizationSchema, webPageSchema, webSiteSchema } from "@/lib/seoSchema";

export const metadata: Metadata = {
  title: "Smokies Insider | Smoky Mountains Trip Planner",
  description:
    "Build a Smokies day that works. Independent help for Gatlinburg, Pigeon Forge, Sevierville, Townsend and Great Smoky Mountains National Park: traffic, parking, weather, food, stays and backup plans.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Smokies Insider | Smoky Mountains Trip Planner",
    description:
      "Independent Smokies planning for routes, parking, weather, town choices, park stops, food and backup plans.",
    url: "https://www.smokyinsider.com/",
    images: [{ url: "/images/photos/og-home.jpg", width: 1200, height: 630, alt: "Cades Cove split-rail fences and autumn ridges in Great Smoky Mountains National Park" }],
  },
};

const blockingDecisions = [
  {
    label: "Where should we stay?",
    text: "Match the base to the trip, not the cabin photo. Gatlinburg, Pigeon Forge, Sevierville and Townsend solve different days.",
    href: "/where-to-stay",
  },
  {
    label: "What will ruin today?",
    text: "Road status, parking tags, full lots and late starts wreck more days than bad restaurants.",
    href: "/today",
  },
  {
    label: "What if it rains?",
    text: "Keep one indoor backup on the same side of the region. Do not drive to the ridge hoping for a hole in the clouds.",
    href: "/rainy-day",
  },
  {
    label: "Can we do this without much walking?",
    text: "Overlooks, trolleys, the Cades Cove loop and some shows work. Steep sidewalks and 'short' trailheads often do not.",
    href: "/gatlinburg-without-walking-too-much",
  },
  {
    label: "How should we spend one day?",
    text: "One geographic anchor. One backup. Food near the plan. That beats a highlight reel.",
    href: "/how-many-days",
  },
  {
    label: "What is worth the drive?",
    text: "Cades Cove, Kuwohi and Newfound Gap are commitments, not add-ons after a Parkway morning.",
    href: "/see",
  },
];

const beforeYouGo = [
  { label: "Check today's conditions", href: "/today" },
  { label: "Parking and timing cheat sheet", href: "/parking-timing-cheat-sheet" },
  { label: "Full parking and trolley guide", href: "/smokies-parking-trolley-guide" },
  { label: "Official park resources", href: "/visitor-resources" },
  { label: "Rainy-day backup ideas", href: "/rainy-day" },
];

export default function Home() {
  return (
    <main className="smokies-home-v2" id="home">
      <section className="si-hero si-hero--photo" aria-labelledby="home-title">
        <div className="si-hero-copy">
          <p className="si-kicker">Independent Smokies planning</p>
          <h1 id="home-title">Build a Smokies day that actually works.</h1>
          <p className="si-hero-promise">
            Choose where you are staying, who is traveling and what matters today. Get practical help with traffic, parking, weather, town choices, park stops, food and backup plans.
          </p>
          <div className="si-actions">
            <Link className="si-button si-button-primary" href="/start-planning">Start Planning</Link>
            <Link className="si-button si-button-secondary" href="/today">Check Today's Conditions</Link>
          </div>
          <p className="si-hero-text-link">
            Independent planning. Not affiliated with the National Park Service, Dollywood or any tourism board.
          </p>
        </div>
        <p className="si-photo-credit">Cades Cove, Great Smoky Mountains National Park</p>
      </section>

      <div className="si-engine-wrap">
        <DecisionEngine />
      </div>

      <section className="si-section si-width" aria-labelledby="planning-heading">
        <div className="si-section-heading">
          <p className="si-section-kicker">Start with what you need</p>
          <h2 id="planning-heading">Make the decision blocking your trip.</h2>
          <p>Pick the next useful step instead of opening another list of attractions.</p>
        </div>
        <div className="si-decision-list">
          {blockingDecisions.map((item) => (
            <Link className="si-decision-item" href={item.href} key={item.href}>
              <strong>{item.label}</strong>
              <p>{item.text}</p>
              <span>Open guide</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="si-section si-width" aria-labelledby="place-heading">
        <div className="si-section-heading">
          <p className="si-section-kicker">The region is not one mood</p>
          <h2 id="place-heading">Park, Parkway and quiet side ask for different days.</h2>
        </div>
        <div className="si-split">
          <div
            className="si-panel si-panel--photo"
            style={{ ["--panel-image" as string]: "url(/images/photos/kuwohi-east-view.webp)" }}
          >
            <h2>Great Smoky Mountains National Park</h2>
            <p>Early start, one corridor, parking tag, downloaded map, and a backup that stays on the same side.</p>
            <div className="si-actions">
              <Link className="si-button si-button-secondary" href="/see">Plan park stops</Link>
            </div>
          </div>
          <div className="si-panel">
            <p className="si-section-kicker">Gateway towns</p>
            <h2>Four bases, four rhythms.</h2>
            <div className="si-link-list">
              <Link href="/gatlinburg">Gatlinburg — walkable park gateway</Link>
              <Link href="/pigeon-forge">Pigeon Forge — family entertainment corridor</Link>
              <Link href="/sevierville">Sevierville — space, downtown, access to both</Link>
              <Link href="/townsend">Townsend — quiet side near Cades Cove</Link>
            </div>
          </div>
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

      <section className="si-section si-width" aria-labelledby="book-heading">
        <div className="si-book">
          <div>
            <p className="si-section-kicker">Why this website exists</p>
            <h2 id="book-heading">The book and the website</h2>
            <p>The book carries the durable planning. The website carries what changes.</p>
            <p>
              The Smokies Insider Guide explains how the region fits together, where to stay, how to group a day, what traffic changes and how to avoid wasting half the trip crossing the region. This site carries the changing layer: closures, hours, events, road conditions and corrections.
            </p>
            <p>A purchase link will appear here when publication and the retailer destination are verified. Until then, use the live tools.</p>
          </div>
          <aside>
            <strong>Use the live companion now</strong>
            <p>Start with today's conditions, then save the day's anchor in My Plan. Plans stay in this browser only.</p>
            <div className="si-actions">
              <Link className="si-button si-button-primary" href="/today">Check today</Link>
              <Link className="si-button si-button-secondary" href="/my-plan">Open My Plan</Link>
            </div>
          </aside>
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
      <JsonLd data={organizationSchema()} />
      <JsonLd data={webPageSchema({ path: "/", title: metadata.title as string, description: metadata.description ?? "", dateModified: "2026-09-10" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }])} />
    </main>
  );
}
