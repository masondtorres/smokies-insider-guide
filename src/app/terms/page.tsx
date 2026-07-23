import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for using Smoky Insider as a general trip-planning aid.",
};

export default function TermsPage() {
  return <PolicyPage title="Terms of Use" description="Use Smoky Insider as a general planning aid, not an official notice, reservation or guarantee." path="/terms" points={[
    "Conditions, closures, access, weather, prices and operating details can change.",
    "Verify important details with the appropriate official source or business before travel.",
    "Use judgment appropriate to weather, terrain, traffic, health and mobility needs.",
    "Do not rely on this site for emergencies or real-time safety information.",
  ]} />;
}
