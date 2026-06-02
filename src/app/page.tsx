const navTabs = [
  "Explore the Smokies",
  "Things To Do",
  "Eat, Stay & Shop",
  "Visitor Resources",
  "Coupons & Deals",
];

const lookupButtons = [
  "Gatlinburg",
  "Pigeon Forge",
  "Sevierville",
  "Townsend",
  "Cades Cove",
  "National Park",
  "Dollywood",
  "Restaurants",
  "Rainy Day",
  "Family Fun",
  "Parking",
  "Coupons",
];

const quickPicks = [
  "Best for families",
  "Good when it rains",
  "Food-first day",
  "Big views",
  "Quiet side",
  "Budget day",
];

const sections = [
  {
    id: "explore-the-smokies",
    label: "Explore by Area",
    title: "Choose the side of the Smokies that fits your day.",
    note: "Each area has its own rhythm. Start with where you are staying, then check drive time, parking and the kind of day you want.",
    variant: "cream",
    items: [
      "Gatlinburg",
      "Pigeon Forge",
      "Sevierville",
      "Townsend",
      "Cades Cove",
      "National Park",
    ],
  },
  {
    id: "things-to-do",
    label: "Things To Do",
    title: "Pick activities by weather, time and who is with you.",
    note: "Use these as starting points for planning a full day instead of bouncing between random lists.",
    variant: "blue",
    items: [
      "Attractions",
      "Family Fun",
      "Rainy Day",
      "Hiking",
      "Scenic Drives",
      "Shows",
      "Shopping",
      "Free & Cheap",
    ],
  },
  {
    id: "eat-stay-shop",
    label: "Eat, Stay & Shop",
    title: "Find food, lodging and useful local stops.",
    note: "Browse by category first, then narrow down by area, timing and what is practical for your route.",
    variant: "cream",
    items: [
      "Restaurants",
      "BBQ",
      "Breakfast",
      "Cabins",
      "Hotels",
      "Shopping",
      "Local Services",
    ],
  },
  {
    id: "visitor-resources",
    label: "Visitor Resources",
    title: "Check the details that can change your day.",
    note: "Parking, traffic, park rules and weather matter here. Look before you head out.",
    variant: "green",
    items: [
      "Parking",
      "Traffic",
      "Events",
      "Weather",
      "Webcams",
      "Bear Safety",
      "Park Rules",
      "Maps",
    ],
  },
  {
    id: "coupons-deals",
    label: "Coupons & Deals",
    title: "Look for verified local offers before you spend.",
    note: "Current offers will appear as local businesses verify them. No copied coupon codes, fake discounts or unverified claims.",
    variant: "coupon",
    items: [
      "All Coupons",
      "Restaurant Deals",
      "Attraction Deals",
      "Lodging Deals",
      "Submit a Deal",
    ],
  },
];

function slug(label: string) {
  return label
    .toLowerCase()
    .replaceAll("&", "")
    .replaceAll(" ", "-")
    .replaceAll("--", "-");
}

function RoadButton({ children, href = "#" }: { children: React.ReactNode; href?: string }) {
  return (
    <a className="road-button" href={href}>
      {children}
    </a>
  );
}

function GuideSection({
  id,
  label,
  title,
  note,
  items,
  variant,
}: {
  id: string;
  label: string;
  title: string;
  note: string;
  items: string[];
  variant: string;
}) {
  return (
    <section id={id} className={`guide-section ${variant}`}>
      <div className="section-heading">
        <p className="trail-label">{label}</p>
        <h2>{title}</h2>
        <p>{note}</p>
      </div>
      <div className="guide-card-grid">
        {items.map((item) => (
          <a className="guide-card" href="#" key={item}>
            <span>{item}</span>
            <small>Open guide</small>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="utility-strip">
          <a href="#">Smokies Insider Guide</a>
          <a href="#hero">Plan Your Trip</a>
          <a href="#coupons-deals">Coupons</a>
          <a href="#business">Advertise / Get Listed</a>
        </div>

        <div className="brand-row">
          <a className="brand-mark" href="#hero" aria-label="Smokies Insider Guide home">
            <span className="brand-icon">SIG</span>
            <span>
              <strong>Smokies Insider Guide</strong>
              <small>Local roots. Real connections. Better Smokies planning.</small>
            </span>
          </a>
        </div>

        <nav className="tab-nav" aria-label="Main visitor guide sections">
          {navTabs.map((tab) => (
            <a href={`#${slug(tab)}`} key={tab}>
              {tab}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="hero">
        <div className="ridge ridge-back" />
        <div className="ridge ridge-front" />
        <div className="hero-copy">
          <p className="trail-label">Smoky Mountains visitor guide</p>
          <h1>Plan the Smokies without wasting half your trip guessing.</h1>
          <p>
            Choose your area, find things to do, check food and deals, and see
            the local notes visitors usually learn too late.
          </p>
          <div className="hero-actions">
            <RoadButton href="#explore-the-smokies">Explore the Smokies</RoadButton>
            <RoadButton href="#things-to-do">Things To Do</RoadButton>
            <RoadButton href="#coupons-deals">Coupons & Deals</RoadButton>
            <RoadButton href="#business">Advertise / Get Listed</RoadButton>
          </div>
        </div>
      </section>

      <section className="front-door" aria-labelledby="looking-for">
        <div className="front-door-heading">
          <p className="trail-label">Start here</p>
          <h2 id="looking-for">What are you looking for?</h2>
        </div>
        <div className="button-grid">
          {lookupButtons.map((button) => (
            <a href="#" key={button}>
              {button}
            </a>
          ))}
        </div>
      </section>

      <section className="quick-picks" aria-label="Quick Picks">
        <span>Quick Picks</span>
        {quickPicks.map((pick) => (
          <a href="#" key={pick}>
            {pick}
          </a>
        ))}
      </section>

      <div className="sections-wrap">
        {sections.map((section) => (
          <GuideSection key={section.id} {...section} />
        ))}
      </div>

      <section className="business-panel" id="business">
        <div>
          <p className="trail-label">For Local Businesses</p>
          <h2>Get in front of Smokies visitors before they decide.</h2>
          <p>
            Smokies Insider Guide helps local businesses show up where visitors
            are planning what to do, where to eat, where to stay and which deals
            to check.
          </p>
        </div>
        <div className="business-actions">
          <RoadButton href="#">Advertise With Us</RoadButton>
          <RoadButton href="#">Claim Your Listing</RoadButton>
          <RoadButton href="#">Submit a Deal</RoadButton>
        </div>
      </section>

      <footer className="site-footer">
        <strong>Smokies Insider Guide</strong>
        <span>Local roots. Real connections. Better Smokies planning.</span>
      </footer>
    </main>
  );
}
