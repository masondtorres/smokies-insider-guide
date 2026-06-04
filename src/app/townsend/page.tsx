import Link from "next/link";

const baseFit = [
  {
    title: "Best for",
    items: [
      "Quiet-side Smokies trips",
      "Cades Cove access",
      "Scenic drives and outdoor time",
      "Cabin stays and slower family days",
      "Visitors who do not want the heaviest downtown or Parkway energy",
    ],
  },
  {
    title: "Plan around",
    items: [
      "Longer drives if your day is centered on Gatlinburg or Pigeon Forge",
      "Fewer attraction-style stops",
      "Building the day around one main route or park area",
      "Not rushing Cades Cove or scenic drives",
    ],
  },
  {
    title: "Skip as your main base if",
    items: [
      "You want constant attractions and shows",
      "You want downtown walkability like Gatlinburg",
      "You plan to spend most of the day on the Pigeon Forge Parkway",
      "You want the busiest tourist energy close by",
    ],
  },
];

const tripShapes = [
  {
    title: "Cades Cove day",
    goodIf: "Cades Cove is the anchor of the day.",
    planAround: "Slow roads, patience, weather and not stacking too many extra stops.",
    next: "Cades Cove First-Time Guide",
    href: "/cades-cove-first-time-guide",
  },
  {
    title: "Quiet cabin day",
    goodIf: "Your stay is built around rest, views, meals and simple movement.",
    planAround: "Food timing, supplies and drive distance.",
    next: "Eat, Stay & Shop",
    href: "/eat-stay-shop",
  },
  {
    title: "Outdoor day",
    goodIf: "You want park access, scenery or low-pressure outdoor time.",
    planAround: "Current conditions and backup plans.",
    next: "Things To Do",
    href: "/things-to-do",
  },
  {
    title: "Scenic drive day",
    goodIf: "The drive is part of the plan, not just transportation.",
    planAround: "Daylight, slow roads and fewer stops.",
    next: "Explore",
    href: "/explore",
  },
  {
    title: "Low-crowd day",
    goodIf: "You want to avoid the busiest attraction core.",
    planAround: "Fewer quick-hit options and a slower pace.",
    next: "Start Planning",
    href: "/start-planning",
  },
];

const pairings = [
  {
    title: "Pair with",
    items: [
      "Cades Cove planning",
      "A scenic drive",
      "A quiet meal or cabin-based day",
      "One outdoor or park-focused stop",
      "A slower day after a busy Pigeon Forge or Gatlinburg day",
    ],
  },
  {
    title: "Be careful pairing with",
    items: [
      "A full Pigeon Forge attraction day",
      "A rushed Gatlinburg walking day",
      "Too many park stops in one day",
      "Any plan that treats mountain roads like fast city roads",
    ],
  },
];

const planningNotes = [
  {
    title: "Quiet-side note",
    text: "Townsend works best when the goal is a slower Smokies day, not a packed attraction schedule.",
  },
  {
    title: "Cades Cove note",
    text: "Do not treat Cades Cove like a quick add-on. Build the day around the route.",
  },
  {
    title: "Drive-time note",
    text: "Townsend can feel simple on the map, but timing still matters once you start crossing toward busier areas.",
  },
  {
    title: "Park note",
    text: "If your day includes National Park stops, check official park conditions before final decisions.",
  },
];

const nextSteps = [
  {
    prompt: "Need outdoor or activity ideas?",
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
    prompt: "Comparing other bases?",
    next: "Go to Start Planning",
    href: "/start-planning",
  },
  {
    prompt: "Looking for area comparisons?",
    next: "Go to Explore",
    href: "/explore",
  },
];

export default function TownsendPage() {
  return (
    <main className="destination-page">
      <header className="destination-header">
        <Link className="wordmark" href="/">
          Smokies Insider Guide
        </Link>
        <Link className="back-link" href="/start-planning">
          Start Planning
        </Link>
      </header>

      <section className="destination-hero">
        <p className="eyebrow">Townsend guide</p>
        <h1>Townsend Smokies Planning Guide</h1>
        <p>
          Townsend works best when you want a quieter Smokies base, slower
          mountain time, Cades Cove access and outdoor-focused planning. It is
          not the best fit if your whole trip is built around packed attraction
          days.
        </p>
      </section>

      <section className="destination-section comparison-section">
        <div className="destination-heading">
          <p className="eyebrow">Choose your base</p>
          <h2>Is Townsend the right base?</h2>
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
          <h2>Good Townsend trip shapes</h2>
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
          <h2>What to pair with Townsend</h2>
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
          <h2>Townsend planning notes</h2>
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
          <p className="eyebrow">Next steps from Townsend</p>
          <h2>Go to the guide your day needs</h2>
        </div>
        <nav className="destination-link-grid router-link-grid" aria-label="Townsend planning destinations">
          {nextSteps.map((step) => (
            <Link href={step.href} key={step.href}>
              <span>{step.prompt}</span>
              <strong>{step.next}</strong>
            </Link>
          ))}
        </nav>
      </section>

      <aside className="destination-section source-note" aria-labelledby="townsend-park-note">
        <p className="eyebrow">Official source note</p>
        <h2 id="townsend-park-note">Check official park sources before final park decisions</h2>
        <p>
          If your Townsend trip includes National Park stops, conditions can
          change and parking tags may be needed. Check official sources before
          final park decisions.
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
