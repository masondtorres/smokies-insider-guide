import Link from "next/link";

const startingPoints = [
  { title: "Gatlinburg strip", note: "Good fit for walkable downtown energy and park-side positioning.", warning: "Skip if easy driving is the priority.", href: "/gatlinburg" },
  { title: "Pigeon Forge Parkway", note: "Good fit for family attractions, Dollywood and flexible stops.", warning: "Watch out for crossing town repeatedly.", href: "/pigeon-forge" },
  { title: "Sevierville", note: "Good fit for gateway positioning, shopping and moving between areas.", warning: "Watch drive time to the day’s main anchor.", href: "/sevierville" },
  { title: "Townsend quiet side", note: "Good fit for Cades Cove and a slower pace.", warning: "Skip if the day depends on many attractions.", href: "/townsend" },
  { title: "Wears Valley or national park", note: "Good fit for cabin trips, scenery and park-focused days.", warning: "Keep a weather and road backup.", href: "/visitor-resources" },
];

const groupCards = [
  { title: "Family with kids", text: "Start with one anchor, food, rest and an easy backup.", href: "/pigeon-forge-with-kids" },
  { title: "Family with toddlers", text: "Plan around naps, bathrooms, snacks and short stops.", href: "/smokies-with-toddlers" },
  { title: "Mixed ages or lower walking", text: "Choose easy exits, seating and less time crossing town.", href: "/gatlinburg-without-walking-too-much" },
];

const dayTypes = [
  { title: "Dollywood day", text: "Make Dollywood the anchor and keep the rest light.", href: "/dollywood-day-plan" },
  { title: "Rainy day", text: "Choose one indoor stop such as WonderWorks and one nearby backup.", href: "/rainy-day-smokies-with-kids" },
  { title: "Cades Cove day", text: "Let the loop and Townsend quiet side shape the day.", href: "/cades-cove-first-time-guide" },
  { title: "Attraction day", text: "Compare The Island, Parrot Mountain and Parkway options by fit.", href: "/things-to-do" },
  { title: "Free and cheap day", text: "Choose a strong low-cost anchor before adding paid stops.", href: "/free-and-cheap-smokies" },
  { title: "Food-first day", text: "Pick the meal area, then add one nearby activity.", href: "/eat-stay-shop" },
];

const ruiners = [
  { title: "Traffic", text: "Backup plan: stay in one town area and remove a stop.", href: "/smokies-parking-trolley-guide" },
  { title: "Weather", text: "Backup plan: keep one indoor or short-stop option ready.", href: "/rainy-day-smokies-with-kids" },
  { title: "Too much walking", text: "Backup plan: choose driving, seating and easy exits first.", href: "/gatlinburg-without-walking-too-much" },
  { title: "Wrong base", text: "Backup plan: compare the trip shape before booking.", href: "/where-to-stay-in-the-smokies-by-trip-type" },
];

export default function StartPlanningPage() {
  return (
    <main className="destination-page planning-hub-page concierge-planning-page">
      <header className="destination-header">
        <Link className="wordmark" href="/">Smokies Insider Guide</Link>
        <Link className="back-link" href="/">Back to home</Link>
      </header>

      <section className="destination-hero">
        <p className="eyebrow">Simple Smokies concierge</p>
        <h1>Start planning your Smokies day</h1>
        <p>Answer the same questions a local would ask before sending you toward Gatlinburg, Pigeon Forge, Sevierville, Townsend, Wears Valley or the national park.</p>
      </section>

      <DecisionSection eyebrow="Step 1 · Start here" title="Where are you starting?" cards={startingPoints} />
      <DecisionSection eyebrow="Step 2 · Good fit" title="Who is in your group?" cards={groupCards} />
      <DecisionSection eyebrow="Step 3 · Choose the anchor" title="What kind of day do you need?" cards={dayTypes} />
      <DecisionSection eyebrow="Step 4 · Watch out for" title="What could ruin the day?" cards={ruiners} />

      <section className="destination-section next-step-panel concierge-final-step">
        <div className="destination-heading">
          <p className="eyebrow">Step 5 · Start with this guide</p>
          <h2>Still not sure? Begin with the town and trip-shape guide.</h2>
          <p className="router-section-intro">It is the quickest way to avoid choosing the wrong base, route or kind of day.</p>
        </div>
        <div className="destination-actions">
          <Link className="button button-primary" href="/where-to-stay-in-the-smokies-by-trip-type">Choose where to stay</Link>
          <Link className="button button-secondary" href="/things-to-do">Choose what to do</Link>
        </div>
      </section>
    </main>
  );
}

function DecisionSection({
  eyebrow,
  title,
  cards,
}: {
  eyebrow: string;
  title: string;
  cards: { title: string; note?: string; warning?: string; text?: string; href: string }[];
}) {
  return (
    <section className="destination-section concierge-step-section">
      <div className="destination-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>
      <div className="destination-grid">
        {cards.map((card) => (
          <Link className="destination-card router-card" href={card.href} key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.note ?? card.text}</p>
            {card.warning ? <p className="router-detail"><strong>Watch out for</strong>{card.warning}</p> : null}
            <p className="router-detail router-next"><strong>Next</strong>Open this guide</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
