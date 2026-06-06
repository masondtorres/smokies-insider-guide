import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { JsonLd, SiteFooter, SiteHeader, SourceBox } from "@/components/guide";
import { breadcrumbSchema, webPageSchema, webSiteSchema } from "@/lib/seoSchema";

export const metadata: Metadata = {
  title: "Smoky Mountains Trip Planner | Smokies Insider Guide",
  description:
    "Build a practical Smokies day plan by base town, group, weather, walking limits, crowds and budget before you stack attractions.",
};

const tripTypes = [
  {
    title: "Family with kids",
    area: "Pigeon Forge Parkway or Sevierville",
    fit: "One strong kid anchor such as WonderWorks, Parrot Mountain, The Island or a Dollywood day.",
    avoid: "Do not stack every kid stop because they are close on the map.",
    href: "/start-planning",
    cta: "Build a family day",
  },
  {
    title: "Toddlers or grandparents",
    area: "Townsend, Wears Valley or a simple Gatlinburg base",
    fit: "Shorter walks, seated meals, scenic drives and easy exits.",
    avoid: "Do not call a plan low-walking until you know the parking and surfaces.",
    href: "/start-planning",
    cta: "Build an easy-pace day",
  },
  {
    title: "Rainy day",
    area: "Pigeon Forge or walkable Gatlinburg",
    fit: "WonderWorks, arcades, indoor mini golf, covered shopping and a food-first backup.",
    avoid: "Do not try to rescue a full outdoor itinerary in the rain.",
    href: "/rainy-day",
    cta: "Save a rainy day",
  },
  {
    title: "First-time visitor",
    area: "Gatlinburg or Pigeon Forge",
    fit: "One town anchor, one scenic piece and one flexible backup.",
    avoid: "Do not try Gatlinburg, Pigeon Forge, Cades Cove and Dollywood in one day.",
    href: "/first-time-smokies",
    cta: "Plan a first visit",
  },
  {
    title: "Budget day",
    area: "Townsend, Wears Valley, Sevierville or park-side scenery",
    fit: "Scenic drives, overlooks, town walks, simple meals and one paid stop only if it earns the time.",
    avoid: "Do not let small ticketed stops quietly become the whole budget.",
    href: "/deals",
    cta: "Find lower-cost options",
  },
  {
    title: "Low-walking day",
    area: "Townsend, Foothills Parkway, Gatlinburg edge or Sevierville",
    fit: "Scenic routes, short stops, seated attractions and fewer parking changes.",
    avoid: "Do not assume every popular overlook or town block is easy for every visitor.",
    href: "/start-planning",
    cta: "Build a low-walking day",
  },
  {
    title: "Cades Cove / park day",
    area: "Townsend",
    fit: "A slow scenic loop, quiet-side stops and room for delays.",
    avoid: "Do not squeeze Cades Cove between Dollywood and a dinner reservation.",
    href: "/cades-cove",
    cta: "Plan the park day",
  },
  {
    title: "Dollywood / attraction day",
    area: "Pigeon Forge",
    fit: "Dollywood as the main anchor with nearby food, lodging reset or one light add-on.",
    avoid: "Do not treat Dollywood as a quick half-day unless your group already knows that pace.",
    href: "/dollywood-day-plan",
    cta: "Plan the attraction day",
  },
];

const featureTiles = [
  {
    title: "Scenic Drives",
    image: "/images/explore-smokies-tile.png",
    alt: "Smoky Mountains ridges at sunrise",
    text: "Ridge roads, Cades Cove routes and pull-off views worth planning around.",
    bestFor: "Morning drives, slow-pace days, photography stops",
    watchOut: "Cades Cove loop closes to cars Wednesday and Saturday mornings",
    href: "/scenic-drives",
    cta: "See Scenic Drives",
  },
  {
    title: "Things To Do",
    image: "/images/things-to-do-tile.png",
    alt: "Family-friendly Smokies attraction scene",
    text: "Attractions, trails, shows, rides and rainy-day plans.",
    bestFor: "Anchoring your day around one strong activity",
    watchOut: "Stacking multiple paid stops adds up fast in time and money",
    href: "/things-to-do",
    cta: "Find Things To Do",
  },
  {
    title: "Places To Eat",
    image: "/images/eat-stay-shop-tile.png",
    alt: "Smokies food and shopping scene",
    text: "Breakfast stops, BBQ, family meals and places close to your day plan.",
    bestFor: "Building meals around where you already are",
    watchOut: "Peak-hour waits in Gatlinburg and Pigeon Forge can run 45-90 minutes",
    href: "/restaurants",
    cta: "Find Restaurants",
  },
  {
    title: "Where To Stay",
    image: "/images/smokies-hero-fall.png",
    alt: "Smoky Mountains sunset view",
    text: "Cabins, hotels and town choices based on how you want the trip to move.",
    bestFor: "Choosing a base that cuts your daily driving",
    watchOut: "Cabin locations vary widely - check actual drive times, not map distance",
    href: "/where-to-stay",
    cta: "Compare Stays",
  },
  {
    title: "Visitor Resources",
    image: "/images/visitor-resources-tile.png",
    alt: "Smokies visitor map and planning materials",
    text: "Parking, traffic, maps, weather backup and park basics.",
    bestFor: "Avoiding the parking and traffic mistakes most first-timers make",
    watchOut: "Peak-season traffic in Gatlinburg can add an hour to short drives",
    href: "/visitor-resources",
    cta: "Read Visitor Tips",
  },
  {
    title: "Coupons & Deals",
    image: "/images/coupons-deals-tile.png",
    alt: "Smokies coupons and deal cards",
    text: "Deals that fit attractions, restaurants, shopping and family plans.",
    bestFor: "Stretching a budget day or finding a discount on a paid anchor",
    watchOut: "Not every deal saves meaningful money - check the total before committing",
    href: "/deals",
    cta: "View Deals",
  },
];

