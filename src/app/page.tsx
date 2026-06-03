const guideTiles = [
  {
    title: "Explore the Smokies",
    src: "/images/explore-smokies-tile.png",
    href: "/explore-the-smokies",
    label: "Explore the Smokies.",
  },
  {
    title: "Things To Do",
    src: "/images/things-to-do-tile.png",
    href: "/things-to-do",
    label: "Find things to do in the Smokies.",
  },
  {
    title: "Eat, Stay & Shop",
    src: "/images/eat-stay-shop-tile.png",
    href: "/eat-stay-shop",
    label: "Find places to eat, stay and shop in the Smokies.",
  },
  {
    title: "Visitor Resources",
    src: "/images/visitor-resources-tile.png",
    href: "/visitor-resources",
    label: "Open Smokies visitor resources.",
  },
  {
    title: "Coupons & Deals",
    src: "/images/coupons-deals-tile.png",
    href: "/coupons-deals",
    label: "Check Smokies coupons and deals.",
  },
  {
    title: "Events & Shows",
    src: "/images/events-happening-tile.png",
    href: "/events-shows",
    label: "Find Smokies events and shows.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <h1 id="hero-title">The insider’s guide to the Smokies:</h1>
          <p>
            Better routes, places to eat, deals, things to do, events and visitor resources without the guesswork.
          </p>
        </div>
      </section>

      <section className="tile-section" aria-label="Main Smokies guide options">
        <div className="tile-grid">
          {guideTiles.map((tile, index) => (
            <a aria-label={tile.label} className="image-tile" href={tile.href} key={tile.title}>
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
          <p className="section-kicker">FOR SMOKIES BUSINESSES</p>
          <h2 id="business-title">
            Reach visitors before they choose where to eat, stay, shop or play.
          </h2>
          <p>
            Smokies Insider Guide is built for people planning real trips to Gatlinburg, Pigeon Forge, Sevierville, Townsend and the National Park. If your business serves Smokies visitors, this is where you want to be seen.
          </p>
          <p className="action-line">
            Get listed, share a deal or ask about sponsor spots.
          </p>
          <p className="trust-line">
            Sponsored placements are labeled. Offers should be current. Business details are reviewed before publishing.
          </p>
        </div>
        <div className="business-actions" aria-label="Business options">
          <a className="business-primary" href="#business">
            Advertise With Us
          </a>
          <a href="#business">Submit a Deal</a>
          <a href="#business">Claim Your Business</a>
        </div>
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
