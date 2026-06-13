import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How browser-saved My Plan data and aggregate site analytics are handled by Smokies Insider Guide.",
};

export default function PrivacyPage() {
  return <PolicyPage title="Privacy Policy" description="My Plan data stays in your browser, while Vercel Web Analytics provides aggregate page-view analytics." path="/privacy" points={[
    "Saved planner-result identifiers use local storage so My Plan can display them later.",
    "The saved plan is not sent to a site database by this feature.",
    "Clearing browser storage removes the saved plan.",
    "Vercel Web Analytics collects aggregate, anonymized page-view information without third-party cookies.",
    "The site does not use Google Analytics or custom analytics events.",
    "This policy must be updated before adding forms, advertising, accounts or other data collection.",
  ]} />;
}
