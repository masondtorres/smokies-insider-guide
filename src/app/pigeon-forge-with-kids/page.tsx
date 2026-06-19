import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pigeon Forge With Kids | Family Planning Guide",
  description:
    "Plan Pigeon Forge with kids using practical advice for attractions, Dollywood, rainy days, go-karts, mini golf, dinner shows, budget control and simple family day plans.",
};

const quickPlans = [
  "One anchor attraction",
  "One simple food stop",
  "One low-pressure backup",
  "Rainy-day indoor option",
  "Evening treat or show",
  "Go-karts, mini golf or arcade only when the age mix fits",
  "Dollywood day when the family has the time and budget",
  "Parkway browsing when the group needs a lower-cost break",
];

const stopTypes = [
  {
    title: "Dollywood day",
    bestFor: "Families ready to make the park the main event.",
    planAround: "Official hours, tickets, app, maps, current rules and a tired-kid exit plan.",
    next: "Plan Dollywood day",
    href: "/dollywood-day-plan",
  },
  {
    title: "Go-karts and mini golf",
    bestFor: "Active kids when the weather and the group's age mix fit.",
    planAround: "Checking each venue's current age, height, comfort and operating rules.",
  },
  {
    title: "Arcades and indoor attractions",
    bestFor: "A rainy-day or heat backup after checking whether the stop fits the family.",
    planAround: "Setting a budget limit and checking current prices, rules and capacity.",
  },
  {
    title: "Dinner shows",
    bestFor: "Families that want the evening plan decided in advance.",
    planAround: "Checking showtimes, menus, seating, current prices and age fit before booking.",
  },
  {
    title: "Shopping and Parkway browsing",
    bestFor: "A lower-pressure filler paired with food or one small treat.",
    planAround: "Parking, traffic, impulse spending and tired legs.",
  },
];

const agePlans = [
  {
    title: "Toddlers",
    bestFor: "One short anchor plus food, rest and an easy exit.",
    watchFor: "Noise, waiting, naps and assuming a stop fits toddlers without checking.",
    next: "Smokies With Toddlers",
    href: "/smokies-with-toddlers",
  },
  {
    title: "Younger kids",
    bestFor: "Hands-on or active stops chosen after checking current rules.",
    watchFor: "Overstimulation, hunger and a backup plan that is too complicated.",
  },
  {
    title: "Older kids and teens",
    bestFor: "Giving them a say between rides, arcades, go-karts, shows or Dollywood.",
    watchFor: "Letting the wish list turn into a day full of tickets and waiting.",
  },
  {
    title: "Mixed-age families",
    bestFor: "A flexible anchor that does not make the whole day depend on one child.",
    watchFor: "Stops that leave the youngest or oldest family member with nothing workable.",
  },
];

const budgetMoves = [
  "Choose one paid anchor.",
  "Check coupons before buying.",
  "Eat before or after the main activity when it makes sense.",
  "Use free or low-cost filler between paid stops.",
  "Do not buy every add-on.",
];

const skipList = [
  "Back-to-back ticketed attractions.",
  "Late starts on crowded weekends.",
  "Attractions that do not fit the youngest or oldest child.",
  "A full day with no food plan.",
  "Assuming every indoor stop is toddler-friendly.",
  "Trying to do Dollywood and multiple other paid attractions in one day.",
];

const samplePlans = [
  {
    title: "Budget-friendly Pigeon Forge day",
    plan: "Choose one paid anchor, browse the Parkway or take a simple food break, then check deals only after the plan makes sense.",
    watchFor: "Add-ons, impulse stops, traffic and turning filler into another paid attraction.",
  },
  {
    title: "Rainy-day Pigeon Forge plan",
    plan: "Pick one indoor anchor after checking current details, add one food stop and keep one nearby backup.",
    watchFor: "Capacity, age fit, price, noise and driving back and forth across town.",
  },
  {
    title: "Dollywood-focused family day",
    plan: "Treat Dollywood as the main plan, check official details and keep the evening simple.",
    watchFor: "Tired kids, late meals and adding too much after the park.",
  },
];

const checklist = [
  "Coupons checked before buying",
  "Official hours checked",
  "Height or age rules checked",
  "Rain backup picked",
  "Food plan",
  "Parking plan",
  "Rest break",
  "Budget limit for arcades or add-ons",
  "Exit plan for tired kids",
];

