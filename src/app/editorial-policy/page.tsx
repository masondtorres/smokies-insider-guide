import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "How Smokies Insider Guide keeps visitor-first planning separate from sponsored visibility.",
};

export default function EditorialPolicyPage() {
  return (
    <PolicyPage
      title="Editorial Policy"
      description="We write for visitors first. Sponsored visibility is labeled, and businesses can buy visibility, not editorial truth."
      path="/editorial-policy"
      points={[
        "We write for visitors first.",
        "Sponsored visibility is labeled.",
        "Businesses can buy visibility, not editorial truth.",
        "Facts that change should be verified with official sources.",
        "We correct outdated information when reported.",
      ]}
    />
  );
}
