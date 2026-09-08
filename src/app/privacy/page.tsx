import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How browser-saved My Plan data and site analytics are handled by Smoky Insider.",
};

export default function PrivacyPage() {
  return <PolicyPage title="Privacy Policy" description="My Plan data stays in your browser, while Vercel Web Analytics and Google Analytics provide site-usage analytics." path="/privacy" points={[
    "Saved planner-result identifiers use local storage so My Plan can display them later.",
    "The saved plan is not sent to a site database by this feature.",
    "Clearing browser storage removes the saved plan.",
    "Vercel Web Analytics collects aggregate page-view information for site performance reporting.",
    "Google Analytics is enabled with Measurement ID G-MPRKPD95C1 to measure page views, traffic sources and engagement. Google Analytics may use cookies or similar identifiers under Google's policies.",
    "Smoky Insider does not intentionally send names, email addresses, contact-message bodies or saved-plan content to Google Analytics as analytics event properties.",
    "No custom Google Analytics conversion events are enabled as part of this initial setup.",
    "This policy must be reviewed before adding advertising personalization, account-based tracking or additional analytics data collection.",
  ]} />;
}
