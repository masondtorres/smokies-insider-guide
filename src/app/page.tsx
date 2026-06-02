const navTabs = [
  "Explore the Smokies",
  "Things To Do",
  "Eat, Stay & Shop",
  "Visitor Resources",
  "Coupons & Deals",
];

const utilityLinks = [
  ["Plan Your Trip", "#hero"],
  ["Area Maps", "#explore-the-smokies"],
  ["Events", "#visitor-resources"],
  ["Coupons", "#coupons-deals"],
  ["Advertise", "#business"],
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

const insiderNotes = [
  "Go early for Cades Cove",
  "Check parking before Gatlinburg",
  "Keep rainy-day backups ready",
  "Do not pack too much into one Parkway day",
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
    skipIf: "You only have one calm stop-and-stroll blocks.",
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

const sections = [
  {
    id: "explore-the-smokies",
    label: "Explore by Area",
    title: "Pick your town before you stack the day.",
    note: "The right base saves driving, parking stress and backtracking. Start here, then choose food, attractions and park stops nearby.",
    variant: "cream",
    kind: "areas",
  },
  {
    id: "things-to-do",
    label: "Things To Do",
    title: "Choose by weather, group and drive time.",
    note: "Keep a short list ready so one closed road, long line or rainy afternoon does not wreck the whole day.",
    variant: "blue",
    kind: "simple",
    items: [
      ["Attractions", "Ticketed stops, rides, museums and busy Parkway plans."],
      ["Family Fun", "Shorter options that work when the group has mixed ages."],
      ["Rainy Day", "Indoor backups before the forecast gets messy."],
      ["Hiking", "Trail ideas by time available, parking and difficulty."],
      ["Scenic Drives", "Routes where the drive is the point."],
      ["Shows", "Evening options that need advance timing planning."],
      ["Shopping", "Outlet runs, local stores and quick souvenir stops."],
      ["Free & Cheap", "Lower-cost ideas that still make a useful day."],
    ],
  },
  {
    id: "eat-stay-shop",
    label: "Eat, Stay & Shop",
    title: "Find practical stops near where you already are.",
    note: "Food and lodging decisions work better when they match the town, traffic and the next thing you are doing.",
    variant: "cream",
    kind: "simple",
    items: [
      ["Restaurants", "Meal choices by area, timing and type of day."],
      ["BBQ", "Smokehouse stops and casual plates."],
      ["Breakfast", "Early starts, pancake houses and quick coffee plans."],
      ["Cabins", "Cabin areas, access roads and drive-time reality."],
      ["Hotels", "Walkable stays, parking notes and simple locations."],
      ["Shopping", "Outlets, local stores and useful trip stops."],
      ["Local Services", "Helpful businesses visitors often need mid-trip."],
    ],
  },
  {
    id: "visitor-resources",
    label: "Visitor Resources",
    title: "Check the small details before they become the whole problem.",
    note: "Parking, traffic, weather and park rules can matter more than one more plans. Look before you leave.",
    variant: "green",
    kind: "simple",
    items: [
      ["Parking", "Where to check before Gatlinburg or busy trailheads."],
      ["Traffic", "Parkway pressure points and better timing windows."],
      ["Events", "Crowd drivers that can change your route."],
      ["Weather", "Mountain forecast checks before park plans."],
      ["Webcams", "Quick views before you drive."],
      ["Bear Safety", "Plain rules for wildlife and food storage."],
      ["Park Rules", "Parking tags, closures and visitor basics."],
      ["Maps", "Area orientation before the signal drops."],
    ],
  },
  {
    id: "coupons-deals",
    label: "Coupons & Deals",
    title: "Check verified offers without coupon-code guessing.",
    note: "Current offers will appear as local businesses verify them. No copied codes, fake discounts or made-up savings.",
    variant: "coupon",
    kind: "simple",
    items: [
      ["All Coupons", "Verified local offers when businesses provide them."],
      ["Restaurant Deals", "Food offers after local verification."],
      ["Attraction Deals", "Attraction offers with clear terms."],
      ["Lodging Deals", "Stay offers from local lodging partners."],
      ["Submit a Deal", "For businesses with a current visitor offer."],
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
  variant,
  kind,
  items,
}: {
  id: string;
  label: string;
  title: string;
  note: string;
  variant: string;
  kind: string;
  items?: string[][];
}) {
  return (
    <section id={id} className={`guide-section ${variant}`}>
      <div className="section-heading">
        <p className="trail-label">{label}</p>
        <h2>{title}</h2>
        <p>{note}</p>
      </div>
      <div className="guide-card-grid">
        {kind === "areas"
          ? areaCards.map((area) => (
              <a className="guide-card area-card" href="#" key={area.title}>
                <span>{area.title}</span>
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
              </a>
            ))
          : items?.map(([item, text]) => (
              <a className="guide-card" href="#" key={item}>
                <span>{item}</span>
                <small>{text}</small>
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
          {utilityLinks.map(([label, href]) => (
            <a href={href} key={label}>
              {label}
            </a>
          ))}
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
          <h1>Know where to go before you get here.</h1>
          <p>
            Pick the right town, find food and attractions, check useful deals,
            and avoid the common Smokies planning mistakes.
          </p>
          <div className="hero-actions">
            <RoadButton href="#explore-the-smokies">Explore the Smokies</RoadButton>
            <RoadButton href="#things-to-do">Things To Do</RoadButton>
            <RoadButton href="#coupons-deals">Coupons & Deals</RoadButton>
            <RoadButton href="#business">Advertise / Get Listed</RoadButton>
          </div>
        </div>
      </section>

      <section className="insider-notes" aria-label="Insider Notes">
        <span>Insider Notes</span>
        {insiderNotes.map((note) => (
          <a href="#" key={note}>
            {note}
          </a>
        ))}
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
