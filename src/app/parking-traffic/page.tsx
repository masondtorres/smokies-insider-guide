import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/guide";
import { ParkingStrategyTool } from "@/components/parking-strategy-tool";
import {
  LAST_CLUSTER_CHECK,
  gatlinburgPlaces,
  npsTagFacts,
  pigeonForgePlaces,
} from "@/data/parking-places";
import { breadcrumbSchema, webPageSchema } from "@/lib/seoSchema";

const pageTitle = "Smokies Parking and Traffic";
const pageDescription =
  "Practical parking and traffic decisions for Gatlinburg, Pigeon Forge, Sevierville, Townsend and Great Smoky Mountains National Park. Official sources control prices, tags and closures.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/parking-traffic" },
};

export default function ParkingTrafficPage() {
  const gbgFirst = gatlinburgPlaces[0];
  const pfFirst = pigeonForgePlaces[0];

  return (
    <main className="si-width" style={{ padding: "40px 0 72px" }}>
      <p className="si-kicker">Peak-season reality</p>
      <h1>Parking and traffic</h1>
      <p>
        Most ruined Smokies days start with the same pattern: leave late, drive across town, hunt for a space, then invent a second stop that requires another parking reset. Pick one corridor. Park once if you can. Recheck official rules before you go.
      </p>
      <p className="home-note">
        Cluster last reviewed {LAST_CLUSTER_CHECK}. Prices, hours, tag rules and closures belong to the official source, not this page.
      </p>

      <section style={{ marginTop: 28 }}>
        <h2>By situation</h2>
        <ul>
          <li>
            <strong>Downtown Gatlinburg:</strong> Treat a first legal space or park-and-ride as success. {gbgFirst ? `${gbgFirst.name} is the named first option on file.` : "Use the city parking page."} Do not circle the Parkway.
          </li>
          <li>
            <strong>Pigeon Forge Parkway:</strong> Use a trolley-served lot when the day is attractions. {pfFirst ? `${pfFirst.name} is the named first option on file.` : ""} Crossing to Gatlinburg for one meal is how the afternoon disappears.
          </li>
          <li>
            <strong>National Park:</strong> A parking tag does not reserve a space. Choose one area. Have a same-side backup. {npsTagFacts.doesNotGuarantee}
          </li>
          <li>
            <strong>Cades Cove from Pigeon Forge or Sevierville:</strong> That is a full-day commitment, not a side trip after breakfast in town.
          </li>
          <li>
            <strong>Townsend:</strong> Best when the cove or quiet-side roads are the day. Weak if you also want Parkway attractions.
          </li>
        </ul>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Build a parking plan</h2>
        <ParkingStrategyTool />
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Official checks</h2>
        <p>Open the source that controls the rule before you leave the cabin.</p>
        <p className="si-actions">
          <Link className="si-button si-button-primary" href="/today">
            Today&apos;s conditions
          </Link>
          <Link className="si-button si-button-secondary" href="/smokies-parking-trolley-guide">
            Full parking and trolley guide
          </Link>
          <Link className="si-button si-button-secondary" href="/parking-timing-cheat-sheet">
            Timing cheat sheet
          </Link>
          <Link className="si-button si-button-secondary" href="/parking-tag">
            Park parking tag
          </Link>
        </p>
      </section>

      <JsonLd
        data={webPageSchema({
          path: "/parking-traffic",
          title: pageTitle,
          description: pageDescription,
          dateModified: "2026-09-10",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Parking and traffic", url: "/parking-traffic" },
        ])}
      />
    </main>
  );
}
