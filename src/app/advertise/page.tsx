import type { Metadata } from "next";
import Link from "next/link";
import { BusinessPageShell, BusinessPathLinks, inquiryHref } from "@/components/business-intake";

export const metadata: Metadata = {
  title: "Advertise With Smoky Insider",
  description:
    "Choose a clearly priced local advertising package from independent Smoky Insider. Visibility is labeled and never buys editorial judgment.",
  alternates: { canonical: "/advertise" },
};

const advertiseHref = inquiryHref();

const packages = [
  {
    name: "Verified Local Listing",
    price: "$99 per year",
    items: [
      "Business name, category and town",
      "Website and contact link",
      "Short factual description",
      "One annual detail review",
      "Corrections accepted anytime",
    ],
  },
  {
    name: "Featured Local Listing",
    price: "$149 per month",
    items: [
      "Everything in the verified listing",
      "Featured placement in one relevant category",
      "Logo or approved business photo",
      "One clear visitor call to action",
      "Clearly labeled featured placement",
    ],
  },
  {
    name: "Guide Partner",
    price: "$349 per month",
    items: [
      "Everything in the featured listing",
      "One labeled placement in a relevant planning guide",
      "Verified offer block when a real offer exists",
      "Monthly details review",
      "Priority correction handling",
    ],
  },
];

export default function AdvertisePage() {
  return (
    <BusinessPageShell
      eyebrow="Local advertising"
      title="Advertise with clear prices and clear labels"
      intro="Smokies businesses can buy useful visibility without buying editorial judgment. These founding-partner packages are simple, public and tied to a real visitor need. No traffic or performance result is guaranteed."
    >
      <BusinessPathLinks />

      <section className="business-intake-section">
        <p className="eyebrow">Founding partner pricing</p>
        <h2>Choose the level that fits the business</h2>
        <div className="business-offer-grid">
          {packages.map((pkg) => (
            <article key={pkg.name}>
              <h3>{pkg.name}</h3>
              <p><strong>{pkg.price}</strong></p>
              <ul className="business-check-list">
                {pkg.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <Link className="business-primary-action" href={advertiseHref}>Request this package</Link>
            </article>
          ))}
        </div>
        <p>
          Founding-partner rates apply to new agreements and may change for future
          customers. Existing paid terms are honored for the agreed period.
        </p>
      </section>

      <section className="business-action-panel">
        <div>
          <p className="eyebrow">Commercial inquiry</p>
          <h2>Tell us what your business helps visitors do</h2>
          <p>
            Share the category, location, website and package requested. A useful
            fit matters more than forcing a business onto an unrelated page.
          </p>
        </div>
        <div className="business-action-row">
          <Link className="business-primary-action" href={advertiseHref}>Request a package</Link>
          <Link className="business-secondary-action" href="/business-listings">Request a listing</Link>
        </div>
      </section>

      <section className="business-intake-section">
        <p className="eyebrow">Before publication</p>
        <h2>What every commercial placement needs</h2>
        <ul className="business-check-list">
          <li>A real business and an authorized contact.</li>
          <li>Verified destination, contact and offer details.</li>
          <li>Clear sponsored or featured labeling.</li>
          <li>Current terms and expiration for any offer.</li>
          <li>A visitor-relevant fit that does not override editorial guidance.</li>
        </ul>
        <p><strong>No payment is collected on this website yet.</strong> Approved partners receive written terms and payment instructions directly.</p>
      </section>

      <aside className="business-trust-note">
        <strong>Businesses can buy visibility, not editorial truth.</strong>
        <p>Advertising does not purchase reviews, rankings, factual claims or inclusion in visitor-first recommendations.</p>
        <div className="business-inline-links">
          <Link href="/sponsored-content-policy">Sponsored content policy</Link>
          <Link href="/editorial-policy">Editorial policy</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </aside>
    </BusinessPageShell>
  );
}
