import type { Metadata } from "next";
import { MyPlan } from "@/components/my-plan";
import { SiteFooter, SiteHeader } from "@/components/guide";

export const metadata: Metadata = {
  title: "My Smokies Plan",
  description: "Review Smokies planner results saved in this browser and check basic trip-shape warnings.",
};

export default function MyPlanPage() {
  return (
    <main className="guide-page my-plan-page">
      <SiteHeader />
      <article className="guide-article">
        <header className="guide-hero">
          <p className="eyebrow">Browser-saved trip builder</p>
          <h1>My Plan</h1>
          <p>Keep useful planner results together, then review the trip-shape cautions before making final decisions.</p>
        </header>
        <MyPlan />
      </article>
      <SiteFooter />
    </main>
  );
}
