import Link from "next/link";

const bases = [
  ["Gatlinburg", "Choose it for walkability, downtown energy and close park access."],
  ["Pigeon Forge", "Choose it for family attractions, shows and Dollywood days."],
  ["Sevierville", "Choose it for gateway positioning, shopping and local services."],
  ["Townsend", "Choose it for a quieter pace and Cades Cove access."],
  ["National Park", "Start here when trails, overlooks and waterfalls lead the trip."],
  ["Wears Valley / Cades Cove", "Choose it for cabin time, scenic roads and slower days."],
];

const tripShapes = [
  ["First Smokies trip", "Keep the plan focused: one town day, one park day and one flexible day."],
  ["Family attraction trip", "Build around energy, meal timing and one backup activity."],
  ["Park-first trip", "Choose a focused park area before adding town stops."],
  ["Quiet-side trip", "Leave room for slower roads, overlooks and unplanned stops."],
  ["Rain-ready trip", "Pair every outdoor priority with an indoor or low-walking option."],
  ["Short visit", "Pick one base and avoid crossing the full area repeatedly."],
];

const nextSteps = [
  ["Explore the Smokies", "/explore"],
  ["Things To Do", "/things-to-do"],
  ["Eat, Stay & Shop", "/eat-stay-shop"],
  ["Visitor Resources", "/visitor-resources"],
  ["Coupons & Deals", "/deals"],
  ["Events & What's Happening", "/events"],
];

export default function StartPlanningPage() {
  return (
    <main className="destination-page">
      <header className="destination-header">
        <Link className="wordmark" href="/">Smokies Insider Guide</Link>
        <Link className="back-link" href="/">Back to home</Link>
      </header>

      <section className="destination-hero">
        <p className="eyebrow">Start planning</p>
        <h1>Plan a Smokies trip without the guesswork</h1>
        <p>Choose the right base, build a realistic day and keep a backup ready before you fill the schedule.</p>
      </section>

      <section className="destination-section">
        <div className="destination-heading">
          <p className="eyebrow">Choose your base</p>
          <h2>Start with where the trip should work from</h2>
        </div>
        <div className="destination-grid">
          {bases.map(([title, text]) => <article className="destination-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="destination-section">
        <div className="destination-heading">
          <p className="eyebrow">Pick a trip shape</p>
          <h2>Decide what leads the trip</h2>
        </div>
        <div className="destination-grid">
          {tripShapes.map(([title, text]) => <article className="destination-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="destination-section">
        <div className="destination-heading">
          <p className="eyebrow">Plan around</p>
          <h2>Leave room for the real Smokies</h2>
        </div>
        <div className="destination-grid destination-grid-compact">
          {["Parking and crowded pull-offs", "Traffic between towns", "Weather and low-visibility days", "Walking distance and group energy", "Meals and tired-kid timing", "Slow roads and scenic stops"].map((item) => (
            <article className="destination-card" key={item}><h3>{item}</h3></article>
          ))}
        </div>
      </section>

      <section className="destination-section destination-next">
        <div className="destination-heading">
          <p className="eyebrow">Next steps</p>
          <h2>Go where your plan needs detail</h2>
        </div>
        <nav className="destination-link-grid" aria-label="Planning destinations">
          {nextSteps.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </nav>
      </section>
    </main>
  );
}
