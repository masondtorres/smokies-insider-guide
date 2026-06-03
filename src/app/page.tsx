const tiles = [
  {
    title: "Explore the Smokies",
    image: "/images/explore-smokies-tile.png",
    href: "/explore-the-smokies",
  },
  {
    title: "Things To Do",
    image: "/images/things-to-do-tile.png",
    href: "/things-to-do",
  },
  {
    title: "Eat, Stay & Shop",
    image: "/images/eat-stay-shop-tile.png",
    href: "/eat-stay-shop",
  },
  {
    title: "Visitor Resources",
    image: "/images/visitor-resources-tile.png",
    href: "/visitor-resources",
  },
  {
    title: "Coupons & Deals",
    image: "/images/coupons-deals-tile.png",
    href: "/coupons-deals",
  },
  {
    title: "Events & Shows",
    image: "/images/events-happening-tile.png",
    href: "/events-shows",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-inner">
          <h1 id="hero-title">The insider’s guide to the Smokies:</h1>
          <p>
            Better routes, places to eat, deals, things to do, events and visitor resources without the guesswork.
          </p>
        </div>
      </section>

      <section className="main-menu" aria-label="Smokies guide sections">
        <div className="tile-grid">
          {tiles.map((tile, index) => (
            <a className="tile-card" href={tile.href} key={tile.title} aria-label={tile.title}>
              <img
                alt=""
                decoding={index === 0 ? "sync" : "async"}
                fetchPriority={index === 0 ? "high" : "auto"}
                src={tile.image}
              />
            </a>
          ))}
        </div>
      </section>

      <section className="business-section" id="business" aria-labelledby="business-title">
        <div>
          <p className="section-label">FOR SMOKIES BUSINESSES</p>
          <h2 id="business-title">Reach visitors before they choose where to eat, stay, shop or play.</h2>
          <p>
            Smokies Insider Guide is built for people planning real trips to Gatlinburg, Pigeon Forge, Sevierville, Townsend and the National Park. If your business serves Smokies visitors, this is where you want to be seen.
          </p>
          <p className="business-note">Get listed, share a deal or ask about sponsor spots.</p>
          <p className="trust-line">Sponsored placements are labeled. Offers should be current. Business details are reviewed before publishing.</p>
        </div>
        <div className="business-actions" aria-label="Business actions">
          <a className="primary-action" href="#business">Advertise With Us</a>
          <a href="#business">Submit a Deal</a>
          <a href="#business">Claim Your Business</a>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <strong>Smokies Insider Guide</strong>
          <span>Local roots. Better Smokies planning.</span>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#business">Contact</a>
          <a href="#business">Advertise</a>
          <a href="#">Privacy</a>
          <a href="#">Disclaimer</a>
        </nav>
      </footer>
    </main>
  );
}
