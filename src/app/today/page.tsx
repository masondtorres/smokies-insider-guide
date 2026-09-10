import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/guide";
import { breadcrumbSchema, webPageSchema } from "@/lib/seoSchema";

export const metadata: Metadata = {
  title: "Today in the Smokies | Current Conditions and Official Checks",
  description:
    "Use official sources to check Great Smoky Mountains roads, closures, weather, parking rules, events and town transportation before you leave your lodging.",
  alternates: { canonical: "/today" },
};

const currentChecks = [
  {
    title: "Park roads, trails and closures",
    text: "Check the National Park Service before committing to a park route. A closure can change the right plan for the entire day.",
    href: "https://www.nps.gov/grsm/planyourvisit/conditions.htm",
    action: "Open NPS Current Conditions",
    verified: "Always recheck the NPS page. It is the controlling source.",
  },
  {
    title: "Parking tags and current park fees",
    text: "A parking tag does not reserve a space. Confirm the current rule and price before you depend on a trailhead or park stop.",
    href: "https://www.nps.gov/grsm/planyourvisit/fees.htm",
    action: "Check Official Parking Information",
    verified: "NPS fee page is the source for tag rules.",
  },
  {
    title: "Weather and mountain conditions",
    text: "Town weather does not describe the high country. Check the forecast before a ridge drive, hike or long park day.",
    href: "https://www.weather.gov/mrx/",
    action: "Open National Weather Service",
    verified: "NWS Morristown is the public forecast office for this region.",
  },
  {
    title: "Park events and ranger programs",
    text: "If the day depends on a ranger program, walk or seasonal event, confirm it is still listed for today.",
    href: "https://www.nps.gov/grsm/planyourvisit/calendar.htm",
    action: "Open NPS calendar",
    verified: "NPS calendar is the source for park programs and events.",
  },
  {
    title: "Attraction hours and operating changes",
    text: "Ticketed attractions set their own hours. Confirm the venue you are counting on before leaving the cabin.",
    href: "https://www.dollywood.com/calendar/",
    action: "Check Dollywood calendar",
    verified: "Venue calendars control hours. Recheck the specific attraction you booked.",
  },
  {
    title: "Town events that change traffic",
    text: "A parade, race or festival on the Parkway can erase an otherwise good downtown plan.",
    href: "https://www.mypigeonforge.com/events/",
    action: "Check Pigeon Forge events",
    verified: "Official town event calendars are the source. Also check Gatlinburg if that is the day's town.",
  },
  {
    title: "Gatlinburg trolley",
    text: "If the day depends on parking once and riding the trolley, confirm the current route and operating information first.",
    href: "https://www.gatlinburg.com/things-to-do/trolley/",
    action: "Check Gatlinburg Trolley",
    verified: "City trolley page controls routes and hours.",
  },
  {
    title: "Pigeon Forge trolley",
    text: "Confirm current route information before using the trolley as the connection between timed attractions or dinner plans.",
    href: "https://www.mypigeonforge.com/planning/getting-around/mass-transit-trolley/",
    action: "Check Pigeon Forge Trolley",
    verified: "Pigeon Forge transit page controls routes and hours.",
  },
];

export default function TodayPage() {
  return (
    <main className="smokies-home-v2">
      <section
        className="si-hero si-hero--photo"
        aria-labelledby="today-title"
        style={{
          minHeight: "auto",
          backgroundImage:
            "linear-gradient(180deg, rgba(12,24,18,0.28), rgba(12,24,18,0.82)), url(/images/photos/kuwohi-east-view.webp)",
        }}
      >
        <div className="si-hero-copy">
          <p className="si-kicker">Before you leave the cabin</p>
          <h1 id="today-title">Check what can change today.</h1>
          <p className="si-hero-promise">
            The guide explains how the Smokies work. These official sources control the changing facts: roads, closures, weather, parking rules, events and transportation details.
          </p>
          <p className="si-hero-text-link">
            Page reviewed September 10, 2026. The linked official pages are the source to check before acting.
          </p>
        </div>
        <p className="si-photo-credit">
          View east from Kuwohi. Photo: Acroterion,{" "}
          <a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="license">
            CC BY-SA 4.0
          </a>
        </p>
      </section>

      <section className="si-section si-width" aria-labelledby="checks-heading">
        <div className="si-section-heading">
          <p className="si-section-kicker">Official checks</p>
          <h2 id="checks-heading">Open the source that can change the plan.</h2>
        </div>
        <div className="si-decision-list">
          {currentChecks.map((item) => (
            <a className="si-decision-item" href={item.href} key={item.title} rel="noopener noreferrer">
              <strong>{item.title}</strong>
              <p>
                {item.text} {item.verified}
              </p>
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
            <Link href="/start-planning">Rebuild today's plan</Link>
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
            Smokies Insider provides planning judgment. It does not pretend a printed guide or static webpage can guarantee that a road is open, a lot has space or a schedule has not changed.
          </p>
        </div>
      </section>

      <JsonLd
        data={webPageSchema({
          path: "/today",
          title: "Today in the Smokies | Current Conditions and Official Checks",
          description: metadata.description ?? "",
          dateModified: "2026-09-10",
        })}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Today", url: "/today" }])} />
    </main>
  );
}
