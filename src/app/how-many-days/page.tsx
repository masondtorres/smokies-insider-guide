import type { Metadata } from "next";
import { GuidePage } from "@/components/guide";
import { guidePages } from "@/lib/smokiesData";

export const metadata: Metadata = {
  title: "How Many Days Do You Need in the Smokies?",
  description: guidePages["/how-many-days"].description,
};

export default function HowManyDaysPage() {
  return <GuidePage page={guidePages["/how-many-days"]} path="/how-many-days" />;
}
