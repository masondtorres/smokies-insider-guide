import Link from "next/link";
import type { Metadata } from "next";
import { DirectAnswer, JsonLd, LastUpdated, SiteFooter, SiteHeader, SourceBox } from "@/components/guide";
import { guidePages, towns } from "@/lib/smokiesData";

export const metadata: Metadata = {
  title: "Where to Stay in the Smokies: Compare Gatlinburg, Pigeon Forge, Sevierville and Townsend",
  description: guidePages["/where-to-stay"].description,
};

const tripTypes = [
  ["First-time family", "Compare Gatlinburg and Pigeon Forge first, then choose by walkability or attractions."],
  ["Quiet scenic trip", "Start with Townsend or Wears Valley before adding Cades Cove or Foothills Parkway."],
  ["Budget-focused stay", "Check Sevierville and outer bases, then make sure the drive still fits the day."],
  ["NC-side route", "Use Cherokee or Bryson City only when the day is actually built around the NC side."],
];

export default function WhereToStayPage() {
  return (
    <main className="guide-page stay-page">
      <SiteHeader />
      <article className="guide-article">
        <header className="guide-hero">
          <p className="eyebrow">Base-town decision</p>
          <h1>Where to stay in the Smokies</h1>
          <p>{guidePages["/where-to-stay"].description}</p>
          <LastUpdated />
        </header>
        <DirectAnswer>
          <p>{guidePages["/where-to-stay"].directAnswer}</p>
        </DirectAnswer>

        <section className="comparison-panel" aria-labelledby="comparison-title">
          <div className="route-board-title">
            <p className="eyebrow">Direct comparison</p>
            <h2 id="comparison-title">Choose by what the town makes easier.</h2>
          </div>
          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Town</th>
                  <th>Choose this if</th>
                  <th>Skip this if</th>
                  <th>Common mistake</th>
                </tr>
              </thead>
              <tbody>
                {towns.map((town) => (
                  <tr key={town.name}>
                    <th scope="row">{town.name}</th>
                    <td data-label="Choose this if">{town.bestFor}</td>
                    <td data-label="Skip this if">{town.skipIf}</td>
                    <td data-label="Common mistake">{town.mistake}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="choose-by-trip" aria-labelledby="trip-type-title">
          <div>
            <p className="eyebrow">Choose by trip type</p>
            <h2 id="trip-type-title">Do not book a base that fights your main day.</h2>
          </div>
          <div className="route-row-list">
            {tripTypes.map(([title, text]) => (
              <section className="route-row" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </section>
            ))}
          </div>
        </section>

        <section className="town-board town-route-cards" aria-labelledby="town-route-title">
          <div className="route-board-title">
            <p className="eyebrow">Town route cards</p>
            <h2 id="town-route-title">Read the town guide after the base decision.</h2>
          </div>
          <div className="town-board-grid">
            {towns.map((town) => (
              <article className="town-board-column" key={town.name}>
                <h3>{town.name}</h3>
                <p>{town.bestFor}</p>
                <Link href={town.href}>Read guide</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="warning-note">
          <p className="eyebrow">Common mistakes</p>
          <div>
            <strong>Booking for a view before checking the daily route</strong>
            <p>A cabin can look right online and still make every meal, park stop and rainy backup harder.</p>
          </div>
          <div>
            <strong>Treating every town as close enough</strong>
            <p>Short map distances can feel long when the Parkway, downtown parking or slow park roads are involved.</p>
          </div>
        </section>

        <section className="internal-link-grid">
          <h2>Read next</h2>
          <div>
            <Link href="/plan-your-trip"><strong>Use the planner</strong><span>Turn the base choice into a day.</span></Link>
            <Link href="/gatlinburg-vs-pigeon-forge"><strong>Compare Gatlinburg and Pigeon Forge</strong><span>Make the main TN-side tradeoff.</span></Link>
            <Link href="/what-to-skip"><strong>Protect the route</strong><span>Avoid the mistakes that waste a short trip.</span></Link>
          </div>
        </section>
        <SourceBox />
      </article>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Where to Stay in the Smokies",
          description: metadata.description,
          dateModified: "2026-06-05",
        }}
      />
      <SiteFooter />
    </main>
  );
}
