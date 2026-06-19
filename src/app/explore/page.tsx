import Link from "next/link";

const areas = [
  ["Gatlinburg", "Walkable downtown, park access and a busy town-day feel."],
  ["Pigeon Forge", "Family attractions, shows and Parkway stops."],
  ["Sevierville", "Gateway positioning, shopping and local services."],
  ["Townsend", "Quiet-side access, scenic drives and a slower pace."],
  ["National Park", "Trails, overlooks, waterfalls and focused park days."],
  ["Wears Valley / Cades Cove", "Cabin trips, slower roads and quieter mountain time."],
];

export default function ExplorePage() {
  return (
    <main className="destination-page">
      <header className="destination-header"><Link className="wordmark" href="/">Smoky Insider</Link><Link className="back-link" href="/start-planning">Start Planning</Link></header>
      <section className="destination-hero"><p className="eyebrow">Area chooser</p><h1>Choose the right Smokies area</h1><p>Compare towns, park areas and scenic-drive days before you start stacking stops.</p></section>
      <section className="destination-section">
        <div className="destination-heading"><p className="eyebrow">Best starting points</p><h2>Match the base to the day you want</h2></div>
        <div className="destination-grid">{areas.map(([title, text]) => <article className="destination-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
      <section className="destination-section destination-coming"><p className="eyebrow">Plan the route</p><h2>Continue with scenic drives and park-area guides</h2><p><Link href="/scenic-drives">Compare scenic drives</Link>, review the <Link href="/cades-cove">Cades Cove first-time guide</Link>, or check <Link href="/visitor-resources">visitor resources</Link> before setting the day.</p></section>
    </main>
  );
}
