import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Smokies With Toddlers | Easy Family Planning Guide",
  description:
    "Plan a Smoky Mountains trip with toddlers using practical advice for short park stops, easy town days, naps, stroller judgment, rainy-day backups and family-friendly pacing.",
};

const quickPlans = [
  "Short park stops",
  "Creek and picnic time when conditions fit",
  "Easy town walks",
  "One paid attraction at a time",
  "Cabin reset time",
  "Rainy-day indoor backup",
  "Early starts before crowds build",
  "Simple meals instead of complicated dining plans",
];

const planningRules = [
  {
    title: "Keep the first stop easy",
    text: "Start with a short, flexible stop so the day can adjust before everyone is tired.",
  },
  {
    title: "Choose one anchor activity",
    text: "One main activity plus food and a reset is often enough.",
  },
  {
    title: "Protect nap and meal windows",
    text: "Stay close to food, lodging or an easy reset when the toddler usually needs one.",
  },
  {
    title: "Avoid crossing towns all day",
    text: "Long drives and repeated parking can use up the family's patience quickly.",
  },
  {
    title: "Build in a reset stop",
    text: "Leave room for a cabin break, quiet snack, change of clothes or simple drive.",
  },
  {
    title: "Keep a rain backup",
    text: "Choose the backup before weather changes the plan.",
    href: "/rainy-day-smokies-with-kids",
  },
];

const areaPlans = [
  {
    title: "Gatlinburg",
    bestFor: "Families that want to park once and keep stops close together.",
    watchFor: "Crowds, stroller fatigue, wet walking and trying to do too much downtown.",
    plan: "Use short strolls, snacks and one simple attraction.",
    href: "/gatlinburg",
  },
  {
    title: "Pigeon Forge",
    bestFor: "Family attractions and car-based movement.",
    watchFor: "Parkway traffic and stacking too many tickets in one day.",
    plan: "Pick one paid anchor activity and keep the rest simple.",
    href: "/pigeon-forge",
  },
  {
    title: "Sevierville",
    bestFor: "A calmer reset day with food, shopping and simple stops.",
    watchFor: "Spreading errands or stops too far apart.",
    plan: "Use the area when the family needs practical pacing.",
    href: "/sevierville",
  },
  {
    title: "Townsend",
    bestFor: "Quiet-side outdoor time, picnics and scenic-drive days.",
    watchFor: "Fewer attraction-style options and changing park conditions.",
    plan: "Keep creek, picnic or outdoor plans flexible and check access first.",
    href: "/townsend",
  },
];

const parkIdeas = [
  {
    title: "Scenic drives",
    text: "Useful when the group needs a lower-walking plan. Check roads and conditions first.",
  },
  {
    title: "Picnic areas and creek stops",
    text: "Keep the stop flexible and check current access, facilities and safety guidance before going.",
  },
  {
    title: "Visitor centers",
    text: "Consider them when they fit the route, but check current facility details before depending on one.",
  },
  {
    title: "Short walks",
    text: "Choose by current conditions and the group's real walking ability. Use stroller or carrier judgment for the specific route.",
  },
  {
    title: "Cades Cove",
    text: "Use timing caution. The loop can be slow, so food, patience and the rest of the day matter.",
    href: "/cades-cove-first-time-guide",
  },
];

const skipList = [
  "Long hikes.",
  "Overpacked Parkway days.",
  "Back-to-back ticketed attractions.",
  "Late starts on heavy crowd days.",
  "Plans that depend on perfect naps.",
  "Remote park stops without checking facilities and conditions.",
  "Any plan that requires the toddler to behave like a seven-year-old.",
];

const samplePlans = [
  {
    title: "Easy Gatlinburg half-day",
    plan: "Park with the return trip in mind, keep the walk short, add one snack or meal and stop before the group is worn out.",
    watchFor: "Crowds, weather, stroller fatigue and getting back to the car.",
  },
  {
    title: "Pigeon Forge one-attraction day",
    plan: "Choose one attraction after checking its current details, then add a simple meal and cabin or lodging reset.",
    watchFor: "Ticket timing, noise, overstimulation and Parkway traffic.",
  },
  {
    title: "Townsend quiet-side outdoor day",
    plan: "Check conditions, choose one simple outdoor stop and keep food and the drive flexible.",
    watchFor: "Weather, facilities, creek safety and turning a slow day into a long one.",
  },
];

