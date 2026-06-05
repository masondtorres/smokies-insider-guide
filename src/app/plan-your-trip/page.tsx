import type { Metadata } from "next";
import { DirectAnswer, JsonLd, LastUpdated, SiteFooter, SiteHeader, SourceBox } from "@/components/guide";
import { TripPlanner } from "@/components/TripPlanner";

export const metadata: Metadata = {
  title: "Plan Your Smokies Trip: Free Smoky Mountains Trip Planner",
  description:
    "Answer a few simple questions and get a practical Smokies starter plan by town, trip length, group type, weather, budget and crowd tolerance.",
};

export default function PlanYourTripPage() {
  return (
    <main className="guide-page planner-page">
      <SiteHeader />
      <article className="guide-article">
        <header className="guide-hero">
          <p className="eyebrow">Manual planning board</p>
          <h1>Plan your Smokies day</h1>
          <p>
            Pick the closest match below. The goal is not a perfect schedule. It is
            to stop building the wrong day.
          </p>
          <LastUpdated />
        </header>
        <DirectAnswer>
          <p>
            Start with your base town, available time, group type, day style and biggest risk.
            The result gives a starter plan with a rain backup, parking warning, what to skip
            and read-next links.
          </p>
        </DirectAnswer>
        <TripPlanner />
        <SourceBox />
      </article>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Plan Your Smokies Trip",
          description: metadata.description,
          dateModified: "2026-06-05",
        }}
      />
      <SiteFooter />
    </main>
  );
}
