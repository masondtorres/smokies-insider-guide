import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gatlinburg vs Pigeon Forge: Which Smokies Base Is Better for Your Trip?",
  description:
    "Compare Gatlinburg and Pigeon Forge by walking, attractions, park access, traffic and trip style before choosing your Smokies base.",
};

const comparisonRows = [
  {
    topic: "Best for",
    gatlinburg: "Walkability, downtown energy, park-side plans",
    pigeonForge: "Attractions, shows, Dollywood, Parkway stops",
  },
  {
    topic: "Trip style",
    gatlinburg: "Park access plus downtown walking",
    pigeonForge: "Activity-heavy family planning",
  },
  {
    topic: "Walking",
    gatlinburg: "Easier after parking, but still depends on group energy",
    pigeonForge: "More drive-between-stop planning",
  },
  {
    topic: "Traffic issue",
    gatlinburg: "Downtown movement and parking",
    pigeonForge: "Parkway traffic and timing between stops",
  },
  {
    topic: "Best with kids",
    gatlinburg: "Good for short walking stops if the group can handle crowds",
    pigeonForge: "Strong for mixed ages and attraction choices",
  },
  {
    topic: "Best for couples",
    gatlinburg: "Better for walkable meals, shops and park-side time",
    pigeonForge: "Better if shows, attractions or Dollywood are the anchor",
  },
  {
    topic: "Best for National Park focus",
    gatlinburg: "Usually stronger fit for park-side planning",
    pigeonForge: "Works if the park is not the only focus",
  },
  {
    topic: "Best for rainy days",
    gatlinburg: "Food, shops and indoor stops downtown",
    pigeonForge: "More attraction-style indoor backups",
  },
  {
    topic: "Good warning",
    gatlinburg: "Decide parking before you arrive",
    pigeonForge: "Do not stack too many paid stops into one day",
  },
];

const gatlinburgReasons = [
  "You want to park once and walk more.",
  "Your plan includes downtown meals, shops or short stops.",
  "You want National Park access to shape the day.",
  "Your group can handle crowds and walking.",
  "You want a mountain-town feel rather than a full Parkway attraction day.",
];

const pigeonForgeReasons = [
  "Dollywood, shows or family attractions are the anchor.",
  "You want more activity choices in one area.",
  "Your group does better driving between stops than walking downtown.",
  "Rainy-day backups matter.",
  "You want a trip built around scheduled stops, tickets or evening entertainment.",
];

const tripTypes = [
  {
    title: "First-time Smokies trip",
    text: "Gatlinburg if the National Park and downtown walking matter most. Pigeon Forge if family attractions matter most.",
  },
  {
    title: "Dollywood trip",
    text: "Pigeon Forge.",
  },
  {
    title: "National Park-focused trip",
    text: "Gatlinburg.",
  },
  {
    title: "Rainy-day trip",
    text: "Pigeon Forge for attraction variety. Gatlinburg can work for food, shops and downtown indoor stops.",
  },
  {
    title: "Low-walking trip",
    text: "Pigeon Forge may be easier with carefully planned drive-to stops. Gatlinburg can still involve a lot of walking after parking.",
  },
  {
    title: "Food-first trip",
    text: "Either can work. Choose based on where the rest of the day is happening.",
  },
  {
    title: "Budget-control trip",
    text: "Choose the town after you choose the day. Discounts only help if the plan already makes sense.",
  },
];

const pairings = [
  {
    title: "Good pairings",
    items: [
      "Gatlinburg walking day plus a separate Pigeon Forge attraction evening",
      "Pigeon Forge family attraction day plus a Gatlinburg meal or short downtown walk",
      "Dollywood day plus a simple dinner plan",
      "Park-focused Gatlinburg day plus Pigeon Forge on a different day",
    ],
  },
  {
    title: "Rough pairings",
    items: [
      "Cades Cove, downtown Gatlinburg and several Pigeon Forge stops in one day",
      "Dollywood plus a full downtown Gatlinburg walking plan",
      "Multiple paid attractions plus a National Park stop with no extra time",
    ],
  },
];

const nextSteps = [
  {
    prompt: "If you are choosing your base",
    next: "Start Planning",
    href: "/start-planning",
  },
  {
    prompt: "If Gatlinburg sounds right",
    next: "Gatlinburg Guide",
    href: "/gatlinburg",
  },
  {
    prompt: "If Pigeon Forge sounds right",
    next: "Pigeon Forge Guide",
    href: "/pigeon-forge",
  },
  {
    prompt: "If you need activity ideas",
    next: "Things To Do",
    href: "/things-to-do",
  },
  {
    prompt: "If you need food, lodging or shopping",
    next: "Eat, Stay & Shop",
    href: "/eat-stay-shop",
  },
  {
    prompt: "If you want deals after choosing your plan",
    next: "Coupons & Deals",
    href: "/deals",
  },
];

