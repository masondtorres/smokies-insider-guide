import Link from "next/link";

const baseFit = [
  {
    title: "Best for",
    items: [
      "Walkable downtown time",
      "Park access from the Gatlinburg side",
      "Couples, families and first-time Smokies visitors",
      "Trips where restaurants, shops and attractions are close together",
    ],
  },
  {
    title: "Plan around",
    items: [
      "Parking before you arrive downtown",
      "Crowds during peak weekends and seasons",
      "Walking distance for small kids, older family members or low mobility",
      "Not stacking too many stops into one day",
    ],
  },
  {
    title: "Skip as your main base if",
    items: [
      "You want the quietest possible trip",
      "You want the easiest driving day",
      "You plan to spend most of your time in Pigeon Forge, Sevierville or Townsend",
    ],
  },
];

const tripShapes = [
  {
    title: "Downtown walking day",
    goodIf: "You want food, shops and short-distance stops.",
    planAround: "Parking and how much walking your group can handle.",
    next: "Lower-Walking Gatlinburg Guide",
    href: "/gatlinburg-without-walking-too-much",
  },
  {
    title: "Park access day",
    goodIf: "The National Park is the anchor.",
    planAround: "Current conditions, parking tags and road changes.",
    next: "Visitor Resources",
    href: "/visitor-resources",
  },
  {
    title: "Rain-ready day",
    goodIf: "Weather could change your outdoor plans.",
    planAround: "Indoor stops, food, shopping and low-walking options.",
    next: "Things To Do",
    href: "/things-to-do",
  },
  {
    title: "First-time Smokies day",
    goodIf: "You want one town, one park-side plan and simple next steps.",
    planAround: "Not overpacking the day.",
    next: "Start Planning",
    href: "/start-planning",
  },
];

const pairings = [
  {
    title: "Pair with",
    items: [
      "A focused National Park stop",
      "A downtown meal or coffee stop",
      "A short shopping stretch",
      "One larger attraction or one scenic drive, not everything at once",
    ],
  },
  {
    title: "Be careful pairing with",
    items: [
      "A full Pigeon Forge attraction day",
      "A rushed Cades Cove day",
      "Too many dinner, shopping and park stops in one evening",
      "Any plan that depends on easy parking everywhere",
    ],
  },
];

const planningNotes = [
  {
    title: "Parking note",
    text: "Downtown parking can shape the whole day. Decide where you are heading before you circle town.",
  },
  {
    title: "Walking note",
    text: "Gatlinburg can be easier once parked, but only if your group can handle the walking.",
  },
  {
    title: "Weather note",
    text: "Rain can move more people indoors. Keep a backup, but do not expect every indoor stop to feel empty.",
  },
  {
    title: "Park note",
    text: "If your day includes National Park stops, check official park conditions before final decisions.",
  },
];

const nextSteps = [
  {
    prompt: "Need activities?",
    next: "Go to Things To Do",
    href: "/things-to-do",
  },
  {
    prompt: "Need food, shopping or lodging direction?",
    next: "Go to Eat, Stay & Shop",
    href: "/eat-stay-shop",
  },
  {
    prompt: "Need park basics, weather or parking guidance?",
    next: "Go to Visitor Resources",
    href: "/visitor-resources",
  },
  {
    prompt: "Need deals after choosing your plan?",
    next: "Go to Coupons and Deals",
    href: "/deals",
  },
  {
    prompt: "Still choosing your base?",
    next: "Back to Start Planning",
    href: "/start-planning",
  },
];

export default function GatlinburgPage() {
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
        <p className="eyebrow">Gatlinburg guide</p>
        <h1>Gatlinburg Smokies Planning Guide</h1>
        <p>
          Gatlinburg works best when you want walkability, downtown energy and
          quick access to the National Park side of the Smokies. It can also
          punish rushed plans because parking, crowds and tight movement matter.
        </p>
      </section>

      <section className="destination-section comparison-section">
        <div className="destination-heading">
          <p className="eyebrow">Choose your base</p>
          <h2>Is Gatlinburg the right base?</h2>
        </div>
        <div className="destination-grid">
          {baseFit.map((card) => (
            <article className="destination-card" key={card.title}>
              <h3>{card.title}</h3>
              <ul className="area-list">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="destination-section guide-card-section">
        <div className="destination-heading">
          <p className="eyebrow">Build the day</p>
          <h2>Good Gatlinburg trip shapes</h2>
        </div>
        <div className="destination-grid">
          {tripShapes.map((card) => (
            <Link className="destination-card router-card" href={card.href} key={card.title}>
              <h3>{card.title}</h3>
              <p className="router-detail">
                <strong>Good if</strong>
                {card.goodIf}
              </p>
              <p className="router-detail">
                <strong>Plan around</strong>
                {card.planAround}
              </p>
              <p className="router-detail router-next">
                <strong>Next</strong>
                {card.next}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="destination-section pairing-section">
        <div className="destination-heading">
          <p className="eyebrow">Keep the day realistic</p>
          <h2>What to pair with Gatlinburg</h2>
        </div>
        <div className="destination-grid destination-grid-compact">
          {pairings.map((card) => (
            <article className="destination-card" key={card.title}>
              <h3>{card.title}</h3>
              <ul className="area-list">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="destination-section field-notes-section">
        <div className="destination-heading">
          <p className="eyebrow">Before the day starts</p>
          <h2>Gatlinburg planning notes</h2>
        </div>
        <div className="destination-grid">
          {planningNotes.map((card) => (
            <article className="destination-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="destination-section next-step-panel">
        <div className="destination-heading">
          <p className="eyebrow">Next steps from Gatlinburg</p>
          <h2>Go to the guide your day needs</h2>
        </div>
        <nav className="destination-link-grid router-link-grid" aria-label="Gatlinburg planning destinations">
          {nextSteps.map((step) => (
            <Link href={step.href} key={step.href}>
              <span>{step.prompt}</span>
              <strong>{step.next}</strong>
            </Link>
          ))}
        </nav>
      </section>

      <aside className="destination-section source-note" aria-labelledby="gatlinburg-park-note">
        <p className="eyebrow">Official source note</p>
        <h2 id="gatlinburg-park-note">Check official park sources before final park decisions</h2>
        <p>
          Park roads, parking needs, weather and closures can change. Parking
          tags may be needed for National Park stops.
        </p>
        <div className="source-links">
          <a href="https://www.nps.gov/grsm/planyourvisit/conditions.htm">
            Current conditions
          </a>
          <a href="https://www.nps.gov/grsm/planyourvisit/fees.htm">
            Parking tags
          </a>
        </div>
      </aside>
    </main>
  );
}
