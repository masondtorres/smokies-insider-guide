import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PlaceList } from "@/components/place-list";
import { SaveButton } from "@/components/save-button";
import { mapsUrl, placeBySlug, places } from "@/data/places";

type Params = { slug: string };

export function generateStaticParams() {
  return places.map((place) => ({ slug: place.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const place = placeBySlug(slug);
  if (!place) return { title: "Place not found" };
  return {
    title: `${place.name} | Smokies Insider`,
    description: `${place.name} in ${place.town}. Official site, directions and planning notes. Last verified ${place.lastVerified}.`,
    alternates: { canonical: `/places/${place.slug}` },
  };
}

export default async function PlacePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const place = placeBySlug(slug);
  if (!place) notFound();

  const nearby = places.filter(
    (item) => item.slug !== place.slug && item.town === place.town,
  );

  return (
    <main className="destination-page">
      <section className="destination-hero">
        <p className="eyebrow">
          {place.town} · {place.kind}
        </p>
        <h1>{place.name}</h1>
        <p>{place.note}</p>
      </section>
      <section className="destination-section">
        <p>{place.familyFit}</p>
        <p>Nearby context: {place.nearby}</p>
        <p>
          Last verified {place.lastVerified} from {place.sourceLabel}. Hours, prices,
          tickets and availability must be confirmed on the official site. This is a
          verified listing, not a paid ranking and not a personal review.
        </p>
        <p>
          <a href={place.website} rel="noopener noreferrer" target="_blank">
            Open official website
          </a>
        </p>
        <p>
          <a href={mapsUrl(place)} rel="noopener noreferrer" target="_blank">
            Open directions
          </a>
        </p>
        <SaveButton id={`place:${place.slug}`} />
        <p>
          <Link href="/advertise">Claim or feature this listing</Link>
        </p>
      </section>
      <PlaceList
        title={`More verified places in ${place.town}`}
        intro="Use official sites for the changing details."
        items={nearby}
      />
    </main>
  );
}
