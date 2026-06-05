import type { Metadata } from "next";
import { DealCard, GuidePage } from "@/components/guide";
import { dealPlaceholders, guidePages } from "@/lib/smokiesData";

export const metadata: Metadata = {
  title: "Smokies Deals That Fit the Trip",
  description: guidePages["/deals"].description,
};

export default function DealsPage() {
  return (
    <>
      <GuidePage page={guidePages["/deals"]} path="/deals" />
      <section className="guide-article deal-list-after">
        {dealPlaceholders.map((deal) => (
          <DealCard key={deal.offer} {...deal} />
        ))}
      </section>
    </>
  );
}
