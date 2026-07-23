import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Smoky Insider handles browser-saved trip data, contact submissions and aggregate analytics.",
};

export default function PrivacyPage() {
  return (
    <PolicyPage
      title="Privacy Policy"
      description="Smoky Insider collects only the information needed to operate the trip planner, answer contact messages and understand aggregate site use."
      path="/privacy"
      points={[
        "My Plan stores saved planner-result identifiers in your browser using local storage. That saved plan is not sent to a site database by the planner feature.",
        "Clearing your browser storage removes the saved My Plan information from that device.",
        "The contact form may collect the name, email address and message you submit so Smoky Insider can review and respond to your request.",
        "Contact submissions may be delivered through the site's hosting or email service providers. They are retained only as reasonably needed to respond, maintain records and prevent abuse.",
        "Vercel Web Analytics provides aggregate site-use information. Smoky Insider does not currently use Google Analytics or custom advertising-tracking events.",
        "The site may link to National Park Service pages, local businesses or other third-party websites. Their privacy practices are controlled by those organizations.",
        "Smoky Insider does not sell personal information to advertisers.",
        "Questions or deletion requests concerning a contact submission may be sent through the Contact page.",
      ]}
    />
  );
}
