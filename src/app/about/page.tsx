import Link from "next/link";

const pageStandards = [
  {
    title: "Practical help first",
    text: "Every guide should help a visitor make a clearer decision before adding more choices.",
  },
  {
    title: "Verify changing details",
    text: "Hours, prices, parking, road access and offers are checked against official or first-party sources when possible.",
  },
  {
    title: "Say what is uncertain",
    text: "The guide does not pretend to have live conditions when it does not. Important details are marked for rechecking.",
  },
  {
    title: "Keep paid placement clear",
    text: "Sponsored, featured and affiliate placements are labeled and kept separate from editorial judgment.",
  },
];

const guideUses = [
  "Choosing the right Smokies base",
  "Comparing realistic trip shapes",
  "Planning around parking, traffic, weather and walking distance",
  "Finding official sources before conditions change",
  "Saving useful stops and decisions in My Plan",
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
        <p className="eyebrow">About the guide</p>
        <h1>Practical Smokies Planning Without the Guesswork</h1>
        <p>
          Smoky Insider is an independent East Tennessee planning guide for
          Gatlinburg, Pigeon Forge, Sevierville, Townsend and Great Smoky
          Mountains National Park. It exists to turn scattered information into
          working days.
        </p>
        <p>
          Built from more than 40 years of combined experience helping people in
          the Smoky Mountains area.
        </p>
      </section>

      <section className="destination-section comparison-section">
        <div className="destination-heading">
          <p className="eyebrow">Founder and editor</p>
          <h2>Mason Torres</h2>
        </div>
        <p className="router-section-intro">
          Mason Torres is based in East Tennessee. He created Smoky Insider to
          make trip planning clearer, more practical and less dependent on hype.
        </p>
        <p className="router-section-intro">
          Mason oversees the site's editorial standards, source checks and
          corrections. Some guidance comes from direct local knowledge. Other
          guidance is research-based and checked against official or first-party
          sources. The site states the difference instead of pretending every
          changing detail is live.
        </p>
      </section>

      <section className="destination-section comparison-section">
        <div className="destination-heading">
          <p className="eyebrow">Why this guide exists</p>
          <h2>Useful before flashy. Honest before hype.</h2>
        </div>
        <p className="router-section-intro">
          The Smokies are easy to overpack. Each town, park road and attraction
          area works differently. This guide helps visitors choose a base, shape
          a realistic day and avoid wasting half the trip guessing.
        </p>
        <p className="router-section-intro">
          The guide does not sell rankings, hide sponsorships or pretend
          uncertain facts are settled.
        </p>
      </section>

      <section className="destination-section guide-card-section">
        <div className="destination-heading">
          <p className="eyebrow">Working standards</p>
          <h2>How the guide earns trust</h2>
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
          <p className="eyebrow">What Smoky Insider helps with</p>
          <h2>Make the trip easier before you leave home</h2>
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
          <p className="eyebrow">Independent and visitor-first</p>
          <h2>Useful local exposure without hiding the sponsor</h2>
          <p className="router-section-intro">
            Business listings, deals and sponsored placements are considered
            only when they fit a real visitor need. Paid visibility does not buy
            reviews, rankings or factual claims.
          </p>
        </div>
        <div className="destination-actions">
          <Link className="button button-primary" href="/parking-timing-cheat-sheet">
            Get the Free Cheat Sheet
          </Link>
          <Link className="button button-secondary" href="/editorial-policy">
            Editorial Policy
          </Link>
          <Link className="button button-secondary" href="/contact">
            Contact
          </Link>
        </div>
      </section>

      <aside className="destination-section source-note" aria-labelledby="about-source-note">
        <p className="eyebrow">Official source note</p>
        <h2 id="about-source-note">Check official park sources before final decisions</h2>
        <p>
          Roads, closures, parking requirements and weather conditions can
          change. Check official Great Smoky Mountains National Park sources
          before travel.
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
