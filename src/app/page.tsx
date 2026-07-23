import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/guide";
import { breadcrumbSchema, webPageSchema, webSiteSchema } from "@/lib/seoSchema";

export const metadata: Metadata = {
  title: { absolute: "Smoky Insider | Honest Smoky Mountains Trip Planning" },
  description:
    "Honest local help for planning Gatlinburg, Pigeon Forge, Cades Cove and Great Smoky Mountains National Park without wasting time, money or an entire day in traffic.",
  alternates: { canonical: "/" },
};

const startCards = [
  {
    title: "First trip to the Smokies",
    text: "Learn how the towns, park entrances, traffic and driving time fit together before booking too much.",
    href: "/first-time-smokies",
    label: "Start here",
  },
  {
    title: "Build a realistic three-day trip",
    text: "Use one main area each day instead of spending the vacation moving between attractions.",
    href: "/how-many-days",
    label: "See the trip shape",
  },
  {
    title: "Solve parking before arrival",
    text: "Parking and trolley choices can decide whether Gatlinburg feels manageable or miserable.",
    href: "/smokies-parking-trolley-guide",
    label: "Open the parking guide",
  },
  {
    title: "Keep a rain plan ready",
    text: "Rain changes crowds, roads and indoor wait times. Build a backup before the weather turns.",
    href: "/rainy-day",
    label: "Build the backup",
  },
];

const mistakes = [
  {
    number: "01",
    title: "Treating the map like a schedule",
    text: "Gatlinburg, Pigeon Forge and Cades Cove look close enough to stack together. Traffic and parking make that plan fall apart fast.",
  },
  {
    number: "02",
    title: "Driving into Gatlinburg without a parking decision",
    text: "Circling downtown after everyone is tired is not a minor inconvenience. It can wreck the rest of the day.",
  },
  {
    number: "03",
    title: "Planning five anchors in one day",
    text: "One major attraction, one meal area and one flexible stop usually beats a list that forces the family to rush all day.",
  },
];

const coreGuides = [
  {
    title: "Gatlinburg",
    text: "Walkability, park access, downtown parking and the tradeoffs of using Gatlinburg as your base.",
    href: "/gatlinburg",
  },
  {
    title: "Pigeon Forge",
    text: "Parkway traffic, family attractions, Dollywood planning and how to avoid driving back and forth all day.",
    href: "/pigeon-forge",
  },
  {
    title: "Cades Cove",
    text: "When to go, how much time it really takes and why it should not be treated like a quick side trip.",
    href: "/cades-cove",
  },
  {
    title: "Where to stay",
    text: "Choose a base by the trip you actually want, not by the cabin photo that looked best online.",
    href: "/where-to-stay",
  },
  {
    title: "Parking and trolleys",
    text: "A practical decision guide for Gatlinburg, Pigeon Forge and National Park parking needs.",
    href: "/smokies-parking-trolley-guide",
  },
  {
    title: "Build your trip",
    text: "Start with your group, pace and priorities. Then turn those limits into a plan that can survive real traffic.",
    href: "/start-planning",
  },
];

export default function Home() {
  return (
    <main className="home-rebuild">
      <section className="home-rebuild-hero" aria-labelledby="home-title">
        <div className="home-rebuild-hero-inner">
          <p className="home-rebuild-kicker">Independent East Tennessee trip planning</p>
          <h1 id="home-title">The Smokies are easy to love. Hard to plan.</h1>
          <p>
            Honest local help for avoiding traffic, wasted money and days that look
            better on a map than they feel in real life.
          </p>
          <div className="home-rebuild-actions">
            <Link className="button button-primary" href="/first-time-smokies">
              Plan Your First Trip
            </Link>
            <Link className="button button-secondary" href="/smokies-parking-trolley-guide">
              See the Parking Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="home-rebuild-section home-rebuild-start" aria-labelledby="start-title">
        <div className="home-rebuild-heading">
          <p className="section-label">Start with your trip</p>
          <h2 id="start-title">Solve the decision that can ruin the day.</h2>
          <p>
            The Smokies do not require a complicated itinerary. They require the
            right base, realistic driving time and fewer anchors than most visitors expect.
          </p>
        </div>
        <div className="home-rebuild-start-grid">
          {startCards.map((card) => (
            <Link href={card.href} key={card.href}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <span>{card.label} &rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-rebuild-mistakes" aria-labelledby="mistakes-title">
        <div className="home-rebuild-section home-rebuild-mistakes-inner">
          <div className="home-rebuild-heading home-rebuild-heading-light">
            <p className="section-label">What visitors get wrong</p>
            <h2 id="mistakes-title">The trip usually breaks before anyone reaches the attraction.</h2>
          </div>
          <div className="home-rebuild-mistakes-grid">
            {mistakes.map((mistake) => (
              <article key={mistake.number}>
                <span>{mistake.number}</span>
                <h3>{mistake.title}</h3>
                <p>{mistake.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-rebuild-section" aria-labelledby="guides-title">
        <div className="home-rebuild-heading">
          <p className="section-label">Guides worth opening first</p>
          <h2 id="guides-title">Fewer pages. Better answers.</h2>
          <p>
            These are the guides that carry the site. Each one should help you make
            a real decision, not send you through another directory.
          </p>
        </div>
        <div className="home-rebuild-guide-list">
          {coreGuides.map((guide, index) => (
            <Link href={guide.href} key={guide.href}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{guide.title}</h3>
                <p>{guide.text}</p>
              </div>
              <b aria-hidden="true">&rarr;</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-rebuild-section home-rebuild-before" aria-labelledby="before-title">
        <div>
          <p className="section-label">Before you leave home</p>
          <h2 id="before-title">Check the facts that can change overnight.</h2>
          <p>
            Road closures, weather, parking requirements and operating hours can
            change. Use official sources for the final check, then use Smoky Insider
            for the judgment that connects those facts to your day.
          </p>
        </div>
        <div className="home-rebuild-before-links">
          <a href="https://www.nps.gov/grsm/planyourvisit/conditions.htm">National Park conditions</a>
          <a href="https://www.nps.gov/grsm/planyourvisit/fees.htm">National Park parking tags</a>
          <Link href="/source-and-verification-policy">How we verify changing details</Link>
          <Link href="/corrections">Report something that changed</Link>
        </div>
      </section>

      <section className="home-rebuild-section home-rebuild-about" aria-labelledby="about-title">
        <p className="section-label">Why this exists</p>
        <h2 id="about-title">Built by people who live here and have helped visitors here for decades.</h2>
        <p>
          Smoky Insider is not trying to be the official tourism site. It exists to
          answer the questions official pages and attraction listings usually do not:
          what fits together, what wastes time and what a family should skip when the
          day is already too full.
        </p>
        <Link href="/about">About the guide &rarr;</Link>
      </section>

      <JsonLd data={webSiteSchema()} />
      <JsonLd data={webPageSchema({ path: "/", title: "Smoky Insider | Honest Smoky Mountains Trip Planning", description: metadata.description ?? "" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }])} />
    </main>
  );
}
