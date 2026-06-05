import type { Metadata } from "next";
import Link from "next/link";
import { DirectAnswer, InternalLinkGrid, LastUpdated, SiteFooter, SiteHeader, SourceBox } from "@/components/guide";

export const metadata: Metadata = {
  title: "Where to Stay in the Smokies by Trip Type",
  description: "A preserved bridge to the updated Smokies where-to-stay decision guide.",
};

export default function WhereToStayByTripTypePage() {
  return (
    <main className="guide-page">
      <SiteHeader />
      <article className="guide-article">
        <header className="guide-hero">
          <p className="eyebrow">Updated guide available</p>
          <h1>Where to Stay in the Smokies by Trip Type</h1>
          <p>The updated town chooser is now the main where-to-stay guide.</p>
          <LastUpdated />
          <div className="hero-actions">
            <Link className="button button-primary" href="/where-to-stay">Open the updated guide</Link>
            <Link className="button button-secondary" href="/gatlinburg-vs-pigeon-forge">Compare Gatlinburg and Pigeon Forge</Link>
          </div>
        </header>
        <DirectAnswer>
          <p>
            This older route is preserved so internal links do not break. Use the
            updated /where-to-stay page for the current town comparison and trip-fit guidance.
          </p>
        </DirectAnswer>
        <InternalLinkGrid
          links={[
            { title: "Where to stay", href: "/where-to-stay", description: "Updated town chooser." },
            { title: "Plan your trip", href: "/plan-your-trip", description: "Manual starter planner." },
            { title: "How many days", href: "/how-many-days", description: "Set trip length." },
          ]}
        />
        <SourceBox />
      </article>
      <SiteFooter />
    </main>
  );
}
