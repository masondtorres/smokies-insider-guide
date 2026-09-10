import type { Metadata } from "next";
import Link from "next/link";
import "./home-overhaul.css";
import { DecisionEngine } from "@/components/decision-engine";
import { JsonLd } from "@/components/guide";
import { mapsUrl, places } from "@/data/places";
import { breadcrumbSchema, organizationSchema, webPageSchema, webSiteSchema } from "@/lib/seoSchema";

export const metadata: Metadata = {
  title: "Smokies Insider | Gatlinburg, Pigeon Forge & Great Smoky Mountains Guide",
  description: "Plan the Smokies with current conditions, real restaurants and attractions, fall color, traffic help, official links and a trip plan you can actually use.",
  alternates: { canonical: "/" },
};

const featured = [
  places.find((p) => p.slug === "pancake-pantry-gatlinburg"),
  places.find((p) => p.slug === "dollywood"),
  places.find((p) => p.slug === "ripleys-aquarium-gatlinburg"),
  places.find((p) => p.slug === "local-goat-pigeon-forge"),
  places.find((p) => p.slug === "anakeesta"),
  places.find((p) => p.slug === "dancing-bear-lodge"),
].filter(Boolean) as typeof places;

export default function Home() {
  return (
    <main className="home-overhaul" id="home">
      <div className="home-alert">
        Peak-season mistake #1: building a day that ignores traffic. <Link href="/parking-traffic">Check parking + traffic before you leave.</Link>
      </div>

      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero-inner">
          <span className="home-season">Fall in the Smokies</span>
          <h1 id="home-title">Come for the color. Don’t lose the day in traffic.</h1>
          <p className="home-hero-lead">
            Real places. Official links. Park conditions. Food, attractions, lodging and trip decisions that make sense once you are actually here.
          </p>
          <div className="home-hero-actions">
            <Link className="home-btn home-btn-primary" href="/today">What’s happening today</Link>
            <Link className="home-btn home-btn-light" href="/eat">Find somewhere to eat</Link>
            <Link className="home-btn home-btn-light" href="/my-plan">Open My Plan</Link>
          </div>
        </div>
        <span className="home-credit">Cades Cove • Great Smoky Mountains National Park</span>
      </section>

      <div className="home-shell">
        <nav className="home-intel" aria-label="Fast Smokies trip decisions">
          <Link href="/today"><small>Right now</small><strong>Roads, weather + park</strong><span>Start with what can change your day.</span></Link>
          <Link href="/parking-traffic"><small>Avoid the mess</small><strong>Traffic + parking</strong><span>Know the choke points before you commit.</span></Link>
          <Link href="/eat"><small>Eat</small><strong>Real restaurants</strong><span>Official sites, directions and useful context.</span></Link>
          <Link href="/do"><small>Do</small><strong>Real attractions</strong><span>Build the day around anchors worth the drive.</span></Link>
        </nav>
      </div>

      <section className="home-section home-shell">
        <span className="home-kicker">Pick your version of the Smokies</span>
        <h2 className="home-heading">Four different trips hide under one destination name.</h2>
        <p className="home-subhead">Gatlinburg, Pigeon Forge, Townsend and the national park are not interchangeable. Start with the experience you actually want.</p>
        <div className="town-grid">
          <Link className="town-card town-gatlinburg" href="/eat"><strong>Gatlinburg</strong><span>Walkable food, attractions and a direct park gateway.</span></Link>
          <Link className="town-card town-pigeon" href="/do"><strong>Pigeon Forge</strong><span>Big attractions, shows, family entertainment and Parkway energy.</span></Link>
          <Link className="town-card town-townsend" href="/stay"><strong>Townsend</strong><span>Quieter base, Cades Cove access and a slower side of the Smokies.</span></Link>
          <Link className="town-card town-park" href="/see"><strong>The National Park</strong><span>Waterfalls, overlooks, wildlife, scenic roads and the reason this place exists.</span></Link>
        </div>
      </section>

      <section className="home-section home-section-dark">
        <div className="home-shell">
          <span className="home-kicker">This is what you came for</span>
          <h2 className="home-heading">The Smokies should look unforgettable before the trip starts.</h2>
          <p className="home-subhead">Fall color, mountain layers, waterfalls and old cabins are part of the trip, not decoration around a planning tool.</p>
          <div className="photo-story">
            <figure className="photo-big"><img src="/images/photos/newfound-gap-autumn.webp" alt="Autumn color along Newfound Gap Road in Great Smoky Mountains National Park"/><figcaption>Newfound Gap Road • fall</figcaption></figure>
            <div className="photo-stack">
              <figure><img src="/images/photos/ramsey-cascades.webp" alt="Ramsey Cascades waterfall in Great Smoky Mountains National Park"/><figcaption>Ramsey Cascades</figcaption></figure>
              <figure><img src="/images/photos/cades-cove-gregg-cable-house.webp" alt="Historic Gregg-Cable House in Cades Cove"/><figcaption>Cades Cove</figcaption></figure>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-shell">
        <span className="home-kicker">Start with real places</span>
        <h2 className="home-heading">No more “meal zones.” Open the place.</h2>
        <p className="home-subhead">Every featured listing below has a working official website and directions. Hours, tickets and availability stay with the business that controls them.</p>
        <div className="place-rail">
          {featured.map((place) => (
            <article className="place-card" key={place.slug}>
              <span className="place-meta">{place.town} • {place.kind}</span>
              <h3><Link href={`/places/${place.slug}`}>{place.name}</Link></h3>
              <p>{place.familyFit}</p>
              <div className="place-links">
                <Link href={`/places/${place.slug}`}>Insider page</Link>
                <a href={place.website} target="_blank" rel="noreferrer">Official site ↗</a>
                <a href={mapsUrl(place)} target="_blank" rel="noreferrer">Directions ↗</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section-tight home-shell">
        <div className="revenue-strip">
          <div>
            <span className="home-kicker">Local business owners</span>
            <h2>Get found while visitors are deciding where to spend the day.</h2>
            <p>Smokies Insider is building verified local listings, featured placements and sponsorship inventory. Paid placement stays labeled. Editorial judgment stays independent.</p>
          </div>
          <Link className="home-btn" href="/advertise">Advertise or get listed</Link>
        </div>
      </section>

      <section className="home-section home-shell">
        <span className="home-kicker">Build a day that works</span>
        <h2 className="home-heading">Choose the problem you are actually trying to solve.</h2>
        <div className="trip-grid">
          <article className="trip-card"><span className="home-kicker">Family</span><h3>Kids + bad weather</h3><p>Keep an indoor anchor ready before rain starts controlling the trip.</p><Link href="/do">See indoor attractions →</Link></article>
          <article className="trip-card"><span className="home-kicker">Park day</span><h3>Color + scenic drive</h3><p>Check road conditions first, then build around one major park corridor instead of crossing the county all day.</p><Link href="/today">Check today →</Link></article>
          <article className="trip-card"><span className="home-kicker">Food</span><h3>Breakfast before the crowds</h3><p>Open verified restaurant pages, official sites and directions before you are hungry and stuck on the Parkway.</p><Link href="/eat">Open restaurants →</Link></article>
        </div>
        <div className="home-engine-wrap"><DecisionEngine /></div>
        <p className="home-note">Smokies Insider is independent and is not affiliated with the National Park Service or businesses listed unless a relationship is specifically disclosed.</p>
      </section>

      <JsonLd data={webSiteSchema()} />
      <JsonLd data={organizationSchema()} />
      <JsonLd data={webPageSchema({ path: "/", title: metadata.title as string, description: metadata.description ?? "", dateModified: "2026-09-10" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }])} />
    </main>
  );
}
