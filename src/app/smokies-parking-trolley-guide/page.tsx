import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/guide";
import { ParkingStrategyTool } from "@/components/parking-strategy-tool";
import { PrintButton } from "@/components/print-button";
import {
  gatlinburgPlaces,
  pigeonForgePlaces,
  npsTagFacts,
  LAST_CLUSTER_CHECK,
  parkingClusterNav,
} from "@/data/parking-places";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seoSchema";

const pageTitle = "Smokies Parking and Trolley Guide";
const pageDescription =
  "Named Gatlinburg and Pigeon Forge parking options, free park-and-ride lots, trolley hubs, and Great Smoky Mountains National Park parking-tag rules — with official sources and dates checked.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/smokies-parking-trolley-guide" },
  openGraph: {
    title: `${pageTitle} | Smoky Insider`,
    description: pageDescription,
    url: "https://www.smokyinsider.com/smokies-parking-trolley-guide",
  },
};

const faqs = [
  {
    question: "Where should I park in Gatlinburg?",
    answer:
      "If you want to avoid downtown traffic, use the free City of Gatlinburg park-and-ride at the Welcome Center (1011 Banner Rd) or at City Hall (1230 East Pkwy) and ride the free trolley. If you need the car on the Parkway, the McMahan garage at 520 Parkway and the Aquarium garage at 161 Greystone Heights Rd are both listed at 15 USD per day by the city (checked 2026-07-22).",
  },
  {
    question: "Is the Gatlinburg trolley free?",
    answer:
      "Yes. The official Gatlinburg tourism trolley page states there are no fares or fees to ride. Hours vary by season — confirm on the official page before you go.",
  },
  {
    question: "Where should I park in Pigeon Forge?",
    answer:
      "A practical first choice is free parking at the Mass Transit Trolley Station at Patriot Park (236 Old Mill Ave), where all trolley routes start and end. Additional free lots listed by the official trolley page include the River Lot (2936 Teaster Lane) and Mountain Lot (2989 Teaster Lane). Trolley fares apply — confirm current prices on the official page.",
  },
  {
    question: "Do I need a national park parking tag?",
    answer:
      "If you park more than 15 minutes inside Great Smoky Mountains National Park, yes. Tags are 5 USD daily, 15 USD weekly, or 40 USD annual (NPS fees page, checked 2026-07-22). A tag does not guarantee a space. Disability plate/placard holders are exempt per NPS FAQ.",
  },
  {
    question: "Where do I buy a parking tag?",
    answer:
      "Online via Recreation.gov (daily/weekly) or Smokies Life (annual), at visitor centers and welcome centers, at parking-tag machines inside the park, and at listed partners such as REI in Pigeon Forge. Full list: nps.gov/grsm/planyourvisit/fees.htm.",
  },
  {
    question: "Can my parent or grandparent handle downtown walking?",
    answer:
      "Gatlinburg sidewalks include hills and crowds. If mobility is limited, prefer park-and-ride plus trolley, keep the day to one zone, and confirm lift-equipped boarding on the official trolley page. Pigeon Forge distances on the Parkway are long — trolley is usually safer than multi-stop walking.",
  },
];

