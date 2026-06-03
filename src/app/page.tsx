const guideTiles = [
  {
    title: "Explore the Smokies",
    text: "Pick the right town, road or park area.",
    src: "/images/explore-smokies-tile.png",
    href: "/explore-the-smokies",
    label: "Explore the Smokies.",
  },
  {
    title: "Things To Do",
    text: "Attractions, trails, shows and rainy-day plans.",
    src: "/images/things-to-do-tile.png",
    href: "/things-to-do",
    label: "Find things to do in the Smokies.",
  },
  {
    title: "Eat, Stay & Shop",
    text: "Restaurants, cabins, shopping and local stops.",
    src: "/images/eat-stay-shop-tile.png",
    href: "/eat-stay-shop",
    label: "Find places to eat, stay and shop in the Smokies.",
  },
  {
    title: "Visitor Resources",
    text: "Parking, traffic, maps, weather and park basics.",
    src: "/images/visitor-resources-tile.png",
    href: "/visitor-resources",
    label: "Open Smokies visitor resources.",
  },
  {
    title: "Coupons & Deals",
    text: "Save on attractions, restaurants, shopping and more.",
    src: "/images/coupons-deals-tile.png",
    href: "/coupons-deals",
    label: "Check Smokies coupons and deals.",
  },
  {
    title: "Events & What’s Happening",
    text: "Find festivals, shows, seasonal events and things happening around the Smokies.",
    src: "/images/events-happening-tile.png",
    href: "/events-shows",
    label: "Find Smokies events and shows.",
  },
];

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero" aria-labelledby="hero-title">
        <img
          alt="Smokies Insider Guide"
          className="hero-logo"
          fetchPriority="high"
          src="/images/smokies-hero-fall-logo.png"
        />

        <div className="hero-content">
          <h1 id="hero-title">THE INSIDERS GUIDE TO THE SMOKIES</h1>
          <p>
            Better routes, places to eat, deals, things to do, events and visitor resources without the guesswork.
          </p>
        </div>
      </section>

      <section className="tile-section" aria-label="Main Smokies guide options">
        <h2>Start with what you need</h2>
        <div className="tile-grid">
          {guideTiles.map((tile, index) => (
            <a aria-label={tile.label} className="image-tile" href={tile.href} key={tile.title}>
              <img
                alt=""
                decoding={index === 0 ? "sync" : "async"}
                fetchPriority={index === 0 ? "high" : "auto"}
                src={tile.src}
              />
              <span className="tile-copy">
                <strong>{tile.title}</strong>
                <small>{tile.text}</small>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="business-cta" id="business" aria-labelledby="business-title">
        <p className="section-kicker">FOR SMOKIES BUSINESSES</p>
        <h2 id="business-title">
          Reach visitors before they choose
          <br />
          where to eat, stay, shop or play.
        </h2>
        <p className="action-line">Get listed, share a deal or ask about sponsor spots.</p>
        <div className="business-actions" aria-label="Business options">
          <a href="#business">Advertise With Us</a>
          <a href="#business">Submit a Deal</a>
          <a href="#business">Claim Your Business</a>
        </div>
        <p className="trust-line">
          Sponsored placements are labeled. Offers should be current. Business details are reviewed before publishing.
        </p>
      </section>

      <footer className="site-footer" id="footer">
        <div>
          <strong>Smokies Insider Guide</strong>
          <span>Local roots. Better Smokies planning.</span>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#business">Contact</a>
          <a href="#business">Advertise</a>
          <a href="#footer">Privacy</a>
          <a href="#footer">Disclaimer</a>
        </nav>
      </footer>
    </main>
  );
}