export default function GatlinburgVsPigeonForgePage() {
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
        <p className="eyebrow">Town comparison guide</p>
        <h1>Gatlinburg vs Pigeon Forge: Which Smokies Base Is Better for Your Trip?</h1>
        <p>
          Gatlinburg and Pigeon Forge are close on the map, but they do not plan
          the same way. Gatlinburg works better for walkability, downtown energy
          and quick park access. Pigeon Forge works better for family
          attractions, shows, Dollywood days and Parkway stops. The better
          choice depends on who is going, how much walking your group can handle
          and what kind of day you want.
        </p>
      </section>

      <section className="destination-section quick-answer-panel">
        <div className="destination-heading">
          <p className="eyebrow">Start here</p>
          <h2>Quick answer</h2>
        </div>
        <div className="destination-grid destination-grid-compact">
          <article className="destination-card">
            <h3>Choose Gatlinburg</h3>
            <p>
              Choose Gatlinburg if your trip is built around walkability,
              downtown time, park access and a tighter mountain-town feel.
            </p>
          </article>
          <article className="destination-card">
            <h3>Choose Pigeon Forge</h3>
            <p>
              Choose Pigeon Forge if your trip is built around attractions,
              shows, Dollywood, easier activity variety and driving between
              stops.
            </p>
          </article>
        </div>
        <div className="destination-actions">
          <Link className="button button-primary" href="/gatlinburg">
            Plan from Gatlinburg
          </Link>
          <Link className="button button-secondary" href="/pigeon-forge">
            Plan from Pigeon Forge
          </Link>
          <Link className="button button-secondary" href="/start-planning">
            Start Planning
          </Link>
        </div>
      </section>

      <section className="destination-section flagship-table-section">
        <div className="destination-heading">
          <p className="eyebrow">Side-by-side planning</p>
          <h2>Gatlinburg vs Pigeon Forge at a glance</h2>
        </div>
        <div className="comparison-table-wrap">
          <table className="comparison-table">
            <thead>
              <tr>
                <th scope="col">Planning question</th>
                <th scope="col">Gatlinburg</th>
                <th scope="col">Pigeon Forge</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.topic}>
                  <th scope="row">{row.topic}</th>
                  <td data-label="Gatlinburg">{row.gatlinburg}</td>
                  <td data-label="Pigeon Forge">{row.pigeonForge}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="destination-section choose-town-section">
        <div className="destination-heading">
          <p className="eyebrow">Choose your base</p>
          <h2>Choose Gatlinburg if...</h2>
        </div>
        <ul className="area-list flagship-reason-list">
          {gatlinburgReasons.map((reason) => (
            <li key={reason}>{reason}</li>
          ))}
        </ul>
        <div className="destination-actions">
          <Link className="button button-primary" href="/gatlinburg">
            Read the Gatlinburg planning guide
          </Link>
        </div>
      </section>

      <section className="destination-section choose-town-section">
        <div className="destination-heading">
          <p className="eyebrow">Choose your base</p>
          <h2>Choose Pigeon Forge if...</h2>
        </div>
        <ul className="area-list flagship-reason-list">
          {pigeonForgeReasons.map((reason) => (
            <li key={reason}>{reason}</li>
          ))}
        </ul>
        <div className="destination-actions">
          <Link className="button button-primary" href="/pigeon-forge">
            Read the Pigeon Forge planning guide
          </Link>
        </div>
      </section>

      <section className="destination-section warning-section">
        <div className="destination-heading">
          <p className="eyebrow">Common mistake</p>
          <h2>Trying to do both like they are one stop</h2>
          <p className="router-section-intro">
            Gatlinburg and Pigeon Forge are close enough to pair, but not close
            enough to treat carelessly on a packed day. The trip gets rough
            when visitors stack downtown Gatlinburg, multiple Parkway
            attractions, a big dinner, shopping and a park stop into the same
            day.
          </p>
        </div>
        <aside className="flagship-warning-note">
          <strong>Field note</strong>
          <p>
            Pick one anchor for the day. Add one or two supporting stops. Leave
            space for traffic, food, parking, tired kids and weather.
          </p>
        </aside>
      </section>

      <section className="destination-section guide-card-section">
        <div className="destination-heading">
          <p className="eyebrow">Match the town to the trip</p>
          <h2>Best choice by trip type</h2>
        </div>
        <div className="destination-grid">
          {tripTypes.map((trip) => (
            <article className="destination-card" key={trip.title}>
              <h3>{trip.title}</h3>
              <p className="router-detail">
                <strong>Best pick</strong>
                {trip.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="destination-section pairing-section">
        <div className="destination-heading">
          <p className="eyebrow">Build a realistic trip</p>
          <h2>How to pair them in one trip</h2>
        </div>
        <div className="destination-grid destination-grid-compact">
          {pairings.map((pairing) => (
            <article className="destination-card" key={pairing.title}>
              <h3>{pairing.title}</h3>
              <ul className="area-list">
                {pairing.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="destination-section next-step-panel">
        <div className="destination-heading">
          <p className="eyebrow">Best next step</p>
          <h2>Go to the guide your trip needs</h2>
        </div>
        <nav className="destination-link-grid router-link-grid" aria-label="Comparison guide next steps">
          {nextSteps.map((step) => (
            <Link href={step.href} key={step.href}>
              <span>{step.prompt}</span>
              <strong>{step.next}</strong>
            </Link>
          ))}
        </nav>
      </section>

      <aside className="destination-section source-note" aria-labelledby="comparison-source-note">
        <p className="eyebrow">Official source note</p>
        <h2 id="comparison-source-note">Check official park sources before final park decisions</h2>
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
