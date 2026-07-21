import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/guide";
import { breadcrumbSchema, webPageSchema } from "@/lib/seoSchema";
import { PrintButton } from "./print-button";
import "./cheat-sheet.css";

export const metadata: Metadata = {
  title: "2026 Smokies Parking and Timing Cheat Sheet | Smoky Insider",
  description:
    "Print a one-page-style Smokies parking and timing guide for Gatlinburg, Pigeon Forge, Cades Cove and Great Smoky Mountains National Park.",
  alternates: { canonical: "/parking-timing-cheat-sheet" },
};

const areaRows = [
  [
    "Gatlinburg",
    "Choose one downtown zone, park once when practical and plan the return walk before the group gets tired.",
    "Parking locations, trolley routes, fares, hills and crowd pressure.",
  ],
  [
    "Pigeon Forge",
    "Choose one Parkway anchor and keep food, shopping and backup stops in the same part of town.",
    "Repeated crossings, backtracking and stacking too many paid stops.",
  ],
  [
    "Sevierville",
    "Use it as a base, food reset or shopping stop instead of treating it like downtown Gatlinburg.",
    "Drive time to park entrances and attraction corridors.",
  ],
  [
    "Townsend",
    "Use the quiet-side gateway for Cades Cove and slower park days.",
    "Fewer attraction-style stops and changing park access.",
  ],
  [
    "Cades Cove",
    "Treat the loop as the main event. Check conditions and leave room for slow traffic.",
    "Road status, daylight, bicycle-only periods, parking tags and long delays.",
  ],
  [
    "National Park",
    "Download the route, check conditions and handle the parking-tag question before leaving reliable service.",
    "Road closures, weather, cell service, facilities and parking-tag rules.",
  ],
];

const leaveHome = [
  "Screenshot the lodging address, first parking choice and one backup.",
  "Check NPS current conditions and parking-tag requirements.",
  "Check official town parking or trolley information when the plan depends on it.",
  "Download maps before entering low-service park areas.",
  "Choose one main anchor for the day.",
  "Choose food before everyone is tired and hungry.",
  "Keep one rainy-day or low-walking backup in the same area.",
];

const emergencyMoves = [
  {
    title: "The lot is full",
    text: "Do not circle indefinitely. Use the backup lot or switch to the nearby backup plan you chose before leaving.",
  },
  {
    title: "Traffic stops moving",
    text: "Cut the smallest stop first. Protect the main anchor instead of trying to save the full schedule.",
  },
  {
    title: "The group is worn out",
    text: "Reduce walking, choose food nearby and stop crossing towns. Transportation cannot fix an overpacked day.",
  },
  {
    title: "Weather changes",
    text: "Check official conditions, move to the prepared indoor backup and do not force a park route through unsafe conditions.",
  },
];

export default function ParkingTimingCheatSheetPage() {
  return (
    <main className="cheat-sheet-page">
      <div className="cheat-sheet-shell">
        <header className="cheat-sheet-header">
          <Link className="cheat-sheet-brand" href="/">Smoky Insider</Link>
          <PrintButton />
        </header>

        <section className="cheat-sheet-hero">
          <p className="cheat-sheet-eyebrow">Free 2026 Planning Tool</p>
          <h1>Smokies Parking &amp; Timing Cheat Sheet</h1>
          <p>
            A fast, printable guide from Mason Torres, founder and editor of
            veteran-owned Smoky Insider. Use it to simplify the day before
            traffic, parking and tired feet start making decisions for you.
          </p>
          <p><strong>Last reviewed: July 21, 2026.</strong> Changing details must be rechecked before travel.</p>
        </section>

        <section className="cheat-sheet-grid" aria-label="Fast parking plan">
          <article className="cheat-sheet-card">
            <h2>The 60-second rule</h2>
            <ul>
              <li><strong>One base.</strong> Do not casually cross all four gateway towns.</li>
              <li><strong>One anchor.</strong> Protect the main reason for the day.</li>
              <li><strong>One parking plan.</strong> Know the first choice and backup.</li>
              <li><strong>One food plan.</strong> Decide before the group is exhausted.</li>
              <li><strong>One backup.</strong> Keep it close to the same route.</li>
            </ul>
          </article>

          <article className="cheat-sheet-card">
            <h2>Before leaving home</h2>
            <ul>
              {leaveHome.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </section>

        <section className="cheat-sheet-table-wrap">
          <h2>Use the right movement plan for the area</h2>
          <table className="cheat-sheet-table">
            <thead>
              <tr>
                <th scope="col">Area</th>
                <th scope="col">Do this</th>
                <th scope="col">Recheck or watch</th>
              </tr>
            </thead>
            <tbody>
              {areaRows.map(([area, plan, caution]) => (
                <tr key={area}>
                  <th scope="row">{area}</th>
                  <td>{plan}</td>
                  <td>{caution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="cheat-sheet-grid" aria-label="When the plan changes">
          {emergencyMoves.map((move) => (
            <article className="cheat-sheet-card" key={move.title}>
              <h3>{move.title}</h3>
              <p>{move.text}</p>
            </article>
          ))}
        </section>

        <aside className="cheat-sheet-source">
          <h2>Official checks before the trip</h2>
          <ul>
            <li><a href="https://www.nps.gov/grsm/planyourvisit/conditions.htm">Great Smoky Mountains National Park current conditions</a></li>
            <li><a href="https://www.nps.gov/grsm/planyourvisit/fees.htm">National park parking-tag information</a></li>
            <li><a href="https://www.gatlinburg.com/plan/transportation/parking/">Official Gatlinburg parking information</a></li>
            <li><a href="https://www.gatlinburg.com/trolley">Official Gatlinburg trolley information</a></li>
            <li><a href="https://www.cityofpigeonforgetn.gov/235/Transit">Official Pigeon Forge transit information</a></li>
          </ul>
        </aside>

        <footer className="cheat-sheet-footer">
          <p>
            This sheet is planning guidance, not live parking or traffic data.
            Use the official links above for changing details.
          </p>
          <Link className="cheat-sheet-link" href="/smokies-parking-trolley-guide">Open the Full Parking Guide</Link>
        </footer>
      </div>

      <JsonLd data={webPageSchema({
        path: "/parking-timing-cheat-sheet",
        title: metadata.title as string,
        description: metadata.description ?? "",
      })} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Parking and Timing Cheat Sheet", url: "/parking-timing-cheat-sheet" },
      ])} />
    </main>
  );
}
