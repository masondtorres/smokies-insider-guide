import type { Metadata } from "next";
import Link from "next/link";
import { BusinessPageShell, BusinessPathLinks, inquiryHref } from "@/components/business-intake";

export const metadata: Metadata = {
  title: "Advertise With Smokies Insider",
  description: "Request clearly labeled advertising, sponsored content or featured placement information from Smokies Insider.",
};

const advertiseHref = inquiryHref("Advertise with us - Smokies Insider", [
  "Business category",
  "Town or service area",
  "Website",
  "Placement of interest",
  "Campaign timing or goal",
  "Your name and role",
]);

const featuredHref = inquiryHref("Featured placement inquiry - Smokies Insider", [
  "Business category",
  "Town or service area",
  "Website",
  "Listing URL, if published",
  "Placement goal",
  "Your name and role",
]);

export default function AdvertisePage() {
  return (
    <BusinessPageShell
      eyebrow="Local partner inquiries"
      title="Advertise with us without blurring the field guide"
      intro="Smokies businesses can ask about clearly labeled visibility that fits visitor planning. Pricing is available by request; no traffic, placement or performance result is guaranteed."
    >
      <BusinessPathLinks />

      <section className="business-action-panel">
        <div>
          <p className="eyebrow">Commercial inquiry</p>
          <h2>Tell us what your business helps visitors do</h2>
          <p>Share the category, location, website and placement goal. A useful fit matters more than forcing a business onto an unrelated page.</p>
        </div>
        <div className="business-action-row">
          <a className="business-primary-action" href={advertiseHref}>Advertise with us</a>
          <a className="business-secondary-action" href={featuredHref}>Featured placement inquiry</a>
        </div>
      </section>

      <section className="business-intake-section">
        <p className="eyebrow">Possible visibility paths</p>
        <h2>Formats considered by request</h2>
        <div className="business-offer-grid">
          <article><h3>Featured directory placement</h3><p>Enhanced visibility attached to a verified business listing and clearly marked as featured or sponsored.</p></article>
          <article><h3>Relevant guide placement</h3><p>A labeled placement on a planning page where the business category genuinely fits the visitor decision.</p></article>
          <article><h3>Featured offer inquiry</h3><p>A possible offer placement only after terms, dates, restrictions and business authorization are verified.</p></article>
          <article><h3>Custom local partnership</h3><p>A discussion for venues, guides, photographers, lodging, restaurants, attractions, shops or visitor services.</p></article>
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
        <p><strong>Pricing available by request.</strong> No payment is collected on this website.</p>
      </section>

      <aside className="business-trust-note">
        <strong>Businesses can buy visibility, not editorial truth.</strong>
        <p>Advertising does not purchase reviews, rankings, factual claims or inclusion in visitor-first recommendations.</p>
        <div className="business-inline-links">
          <Link href="/sponsored-content-policy">Sponsored content policy</Link>
          <Link href="/editorial-policy">Editorial policy</Link>
          <Link href="/business-listings">Request a standard listing</Link>
        </div>
      </aside>
    </BusinessPageShell>
  );
}
