import Link from "next/link";
import { mapsUrl, type Place } from "@/data/places";
import { SaveButton } from "./save-button";

export function PlaceList({
  title,
  intro,
  items,
}: {
  title: string;
  intro: string;
  items: Place[];
}) {
  if (items.length === 0) return null;

  return (
    <section className="place-list" aria-label={title}>
      <div className="category-section-heading simple">
        <div>
          <p className="category-eyebrow">Verified places</p>
          <h2>{title}</h2>
        </div>
        <p>{intro}</p>
      </div>
      <div className="place-grid">
        {items.map((place) => (
          <article className="place-card" key={place.slug}>
            <p className="place-kicker">
              {place.town} · {place.kind}
            </p>
            <h3>
              <Link href={`/places/${place.slug}`}>{place.name}</Link>
            </h3>
            <p>{place.note}</p>
            <p className="place-meta">{place.familyFit}</p>
            <p className="place-meta">Nearby: {place.nearby}</p>
            <p className="place-meta">
              Last verified {place.lastVerified} · {place.sourceLabel}
            </p>
            <div className="place-actions">
              <a href={place.website} rel="noopener noreferrer" target="_blank">
                Official site
              </a>
              <a href={mapsUrl(place)} rel="noopener noreferrer" target="_blank">
                Directions
              </a>
              <SaveButton id={`place:${place.slug}`} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
