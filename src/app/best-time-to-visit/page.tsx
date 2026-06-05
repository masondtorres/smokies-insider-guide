import type { Metadata } from "next";
import { GuidePage } from "@/components/guide";
import { guidePages } from "@/lib/smokiesData";

export const metadata: Metadata = {
  title: "Best Time to Visit the Smokies",
  description: guidePages["/best-time-to-visit"].description,
};

export default function BestTimeToVisitPage() {
  return <GuidePage page={guidePages["/best-time-to-visit"]} path="/best-time-to-visit" />;
}
