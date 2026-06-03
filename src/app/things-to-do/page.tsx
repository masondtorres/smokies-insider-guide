import Link from "next/link";

const choices = [
  ["Family activities", "Start with group energy, age range and how much driving the day can handle."],
  ["Trails and waterfalls", "Choose by walking ability, weather and the park area already in your plan."],
  ["Shows and attractions", "Good anchors for town days and lower-walking plans."],
  ["Rainy-day plans", "Keep one indoor option ready before weather changes the schedule."],
  ["Free and lower-cost ideas", "Use these to give a busy itinerary more breathing room."],
];

export default function ThingsToDoPage() {
  return (
    <main className="destination-page">
      <header className="destination-header"><Link className="wordmark" href="/">Smokies Insider Guide</Link><Link className="back-link" href="/start-planning">Start Planning</Link></header>
      <section className="destination-hero"><p className="eyebrow">Things to do</p><h1>Pick activities that fit the day</h1><p>Plan around weather, walking, group energy and where you already expect to be.</p></section>
      <section className="destination-section">
        <div className="destination-heading"><p className="eyebrow">Choose a direction</p><h2>Start with the kind of day you need</h2></div>
        <div className="destination-grid">{choices.map(([title, text]) => <article className="destination-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
      <section className="destination-section destination-coming"><p className="eyebrow">Coming soon</p><h2>Practical activity guides and comparisons</h2><p>Listings will be added after their details can be reviewed.</p></section>
    </main>
  );
}
