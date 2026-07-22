import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/guide";
import {
  gatlinburgPlaces,
  pigeonForgePlaces,
  npsTagFacts,
  LAST_CLUSTER_CHECK,
  parkingClusterNav,
} from "@/data/parking-places";
import { breadcrumbSchema, webPageSchema } from "@/lib/seoSchema";

const pageTitle = "Smokies Parking Decision Guide";
const pageDescription =
  "Short decision path for Gatlinburg, Pigeon Forge and national park parking — named first choices from verified city and NPS sources.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/go/parking" },
  openGraph: {
    title: `${pageTitle} | Smoky Insider`,
    description: pageDescription,
    url: "https://www.smokyinsider.com/go/parking",
  },
};

export default function ParkingDecisionPage() {
  const gbgFirst = gatlinburgPlaces[0];
  const gbgGarage = gatlinburgPlaces.find((p) => p.id === "gbg-mcmahan-garage")!;
  const pfFirst = pigeonForgePlaces[0];

  return (
    <main className="destination-page">
      <header className="destination-header">
        <Link className="wordmark" href="/">
          Smoky Insider
        </Link>
        <Link className="back-link" href="/go">
          Go
        </Link>
      </header>

      <section className="destination-hero">
        <p className="eyebrow">Short parking decision</p>
        <h1>Where should you park?</h1>
        <p className="seo-direct-copy">
          Gatlinburg: free park-and-ride at {gbgFirst.address}, or a city garage at 15 USD per day.
          Pigeon Forge: free parking at {pfFirst.address} (trolley hub). National park: physical
          parking tag required after 15 minutes — {npsTagFacts.prices.daily} day /{" "}
          {npsTagFacts.prices.weekly} week / {npsTagFacts.prices.annual} year.
        </p>
        <p>
          <strong>Last checked:</strong> {LAST_CLUSTER_CHECK}
        </p>
        <div className="destination-actions">
          <Link className="button button-primary" href="/smokies-parking-trolley-guide">
            Open full parking guide
          </Link>
          <Link className="button button-secondary" href="/smokies-parking-trolley-guide#parking-tool">
            Parking strategy tool
          </Link>
        </div>
      </section>

      <nav className="destination-section" aria-label="Parking cluster navigation">
        <p className="eyebrow">In this cluster</p>
        <div className="destination-actions">
          {parkingClusterNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      <section className="destination-section">
        <div className="destination-heading">
          <p className="eyebrow">Gatlinburg</p>
          <h2>First choice and backup</h2>
        </div>
        <div className="destination-grid destination-grid-compact">
          <article className="destination-card">
            <h3>{gbgFirst.name}</h3>
            <p>{gbgFirst.address}</p>
            <p>{gbgFirst.pricingStatus}</p>
            <p>{gbgFirst.bestFor}</p>
            <p>
              <span className="verify-badge">{gbgFirst.verification}</span> · {gbgFirst.dateChecked}
            </p>
          </article>
          <article className="destination-card">
            <h3>{gbgGarage.name}</h3>
            <p>{gbgGarage.address}</p>
            <p>{gbgGarage.pricingStatus}</p>
            <p>{gbgGarage.bestFor}</p>
            <p>
              <span className="verify-badge">{gbgGarage.verification}</span> ·{" "}
              {gbgGarage.dateChecked}
            </p>
          </article>
        </div>
      </section>

      <section className="destination-section">
        <div className="destination-heading">
          <p className="eyebrow">Pigeon Forge</p>
          <h2>Trolley hub first</h2>
        </div>
        <article className="destination-card">
          <h3>{pfFirst.name}</h3>
          <p>{pfFirst.address}</p>
          <p>{pfFirst.pricingStatus}</p>
          <p>{pfFirst.bestFor}</p>
          <p>
            <span className="verify-badge">{pfFirst.verification}</span> · {pfFirst.dateChecked}
          </p>
        </article>
      </section>

      <section className="destination-section">
        <div className="destination-heading">
          <p className="eyebrow">National park</p>
          <h2>Tag before cell service drops</h2>
        </div>
        <ul className="area-list">
          <li>{npsTagFacts.requiredWhen}</li>
          <li>
            Prices: daily {npsTagFacts.prices.daily}, weekly {npsTagFacts.prices.weekly}, annual{" "}
            {npsTagFacts.prices.annual}
          </li>
          <li>{npsTagFacts.doesNotGuarantee}</li>
          <li>
            <Link href="/parking-tag">Full parking-tag guide</Link>
          </li>
        </ul>
      </section>

      <aside className="destination-section source-note">
        <p className="eyebrow">Source of truth</p>
        <h2>Full tables and tool live on the flagship guide</h2>
        <p>
          This page is the short decision path. Named lots, comparison tables, the interactive tool
          and printable summary are on the{" "}
          <Link href="/smokies-parking-trolley-guide">full parking and trolley guide</Link>.
        </p>
      </aside>

      <JsonLd
        data={webPageSchema({
          path: "/go/parking",
          title: pageTitle,
          description: pageDescription,
          dateModified: LAST_CLUSTER_CHECK,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Go", url: "/go" },
          { name: "Parking decision", url: "/go/parking" },
        ])}
      />
    </main>
  );
}
