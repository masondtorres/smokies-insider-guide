import type { Metadata } from "next";
import { GuidePage } from "@/components/guide";
import { guidePages } from "@/lib/smokiesData";

export const metadata: Metadata = {
  title: "Pigeon Forge Restaurants by Situation",
  description: guidePages["/restaurants/pigeon-forge"].description,
};

export default function PigeonForgeRestaurantsPage() {
  return <GuidePage page={guidePages["/restaurants/pigeon-forge"]} path="/restaurants/pigeon-forge" />;
}
