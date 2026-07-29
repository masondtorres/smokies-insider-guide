import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/guide";
import { breadcrumbSchema, webPageSchema } from "@/lib/seoSchema";

export const metadata: Metadata = {
  title: "Start Here | Smoky Insider",
  description:
    "Start planning a Smokies trip by trip shape or area, then use the interactive planner when you want a more tailored starting point.",
  alternates: { canonical: "/start-here" },
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

const planningPrompts = [
  { title: "Where should I go?", text: "Choose a town, route or park approach.", href: "/go" },
  { title: "What should I do?", text: "Match the day to your group, weather and pace.", href: "/do" },
  { title: "What should I see?", text: "Plan scenic time around access and conditions.", href: "/see" },
  { title: "Where should we eat?", text: "Keep meals practical for the route you are using.", href: "/eat" },
  { title: "Where should we stay?", text: "Choose a base that supports the trip you want.", href: "/stay" },
  { title: "How do I plan for value?", text: "Use the deals guide without relying on unverified offers.", href: "/deals" },
];

const footerLinks = [
  ["About", "/about"],
  ["Contact", "/contact"],
  ["Privacy", "/privacy"],
  ["Terms", "/terms"],
  ["Editorial Policy", "/editorial-policy"],
  ["Source & Verification", "/source-and-verification-policy"],
];

export default function StartHerePage() {
  return (
    <main className="foundation-home foundation-start-here">
      <header className="foundation-header">
        <Link className="foundation-wordmark" href="/" aria-label="Smoky Insider home">
          <span>Smoky</span> Insider
        </Link>
        <nav className="foundation-nav" aria-label="Primary navigation">
          {mainLinks.map(([label, href]) => (
            <Link href={href} key={href}>{label}</Link>
          ))}
        </nav>
      </header>

      <section className="foundation-start-hero">
        <div className="foundation-width">
          <p className="foundation-section-label">Smokies field guide</p>
          <h1>Start with the shape and location of your trip.</h1>
          <p>
            Choose the constraint that matters most or begin with the area you plan to use. For a more tailored starting mix, use the interactive trip planner.
          </p>
          <Link className="foundation-button foundation-button-primary" href="/start-planning">Use the Trip Planner</Link>
        </div>
      </section>

      <section className="foundation-section foundation-width foundation-prompt-section" aria-labelledby="planning-prompt-heading">
        <div className="foundation-section-heading">
          <div>
            <p className="foundation-section-label">Choose the next question</p>
            <h2 id="planning-prompt-heading">What are you trying to figure out?</h2>
          </div>
          <p>Go directly to a category or use the trip planner for a suggested starting mix.</p>
        </div>
        <div className="foundation-prompt-grid">
          {planningPrompts.map((prompt) => (
            <Link href={prompt.href} key={prompt.href}>
              <strong>{prompt.title}</strong>
              <span>{prompt.text}</span>
            </Link>
          ))}
        </div>
        <Link className="foundation-planner-link" href="/start-planning">Open the interactive Trip Planner <span aria-hidden="true">&rarr;</span></Link>
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

      <footer className="foundation-footer">
        <div>
          <strong>Smoky Insider</strong>
          <span>Independent trip-planning help for the Smoky Mountains.</span>
          <small>&copy; 2026 Smoky Insider</small>
        </div>
        <nav className="foundation-footer-links" aria-label="Policy and information links">
          {footerLinks.map(([label, href]) => (
            <Link href={href} key={href}>{label}</Link>
          ))}
        </nav>
      </footer>

      <JsonLd data={webPageSchema({ path: "/start-here", title: metadata.title as string, description: metadata.description ?? "" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Start Here", url: "/start-here" }])} />
    </main>
  );
}