const nextSteps = [
  { prompt: "Need the main town guide?", next: "Pigeon Forge Guide", href: "/pigeon-forge" },
  { prompt: "Planning a final-season Track visit?", next: "The Track Closing Guide", href: "/the-track-pigeon-forge-closing" },
  { prompt: "Planning Dollywood?", next: "Dollywood Day Plan", href: "/dollywood-day-plan" },
  { prompt: "Need a rainy-day backup?", next: "Rainy Day Smokies With Kids", href: "/rainy-day-smokies-with-kids" },
  { prompt: "Traveling with toddlers?", next: "Smokies With Toddlers", href: "/smokies-with-toddlers" },
  { prompt: "Need lower-cost ideas?", next: "Free and Cheap Smokies", href: "/free-and-cheap-smokies" },
  { prompt: "Need more activity choices?", next: "Things To Do", href: "/things-to-do" },
  { prompt: "Choosing where to stay?", next: "Where To Stay by Trip Type", href: "/where-to-stay-in-the-smokies-by-trip-type" },
  { prompt: "Comparing busy bases?", next: "Gatlinburg vs Pigeon Forge", href: "/gatlinburg-vs-pigeon-forge" },
  { prompt: "Ready to check offers?", next: "Coupons & Deals", href: "/deals" },
];

