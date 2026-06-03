import Link from "next/link";

export default function DealsPage() {
  return (
    <main className="destination-page">
      <header className="destination-header"><Link className="wordmark" href="/">Smokies Insider Guide</Link><Link className="back-link" href="/start-planning">Start Planning</Link></header>
      <section className="destination-hero"><p className="eyebrow">Coupons and deals</p><h1>Find deals after you know the day you are planning</h1><p>Useful offers should support a real plan, not decide the whole trip for you.</p></section>
      <section className="destination-section">
        <div className="destination-heading"><p className="eyebrow">Current deals</p><h2>Reviewed offers are coming soon</h2></div>
        <div className="destination-grid">
          <article className="destination-card"><h3>How deals work</h3><p>Offers should be current, clear and connected to a useful visitor decision.</p></article>
          <article className="destination-card"><h3>For visitors</h3><p>Check the offer details before building it into the day.</p></article>
          <article className="destination-card"><h3>For businesses</h3><p>Submit a deal or ask about a clearly labeled placement.</p></article>
        </div>
        <div className="destination-actions"><Link className="button button-primary" href="/advertise">Submit a Deal</Link><Link className="button button-secondary" href="/advertise">Advertise With Us</Link></div>
      </section>
    </main>
  );
}