export default function SmokiesParkingTrolleyGuidePage() {
  return (
    <main className="destination-page parking-flagship">
      <header className="destination-header">
        <Link className="wordmark" href="/">
          Smoky Insider
        </Link>
        <Link className="back-link" href="/go">
          Go
        </Link>
      </header>

      <section className="destination-hero">
        <p className="eyebrow">Parking and transportation cluster</p>
        <h1>Smokies parking and trolley guide</h1>
        <p className="seo-direct-copy">
          For Gatlinburg, park once at a free park-and-ride (1011 Banner Rd or 1230 East Pkwy) and
          ride the free trolley, or pay 15 USD/day at a city garage on the Parkway. For Pigeon Forge,
          park free at the Patriot Park trolley hub (236 Old Mill Ave) and ride. Inside the national
          park, buy a physical parking tag before you leave cell service — 5 USD day / 15 USD week /
          40 USD year.
        </p>
        <p>
          <strong>Last checked:</strong> {LAST_CLUSTER_CHECK} · Sources: City of Gatlinburg, NPS,
          MyPigeonForge
        </p>
        <div className="destination-actions">
          <a className="button button-primary" href="#parking-tool">
            Open parking tool
          </a>
          <a className="button button-secondary" href="#gatlinburg-table">
            Gatlinburg lots
          </a>
          <a className="button button-secondary" href="#print-summary">
            Printable summary
          </a>
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

      <section className="destination-section" id="quick-ref">
        <div className="destination-heading">
          <p className="eyebrow">Mobile quick reference</p>
          <h2>Five parking systems — do not mix them up</h2>
        </div>
        <div className="destination-grid">
          <article className="destination-card">
            <h3>National park parking tag</h3>
            <p>
              Required when parked more than 15 minutes inside park boundaries. Does not guarantee a
              space. Physical tag only.
            </p>
            <p>
              <span className="verify-badge">Officially confirmed</span> · NPS ·{" "}
              {npsTagFacts.dateChecked}
            </p>
          </article>
          <article className="destination-card">
            <h3>Municipal parking</h3>
            <p>
              City-run garages and lots (example: Gatlinburg McMahan garage, 15 USD/day). Rules and
              rates set by the city.
            </p>
          </article>
          <article className="destination-card">
            <h3>Park-and-ride</h3>
            <p>
              Free lots outside the densest blocks with trolley into town — best when you want to park
              once.
            </p>
          </article>
          <article className="destination-card">
            <h3>Private / attraction parking</h3>
            <p>
              Hotel, cabin, and attraction lots follow their own rules. Always check the business you
              are visiting.
            </p>
          </article>
          <article className="destination-card">
            <h3>Trolley / transit</h3>
            <p>
              Gatlinburg trolley is free. Pigeon Forge trolley charges fares / day passes. Neither
              replaces a park parking tag.
            </p>
          </article>
        </div>
      </section>

      <section className="destination-section comparison-section" id="gatlinburg-table">
        <div className="destination-heading">
          <p className="eyebrow">Gatlinburg</p>
          <h2>Named parking choices</h2>
        </div>
        <div className="comparison-table-wrap">
          <table className="comparison-table">
            <thead>
              <tr>
                <th scope="col">Location</th>
                <th scope="col">Address</th>
                <th scope="col">Best for</th>
                <th scope="col">Walking</th>
                <th scope="col">Type</th>
                <th scope="col">Pricing status</th>
                <th scope="col">Source / checked</th>
              </tr>
            </thead>
            <tbody>
              {gatlinburgPlaces.map((place) => (
                <tr key={place.id}>
                  <th scope="row">{place.name}</th>
                  <td data-label="Address">
                    <a href={place.mapUrl} target="_blank" rel="noopener noreferrer">
                      {place.address}
                    </a>
                  </td>
                  <td data-label="Best for">{place.bestFor}</td>
                  <td data-label="Walking">{place.walkingNote}</td>
                  <td data-label="Type">{place.parkingType}</td>
                  <td data-label="Pricing">{place.pricingStatus}</td>
                  <td data-label="Source">
                    <a href={place.officialSource} target="_blank" rel="noopener noreferrer">
                      {place.sourceLabel}
                    </a>
                    <br />
                    {place.verification} · {place.dateChecked}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="destination-section comparison-section" id="pigeon-forge-table">
        <div className="destination-heading">
          <p className="eyebrow">Pigeon Forge</p>
          <h2>Named parking and transit anchors</h2>
        </div>
        <div className="comparison-table-wrap">
          <table className="comparison-table">
            <thead>
              <tr>
                <th scope="col">Location</th>
                <th scope="col">Address</th>
                <th scope="col">Best for</th>
                <th scope="col">Trolley</th>
                <th scope="col">Walking</th>
                <th scope="col">Pricing status</th>
                <th scope="col">Source / checked</th>
              </tr>
            </thead>
            <tbody>
              {pigeonForgePlaces.map((place) => (
                <tr key={place.id}>
                  <th scope="row">{place.name}</th>
                  <td data-label="Address">
                    <a href={place.mapUrl} target="_blank" rel="noopener noreferrer">
                      {place.address}
                    </a>
                  </td>
                  <td data-label="Best for">{place.bestFor}</td>
                  <td data-label="Trolley">{place.trolleyAccess}</td>
                  <td data-label="Walking">{place.walkingNote}</td>
                  <td data-label="Pricing">{place.pricingStatus}</td>
                  <td data-label="Source">
                    <a href={place.officialSource} target="_blank" rel="noopener noreferrer">
                      {place.sourceLabel}
                    </a>
                    <br />
                    {place.verification} · {place.dateChecked}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="destination-section" id="nps-tags">
        <div className="destination-heading">
          <p className="eyebrow">National park</p>
          <h2>Parking tags — what they are and are not</h2>
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
        <h3>Where to buy (sample of official locations)</h3>
        <ul className="area-list">
          {npsTagFacts.samplePurchaseLocations.map((loc) => (
            <li key={loc.address}>
              {loc.name} — {loc.address}
            </li>
          ))}
        </ul>
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
        <p>
          <span className="verify-badge">{npsTagFacts.verification}</span> ·{" "}
          <a href={npsTagFacts.officialSource} target="_blank" rel="noopener noreferrer">
            NPS fees page
          </a>{" "}
          · Checked {npsTagFacts.dateChecked} · {npsTagFacts.npsUpdated}
        </p>
      </section>

      <ParkingStrategyTool />

      <section className="destination-section" id="accessibility">
        <div className="destination-heading">
          <p className="eyebrow">Mobility, family and seniors</p>
          <h2>Match the lot to the least mobile person</h2>
        </div>
        <ul className="area-list">
          <li>Prefer Gatlinburg park-and-ride + free trolley when hills or stamina are a concern.</li>
          <li>
            Pigeon Forge trolleys are lift-equipped at designated stops; paratransit is available by
            advance request (official page: 865-453-6444).
          </li>
          <li>
            Strollers and toddlers: shorter zones beat more stops. Garage elevators help; confirm on
            arrival.
          </li>
          <li>
            National park trailheads often mean uneven ground after you leave the car — pick the stop
            for the slowest walker, not the strongest.
          </li>
        </ul>
      </section>

      <section className="destination-section warning-section">
        <div className="destination-heading">
          <p className="eyebrow">Common mistakes</p>
          <h2>What burns the morning</h2>
        </div>
        <ul className="area-list">
          <li>Driving into downtown Gatlinburg at peak without a park-and-ride backup.</li>
          <li>Assuming a park parking tag reserves a space at Cades Cove or a waterfall lot.</li>
          <li>Buying only a digital confirmation — NPS requires a physical tag displayed correctly.</li>
          <li>Planning Pigeon Forge as a walking town across multiple Parkway segments.</li>
          <li>Skipping the trolley schedule check on winter hours or holiday closures.</li>
          <li>Leaving the park tag purchase until after cell service drops.</li>
        </ul>
      </section>

      <section className="destination-section" id="print-summary">
        <div className="destination-heading">
          <p className="eyebrow">Printable summary</p>
          <h2>First-day parking cheat sheet</h2>
        </div>
        <article className="destination-card">
          <ol className="area-list">
            <li>
              <strong>Gatlinburg free park-and-ride:</strong> 1011 Banner Rd or 1230 East Pkwy — free
              trolley into town.
            </li>
            <li>
              <strong>Gatlinburg downtown garage:</strong> 520 Parkway or 161 Greystone Heights Rd —
              15 USD/day (city rate as of {LAST_CLUSTER_CHECK}).
            </li>
            <li>
              <strong>Pigeon Forge hub:</strong> 236 Old Mill Ave (Patriot Park trolley station) —
              free parking listed; trolley fares apply.
            </li>
            <li>
              <strong>National park:</strong> Physical tag 5 / 15 / 40 USD — buy before you lose
              signal.
            </li>
            <li>
              <strong>Backup:</strong> Always name a second lot before you leave the cabin.
            </li>
          </ol>
          <div className="destination-actions">
            <PrintButton label="Print this summary" />
            <Link href="/my-plan">Open My Plan</Link>
            <Link href="/go/parking">Short decision page</Link>
            <Link href="/parking-tag">Parking-tag guide</Link>
            <Link href="/parking-timing-cheat-sheet">Timing cheat sheet</Link>
          </div>
        </article>
      </section>

      <section className="destination-section seo-faq-panel" aria-labelledby="parking-faq-title">
        <p className="eyebrow">FAQ</p>
        <h2 id="parking-faq-title">Visitor questions</h2>
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
        <p className="eyebrow">Official sources used for this page</p>
        <h2>Recheck before travel</h2>
        <div className="source-links">
          <a href="https://www.gatlinburgtn.gov/page/parking">City of Gatlinburg parking</a>
          <a href="https://www.gatlinburg.com/things-to-do/trolley/">Gatlinburg Trolley</a>
          <a href="https://www.mypigeonforge.com/planning/getting-around/mass-transit-trolley/">
            Pigeon Forge trolley
          </a>
          <a href="https://www.nps.gov/grsm/planyourvisit/fees.htm">NPS parking tags</a>
          <a href="https://www.nps.gov/grsm/planyourvisit/conditions.htm">NPS current conditions</a>
          <a href="https://www.recreation.gov/activitypass/AP2510">Recreation.gov tag purchase</a>
        </div>
        <p>
          Facts on this page that can change (rates, hours, capacity notes) were checked{" "}
          {LAST_CLUSTER_CHECK}. Private lot rates and unofficial blogs were not used as primary
          sources.
        </p>
      </aside>

      <JsonLd
        data={webPageSchema({
          path: "/smokies-parking-trolley-guide",
          title: pageTitle,
          description: pageDescription,
          dateModified: LAST_CLUSTER_CHECK,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Parking and trolley guide", url: "/smokies-parking-trolley-guide" },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />
    </main>
  );
}
