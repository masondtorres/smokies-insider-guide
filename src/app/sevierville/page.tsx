import Link from "next/link";

const baseFit = [
  {
    title: "Best for",
    items: [
      "Gateway access into the Smokies",
      "Shopping, local stops and easier positioning",
      "Cabin and lodging trips that do not need downtown walkability",
      "Access to Pigeon Forge, Gatlinburg and park-area plans without staying in the busiest core",
    ],
  },
  {
    title: "Plan around",
    items: [
      "Drive time between stops",
      "Which direction your day is headed",
      "Traffic moving toward Pigeon Forge, Gatlinburg or park roads",
      "Not treating Sevierville, Pigeon Forge and Gatlinburg like one quick loop",
    ],
  },
  {
    title: "Skip as your main base if",
    items: [
      "You want to walk from your room to downtown Gatlinburg",
      "You want every major attraction within a few minutes",
      "Your full plan is centered only on Dollywood or Gatlinburg walking time",
    ],
  },
];

const tripShapes = [
  {
    title: "Gateway arrival day",
    goodIf: "You are coming into town and want an easier first stop.",
    planAround: "Where you are staying and which direction you go next.",
    next: "Start Planning",
    href: "/start-planning",
  },
  {
    title: "Shopping and local stop day",
    goodIf: "Shopping, errands, food stops or local businesses shape the day.",
    planAround: "Drive time and not bouncing across too many areas.",
    next: "Eat, Stay & Shop",
    href: "/eat-stay-shop",
  },
  {
    title: "Cabin-positioning day",
    goodIf: "Your stay is more about lodging, meals and flexible driving.",
    planAround: "The distance from your cabin to the day's main stop.",
    next: "Visitor Resources",
    href: "/visitor-resources",
  },
  {
    title: "Pigeon Forge access day",
    goodIf: "You want to stay outside the heaviest attraction core but still use it.",
    planAround: "Parkway traffic and the time of day you move.",
    next: "Pigeon Forge",
    href: "/pigeon-forge",
  },
  {
    title: "First-time planning day",
    goodIf: "You are still deciding between towns.",
    planAround: "Picking one main direction before adding extras.",
    next: "Explore",
    href: "/explore",
  },
];

const pairings = [
  {
    title: "Pair with",
    items: [
      "Shopping or a local stop",
      "A planned meal before or after a busier area",
      "A Pigeon Forge attraction day",
      "A flexible cabin or lodging-based plan",
    ],
  },
  {
    title: "Be careful pairing with",
    items: [
      "A rushed Gatlinburg walking day",
      "A full National Park trail day without checking drive time",
      "A long Cades Cove plan",
      "Too many stops spread across all three main cities",
    ],
  },
];

const planningNotes = [
  {
    title: "Gateway note",
    text: "Sevierville can make the start or end of a trip easier if you know where you are headed next.",
  },
  {
    title: "Drive-time note",
    text: "The map may look close, but your day still depends on traffic, direction and timing.",
  },
  {
    title: "Business note",
    text: "Sevierville has strong future potential for local business listings, services and shopping guides. Listings should not publish until details are reviewed.",
  },
  {
    title: "Lodging note",
    text: "This area can work well for visitors who want more flexible positioning instead of a downtown walking base.",
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
    prompt: "Comparing nearby bases?",
    next: "Go to Pigeon Forge",
    href: "/pigeon-forge",
  },
  {
    prompt: "Still choosing your base?",
    next: "Back to Start Planning",
    href: "/start-planning",
  },
];

export default function SeviervillePage() {
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
        <p className="eyebrow">Sevierville guide</p>
        <h1>Sevierville Smokies Planning Guide</h1>
        <p>
          Sevierville works best when you want gateway access, shopping, local
          businesses, lodging options and easier positioning before heading
          deeper into the Smokies. It can also stretch the day if you
          underestimate drive time between stops.
        </p>
      </section>

      <section className="destination-section comparison-section">
        <div className="destination-heading">
          <p className="eyebrow">Choose your base</p>
          <h2>Is Sevierville the right base?</h2>
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
          <h2>Good Sevierville trip shapes</h2>
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
          <h2>What to pair with Sevierville</h2>
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
          <h2>Sevierville planning notes</h2>
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
          <p className="eyebrow">Next steps from Sevierville</p>
          <h2>Go to the guide your day needs</h2>
        </div>
        <nav className="destination-link-grid router-link-grid" aria-label="Sevierville planning destinations">
          {nextSteps.map((step) => (
            <Link href={step.href} key={step.href}>
              <span>{step.prompt}</span>
              <strong>{step.next}</strong>
            </Link>
          ))}
        </nav>
      </section>

      <aside className="destination-section source-note" aria-labelledby="sevierville-park-note">
        <p className="eyebrow">Official source note</p>
        <h2 id="sevierville-park-note">Check official park sources before final park decisions</h2>
        <p>
          If your Sevierville trip includes National Park stops, conditions can
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
