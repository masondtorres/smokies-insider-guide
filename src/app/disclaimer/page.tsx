import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Smokies Insider Guide is an independent planning guide, not the National Park Service.",
};

export default function DisclaimerPage() {
  return (
    <PolicyPage
      title="Disclaimer"
      description="This is an independent planning guide. It is not the National Park Service."
      path="/disclaimer"
      points={[
        "This is an independent planning guide.",
        "It is not the National Park Service.",
        "Park rules, road conditions, weather, business hours and prices can change.",
        "Verify before final plans.",
      ]}
    />
  );
}
