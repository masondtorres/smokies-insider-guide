import type { Metadata } from "next";
import Link from "next/link";
import { BusinessPageShell, BusinessPathLinks, inquiryHref } from "@/components/business-intake";
import { businessListingFields, publishedBusinessListings } from "@/data/business-listings";

export const metadata: Metadata = {
  title: "Smokies Business Directory and Listing Requests",
  description: "Request or claim a verified Smokies business listing for a restaurant, cabin, attraction, shop, guide, photographer, venue or service business.",
};

const requestHref = inquiryHref("Business listing request - Smokies Insider", [
  "Category",
  "Town or area",
  "Website",
  "Your name and role",
  "Best contact email",
  "Details you want considered",
]);

export default function BusinessListingsPage() {
  return (
    <BusinessPageShell
      eyebrow="Local business directory"
      title="A verified Smokies directory, built one real business at a time"
      intro="Restaurants, cabins, attractions, shops, guides, photographers, venues and service businesses can request a listing. No business is published from invented or scraped details."
    >
      <BusinessPathLinks />

      <section className="business-action-panel">
        <div>
          <p className="eyebrow">Directory status</p>
          <h2>{publishedBusinessListings.length} verified listings published</h2>
          <p>The public directory remains empty until real submissions are reviewed. Requesting a listing does not guarantee publication, ranking or featured status.</p>
        </div>
        <div className="business-action-row">
          <a className="business-primary-action" href={requestHref}>Request listing</a>
          <Link className="business-secondary-action" href="/business-listings/claim">Claim your business</Link>
        </div>
      </section>

      <section className="business-intake-section">
        <p className="eyebrow">Who can request a listing</p>
        <h2>Useful local businesses that help visitors plan</h2>
        <div className="business-type-grid">
          {[
            "Restaurants and food businesses",
            "Cabins, lodging and property managers",
            "Attractions and activity providers",
            "Shops and visitor services",
            "Guides and photographers",
            "Venues and local service businesses",
          ].map((item) => <div key={item}>{item}</div>)}
        </div>
      </section>

      <section className="business-intake-section">
        <p className="eyebrow">Listing structure</p>
        <h2>Information the directory can support</h2>
        <p>Provide only details you are authorized to share. Unknown or unverified values stay unpublished until confirmed.</p>
        <ul className="business-field-grid">
          {businessListingFields.map((field) => <li key={field}>{field}</li>)}
        </ul>
      </section>

      <section className="business-process-grid" aria-label="Listing review process">
        <article><span>01</span><h2>Request</h2><p>Send the business name, category, area, website and your relationship to the business.</p></article>
        <article><span>02</span><h2>Verify</h2><p>Public details, ownership context and any time-sensitive claims must be checked before publication.</p></article>
        <article><span>03</span><h2>Publish or clarify</h2><p>Approved listings can be published with clear correction, claim and commercial-status labels.</p></article>
      </section>

      <aside className="business-trust-note">
        <strong>Directory trust rule</strong>
        <p>Standard listings, featured placements and sponsored visibility must remain distinguishable. Businesses can request visibility, but cannot purchase reviews, rankings or editorial conclusions.</p>
        <Link href="/advertise">Ask about featured placement</Link>
      </aside>
    </BusinessPageShell>
  );
}
