import type { Metadata } from "next";
import { GuidePage } from "@/components/guide";
import { guidePages } from "@/lib/smokiesData";

export const metadata: Metadata = {
  title: "Advertise With Smokies Insider Guide",
  description: guidePages["/advertise"].description,
};

export default function AdvertisePage() {
  return <GuidePage page={guidePages["/advertise"]} path="/advertise" />;
}
