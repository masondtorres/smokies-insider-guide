import Link from "next/link";

const activityGroups = [
  {
    title: "Rain or indoor backup",
    note: "Good when weather changes the day.",
    guides: [
      {
        title: "Rainy Day Smokies With Kids",
        note: "Choose one indoor anchor before the whole group starts searching.",
        cta: "Plan a rainy day",
        href: "/rainy-day-smokies-with-kids",
      },
    ],
  },
  {
    title: "Kids and family energy",
    note: "Match the activity load to the youngest travelers.",
    guides: [
      {
        title: "Pigeon Forge With Kids",
        note: "Balance attractions, Dollywood, food and downtime.",
        cta: "Plan with kids",
        href: "/pigeon-forge-with-kids",
      },
      {
        title: "Smokies With Toddlers",
        note: "Build around naps, snacks, bathrooms and shorter stops.",
        cta: "Plan with toddlers",
        href: "/smokies-with-toddlers",
      },
    ],
  },
  {
    title: "Park and scenic days",
    note: "Treat the main destination as the day, not a quick add-on.",
    guides: [
      {
        title: "Dollywood Day Plan",
        note: "Keep the rest of the day realistic when Dollywood is the anchor.",
        cta: "Plan Dollywood day",
        href: "/dollywood-day-plan",
      },
      {
        title: "Cades Cove First-Time Guide",
        note: "Prepare for the loop as a real outing.",
        cta: "Plan Cades Cove",
        href: "/cades-cove-first-time-guide",
      },
    ],
  },
  {
    title: "Budget and lower-walking days",
    note: "Simplify the day before adding another stop.",
    guides: [
      {
        title: "Free and Cheap Things to Do",
        note: "Check this before stacking paid attractions.",
        cta: "Find free and cheap ideas",
        href: "/free-and-cheap-smokies",
      },
      {
        title: "Gatlinburg Without Walking Too Much",
        note: "Best when walking distance is the real problem.",
        cta: "Plan less walking",
        href: "/gatlinburg-without-walking-too-much",
      },
    ],
  },
];

export default function ThingsToDoPage() {
  return (
    <main className="destination-page activities-hub-page">
      <header className="destination-header">
        <Link className="wordmark" href="/">
          Smokies Insider Guide
        </Link>
        <Link className="back-link" href="/start-planning">
          Start Planning
        </Link>
      </header>

      <section className="destination-hero">
        <div className="page-identity page-identity-strong">
          <p className="eyebrow">Activities Hub</p>
          <p className="page-breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Things To Do</span>
          </p>
        </div>
        <h1>Pick activities that fit the day</h1>
        <p>
          Pick the kind of day you need first: indoor, kid-heavy, low-cost,
          park-focused, Dollywood-focused or lower-walking.
        </p>
      </section>

      <section className="destination-section activity-hub-section">
        <div className="destination-heading">
          <p className="eyebrow">Activities Hub</p>
          <h2>Pick activities by the kind of day you need</h2>
          <p className="router-section-intro">
            Choose the condition shaping the day, then open the guide that fits.
          </p>
        </div>
        <div className="activity-group-list">
          {activityGroups.map((group) => (
            <section className="activity-group" key={group.title}>
              <div className="activity-group-heading">
                <h3>{group.title}</h3>
                <p>{group.note}</p>
              </div>
              <div className="compact-guide-list">
                {group.guides.map((guide) => (
                  <Link className="compact-guide-link" href={guide.href} key={guide.href}>
                    <span>
                      <strong>{guide.title}</strong>
                      <small>{guide.note}</small>
                    </span>
                    <b>
                      {guide.cta} <span aria-hidden="true">&rarr;</span>
                    </b>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
