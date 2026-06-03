import Link from "next/link";

const dealStandards = [
  {
    title: "Current and clear",
    text: "Offers should show what is included, when it applies and what visitors need to check before using it.",
  },
  {
    title: "Useful for the day",
    text: "Deals should connect to meals, attractions, shopping, lodging or other real trip decisions.",
  },
  {
    title: "Labeled placements",
    text: "Sponsored or paid placements should be clearly labeled so visitors know what they are seeing.",
  },
  {
    title: "Reviewed before publishing",
    text: "Business details and offer terms should be checked before a deal appears on the site.",
  },
];

const visitorGuidance = [
  {
    title: "Plan first",
    text: "Choose your town, route or day type before chasing discounts.",
  },
  {
    title: "Check the terms",
    text: "Confirm dates, limits and restrictions before building a plan around an offer.",
  },
  {
    title: "Keep a backup",
    text: "Weather, crowds or timing can change the day, even with a good deal.",
  },
];

const businessPlacements = [
  {
    title: "Coupon placement",
    text: "A clearly labeled offer connected to a useful visitor decision.",
  },
  {
    title: "Featured deal",
    text: "A more visible placement for a reviewed offer.",
  },
  {
    title: "Seasonal campaign",
    text: "A timely placement built around a relevant planning season.",
  },
  {
    title: "Sponsored guide placement",
    text: "A labeled placement within useful trip-planning content.",
  },
];

export default function DealsPage() {
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
        <p className="eyebrow">Coupons and deals</p>
        <h1>Smokies Coupons and Deals</h1>
        <p>
          Deals should help your trip, not decide your whole day. Use this page
          for current offers once they are reviewed, labeled and connected to
          real Smokies planning.
        </p>
      </section>

      <section className="destination-section destination-coming">
        <p className="eyebrow">Current Deals</p>
        <h2>Reviewed offers are coming soon.</h2>
        <p>
          No current visitor deals are listed yet. When offers go live, they
          should include clear terms, current dates, business details and any
          limits visitors need to know before planning around them.
        </p>
      </section>

      <section className="destination-section">
        <div className="destination-heading">
          <p className="eyebrow">How Deals Will Work</p>
          <h2>Useful offers need clear standards</h2>
        </div>
        <div className="destination-grid">
          {dealStandards.map((card) => (
            <article className="destination-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="destination-section">
        <div className="destination-heading">
          <p className="eyebrow">For Visitors</p>
          <h2>Keep the deal in its proper place</h2>
        </div>
        <div className="destination-grid">
          {visitorGuidance.map((card) => (
            <article className="destination-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="destination-section">
        <div className="destination-heading">
          <p className="eyebrow">For Smokies Businesses</p>
          <h2>Put a useful offer in front of visitors while they plan</h2>
        </div>
        <p>
          If your business serves Smokies visitors, this page will be one place
          to put a useful offer in front of people while they plan.
        </p>
        <div className="destination-grid">
          {businessPlacements.map((card) => (
            <article className="destination-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="destination-section destination-coming">
        <p className="eyebrow">Deal submissions</p>
        <h2>Want to submit a deal?</h2>
        <p>
          Deal submissions and business placements are being set up. For now,
          use the advertise page to start the conversation.
        </p>
        <div className="destination-actions">
          <Link className="button button-primary" href="/advertise">
            Advertise With Us
          </Link>
          <Link className="button button-secondary" href="/start-planning">
            Start Planning
          </Link>
        </div>
      </section>
    </main>
  );
}
