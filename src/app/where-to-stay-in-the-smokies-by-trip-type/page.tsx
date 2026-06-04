import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Where to Stay in the Smokies by Trip Type",
  description:
    "Choose the best Smokies base for your trip type before booking lodging in Gatlinburg, Pigeon Forge, Sevierville or Townsend.",
};

const quickAnswers = [
  {
    title: "Stay in Gatlinburg",
    text: "Best when walkability and park access matter most.",
  },
  {
    title: "Stay in Pigeon Forge",
    text: "Best when family attractions, shows or Dollywood are the anchor.",
  },
  {
    title: "Stay in Sevierville",
    text: "Best for gateway positioning, shopping, local stops and flexible access.",
  },
  {
    title: "Stay in Townsend",
    text: "Best for a quieter base, Cades Cove access and slower mountain days.",
  },
];

const tripTypes = [
  {
    title: "First-time Smokies trip",
    bestBase: "Gatlinburg or Pigeon Forge",
    why: "Gatlinburg works better for walkability and park access. Pigeon Forge works better for family attractions and activity variety.",
    planAround: "Parking, traffic and not trying to do every town in one day.",
    links: [
      { label: "Gatlinburg", href: "/gatlinburg" },
      { label: "Pigeon Forge", href: "/pigeon-forge" },
    ],
  },
  {
    title: "Dollywood trip",
    bestBase: "Pigeon Forge or Sevierville",
    why: "Pigeon Forge keeps the trip closer to the attraction core. Sevierville can work if you want more positioning flexibility.",
    planAround: "Traffic, arrival timing and meals.",
    links: [
      { label: "Pigeon Forge", href: "/pigeon-forge" },
      { label: "Sevierville", href: "/sevierville" },
    ],
  },
  {
    title: "National Park-focused trip",
    bestBase: "Gatlinburg or Townsend",
    why: "Gatlinburg works well for park-side access and downtown planning. Townsend works well for quieter park days and Cades Cove access.",
    planAround: "Current conditions, parking tags, road changes and weather.",
    links: [
      { label: "Gatlinburg", href: "/gatlinburg" },
      { label: "Townsend", href: "/townsend" },
    ],
  },
  {
    title: "Quiet cabin trip",
    bestBase: "Townsend, Wears Valley or Sevierville area",
    why: "These areas can work better when the goal is slower mornings, cabin time, scenic drives and flexible meals.",
    planAround: "Drive time to attractions and food stops.",
    links: [
      { label: "Townsend", href: "/townsend" },
      { label: "Sevierville", href: "/sevierville" },
    ],
  },
  {
    title: "Family attraction trip",
    bestBase: "Pigeon Forge",
    why: "Pigeon Forge is strongest when kids, mixed ages, shows, attractions and indoor backups shape the trip.",
    planAround: "Meal breaks, ticket timing and not stacking too many paid stops.",
    links: [{ label: "Pigeon Forge", href: "/pigeon-forge" }],
  },
  {
    title: "Low-walking trip",
    bestBase: "Pigeon Forge or Sevierville",
    why: "These can work better when you plan drive-to stops carefully. Gatlinburg can still be useful, but downtown walking may be harder for some groups.",
    planAround: "Parking, distance from lodging to stops and realistic group energy.",
    links: [
      { label: "Pigeon Forge", href: "/pigeon-forge" },
      { label: "Sevierville", href: "/sevierville" },
    ],
  },
  {
    title: "Budget-control trip",
    bestBase: "Depends on the day plan",
    why: "The cheapest room or cabin is not always the cheapest trip if it adds too much driving, parking stress or wasted time.",
    planAround: "Location, meals, drive time and verified deals after the plan makes sense.",
    links: [
      { label: "Coupons & Deals", href: "/deals" },
      { label: "Start Planning", href: "/start-planning" },
    ],
  },
];

const baseWins = [
  {
    title: "Gatlinburg wins when",
    items: [
      "You want downtown walking.",
      "You want park access to shape the day.",
      "You want restaurants, shops and attractions close together.",
      "Your group can handle crowds and walking.",
    ],
  },
  {
    title: "Pigeon Forge wins when",
    items: [
      "You want family attractions.",
      "Dollywood, shows or ticketed stops matter.",
      "You want more rainy-day backups.",
      "Your group does better driving between stops than walking downtown.",
    ],
  },
  {
    title: "Sevierville wins when",
    items: [
      "You want gateway positioning.",
      "Shopping, local stops or lodging flexibility matter.",
      "You want access to nearby areas without staying in the busiest core.",
      "Your plans spread across more than one town.",
    ],
  },
  {
    title: "Townsend wins when",
    items: [
      "You want a quieter Smokies base.",
      "Cades Cove or scenic drives matter.",
      "Cabin time and slower days matter.",
      "You want less attraction-heavy planning.",
    ],
  },
];

