import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, SourceBox } from "@/components/guide";
import { towns } from "@/lib/smokiesData";
import { webPageSchema } from "@/lib/seoSchema";

export const metadata: Metadata = {
  title: "Where to Stay in the Smokies",
  description:
    "Compare Gatlinburg, Pigeon Forge, Sevierville, Townsend and other Smokies bases by what each location makes easier or harder.",
  alternates: { canonical: "/where-to-stay" },
  openGraph: {
    title: "Where to Stay in the Smokies | Smoky Insider",
    description:
      "Choose a Smokies base by the days you plan to take, not by the lodging photo that looked best online.",
    url: "/where-to-stay",
  },
};

const tripTypes = [
  {
    title: "First-time family",
    text: "Compare Gatlinburg and Pigeon Forge first. Choose Gatlinburg for downtown walkability and park access. Choose Pigeon Forge for attractions, Dollywood and shows.",
  },
  {
    title: "Quiet scenic trip",
    text: "Start with Townsend or Wears Valley when quiet roads and the west side of the park matter more than being close to the Parkway.",
  },
  {
    title: "Budget-focused stay",
    text: "Sevierville and outer bases may offer better value, but calculate the repeated drive before treating a lower nightly rate as a real saving.",
  },
  {
    title: "Mostly national park",
    text: "Choose the park entrance and side you expect to use most. A cabin with a view is not useful when every trail day begins with a long cross-county drive.",
  },
];

export default function WhereToStayPage() {
  return (
    <main className="guide-rebuild">
      <header className="guide-rebuild-hero">
        <div>
          <p className="section-label">Base-town decision</p>
          <h1>Where to stay in the Smokies</h1>
          <p>
            Choose the base that makes your main days easier. The wrong location can
            turn a good cabin, hotel or campground into a daily traffic problem.
          </p>
        </div>
      </header>

      <article className="guide-rebuild-article">
        <section className="guide-answer">
          <p className="section-label">The answer first</p>
          <h2>Choose the route before the room.</h2>
          <p>
            Gatlinburg is usually strongest for walkable downtown time and the
            Gatlinburg side of the national park. Pigeon Forge is strongest for
            attractions, Dollywood and shows. Townsend is strongest for quiet and
            Cades Cove access. Sevierville can offer space and value, but only when
            the extra driving still fits the trip.
          </p>
        </section>

        <section className="stay-comparison" aria-labelledby="stay-comparison-title">
          <p className="section-label">Direct comparison</p>
          <h2 id="stay-comparison-title">What each base makes easier</h2>
          <div className="comparison-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Base</th>
                  <th>Choose it when</th>
                  <th>Skip it when</th>
                  <th>Common mistake</th>
                </tr>
              </thead>
              <tbody>
                {towns.map((town) => (
                  <tr key={town.name}>
                    <th scope="row">{town.name}</th>
                    <td>{town.bestFor}</td>
                    <td>{town.skipIf}</td>
                    <td>{town.mistake}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="guide-rebuild-sections" aria-labelledby="trip-type-title">
          <div className="stay-section-heading">
            <p className="section-label">Choose by trip type</p>
            <h2 id="trip-type-title">Do not book a base that fights the main day.</h2>
          </div>
          {tripTypes.map((item, index) => (
            <section key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </section>
          ))}
        </section>

        <aside className="local-note local-note-warning">
          <strong>Do not book for the view before checking the drive.</strong>
          <div>
            <p>
              A cabin can look perfect online and still make breakfast, park stops,
              dinner and rainy-day backups harder every day. Map the main routes at
              the hours you expect to use them before committing.
            </p>
          </div>
        </aside>

        <section className="guide-next" aria-labelledby="stay-next-title">
          <p className="section-label">Compare the strongest choices</p>
          <h2 id="stay-next-title">Read next</h2>
          <div>
            <Link href="/gatlinburg">
              <strong>Gatlinburg</strong>
              <span>Walkability, downtown parking and park access.</span>
              <b aria-hidden="true">&rarr;</b>
            </Link>
            <Link href="/pigeon-forge">
              <strong>Pigeon Forge</strong>
              <span>Dollywood, shows, attractions and Parkway traffic.</span>
              <b aria-hidden="true">&rarr;</b>
            </Link>
            <Link href="/gatlinburg-vs-pigeon-forge">
              <strong>Gatlinburg or Pigeon Forge</strong>
              <span>Make the main Tennessee-side tradeoff directly.</span>
              <b aria-hidden="true">&rarr;</b>
            </Link>
            <Link href="/start-planning">
              <strong>Build a trip</strong>
              <span>Turn the base choice into a realistic starter plan.</span>
              <b aria-hidden="true">&rarr;</b>
            </Link>
          </div>
        </section>

        <SourceBox
          text="Lodging availability, access roads, rates and property details change. Verify the exact address, route, cancellation terms and accessibility details with the property before booking."
        />
      </article>

      <JsonLd
        data={webPageSchema({
          path: "/where-to-stay",
          title: "Where to Stay in the Smokies",
          description: metadata.description ?? "",
        })}
      />
    </main>
  );
}
