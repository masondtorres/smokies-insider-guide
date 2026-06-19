import type { Metadata } from "next";
import { GuidePage } from "@/components/guide";
import { guidePages } from "@/lib/smokiesData";

export const metadata: Metadata = {
  title: "First Time in the Smokies: A Simple Planning Guide",
  description: guidePages["/first-time-smokies"].description,,
  alternates: { canonical: "/first-time-smokies" }
};

export default function FirstTimeSmokiesPage() {
  return <GuidePage page={guidePages["/first-time-smokies"]} path="/first-time-smokies" />;
}
