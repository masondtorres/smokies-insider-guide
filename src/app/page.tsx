import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/guide";
import { breadcrumbSchema, webPageSchema, webSiteSchema } from "@/lib/seoSchema";

export const metadata: Metadata = {
  title: "Smoky Mountains Trip Planner | Smokies Insider Guide",
  description:
    "Plan a practical Smokies trip by choosing what to do, where to go, where to eat, where to stay and what to save.",
  alternates: { canonical: "/" },
};

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
  { title: "Go", kicker: "Towns & routes", text: "Choose a town, park approach or scenic drive before traffic chooses for you.", href: "/go", number: "01" },
  { title: "Do", kicker: "Build the day", text: "Sort family activities, rainy-day options, Dollywood planning and lower-cost ideas.", href: "/do", number: "02" },
  { title: "See", kicker: "Park & views", text: "Find Cades Cove, overlooks, trails and scenic stops that fit your available time.", href: "/see", number: "03" },
  { title: "Eat", kicker: "Meal planning", text: "Compare food areas and keep a backup plan for busy meal times.", href: "/eat", number: "04" },
  { title: "Stay", kicker: "Choose a base", text: "Compare Gatlinburg, Pigeon Forge, Sevierville, Townsend and cabin options.", href: "/stay", number: "05" },
  { title: "Deals", kicker: "Check the value", text: "Review the deals guide without relying on unverified coupons or offers.", href: "/deals", number: "06" },
];

const tripShapes = [
  { title: "Family trip", text: "Activities, breaks and practical pacing for a mixed-age day.", href: "/pigeon-forge-with-kids" },
  { title: "Rainy day", text: "Indoor options and flexible backups when outdoor plans shift.", href: "/rainy-day" },
  { title: "Free or cheap", text: "Park time, simple stops and lower-cost ways to fill the day.", href: "/free-and-cheap-smokies" },
  { title: "Easy walking", text: "Lower-walking ideas and mobility-aware planning notes.", href: "/accessible-smokies" },
  { title: "Scenic drive", text: "Choose a route based on time, traffic and where you start.", href: "/scenic-drives" },
  { title: "First-time visit", text: "Get the towns, park basics and trip order straight first.", href: "/first-time-smokies" },
];

const areas = [
  { title: "Gatlinburg", text: "Park access, walkable blocks and busy arrival patterns.", href: "/gatlinburg" },
  { title: "Pigeon Forge", text: "Family activities, Dollywood and Parkway planning.", href: "/pigeon-forge" },
  { title: "Sevierville", text: "A broader base with town and Parkway connections.", href: "/sevierville" },
  { title: "Townsend", text: "A quieter base near the park's west side.", href: "/townsend" },
  { title: "Great Smoky Mountains National Park", text: "Plan park approaches, trails, parking and driving time.", href: "/go" },
  { title: "Cades Cove", text: "Check timing, traffic and the loop before committing the day.", href: "/cades-cove" },
];