const practicalGuides = [
  { title: "Parking and trolley guide", href: "/smokies-parking-trolley-guide", text: "Know when walking, trolleys or paid parking make more sense." },
  { title: "Where to stay", href: "/where-to-stay", text: "Pick the town that reduces your driving, not the one with the loudest listing." },
  { title: "Things to do", href: "/things-to-do", text: "Use attractions as anchors, not a giant checklist." },
  { title: "What to skip", href: "/what-to-skip", text: "Avoid the traps that drain time, money and patience." },
];

const businessActions = [
  ["Advertise With Us", "Sponsorships and opportunities", "/advertise"],
  ["List or Update Your Business", "Submit a deal, request a listing or claim your business", "/contact"],
];

export default function Home() {
  return (
    <main className="home-page guide-home field-guide-home product-home">
      <SiteHeader />

      <section className="home-tool-hero" aria-labelledby="home-title">
        <div className="home-tool-copy">
          <h1 id="home-title">Plan the Smokies without wasting half your trip guessing.</h1>
          <p className="home-tool-promise">
            Tell us where you&apos;re staying, who&apos;s coming and what kind of day you want. We&apos;ll point you toward the right town, route, stops and backup plan.
          </p>
        </div>

        <Link className="button button-primary" href="/start-planning">Plan My Smokies Trip</Link>

    
      </section>

      <section className="home-feature-grid" aria-label="Smokies guide categories">
        {featureTiles.map((tile) => (
          <Link className="home-feature-card" href={tile.href} key={tile.title}>
            <Image
              src={tile.image}
              alt={tile.alt}
              width={480}
              height={320}
              sizes="(max-width: 760px) 100vw, (max-width: 1050px) 33vw, 17vw"
            />
            <div>
              <h2>{tile.title}</h2>
              <p>{tile.text}</p>
              <dl className="feature-card-meta">
                <div>
                  <dt>Best for</dt>
                  <dd>{tile.bestFor}</dd>
                </div>
                <div>
                  <dt>Watch out for</dt>
                  <dd>{tile.watchOut}</dd>
                </div>
              </dl>
              <span>{tile.cta}</span>
            </div>
          </Link>
        ))}
      </section>

      <section className="trip-type-section" aria-labelledby="trip-type-title">
        <div className="section-heading field-heading">
          <div>
            <p className="eyebrow">Start with your trip type</p>
            <h2 id="trip-type-title">Pick the plan shape before you pick attractions.</h2>
          </div>
          <p className="section-route-note">Each option starts with a base area, a good fit and the mistake to avoid.</p>
        </div>

        <div className="trip-type-grid">
          {tripTypes.map((type) => (
            <article className="trip-type-card" key={type.title}>
              <h3>{type.title}</h3>
              <dl>
                <div>
                  <dt>Best starting area</dt>
                  <dd>{type.area}</dd>
                </div>
                <div>
                  <dt>Best fit</dt>
                  <dd>{type.fit}</dd>
                </div>
                <div>
                  <dt>Avoid this mistake</dt>
                  <dd>{type.avoid}</dd>
                </div>
              </dl>
              <Link href={type.href}>{type.cta}</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="practical-guide-module product-guide-module" aria-labelledby="practical-guides-title">
        <div>
          <p className="eyebrow">Use these after the plan shape</p>
          <h2 id="practical-guides-title">Helpful pages once you know the day you are building.</h2>
        </div>
        <div className="practical-guide-list">
          {practicalGuides.map((guide) => (
            <Link href={guide.href} key={guide.href}>
              <strong>{guide.title}</strong>
              <span>{guide.text}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="trust-panel" aria-labelledby="trust-title">
        <div>
          <p className="eyebrow">Planning guidance, not fake certainty</p>
          <h2 id="trust-title">Useful pages say what can change.</h2>
          <p>
            Hours, prices, roads, parking rules and availability can change. Use this guide for planning direction, then verify current details before relying on them.
          </p>
        </div>
        <SourceBox />
      </section>

      <section className="home-business-cta" aria-labelledby="business-cta-title">
        <p className="eyebrow">For local businesses</p>
        <h2 id="business-cta-title">Reach visitors before they choose where to eat, stay, shop or play.</h2>
        <p>
          Smokies Insider Guide puts local businesses inside planning moments: family days, rainy-day backups, food near attractions, town guides, deals and itinerary pages.
        </p>
        <div className="business-action-row">
          {businessActions.map(([title, text, href]) => (
            <Link href={href} key={title}>
              <strong>{title}</strong>
              <span>{text}</span>
            </Link>
          ))}
        </div>
        <small>Sponsored placements are labeled. Offers should be current. Business details are reviewed before publishing.</small>
      </section>

      <JsonLd data={webSiteSchema()} />
      <JsonLd data={webPageSchema({
        path: "/",
        title: "Smoky Mountains Trip Planner | Smokies Insider Guide",
        description: metadata.description ?? "",
      })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }])} />

      <SiteFooter />
    </main>
  );
}