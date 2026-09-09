import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/guide";
import { breadcrumbSchema, webPageSchema } from "@/lib/seoSchema";
import "../homepage-v2.css";

export const metadata: Metadata = {
  title: "Today in the Smokies | Current Conditions and Official Checks",
  description:
    "Use official sources to check Great Smoky Mountains roads, closures, weather, parking rules and town transportation before you leave your lodging.",
  alternates: { canonical: "/today" },
};

const currentChecks = [
  {
    title: "Park roads, trails and closures",
    text: "Check the National Park Service before committing to a park route. A closure can change the right plan for the entire day.",
    href: "https://www.nps.gov/grsm/planyourvisit/conditions.htm",
    action: "Open NPS Current Conditions",
  },
  {
    title: "Parking tags and current park fees",
    text: "A parking tag does not reserve a space. Confirm the current rule and price before you depend on a trailhead or park stop.",
    href: "https://www.nps.gov/grsm/planyourvisit/fees.htm",
    action: "Check Official Parking Information",
  },
  {
    title: "Weather and mountain conditions",
    text: "Town weather does not describe the high country. Check the forecast before a ridge drive, hike or long park day.",
    href: "https://www.weather.gov/mrx/",
    action: "Open National Weather Service",
  },
  {
    title: "Gatlinburg trolley",
    text: "If the day depends on parking once and riding the trolley, confirm the current route and operating information first.",
    href: "https://www.gatlinburg.com/things-to-do/trolley/",
    action: "Check Gatlinburg Trolley",
  },
  {
    title: "Pigeon Forge trolley",
    text: "Confirm current route information before using the trolley as the connection between timed attractions or dinner plans.",
    href: "https://www.mypigeonforge.com/planning/getting-around/mass-transit-trolley/",
    action: "Check Pigeon Forge Trolley",
  },
];

export default function TodayPage() {
  return (
    <main className="smokies-home-v2">
      <section className="si-section si-width" aria-labelledby="today-title">
        <div className="si-section-heading">
          <p className="si-section-kicker">Before you leave the cabin</p>
          <h1 id="today-title">Check what can change today.</h1>
          <p>
            The guide explains how the Smokies work. These official sources control the changing facts: roads, closures, weather, parking rules and transportation details.
          </p>
          <p><strong>Page reviewed September 9, 2026.</strong> The linked official pages are the source to check before acting.</p>
        </div>

        <div className="si-card-grid">
          {currentChecks.map((item) => (
            <a className="si-card" href={item.href} key={item.title} rel="noopener noreferrer">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <span>{item.action}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="si-before" aria-labelledby="backup-title">
        <div className="si-width si-before-layout">
          <div>
            <p className="si-section-kicker">If the plan changed</p>
            <h2 id="backup-title">Protect the anchor. Cut the smallest stop first.</h2>
            <p>
              Keep the backup on the same side of the region. Do not replace a closed road or full lot with a long cross-town drive that creates a second problem.
            </p>
          </div>
          <div className="si-before-grid">
            <Link href="/start-planning">Rebuild today&apos;s plan</Link>
            <Link href="/rainy-day">Find a rainy-day backup</Link>
            <Link href="/smokies-parking-trolley-guide">Parking and trolley guide</Link>
            <Link href="/my-plan">Open My Plan</Link>
          </div>
        </div>
      </section>

      <section className="si-section si-width" aria-labelledby="trust-title">
        <div className="si-section-heading">
          <p className="si-section-kicker">Why these links are here</p>
          <h2 id="trust-title">Current facts belong with the controlling source.</h2>
          <p>
            Smoky Insider provides planning judgment. It does not pretend a printed guide or static webpage can guarantee that a road is open, a lot has space or a schedule has not changed.
          </p>
        </div>
      </section>

      <JsonLd data={webPageSchema({ path: "/today", title: "Today in the Smokies | Current Conditions and Official Checks", description: metadata.description ?? "" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Today", url: "/today" }])} />
    </main>
  );
}
