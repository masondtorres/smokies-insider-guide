import type { Metadata } from "next";
import { GuidePage } from "@/components/guide";
import { guidePages } from "@/lib/smokiesData";

export const metadata: Metadata = {
  title: "Things to Do in the Smokies by Trip Type",
  description: guidePages["/things-to-do"].description,
};

export default function ThingsToDoPage() {
  return <GuidePage page={guidePages["/things-to-do"]} path="/things-to-do" />;
}
