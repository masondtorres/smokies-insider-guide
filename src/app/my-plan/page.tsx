import type { Metadata } from "next";
import { MyPlan } from "@/components/my-plan";
import { SiteFooter, SiteHeader } from "@/components/guide";

export const metadata: Metadata = {
  title: "My Smokies Plan",
  description: "Organize browser-saved Smokies planning cards by day, choose one anchor, add notes and catch common trip-shape problems.",
  alternates: { canonical: "/my-plan" },
  robots: { index: false, follow: true },
};

export default function MyPlanPage() {
  return (
    <main className="guide-page my-plan-page">
      <SiteHeader />
      <article className="guide-article">
        <header className="guide-hero">
          <p className="eyebrow">Browser-saved trip builder</p>
          <h1>My Plan</h1>
          <p>Save what fits, organize the trip by day, choose one main anchor and catch common planning problems early.</p>
        </header>
        <MyPlan />
      </article>
      <SiteFooter />
    </main>
  );
}
