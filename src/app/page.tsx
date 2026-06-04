import Link from "next/link";

const navLinks = [
  { label: "Start Planning", href: "/start-planning" },
  { label: "Things To Do", href: "/things-to-do" },
  { label: "Eat, Stay & Shop", href: "/eat-stay-shop" },
  { label: "Advertise", href: "/advertise" },
];

const dayCards = [
  {
    title: "First-time Smokies trip",
    start: "Compare Gatlinburg, Pigeon Forge, Sevierville and Townsend.",
    fit: "Visitors choosing a base and trying to understand the area.",
    watch: "Booking first, then discovering every day requires a long drive.",
    cta: "Start planning",
    href: "/start-planning",
  },
  {
    title: "Family with kids",
    start: "Build around one anchor such as Dollywood, The Island or WonderWorks.",
    fit: "Families balancing attractions, food, rest and a backup plan.",
    watch: "Stacking too many paid stops along the Pigeon Forge Parkway.",
    cta: "Plan Pigeon Forge with kids",
    href: "/pigeon-forge-with-kids",
  },
  {
    title: "Rainy day",
    start: "Choose one indoor anchor and keep the driving simple.",
    fit: "Families considering WonderWorks or another indoor stop.",
    watch: "Crossing town repeatedly because every outdoor plan changed.",
    cta: "Build a rainy-day plan",
    href: "/rainy-day-smokies-with-kids",
  },
  {
    title: "Low-walking day",
    start: "Plan around driving, seating, easy exits and short stops.",
    fit: "Mixed-age groups and visitors who need less time on foot.",
    watch: "Assuming the Gatlinburg strip will be the easiest option.",
    cta: "Plan a lower-walking day",
    href: "/gatlinburg-without-walking-too-much",
  },
  {
    title: "Dollywood day",
    start: "Let Dollywood be the main event and keep the evening light.",
    fit: "Families ready to give the park most of the day.",
    watch: "Adding several Parkway attractions before or after.",
    cta: "Plan Dollywood day",
    href: "/dollywood-day-plan",
  },
  {
    title: "Cades Cove day",
    start: "Use Townsend or Wears Valley as the practical side of the trip.",
    fit: "Visitors who want a slower Great Smoky Mountains National Park day.",
    watch: "Treating the loop like a quick stop between busy town plans.",
    cta: "Plan Cades Cove",
    href: "/cades-cove-first-time-guide",
  },
  {
    title: "Free and cheap day",
    start: "Choose a scenic or town-based anchor before adding paid stops.",
    fit: "Visitors protecting the trip budget without wasting the day.",
    watch: "Letting small add-ons turn into another expensive day.",
    cta: "Find lower-cost ideas",
    href: "/free-and-cheap-smokies",
  },
  {
    title: "Food-first day",
    start: "Choose the meal area first, then add one nearby stop.",
    fit: "Groups that care more about a good meal than a packed itinerary.",
    watch: "Driving across the whole area between food and activities.",
    cta: "Open the food guide",
    href: "/eat-stay-shop",
  },
  {
    title: "Avoid the worst crowds",
    start: "Choose one area and stop crossing between busy towns.",
    fit: "Visitors who value a workable route over a long wish list.",
    watch: "Building a day that depends on the Gatlinburg strip and Parkway traffic.",
    cta: "Plan parking and movement",
    href: "/smokies-parking-trolley-guide",
  },
  {
    title: "Not sure where to stay",
    start: "Match the base to the days you actually want.",
    fit: "Trips split between attractions, the national park and quieter time.",
    watch: "Choosing a cabin view without checking the route.",
    cta: "Choose your base",
    href: "/where-to-stay-in-the-smokies-by-trip-type",
  },
];

