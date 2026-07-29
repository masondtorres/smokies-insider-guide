import type { Metadata } from "next";
import { GuidePage } from "@/components/guide";
import { guidePages } from "@/lib/smokiesData";

export const metadata: Metadata = {
  title: "Gatlinburg vs Pigeon Forge: Which Smokies Town Fits Your Trip?",
  description: guidePages["/gatlinburg-vs-pigeon-forge"].description,
  alternates: { canonical: "/gatlinburg-vs-pigeon-forge" },
};

export default function GatlinburgVsPigeonForgePage() {
  return (
    <GuidePage
      page={guidePages["/gatlinburg-vs-pigeon-forge"]}
      path="/gatlinburg-vs-pigeon-forge"
    />
  );
}
