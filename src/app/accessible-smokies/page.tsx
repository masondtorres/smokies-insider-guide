import type { Metadata } from "next";
import { GuidePage } from "@/components/guide";
import { guidePages } from "@/lib/smokiesData";

export const metadata: Metadata = {
  title: "Accessible Smokies: Low-Walking and Mobility-Friendly Planning",
  description: guidePages["/accessible-smokies"].description,
};

export default function AccessibleSmokiesPage() {
  return <GuidePage page={guidePages["/accessible-smokies"]} path="/accessible-smokies" />;
}