const popularGuides = [
  { title: "Start Planning", text: "Use the simple concierge flow.", href: "/start-planning" },
  { title: "Things To Do", text: "Choose activities that fit the day.", href: "/things-to-do" },
  { title: "Pigeon Forge With Kids", text: "Build a family day without overloading it.", href: "/pigeon-forge-with-kids" },
  { title: "Cades Cove First-Time Guide", text: "Plan the loop without rushing it.", href: "/cades-cove-first-time-guide" },
  { title: "Parking and Trolley Guide", text: "Plan around town movement and parking.", href: "/smokies-parking-trolley-guide" },
  { title: "Eat, Stay & Shop", text: "Plan meals, lodging areas and local stops.", href: "/eat-stay-shop" },
];

export default function Home() {
  return (
    <main className="home-page concierge-home">
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Smokies Insider Guide home">
          Smokies Insider Guide
        </Link>
        <nav className="primary-nav" aria-label="Primary navigation">
          {navLinks.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
        </nav>
      </header>

      <section className="hero-section concierge-hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Practical Smoky Mountain trip planning</p>
          <h1 id="hero-title">Plan the Smokies like you know the place.</h1>
          <p className="hero-subhead">
            Pick the right town, avoid the wrong traffic, find better family
            stops and build a day that actually works.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/start-planning">Start Planning</Link>
            <Link className="button button-secondary" href="/things-to-do">Things To Do</Link>
          </div>
        </div>
        <aside className="field-note">
          <span>Local planning rule</span>
          <p>Choose the shape of the day before choosing every stop.</p>
        </aside>
      </section>

      <section className="section-block concierge-builder" aria-labelledby="builder-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Concierge desk</p>
            <h2 id="builder-title">Build your Smokies day</h2>
          </div>
          <p className="section-route-note">
            Start with the kind of trip you are actually planning. We&apos;ll point
            you toward the right town, route, activity and backup plan.
          </p>
        </div>
        <div className="concierge-card-grid">
          {dayCards.map((card) => (
            <Link className="concierge-card" href={card.href} key={card.title}>
              <h3>{card.title}</h3>
              <dl>
                <div><dt>Best starting point</dt><dd>{card.start}</dd></div>
                <div><dt>Good fit for</dt><dd>{card.fit}</dd></div>
                <div><dt>Watch out for</dt><dd>{card.watch}</dd></div>
              </dl>
              <span className="card-cta">{card.cta} <span aria-hidden="true">→</span></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-block local-updates-section" aria-labelledby="updates-title">
        <div className="section-heading">
          <div><p className="eyebrow">Visitor updates</p><h2 id="updates-title">Local planning updates</h2></div>
        </div>
        <Link className="local-update-card" href="/the-track-pigeon-forge-closing">
          <div>
            <h3>The Track in Pigeon Forge Is Closing November 1, 2026</h3>
            <p>If this was part of your Pigeon Forge plan, here is what to know, who should visit before it closes and what to do nearby.</p>
          </div>
          <strong>Read the Track closing guide <span aria-hidden="true">→</span></strong>
        </Link>
      </section>

      <section className="section-block popular-guides-section" aria-labelledby="popular-title">
        <div className="section-heading">
          <div><p className="eyebrow">Useful next steps</p><h2 id="popular-title">Popular planning guides</h2></div>
        </div>
        <div className="popular-guide-grid">
          {popularGuides.map((guide) => (
            <Link href={guide.href} key={guide.href}>
              <h3>{guide.title}</h3><p>{guide.text}</p><strong>Open guide →</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="business-cta compact-business-cta" aria-labelledby="business-title">
        <div>
          <p className="eyebrow">For local businesses</p>
          <h2 id="business-title">Own a Smokies business?</h2>
          <p>Get in front of visitors while they are choosing where to go, what to do and where to spend money.</p>
        </div>
        <div className="business-actions">
          <Link className="button button-primary" href="/advertise">Advertise With Us</Link>
        </div>
      </section>

      <footer className="site-footer">
        <div><strong>Smokies Insider Guide</strong><span>Decision-first planning for Smoky Mountain visitors.</span></div>
        <nav aria-label="Footer navigation">
          {navLinks.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
          <Link href="/advertise">Advertise With Us</Link>
        </nav>
      </footer>
    </main>
  );
}
