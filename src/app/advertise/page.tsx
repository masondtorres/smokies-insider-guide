import Link from "next/link";

const placements = [
  {
    title: "Featured business listing",
    description:
      "Give visitors a clear overview of your business while they compare useful local options.",
  },
  {
    title: "Sponsored guide placement",
    description:
      "Support a relevant planning guide with a clearly labeled placement that fits the visitor's decision.",
  },
  {
    title: "Coupon or deal placement",
    description:
      "Share a current offer with visitors who are choosing where to go and what to book.",
  },
  {
    title: "Local business spotlight",
    description:
      "Tell visitors what makes your business a good fit for a specific trip, group, or kind of day.",
  },
];

const businessTypes = [
  "Restaurants",
  "Cabin companies",
  "Attractions",
  "Shops",
  "Service businesses",
  "Local experiences",
];

export default function AdvertisePage() {
  return (
    <main className="destination-page">
      <header className="destination-header"><Link className="wordmark" href="/">Smokies Insider Guide</Link><Link className="back-link" href="/">Back to home</Link></header>
      <section className="destination-hero">
        <p className="eyebrow">For Smokies businesses</p>
        <h1>Reach visitors while they are making trip decisions</h1>
        <p>Smokies Insider Guide is being built as a trust-first planning resource and advertising platform.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#advertising-inquiry">Ask about advertising</a>
        </div>
      </section>
      <section className="destination-section">
        <div className="destination-heading">
          <p className="eyebrow">Advertising options</p>
          <h2>Support useful visitor decisions</h2>
        </div>
        <div className="destination-grid">
          {placements.map((placement) => (
            <article className="destination-card" key={placement.title}>
              <h3>{placement.title}</h3>
              <p>{placement.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="destination-section">
        <div className="destination-heading">
          <p className="eyebrow">Who this is for</p>
          <h2>Local businesses that help shape a Smokies trip</h2>
        </div>
        <div className="destination-grid destination-grid-compact">
          {businessTypes.map((businessType) => (
            <article className="destination-card" key={businessType}>
              <h3>{businessType}</h3>
            </article>
          ))}
        </div>
      </section>
      <section className="destination-section">
        <div className="destination-heading"><p className="eyebrow">Trust rules</p><h2>Clear placement, current details</h2></div>
        <div className="destination-grid">
          <article className="destination-card"><h3>Sponsored placements are labeled</h3><p>Visitors should know when a placement is paid.</p></article>
          <article className="destination-card"><h3>Offers should be current</h3><p>Expired or unclear deals do not help visitors plan.</p></article>
          <article className="destination-card"><h3>Business details are reviewed</h3><p>Listings should not publish with invented or unchecked details.</p></article>
        </div>
      </section>
      <section className="destination-section destination-coming" id="advertising-inquiry">
        <p className="eyebrow">Advertising inquiry</p>
        <h2>Interested in reaching Smokies visitors?</h2>
        <p>Contact information coming soon</p>
      </section>
    </main>
  );
}
