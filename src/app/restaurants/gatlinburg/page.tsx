import type { Metadata } from "next";
import { GuidePage } from "@/components/guide";
import { guidePages } from "@/lib/smokiesData";

export const metadata: Metadata = {
  title: "Gatlinburg Restaurants by Situation",
  description: guidePages["/restaurants/gatlinburg"].description,
};

export default function GatlinburgRestaurantsPage() {
  return <GuidePage page={guidePages["/restaurants/gatlinburg"]} path="/restaurants/gatlinburg" />;
}
