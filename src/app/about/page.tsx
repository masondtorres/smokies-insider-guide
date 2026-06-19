import Link from "next/link";

const pageStandards = [
  {
    title: "General planning first",
    text: "Town guides and trip-shape pages begin with practical planning advice before reviewed listings are added.",
  },
  {
    title: "Reviewed details later",
    text: "Business listings, coupons, deals, hours, prices and sponsor placements should be reviewed before publishing.",
  },
  {
    title: "Official sources for park decisions",
    text: "Park roads, parking needs, weather and closures can change. Check official park sources before the trip.",
  },
  {
    title: "Clear paid placements",
    text: "Sponsored placements and deals should be labeled when they go live.",
  },
];

const guideUses = [
  "Choosing the right Smokies base",
  "Comparing trip shapes",
  "Finding practical next steps",
  "Planning around parking, traffic, weather and walking distance",
  "Connecting visitors with reviewed businesses and current offers as the site grows",
];

export default function AboutPage() {
  return (
    <main className="destination-page">
      <header className="destination-header">
        <Link className="wordmark" href="/">
          Smoky Insider
        </Link>
        <Link className="back-link" href="/">
          Back to home
        </Link>
      </header>

      <section className="destination-hero">
        <p className="eyebrow">About Smoky Insider</p>
        <h1>Built to Help You Plan the Smokies Without Guessing</h1>
        <p>
          Smoky Insider is being built as a practical planning guide for
          visitors choosing where to stay, what to do, how to plan the day and
          what to check before heading into the Smokies.
        </p>
      </section>

      <section className="destination-section comparison-section">
        <div className="destination-heading">
          <p className="eyebrow">The reason behind the guide</p>
          <h2>Why this guide exists</h2>
        </div>
        <p className="router-section-intro">
          The Smokies are easy to overpack. Gatlinburg, Pigeon Forge,
          Sevierville, Townsend, Cades Cove and the National Park all work
          differently. This guide helps visitors slow the decision down, pick
          the right base, match the day to the group and avoid wasting half the
          trip guessing. It is an independent guide built around practical
          planning.
        </p>
      </section>

      <section className="destination-section guide-card-section">
        <div className="destination-heading">
          <p className="eyebrow">Working standards</p>
          <h2>How pages are built</h2>
        </div>
        <div className="destination-grid">
          {pageStandards.map((standard) => (
            <article className="destination-card" key={standard.title}>
              <h3>{standard.title}</h3>
              <p>{standard.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="destination-section field-notes-section">
        <div className="destination-heading">
          <p className="eyebrow">Practical trip planning</p>
          <h2>What this guide is for</h2>
        </div>
        <div className="destination-grid">
          {guideUses.map((use) => (
            <article className="destination-card" key={use}>
              <h3>{use}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="destination-section next-step-panel">
        <div className="destination-heading">
          <p className="eyebrow">For Smokies businesses</p>
          <h2>Useful local exposure, not clutter</h2>
          <p className="router-section-intro">
            Smokies businesses will be able to use listings, deals, sponsored
            guide placements and profile pages to reach visitors while they
            plan. The goal is useful local exposure, not clutter.
          </p>
        </div>
        <div className="destination-actions">
          <Link className="button button-primary" href="/start-planning">
            Start Planning
          </Link>
          <Link className="button button-secondary" href="/advertise">
            Advertise With Us
          </Link>
          <Link className="button button-secondary" href="/deals">
            Coupons and Deals
          </Link>
        </div>
      </section>

      <aside className="destination-section source-note" aria-labelledby="about-source-note">
        <p className="eyebrow">Official source note</p>
        <h2 id="about-source-note">Check official park sources before final decisions</h2>
        <p>
          For National Park planning, check official Great Smoky Mountains
          National Park sources before final decisions.
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
