import type { Metadata } from "next";
import { GuidePage } from "@/components/guide";
import { guidePages } from "@/lib/smokiesData";

export const metadata: Metadata = {
  title: "Smokies Restaurants by Situation",
  description: guidePages["/restaurants"].description,
};

export default function RestaurantsPage() {
  return <GuidePage page={guidePages["/restaurants"]} path="/restaurants" />;
}
