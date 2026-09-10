import type { Metadata } from "next";
import Link from "next/link";
import "./home-overhaul.css";
import { DecisionEngine } from "@/components/decision-engine";
import { JsonLd } from "@/components/guide";
import { mapsUrl, places } from "@/data/places";
import { breadcrumbSchema, organizationSchema, webPageSchema, webSiteSchema } from "@/lib/seoSchema";

export const metadata: Metadata = {
  title: "Build a Smokies Day That Actually Works",
  description:
    "Independent Smoky Mountains planning for Gatlinburg, Pigeon Forge, Sevierville and Townsend. Choose your base, group and today's focus. Get traffic, parking, weather and backup help without the guesswork.",
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
        Peak-season mistake #1: building a day that ignores traffic.{" "}
        <Link href="/parking-traffic">Check parking and traffic before you leave.</Link>
      </div>

      <section className="home-hero home-hero-compact" aria-labelledby="home-title">
        <div className="home-hero-inner">
          <p className="home-trust-line">Independent Smokies planning</p>
          <h1 id="home-title">Build a Smokies day that actually works.</h1>
          <p className="home-hero-lead">
            Choose where you&apos;re staying, who&apos;s traveling, and what matters today. Get practical help with traffic, parking, weather, town choices, park stops, food and backup plans.
          </p>
          <div className="home-hero-actions">
            <Link className="home-btn home-btn-primary" href="/start-planning">
              Start Planning
            </Link>
            <Link className="home-btn home-btn-light" href="/today">
              Check Today&apos;s Conditions
            </Link>
          </div>
          <p className="home-independence">
            Independent Smoky Mountains planning. Not affiliated with the National Park Service, Dollywood or any tourism board. Time-sensitive information links to the official source.
          </p>
        </div>
      </section>

      <div className="home-shell home-engine-first">
        <DecisionEngine />
      </div>

      <div className="home-shell">
        <nav className="home-intel" aria-label="Fast Smokies trip decisions">
          <Link href="/today">
            <small>Right now</small>
            <strong>Roads, weather + park</strong>
            <span>Start with what can change your day.</span>
          </Link>
          <Link href="/parking-traffic">
            <small>Avoid the mess</small>
            <strong>Traffic + parking</strong>
            <span>Know the choke points before you commit.</span>
          </Link>
          <Link href="/where-to-stay">
            <small>Base</small>
            <strong>Where to stay</strong>
            <span>Compare the four towns by what they make easier.</span>
          </Link>
          <Link href="/rainy-day">
            <small>Backup</small>
            <strong>Rain changed the plan</strong>
            <span>Stay in one town instead of crossing the county.</span>
          </Link>
        </nav>
      </div>

      <section className="home-section home-shell">
        <span className="home-kicker">Pick the right base</span>
        <h2 className="home-heading">Four different trips hide under one destination name.</h2>
        <p className="home-subhead">
          Gatlinburg, Pigeon Forge, Sevierville and Townsend are not interchangeable. Start with the town that matches the first two days.
        </p>
        <div className="town-grid">
          <Link className="town-card town-gatlinburg" href="/gatlinburg">
            <strong>Gatlinburg</strong>
            <span>Walkable food, downtown stops and the closest park gateway.</span>
          </Link>
          <Link className="town-card town-pigeon" href="/pigeon-forge">
            <strong>Pigeon Forge</strong>
            <span>Shows, family attractions and Parkway energy. Expect the drive tax.</span>
          </Link>
          <Link className="town-card town-sevierville" href="/sevierville">
            <strong>Sevierville</strong>
            <span>Often cheaper space. Only works if you accept the extra driving.</span>
          </Link>
          <Link className="town-card town-townsend" href="/townsend">
            <strong>Townsend</strong>
            <span>Quieter base and Cades Cove access. Weak indoor backup in rain.</span>
          </Link>
        </div>
        <p className="home-note">
          <Link href="/where-to-stay">See the full town comparison</Link> before you lock a cabin.
        </p>
      </section>

      <section className="home-section home-section-dark">
        <div className="home-shell">
          <span className="home-kicker">Before you leave the cabin</span>
          <h2 className="home-heading">Check the details that can break the day.</h2>
          <p className="home-subhead">
            Roads, lots and hours change. The official source controls the fact. This site tells you what to check and how to pivot.
          </p>
          <div className="photo-story">
            <figure className="photo-big">
              <img src="/images/photos/newfound-gap-autumn.webp" alt="Autumn color along Newfound Gap Road in Great Smoky Mountains National Park" />
              <figcaption>Newfound Gap Road</figcaption>
            </figure>
            <div className="photo-stack">
              <figure>
                <img src="/images/photos/ramsey-cascades.webp" alt="Ramsey Cascades waterfall in Great Smoky Mountains National Park" />
                <figcaption>Ramsey Cascades</figcaption>
              </figure>
              <figure>
                <img src="/images/photos/cades-cove-gregg-cable-house.webp" alt="Historic Gregg-Cable House in Cades Cove" />
                <figcaption>Cades Cove</figcaption>
              </figure>
            </div>
          </div>
          <p className="home-note home-note-light">
            <Link href="/today">Open today&apos;s official checks</Link>
            {" · "}
            <Link href="/photo-credits">Photo credits</Link>
          </p>
        </div>
      </section>

      <section className="home-section home-shell">
        <span className="home-kicker">Eat near the plan</span>
        <h2 className="home-heading">Open the place, not a meal zone.</h2>
        <p className="home-subhead">
          Featured listings have a working official website and directions. Hours, tickets and waits stay with the business that controls them.
        </p>
        <div className="place-rail">
          {featured.map((place) => (
            <article className="place-card" key={place.slug}>
              <span className="place-meta">
                {place.town} • {place.kind}
              </span>
              <h3>
                <Link href={`/places/${place.slug}`}>{place.name}</Link>
              </h3>
              <p>{place.familyFit}</p>
              <div className="place-links">
                <Link href={`/places/${place.slug}`}>Insider page</Link>
                <a href={place.website} target="_blank" rel="noreferrer">
                  Official site
                </a>
                <a href={mapsUrl(place)} target="_blank" rel="noreferrer">
                  Directions
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section-tight home-shell">
        <div className="book-bridge">
          <span className="home-kicker">The book and the website</span>
          <h2>The book carries the durable planning. The website carries what changes.</h2>
          <p>
            The related Smokies Insider Guide project explains how the region fits together, where to stay, how to group a day and how to avoid wasting half the trip crossing the county. This site carries the changing layer: closures, hours, events, road conditions and corrections.
          </p>
          <p className="home-note">No retailer link or purchase claim until publication state is verified.</p>
        </div>
      </section>

      <section className="home-section-tight home-shell">
        <div className="revenue-strip">
          <div>
            <span className="home-kicker">Local business owners</span>
            <h2>Get found while visitors are deciding where to spend the day.</h2>
            <p>
              Verified listings and labeled sponsored placements only. Paid placement does not buy safety claims, local endorsements or editorial ranking. Traffic numbers are not invented here.
            </p>
          </div>
          <Link className="home-btn" href="/advertise">
            Advertise or get listed
          </Link>
        </div>
      </section>

      <section className="home-section home-shell">
        <span className="home-kicker">Independent advice. Visible sources.</span>
        <h2 className="home-heading">Useful first. Paid placements stay labeled.</h2>
        <div className="trip-grid">
          <article className="trip-card">
            <span className="home-kicker">Family</span>
            <h3>Kids and rain</h3>
            <p>Keep one indoor anchor in the same town as lunch before the weather starts driving the car.</p>
            <Link href="/rainy-day">Rainy-day backups</Link>
          </article>
          <article className="trip-card">
            <span className="home-kicker">Park day</span>
            <h3>One corridor</h3>
            <p>Check roads first. Build around one park area instead of stacking Cades Cove, Newfound Gap and downtown.</p>
            <Link href="/today">Check today</Link>
          </article>
          <article className="trip-card">
            <span className="home-kicker">Trust</span>
            <h3>Corrections stay open</h3>
            <p>If a page is stale, send the URL and the official source. The site should change when the fact changes.</p>
            <Link href="/report-a-correction">Report a correction</Link>
          </article>
        </div>
        <p className="home-note">
          Smokies Insider is independent and is not affiliated with the National Park Service or listed businesses unless a relationship is specifically disclosed.
        </p>
      </section>

      <JsonLd data={webSiteSchema()} />
      <JsonLd data={organizationSchema()} />
      <JsonLd
        data={webPageSchema({
          path: "/",
          title: metadata.title as string,
          description: metadata.description ?? "",
          dateModified: "2026-09-10",
        })}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }])} />
    </main>
  );
}
