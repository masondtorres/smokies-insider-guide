import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free and Cheap Things to Do in the Smokies | Smokies Insider Guide",
  description:
    "Plan a lower-cost Smoky Mountains trip with free park ideas, cheap town stops, budget mistakes to avoid, sample day plans and deal-hunting tips for Gatlinburg, Pigeon Forge, Sevierville and Townsend.",
};

const quickIdeas = [
  "Great Smoky Mountains National Park drives and overlooks",
  "Cades Cove, when traffic and timing make sense",
  "Picnic areas and creek stops",
  "Easy walks and short trails",
  "Gatlinburg walking time",
  "Window-shopping and people-watching on the Parkway",
  "Sevierville downtown walk",
  "Townsend quiet-side day",
  "Free events when available",
  "Coupons and deal hunting for paid attractions",
];

const parkIdeas = [
  {
    title: "Scenic drives and overlooks",
    text: "Let the road and views be the main plan. Check road conditions before building the day around a route.",
  },
  {
    title: "Picnic areas and creek stops",
    text: "Keep food simple and check current access or seasonal details before going.",
  },
  {
    title: "Short walks and visitor centers",
    text: "Match walking to the group and use official park information for changing facility details.",
  },
  {
    title: "Cades Cove",
    text: "Treat the loop as a slower main event. Traffic, access and timing can shape the whole day.",
    href: "/cades-cove",
  },
];

const townIdeas = [
  {
    title: "Gatlinburg",
    ideas: [
      "Walk the Parkway.",
      "Use the River Walk as a quieter break.",
      "Browse shops before choosing paid attractions.",
      "Pair paid stops carefully so the day does not get expensive fast.",
    ],
    href: "/gatlinburg",
  },
  {
    title: "Pigeon Forge",
    ideas: [
      "Browse the Parkway before committing to paid stops.",
      "Look for coupons before booking paid attractions.",
      "Pick one anchor attraction instead of stacking tickets all day.",
      "Use dinner, dessert or a simple evening drive as the lower-cost part of the day.",
    ],
    href: "/pigeon-forge",
  },
  {
    title: "Sevierville",
    ideas: [
      "Build time around a downtown walk.",
      "Use photo stops and local browsing as part of the day.",
      "Control the food and shopping budget before adding extras.",
      "Use the area as a base for a cheaper day without heavy attraction spending.",
    ],
    href: "/sevierville",
  },
  {
    title: "Townsend",
    ideas: [
      "Plan a quiet-side drive.",
      "Keep the day outdoors and simple.",
      "Build around a picnic or creek-based plan when conditions fit.",
      "Choose a slower budget day instead of a packed attraction day.",
    ],
    href: "/townsend",
  },
];

const tripTypes = [
  {
    title: "Families with kids",
    bestFor: "One outdoor anchor, snacks, a picnic plan and one paid stop if it fits.",
    skipIf: "The day depends on crossing towns for several ticketed attractions.",
  },
  {
    title: "Couples",
    bestFor: "Scenic drives, walking time, browsing and one meal worth planning around.",
    skipIf: "You are adding paid stops just to fill every hour.",
  },
  {
    title: "Rainy day",
    bestFor: "One indoor anchor, town browsing, food and a flexible backup.",
    skipIf: "The plan assumes every indoor stop is low-cost.",
    href: "/rainy-day-smokies-with-kids",
  },
  {
    title: "Grandparents or low-walking group",
    bestFor: "Scenic drives, overlooks, simple meals and short stops.",
    skipIf: "The route requires too much walking or repeated parking.",
  },
  {
    title: "Cabin day",
    bestFor: "Groceries, views, games, rest and one simple outing.",
    skipIf: "You are paying for a cabin but leaving it for a packed attraction day.",
    href: "/where-to-stay-in-the-smokies-by-trip-type",
  },
  {
    title: "First-time visitors",
    bestFor: "Mixing one park-focused day with one carefully chosen paid attraction.",
    skipIf: "You are trying to sample every town in one day.",
  },
];

const mistakes = [
  "Stacking too many ticketed attractions.",
  "Forgetting parking tag needs in the park.",
  "Burning gas and time by crossing towns all day.",
  "Assuming free means crowd-free.",
  "Waiting until the last minute to look for coupons.",
  "Building a whole day around one overhyped stop.",
];

