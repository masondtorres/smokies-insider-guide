import Link from "next/link";

const navLinks = [
  "Explore",
  "Things To Do",
  "Eat, Stay & Shop",
  "Deals",
  "Events",
  "Advertise",
];

const planningLanes = [
  {
    title: "Explore the Smokies",
    text: "Pick the right town, road or park area.",
  },
  {
    title: "Things To Do",
    text: "Attractions, trails, shows and rainy-day plans.",
  },
  {
    title: "Eat, Stay & Shop",
    text: "Restaurants, cabins, shopping and local stops.",
  },
  {
    title: "Visitor Resources",
    text: "Parking, traffic, maps, weather and park basics.",
  },
  {
    title: "Coupons & Deals",
    text: "Save on attractions, restaurants, shopping and more.",
  },
  {
    title: "Events & What's Happening",
    text: "Find festivals, shows, seasonal events and things happening around the Smokies.",
  },
];

const realityCards = [
  {
    title: "Parking matters",
    text: "Some park stops require planning around parking tags, crowds and timing.",
  },
  {
    title: "Town choice matters",
    text: "Gatlinburg, Pigeon Forge, Sevierville and Townsend do not work the same way.",
  },
  {
    title: "Weather changes the day",
    text: "Have indoor and low-walking backups ready.",
  },
  {
    title: "Do not overpack the day",
    text: "The Smokies punish rushed plans, especially with kids or older family members.",
  },
];

const areaCards = [
  {
    title: "Gatlinburg",
    text: "Best when you want walkability, park access and downtown energy.",
  },
  {
    title: "Pigeon Forge",
    text: "Best for family attractions, shows, Dollywood and Parkway stops.",
  },
  {
    title: "Sevierville",
    text: "Best for gateway access, local businesses, shopping and easier positioning.",
  },
  {
    title: "Townsend",
    text: "Best for a quieter pace, Cades Cove access and scenic drives.",
  },
  {
    title: "National Park",
    text: "Best for trails, overlooks, waterfalls, wildlife rules and real planning.",
  },
  {
    title: "Wears Valley / Cades Cove",
    text: "Best for slower drives, cabin trips and quieter mountain time.",
  },
];

const footerLinks = [
  "Explore the Smokies",
  "Things To Do",
  "Eat, Stay & Shop",
  "Visitor Resources",
  "Coupons & Deals",
  "Events & Shows",
  "Advertise With Us",
  "Privacy",
  "Terms",
  "Disclosure",
];

export default function Home() {
  return (
    <main className="home-page">
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Smokies Insider Guide home">
          Smokies Insider Guide
        </Link>
        <nav className="primary-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a href="#" key={link}>
              {link}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Smoky Mountain trip planning</p>
          <h1 id="hero-title">The insider&apos;s guide to the Smokies</h1>
          <p className="hero-subhead">
            Better routes, places to eat, deals, things to do, events and visitor
            resources without the guesswork.
          </p>
          <div className="hero-actions" aria-label="Homepage actions">
            <a className="button button-primary" href="#planning">
              Start Planning
            </a>
            <a className="button button-secondary" href="#advertise">
              Advertise With Us
            </a>
          </div>
        </div>
        <aside className="field-note" aria-label="Planning field note">
          <span>Field note</span>
          <p>
            Plan by town, weather, parking, walking distance and what your group
            can actually handle.
          </p>
        </aside>
      </section>

      <section className="section-block" id="planning" aria-labelledby="planning-title">
        <div className="section-heading">
          <p className="eyebrow">Quick planning lanes</p>
          <h2 id="planning-title">Start with what you need</h2>
        </div>
        <div className="planning-grid">
          {planningLanes.map((card) => (
            <article className="lane-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block reality-section" aria-labelledby="reality-title">
        <div className="section-heading">
          <p className="eyebrow">Planning reality</p>
          <h2 id="reality-title">Plan around the real Smokies</h2>
        </div>
        <div className="reality-grid">
          {realityCards.map((card) => (
            <article className="note-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" aria-labelledby="areas-title">
        <div className="section-heading">
          <p className="eyebrow">Area starter</p>
          <h2 id="areas-title">Pick the right Smokies base</h2>
        </div>
        <div className="area-grid">
          {areaCards.map((card) => (
            <article className="area-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="business-cta" id="advertise" aria-labelledby="business-title">
        <div>
          <p className="eyebrow">For Smokies businesses</p>
          <h2 id="business-title">
            Reach visitors before they choose where to eat, stay, shop or play.
          </h2>
          <p>
            Smokies Insider Guide is built for people planning real trips to
            Gatlinburg, Pigeon Forge, Sevierville, Townsend and the National Park.
            If your business serves Smokies visitors, this is where you want to be
            seen.
          </p>
          <p className="trust-line">
            Sponsored placements are labeled. Offers should be current. Business
            details are reviewed before publishing.
          </p>
        </div>
        <div className="business-actions" aria-label="Business actions">
          <a className="button button-primary" href="#">
            Advertise With Us
          </a>
          <a className="button button-secondary" href="#">
            Submit a Deal
          </a>
          <a className="button button-secondary" href="#">
            Claim Your Business
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <strong>Smokies Insider Guide</strong>
          <span>Decision-first planning for Smoky Mountain visitors.</span>
        </div>
        <nav aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a href="#" key={link}>
              {link}
            </a>
          ))}
        </nav>
      </footer>
    </main>
  );
}
