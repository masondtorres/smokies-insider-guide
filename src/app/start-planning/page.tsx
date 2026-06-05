import type { Metadata } from "next";
import Link from "next/link";
import { DirectAnswer, InternalLinkGrid, LastUpdated, SiteFooter, SiteHeader, SourceBox } from "@/components/guide";

export const metadata: Metadata = {
  title: "Start Planning Your Smokies Trip",
  description: "A bridge to the free Smokies trip planner, town chooser and first-time planning guides.",
};

export default function StartPlanningPage() {
  return (
    <main className="guide-page">
      <SiteHeader />
      <article className="guide-article">
        <header className="guide-hero">
          <p className="eyebrow">Planning bridge</p>
          <h1>Start Planning Your Smokies Trip</h1>
          <p>The main planning tool now lives at /plan-your-trip.</p>
          <LastUpdated />
          <div className="hero-actions">
            <Link className="button button-primary" href="/plan-your-trip">Open the trip planner</Link>
            <Link className="button button-secondary" href="/where-to-stay">Choose where to stay</Link>
          </div>
        </header>
        <DirectAnswer>
          <p>
            Use this page as a bridge if you had the older planning route saved.
            The new manual planner gives a starter plan based on base town, time,
            group, day style and what could ruin the day.
          </p>
        </DirectAnswer>
        <InternalLinkGrid
          links={[
            { title: "Plan your trip", href: "/plan-your-trip", description: "Manual starter planner." },
            { title: "Where to stay", href: "/where-to-stay", description: "Choose the right town." },
            { title: "First-time Smokies", href: "/first-time-smokies", description: "Simple first-trip plan." },
            { title: "Rainy day", href: "/rainy-day", description: "Weather backup." },
          ]}
        />
        <SourceBox />
      </article>
      <SiteFooter />
    </main>
  );
}
