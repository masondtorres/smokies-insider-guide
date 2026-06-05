import type { Metadata } from "next";
import { GuidePage } from "@/components/guide";
import { guidePages } from "@/lib/smokiesData";

export const metadata: Metadata = {
  title: "Smoky Mountains Parking Tag Guide",
  description: guidePages["/parking-tag"].description,
};

export default function ParkingTagPage() {
  return <GuidePage page={guidePages["/parking-tag"]} path="/parking-tag" />;
}