const lodgingMistakes = [
  {
    title: "Booking the cheapest place before choosing the day",
    betterMove: "Pick the main trip shape first, then choose lodging that supports it.",
  },
  {
    title: "Treating every town like one quick loop",
    betterMove: "Choose one main area per day and pair lightly.",
  },
  {
    title: "Booking far from food, parking or the main attraction",
    betterMove: "Check how the lodging location affects meals, parking, drive time and tired kids.",
  },
  {
    title: "Planning a National Park day without checking official sources",
    betterMove: "Check current conditions and parking tag information before final park decisions.",
  },
];

const nextSteps = [
  {
    prompt: "Still choosing towns?",
    next: "Gatlinburg vs Pigeon Forge",
    href: "/gatlinburg-vs-pigeon-forge",
  },
  {
    prompt: "Need a full planning start?",
    next: "Start Planning",
    href: "/start-planning",
  },
  {
    prompt: "Need activities?",
    next: "Things To Do",
    href: "/things-to-do",
  },
  {
    prompt: "Need food, shopping or lodging direction?",
    next: "Eat, Stay & Shop",
    href: "/eat-stay-shop",
  },
  {
    prompt: "Need park basics?",
    next: "Visitor Resources",
    href: "/visitor-resources",
  },
  {
    prompt: "Want offers after choosing the day?",
    next: "Coupons & Deals",
    href: "/deals",
  },
];

export default function WhereToStayByTripTypePage() {
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
        <p className="eyebrow">Lodging decision guide</p>
        <h1>Where to Stay in the Smokies by Trip Type</h1>
        <p>
          The best place to stay in the Smokies depends on the trip you are
          building. Gatlinburg, Pigeon Forge, Sevierville and Townsend all work,
          but they do not solve the same problem. Choose your base by the day
          you want, not just by the cheapest room or cabin.
        </p>
      </section>

      <section className="destination-section quick-answer-panel">
        <div className="destination-heading">
          <p className="eyebrow">Start here</p>
          <h2>Quick answer</h2>
        </div>
        <div className="destination-grid destination-grid-compact">
          {quickAnswers.map((answer) => (
            <article className="destination-card" key={answer.title}>
              <h3>{answer.title}</h3>
              <p>{answer.text}</p>
            </article>
          ))}
        </div>
        <div className="destination-actions">
          <Link className="button button-primary" href="/gatlinburg-vs-pigeon-forge">
            Compare Gatlinburg and Pigeon Forge
          </Link>
          <Link className="button button-secondary" href="/start-planning">
            Start Planning
          </Link>
          <Link className="button button-secondary" href="/explore">
            Explore Area Guides
          </Link>
        </div>
      </section>

      <section className="destination-section guide-card-section">
        <div className="destination-heading">
          <p className="eyebrow">Match the base to the day</p>
          <h2>Best Smokies base by trip type</h2>
        </div>
        <div className="destination-grid">
          {tripTypes.map((trip) => (
            <article className="destination-card flagship-trip-card" key={trip.title}>
              <h3>{trip.title}</h3>
              <p className="router-detail">
                <strong>Best base</strong>
                {trip.bestBase}
              </p>
              <p className="router-detail">
                <strong>Why</strong>
                {trip.why}
              </p>
              <p className="router-detail">
                <strong>Plan around</strong>
                {trip.planAround}
              </p>
              <div className="flagship-card-links" aria-label={`${trip.title} guides`}>
                {trip.links.map((link) => (
                  <Link href={link.href} key={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="destination-section comparison-section">
        <div className="destination-heading">
          <p className="eyebrow">Compare the four main bases</p>
          <h2>Where each base wins</h2>
        </div>
        <div className="destination-grid lodging-base-grid">
          {baseWins.map((base) => (
            <article className="destination-card" key={base.title}>
              <h3>{base.title}</h3>
              <ul className="area-list">
                {base.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="destination-section warning-section">
        <div className="destination-heading">
          <p className="eyebrow">Field notes before booking</p>
          <h2>Common lodging mistakes</h2>
        </div>
        <div className="destination-grid">
          {lodgingMistakes.map((mistake) => (
            <article className="destination-card" key={mistake.title}>
              <h3>{mistake.title}</h3>
              <p className="router-detail">
                <strong>Better move</strong>
                {mistake.betterMove}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="destination-section next-step-panel">
        <div className="destination-heading">
          <p className="eyebrow">Best next step</p>
          <h2>Go to the guide your trip needs</h2>
        </div>
        <nav className="destination-link-grid router-link-grid" aria-label="Where to stay guide next steps">
          {nextSteps.map((step) => (
            <Link href={step.href} key={step.href}>
              <span>{step.prompt}</span>
              <strong>{step.next}</strong>
            </Link>
          ))}
        </nav>
      </section>

      <aside className="destination-section source-note" aria-labelledby="lodging-source-note">
        <p className="eyebrow">Official source note</p>
        <h2 id="lodging-source-note">Check official park sources before final park decisions</h2>
        <p>
          Park roads, parking needs, weather and closures can change. Check
          official Great Smoky Mountains National Park sources before final
          National Park decisions. Parking tags are required for vehicles
          parking longer than 15 minutes in the park.
        </p>
        <div className="source-links">
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
