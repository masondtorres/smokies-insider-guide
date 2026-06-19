import type { Metadata } from "next";
import { GuidePage } from "@/components/guide";
import { guidePages } from "@/lib/smokiesData";

export const metadata: Metadata = {
  title: "Rainy Day Things to Do in the Smokies",
  description: guidePages["/rainy-day"].description,
  alternates: { canonical: "/rainy-day" },
};

export default function RainyDayPage() {
  return <GuidePage page={guidePages["/rainy-day"]} path="/rainy-day" />;
}
