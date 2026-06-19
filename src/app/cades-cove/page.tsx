import type { Metadata } from "next";
import { GuidePage } from "@/components/guide";
import { guidePages } from "@/lib/smokiesData";

export const metadata: Metadata = {
  title: "Cades Cove Smokies Guide",
  description: guidePages["/cades-cove"].description,,
  alternates: { canonical: "/cades-cove" }
};

export default function CadesCovePage() {
  return <GuidePage page={guidePages["/cades-cove"]} path="/cades-cove" />;
}
