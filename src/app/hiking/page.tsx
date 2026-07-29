import type { Metadata } from "next";
import { GuidePage } from "@/components/guide";
import { guidePages } from "@/lib/smokiesData";

export const metadata: Metadata = {
  title: "Smoky Mountains Hiking Guide for Realistic Trip Planning",
  description: guidePages["/hiking"].description,
};

export default function HikingPage() {
  return <GuidePage page={guidePages["/hiking"]} path="/hiking" />;
}
