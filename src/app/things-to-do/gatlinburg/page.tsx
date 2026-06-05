import type { Metadata } from "next";
import { GuidePage } from "@/components/guide";
import { guidePages } from "@/lib/smokiesData";

export const metadata: Metadata = {
  title: "Things to Do in Gatlinburg",
  description: guidePages["/things-to-do/gatlinburg"].description,
};

export default function ThingsToDoGatlinburgPage() {
  return <GuidePage page={guidePages["/things-to-do/gatlinburg"]} path="/things-to-do/gatlinburg" />;
}
