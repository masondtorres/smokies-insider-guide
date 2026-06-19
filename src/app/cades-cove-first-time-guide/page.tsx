import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cades Cove First-Time Guide: How To Plan the Loop Without Rushing It",
  description:
    "Plan a first Cades Cove visit around the 11-mile one-way loop, changing park conditions and a slower day.",
};

const strategies = [
  {
    title: "Make it the anchor",
    goodIf: "This is your first Cades Cove trip.",
    planAround: "Slow roads, traffic, daylight and a simple day before or after the loop.",
    next: "Townsend Guide",
    href: "/townsend",
    external: false,
  },
  {
    title: "Start with official conditions",
    goodIf: "Your day depends on park roads or weather.",
    planAround: "Road status, alerts, closures and changing park conditions.",
    next: "Current Conditions",
    href: "https://www.nps.gov/grsm/planyourvisit/conditions.htm",
    external: true,
  },
  {
    title: "Keep food simple",
    goodIf: "You have kids, older family members or a long drive day.",
    planAround: "Snacks, meals before or after and not waiting until everyone is hungry.",
    next: "Eat, Stay & Shop",
    href: "/eat-stay-shop",
    external: false,
  },
  {
    title: "Use Townsend as the quiet-side base",
    goodIf: "You want an easier Cades Cove-focused day.",
    planAround: "Staying close to the route instead of crossing the whole Smokies area.",
    next: "Townsend Guide",
    href: "/townsend",
    external: false,
  },
  {
    title: "Watch for vehicle-free days",
    goodIf: "You plan to bike or walk the loop during the seasonal vehicle-free schedule.",
    planAround: "Checking official dates and access details before going.",
    next: "Cades Cove Vehicle-Free Days",
    href: "https://www.nps.gov/grsm/planyourvisit/cades-cove-vehicle-free-days.htm",
    external: true,
  },
];

const tripShapes = [
  {
    title: "Cades Cove from Townsend",
    bestFor: "Quieter planning, shorter positioning and a slower day.",
    watchFor: "Fewer attraction-style extras.",
  },
  {
    title: "Cades Cove from Gatlinburg",
    bestFor: "Visitors already staying park-side.",
    watchFor: "Adding too much downtown time before or after.",
  },
  {
    title: "Cades Cove from Pigeon Forge",
    bestFor: "Families staying near attractions who want a scenic park day.",
    watchFor: "Long day shape, traffic and tired kids.",
  },
  {
    title: "Cades Cove from Sevierville",
    bestFor: "Visitors using a gateway or cabin-style base.",
    watchFor: "Drive time and food timing.",
  },
  {
    title: "Cades Cove as part of a multi-day trip",
    bestFor: "Visitors who can give it its own day.",
    watchFor: "Treating it like a rushed scenic detour.",
  },
];

const avoidList = [
  "Treating Cades Cove like a fast loop.",
  "Stacking Cades Cove, downtown Gatlinburg and several Pigeon Forge stops in one day.",
  "Waiting too long to think about food, bathrooms and tired kids.",
  "Starting late without thinking about daylight.",
  "Skipping official park condition checks.",
];

const simplePlans = [
  {
    title: "Quiet-side Cades Cove day",
    bestFor: "Townsend or Wears Valley-style trips.",
    plan: "Start simple, drive the loop, keep food easy and avoid heavy extras.",
  },
  {
    title: "Family Cades Cove day",
    bestFor: "Kids, grandparents and mixed ages.",
    plan: "Bring snacks, build in patience, keep the rest of the day light and have a bathroom and food plan.",
  },
  {
    title: "Scenic drive day",
    bestFor: "Visitors who want the road and views to be the main event.",
    plan: "Give the loop space, avoid rushing and pair it with one simple stop.",
  },
  {
    title: "Rain-aware Cades Cove day",
    bestFor: "Uncertain weather.",
    plan: "Check conditions first, keep a town backup ready and avoid depending on perfect weather.",
  },
  {
    title: "Budget-control Cades Cove day",
    bestFor: "Visitors watching trip costs.",
    plan: "Let the scenic drive be the anchor and save paid stops for another day.",
  },
];

const nextSteps = [
  {
    prompt: "Need the quiet-side base guide?",
    next: "Townsend Guide",
    href: "/townsend",
  },
  {
    prompt: "Still choosing where to stay?",
    next: "Where To Stay by Trip Type",
    href: "/where-to-stay-in-the-smokies-by-trip-type",
  },
  {
    prompt: "Need park basics?",
    next: "Visitor Resources",
    href: "/visitor-resources",
  },
  {
    prompt: "Need rainy-day backup?",
    next: "Rainy Day Smokies With Kids",
    href: "/rainy-day-smokies-with-kids",
  },
  {
    prompt: "Need food or shopping before or after?",
    next: "Eat, Stay & Shop",
    href: "/eat-stay-shop",
  },
  {
    prompt: "Want offers after choosing the day?",
    next: "Coupons & Deals",
    href: "/deals",
  },
];

function StrategyCard({ strategy }: { strategy: (typeof strategies)[number] }) {
  const content = (
    <>
      <h3>{strategy.title}</h3>
      <p className="router-detail">
        <strong>Good if</strong>
        {strategy.goodIf}
      </p>
      <p className="router-detail">
        <strong>Plan around</strong>
        {strategy.planAround}
      </p>
      <p className="router-detail router-next">
        <strong>Next</strong>
        {strategy.next}
      </p>
    </>
  );

  return strategy.external ? (
    <a className="destination-card router-card" href={strategy.href}>
      {content}
    </a>
  ) : (
    <Link className="destination-card router-card" href={strategy.href}>
      {content}
    </Link>
  );
}

