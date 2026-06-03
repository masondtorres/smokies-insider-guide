import Link from "next/link";

const choices = [
  ["Places to eat", "Compare location, meal timing and whether the stop fits your route."],
  ["Where to stay", "Choose the base before choosing the property type."],
  ["Shopping and local stops", "Group stops by area so shopping does not consume the whole day."],
  ["What to compare", "Look at location, access, group needs and the shape of the rest of the trip."],
];

export default function EatStayShopPage() {
  return (
    <main className="destination-page">
      <header className="destination-header"><Link className="wordmark" href="/">Smokies Insider Guide</Link><Link className="back-link" href="/start-planning">Start Planning</Link></header>
      <section className="destination-hero"><p className="eyebrow">Eat, stay and shop</p><h1>Make practical choices around your Smokies base</h1><p>Keep meals, lodging and shopping connected to the places your trip already needs to reach.</p></section>
      <section className="destination-section">
        <div className="destination-heading"><p className="eyebrow">Start here</p><h2>Compare what changes the trip</h2></div>
        <div className="destination-grid">{choices.map(([title, text]) => <article className="destination-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
      <section className="destination-section destination-coming"><p className="eyebrow">Coming soon</p><h2>Reviewed business listings</h2><p>Listings will appear after business details can be checked. No placeholder businesses are being invented.</p></section>
    </main>
  );
}
