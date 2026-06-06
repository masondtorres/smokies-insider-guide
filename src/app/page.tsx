import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { JsonLd, SiteFooter, SiteHeader, SourceBox } from "@/components/guide";
import { breadcrumbSchema, faqSchema, webPageSchema, webSiteSchema } from "@/lib/seoSchema";
import { towns } from "@/lib/smokiesData";

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

const heroPlannerFields = [
  ["Where are you staying?", "Select a town"],
  ["Who’s coming?", "Families, couples, etc."],
  ["How many days?", "2, 3, 4, 5+"],
];

const featureTiles = [
  {
    title: "Scenic Drives",
    image: "/images/smokies-hero-fall.png",
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
    image: "/images/smokies-hero-fall-logo.png",
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

const quickPlanCards = [
  {
    title: "I have kids",
    image: "/images/things-to-do-tile.png",
    alt: "Smokies attraction scene for families",
    text: "Kid-friendly attractions and easy days.",
    href: "/pigeon-forge-with-kids",
  },
  {
    title: "I need rainy-day ideas",
    image: "/images/visitor-resources-tile.png",
    alt: "Smokies planning materials for rainy-day backups",
    text: "Indoor plans when weather changes.",
    href: "/rainy-day",
  },
  {
    title: "I want scenic views",
    image: "/images/smokies-hero-fall.png",
    alt: "Smoky Mountains scenic road and fall color",
    text: "Drives, overlooks and photo stops.",
    href: "/scenic-drives",
  },
  {
    title: "I want deals",
    image: "/images/coupons-deals-tile.png",
    alt: "Smokies coupons and savings cards",
    text: "Current deals on attractions and more.",
    href: "/deals",
  },
];

const practicalGuides = [
  { title: "Parking and trolley guide", href: "/smokies-parking-trolley-guide", text: "Know when walking, trolleys or paid parking make more sense." },
  { title: "Where to stay", href: "/where-to-stay", text: "Pick the town that reduces your driving, not the one with the loudest listing." },
  { title: "Things to do", href: "/things-to-do", text: "Use attractions as anchors, not a giant checklist." },
  { title: "What to skip", href: "/what-to-skip", text: "Avoid the traps that drain time, money and patience." },
];

const linkColumns = [
  {
    title: "Plan by town",
    links: [
      ["Gatlinburg", "/gatlinburg"],
      ["Pigeon Forge", "/pigeon-forge"],
      ["Sevierville", "/sevierville"],
      ["Townsend", "/townsend"],
      ["Cades Cove", "/cades-cove"],
    ],
  },
  {
    title: "Plan by trip type",
    links: [
      ["Families with Kids", "/pigeon-forge-with-kids"],
      ["Couples & Romance", "/start-planning"],
      ["Rainy Day Plans", "/rainy-day"],
      ["Free & Cheap", "/free-and-cheap-smokies"],
      ["First Time Visitors", "/first-time-smokies"],
    ],
  },
  {
    title: "Plan by need",
    links: [
      ["Restaurants", "/restaurants"],
      ["Scenic Drives", "/scenic-drives"],
      ["Trails & Hikes", "/things-to-do"],
      ["Parking & Traffic", "/smokies-parking-trolley-guide"],
      ["Trolleys & Shuttles", "/smokies-parking-trolley-guide"],
    ],
  },
  {
    title: "Popular guides",
    links: [
      ["How Many Days?", "/how-many-days"],
      ["Gatlinburg vs Pigeon Forge", "/gatlinburg-vs-pigeon-forge"],
      ["Smokies with Toddlers", "/smokies-with-toddlers"],
      ["What to Skip", "/what-to-skip"],
      ["Dollywood Day Plan", "/dollywood-day-plan"],
    ],
  },
  {
    title: "Trending",
    links: [
      ["Dollywood Day Plan", "/dollywood-day-plan"],
      ["Cades Cove", "/cades-cove"],
      ["Free & Cheap", "/free-and-cheap-smokies"],
      ["Rainy Day Plans", "/rainy-day"],
      ["Visitor Resources", "/visitor-resources"],
    ],
  },
];

const businessActions = [
  ["Advertise With Us", "Sponsorships and opportunities", "/advertise"],
  ["Submit a Deal", "Share a current offer", "/contact"],
  ["Claim Your Business", "Ask about listing updates", "/contact"],
];

const homepageFaqs = [
  {
    question: "What is Smokies Insider Guide?",
    answer:
      "Smokies Insider Guide is a planning-first guide for choosing a Smoky Mountains day by base town, group, weather, walking limits, crowd tolerance and budget. It gives planning guidance, not live hours, prices, road status or attraction availability.",
  },
  {
    question: "Who is the Smokies planner for?",
    answer:
      "The planner is for first-time visitors, families, rainy-day groups, low-walking groups, budget travelers and visitors choosing between Gatlinburg, Pigeon Forge, Sevierville, Townsend, Wears Valley and NC-side routes.",
  },
  {
    question: "What should visitors verify before relying on a plan?",
    answer:
      "Hours, prices, road status, trolley details, parking rules, closures and availability can change. Check official sources before relying on a final plan.",
  },
];

export default function Home() {
  return (
    <main className="home-page guide-home field-guide-home product-home">
      <SiteHeader />

      <section className="home-tool-hero" aria-labelledby="home-title">
        <p className="hero-kicker">THE INSIDER&rsquo;S GUIDE TO THE</p>

        <div className="hero-logo-block" aria-label="Smokies Insider Guide">
          <Image
            src="/images/smokies-logo-white.png"
            alt="Smokies Insider Guide"
            width={1200}
            height={675}
            priority
          />
        </div>

        <div className="home-tool-copy">
          <h1 id="home-title">The Insider&rsquo;s Guide to the Smokies</h1>
          <p className="home-tool-promise">
            Pick the right town, avoid wasted drive time and build a Smokies day that fits your group, your time and the weather.
          </p>
        </div>

        <form className="hero-planner-strip" aria-label="Quick Smokies trip planner preview">
          <div className="hero-planner-fields">
            {heroPlannerFields.map(([label, value]) => (
              <div className="hero-planner-field" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <Link className="button button-primary" href="/start-planning">Plan My Smokies Trip</Link>
        </form>
        <p className="hero-support-note">No account needed. Start with your town, group and time.</p>
      </section>

      <section className="home-feature-grid" aria-label="Smokies guide categories">
        {featureTiles.map((tile) => (
          <Link className="home-feature-card" href={tile.href} key={tile.title}>
            <Image src={tile.image} alt={tile.alt} width={480} height={320} />
            <div>
              <h2>{tile.title}</h2>
              <p>{tile.text}</p>
              <span>{tile.cta}</span>
            </div>
          </Link>
        ))}
      </section>

      <section className="home-insider-strip" aria-labelledby="insider-strip-title">
        <div className="insider-strip-copy">
          <p className="eyebrow">Local planning shortcut</p>
          <h2 id="insider-strip-title">Plan your Smokies day by what actually fits.</h2>
          <p>
            Answer a few quick questions and get a plan that fits your group, your time, the weather and your starting point.
          </p>
          <Link className="button button-primary" href="/start-planning">Plan My Smokies Trip</Link>
        </div>
        <div className="quick-plan-grid">
          {quickPlanCards.map((card) => (
            <Link className="quick-plan-card" href={card.href} key={card.title}>
              <Image src={card.image} alt={card.alt} width={420} height={260} />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-link-columns" aria-label="Smokies quick planning links">
        {linkColumns.map((column) => (
          <nav className="home-link-column" aria-label={column.title} key={column.title}>
            <h2>{column.title}</h2>
            {column.links.map(([label, href]) => (
              <Link href={href} key={href}>
                <span>{label}</span>
                <strong aria-hidden="true">-&gt;</strong>
              </Link>
            ))}
          </nav>
        ))}
      </section>

      <section className="seo-answer-panel product-seo-panel" aria-labelledby="what-is-sig">
        <p className="eyebrow">Direct answer</p>
        <h2 id="what-is-sig">What is Smokies Insider Guide?</h2>
        <p>
          Smokies Insider Guide helps visitors choose the right town, route, restaurant, deal and day plan for a Smoky Mountains trip. Start with where you’re staying, who is coming and how much time you have.
        </p>
        <div className="seo-two-column">
          <article>
            <h3>Sponsored placements are labeled</h3>
            <p>
              Business exposure should be clear. Sponsored placements are labeled so visitors know what is editorial guidance and what is paid visibility.
            </p>
          </article>
          <article>
            <h3>Offers should be current</h3>
            <p>
              Deals and business details can change. Offers should be current before publishing, and listing updates are reviewed before they go live.
            </p>
          </article>
          <article>
            <h3>Check park conditions before you go</h3>
            <p>
              Park conditions, roads, closures, hours and availability can change. Use this guide for planning direction and check official sources before relying on time-sensitive details.
            </p>
          </article>
        </div>
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

      <section className="town-board" aria-labelledby="town-board-title">
        <div className="section-heading field-heading">
          <div>
            <p className="eyebrow">Base town reality check</p>
            <h2 id="town-board-title">The same attraction list creates different trips from different towns.</h2>
          </div>
        </div>
        <div className="town-board-grid">
          {towns.map((town) => (
            <article className="town-board-column" key={town.name}>
              <h3>{town.name}</h3>
              <dl>
                <div><dt>Best for</dt><dd>{town.bestFor}</dd></div>
                <div><dt>Skip if</dt><dd>{town.skipIf}</dd></div>
                <div><dt>Common mistake</dt><dd>{town.mistake}</dd></div>
              </dl>
              <Link href={town.href}>Read guide</Link>
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

      <section className="seo-faq-panel" aria-labelledby="home-faq-title">
        <p className="eyebrow">Smokies planning FAQ</p>
        <h2 id="home-faq-title">Questions this guide is built to answer</h2>
        <div className="seo-faq-list">
          {homepageFaqs.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <JsonLd data={webSiteSchema()} />
      <JsonLd data={webPageSchema({
        path: "/",
        title: "Smoky Mountains Trip Planner | Smokies Insider Guide",
        description: metadata.description ?? "",
      })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }])} />
      <JsonLd data={faqSchema(homepageFaqs)} />

      <SiteFooter />
    </main>
  );
}
