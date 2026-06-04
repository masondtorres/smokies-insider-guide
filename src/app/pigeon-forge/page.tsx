import Link from "next/link";

const baseFit = [
  {
    title: "Best for",
    items: [
      "Family attractions and shows",
      "Dollywood-centered trips",
      "Parkway stops and easy activity variety",
      "Groups that want plenty of paid indoor and outdoor options",
    ],
  },
  {
    title: "Plan around",
    items: [
      "Parkway traffic",
      "Ticket timing and reservations where needed",
      "Meal timing with kids or larger groups",
      "Not stacking too many paid stops into one day",
    ],
  },
  {
    title: "Skip as your main base if",
    items: [
      "You want the quietest Smokies trip",
      "You want a mostly National Park-focused visit",
      "You want downtown walkability like Gatlinburg",
    ],
  },
];

const tripShapes = [
  {
    title: "Dollywood day",
    goodIf: "Dollywood is the anchor of the trip.",
    planAround: "Arrival timing, meals, traffic and not adding too much after.",
    next: "Things To Do",
    href: "/things-to-do",
  },
  {
    title: "Family attraction day",
    goodIf: "Kids, mixed ages or groups need simple choices.",
    planAround: "Energy, meal breaks and one backup activity.",
    next: "Things To Do",
    href: "/things-to-do",
  },
  {
    title: "Show and dinner day",
    goodIf: "The evening plan matters most.",
    planAround: "Showtimes, parking and eating before or after.",
    next: "Eat, Stay & Shop",
    href: "/eat-stay-shop",
  },
  {
    title: "Rain-ready day",
    goodIf: "Weather may change outdoor plans.",
    planAround: "Indoor attractions, shopping and meal stops.",
    next: "Things To Do",
    href: "/things-to-do",
  },
  {
    title: "Budget-control day",
    goodIf: "You want to choose paid stops carefully.",
    planAround: "Deals after you know the day.",
    next: "Coupons and Deals",
    href: "/deals",
  },
];

const pairings = [
  {
    title: "Pair with",
    items: [
      "One major paid attraction",
      "A meal stop planned around your route",
      "Shopping or a short indoor backup",
      "Dollywood or a show, but not both with too many extras",
    ],
  },
  {
    title: "Be careful pairing with",
    items: [
      "A rushed National Park trail day",
      "A full Gatlinburg walking day",
      "A long Cades Cove drive",
      "Too many Parkway stops in peak traffic",
    ],
  },
];

const planningNotes = [
  {
    title: "Traffic note",
    text: "The Parkway can shape your whole day. Build extra time between stops.",
  },
  {
    title: "Ticket note",
    text: "If a paid attraction or show is the anchor, build the day around that time first.",
  },
  {
    title: "Family note",
    text: "Pigeon Forge is strong for kids and mixed-age groups, but only if the day has breaks.",
  },
  {
    title: "Weather note",
    text: "Rain can push more people indoors. Keep backup options, but expect other visitors to do the same.",
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
    prompt: "Need practical parking, traffic or weather basics?",
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

export default function PigeonForgePage() {
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
        <p className="eyebrow">Pigeon Forge guide</p>
        <h1>Pigeon Forge Smokies Planning Guide</h1>
        <p>
          Pigeon Forge works best when you want family attractions, shows,
          Dollywood days and Parkway stops. It can also punish overpacked plans
          because traffic, ticket timing and drive time matter.
        </p>
      </section>

      <section className="destination-section comparison-section">
        <div className="destination-heading">
          <p className="eyebrow">Choose your base</p>
          <h2>Is Pigeon Forge the right base?</h2>
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
          <h2>Good Pigeon Forge trip shapes</h2>
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
          <h2>What to pair with Pigeon Forge</h2>
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
          <h2>Pigeon Forge planning notes</h2>
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
          <p className="eyebrow">Next steps from Pigeon Forge</p>
          <h2>Go to the guide your day needs</h2>
        </div>
        <nav className="destination-link-grid router-link-grid" aria-label="Pigeon Forge planning destinations">
          {nextSteps.map((step) => (
            <Link href={step.href} key={step.href}>
              <span>{step.prompt}</span>
              <strong>{step.next}</strong>
            </Link>
          ))}
        </nav>
      </section>

      <aside className="destination-section source-note" aria-labelledby="pigeon-forge-park-note">
        <p className="eyebrow">Official source note</p>
        <h2 id="pigeon-forge-park-note">Check official park sources before final park decisions</h2>
        <p>
          If your Pigeon Forge trip includes National Park stops, conditions can
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
