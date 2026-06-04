import Link from "next/link";

const activityGuides = [
  {
    title: "Rainy Day Smokies With Kids",
    note: "Choose an indoor anchor before weather sends the whole group searching.",
    label: "Weather backup",
    cta: "Plan a rainy day",
    href: "/rainy-day-smokies-with-kids",
  },
  {
    title: "Pigeon Forge With Kids",
    note: "Balance attractions, Dollywood, food and downtime without overloading the day.",
    label: "Family day",
    cta: "Plan with kids",
    href: "/pigeon-forge-with-kids",
  },
  {
    title: "Smokies With Toddlers",
    note: "Build around naps, snacks, bathrooms and shorter stops.",
    label: "Shorter pace",
    cta: "Plan with toddlers",
    href: "/smokies-with-toddlers",
  },
  {
    title: "Free and Cheap Things to Do",
    note: "Give the budget room before adding another ticketed stop.",
    label: "Budget move",
    cta: "Find free and cheap ideas",
    href: "/free-and-cheap-smokies",
  },
  {
    title: "Dollywood Day Plan",
    note: "Treat Dollywood as the main event and keep the rest of the day realistic.",
    label: "Main event",
    cta: "Plan Dollywood day",
    href: "/dollywood-day-plan",
  },
  {
    title: "Cades Cove First-Time Guide",
    note: "Prepare for the loop as a real outing instead of a quick side stop.",
    label: "Park day",
    cta: "Plan Cades Cove",
    href: "/cades-cove-first-time-guide",
  },
  {
    title: "Gatlinburg Without Walking Too Much",
    note: "Choose a tighter downtown plan for grandparents, toddlers or tired groups.",
    label: "Lower-walking day",
    cta: "Plan less walking",
    href: "/gatlinburg-without-walking-too-much",
  },
];

export default function ThingsToDoPage() {
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
        <div className="page-identity">
          <p className="eyebrow">Activities Hub</p>
          <p className="page-breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Things To Do</span>
          </p>
        </div>
        <h1>Pick activities that fit the day</h1>
        <p>
          Start with weather, walking, group energy and the one activity that
          matters most.
        </p>
      </section>

      <section className="destination-section guide-card-section">
        <div className="destination-heading">
          <p className="eyebrow">Choose by trip need</p>
          <h2>Pick activities by the kind of day you need</h2>
          <p className="router-section-intro">
            These guides solve the most common planning problems without
            turning the day into a long list of stops.
          </p>
        </div>
        <div className="destination-grid">
          {activityGuides.map((guide) => (
            <Link
              className="destination-card router-card"
              href={guide.href}
              key={guide.href}
            >
              <h3>{guide.title}</h3>
              <p>{guide.note}</p>
              <p className="router-detail router-next">
                <strong>{guide.label}</strong>
                {guide.cta}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
