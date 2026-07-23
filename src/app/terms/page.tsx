import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for using Smoky Insider as an independent Smoky Mountains trip-planning aid.",
};

export default function TermsPage() {
  return (
    <PolicyPage
      title="Terms of Use"
      description="Use Smoky Insider as an independent planning aid, not as an official notice, reservation, professional instruction or guarantee."
      path="/terms"
      points={[
        "Road conditions, closures, access, weather, prices, hours and operating details can change without notice.",
        "Verify important or time-sensitive details with the National Park Service, the relevant government agency or the business involved before travel.",
        "Use judgment appropriate to weather, terrain, traffic, health, age, mobility needs and the abilities of your group.",
        "Do not rely on Smoky Insider for emergencies, active hazards or real-time safety instructions.",
        "Links to third-party websites are provided for convenience. Smoky Insider does not control their content, availability, reservations, products, policies or security.",
        "Submitting a contact form does not create a contract, booking, advisory relationship or obligation to respond within a particular period.",
        "Do not submit unlawful, abusive, confidential or third-party personal information through site forms.",
        "Original Smoky Insider text, design and tools may not be republished or commercially reproduced without permission, except for ordinary personal trip-planning use.",
        "To the extent permitted by law, users remain responsible for their travel decisions, purchases, driving, outdoor activities and use of third-party services.",
      ]}
    />
  );
}
