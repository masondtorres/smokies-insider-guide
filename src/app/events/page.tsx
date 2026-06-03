import Link from "next/link";

const eventPlanning = [
  ["Seasonal planning", "Use the trip dates and likely conditions to shape the rest of the plan."],
  ["Shows and festivals", "Compare location and timing before adding another cross-town drive."],
  ["Submit an event", "Event submission details are coming soon."],
];

export default function EventsPage() {
  return (
    <main className="destination-page">
      <header className="destination-header"><Link className="wordmark" href="/">Smokies Insider Guide</Link><Link className="back-link" href="/start-planning">Start Planning</Link></header>
      <section className="destination-hero"><p className="eyebrow">Events and what&apos;s happening</p><h1>Plan around Smokies events and seasonal timing</h1><p>Use dates, location and the rest of the itinerary before adding an event to the day.</p></section>
      <section className="destination-section">
        <div className="destination-heading"><p className="eyebrow">Calendar</p><h2>A reviewed event calendar is coming soon</h2></div>
        <div className="destination-grid">{eventPlanning.map(([title, text]) => <article className="destination-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
    </main>
  );
}
