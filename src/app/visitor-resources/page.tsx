import Link from "next/link";

const resources = [
  ["Parking and traffic", "Plan timing and route shape before a busy park or town day."],
  ["Weather and backups", "Keep an indoor or low-walking plan ready."],
  ["Park basics", "Review the practical details that affect the park day."],
  ["Maps and routes", "Choose a focused area instead of crossing the whole region repeatedly."],
  ["Accessibility and low-walking plans", "Match the day to mobility, rest needs and realistic distances."],
];

export default function VisitorResourcesPage() {
  return (
    <main className="destination-page">
      <header className="destination-header"><Link className="wordmark" href="/">Smokies Insider Guide</Link><Link className="back-link" href="/start-planning">Start Planning</Link></header>
      <section className="destination-hero"><p className="eyebrow">Visitor resources</p><h1>Prepare for the parts that change the day</h1><p>Use practical planning resources before park days, busy weekends and first-time trips.</p></section>
      <section className="destination-section">
        <div className="destination-heading"><p className="eyebrow">Plan around</p><h2>Check the practical details first</h2></div>
        <div className="destination-grid">{resources.map(([title, text]) => <article className="destination-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
      <section className="destination-section destination-coming"><p className="eyebrow">Before you go</p><h2>Check official sources for current conditions</h2><p>Rules, closures, weather and road conditions can change. Current official sources should lead those decisions.</p></section>
    </main>
  );
}
