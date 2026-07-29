import type { Metadata } from "next";
import { GuidePage } from "@/components/guide";
import { guidePages } from "@/lib/smokiesData";

export const metadata: Metadata = {
  title: "What to Skip in the Smokies When Time Is Tight",
  description: guidePages["/what-to-skip"].description,
};

export default function WhatToSkipPage() {
  return <GuidePage page={guidePages["/what-to-skip"]} path="/what-to-skip" />;
}
