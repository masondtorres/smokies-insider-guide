import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Sponsored Content Policy",
  description: "How Smokies Insider Guide labels and separates future sponsored placements.",
};

export default function SponsoredContentPolicyPage() {
  return (
    <PolicyPage
      title="Sponsored Content Policy"
      description="Sponsored placements are labeled and do not override best-fit planning guidance."
      path="/sponsored-content-policy"
      points={[
        "Sponsored placements are labeled.",
        "Sponsored items do not override best-fit planning guidance.",
        "Deals and offers must have terms and expiration when published.",
        "Future sponsor slots stay separated from editorial planning advice.",
      ]}
    />
  );
}