export default function CadesCoveFirstTimeGuidePage() {
  return (
    <main className="destination-page">
      <header className="destination-header">
        <Link className="wordmark" href="/">
          Smoky Insider
        </Link>
        <Link className="back-link" href="/townsend">
          Townsend Guide
        </Link>
      </header>

      <section className="destination-hero">
        <p className="eyebrow">Cades Cove planning guide</p>
        <h1>Cades Cove First-Time Guide: How To Plan the Loop Without Rushing It</h1>
        <p>
          Cades Cove is not a quick add-on. It works best when you treat the
          loop as the anchor of the day, leave room for slow traffic, watch the
          weather and keep the rest of the plan simple.
        </p>
      </section>

      <section className="destination-section quick-answer-panel">
        <div className="destination-heading">
          <p className="eyebrow">Start here</p>
          <h2>Quick answer</h2>
        </div>
        <div className="destination-grid destination-grid-compact">
          <article className="destination-card">
            <h3>Plan the loop as the main event</h3>
            <p>
              Plan Cades Cove as the main event, not as a quick stop between
              Gatlinburg, Pigeon Forge and dinner. The loop is scenic, slow and
              popular. Build the day around patience, daylight, food timing and
              official park condition checks.
            </p>
          </article>
          <article className="destination-card">
            <h3>Know the basic route shape</h3>
            <p>
              Cades Cove is a scenic valley south of Townsend. The Cades Cove
              Loop Road is an 11-mile one-way loop road.
            </p>
          </article>
        </div>
        <div className="destination-actions">
          <Link className="button button-primary" href="/townsend">
            Townsend Guide
          </Link>
          <Link className="button button-secondary" href="/visitor-resources">
            Visitor Resources
          </Link>
          <Link className="button button-secondary" href="/start-planning">
            Start Planning
          </Link>
        </div>
      </section>

      <section className="destination-section field-notes-section">
        <div className="destination-heading">
          <p className="eyebrow">Cades Cove field note</p>
          <h2>Do not rush Cades Cove</h2>
        </div>
        <aside className="flagship-warning-note">
          <strong>Let the drive be the plan</strong>
          <p>
            Cades Cove works best when the drive is part of the plan, not just
            transportation.
          </p>
        </aside>
      </section>

      <section className="destination-section guide-card-section">
        <div className="destination-heading">
          <p className="eyebrow">Build a slower park day</p>
          <h2>Best Cades Cove strategy for first-timers</h2>
        </div>
        <div className="destination-grid">
          {strategies.map((strategy) => (
            <StrategyCard strategy={strategy} key={strategy.title} />
          ))}
        </div>
      </section>

      <section className="destination-section comparison-section">
        <div className="destination-heading">
          <p className="eyebrow">Choose the right starting point</p>
          <h2>Best trip shape for Cades Cove</h2>
        </div>
        <div className="destination-grid lodging-base-grid">
          {tripShapes.map((shape) => (
            <article className="destination-card" key={shape.title}>
              <h3>{shape.title}</h3>
              <p className="router-detail">
                <strong>Best for</strong>
                {shape.bestFor}
              </p>
              <p className="router-detail">
                <strong>Watch for</strong>
                {shape.watchFor}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="destination-section warning-section">
        <div className="destination-heading">
          <p className="eyebrow">Protect the day</p>
          <h2>What to avoid on a Cades Cove day</h2>
        </div>
        <div className="destination-grid destination-grid-compact">
          <article className="destination-card">
            <h3>Avoid</h3>
            <ul className="area-list">
              {avoidList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="destination-card">
            <h3>Better move</h3>
            <p>
              Choose Cades Cove as the anchor. Add one simple meal plan. Keep
              one backup. Let the day be slower on purpose.
            </p>
          </article>
        </div>
      </section>

      <section className="destination-section guide-card-section">
        <div className="destination-heading">
          <p className="eyebrow">Choose the pace that fits</p>
          <h2>Simple Cades Cove day plans</h2>
        </div>
        <div className="destination-grid">
          {simplePlans.map((plan) => (
            <article className="destination-card" key={plan.title}>
              <h3>{plan.title}</h3>
              <p className="router-detail">
                <strong>Best for</strong>
                {plan.bestFor}
              </p>
              <p className="router-detail">
                <strong>Plan</strong>
                {plan.plan}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="destination-section next-step-panel">
        <div className="destination-heading">
          <p className="eyebrow">Best next step</p>
          <h2>Go to the guide your Cades Cove day needs</h2>
        </div>
        <nav className="destination-link-grid router-link-grid" aria-label="Cades Cove guide next steps">
          {nextSteps.map((step) => (
            <Link href={step.href} key={step.href}>
              <span>{step.prompt}</span>
              <strong>{step.next}</strong>
            </Link>
          ))}
        </nav>
      </section>

      <aside className="destination-section source-note" aria-labelledby="cades-cove-source-note">
        <p className="eyebrow">Official source note</p>
        <h2 id="cades-cove-source-note">Check official park sources before final decisions</h2>
        <p>
          Cades Cove road access, vehicle-free days, park conditions, weather
          and parking needs can change. Check official Great Smoky Mountains
          National Park sources before final decisions.
        </p>
        <div className="source-links">
          <a href="https://www.nps.gov/grsm/planyourvisit/cadescove.htm">
            Official Cades Cove page
          </a>
          <a href="https://www.nps.gov/grsm/planyourvisit/conditions.htm">
            Current conditions
          </a>
          <a href="https://www.nps.gov/grsm/planyourvisit/cades-cove-vehicle-free-days.htm">
            Cades Cove vehicle-free days
          </a>
          <a href="https://www.nps.gov/grsm/planyourvisit/fees.htm">
            Parking tags
          </a>
        </div>
      </aside>
    </main>
  );
}
