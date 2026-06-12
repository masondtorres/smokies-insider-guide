import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How browser-saved My Plan data is handled by Smokies Insider Guide.",
};

export default function PrivacyPage() {
  return <PolicyPage title="Privacy Policy" description="My Plan data is stored only in your browser in this version of the site." path="/privacy" points={[
    "Saved planner-result identifiers use local storage so My Plan can display them later.",
    "The saved plan is not sent to a site database by this feature.",
    "Clearing browser storage removes the saved plan.",
    "This policy must be updated before adding forms, analytics, advertising, accounts or other data collection.",
  ]} />;
}
