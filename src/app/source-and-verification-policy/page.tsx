import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Source and Verification Policy",
  description: "How Smokies Insider Guide matches changing travel claims to appropriate sources.",
};

export default function SourceVerificationPage() {
  return <PolicyPage title="Source and Verification Policy" description="Changing travel details should be verified with the source responsible for the claim." path="/source-and-verification-policy" points={[
    "Verify park closures, roads, parking requirements, alerts and regulations with the responsible official agency.",
    "Confirm business hours, prices, access and offers directly with the business.",
    "Time-sensitive claims should include a meaningful checked date and should not be copied forward without a new verification.",
    "Planning guidance must not be presented as official authority or guaranteed current status.",
  ]} />;
}
