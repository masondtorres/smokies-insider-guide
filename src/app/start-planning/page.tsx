import type { Metadata } from "next";
import { LastUpdated, SiteFooter, SiteHeader, SourceBox } from "@/components/guide";
import { TripPlanner } from "@/components/TripPlanner";

export const metadata: Metadata = {
  title: "Start Planning Your Smokies Trip",
  description:
    "Answer a few practical Smokies trip questions and get starter recommendations for attractions, towns, rainy days, scenery and planning cautions.",
};

export default function StartPlanningPage() {
  return (
    <main className="guide-page start-planning-page">
      <SiteHeader />
      <article className="guide-article start-planning-article">
        <header className="planner-hero">
          <div>
            <p className="eyebrow">Smokies concierge planner</p>
            <h1>Start planning with the day you actually need.</h1>
            <p>
              Answer a few practical questions and get a starter route: a first pick,
              a backup, a rainy-day move, a family option and one planning caution.
            </p>
            <LastUpdated />
          </div>
          <aside>
            <strong>Good first rule</strong>
            <p>Pick the town and day shape before you start buying tickets or stacking stops.</p>
          </aside>
        </header>

        <TripPlanner />

        <section className="planner-trust-strip" aria-label="Planner limits">
          <div>
            <strong>No fake partnerships</strong>
            <p>Recommendations are planning categories and known Smokies visitor options, not paid rankings.</p>
          </div>
          <div>
            <strong>Verify before you go</strong>
            <p>Hours, roads, parking, prices and closures can change. Check current sources before final plans.</p>
          </div>
        </section>

        <SourceBox />
      </article>
      <SiteFooter />
    </main>
  );
}
