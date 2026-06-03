const tiles = [
  {
    title: "Explore the Smokies",
    text: "Pick the right town, road or park area.",
    image: "/images/explore-smokies-tile.png",
  },
  {
    title: "Things To Do",
    text: "Attractions, trails, shows and rainy-day plans.",
    image: "/images/things-to-do-tile.png",
  },
  {
    title: "Eat, Stay & Shop",
    text: "Restaurants, cabins, shopping and local stops.",
    image: "/images/eat-stay-shop-tile.png",
  },
  {
    title: "Visitor Resources",
    text: "Parking, traffic, maps, weather and park basics.",
    image: "/images/visitor-resources-tile.png",
  },
  {
    title: "Coupons & Deals",
    text: "Save on attractions, restaurants, shopping and more.",
    image: "/images/coupons-deals-tile.png",
  },
  {
    title: "Events & What's Happening",
    text: "Find festivals, shows, seasonal events and things happening around the Smokies.",
    image: "/images/events-happening-tile.png",
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

        <div className="hero-card">
          <h1 id="hero-title">THE INSIDERS GUIDE TO THE SMOKIES</h1>
          <p>
            Better routes, places to eat, deals, things to do, events and visitor resources without the guesswork.
          </p>
        </div>
      </section>

      <section className="tile-panel" aria-labelledby="tile-heading">
        <h2 id="tile-heading">Start with what you need</h2>
        <div className="tile-grid">
          {tiles.map((tile) => (
            <a className="tile-card" href="#" key={tile.title} aria-label={tile.title}>
              <img alt="" src={tile.image} />
              <span className="tile-overlay">
                <strong>{tile.title}</strong>
                <small>{tile.text}</small>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="business-card" aria-labelledby="business-heading">
        <p className="business-eyebrow">FOR SMOKIES BUSINESSES</p>
        <h2 id="business-heading">
          Reach visitors before they choose
          <br />
          where to eat, stay, shop or play.
        </h2>
        <p className="business-subhead">Get listed, share a deal or ask about sponsor spots.</p>
        <div className="business-actions" aria-label="Business actions">
          <a href="#">Advertise With Us</a>
          <a href="#">Submit a Deal</a>
          <a href="#">Claim Your Business</a>
        </div>
        <p className="trust-line">
          Sponsored placements are labeled. Offers should be current. Business details are reviewed before publishing.
        </p>
      </section>

      <footer className="site-footer">
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
