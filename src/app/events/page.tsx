import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events and Seasonal Timing",
  description:
    "Plan around Smokies events and seasonal timing. Verify dates and location before building the day.",
  alternates: { canonical: "/events" },
};

const eventPlanning = [
  ["Seasonal planning", "Use the trip dates and likely conditions to shape the rest of the plan."],
  ["Shows and festivals", "Compare location and timing before adding another cross-town drive."],
  [
    "Submit an event",
    "Use the contact form with the official event page, dates, location and organizer contact for review.",
  ],
];

export default function EventsPage() {
  return (
    <main className="destination-page">
      <header className="destination-header">
        <Link className="wordmark" href="/">
          Smoky Insider
        </Link>
        <Link className="back-link" href="/start-planning">
          Start Planning
        </Link>
      </header>
      <section className="destination-hero">
        <p className="eyebrow">Events and what's happening</p>
        <h1>Plan around Smokies events and seasonal timing</h1>
        <p>Use dates, location and the rest of the itinerary before adding an event to the day.</p>
      </section>
      <section className="destination-section">
        <div className="destination-heading">
          <p className="eyebrow">Event planning</p>
          <h2>Verify the date before building the day</h2>
        </div>
        <div className="destination-grid">
          {eventPlanning.map(([title, text]) => (
            <article className="destination-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <p style={{ marginTop: "1.5rem" }}>
          <Link href="/contact">Submit an event for review</Link>
        </p>
      </section>
    </main>
  );
}
