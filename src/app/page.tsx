import Link from "next/link";
import type { Metadata } from "next";
import { LastUpdated, SiteFooter, SiteHeader, SourceBox } from "@/components/guide";
import { towns } from "@/lib/smokiesData";

export const metadata: Metadata = {
  title: "Smokies Insider Guide: Free Smoky Mountains Trip Planner",
  description:
    "Plan a Smokies trip by base town, route, weather, crowds, parking and group fit before you buy tickets or stack stops.",
};

const decisionPanels = [
  {
    title: "Where should we stay?",
    copy: "Gatlinburg works for walkability. Pigeon Forge works for family attractions. Townsend works for quiet Cades Cove days.",
    href: "/where-to-stay",
    cta: "Compare towns",
    tags: ["Base town", "Driving load", "Walkability"],
  },
  {
    title: "What kind of day do we need?",
    copy: "Rainy day, first-time day, low-walking day and Cades Cove day should not be planned the same way.",
    href: "/plan-your-trip",
    cta: "Use the planner",
    tags: ["Group fit", "Weather", "Pace"],
  },
  {
    title: "What should we avoid?",
    copy: "Too many paid stops, bad parking assumptions and crossing town all day are how Smokies trips go sideways.",
    href: "/what-to-skip",
    cta: "See what to skip",
    tags: ["Traffic", "Parking", "Budget"],
  },
];

const plannerRoutes = [
  ["First-time trip", "Gatlinburg or Pigeon Forge", "Trying to see every town", "/first-time-smokies"],
  ["Rainy-day plan", "Pigeon Forge or walkable Gatlinburg", "Driving across the county in rain", "/rainy-day"],
  ["Low-crowd scenic day", "Townsend or Wears Valley", "Treating Cades Cove as a quick stop", "/scenic-drives"],
  ["Family with kids", "Pigeon Forge corridor", "Stacking every paid attraction", "/things-to-do"],
  ["Cades Cove day", "Townsend side", "Rushing the loop", "/cades-cove"],
  ["Food-first trip", "Where your day already is", "Chasing ratings across town", "/restaurants"],
];

const practicalGuides = [
  { title: "Parking tag", href: "/parking-tag", text: "Verify the park parking rule before you leave town." },
  { title: "How many days", href: "/how-many-days", text: "Choose a trip length that will not cram the map." },
  { title: "Best time to visit", href: "/best-time-to-visit", text: "Match season, crowd risk and weather backup." },
  { title: "Scenic drives", href: "/scenic-drives", text: "Pick a road by base town and patience level." },
];

const deskRows = [
  ["Staying in", "Gatlinburg / Pigeon Forge / Townsend / Not sure"],
  ["Trip length", "One day / Weekend / Three days / Longer"],
  ["Group", "Adults / Young kids / Teens / Seniors / Low-walking"],
  ["Day type", "First-time / Rainy day / Cades Cove / Dollywood / Scenic"],
  ["Avoid", "Traffic / Parking stress / Overspending / Too much walking"],
];

export default function Home() {
  return (
    <main className="home-page guide-home field-guide-home">
      <SiteHeader />

      <section className="hero-console" aria-labelledby="home-title">
        <div className="hero-console-copy">
          <p className="eyebrow">Free Smokies trip planner</p>
          <h1 id="home-title">Plan a Smokies trip you won&apos;t second-guess.</h1>
          <p>
            Choose your base town, match the day to your group and avoid the
            mistakes that waste half a trip.
          </p>
          <LastUpdated />
          <div className="hero-actions">
            <Link className="button button-primary" href="/plan-your-trip">Start planning</Link>
            <Link className="button button-secondary" href="/where-to-stay">Compare towns</Link>
          </div>
        </div>
        <aside className="planning-desk" aria-label="Smokies Planning Desk">
          <div className="desk-pin">Planning console</div>
          <h2>Build your Smokies day</h2>
          <div className="desk-rows">
            {deskRows.map(([label, value]) => (
              <div className="desk-row" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <div className="desk-result">
            <span>Best first move</span>
            <p>Pick your base town before picking attractions. Gatlinburg, Pigeon Forge, Townsend and Sevierville create different trips.</p>
          </div>
          <Link className="button button-primary" href="/plan-your-trip">Open planner</Link>
        </aside>
      </section>

      <section className="decision-strip" aria-labelledby="decision-strip-title">
        <div className="section-heading field-heading">
          <div>
            <p className="eyebrow">Start with the decision that changes the whole trip</p>
            <h2 id="decision-strip-title">Three choices before any ticket or cabin looks good.</h2>
          </div>
        </div>
        <div className="decision-panel-stack">
          {decisionPanels.map((panel) => (
            <article className="decision-panel" key={panel.title}>
              <div>
                <h3>{panel.title}</h3>
                <p>{panel.copy}</p>
                <div className="tag-row">
                  {panel.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <Link href={panel.href}>{panel.cta}</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="town-board" aria-labelledby="town-board-title">
        <div className="section-heading field-heading">
          <div>
            <p className="eyebrow">Town chooser</p>
            <h2 id="town-board-title">Pick the base that makes your main day easier.</h2>
          </div>
        </div>
        <div className="town-board-grid">
          {towns.map((town) => (
            <article className="town-board-column" key={town.name}>
              <h3>{town.name}</h3>
              <dl>
                <div><dt>Best for</dt><dd>{town.bestFor}</dd></div>
                <div><dt>Skip if</dt><dd>{town.skipIf}</dd></div>
                <div><dt>Common mistake</dt><dd>{town.mistake}</dd></div>
              </dl>
              <Link href={town.href}>Read guide</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="route-board" aria-labelledby="route-board-title">
        <div className="section-heading field-heading">
          <div>
            <p className="eyebrow">Featured planner routes</p>
            <h2 id="route-board-title">Choose your day by starting point and mistake risk.</h2>
          </div>
        </div>
        <div className="route-board-table">
          {plannerRoutes.map(([route, start, avoid, href]) => (
            <Link className="route-line" href={href} key={route}>
              <strong>{route}</strong>
              <span>{start}</span>
              <span>Avoid: {avoid}</span>
              <b>Open route</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="practical-guide-module" aria-labelledby="practical-guides-title">
        <div>
          <p className="eyebrow">Current practical guides</p>
          <h2 id="practical-guides-title">Four checks that save more time than another list.</h2>
        </div>
        <div className="practical-guide-list">
          {practicalGuides.map((guide) => (
            <Link href={guide.href} key={guide.href}>
              <strong>{guide.title}</strong>
              <span>{guide.text}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="trust-panel" aria-labelledby="trust-title">
        <div>
          <p className="eyebrow">Built for planning, not hype</p>
          <h2 id="trust-title">Useful pages say what can change.</h2>
          <p>
            Guide pages carry update notes, source reminders for park and road
            details, sponsored-placement labels when used and a clear no-official
            park-affiliation posture.
          </p>
        </div>
        <SourceBox />
      </section>

      <section className="business-cta compact-business-cta">
        <div>
          <p className="eyebrow">For businesses</p>
          <h2>Own a Smokies business?</h2>
          <p>
            Get on the list for future sponsor placements after the visitor guide
            is built out. Businesses can buy visibility, not editorial truth.
          </p>
        </div>
        <div className="business-actions">
          <Link className="button button-primary" href="/advertise">Advertise later</Link>
          <Link className="button button-secondary" href="/contact">Join future partner list</Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
