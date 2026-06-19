import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dollywood Day Plan: How To Build a Better Pigeon Forge Day",
  description:
    "Plan a Dollywood-centered Pigeon Forge day without overpacking meals, attractions, traffic and the evening.",
};

const strategies = [
  {
    title: "Arrive with a simple plan",
    goodIf: "You want the day to feel easier.",
    planAround: "Parking, tickets, showtimes, meals and the first area you want to visit.",
    next: "Official Dollywood planning",
    href: "https://www.dollywood.com/plan-your-visit/",
    external: true,
  },
  {
    title: "Use the official app",
    goodIf: "You want help with the map, ride waits and show schedule.",
    planAround: "Checking details before the group starts wandering.",
    next: "Dollywood map and app",
    href: "https://www.dollywood.com/themepark/map/",
    external: true,
  },
  {
    title: "Plan meals before everyone is hungry",
    goodIf: "You have kids, mixed ages or a long park day.",
    planAround: "Eating before the whole group crashes.",
    next: "Eat, Stay & Shop",
    href: "/eat-stay-shop",
    external: false,
  },
  {
    title: "Keep the evening simple",
    goodIf: "You want to enjoy the park without dragging the group through three more stops.",
    planAround: "One meal, one easy stop or heading back to your lodging.",
    next: "Where To Stay",
    href: "/where-to-stay-in-the-smokies-by-trip-type",
    external: false,
  },
  {
    title: "Keep a weather backup",
    goodIf: "Rain may change the day.",
    planAround: "Shows, food, indoor breaks and a second plan outside the park if needed.",
    next: "Rainy Day With Kids",
    href: "/rainy-day-smokies-with-kids",
    external: false,
  },
];

const tripShapes = [
  {
    title: "Full Dollywood day",
    bestFor: "Families, first-time visitors and groups who want the park to be the main event.",
    watchFor: "Tired kids, late meals and trying to add too much after.",
  },
  {
    title: "Dollywood plus simple dinner",
    bestFor: "Most families.",
    watchFor: "Leaving the park exhausted and then choosing food too late.",
  },
  {
    title: "Dollywood plus Pigeon Forge evening",
    bestFor: "Visitors with older kids or more energy.",
    watchFor: "Traffic, showtimes and stacking paid stops.",
  },
  {
    title: "Dollywood plus Gatlinburg",
    bestFor: "Longer trips where Gatlinburg is on a different day.",
    watchFor: "Turning one park day into a rushed two-town plan.",
  },
  {
    title: "Dollywood plus cabin night",
    bestFor: "Families who need an easier finish.",
    watchFor: "Getting supplies or dinner figured out before everyone is worn out.",
  },
];

const avoidList = [
  "Treating Dollywood as a quick stop.",
  "Adding too many paid attractions after the park.",
  "Waiting too long to plan meals.",
  "Scheduling a full Gatlinburg walking night after a long park day.",
  "Ignoring official hours, tickets, showtimes and weather.",
];

const simplePlans = [
  {
    title: "Family-first Dollywood day",
    bestFor: "Kids, mixed ages and first-time visitors.",
    plan: "Arrive with one priority, use the map, plan food early and keep the evening easy.",
  },
  {
    title: "Rain-aware Dollywood day",
    bestFor: "Days with uncertain weather.",
    plan: "Check the forecast, use shows or indoor breaks when needed and keep a backup outside the park.",
  },
  {
    title: "Budget-control Dollywood day",
    bestFor: "Families watching the full trip cost.",
    plan: "Choose the park as the paid anchor, simplify the rest of the day and check deals only after the plan makes sense.",
  },
  {
    title: "Low-stress lodging day",
    bestFor: "Visitors staying near Pigeon Forge or Sevierville.",
    plan: "Keep the drive simple, avoid extra town-hopping and end near your lodging.",
  },
];

