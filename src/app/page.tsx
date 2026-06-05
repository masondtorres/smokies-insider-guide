import Link from "next/link";
import type { Metadata } from "next";
import { LastUpdated, SiteFooter, SiteHeader, SourceBox } from "@/components/guide";
import { towns } from "@/lib/smokiesData";

export const metadata: Metadata = {
  title: "Smokies Insider Guide: Free Smoky Mountains Trip Planner",
  description:
    "Choose your Smokies base town, day type, backup plan and mistake to avoid before you buy tickets or stack stops.",
};

const tripTypes = [
  {
    title: "Family with kids",
    area: "Pigeon Forge Parkway or Sevierville",
    fit: "One strong kid anchor such as WonderWorks, Parrot Mountain, The Island or a Dollywood day.",
    avoid: "Do not stack every kid stop because they are close on the map.",
    href: "/start-planning",
    cta: "Build a family plan",
  },
  {
    title: "Toddlers or grandparents",
    area: "Townsend, Wears Valley or a simple Gatlinburg base",
    fit: "Shorter walks, seated meals, scenic drives and easy exits.",
    avoid: "Do not call a plan low-walking until you know the parking and surfaces.",
    href: "/start-planning",
    cta: "Build an easy-pace plan",
  },
  {
    title: "Rainy day",
    area: "Pigeon Forge or walkable Gatlinburg",
    fit: "WonderWorks, arcades, indoor mini golf, covered shopping and a food-first backup.",
    avoid: "Do not try to rescue a full outdoor itinerary in the rain.",
    href: "/rainy-day",
    cta: "See rainy-day moves",
  },
  {
    title: "First-time visitor",
    area: "Gatlinburg or Pigeon Forge",
    fit: "One town anchor, one scenic piece and one flexible backup.",
    avoid: "Do not try Gatlinburg, Pigeon Forge, Cades Cove and Dollywood in one day.",
    href: "/first-time-smokies",
    cta: "Plan a first visit",
  },
  {
    title: "Budget day",
    area: "Townsend, Wears Valley, Sevierville or park-side scenery",
    fit: "Scenic drives, overlooks, town walks, simple meals and one paid stop only if it earns the time.",
    avoid: "Do not let small ticketed stops quietly become the whole budget.",
    href: "/deals",
    cta: "Find lower-cost options",
  },
  {
    title: "Low-walking day",
    area: "Townsend, Foothills Parkway, Gatlinburg edge or Sevierville",
    fit: "Scenic routes, short stops, seated attractions and fewer parking changes.",
    avoid: "Do not assume every popular overlook or town block is easy for every visitor.",
    href: "/start-planning",
    cta: "Build a low-walking plan",
  },
  {
    title: "Cades Cove / park day",
    area: "Townsend",
    fit: "A slow scenic loop, quiet-side stops and room for delays.",
    avoid: "Do not squeeze Cades Cove between Dollywood and a dinner reservation.",
    href: "/cades-cove",
    cta: "Plan the park day",
  },
  {
    title: "Dollywood / attraction day",
    area: "Pigeon Forge",
    fit: "Dollywood as the main anchor with nearby food, lodging reset or one light add-on.",
    avoid: "Do not treat Dollywood as a quick half-day unless your group already knows that pace.",
    href: "/dollywood-day-plan",
    cta: "Plan the attraction day",
  },
];

const quickDecisions = [
  ["Base", "Gatlinburg for walking, Pigeon Forge for attractions, Townsend for Cades Cove, Sevierville for value."],
  ["Anchor", "Pick one main thing first. Everything else has to earn its drive time."],
  ["Backup", "Rain, heat, parking and tired kids need a second plan before the day starts."],
  ["Skip", "Cut cross-town filler. The Smokies punish plans that look efficient only on a map."],
];

const practicalGuides = [
  { title: "Parking and trolley guide", href: "/smokies-parking-trolley-guide", text: "Know when walking, trolleys or paid parking make more sense." },
  { title: "Where to stay", href: "/where-to-stay", text: "Pick the town that reduces your driving, not the one with the loudest listing." },
  { title: "Things to do", href: "/things-to-do", text: "Use attractions as anchors, not a giant checklist." },
  { title: "What to skip", href: "/what-to-skip", text: "Avoid the traps that drain time, money and patience." },
];

export default function Home() {
  return (
    <main className="home-page guide-home field-guide-home product-home">
      <SiteHeader />

      <section className="home-tool-hero" aria-labelledby="home-title">
        <div className="home-tool-copy">
          <p className="eyebrow">Smokies planning tool</p>
          <h1 id="home-title">Get a Smokies day plan before the trip gets expensive.</h1>
          <p className="home-tool-promise">
            Tell us who you are traveling with and what kind of day you want. We&apos;ll point you toward the right Smokies plan.
          </p>
          <LastUpdated />
          <div className="hero-actions">
            <Link className="button button-primary" href="/start-planning">Start with your trip type</Link>
            <Link className="button button-secondary" href="/where-to-stay">Compare base towns</Link>
          </div>
        </div>

        <aside className="decision-console" aria-label="Smokies decision console">
          <div className="desk-pin">60-second planning desk</div>
          <h2>Answer five questions. Leave with a usable day.</h2>
          <div className="decision-console-list">
            {quickDecisions.map(([label, copy]) => (
              <div key={label}>
                <span>{label}</span>
                <p>{copy}</p>
              </div>
            ))}
          </div>
          <Link className="button button-primary" href="/start-planning">Open planner</Link>
        </aside>
      </section>

      <section className="trip-type-section" aria-labelledby="trip-type-title">
        <div className="section-heading field-heading">
          <div>
            <p className="eyebrow">Start with your trip type</p>
            <h2 id="trip-type-title">Pick the plan shape before you pick attractions.</h2>
          </div>
          <p className="section-route-note">Each option starts with a base area, a good fit and the mistake to avoid.</p>
        </div>

        <div className="trip-type-grid">
          {tripTypes.map((type) => (
            <article className="trip-type-card" key={type.title}>
              <h3>{type.title}</h3>
              <dl>
                <div>
                  <dt>Best starting area</dt>
                  <dd>{type.area}</dd>
                </div>
                <div>
                  <dt>Best fit</dt>
                  <dd>{type.fit}</dd>
                </div>
                <div>
                  <dt>Avoid this mistake</dt>
                  <dd>{type.avoid}</dd>
                </div>
              </dl>
              <Link href={type.href}>{type.cta}</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="town-board" aria-labelledby="town-board-title">
        <div className="section-heading field-heading">
          <div>
            <p className="eyebrow">Base town reality check</p>
            <h2 id="town-board-title">The same attraction list creates different trips from different towns.</h2>
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

      <section className="practical-guide-module product-guide-module" aria-labelledby="practical-guides-title">
        <div>
          <p className="eyebrow">Use these after the plan shape</p>
          <h2 id="practical-guides-title">Helpful pages once you know the day you are building.</h2>
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
          <p className="eyebrow">Planning guidance, not fake certainty</p>
          <h2 id="trust-title">Useful pages say what can change.</h2>
          <p>
            Hours, prices, roads, parking rules and availability can change. Use this guide for planning direction, then verify current details before relying on them.
          </p>
        </div>
        <SourceBox />
      </section>

      <SiteFooter />
    </main>
  );
}
