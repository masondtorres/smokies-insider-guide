import Link from "next/link";

const bases = [
  {
    title: "Gatlinburg",
    bestFor: "Walkability, downtown energy and quick park access.",
    planAround: "Parking, crowds and tight downtown movement.",
    next: "Explore Gatlinburg-style planning.",
    href: "/gatlinburg",
  },
  {
    title: "Pigeon Forge",
    bestFor: "Family attractions, shows, Dollywood days and Parkway stops.",
    planAround: "Traffic, ticket timing and not overpacking the day.",
    next: "Find things to do.",
    href: "/pigeon-forge",
  },
  {
    title: "Sevierville",
    bestFor: "Gateway access, shopping, local businesses and easier positioning.",
    planAround: "Drive time between stops.",
    next: "Compare eat, stay and shop options.",
    href: "/sevierville",
  },
  {
    title: "Townsend",
    bestFor: "Quiet-side trips, Cades Cove access and slower mountain time.",
    planAround: "Fewer attraction-style stops and more drive-based planning.",
    next: "Explore quieter Smokies options.",
    href: "/townsend",
  },
  {
    title: "National Park",
    bestFor: "Trails, overlooks, waterfalls and real mountain planning.",
    planAround: "Current conditions, parking tags, weather and road changes.",
    next: "Check visitor resources.",
    href: "/visitor-resources",
  },
  {
    title: "Wears Valley / Cades Cove",
    bestFor: "Cabin trips, scenic drives and slower days.",
    planAround: "Not rushing the drive.",
    next: "Start with scenic and area planning.",
    href: "/explore",
  },
];

const tripShapes = [
  {
    title: "Family day",
    goodIf: "You have kids, mixed ages or need simple stops.",
    planAround: "Meals, bathrooms, tired legs and backup options.",
    next: "Smokies With Toddlers",
    href: "/smokies-with-toddlers",
  },
  {
    title: "Rainy day",
    goodIf: "Weather may change your outdoor plans.",
    planAround: "Indoor attractions, shopping, food stops and shorter walks.",
    next: "Things To Do",
    href: "/things-to-do",
  },
  {
    title: "Dollywood day",
    goodIf: "The park is the anchor of your day.",
    planAround: "Arrival time, traffic, meals and not stacking too much after.",
    next: "Things To Do",
    href: "/things-to-do",
  },
  {
    title: "Cades Cove day",
    goodIf: "You want scenery, wildlife viewing and slower roads.",
    planAround: "Drive time, patience and fewer extra stops.",
    next: "Explore",
    href: "/explore",
  },
  {
    title: "Food-first day",
    goodIf: "Meals, coffee, snacks or local stops shape the day.",
    planAround: "Timing, town choice and driving distance.",
    next: "Eat, Stay & Shop",
    href: "/eat-stay-shop",
  },
  {
    title: "Free and cheap day",
    goodIf: "You want to control cost before adding paid stops.",
    planAround: "Parking, driving and what is actually worth the time.",
    next: "Free and Cheap Smokies Guide",
    href: "/free-and-cheap-smokies",
  },
];

const planningRisks = [
  {
    title: "Parking",
    text: "Check what you need before park stops and busy town days.",
    href: "/visitor-resources",
  },
  {
    title: "Traffic",
    text: "Build extra time around the Parkway, downtown Gatlinburg and park roads.",
    href: "/visitor-resources",
  },
  {
    title: "Weather",
    text: "Keep one indoor or low-walking backup ready.",
    href: "/things-to-do",
  },
  {
    title: "Walking distance",
    text: "Match the day to your group's real energy level.",
    href: "/visitor-resources",
  },
  {
    title: "Drive time",
    text: "Do not plan the map like every road moves fast.",
    href: "/explore",
  },
  {
    title: "Crowds",
    text: "Have a second choice ready for busy weekends, holidays and peak seasons.",
    href: "/visitor-resources",
  },
];

const popularGuides = [
  {
    title: "Gatlinburg vs Pigeon Forge",
    note: "Best when you are choosing where to base the trip.",
    cta: "Compare towns",
    href: "/gatlinburg-vs-pigeon-forge",
  },
  {
    title: "Where to Stay by Trip Type",
    note: "Best when lodging location is the main decision.",
    cta: "Choose your base",
    href: "/where-to-stay-in-the-smokies-by-trip-type",
  },
  {
    title: "Rainy Day Smokies With Kids",
    note: "Best when weather changes the plan.",
    cta: "Plan a rainy day",
    href: "/rainy-day-smokies-with-kids",
  },
  {
    title: "Dollywood Day Plan",
    note: "Best when Dollywood is the main event.",
    cta: "Plan Dollywood day",
    href: "/dollywood-day-plan",
  },
  {
    title: "Cades Cove First-Time Guide",
    note: "Best when you want the loop without wasting the day.",
    cta: "Plan Cades Cove",
    href: "/cades-cove-first-time-guide",
  },
  {
    title: "Free and Cheap Things to Do",
    note: "Best when you want a good trip without ticketing every stop.",
    cta: "Save money",
    href: "/free-and-cheap-smokies",
  },
  {
    title: "Smokies With Toddlers",
    note: "Best when naps, snacks and short stops matter.",
    cta: "Plan with toddlers",
    href: "/smokies-with-toddlers",
  },
  {
    title: "Pigeon Forge With Kids",
    note: "Best when attractions, Dollywood and indoor backups are on the table.",
    cta: "Plan family fun",
    href: "/pigeon-forge-with-kids",
  },
  {
    title: "Gatlinburg Without Walking Too Much",
    note: "Best for grandparents, toddlers or lower-stamina groups.",
    cta: "Plan less walking",
    href: "/gatlinburg-without-walking-too-much",
  },
];