export default function PigeonForgeWithKidsPage() {
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
        <p className="eyebrow">Pigeon Forge family planning guide</p>
        <h1>Pigeon Forge With Kids</h1>
        <p>
          Pigeon Forge is built for family fun, but it is easy to overload the
          day. The better plan is to pick one main anchor, keep drive time under
          control, build in food and rest, and save a backup for rain or tired
          kids.
        </p>
        <aside className="flagship-warning-note">
          <strong>Check changing attraction details</strong>
          <p>
            Always check official attraction sites for current hours, ticket
            prices, age rules, height rules, showtimes and reservation details
            before you go.
          </p>
        </aside>
        <div className="destination-actions">
          <a className="button button-primary" href="#kid-friendly-day">
            Build a kid-friendly day <span aria-hidden="true">→</span>
          </a>
          <Link className="button button-secondary" href="/deals">
            See deals and coupons <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="destination-section quick-answer-panel" id="kid-friendly-day">
        <div className="destination-heading">
          <p className="eyebrow">Quick answer</p>
          <h2>Best Pigeon Forge plans with kids</h2>
        </div>
        <div className="destination-grid destination-grid-compact">
          <article className="destination-card">
            <h3>Build the core day</h3>
            <ul className="area-list">
              {quickPlans.slice(0, 4).map((plan) => (
                <li key={plan}>{plan}</li>
              ))}
            </ul>
          </article>
          <article className="destination-card">
            <h3>Choose extras carefully</h3>
            <ul className="area-list">
              {quickPlans.slice(4).map((plan) => (
                <li key={plan}>{plan}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="destination-section field-notes-section">
        <div className="destination-heading">
          <p className="eyebrow">The main rule</p>
          <h2>Do not stack the whole Parkway into one day</h2>
        </div>
        <aside className="flagship-warning-note">
          <strong>Pick the main thing first</strong>
          <p>
            Pigeon Forge gives families a lot of choices, but the day gets
            expensive and tiring fast when every stop needs tickets, parking,
            walking and waiting. Add smaller stops around one anchor.
          </p>
        </aside>
      </section>

      <section className="destination-section guide-card-section">
        <div className="destination-heading">
          <p className="eyebrow">Choose the anchor</p>
          <h2>Best types of Pigeon Forge stops for kids</h2>
        </div>
        <div className="destination-grid">
          {stopTypes.map((stop) => {
            const content = (
              <>
                <h3>{stop.title}</h3>
                <p className="router-detail">
                  <strong>Best for</strong>
                  {stop.bestFor}
                </p>
                <p className="router-detail">
                  <strong>Plan around</strong>
                  {stop.planAround}
                </p>
                {stop.href ? (
                  <p className="router-detail router-next">
                    <strong>Next</strong>
                    {stop.next}
                  </p>
                ) : null}
              </>
            );

            return stop.href ? (
              <Link className="destination-card router-card" href={stop.href} key={stop.title}>
                {content}
              </Link>
            ) : (
              <article className="destination-card" key={stop.title}>
                {content}
              </article>
            );
          })}
        </div>
      </section>

      <section className="destination-section comparison-section">
        <div className="destination-heading">
          <p className="eyebrow">Match the plan to the group</p>
          <h2>Best Pigeon Forge day plans by kid age</h2>
        </div>
        <div className="destination-grid">
          {agePlans.map((age) => {
            const content = (
              <>
                <h3>{age.title}</h3>
                <p className="router-detail">
                  <strong>Best for</strong>
                  {age.bestFor}
                </p>
                <p className="router-detail">
                  <strong>Watch for</strong>
                  {age.watchFor}
                </p>
                {age.href ? (
                  <p className="router-detail router-next">
                    <strong>Next</strong>
                    {age.next}
                  </p>
                ) : null}
              </>
            );

            return age.href ? (
              <Link className="destination-card router-card" href={age.href} key={age.title}>
                {content}
              </Link>
            ) : (
              <article className="destination-card" key={age.title}>
                {content}
              </article>
            );
          })}
        </div>
      </section>

      <section className="destination-section field-notes-section">
        <div className="destination-heading">
          <p className="eyebrow">Budget advice for families</p>
          <h2>How to keep Pigeon Forge from getting too expensive</h2>
        </div>
        <div className="destination-grid destination-grid-compact">
          <article className="destination-card">
            <h3>Control the paid stops</h3>
            <ul className="area-list">
              {budgetMoves.map((move) => (
                <li key={move}>{move}</li>
              ))}
            </ul>
          </article>
          <article className="destination-card">
            <h3>Make deals support the day</h3>
            <p>
              Check offers after choosing the plan. A discount is not useful if
              it pulls the family into another stop that does not fit.
            </p>
            <div className="destination-actions">
              <Link className="button button-primary" href="/free-and-cheap-smokies">
                Free and cheap guide
              </Link>
              <Link className="button button-secondary" href="/deals">
                Deals and coupons
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="destination-section field-notes-section">
        <div className="destination-heading">
          <p className="eyebrow">Weather backup</p>
          <h2>Rainy day in Pigeon Forge with kids</h2>
        </div>
        <aside className="flagship-warning-note">
          <strong>Keep the indoor plan simple</strong>
          <p>
            Indoor attractions can help, but check capacity, current rules,
            price and age fit. Pick one indoor anchor and one food stop instead
            of driving back and forth across town.
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
          <p className="eyebrow">Make the park the anchor</p>
          <h2>Dollywood with kids</h2>
        </div>
        <aside className="flagship-warning-note">
          <strong>Have a tired-kid exit plan</strong>
          <p>
            Treat Dollywood as the day&apos;s main plan. Check the official
            Dollywood site for current hours, tickets, app, maps,
            entertainment and rules before going.
          </p>
        </aside>
        <div className="destination-actions">
          <Link className="button button-primary" href="/dollywood-day-plan">
            Plan Dollywood day <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="destination-section warning-section">
        <div className="destination-heading">
          <p className="eyebrow">Protect the family day</p>
          <h2>What to skip or save for another trip</h2>
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
              Pick one anchor, plan food and rest, and save another strong
              option for a different day.
            </p>
          </article>
        </div>
      </section>

      <section className="destination-section guide-card-section">
        <div className="destination-heading">
          <p className="eyebrow">Keep timing general</p>
          <h2>Simple family day plans</h2>
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
          <p className="eyebrow">Before buying or leaving lodging</p>
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
          <h2>Go to the guide your Pigeon Forge family day needs</h2>
        </div>
        <nav className="destination-link-grid router-link-grid" aria-label="Pigeon Forge family planning destinations">
          {nextSteps.map((step) => (
            <Link href={step.href} key={step.href}>
              <span>{step.prompt}</span>
              <strong>{step.next}</strong>
            </Link>
          ))}
        </nav>
      </section>

      <section className="business-cta planning-desk-cta" aria-labelledby="pigeon-kids-business-title">
        <div>
          <p className="eyebrow">Local businesses</p>
          <h2 id="pigeon-kids-business-title">Have a useful family option or local offer?</h2>
          <p>
            Smoky Insider will eventually feature useful family
            attractions, restaurants, shows, arcades, mini golf courses and
            offers that help visitors plan better.
          </p>
        </div>
        <div className="business-actions">
          <Link className="button button-primary" href="/advertise">
            Advertise With Us
          </Link>
        </div>
      </section>

      <aside className="destination-section source-note" aria-labelledby="pigeon-kids-source-note">
        <p className="eyebrow">Official source note</p>
        <h2 id="pigeon-kids-source-note">Check official details before final decisions</h2>
        <p>
          Attraction hours, tickets, rules, showtimes and operations can
          change. Use official sources before buying or finalizing the day.
        </p>
        <div className="source-links">
          <a href="https://www.mypigeonforge.com/">
            Official Pigeon Forge tourism site
          </a>
          <a href="https://www.dollywood.com/">
            Official Dollywood site
          </a>
          <a href="https://www.nps.gov/grsm/index.htm">
            Great Smoky Mountains National Park
          </a>
        </div>
      </aside>
    </main>
  );
}
