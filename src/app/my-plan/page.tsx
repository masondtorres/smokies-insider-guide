import type { Metadata } from "next";
import { MyPlan } from "@/components/my-plan";
import { SiteFooter, SiteHeader } from "@/components/guide";

export const metadata: Metadata = {
  title: "My Smokies Plan",
  description: "Review Smokies planning cards saved in this browser, grouped by category with basic trip-shape warnings.",
};

export default function MyPlanPage() {
  return (
    <main className="guide-page my-plan-page">
      <SiteHeader />
      <article className="guide-article">
        <header className="guide-hero">
          <p className="eyebrow">Browser-saved trip builder</p>
          <h1>My Plan</h1>
          <p>Keep useful planning cards together, review the mix by category, and catch common day-planning problems early.</p>
        </header>
        <MyPlan />
      </article>
      <SiteFooter />
    </main>
  );
}
