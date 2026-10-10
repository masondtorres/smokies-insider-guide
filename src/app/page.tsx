import type { Metadata } from "next";
import Link from "next/link";
import { InstantFinder } from "@/components/instant-finder";
import { JsonLd } from "@/components/guide";
import { breadcrumbSchema, organizationSchema, webPageSchema, webSiteSchema } from "@/lib/seoSchema";
import "./visitor-home.css";

export const metadata: Metadata = {
  title: "Smokies Insider | Find Things to Do in Gatlinburg, Pigeon Forge & the Smokies",
  description: "Find real places to visit across the Smoky Mountains. Choose your town and what you want to do, then open maps, official details, park conditions and free activities in seconds.",
  alternates: { canonical: "/" },
};

const regions = [
  { title: "Gatlinburg", description: "Walkable downtown, aquarium and the national park gateway.", href: "/gatlinburg", detail: "Downtown + park" },
  { title: "Pigeon Forge", description: "Dollywood, family attractions and the Parkway.", href: "/pigeon-forge", detail: "Big family fun" },
  { title: "Sevierville", description: "Historic downtown, shopping and easy access to nearby attractions.", href: "/sevierville", detail: "Explore at your pace" },
  { title: "Townsend", description: "Cades Cove, quiet scenery and the slower side of the mountains.", href: "/townsend", detail: "Nature + quiet" },
];

const adventures = [
  { eyebrow: "The mountains", title: "See the park without wasting the day", description: "Cades Cove, Newfound Gap and trails are not a quick loop together. Pick the park area that fits your day.", href: "/see", action: "Find scenic stops", image: "/images/photos/cades-cove-autumn.webp", alt: "Autumn foliage around Cades Cove in Great Smoky Mountains National Park" },
  { eyebrow: "When rain shows up", title: "Find an indoor backup in the right town", description: "Aquarium, interactive museums and family attractions with direct links to check tickets and hours.", href: "/rainy-day", action: "Find rainy-day options", image: "/images/photos/historic-appalachian-cabins.webp", alt: "Historic Appalachian cabins in Great Smoky Mountains National Park" },
];

export default function Home() {
  return (
    <main className="visitor-home" id="home">
      <section className="visitor-hero" aria-labelledby="home-title">
        <div className="visitor-hero-inner">
          <p className="visitor-eyebrow">Gatlinburg · Pigeon Forge · Sevierville · Townsend</p>
          <h1 id="home-title">Less searching.<br />More Smokies.</h1>
          <p>Find real places, free experiences, family favorites and a backup when plans change. Choose your area. Get directions. Go enjoy the mountains.</p>
          <div className="visitor-hero-actions">
            <a className="visitor-button visitor-primary" href="#find-now">Find something to do <span aria-hidden="true">↓</span></a>
            <Link className="visitor-button visitor-outline" href="/today">Check park & road conditions ↗</Link>
          </div>
        </div>
        <p className="visitor-photo-credit">Cades Cove, Great Smoky Mountains National Park · <Link href="/photo-credits">Photo credits</Link></p>
      </section>

      <div className="visitor-contained visitor-finder-wrap">
        <InstantFinder />
      </div>

      <section className="visitor-contained visitor-section visitor-itinerary-feature" aria-label="Illustrated three-day Gatlinburg trip">
        <Link href="/gatlinburg-3-day-itinerary">
          <img src="https://commons.wikimedia.org/wiki/Special:FilePath/GatlinburgAerial.jpg?width=1200" alt="Aerial view of downtown Gatlinburg, Tennessee" loading="lazy" />
          <span>
            <small>Featured photo itinerary</small>
            <strong>3 days in Gatlinburg, ready to explore.</strong>
            <span>Real photos. Downtown attractions, mountain views, historic sites, food, daily routes and directions to every stop.</span>
            <b>See the complete illustrated trip ↗</b>
          </span>
        </Link>
        <p>Gatlinburg aerial photo: Dswitz10734, <a href="https://commons.wikimedia.org/wiki/File:GatlinburgAerial.jpg">CC BY-SA 4.0</a>.</p>
      </section>

      <section className="visitor-contained visitor-section visitor-shortcuts" aria-label="Popular visitor shortcuts">
        <Link href="/free-and-cheap-smokies"><span>Spend less</span><strong>Actually free things to do →</strong></Link>
        <Link href="/rainy-day"><span>Weather changed?</span><strong>Indoor activities →</strong></Link>
        <Link href="/deals"><span>Before buying tickets</span><strong>Deals and savings →</strong></Link>
      </section>

      <section className="visitor-contained visitor-section" aria-labelledby="region-title">
        <div className="visitor-heading">
          <div><p className="visitor-eyebrow">Explore by place</p><h2 id="region-title">Four towns. Four different trips.</h2></div>
          <Link href="/where-to-stay">Compare where to stay ↗</Link>
        </div>
        <div className="visitor-regions">
          {regions.map((region) => (
            <Link href={region.href} key={region.title} className="visitor-region">
              <span>{region.detail}</span>
              <h3>{region.title}</h3>
              <p>{region.description}</p>
              <strong>Explore {region.title} ↗</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="visitor-contained visitor-section" aria-labelledby="adventure-title">
        <div className="visitor-heading"><div><p className="visitor-eyebrow">Start with the experience</p><h2 id="adventure-title">A better day starts here.</h2></div></div>
        <div className="visitor-adventures">
          {adventures.map((adventure) => (
            <Link className="visitor-adventure" href={adventure.href} key={adventure.title}>
              <img src={adventure.image} alt={adventure.alt} loading="lazy" />
              <span className="visitor-adventure-text">
                <span className="visitor-eyebrow">{adventure.eyebrow}</span>
                <strong>{adventure.title}</strong>
                <span>{adventure.description}</span>
                <b>{adventure.action} ↗</b>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="visitor-contained visitor-section visitor-savings" aria-labelledby="savings-title">
        <div>
          <p className="visitor-eyebrow">Real value, not imaginary coupons</p>
          <h2 id="savings-title">Some of the best experiences cost nothing to enter.</h2>
          <p>Great Smoky Mountains National Park charges no entrance fee, though parking tags generally apply to stops longer than 15 minutes. The Island in Pigeon Forge advertises free admission and parking. Attractions and purchases there may cost extra.</p>
        </div>
        <div className="visitor-savings-actions">
          <Link className="visitor-button visitor-primary" href="/deals">See verified free options ↗</Link>
          <a href="https://www.nps.gov/grsm/planyourvisit/fees.htm" target="_blank" rel="noopener noreferrer">Check current park parking rules ↗</a>
        </div>
      </section>

      <section className="visitor-contained visitor-section visitor-business">
        <div><p className="visitor-eyebrow">Own a local business?</p><h2>Help visitors find what you offer.</h2><p>Request a factual listing or ask about clearly labeled advertising. No invented reviews or visitor numbers.</p></div>
        <Link className="visitor-button visitor-dark" href="/advertise">Business listings & advertising ↗</Link>
      </section>

      <JsonLd data={webSiteSchema()} />
      <JsonLd data={organizationSchema()} />
      <JsonLd data={webPageSchema({ path: "/", title: "Smokies Insider | Find Things to Do", description: metadata.description ?? "", dateModified: "2026-10-09" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }])} />
    </main>
  );
}
