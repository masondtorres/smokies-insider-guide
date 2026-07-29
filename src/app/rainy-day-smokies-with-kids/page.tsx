import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rainy Day Smokies With Kids: What To Do When the Weather Changes",
  description:
    "Build a simple rainy-day Smokies plan for kids with one indoor anchor, a food stop, realistic walking and a backup.",
};

const strategies = [
  {
    title: "Pick one indoor anchor",
    goodIf: "The weather changes your outdoor plan.",
    planAround: "Tickets, timing, parking and how long your kids can stay interested.",
    next: "Things To Do",
    href: "/things-to-do",
  },
  {
    title: "Add one food stop",
    goodIf: "The day needs a reset.",
    planAround: "Meal timing, waits and not letting hungry kids decide the schedule.",
    next: "Eat, Stay & Shop",
    href: "/eat-stay-shop",
  },
  {
    title: "Keep walking low",
    goodIf: "You have toddlers, grandparents or tired kids.",
    planAround: "Parking, stairs, long sidewalks and getting back to the car.",
    next: "Visitor Resources",
    href: "/visitor-resources",
  },
  {
    title: "Choose one town",
    goodIf: "Traffic and weather are already working against you.",
    planAround: "Not bouncing across Gatlinburg, Pigeon Forge and Sevierville in one rainy afternoon.",
    next: "Start Planning",
    href: "/start-planning",
  },
  {
    title: "Keep one backup",
    goodIf: "Your first idea is crowded or sold out.",
    planAround: "Weather, crowds and timing.",
    next: "Coupons & Deals",
    href: "/deals",
  },
];

const rainyBases = [
  {
    title: "Pigeon Forge",
    bestFor: "Family attractions, indoor options, shows, shopping and activity variety.",
    watchFor: "Parkway traffic, ticket timing and trying to cram too much into one day.",
    next: "Pigeon Forge Guide",
    href: "/pigeon-forge",
  },
  {
    title: "Gatlinburg",
    bestFor: "Food, shops, short downtown stops and a more walkable rainy-day plan once parked.",
    watchFor: "Parking, crowds and wet walking.",
    next: "Gatlinburg Guide",
    href: "/gatlinburg",
  },
  {
    title: "Sevierville",
    bestFor: "Shopping, food stops, local errands and easier positioning.",
    watchFor: "Drive time and spreading the day too wide.",
    next: "Sevierville Guide",
    href: "/sevierville",
  },
  {
    title: "Townsend",
    bestFor: "Quiet cabin time, slower meals and simple low-pressure plans.",
    watchFor: "Fewer attraction-style rainy-day options.",
    next: "Townsend Guide",
    href: "/townsend",
  },
];

const avoidList = [
  "Driving across every town chasing one more thing.",
  "Starting a long park plan without checking conditions.",
  "Waiting until everyone is tired and hungry to choose food.",
  "Assuming indoor stops will be empty just because it is raining.",
  "Turning the day into a schedule packed with paid activities.",
];

const simplePlans = [
  {
    title: "Low-stress rainy day",
    bestFor: "Toddlers, grandparents or tired families.",
    plan: "One indoor stop, one meal, one short shopping or snack stop.",
  },
  {
    title: "Pigeon Forge rainy day",
    bestFor: "Kids who need activity options.",
    plan: "One attraction, one food stop, one backup.",
  },
  {
    title: "Gatlinburg rainy day",
    bestFor: "Families already near downtown.",
    plan: "Park once, keep stops close together and do not over-walk the group.",
  },
  {
    title: "Cabin rainy day",
    bestFor: "Families who need a reset.",
    plan: "Groceries or takeout, games, naps, hot drinks and a simple evening plan.",
  },
  {
    title: "Budget rainy day",
    bestFor: "Families trying to control costs.",
    plan: "Choose free or lower-cost stops first, then check deals after the plan makes sense.",
  },
];

const nextSteps = [
  {
    prompt: "Need activity ideas?",
    next: "Things To Do",
    href: "/things-to-do",
  },
  {
    prompt: "Need food or shopping?",
    next: "Eat, Stay & Shop",
    href: "/eat-stay-shop",
  },
  {
    prompt: "Need to pick the right town?",
    next: "Start Planning",
    href: "/start-planning",
  },
  {
    prompt: "Need Pigeon Forge options?",
    next: "Pigeon Forge Guide",
    href: "/pigeon-forge",
  },
  {
    prompt: "Need Gatlinburg options?",
    next: "Gatlinburg Guide",
    href: "/gatlinburg",
  },
  {
    prompt: "Want offers after choosing the day?",
    next: "Coupons & Deals",
    href: "/deals",
  },
];

