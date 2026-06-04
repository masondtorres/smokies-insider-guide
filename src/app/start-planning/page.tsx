import Link from "next/link";

const decisions = [
  {
    title: "Choosing a town",
    note: "Compare the four main bases before the lodging and driving plan hardens.",
    label: "Best starting point",
    cta: "Compare towns",
    href: "/gatlinburg-vs-pigeon-forge",
  },
  {
    title: "Choosing where to stay",
    note: "Start here before booking a cabin or committing to long drive times.",
    label: "Start here",
    cta: "Choose your base",
    href: "/where-to-stay-in-the-smokies-by-trip-type",
  },
  {
    title: "Planning with kids",
    note: "Balance attractions, Dollywood, rain backups and real kid energy.",
    label: "Good fit",
    cta: "Plan with kids",
    href: "/pigeon-forge-with-kids",
  },
  {
    title: "Planning with toddlers",
    note: "Keep naps, snacks, bathrooms and short stops in the center of the day.",
    label: "Use this when",
    cta: "Plan with toddlers",
    href: "/smokies-with-toddlers",
  },
  {
    title: "Saving money",
    note: "Check this before stacking paid attractions.",
    label: "Watch for",
    cta: "Find free and cheap ideas",
    href: "/free-and-cheap-smokies",
  },
  {
    title: "Avoiding too much walking",
    note: "Best when walking distance is the real problem.",
    label: "Good fit",
    cta: "Plan less walking",
    href: "/gatlinburg-without-walking-too-much",
  },
];

const otherGuides = [
  {
    prompt: "Weather changed the plan",
    next: "Rainy Day Smokies With Kids",
    href: "/rainy-day-smokies-with-kids",
  },
  {
    prompt: "Dollywood is the main event",
    next: "Dollywood Day Plan",
    href: "/dollywood-day-plan",
  },
  {
    prompt: "You want to drive the loop",
    next: "Cades Cove First-Time Guide",
    href: "/cades-cove-first-time-guide",
  },
  {
    prompt: "Parking or town movement is the problem",
    next: "Parking and Trolley Guide",
    href: "/smokies-parking-trolley-guide",
  },
  {
    prompt: "You need activity ideas",
    next: "Things To Do",
    href: "/things-to-do",
  },
  {
    prompt: "You already know the day",
    next: "Deals and Coupons",
    href: "/deals",
  },
  {
    prompt: "Your dates shape the trip",
    next: "Events",
    href: "/events",
  },
];

export default function StartPlanningPage() {
  return (
    <main className="destination-page planning-hub-page">
      <header className="destination-header">
        <Link className="wordmark" href="/">
          Smokies Insider Guide
        </Link>
        <Link className="back-link" href="/">
          Back to home
        </Link>
      </header>

      <section className="destination-hero">
        <div className="page-identity page-identity-strong">
          <p className="eyebrow">Planning Hub</p>
          <p className="page-breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Start Planning</span>
          </p>
        </div>
        <h1>Start Planning Your Smokies Trip</h1>
        <p>
          Start here if you are not sure where to stay, what to do first or
          which guide fits your trip. Pick the problem closest to your
          situation and move from there.
        </p>
      </section>

      <section className="destination-section primary-decision-section">
        <div className="destination-heading">
          <p className="eyebrow">First decision</p>
          <h2>Start with the decision that matters most</h2>
          <p className="router-section-intro">
            Pick the problem closest to your trip. You can always move sideways
            after the first guide.
          </p>
        </div>
        <div className="destination-grid">
          {decisions.map((decision, index) => (
            <Link
              className={`destination-card router-card${index < 2 ? " priority-card" : ""}`}
              href={decision.href}
              key={decision.href}
            >
              <h3>{decision.title}</h3>
              <p>{decision.note}</p>
              <p className="router-detail router-next">
                <strong>{decision.label}</strong>
                {decision.cta}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="destination-section next-step-panel">
        <div className="destination-heading">
          <p className="eyebrow">More direct routes</p>
          <h2>Other useful planning guides</h2>
          <p className="router-section-intro">
            Already know the kind of day you need? Go straight to the matching
            guide.
          </p>
        </div>
        <nav
          className="destination-link-grid router-link-grid"
          aria-label="Other useful planning guides"
        >
          {otherGuides.map((guide) => (
            <Link href={guide.href} key={guide.href}>
              <span>{guide.prompt}</span>
              <strong>{guide.next}</strong>
            </Link>
          ))}
        </nav>
      </section>
    </main>
  );
}
