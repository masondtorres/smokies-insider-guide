import Link from "next/link";

const placements = [
  "Planning-lane placement",
  "Area-guide placement",
  "Business listing",
  "Current deal",
  "Event submission",
  "Visitor-resource support",
];

export default function AdvertisePage() {
  return (
    <main className="destination-page">
      <header className="destination-header"><Link className="wordmark" href="/">Smokies Insider Guide</Link><Link className="back-link" href="/">Back to home</Link></header>
      <section className="destination-hero"><p className="eyebrow">For Smokies businesses</p><h1>Reach visitors while they are making trip decisions</h1><p>Smokies Insider Guide is being built as a trust-first planning resource and advertising platform.</p></section>
      <section className="destination-section">
        <div className="destination-heading"><p className="eyebrow">Placement types</p><h2>Support useful visitor decisions</h2></div>
        <div className="destination-grid destination-grid-compact">{placements.map((item) => <article className="destination-card" key={item}><h3>{item}</h3></article>)}</div>
      </section>
      <section className="destination-section">
        <div className="destination-heading"><p className="eyebrow">Trust rules</p><h2>Clear placement, current details</h2></div>
        <div className="destination-grid">
          <article className="destination-card"><h3>Sponsored placements are labeled</h3><p>Visitors should know when a placement is paid.</p></article>
          <article className="destination-card"><h3>Offers should be current</h3><p>Expired or unclear deals do not help visitors plan.</p></article>
          <article className="destination-card"><h3>Business details are reviewed</h3><p>Listings should not publish with invented or unchecked details.</p></article>
        </div>
      </section>
      <section className="destination-section destination-coming"><p className="eyebrow">Inquiry</p><h2>Contact form coming soon</h2><p>Advertising options and inquiry details will be added after the submission workflow is ready.</p></section>
    </main>
  );
}
