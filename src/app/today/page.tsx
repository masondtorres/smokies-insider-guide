import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/guide";
import { formatCheckedAt, getTodayConditions } from "@/lib/conditions";
import { breadcrumbSchema, webPageSchema } from "@/lib/seoSchema";
import "../decision-tools.css";

export const revalidate = 900;

export const metadata: Metadata = {
  title: "Today in the Smokies | What to Check Before You Leave",
  description: "Morning checks for Great Smoky Mountains roads, weather, traffic, parking, events and a same-town backup. Official sources stay in control of changing facts.",
  alternates: { canonical: "/today" },
};

export default async function TodayPage() {
  const conditions = await getTodayConditions();
  return (
    <main className="today-page">
      <header className="today-hero">
        <p className="home-kicker">Before you leave the cabin</p>
        <h1>What should I check before I pull out?</h1>
        <p>Weather can be refreshed from the National Weather Service. Roads, lots, trolleys, tickets and town events stay with the official source.</p>
        <p className="today-checked">Conditions layer last checked {formatCheckedAt(conditions.checkedAt)}. This is not a live traffic feed and it does not replace the National Park Service.</p>
      </header>
      <div className="today-board">
        <section className="today-weather">
          <div>
            <p className="today-flag">Weather</p>
            <h2>Town elevation</h2>
            {conditions.weatherTown.status === "available" && conditions.weatherTown.period ? (
              <p><strong>{conditions.weatherTown.period.shortForecast}{conditions.weatherTown.period.temperature != null ? `, ${conditions.weatherTown.period.temperature} ${conditions.weatherTown.period.temperatureUnit}` : ""}</strong></p>
            ) : (
              <p>Automatic forecast refresh failed. Open the National Weather Service page.</p>
            )}
            <p className="today-meta">Source: {conditions.weatherTown.sourceName}. Last checked {formatCheckedAt(conditions.weatherTown.checkedAt)}. <a href={conditions.weatherTown.sourceUrl} rel="noopener noreferrer">Official forecast office</a></p>
          </div>
          <div>
            <h2>High country</h2>
            {conditions.weatherHighCountry.status === "available" && conditions.weatherHighCountry.period ? (
              <p><strong>{conditions.weatherHighCountry.period.shortForecast}{conditions.weatherHighCountry.period.temperature != null ? `, ${conditions.weatherHighCountry.period.temperature} ${conditions.weatherHighCountry.period.temperatureUnit}` : ""}</strong></p>
            ) : (
              <p>Automatic high-country refresh failed. Treat ridge weather as different from town weather.</p>
            )}
            <p className="today-meta">Source: {conditions.weatherHighCountry.sourceName}. Last checked {formatCheckedAt(conditions.weatherHighCountry.checkedAt)}. <a href={conditions.weatherHighCountry.sourceUrl} rel="noopener noreferrer">Official forecast office</a></p>
          </div>
        </section>
        <section className="today-block">
          <p className="today-flag">Current advisory</p>
          <h2>NWS alerts for the Gatlinburg forecast zone</h2>
          {conditions.alertsStatus === "unavailable" ? (
            <p>Alert refresh failed. Check the forecast office before you ignore a watch or warning.</p>
          ) : conditions.alerts.length === 0 ? (
            <p>No active NWS alerts were returned for zone TNZ074 when this page last checked.</p>
          ) : (
            <ul>{conditions.alerts.map((alert) => <li key={alert.headline}><strong>{alert.event}.</strong> {alert.headline}</li>)}</ul>
          )}
          <p className="today-meta">Source: National Weather Service. <a href={conditions.alertsSourceUrl} rel="noopener noreferrer">Open NWS Morristown</a></p>
        </section>
        <section className="today-block">
          <p className="today-flag">Seasonal warning</p>
          <h2>{conditions.seasonal.title}</h2>
          <p>{conditions.seasonal.text}</p>
        </section>
        <section className="today-block today-backup">
          <p className="today-flag">Backup plan</p>
          <h2>{conditions.backup.title}</h2>
          <p>{conditions.backup.text}</p>
          <p><Link href={conditions.backup.href}>Open the backup path</Link></p>
        </section>
        <section className="today-block">
          <p className="today-flag">Official checks</p>
          <h2>Open the source that can still change the plan</h2>
          <div className="today-checks">
            {conditions.officialChecks.map((item) => (
              <article key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.why}</p>
                <p className="today-meta">Official source: {item.sourceName}. Not automatically refreshed here. <a href={item.sourceUrl} rel="noopener noreferrer">Open official source</a></p>
              </article>
            ))}
          </div>
        </section>
      </div>
      <JsonLd data={webPageSchema({ path: "/today", title: "Today in the Smokies | What to Check Before You Leave", description: metadata.description ?? "", dateModified: "2026-09-10" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Today", url: "/today" }])} />
    </main>
  );
}
