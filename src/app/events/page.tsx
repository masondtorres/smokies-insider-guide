import Link from "next/link";

const eventPlanning = [
  ["Seasonal planning", "Use the trip dates and likely conditions to shape the rest of the plan."],
  ["Shows and festivals", "Compare location and timing before adding another cross-town drive."],
  ["Submit an event", "Send the official event page, dates, location and organizer contact to masondtorres@duck.com for review."],
];

export default function EventsPage() {
  return (
    <main className="destination-page">
      <header className="destination-header"><Link className="wordmark" href="/">Smoky Insider</Link><Link className="back-link" href="/start-planning">Start Planning</Link></header>
      <section className="destination-hero"><p className="eyebrow">Events and what&apos;s happening</p><h1>Plan around Smokies events and seasonal timing</h1><p>Use dates, location and the rest of the itinerary before adding an event to the day.</p></section>
      <section className="destination-section">
        <div className="destination-heading"><p className="eyebrow">Event planning</p><h2>Verify the date before building the day</h2></div>
        <div className="destination-grid">{eventPlanning.map(([title, text]) => <article className="destination-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
    </main>
  );
}
