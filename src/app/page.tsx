const navItems = [
  ["Explore the Smokies", "#guide"],
  ["Things To Do", "#guide"],
  ["Eat, Stay & Shop", "#guide"],
  ["Visitor Resources", "#guide"],
  ["Coupons & Deals", "#guide"],
];

const guideTiles = [
  {
    title: "Explore the Smokies",
    text: "Pick the right town, road or park area.",
    href: "#areas",
    tone: "explore",
  },
  {
    title: "Things To Do",
    text: "Attractions, trails, shows and rainy-day plans.",
    href: "#shortcuts",
    tone: "activity",
  },
  {
    title: "Eat, Stay & Shop",
    text: "Restaurants, cabins, shopping and local stops.",
    href: "#shortcuts",
    tone: "local",
  },
  {
    title: "Visitor Resources",
    text: "Parking, traffic, maps, weather and park basics.",
    href: "#shortcuts",
    tone: "resources",
  },
  {
    title: "Coupons & Deals",
    text: "Verified local offers as businesses confirm them.",
    href: "#shortcuts",
    tone: "coupon",
  },
];

const shortcutButtons = [
  "Gatlinburg",
  "Pigeon Forge",
  "Sevierville",
  "Townsend",
  "National Park",
  "Cades Cove",
  "Dollywood",
  "Restaurants",
  "Rainy Day",
  "Family Fun",
  "Parking",
  "Coupons",
];

const insiderNotes = [
  "Go early for Cades Cove.",
  "Check parking before Gatlinburg.",
  "Keep rainy-day backups ready.",
  "Do not pack too much into one Parkway day.",
];

const areaCards = [
  {
    title: "Gatlinburg",
    bestFor: "Walking, food stops, shops and quick park access.",
    skipIf: "You need easy parking or a quiet evening.",
    note: "Check parking lots before you roll into town.",
  },
  {
    title: "Pigeon Forge",
    bestFor: "Dollywood, shows, family attractions and easy meal choices.",
    skipIf: "You want one calm stop-and-stroll area.",
    note: "Plan by traffic direction, not just distance on a map.",
  },
  {
    title: "Sevierville",
    bestFor: "Shopping, cabins, food runs and practical trip errands.",
    skipIf: "You want to park once and walk all attractions.",
    note: "Good base when your group is split between park days and Parkway plans.",
  },
  {
    title: "Townsend",
    bestFor: "Cades Cove access, slower drives and quieter lodging.",
    skipIf: "You want late-night shows and big attraction clusters.",
    note: "Useful for park days with less Parkway backtracking.",
  },
  {
    title: "National Park",
    bestFor: "Hikes, overlooks, picnic stops and scenic roads.",
    skipIf: "You have no parking tag or backup plan.",
    note: "Road closures and weather can change the day fast.",
  },
  {
    title: "Cades Cove",
    bestFor: "Wildlife viewing, history stops and a slower loop drive.",
    skipIf: "You are already short on time or patience.",
    note: "Start early and treat the loop as the main plan.",
  },
];

function GuideButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a className="guide-button" href={href}>
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="masthead">
          <a className="brand-mark" href="#hero" aria-label="Smokies Insider Guide home">
            <strong>Smokies Insider Guide</strong>
            <small>Local roots. Better Smokies planning.</small>
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map(([label, href]) => (
              <a href={href} key={label}>
                {label}
              </a>
            ))}
            <a className="secondary-nav" href="#business">
              Advertise / Get Listed
            </a>
          </nav>
        </div>
      </header>

      <section className="hero" id="hero">
        <div className="hero-inner">
          <p className="eyebrow">Smoky Mountains visitor guide</p>
          <h1>Know where to go before you get here.</h1>
          <p>
            Pick the right town, find food and attractions, check useful deals
            and avoid the common Smokies planning mistakes.
          </p>
          <div className="hero-actions">
            <GuideButton href="#areas">Explore the Smokies</GuideButton>
            <GuideButton href="#guide">Things To Do</GuideButton>
            <GuideButton href="#guide">Coupons & Deals</GuideButton>
            <GuideButton href="#business">Advertise / Get Listed</GuideButton>
          </div>
        </div>
      </section>

      <section className="guide-tiles-section" id="guide" aria-labelledby="guide-title">
        <div className="section-heading">
          <p className="eyebrow">Start here</p>
          <h2 id="guide-title">Start with what you need.</h2>
        </div>

        <div className="guide-tiles">
          {guideTiles.map((tile) => (
            <a className={`guide-tile ${tile.tone}`} href={tile.href} key={tile.title}>
              <span>{tile.title}</span>
              <small>{tile.text}</small>
            </a>
          ))}
        </div>
      </section>

      <section className="shortcuts" id="shortcuts" aria-labelledby="shortcuts-title">
        <div className="section-heading compact">
          <p className="eyebrow">Quick links</p>
          <h2 id="shortcuts-title">Popular Smokies shortcuts</h2>
        </div>

        <div className="shortcut-grid">
          {shortcutButtons.map((button) => (
            <a href="#" key={button}>
              {button}
            </a>
          ))}
        </div>
      </section>

      <section className="insider-notes" aria-label="Insider Notes">
        <strong>Insider Notes</strong>
        {insiderNotes.map((note) => (
          <span key={note}>{note}</span>
        ))}
      </section>

      <section className="areas-section" id="areas" aria-labelledby="areas-title">
        <div className="section-heading">
          <p className="eyebrow">Explore by area</p>
          <h2 id="areas-title">Pick the part of the Smokies that fits your day.</h2>
          <p>
            Each area has a different pace. Start with where you are staying,
            then check drive time, parking and the kind of day you want.
          </p>
        </div>

        <div className="area-grid">
          {areaCards.map((area) => (
            <article className="area-card" key={area.title}>
              <h3>{area.title}</h3>
              <dl>
                <div>
                  <dt>Best for</dt>
                  <dd>{area.bestFor}</dd>
                </div>
                <div>
                  <dt>Skip if</dt>
                  <dd>{area.skipIf}</dd>
                </div>
                <div>
                  <dt>Local note</dt>
                  <dd>{area.note}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="business-panel" id="business">
        <div>
          <p className="eyebrow">For local businesses</p>
          <h2>Get seen by Smokies visitors before they decide.</h2>
          <p>
            Smokies Insider Guide is being built to help restaurants, cabins,
            attractions, shops and local services show up where visitors plan
            their trip.
          </p>
        </div>
        <div className="business-actions">
          <GuideButton href="#">Advertise / Get Listed</GuideButton>
          <GuideButton href="#">Submit a Deal</GuideButton>
          <GuideButton href="#">Claim Your Listing</GuideButton>
        </div>
      </section>

      <footer className="site-footer">
        <strong>Smokies Insider Guide</strong>
        <span>Local roots. Better Smokies planning.</span>
      </footer>
    </main>
  );
}
