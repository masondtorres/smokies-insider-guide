import type { Metadata } from "next";
import { GuidePage } from "@/components/guide";
import { guidePages } from "@/lib/smokiesData";

export const metadata: Metadata = {
  title: "Best Scenic Drives in the Smokies",
  description: guidePages["/scenic-drives"].description,
};

export default function ScenicDrivesPage() {
  return <GuidePage page={guidePages["/scenic-drives"]} path="/scenic-drives" />;
}
