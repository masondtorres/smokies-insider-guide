import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Things to Do & Verified Offers in the Smokies",
  description: "Real no-admission attractions in Gatlinburg, Pigeon Forge and the Smokies, with official sources, map directions and changing costs clearly marked.",
  alternates: { canonical: "/deals" },
};

const offers = [
  {
    title: "The Island: free entry, parking and fountains",
    town: "Pigeon Forge",
    cost: "Free admission + free parking",
    detail: "Enjoy the show fountains and browse without buying a ride ticket. Stores, rides and dining cost extra.",
    url: "https://islandinpigeonforge.com/visitor-info/directions-parking-island",
    map: "The Island in Pigeon Forge Tennessee",
    date: "Confirmed from the venue website, October 2026",
  },
  {
    title: "Autumn's GLOW at The Island",
    town: "Pigeon Forge",
    cost: "Free seasonal event",
    detail: "Seasonal light and fountain displays, listed for September 21–November 15, 2026. Confirm the program and hours before visiting.",
    url: "https://islandinpigeonforge.com/events/fall-pigeon-forge",
    map: "The Island in Pigeon Forge Tennessee",
    date: "2026 event dates from organizer",
  },
  {
    title: "Great Smoky Mountains National Park",
    town: "National park",
    cost: "No entrance fee; parking tag may be needed",
    detail: "Scenic drives and overlooks without an admission ticket. Vehicles parked more than 15 minutes generally need a parking tag.",
    url: "https://www.nps.gov/grsm/planyourvisit/fees.htm",
    map: "Sugarlands Visitor Center Gatlinburg TN",
    date: "National Park Service",
  },
  {
    title: "Sugarlands Visitor Center exhibits",
    town: "Near Gatlinburg",
    cost: "No park entrance fee; parking tag rules apply",
    detail: "Explore park exhibits and get maps and ranger information. Seasonal operating hours apply.",
    url: "https://www.nps.gov/grsm/planyourvisit/visitorcenters.htm",
    map: "Sugarlands Visitor Center Gatlinburg TN",
    date: "National Park Service",
  },
];

function directions(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export default function DealsPage() {
  return (
    <main className="visitor-home">
      <section className="visitor-contained visitor-section" style={{ paddingTop: 18 }}>
        <p className="visitor-eyebrow">Real options, not coupon bait</p>
        <h1 style={{ color: "#19402b", fontSize: "clamp(2.2rem,5vw,3.7rem)", lineHeight: 1.08, marginBottom: 10 }}>Spend less. Do more.</h1>
        <p style={{ maxWidth: 720, fontSize: "1.08rem" }}>Free-entry favorites and time-specific offers with direct links to whoever controls the details. No imaginary discounts or fake urgency.</p>
      </section>
      <section className="visitor-contained" aria-label="Verified free activities and offers">
        <div className="find-results" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,270px),1fr))" }}>
          {offers.map((offer) => (
            <article className="find-place" key={offer.title}>
              <div className="find-place-top"><span>{offer.town}</span><span>{offer.cost}</span></div>
              <h2 style={{ fontSize: "1.35rem", color: "#163b27", margin: 0, lineHeight: 1.2 }}>{offer.title}</h2>
              <p>{offer.detail}</p>
              <p style={{ fontSize: ".77rem" }}>{offer.date}</p>
              <div className="find-place-links">
                <a className="find-map-link" href={directions(offer.map)} target="_blank" rel="noopener noreferrer">Directions ↗</a>
                <a href={offer.url} target="_blank" rel="noopener noreferrer">Official details ↗</a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="visitor-contained visitor-section visitor-savings">
        <div><p className="visitor-eyebrow">Before you pay</p><h2>Check the business's actual offer.</h2><p>Promotions, dates, eligibility and tickets change. A free parking space is not the same as free rides, food or lodging. We do not publish unverified coupons.</p></div>
        <div className="visitor-savings-actions"><Link className="visitor-button visitor-primary" href="/free-and-cheap-smokies">More budget-friendly outings ↗</Link><Link href="/advertise">Businesses: submit a real offer ↗</Link></div>
      </section>
    </main>
  );
}
