import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/guide";
import { breadcrumbSchema, webPageSchema, webSiteSchema } from "@/lib/seoSchema";
import "./homepage-v2.css";

export const metadata: Metadata = {
  title: "Smoky Insider | Smoky Mountains Trip Planner",
  description:
    "Plan a Smokies trip with local-first help for routes, attractions, scenic stops, restaurants, stays, deals and before-you-go details.",
  alternates: { canonical: "/" },
};

const topLinks = [
  ["Start Here", "/start-here"],
  ["Best Time", "/best-time-to-visit"],
  ["Deals", "/deals"],
  ["My Plan", "/my-plan"],
];

const mainLinks = [
  ["Go", "/go"],
  ["Do", "/do"],
  ["See", "/see"],
  ["Eat", "/eat"],
  ["Stay", "/stay"],
  ["Deals", "/deals"],
  ["My Plan", "/my-plan"],
];

const planningCards = [
  { title: "Things to Do", text: "Attractions, hikes, shows, rainy-day options and family-friendly picks.", href: "/do", icon: "Play" },
  { title: "Places to Stay", text: "Cabins, hotels, campgrounds and the best area to base your trip.", href: "/stay", icon: "Stay" },
  { title: "Where to Eat", text: "Local restaurants, quick meals, breakfast stops and kid-friendly food.", href: "/eat", icon: "Dine" },
  { title: "Scenic Smokies", text: "Overlooks, scenic drives, waterfalls, Cades Cove and photo spots.", href: "/see", icon: "See" },
  { title: "Getting Around", text: "Routes, parking, traffic, trolleys and arrival timing before you go.", href: "/go", icon: "Go" },
  { title: "Deals and Savings", text: "Tickets, coupons, budget ideas and ways to stretch the trip money.", href: "/deals", icon: "Save" },
];

const utilityItems = [
  "Avoid bad timing",
  "Know parking pressure",
  "Pick the right area",
  "Save the useful stuff",
];

const beforeYouGo = [
  { label: "Parking and traffic", href: "/smokies-parking-trolley-guide" },
  { label: "Official park resources", href: "/visitor-resources" },
  { label: "Best time to visit", href: "/best-time-to-visit" },
  { label: "Rainy-day backup ideas", href: "/rainy-day-smokies-with-kids" },
  { label: "Family-friendly planning", href: "/pigeon-forge-with-kids" },
];

const footerLinks = [
  ["About", "/about"],
  ["Contact", "/contact"],
  ["Privacy", "/privacy"],
  ["Terms", "/terms"],
  ["Editorial Policy", "/editorial-policy"],
  ["Source & Verification", "/source-and-verification-policy"],
];

export default function Home() {
  return (
    <main className="smokies-home-v2">
      <div className="si-topbar" aria-label="Quick links">
        <div className="si-width si-topbar-inner">
          <span>Independent Smoky Mountains trip planning</span>
          <nav aria-label="Secondary navigation">
            {topLinks.map(([label, href]) => (
              <Link href={href} key={href}>{label}</Link>
            ))}
          </nav>
        </div>
      </div>

      <header className="si-header">
        <div className="si-width si-header-inner">
          <Link className="si-wordmark" href="/" aria-label="Smoky Insider home">
            <span>Smoky</span> Insider
          </Link>
          <nav className="si-nav" aria-label="Primary navigation">
            {mainLinks.map(([label, href]) => (
              <Link href={href} key={href}>{label}</Link>
            ))}
          </nav>
        </div>
      </header>

      <section className="si-hero" aria-labelledby="home-title">
        <div className="si-ridge-one" aria-hidden="true" />
        <div className="si-ridge-two" aria-hidden="true" />
        <div className="si-ridge-three" aria-hidden="true" />
        <div className="si-width si-hero-layout">
          <div className="si-hero-copy">
            <p className="si-kicker">Welcome to the Smokies</p>
            <h1 id="home-title">Plan your Smokies trip without the guesswork.</h1>
            <p className="si-hero-promise">
              Local-first planning help for Gatlinburg, Pigeon Forge, Sevierville, Townsend and the Great Smoky Mountains.
            </p>
            <div className="si-actions">
              <Link className="si-button si-button-primary" href="/start-here">Start Planning</Link>
              <Link className="si-button si-button-secondary" href="/my-plan">Build My Plan</Link>
            </div>
          </div>
          <aside className="si-hero-panel" aria-label="Trip planning shortcuts">
            <strong>Start with the part that matters most.</strong>
            <Link href="/do">Find things to do</Link>
            <Link href="/stay">Choose where to stay</Link>
            <Link href="/go">Check parking and routes</Link>
            <Link href="/deals">Find savings</Link>
          </aside>
        </div>
      </section>

      <section className="si-trip-strip" aria-label="Popular planning categories">
        <div className="si-width si-trip-strip-inner">
          <Link href="/stay">Places to Stay</Link>
          <Link href="/see">Smoky Mountains</Link>
          <Link href="/eat">Where to Eat</Link>
          <Link href="/do">Things to Do</Link>
          <Link href="/rainy-day-smokies-with-kids">Family Fun</Link>
        </div>
      </section>

      <section className="si-section si-width" aria-labelledby="planning-heading">
        <div className="si-section-heading">
          <p className="si-section-kicker">Plan your trip</p>
          <h2 id="planning-heading">What do you need help with?</h2>
          <p>Choose one part of your trip and start planning.</p>
        </div>
        <div className="si-card-grid">
          {planningCards.map((card) => (
            <Link className="si-card" href={card.href} key={card.href}>
              <span className="si-icon" aria-hidden="true">{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <span>Read more</span>
            </Link>
          ))}
        </div>

        <div className="si-value-strip" aria-label="Planning value">
          {utilityItems.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="si-before" aria-labelledby="before-heading">
        <div className="si-width si-before-layout">
          <div>
            <p className="si-section-kicker">Before you go</p>
            <h2 id="before-heading">Check the details that change the day.</h2>
            <p>Parking, weather, traffic and timing usually decide whether a Smokies day feels easy or exhausting.</p>
          </div>
          <div className="si-before-grid">
            {beforeYouGo.map((note) => (
              <Link href={note.href} key={note.label}>{note.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="si-footer si-width">
        <div>
          <strong>Smoky Insider</strong>
          <span>Independent trip-planning help for the Smoky Mountains.</span>
          <small>&copy; 2026 Smoky Insider</small>
        </div>
        <nav className="si-footer-links" aria-label="Policy and information links">
          {footerLinks.map(([label, href]) => (
            <Link href={href} key={href}>{label}</Link>
          ))}
        </nav>
      </footer>

      <JsonLd data={webSiteSchema()} />
      <JsonLd data={webPageSchema({ path: "/", title: metadata.title as string, description: metadata.description ?? "" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }])} />
    </main>
  );
}