const beforeYouGo = [
  { label: "Parking & traffic", text: "Parking availability and traffic patterns can change by time, day and season.", href: "/smokies-parking-trolley-guide", action: "Read the parking guide" },
  { label: "Park conditions", text: "Road, trail and weather conditions can change. Check official park information before leaving.", href: "/visitor-resources", action: "Find official resources" },
  { label: "Save your ideas", text: "Cell service can be limited in the park. Save useful pages to My Plan before you go.", href: "/my-plan", action: "Open My Plan" },
  { label: "Hours & tickets", text: "Verify current hours, ticket rules and reservations with the operator before driving.", href: "/source-and-verification-policy", action: "How we verify" },
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
    <main className="foundation-home">
      <header className="foundation-header">
        <Link className="foundation-wordmark" href="/" aria-label="Smokies Insider home">
          <span>Smokies</span> Insider
        </Link>
        <nav className="foundation-nav" aria-label="Primary navigation">
          {mainLinks.map(([label, href]) => (
            <Link href={href} key={href}>{label}</Link>
          ))}
        </nav>
      </header>

      <section className="foundation-hero">
        <div className="foundation-ridge foundation-ridge-back" aria-hidden="true" />
        <div className="foundation-ridge foundation-ridge-mid" aria-hidden="true" />
        <div className="foundation-ridge foundation-ridge-front" aria-hidden="true" />
        <div className="foundation-width foundation-hero-layout">
          <div className="foundation-hero-content">
            <p className="foundation-eyebrow">A practical Smoky Mountains planning guide</p>
            <h1>Spend less of your Smokies trip guessing.</h1>
            <p className="foundation-hero-promise">
              Choose what to do, where to go, where to eat and where to stay, then save the ideas that fit your trip.
            </p>
            <div className="foundation-actions">
              <Link className="foundation-button foundation-button-primary" href="/start-planning">Start Planning</Link>
              <Link className="foundation-button foundation-button-secondary" href="/my-plan">View My Plan</Link>
            </div>
            <p className="foundation-trust-line">
              Independent and source-aware. Check current conditions, hours and access before you drive.
            </p>
          </div>
          <aside className="foundation-hero-note" aria-label="How to use this guide">
            <span>Start here</span>
            <strong>Pick the shape of your day before filling the schedule.</strong>
            <p>Town, weather, walking tolerance and traffic often matter more than a long list of stops.</p>
          </aside>
        </div>
      </section>

      <section className="foundation-section foundation-width" aria-labelledby="planning-heading">
        <div className="foundation-section-heading">
          <div>
            <p className="foundation-section-label">Plan by decision</p>
            <h2 id="planning-heading">What do you need to figure out?</h2>
          </div>
          <p>Use one lane or work through all six. Save useful ideas as you go.</p>
        </div>
        <div className="foundation-planning-grid">
          {planningCards.map((card) => (
            <Link className="foundation-planning-card" href={card.href} key={card.href}>
              <span className="foundation-card-number" aria-hidden="true">{card.number}</span>
              <span className="foundation-card-kicker">{card.kicker}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <span className="foundation-card-link">Explore {card.title} <b aria-hidden="true">&rarr;</b></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="foundation-section foundation-trip-section" aria-labelledby="trip-shape-heading">
        <div className="foundation-width">
          <div className="foundation-section-heading">
            <div>
              <p className="foundation-section-label">A faster starting point</p>
              <h2 id="trip-shape-heading">Start with your trip shape</h2>
            </div>
            <p>Choose the constraint that will shape your day most.</p>
          </div>
          <div className="foundation-shape-grid">
            {tripShapes.map((item) => (
              <Link className="foundation-shape-card" href={item.href} key={item.href}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span>Open guide <b aria-hidden="true">&rarr;</b></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="foundation-section foundation-width" aria-labelledby="area-heading">
        <div className="foundation-section-heading">
          <div>
            <p className="foundation-section-label">Plan by location</p>
            <h2 id="area-heading">Choose your area</h2>
          </div>
          <p>Driving time adds up. Start with where you are staying or where you want the day to end.</p>
        </div>
        <div className="foundation-area-grid">
          {areas.map((area) => (
            <Link className="foundation-area-card" href={area.href} key={area.title}>
              <span className="foundation-map-dot" aria-hidden="true" />
              <div><h3>{area.title}</h3><p>{area.text}</p></div>
              <b aria-hidden="true">&rarr;</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="foundation-section foundation-before-section" aria-labelledby="before-heading">
        <div className="foundation-width">
          <div className="foundation-section-heading foundation-before-heading">
            <div>
              <p className="foundation-section-label">Four practical checks</p>
              <h2 id="before-heading">Before you go</h2>
            </div>
            <p>The Smokies are easier when the backup plan is part of the plan.</p>
          </div>
          <div className="foundation-before-grid">
            {beforeYouGo.map((note) => (
              <article className="foundation-before-card" key={note.label}>
                <h3>{note.label}</h3>
                <p>{note.text}</p>
                <Link href={note.href}>{note.action} <span aria-hidden="true">&rarr;</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="foundation-footer">
        <div>
          <strong>Smokies Insider</strong>
          <span>Independent trip-planning help for the Smoky Mountains.</span>
          <small>&copy; 2026 Smokies Insider</small>
        </div>
        <nav className="foundation-footer-links" aria-label="Policy and information links">
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