const simplePlans = [
  {
    title: "Free-heavy park day",
    plan: "Check official conditions, choose one park area, pack a simple food plan and leave room for a scenic drive, overlook or short walk.",
    watchFor: "Parking tags, gas, road changes, weather and crowding.",
  },
  {
    title: "Cheap Gatlinburg walking day",
    plan: "Choose parking carefully, walk and browse first, then add one meal or paid stop only if it fits the budget.",
    watchFor: "Parking cost, tired legs and impulse spending.",
  },
  {
    title: "Quiet-side Townsend and Cades Cove day",
    plan: "Use Townsend as the slower base, check Cades Cove conditions and keep food and the rest of the day simple.",
    watchFor: "Slow traffic, daylight, gas and trying to add too much afterward.",
  },
];

const nextSteps = [
  { prompt: "Need more activity ideas?", next: "Things To Do", href: "/things-to-do" },
  { prompt: "Planning a rainy day?", next: "Rainy Day Smokies With Kids", href: "/rainy-day-smokies-with-kids" },
  { prompt: "Choosing where to stay?", next: "Where To Stay by Trip Type", href: "/where-to-stay-in-the-smokies-by-trip-type" },
  { prompt: "Planning Cades Cove?", next: "Cades Cove First-Time Guide", href: "/cades-cove" },
  { prompt: "Ready to check offers?", next: "Coupons & Deals", href: "/deals" },
];