const checklist = [
  "Snacks",
  "Water",
  "Weather layer",
  "Stroller or carrier judgment",
  "Change of clothes",
  "Nap plan",
  "Rain backup",
  "Parking tag awareness for park stops",
  "Downloaded maps or saved directions where service may drop",
];

const nextSteps = [
  { prompt: "Need a rainy-day backup?", next: "Rainy Day Smokies With Kids", href: "/rainy-day-smokies-with-kids" },
  { prompt: "Need lower-cost ideas?", next: "Free and Cheap Smokies", href: "/free-and-cheap-smokies" },
  { prompt: "Need activity options?", next: "Things To Do", href: "/things-to-do" },
  { prompt: "Planning Cades Cove?", next: "Cades Cove First-Time Guide", href: "/cades-cove-first-time-guide" },
  { prompt: "Choosing where to stay?", next: "Where To Stay by Trip Type", href: "/where-to-stay-in-the-smokies-by-trip-type" },
  { prompt: "Want offers after choosing the day?", next: "Coupons & Deals", href: "/deals" },
];

export default function SmokiesWithToddlersPage() {
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
        <p className="eyebrow">Smokies family planning guide</p>
        <h1>Smokies With Toddlers</h1>
        <p>
          Toddlers can have a good Smokies trip, but the plan has to be honest.
          Shorter stops, easier parking, nap breaks, food timing, bathrooms and
          backup plans matter more than packing the day full.
        </p>
        <aside className="flagship-warning-note">
          <strong>Check changing details</strong>
          <p>
            Always check official sources before finalizing park plans,
            attraction hours, ticket prices, road conditions and parking rules.
          </p>
        </aside>
        <div className="destination-actions">
          <a className="button button-primary" href="#toddler-planning">
            Start with toddler-friendly planning <span aria-hidden="true">→</span>
          </a>
          <Link className="button button-secondary" href="/rainy-day-smokies-with-kids">
            See rainy day ideas <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="destination-section quick-answer-panel" id="toddler-planning">
        <div className="destination-heading">
          <p className="eyebrow">Quick answer</p>
          <h2>Best Smokies plans with toddlers</h2>
        </div>
        <div className="destination-grid destination-grid-compact">
          <article className="destination-card">
            <h3>Keep stops simple</h3>
            <ul className="area-list">
              {quickPlans.slice(0, 4).map((plan) => (
                <li key={plan}>{plan}</li>
              ))}
            </ul>
          </article>
          <article className="destination-card">
            <h3>Protect the reset</h3>
            <ul className="area-list">
              {quickPlans.slice(4).map((plan) => (
                <li key={plan}>{plan}</li>
              ))}
            </ul>
          </article>
        </div>
        <p className="router-section-intro">
          Do not assume a place always fits toddlers. Check current attraction,
          route, facility and parking details before depending on a stop.
        </p>
      </section>

      <section className="destination-section guide-card-section">
        <div className="destination-heading">
          <p className="eyebrow">Toddler planning rules</p>
          <h2>Plan around the toddler, not the map</h2>
        </div>
        <div className="destination-grid">
          {planningRules.map((rule) =>
            rule.href ? (
              <Link className="destination-card router-card" href={rule.href} key={rule.title}>
                <h3>{rule.title}</h3>
                <p>{rule.text}</p>
                <p className="router-detail router-next">
                  <strong>Next</strong>
                  Plan a rainy day
                </p>
              </Link>
            ) : (
              <article className="destination-card" key={rule.title}>
                <h3>{rule.title}</h3>
                <p>{rule.text}</p>
              </article>
            ),
          )}
        </div>
      </section>

      <section className="destination-section comparison-section">
        <div className="destination-heading">
          <p className="eyebrow">Choose the right base</p>
          <h2>Best areas for toddler trips</h2>
        </div>
        <div className="destination-grid">
          {areaPlans.map((area) => (
            <Link className="destination-card router-card" href={area.href} key={area.title}>
              <h3>{area.title}</h3>
              <p className="router-detail">
                <strong>Best for</strong>
                {area.bestFor}
              </p>
              <p className="router-detail">
                <strong>Watch for</strong>
                {area.watchFor}
              </p>
              <p className="router-detail">
                <strong>Plan</strong>
                {area.plan}
              </p>
              <p className="router-detail router-next">
                <strong>Next</strong>
                Open {area.title} guide
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="destination-section guide-card-section">
        <div className="destination-heading">
          <p className="eyebrow">Keep park time flexible</p>
          <h2>Park ideas with toddlers</h2>
          <p className="router-section-intro">
            Check NPS current conditions, parking tags, road closures and safety
            guidance before finalizing park plans.
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

      <section className="destination-section warning-section">
        <div className="destination-heading">
          <p className="eyebrow">Protect the family day</p>
          <h2>What to skip or save for later</h2>
        </div>
        <div className="destination-grid destination-grid-compact">
          <article className="destination-card">
            <h3>Skip or save</h3>
            <ul className="area-list">
              {skipList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="destination-card">
            <h3>Better move</h3>
            <p>
              Choose one anchor, protect food and nap windows, and stop while
              the day is still working.
            </p>
          </article>
        </div>
      </section>

      <section className="destination-section field-notes-section">
        <div className="destination-heading">
          <p className="eyebrow">Weather backup</p>
          <h2>Rainy day with toddlers</h2>
        </div>
        <aside className="flagship-warning-note">
          <strong>One indoor anchor is often enough</strong>
          <p>
            Choose indoor stops carefully, keep drive time short and do not
            assume every indoor attraction fits toddlers. Snacks, current
            stroller rules and noise level can matter.
          </p>
        </aside>
        <div className="destination-actions">
          <Link className="button button-primary" href="/rainy-day-smokies-with-kids">
            Plan a rainy day <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="destination-section field-notes-section">
        <div className="destination-heading">
          <p className="eyebrow">Budget-friendly reset</p>
          <h2>Free and cheap toddler ideas</h2>
        </div>
        <div className="destination-grid destination-grid-compact">
          <article className="destination-card">
            <h3>Keep the day light</h3>
            <p>
              Consider creek time when conditions fit, picnic time, simple
              walks, window shopping or a cabin reset.
            </p>
          </article>
          <article className="destination-card">
            <h3>Choose one small extra</h3>
            <p>
              One low-cost treat can work better than a full ticket-heavy day.
            </p>
          </article>
        </div>
        <div className="destination-actions">
          <Link className="button button-primary" href="/free-and-cheap-smokies">
            Open free and cheap guide <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="destination-section guide-card-section">
        <div className="destination-heading">
          <p className="eyebrow">Keep timing general</p>
          <h2>Sample toddler-friendly day plans</h2>
        </div>
        <div className="destination-grid">
          {samplePlans.map((plan) => (
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

      <section className="destination-section field-notes-section">
        <div className="destination-heading">
          <p className="eyebrow">Before leaving lodging</p>
          <h2>Parent checklist</h2>
        </div>
        <article className="destination-card">
          <ul className="area-list">
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="destination-section next-step-panel">
        <div className="destination-heading">
          <p className="eyebrow">Best next step</p>
          <h2>Go to the guide your family day needs</h2>
        </div>
        <nav className="destination-link-grid router-link-grid" aria-label="Toddler trip planning destinations">
          {nextSteps.map((step) => (
            <Link href={step.href} key={step.href}>
              <span>{step.prompt}</span>
              <strong>{step.next}</strong>
            </Link>
          ))}
        </nav>
      </section>

      <section className="business-cta planning-desk-cta" aria-labelledby="toddler-business-title">
        <div>
          <p className="eyebrow">Local businesses</p>
          <h2 id="toddler-business-title">Have an easy stop or family offer for parents with young kids?</h2>
          <p>
            Smokies Insider Guide will eventually feature useful local options
            that help families plan better.
          </p>
        </div>
        <div className="business-actions">
          <Link className="button button-primary" href="/advertise">
            Advertise With Us
          </Link>
        </div>
      </section>

      <aside className="destination-section source-note" aria-labelledby="toddler-source-note">
        <p className="eyebrow">Official source note</p>
        <h2 id="toddler-source-note">Check official park details before final decisions</h2>
        <p>
          Park roads, closures, parking needs, facilities and safety guidance
          can change. Check official Great Smoky Mountains National Park
          sources before going.
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
