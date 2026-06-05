import type { Metadata } from "next";
import { GuidePage } from "@/components/guide";
import { guidePages } from "@/lib/smokiesData";

export const metadata: Metadata = {
  title: "Where to Stay in the Smokies: Gatlinburg, Pigeon Forge, Sevierville or Townsend",
  description: guidePages["/where-to-stay"].description,
};

export default function WhereToStayPage() {
  return <GuidePage page={guidePages["/where-to-stay"]} path="/where-to-stay" />;
}
