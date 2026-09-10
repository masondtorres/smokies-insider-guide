import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Visitor Resources",
  description:
    "Official Smokies planning resources for roads, weather, parking tags, trolley information and trip backups.",
  alternates: { canonical: "/visitor-resources" },
};

const official = [
  {
    title: "NPS current conditions",
    text: "Roads, trails, facilities and weather-related changes inside Great Smoky Mountains National Park.",
    href: "https://www.nps.gov/grsm/planyourvisit/conditions.htm",
    external: true,
  },
  {
    title: "NPS parking tags",
    text: "Current parking-tag rules, prices and purchase options. A tag does not reserve a space.",
    href: "https://www.nps.gov/grsm/planyourvisit/fees.htm",
    external: true,
  },
  {
    title: "National Weather Service",
    text: "Mountain weather is not town weather. Check the forecast before a ridge or long park day.",
    href: "https://www.weather.gov/mrx/",
    external: true,
  },
  {
    title: "Today's conditions desk",
    text: "Use the Smokies Insider live layer to open the official checks in one place.",
    href: "/today",
    external: false,
  },
  {
    title: "Parking and trolley guide",
    text: "Choose a parking pattern and a backup before leaving lodging.",
    href: "/smokies-parking-trolley-guide",
    external: false,
  },
  {
    title: "Rainy-day backup",
    text: "Keep one indoor plan on the same side of the region.",
    href: "/rainy-day",
    external: false,
  },
];

export default function VisitorResourcesPage() {
  return (
    <main className="destination-page">
      <section className="destination-hero">
        <p className="eyebrow">Visitor resources</p>
        <h1>Prepare for the parts that change the day.</h1>
        <p>
          Use official sources for roads, weather, parking and transportation. Use this guide for the planning judgment around those facts.
        </p>
      </section>
      <section className="destination-section">
        <div className="destination-heading">
          <p className="eyebrow">Start here</p>
          <h2>Open the source that can wreck the day if you skip it.</h2>
        </div>
        <div className="si-decision-list">
          {official.map((item) =>
            item.external ? (
              <a className="si-decision-item" href={item.href} key={item.href} rel="noopener noreferrer">
                <strong>{item.title}</strong>
                <p>{item.text}</p>
                <span>Open official source</span>
              </a>
            ) : (
              <Link className="si-decision-item" href={item.href} key={item.href}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
                <span>Open guide</span>
              </Link>
            ),
          )}
        </div>
      </section>
    </main>
  );
}
