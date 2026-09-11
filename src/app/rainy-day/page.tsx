import type { Metadata } from "next";
import { RainyDayEngine } from "@/components/rainy-day-engine";
import { JsonLd } from "@/components/guide";
import { breadcrumbSchema, webPageSchema } from "@/lib/seoSchema";
import "../decision-tools.css";

export const metadata: Metadata = {
  title: "Rainy Day Smokies Plan | Stay in One Town",
  description:
    "Interactive rainy-day planner for Gatlinburg, Pigeon Forge, Sevierville and Townsend. Get one geographic anchor, a few indoor stops and a backup if the storm worsens.",
  alternates: { canonical: "/rainy-day" },
};

export default function RainyDayPage() {
  return (
    <main className="rain-page">
      <header className="rain-hero">
        <p className="home-kicker">When the outdoor plan dies</p>
        <h1>Do not drive the whole county looking for better weather.</h1>
        <p>
          A useful rainy day in the Smokies is one indoor anchor, food nearby and as little Parkway
          time as possible. This tool picks a side of the region. It is not a list of every indoor attraction.
        </p>
      </header>
      <RainyDayEngine />
      <JsonLd
        data={webPageSchema({
          path: "/rainy-day",
          title: "Rainy Day Smokies Plan | Stay in One Town",
          description: metadata.description ?? "",
          dateModified: "2026-09-10",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Rainy day", url: "/rainy-day" },
        ])}
      />
    </main>
  );
}
