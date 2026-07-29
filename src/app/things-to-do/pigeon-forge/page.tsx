import type { Metadata } from "next";
import { GuidePage } from "@/components/guide";
import { guidePages } from "@/lib/smokiesData";

export const metadata: Metadata = {
  title: "Things to Do in Pigeon Forge",
  description: guidePages["/things-to-do/pigeon-forge"].description,
};

export default function ThingsToDoPigeonForgePage() {
  return <GuidePage page={guidePages["/things-to-do/pigeon-forge"]} path="/things-to-do/pigeon-forge" />;
}
