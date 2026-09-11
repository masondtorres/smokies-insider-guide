import type { Metadata } from "next";
import { BusinessPageShell } from "@/components/business-intake";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Corrections",
  description: "Report outdated Smokies planning information, business details, closures, prices, accessibility notes or road status.",
  alternates: { canonical: "/corrections" },
};

export default function CorrectionsPage() {
  return (
    <BusinessPageShell
      eyebrow="Corrections"
      title="Report outdated information"
      intro="Include the page URL, what looks wrong, and the official source if you have one. Time-sensitive details include closures, hours, prices, parking, accessibility and road status."
    >
      <ContactForm variant="correction" />
    </BusinessPageShell>
  );
}