const nextSteps = [
  {
    prompt: "Need the Pigeon Forge base guide?",
    next: "Pigeon Forge Guide",
    href: "/pigeon-forge",
    external: false,
  },
  {
    prompt: "Still choosing where to stay?",
    next: "Where To Stay by Trip Type",
    href: "/where-to-stay-in-the-smokies-by-trip-type",
    external: false,
  },
  {
    prompt: "Need rainy-day backup?",
    next: "Rainy Day Smokies With Kids",
    href: "/rainy-day-smokies-with-kids",
    external: false,
  },
  {
    prompt: "Need food or shopping?",
    next: "Eat, Stay & Shop",
    href: "/eat-stay-shop",
    external: false,
  },
  {
    prompt: "Want offers after choosing the day?",
    next: "Coupons & Deals",
    href: "/deals",
    external: false,
  },
  {
    prompt: "Need official Dollywood info?",
    next: "Official Dollywood Plan Your Visit",
    href: "https://www.dollywood.com/plan-your-visit/",
    external: true,
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

export default function DollywoodDayPlanPage() {
  return (
    <main className="destination-page">
      <header className="destination-header">
        <Link className="wordmark" href="/">
          Smoky Insider
        </Link>
        <Link className="back-link" href="/pigeon-forge">
          Pigeon Forge Guide
        </Link>
      </header>

      <section className="destination-hero">
        <p className="eyebrow">Dollywood planning guide</p>
        <h1>Dollywood Day Plan: How To Build a Better Pigeon Forge Day</h1>
        <p>
          A good Dollywood day starts before you enter the park. Pick Dollywood
          as the anchor, keep the rest of the day simple and leave room for
          meals, traffic, tired kids and weather.
        </p>
      </section>

      <section className="destination-section quick-answer-panel">
        <div className="destination-heading">
          <p className="eyebrow">Start here</p>
          <h2>Quick answer</h2>
        </div>
        <div className="destination-grid destination-grid-compact">
          <article className="destination-card">
            <h3>Build around the park</h3>
            <p>
              If Dollywood is the anchor, build the day around it. Do not stack
              a full Pigeon Forge attraction day on top of the park.
            </p>
          </article>
          <article className="destination-card">
            <h3>Keep the rest simple</h3>
            <p>
              Choose one main park day, one simple meal plan and one backup.
              Save shopping, a big dinner and a late Gatlinburg plan for
              another day.
            </p>
          </article>
        </div>
        <div className="destination-actions">
          <Link className="button button-primary" href="/pigeon-forge">
            Pigeon Forge Guide
          </Link>
          <Link className="button button-secondary" href="/rainy-day-smokies-with-kids">
            Rainy Day With Kids
          </Link>
          <Link className="button button-secondary" href="/where-to-stay-in-the-smokies-by-trip-type">
            Where To Stay
          </Link>
        </div>
      </section>

      <section className="destination-section field-notes-section">
        <div className="destination-heading">
          <p className="eyebrow">Park-day field note</p>
          <h2>Make Dollywood the anchor</h2>
        </div>
        <aside className="flagship-warning-note">
          <strong>Keep the day focused</strong>
          <p>
            A Dollywood day works best when the park is the main event, not one
            stop in a packed list.
          </p>
        </aside>
      </section>

      <section className="destination-section guide-card-section">
        <div className="destination-heading">
          <p className="eyebrow">Build an easier park day</p>
          <h2>Best Dollywood day strategy</h2>
        </div>
        <div className="destination-grid">
          {strategies.map((strategy) => (
            <StrategyCard strategy={strategy} key={strategy.title} />
          ))}
        </div>
      </section>

      <section className="destination-section comparison-section">
        <div className="destination-heading">
          <p className="eyebrow">Keep the rest of the day realistic</p>
          <h2>Best trip shape for Dollywood</h2>
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
          <p className="eyebrow">Protect the park day</p>
          <h2>What to avoid on a Dollywood day</h2>
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
              Pick Dollywood as the anchor. Add one meal plan. Keep one backup.
              Save the heavy extras for another day.
            </p>
          </article>
        </div>
      </section>

      <section className="destination-section guide-card-section">
        <div className="destination-heading">
          <p className="eyebrow">Choose the pace that fits</p>
          <h2>Simple Dollywood day plans</h2>
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
          <h2>Go to the guide your Dollywood day needs</h2>
        </div>
        <nav className="destination-link-grid router-link-grid" aria-label="Dollywood day guide next steps">
          {nextSteps.map((step) =>
            step.external ? (
              <a href={step.href} key={step.href}>
                <span>{step.prompt}</span>
                <strong>{step.next}</strong>
              </a>
            ) : (
              <Link href={step.href} key={step.href}>
                <span>{step.prompt}</span>
                <strong>{step.next}</strong>
              </Link>
            ),
          )}
        </nav>
      </section>

      <aside className="destination-section source-note" aria-labelledby="dollywood-source-note">
        <p className="eyebrow">Official source note</p>
        <h2 id="dollywood-source-note">Check official Dollywood details before final decisions</h2>
        <p>
          Dollywood hours, tickets, shows, events, ride details and park
          operations can change. Check official Dollywood sources before final
          decisions.
        </p>
        <article className="destination-card router-card-compact">
          <p className="eyebrow">Before you buy tickets</p>
          <h3>Military and veteran discounts</h3>
          <p>
            Eligible U.S. military members, veterans, reservists, spouses and
            dependents should check Dollywood&apos;s official military discount
            page before buying tickets or passes. Verification and offer
            details can change.
          </p>
          <div className="source-links">
            <a href="https://www.dollywood.com/deals/special-offers/military-discount/">
              Official Dollywood Military Discount
            </a>
          </div>
        </article>
        <div className="source-links">
          <a href="https://www.dollywood.com/plan-your-visit/">
            Official Dollywood Plan Your Visit
          </a>
          <a href="https://www.dollywood.com/calendar">
            Dollywood calendar and hours
          </a>
          <a href="https://www.dollywood.com/themepark/map/">
            Dollywood map and app
          </a>
          <a href="https://www.dollywood.com/tickets/">
            Dollywood tickets
          </a>
        </div>
      </aside>
    </main>
  );
}
