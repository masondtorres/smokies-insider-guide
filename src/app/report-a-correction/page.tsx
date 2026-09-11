import type { Metadata } from "next";
import { BusinessPageShell } from "@/components/business-intake";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Report a Correction",
  description:
    "Report outdated Smokies planning details, closures, hours, prices or road status so the page can be checked against the official source.",
  alternates: { canonical: "/report-a-correction" },
};

export default function ReportACorrectionPage() {
  return (
    <BusinessPageShell
      eyebrow="Corrections"
      title="Tell us what is wrong"
      intro="Name the page, what looks wrong, and the correct official source if you have one. Delivery works only after the site owner connects the production inbox."
    >
      <ContactForm variant="correction" />
    </BusinessPageShell>
  );
}