export default function RainyDaySmokiesWithKidsPage() {
  return (
    <main className="destination-page">
      <header className="destination-header">
        <Link className="wordmark" href="/">
          Smoky Insider
        </Link>
        <Link className="back-link" href="/things-to-do">
          Things To Do
        </Link>
      </header>

      <section className="destination-hero">
        <p className="eyebrow">Rainy day family guide</p>
        <h1>Rainy Day Smokies With Kids: What To Do When the Weather Changes</h1>
        <p>
          Rain does not have to ruin a Smokies trip, but it does change the day.
          The best rainy-day plan for kids is simple: pick one indoor anchor,
          add one food stop, keep walking realistic and avoid bouncing across
          three towns.
        </p>
      </section>

      <section className="destination-section quick-answer-panel">
        <div className="destination-heading">
          <p className="eyebrow">Start here</p>
          <h2>Quick answer</h2>
        </div>
        <div className="destination-grid destination-grid-compact">
          <article className="destination-card">
            <h3>Build a simple rainy-day plan</h3>
            <p>
              Do not chase every indoor option. Pick one main activity, one
              meal or snack stop and one backup.
            </p>
          </article>
          <article className="destination-card">
            <h3>Choose the town that fits</h3>
            <p>
              Pigeon Forge works well for attraction-style days. Gatlinburg can
              work for food, shops and shorter downtown stops. Sevierville can
              work for shopping and easier positioning.
            </p>
          </article>
        </div>
        <div className="destination-actions">
          <Link className="button button-primary" href="/things-to-do">
            Things To Do
          </Link>
          <Link className="button button-secondary" href="/pigeon-forge">
            Pigeon Forge Guide
          </Link>
          <Link className="button button-secondary" href="/start-planning">
            Start Planning
          </Link>
        </div>
      </section>

      <section className="destination-section field-notes-section">
        <div className="destination-heading">
          <p className="eyebrow">Weather field note</p>
          <h2>Rain happens here. Plan for it.</h2>
        </div>
        <aside className="flagship-warning-note">
          <strong>Keep one indoor backup ready</strong>
          <p>
            Higher elevations in the Smokies can be much wetter than the towns
            below, so a dry morning does not guarantee a dry day.
          </p>
        </aside>
      </section>

      <section className="destination-section guide-card-section">
        <div className="destination-heading">
          <p className="eyebrow">Keep the day manageable</p>
          <h2>Best rainy-day strategy with kids</h2>
        </div>
        <div className="destination-grid">
          {strategies.map((strategy) => (
            <Link className="destination-card router-card" href={strategy.href} key={strategy.title}>
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
            </Link>
          ))}
        </div>
      </section>

      <section className="destination-section comparison-section">
        <div className="destination-heading">
          <p className="eyebrow">Choose one town</p>
          <h2>Best rainy-day base</h2>
        </div>
        <div className="destination-grid lodging-base-grid">
          {rainyBases.map((base) => (
            <article className="destination-card flagship-trip-card" key={base.title}>
              <h3>{base.title}</h3>
              <p className="router-detail">
                <strong>Best for</strong>
                {base.bestFor}
              </p>
              <p className="router-detail">
                <strong>Watch for</strong>
                {base.watchFor}
              </p>
              <div className="flagship-card-links">
                <Link href={base.href}>{base.next}</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="destination-section warning-section">
        <div className="destination-heading">
          <p className="eyebrow">Keep the day from getting harder</p>
          <h2>What to avoid on a rainy day</h2>
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
              Pick one anchor. Add food. Keep one backup. Leave room for
              traffic and tired kids.
            </p>
          </article>
        </div>
      </section>

      <section className="destination-section guide-card-section">
        <div className="destination-heading">
          <p className="eyebrow">Plans that stay realistic</p>
          <h2>Simple rainy-day plan options</h2>
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
          <h2>Go to the guide your rainy day needs</h2>
        </div>
        <nav className="destination-link-grid router-link-grid" aria-label="Rainy-day guide next steps">
          {nextSteps.map((step) => (
            <Link href={step.href} key={step.href}>
              <span>{step.prompt}</span>
              <strong>{step.next}</strong>
            </Link>
          ))}
        </nav>
      </section>

      <aside className="destination-section source-note" aria-labelledby="rainy-day-source-note">
        <p className="eyebrow">Official source note</p>
        <h2 id="rainy-day-source-note">Check official park weather and conditions</h2>
        <p>
          Smokies weather can change quickly, especially by elevation. Check
          official Great Smoky Mountains National Park sources before final
          National Park decisions.
        </p>
        <div className="source-links">
          <a href="https://www.nps.gov/grsm/planyourvisit/conditions.htm">
            Current conditions
          </a>
          <a href="https://www.nps.gov/grsm/planyourvisit/weather.htm">
            Weather
          </a>
          <a href="https://www.nps.gov/grsm/planyourvisit/fees.htm">
            Parking tags
          </a>
        </div>
      </aside>
    </main>
  );
}
