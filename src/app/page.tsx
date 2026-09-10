import type { Metadata } from "next";
import Link from "next/link";
import { DecisionEngine } from "@/components/decision-engine";
import { JsonLd } from "@/components/guide";
import { PlaceList } from "@/components/place-list";
import { places } from "@/data/places";
import { breadcrumbSchema, organizationSchema, webPageSchema, webSiteSchema } from "@/lib/seoSchema";

export const metadata: Metadata = {
  title: "Smokies Insider | Smoky Mountains Trip Planner",
  description: "Fall color, real restaurants, park stops and a trip plan that survives traffic.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="smokies-home-v2" id="home">
      <section className="si-hero si-hero--photo" aria-labelledby="home-title">
        <div className="si-hero-copy">
          <p className="si-kicker">Fall is moving down the ridges</p>
          <h1 id="home-title">The Smokies in color, without wasting the day in traffic.</h1>
          <p className="si-hero-promise">
            Peak color starts high and works downhill for weeks. Then open real restaurants, park stops and a base that matches the trip.
          </p>
          <div className="si-actions">
            <Link className="si-button si-button-primary" href="/eat">Where to eat</Link>
            <Link className="si-button si-button-secondary" href="/today">Today's conditions</Link>
          </div>
        </div>
        <p className="si-photo-credit">Cades Cove, Great Smoky Mountains National Park</p>
      </section>
      <div className="si-engine-wrap">
        <DecisionEngine />
      </div>
      <section className="si-section si-width">
        <PlaceList
          title="Open a real place, not a planning abstraction"
          intro="Official websites and directions. Confirm hours and tickets with the business."
          items={places.slice(0, 9)}
        />
      </section>
      <JsonLd data={webSiteSchema()} />
      <JsonLd data={organizationSchema()} />
      <JsonLd data={webPageSchema({ path: "/", title: metadata.title as string, description: metadata.description ?? "", dateModified: "2026-09-10" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }])} />
    </main>
  );
}
