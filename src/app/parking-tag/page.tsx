import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/guide";
import { npsTagFacts, LAST_CLUSTER_CHECK, parkingClusterNav } from "@/data/parking-places";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seoSchema";

const pageTitle = "Great Smoky Mountains Parking Tag Guide";
const pageDescription =
  "NPS parking tag prices, 15-minute rule, physical-display requirement, disability exemption, purchase links and what a tag does not guarantee.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/parking-tag" },
  openGraph: {
    title: `${pageTitle} | Smoky Insider`,
    description: pageDescription,
    url: "https://www.smokyinsider.com/parking-tag",
  },
};

const faqs = [
  {
    question: "Do I need a parking tag in the Smokies?",
    answer: npsTagFacts.requiredWhen,
  },
  {
    question: "How much does a parking tag cost?",
    answer: `Daily ${npsTagFacts.prices.daily}, weekly ${npsTagFacts.prices.weekly}, annual ${npsTagFacts.prices.annual} (NPS fees page, checked ${npsTagFacts.dateChecked}).`,
  },
  {
    question: "Does a parking tag reserve a space?",
    answer: npsTagFacts.doesNotGuarantee,
  },
  {
    question: "Are disability placards exempt?",
    answer: npsTagFacts.disabilityExemption,
  },
];

export default function ParkingTagPage() {
  return (
    <main className="destination-page">
      <header className="destination-header">
        <Link className="wordmark" href="/">
          Smoky Insider
        </Link>
        <Link className="back-link" href="/smokies-parking-trolley-guide">
          Parking guide
        </Link>
      </header>

      <section className="destination-hero">
        <p className="eyebrow">National park parking tag</p>
        <h1>What you need before you park in the park</h1>
        <p className="seo-direct-copy">
          If you park more than 15 minutes inside Great Smoky Mountains National Park, you need a
          physical parking tag: {npsTagFacts.prices.daily} day, {npsTagFacts.prices.weekly} week, or{" "}
          {npsTagFacts.prices.annual} year. A tag does not guarantee a space. Buy it before you lose
          cell service.
        </p>
        <p>
          <strong>Last checked:</strong> {LAST_CLUSTER_CHECK} · {npsTagFacts.npsUpdated}
        </p>
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
          <h2>Rules that matter</h2>
        </div>
        <ul className="area-list">
          <li>
            <strong>When required:</strong> {npsTagFacts.requiredWhen}
          </li>
          <li>
            <strong>Prices:</strong> Daily {npsTagFacts.prices.daily}, weekly{" "}
            {npsTagFacts.prices.weekly}, annual {npsTagFacts.prices.annual}
          </li>
          <li>
            <strong>Does not guarantee:</strong> {npsTagFacts.doesNotGuarantee}
          </li>
          <li>
            <strong>Display:</strong> {npsTagFacts.display}
          </li>
          <li>
            <strong>Not accepted as substitutes:</strong> {npsTagFacts.notAccepted}
          </li>
          <li>
            <strong>Disability exemption:</strong> {npsTagFacts.disabilityExemption}
          </li>
        </ul>
      </section>

      <section className="destination-section">
        <div className="destination-heading">
          <h2>Where to buy</h2>
        </div>
        <p>
          Online:{" "}
          <a href={npsTagFacts.purchaseOnline.dailyWeekly} target="_blank" rel="noopener noreferrer">
            Recreation.gov daily/weekly
          </a>
          {" · "}
          <a href={npsTagFacts.purchaseOnline.annual} target="_blank" rel="noopener noreferrer">
            Annual tag (Smokies Life)
          </a>
        </p>
        <h3>Sample purchase locations</h3>
        <ul className="area-list">
          {npsTagFacts.samplePurchaseLocations.map((loc) => (
            <li key={loc.address}>
              {loc.name} — {loc.address}
            </li>
          ))}
        </ul>
        <p>
          <span className="verify-badge">{npsTagFacts.verification}</span> ·{" "}
          <a href={npsTagFacts.officialSource} target="_blank" rel="noopener noreferrer">
            NPS fees page
          </a>{" "}
          · Checked {npsTagFacts.dateChecked}
        </p>
      </section>

      <section className="destination-section seo-faq-panel">
        <h2>FAQ</h2>
        <div className="seo-faq-list">
          {faqs.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <aside className="destination-section source-note">
        <p>
          Town parking is separate. For Gatlinburg and Pigeon Forge lots, use the{" "}
          <Link href="/smokies-parking-trolley-guide">full parking guide</Link> or the{" "}
          <Link href="/go/parking">short decision page</Link>.
        </p>
      </aside>

      <JsonLd
        data={webPageSchema({
          path: "/parking-tag",
          title: pageTitle,
          description: pageDescription,
          dateModified: LAST_CLUSTER_CHECK,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Parking tag", url: "/parking-tag" },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />
    </main>
  );
}
