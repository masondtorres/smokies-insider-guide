import type { CSSProperties } from "react";

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

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    margin: 0,
    background: "linear-gradient(180deg, #fff0cf 0%, #fff7e7 42%, #eef8fb 100%)",
    color: "#173f2c",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  hero: {
    minHeight: "clamp(520px, 48vw, 680px)",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    padding: "0 24px 56px",
    backgroundImage:
      "linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.06) 50%, rgba(255,240,207,0.94) 100%), url('/images/smokies-hero-fall-logo.png')",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    textAlign: "center",
  },
  heroCopy: {
    maxWidth: "920px",
    color: "#fff8df",
    textShadow: "0 4px 22px rgba(0,0,0,0.72)",
  },
  h1: {
    margin: 0,
    fontSize: "clamp(38px, 5vw, 76px)",
    lineHeight: 0.96,
    letterSpacing: "-0.04em",
    fontWeight: 900,
  },
  heroText: {
    maxWidth: "820px",
    margin: "16px auto 0",
    fontSize: "clamp(18px, 1.8vw, 25px)",
    lineHeight: 1.35,
    fontWeight: 700,
    color: "#fff0c7",
  },
  menu: {
    padding: "42px 20px 0",
  },
  tileGrid: {
    width: "min(1180px, 94vw)",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  },
  tile: {
    display: "block",
    overflow: "hidden",
    border: "7px solid rgba(255,255,255,0.95)",
    borderRadius: "18px",
    background: "#ffffff",
    boxShadow: "0 20px 44px rgba(42,25,12,0.18)",
  },
  tileImg: {
    width: "100%",
    aspectRatio: "1 / 1",
    objectFit: "contain",
  },
  business: {
    width: "min(1180px, 94vw)",
    margin: "52px auto 0",
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) auto",
    gap: "36px",
    alignItems: "center",
    padding: "34px",
    borderRadius: "18px",
    border: "1px solid rgba(74,50,29,0.18)",
    borderTop: "6px solid #e6b84c",
    background:
      "linear-gradient(90deg, rgba(255,250,240,0.97), rgba(255,250,240,0.88)), url('/images/smokies-hero-fall.png')",
    backgroundPosition: "center 64%",
    backgroundSize: "cover",
    boxShadow: "0 18px 42px rgba(74,50,29,0.14)",
  },
  label: {
    margin: 0,
    color: "#c65d30",
    fontSize: "13px",
    fontWeight: 900,
    letterSpacing: "0.09em",
  },
  h2: {
    maxWidth: "760px",
    margin: "8px 0 0",
    color: "#173f2c",
    fontSize: "clamp(30px, 3.2vw, 52px)",
    lineHeight: 1.03,
    letterSpacing: "-0.04em",
    fontWeight: 900,
  },
  bodyText: {
    maxWidth: "900px",
    margin: "16px 0 0",
    fontSize: "17px",
    lineHeight: 1.5,
    color: "#173026",
  },
  note: {
    margin: "14px 0 0",
    fontSize: "17px",
    fontWeight: 800,
    color: "#173026",
  },
  trust: {
    margin: "16px 0 0",
    paddingTop: "12px",
    borderTop: "1px solid rgba(74,50,29,0.18)",
    fontSize: "14px",
    color: "#5f6f67",
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    minWidth: "190px",
  },
  button: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "46px",
    borderRadius: "999px",
    padding: "12px 18px",
    background: "rgba(255,255,255,0.9)",
    border: "1px solid rgba(74,50,29,0.2)",
    color: "#173f2c",
    fontWeight: 850,
    textDecoration: "none",
    boxShadow: "0 10px 22px rgba(74,50,29,0.12)",
  },
  primaryButton: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "46px",
    borderRadius: "999px",
    padding: "12px 18px",
    background: "linear-gradient(180deg, #ffe08a, #e6b84c)",
    border: "1px solid rgba(74,50,29,0.2)",
    color: "#173f2c",
    fontWeight: 850,
    textDecoration: "none",
    boxShadow: "0 10px 22px rgba(74,50,29,0.12)",
  },
  footer: {
    width: "min(1180px, 94vw)",
    margin: "28px auto 0",
    padding: "22px 0 36px",
    borderTop: "1px solid rgba(74,50,29,0.16)",
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    color: "#5f6f67",
    fontSize: "14px",
  },
  footerLinks: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    gap: "12px 18px",
    color: "#173f2c",
    fontWeight: 700,
  },
};

export default function Home() {
  return (
    <main style={styles.page}>
      <section style={styles.hero} aria-labelledby="hero-title">
        <div style={styles.heroCopy}>
          <h1 id="hero-title" style={styles.h1}>
            The insider’s guide to the Smokies:
          </h1>
          <p style={styles.heroText}>
            Better routes, places to eat, deals, things to do, events and visitor resources without the guesswork.
          </p>
        </div>
      </section>

      <section style={styles.menu} aria-label="Smokies guide sections">
        <div style={styles.tileGrid}>
          {tiles.map((tile, index) => (
            <a style={styles.tile} href={tile.href} key={tile.title} aria-label={tile.title}>
              <img
                alt=""
                decoding={index === 0 ? "sync" : "async"}
                fetchPriority={index === 0 ? "high" : "auto"}
                src={tile.image}
                style={styles.tileImg}
              />
            </a>
          ))}
        </div>
      </section>

      <section style={styles.business} id="business" aria-labelledby="business-title">
        <div>
          <p style={styles.label}>FOR SMOKIES BUSINESSES</p>
          <h2 id="business-title" style={styles.h2}>
            Reach visitors before they choose where to eat, stay, shop or play.
          </h2>
          <p style={styles.bodyText}>
            Smokies Insider Guide is built for people planning real trips to Gatlinburg, Pigeon Forge, Sevierville, Townsend and the National Park. If your business serves Smokies visitors, this is where you want to be seen.
          </p>
          <p style={styles.note}>Get listed, share a deal or ask about sponsor spots.</p>
          <p style={styles.trust}>
            Sponsored placements are labeled. Offers should be current. Business details are reviewed before publishing.
          </p>
        </div>
        <div style={styles.actions} aria-label="Business actions">
          <a style={styles.primaryButton} href="#business">Advertise With Us</a>
          <a style={styles.button} href="#business">Submit a Deal</a>
          <a style={styles.button} href="#business">Claim Your Business</a>
        </div>
      </section>

      <footer style={styles.footer}>
        <div>
          <strong style={{ color: "#173f2c", display: "block" }}>Smokies Insider Guide</strong>
          <span>Local roots. Better Smokies planning.</span>
        </div>
        <nav aria-label="Footer navigation" style={styles.footerLinks}>
          <a href="#business">Contact</a>
          <a href="#business">Advertise</a>
          <a href="#">Privacy</a>
          <a href="#">Disclaimer</a>
        </nav>
      </footer>
    </main>
  );
}