export default function FreeAndCheapSmokiesPage() {
  return (
    <main className="destination-page">
      <header className="destination-header">
        <Link className="wordmark" href="/">
          Smokies Insider Guide
        </Link>
        <Link className="back-link" href="/start-planning">
          Start Planning
        </Link>
      </header>

      <section className="destination-hero">
        <p className="eyebrow">Budget Smokies planning guide</p>
        <h1>Free and Cheap Things to Do in the Smokies</h1>
        <p>
          You can spend plenty of money in Gatlinburg, Pigeon Forge and
          Sevierville. You do not have to build the whole trip that way. This
          guide helps you mix park days, scenic drives, simple walks, low-cost
          town stops and budget-friendly backups.
        </p>
        <aside className="flagship-warning-note">
          <strong>Check changing costs</strong>
          <p>
            Some costs change. Always check official sites before you go,
            especially for parking tags, attraction pricing, seasonal hours and
            event dates.
          </p>
        </aside>
        <div className="destination-actions">
          <a className="button button-primary" href="#free-ideas">
            Start with the free ideas <span aria-hidden="true">→</span>
          </a>
          <Link className="button button-secondary" href="/deals">
            See deals and coupons <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="destination-section quick-answer-panel" id="free-ideas">
        <div className="destination-heading">
          <p className="eyebrow">Quick answer</p>
          <h2>Best free and cheap Smokies ideas</h2>
        </div>
        <div className="destination-grid destination-grid-compact">
          <article className="destination-card">
            <h3>Start with the day shape</h3>
            <ul className="area-list">
              {quickIdeas.slice(0, 5).map((idea) => (
                <li key={idea}>{idea}</li>
              ))}
            </ul>
          </article>
          <article className="destination-card">
            <h3>Then control the extras</h3>
            <ul className="area-list">
              {quickIdeas.slice(5).map((idea) => (
                <li key={idea}>{idea}</li>
              ))}
            </ul>
          </article>
        </div>
        <p className="router-section-intro">
          These ideas are not always no-cost. Plan for possible parking tags,
          gas, food, ticketed add-ons and seasonal changes.
        </p>
      </section>

      <section className="destination-section field-notes-section">
        <div className="destination-heading">
          <p className="eyebrow">Budget field note</p>
          <h2>Free does not mean no-cost</h2>
        </div>
        <aside className="flagship-warning-note">
          <strong>Count the whole day</strong>
          <p>
            Park entrance is not the same thing as a no-cost day. Parking tags,
            gas, food, traffic, time and gear can still affect the budget.
          </p>
        </aside>
      </section>

      <section className="destination-section guide-card-section">
        <div className="destination-heading">
          <p className="eyebrow">Build around the park</p>
          <h2>Best free park-based ideas</h2>
          <p className="router-section-intro">
            Check NPS current conditions, parking tags and road closures before
            finalizing park plans.
          </p>
        </div>
        <div className="destination-grid">
          {parkIdeas.map((idea) =>
            idea.href ? (
              <Link className="destination-card router-card" href={idea.href} key={idea.title}>
                <h3>{idea.title}</h3>
                <p>{idea.text}</p>
                <p className="router-detail router-next">
                  <strong>Next</strong>
                  Plan Cades Cove
                </p>
              </Link>
            ) : (
              <article className="destination-card" key={idea.title}>
                <h3>{idea.title}</h3>
                <p>{idea.text}</p>
              </article>
            ),
          )}
        </div>
      </section>

      <section className="destination-section comparison-section">
        <div className="destination-heading">
          <p className="eyebrow">Control spending by area</p>
          <h2>Cheap town-based ideas by area</h2>
        </div>
        <div className="destination-grid">
          {townIdeas.map((town) => (
            <Link className="destination-card router-card" href={town.href} key={town.title}>
              <h3>{town.title}</h3>
              <ul className="area-list">
                {town.ideas.map((idea) => (
                  <li key={idea}>{idea}</li>
                ))}
              </ul>
              <p className="router-detail router-next">
                <strong>Next</strong>
                Open {town.title} guide
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="destination-section guide-card-section">
        <div className="destination-heading">
          <p className="eyebrow">Match the budget to the group</p>
          <h2>Free and cheap ideas by trip type</h2>
        </div>
        <div className="destination-grid">
          {tripTypes.map((trip) => {
            const content = (
              <>
                <h3>{trip.title}</h3>
                <p className="router-detail">
                  <strong>Best for</strong>
                  {trip.bestFor}
                </p>
                <p className="router-detail">
                  <strong>Skip if</strong>
                  {trip.skipIf}
                </p>
                {trip.href ? (
                  <p className="router-detail router-next">
                    <strong>Next</strong>
                    Open related guide
                  </p>
                ) : null}
              </>
            );

            return trip.href ? (
              <Link className="destination-card router-card" href={trip.href} key={trip.title}>
                {content}
              </Link>
            ) : (
              <article className="destination-card" key={trip.title}>
                {content}
              </article>
            );
          })}
        </div>
      </section>

      <section className="destination-section warning-section">
        <div className="destination-heading">
          <p className="eyebrow">Protect the budget</p>
          <h2>Budget trip mistakes to avoid</h2>
        </div>
        <div className="destination-grid destination-grid-compact">
          <article className="destination-card">
            <h3>Avoid</h3>
            <ul className="area-list">
              {mistakes.map((mistake) => (
                <li key={mistake}>{mistake}</li>
              ))}
            </ul>
          </article>
          <article className="destination-card">
            <h3>Better move</h3>
            <p>
              Pick one main area, decide what is worth paying for and use the
              rest of the day to slow down. Check deals only after the plan
              makes sense.
            </p>
          </article>
        </div>
      </section>

      <section className="destination-section guide-card-section">
        <div className="destination-heading">
          <p className="eyebrow">Keep the day realistic</p>
          <h2>Simple low-cost day plans</h2>
        </div>
        <div className="destination-grid">
          {simplePlans.map((plan) => (
            <article className="destination-card" key={plan.title}>
              <h3>{plan.title}</h3>
              <p className="router-detail">
                <strong>Plan</strong>
                {plan.plan}
              </p>
              <p className="router-detail">
                <strong>Watch for</strong>
                {plan.watchFor}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="destination-section next-step-panel">
        <div className="destination-heading">
          <p className="eyebrow">Deals and coupons</p>
          <h2>Use deals to support the plan</h2>
          <p className="router-section-intro">
            Deals should support the day, not drive the whole plan. Future
            local deals and business offers will be clearly labeled.
          </p>
        </div>
        <nav className="destination-link-grid router-link-grid" aria-label="Budget Smokies planning destinations">
          {nextSteps.map((step) => (
            <Link href={step.href} key={step.href}>
              <span>{step.prompt}</span>
              <strong>{step.next}</strong>
            </Link>
          ))}
        </nav>
      </section>

      <section className="business-cta planning-desk-cta" aria-labelledby="budget-business-title">
        <div>
          <p className="eyebrow">Local businesses</p>
          <h2 id="budget-business-title">Have a budget-friendly offer, family deal or local coupon?</h2>
          <p>
            Smokies Insider Guide will eventually feature useful deals that
            help visitors plan better, not random coupon clutter.
          </p>
        </div>
        <div className="business-actions">
          <Link className="button button-primary" href="/advertise">
            Advertise With Us
          </Link>
        </div>
      </section>

      <aside className="destination-section source-note" aria-labelledby="budget-source-note">
        <p className="eyebrow">Official source note</p>
        <h2 id="budget-source-note">Check official park details before final decisions</h2>
        <p>
          Park roads, closures, parking needs and facilities can change. Check
          official Great Smoky Mountains National Park sources before going.
        </p>
        <div className="source-links">
          <a href="https://www.nps.gov/grsm/index.htm">
            Great Smoky Mountains National Park
          </a>
          <a href="https://www.nps.gov/grsm/planyourvisit/conditions.htm">
            Current conditions
          </a>
          <a href="https://www.nps.gov/grsm/planyourvisit/fees.htm">
            Parking tags
          </a>
        </div>
      </aside>
    </main>
  );
}
