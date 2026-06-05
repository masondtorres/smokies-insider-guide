import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "How possible future affiliate links are handled on Smokies Insider Guide.",
};

export default function AffiliateDisclosurePage() {
  return (
    <PolicyPage
      title="Affiliate Disclosure"
      description="Some links may become affiliate links. Affiliate relationships do not decide editorial recommendations."
      path="/affiliate-disclosure"
      points={[
        "Some links may become affiliate links.",
        "Affiliate relationships do not decide editorial recommendations.",
        "Visitors should verify prices, hours and terms before buying.",
      ]}
    />
  );
}