const nextSteps = [
  {
    prompt: "If you are choosing where to stay",
    next: "Compare bases by trip type",
    href: "/where-to-stay-in-the-smokies-by-trip-type",
  },
  {
    prompt: "If you are choosing a town",
    next: "Compare Gatlinburg and Pigeon Forge",
    href: "/gatlinburg-vs-pigeon-forge",
  },
  {
    prompt: "If you need activities",
    next: "Go to Things To Do",
    href: "/things-to-do",
  },
  {
    prompt: "If you need restaurants, cabins or shops",
    next: "Go to Eat, Stay & Shop",
    href: "/eat-stay-shop",
  },
  {
    prompt: "If you need practical park or trip basics",
    next: "Go to Visitor Resources",
    href: "/visitor-resources",
  },
  {
    prompt: "If you want offers after choosing the day",
    next: "Go to Coupons and Deals",
    href: "/deals",
  },
  {
    prompt: "If you are planning around dates",
    next: "Go to Events",
    href: "/events",
  },
];

export default function StartPlanningPage() {
  return (
    <main className="destination-page">
      <header className="destination-header">
        <Link className="wordmark" href="/">
          Smokies Insider Guide
        </Link>
        <Link className="back-link" href="/">
          Back to home
        </Link>
      </header>

      <section className="destination-hero">
        <p className="eyebrow">Start planning</p>
        <h1>Start Planning Your Smokies Trip</h1>
        <p>
          Use this page to narrow the trip before you start clicking around.
          Pick your base, your group, your time, your weather backup and the
          kind of day you actually want.
        </p>
      </section>

      <section className="destination-section primary-decision-section">
        <div className="destination-heading">
          <p className="eyebrow">Start with your base</p>
          <h2>Where are you staying or starting?</h2>
          <p className="router-section-intro">
            The Smokies change depending on where you sleep, park or start
            driving. Pick the area that matches the kind of trip you want.
          </p>
        </div>
        <div className="destination-grid">
          {bases.map((card) => (
            <Link className="destination-card router-card" href={card.href} key={card.title}>
              <h3>{card.title}</h3>
              <p className="router-detail">
                <strong>Best for</strong>
                {card.bestFor}
              </p>
              <p className="router-detail">
                <strong>Plan around</strong>
                {card.planAround}
              </p>
              <p className="router-detail router-next">
                <strong>Next step</strong>
                {card.next}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <aside className="destination-section source-note" aria-labelledby="park-note-title">
        <p className="eyebrow">National Park planning note</p>
        <h2 id="park-note-title">Check official park sources before final decisions</h2>
        <p>
          Park roads, parking needs, weather and closures can change. Parking
          tags may be needed for park stops.
        </p>
        <p>
          Planning pages are general guidance. Check official park sources
          before final National Park decisions.
        </p>
        <div className="source-links">
          <a href="https://www.nps.gov/grsm/planyourvisit/conditions.htm">
            Great Smoky Mountains National Park current conditions
          </a>
          <a href="https://www.nps.gov/grsm/planyourvisit/fees.htm">
            Great Smoky Mountains National Park parking tags
          </a>
        </div>
      </aside>

      <section className="destination-section planning-layer-section">
        <div className="destination-heading">
          <p className="eyebrow">Pick your trip shape</p>
          <h2>What kind of day do you actually want?</h2>
          <p className="router-section-intro">
            Choose the kind of day you are actually trying to build.
          </p>
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

      <section className="destination-section warning-section">
        <div className="destination-heading">
          <p className="eyebrow">Plan around what can ruin the day</p>
          <h2>What could mess up the day?</h2>
          <p className="router-section-intro">
            Most Smokies trips do not fail because people picked one bad stop.
            They fail because the day was packed too tight.
          </p>
        </div>
        <div className="destination-grid">
          {planningRisks.map((card) => (
            <Link className="destination-card router-card router-card-compact" href={card.href} key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <p className="router-detail router-next">
                <strong>Plan next</strong>
                Open the related guide
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="destination-section guide-card-section">
        <div className="destination-heading">
          <p className="eyebrow">Guide index</p>
          <h2>Popular Planning Guides</h2>
          <p className="router-section-intro">
            Start with the guide that matches the problem you are trying to
            solve: toddlers, rainy days, budget, Dollywood, Cades Cove, Pigeon
            Forge with kids or Gatlinburg without too much walking.
          </p>
        </div>
        <div className="destination-grid">
          {popularGuides.map((guide) => (
            <Link className="destination-card router-card" href={guide.href} key={guide.href}>
              <h3>{guide.title}</h3>
              <p>{guide.note}</p>
              <p className="router-detail router-next">
                <strong>Open guide</strong>
                {guide.cta}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="destination-section next-step-panel">
        <div className="destination-heading">
          <p className="eyebrow">What should I click next?</p>
          <h2>Go straight to the guide your trip needs</h2>
        </div>
        <nav className="destination-link-grid router-link-grid" aria-label="Planning destinations">
          {nextSteps.map((step) => (
            <Link href={step.href} key={step.href}>
              <span>{step.prompt}</span>
              <strong>{step.next}</strong>
            </Link>
          ))}
        </nav>
      </section>
    </main>
  );
}
