import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Corrections",
  description: "Report outdated Smokies planning information, business details, closures, prices, accessibility notes or road status.",
};

export default function CorrectionsPage() {
  return (
    <PolicyPage
      title="Corrections"
      description="Visitors and businesses can report outdated information so the guide can be corrected."
      path="/corrections"
      points={[
        "Visitors and businesses can report outdated information.",
        "Time-sensitive details include closures, hours, prices, parking, accessibility and road status.",
        "Use the contact page to send a correction with the page URL and the official source if you have one.",
      ]}
    />
  );
}
