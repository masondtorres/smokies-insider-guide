import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd, LastUpdated, SiteFooter, SiteHeader, SourceBox } from "@/components/guide";
import { breadcrumbSchema, faqSchema, webPageSchema, webSiteSchema } from "@/lib/seoSchema";
import { towns } from "@/lib/smokiesData";

export const metadata: Metadata = {
  title: "Smoky Mountains Trip Planner | Smokies Insider Guide",
  description:
    "Build a practical Smokies day plan by base town, group, weather, walking limits, crowds and budget before you stack attractions.",
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

const plannerPreview = [
  ["Best base", "Pigeon Forge for attraction-heavy families. Townsend or Wears Valley for slower park days."],
  ["Main anchor", "Choose one: Dollywood, WonderWorks, Cades Cove, Roaring Fork, Anakeesta or a simple town route."],
  ["Backup plan", "Rain with kids? Start indoors. Scenic day? Keep a visitor center or food reset ready."],
  ["What to avoid", "Do not cross town twice if traffic, parking or tired kids are already the stress point."],
];

const practicalGuides = [
  { title: "Parking and trolley guide", href: "/smokies-parking-trolley-guide", text: "Know when walking, trolleys or paid parking make more sense." },
  { title: "Where to stay", href: "/where-to-stay", text: "Pick the town that reduces your driving, not the one with the loudest listing." },
  { title: "Things to do", href: "/things-to-do", text: "Use attractions as anchors, not a giant checklist." },
  { title: "What to skip", href: "/what-to-skip", text: "Avoid the traps that drain time, money and patience." },
];

const homepageFaqs = [
  {
    question: "What is Smokies Insider Guide?",
    answer:
      "Smokies Insider Guide is a planning-first guide for choosing a Smoky Mountains day by base town, group, weather, walking limits, crowd tolerance and budget. It gives planning guidance, not live hours, prices, road status or attraction availability.",
  },
  {
    question: "Who is the Smokies planner for?",
    answer:
      "The planner is for first-time visitors, families, rainy-day groups, low-walking groups, budget travelers and visitors choosing between Gatlinburg, Pigeon Forge, Sevierville, Townsend, Wears Valley and NC-side routes.",
  },
  {
    question: "What should visitors verify before relying on a plan?",
    answer:
      "Hours, prices, road status, trolley details, parking rules, closures and availability can change. Check official sources before relying on a final plan.",
  },
];

export default function Home() {
  return (
    <main className="home-page guide-home field-guide-home product-home">
      <SiteHeader />

      <section className="home-tool-hero" aria-labelledby="home-title">
        <div className="home-tool-copy">
          <p className="eyebrow">Smokies planning tool</p>
          <h1 id="home-title">Answer a few questions. Get a practical Smokies day plan.</h1>
          <p className="home-tool-promise">
            Tell us who you are traveling with, where you are starting and what could ruin the day. We&apos;ll point you toward a base, an anchor, a backup and the mistake to avoid.
          </p>
          <LastUpdated />
          <div className="hero-actions">
            <Link className="button button-primary" href="/start-planning">Build My Smokies Day Plan</Link>
            <Link className="button button-secondary" href="/things-to-do">Browse Things To Do</Link>
          </div>
        </div>

        <aside className="decision-console planner-preview-module" aria-label="Smokies planner preview">
          <div className="desk-pin">Planner preview</div>
          <h2>One usable day, not a stack of stops.</h2>
          <p>
            It weighs base town, season, crowds, mobility, rain and budget before recommending the day shape.
          </p>
          <div className="decision-console-list planner-preview-list">
            {plannerPreview.map(([label, copy]) => (
              <div key={label}>
                <span>{label}</span>
                <p>{copy}</p>
              </div>
            ))}
          </div>
          <Link className="button button-primary" href="/start-planning">Open the Planner</Link>
        </aside>
      </section>

      <section className="seo-answer-panel product-seo-panel" aria-labelledby="what-is-sig">
        <p className="eyebrow">Direct answer</p>
        <h2 id="what-is-sig">What is Smokies Insider Guide?</h2>
        <p>
          Smokies Insider Guide helps visitors choose a practical Smoky Mountains day plan based on who is going, where they are starting, walking limits, weather, crowd tolerance and budget. It is planning guidance, not a live source for hours, prices, road closures or attraction availability.
        </p>
        <div className="seo-two-column">
          <article>
            <h3>Who this planner is for</h3>
            <p>
              Use it for family trips, rainy days, first visits, low-walking days, budget days, Cades Cove plans, Dollywood or Pigeon Forge attraction days and town-base decisions.
            </p>
          </article>
          <article>
            <h3>What this planner does not do</h3>
            <p>
              It does not claim live traffic, current hours, current prices, road status, closures, trolley routes or attraction availability. Check official sources before you go.
            </p>
          </article>
        </div>
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

      <section className="seo-faq-panel" aria-labelledby="home-faq-title">
        <p className="eyebrow">Smokies planning FAQ</p>
        <h2 id="home-faq-title">Questions this guide is built to answer</h2>
        <div className="seo-faq-list">
          {homepageFaqs.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <JsonLd data={webSiteSchema()} />
      <JsonLd data={webPageSchema({
        path: "/",
        title: "Smoky Mountains Trip Planner | Smokies Insider Guide",
        description: metadata.description ?? "",
      })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }])} />
      <JsonLd data={faqSchema(homepageFaqs)} />

      <SiteFooter />
    </main>
  );
}
