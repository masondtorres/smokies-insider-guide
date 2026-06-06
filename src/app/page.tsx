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
    cta: "Build a family plan",
  },
  {
    title: "Toddlers or grandparents",
    area: "Townsend, Wears Valley or a simple Gatlinburg base",
    fit: "Shorter walks, seated meals, scenic drives and easy exits.",
    avoid: "Do not call a plan low-walking until you know the parking and surfaces.",
    href: "/start-planning",
    cta: "Build an easy-pace plan",
  },
  {
    title: "Rainy day",
    area: "Pigeon Forge or walkable Gatlinburg",
    fit: "WonderWorks, arcades, indoor mini golf, covered shopping and a food-first backup.",
    avoid: "Do not try to rescue a full outdoor itinerary in the rain.",
    href: "/rainy-day",
    cta: "See rainy-day moves",
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
    cta: "Build a low-walking plan",
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
    href: "/scenic-drives",
    cta: "See Scenic Drives",
  },
  {
    title: "Things To Do",
    image: "/images/things-to-do-tile.png",
    alt: "Family-friendly Smokies attraction scene",
    text: "Attractions, trails, shows, rides and rainy-day plans.",
    href: "/things-to-do",
    cta: "Find Things To Do",
  },
  {
    title: "Places To Eat",
    image: "/images/eat-stay-shop-tile.png",
    alt: "Smokies food and shopping scene",
    text: "Breakfast stops, BBQ, family meals and places close to your day plan.",
    href: "/restaurants",
    cta: "Find Restaurants",
  },
  {
    title: "Where To Stay",
    image: "/images/smokies-hero-fall.png",
    alt: "Smoky Mountains sunset view",
    text: "Cabins, hotels and town choices based on how you want the trip to move.",
    href: "/where-to-stay",
    cta: "Compare Stays",
  },
  {
    title: "Visitor Resources",
    image: "/images/visitor-resources-tile.png",
    alt: "Smokies visitor map and planning materials",
    text: "Parking, traffic, maps, weather backup and park basics.",
    href: "/visitor-resources",
    cta: "Read Visitor Tips",
  },
  {
    title: "Coupons & Deals",
    image: "/images/coupons-deals-tile.png",
    alt: "Smokies coupons and deal cards",
    text: "Deals that fit attractions, restaurants, shopping and family plans.",
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
        <p className="hero-kicker">THE INSIDER&rsquo;S GUIDE TO THE</p>

        <div className="home-tool-copy">
          <h1 id="home-title">The Insider&rsquo;s Guide to the Smokies</h1>
          <p className="home-tool-promise">
            Pick the right town, avoid wasted drive time and build a Smokies day that fits your group, your time and the weather.
          </p>
        </div>

        <Link className="button button-primary" href="/start-planning">Plan My Smokies Trip</Link>
        <p className="hero-support-note">No account needed. Start with your town, group and time.</p>
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
          Get listed, share a deal or ask about sponsor spots that put your business in front of people planning their Smokies trip.
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
