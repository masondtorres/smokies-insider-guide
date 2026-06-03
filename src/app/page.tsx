const navItems = [
  "Explore the Smokies",
  "Things To Do",
  "Eat, Stay & Shop",
  "Visitor Resources",
  "Coupons & Deals",
];

const heroButtons = [
  "Explore the Smokies",
  "Things To Do",
  "Eat, Stay & Shop",
  "Visitor Resources",
  "Coupons & Deals",
  "Events & Shows",
];

const guideTiles = [
  {
    title: "Explore the Smokies",
    src: "/images/explore-smokies-tile.png",
    label: "Explore the Smokies visitor guide options.",
  },
  {
    title: "Things To Do",
    src: "/images/things-to-do-tile.png",
    label: "Find things to do in the Smokies.",
  },
  {
    title: "Eat, Stay & Shop",
    src: "/images/eat-stay-shop-tile.png",
    label: "Find places to eat, stay and shop in the Smokies.",
  },
  {
    title: "Visitor Resources",
    src: "/images/visitor-resources-tile.png",
    label: "Open Smokies visitor resources.",
  },
  {
    title: "Coupons & Deals",
    src: "/images/coupons-deals-tile.png",
    label: "Check Smokies coupons and deals.",
  },
  {
    title: "Events & Shows",
    src: "/images/events-happening-tile.png",
    label: "Find Smokies events and shows.",
  },
];

function anchorId(label: string) {
  return label.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Smokies Insider Guide header">
        <div className="top-strip">
          <a href="#tiles">Plan Your Trip</a>
          <a href="#tiles">Area Maps</a>
          <a href="#tiles">Events</a>
          <a href="#tiles">Coupons</a>
          <a href="#business">Advertise</a>
        </div>

        <div className="masthead">
          <a className="brand" href="#" aria-label="Smokies Insider Guide home">
            <span className="brand-mark">SIG</span>
            <span>
              <strong>Smokies Insider Guide</strong>
              <small>Smoky Mountains trip planning, routes, food, deals and local tips.</small>
            </span>
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a href="#tiles" key={item}>
                {item}
              </a>
            ))}
          </nav>

          <a className="header-cta" href="#business">
            Advertise / Get Listed
          </a>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <p className="hero-kicker">Smokies Insider Guide</p>
          <h1 id="hero-title">Plan the Smokies like you know the place.</h1>
          <p className="hero-copy">
            Pick where you're going first, then find the food, attractions, deals and local notes
            that fit your trip.
          </p>

          <div className="hero-actions" aria-label="Primary visitor options">
            {heroButtons.map((button) => (
              <a className="hero-button" href={`#${anchorId(button)}`} key={button}>
                {button}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="tile-section" id="tiles" aria-labelledby="tiles-title">
        <div className="section-heading">
          <p className="section-kicker">Start Here</p>
          <h2 id="tiles-title">Choose what you need first.</h2>
          <p>
            Use the guide tiles to start with towns, things to do, food, visitor resources,
            coupons or events.
          </p>
        </div>

        <div className="tile-grid">
          {guideTiles.map((tile, index) => (
            <a
              aria-label={tile.label}
              className="image-tile"
              href={`#${anchorId(tile.title)}`}
              id={anchorId(tile.title)}
              key={tile.title}
            >
              <img
                alt=""
                decoding={index === 0 ? "sync" : "async"}
                fetchPriority={index === 0 ? "high" : "auto"}
                src={tile.src}
              />
            </a>
          ))}
        </div>
      </section>

      <section className="business-cta" id="business" aria-labelledby="business-title">
        <div>
          <p className="section-kicker">For Local Businesses</p>
          <h2 id="business-title">Get seen by Smokies visitors before they decide.</h2>
          <p>
            Smokies Insider Guide is being built to help restaurants, cabins, attractions, shops
            and local services show up where visitors plan their trip.
          </p>
        </div>
        <div className="business-actions" aria-label="Business options">
          <a href="#">Advertise / Get Listed</a>
          <a href="#">Submit a Deal</a>
          <a href="#">Claim Your Listing</a>
        </div>
      </section>

      <footer className="site-footer">
        <strong>Smokies Insider Guide</strong>
        <span>Smoky Mountains planning for Gatlinburg, Pigeon Forge, Sevierville, Townsend and the national park.</span>
      </footer>
    </main>
  );
}
