import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Photo Credits",
  description:
    "Photography sources and licenses used on Smokies Insider, including National Park Service public-domain images, NARA, and credited Wikimedia work.",
  alternates: { canonical: "/photo-credits" },
};

const photos = [
  {
    place: "Cades Cove split-rail fences and autumn ridges",
    use: "Homepage hero and social preview",
    credit: "National Park Service",
    rights: "U.S. government work, public domain",
  },
  {
    place: "Gregg-Cable House, Cades Cove",
    use: "Eat and historic-structure pages",
    credit: "National Park Service",
    rights: "U.S. government work, public domain",
  },
  {
    place: "Ramsey Cascades",
    use: "Do category hero",
    credit: "National Park Service",
    rights: "U.S. government work, public domain",
  },
  {
    place: 'Noah "Bud" Ogle Cabin',
    use: "Inner-page heroes",
    credit: "National Park Service",
    rights: "U.S. government work, public domain",
  },
  {
    place: "Historic Appalachian cabins",
    use: "Stay category hero",
    credit: "Tennessee Valley Authority / U.S. National Archives (NARA 280469)",
    rights: "U.S. government work, public domain",
  },
  {
    place: "View east from Kuwohi (Clingmans Dome)",
    use: "See, Today, Go, and park panels. Compressed for web delivery.",
    credit: "Acroterion",
    rights: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:View_east_from_Clingman%27s_Dome_GSMNP_NC1.jpg",
    license: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
];

export default function PhotoCreditsPage() {
  return (
    <main className="si-width" style={{ padding: "48px 0 80px" }}>
      <p className="si-kicker">Rights and sources</p>
      <h1>Photo credits</h1>
      <p>
        Smokies Insider uses real photographs of Great Smoky Mountains National Park and nearby historic structures. Images are not decorative stock of other mountain ranges. Files may be compressed or cropped for the web; they are not presented as current live conditions.
      </p>
      <div className="si-decision-list" style={{ marginTop: 28 }}>
        {photos.map((photo) => (
          <article className="si-decision-item" key={photo.place} style={{ alignItems: "start" }}>
            <strong>{photo.place}</strong>
            <p>
              {photo.use}. Credit: {photo.credit}. {photo.rights}.
              {photo.source ? (
                <>
                  {" "}
                  <a href={photo.source} rel="noopener noreferrer">
                    Source
                  </a>
                  {photo.license ? (
                    <>
                      {" · "}
                      <a href={photo.license} rel="license">
                        License
                      </a>
                    </>
                  ) : null}
                </>
              ) : null}
            </p>
            <span>{photo.credit}</span>
          </article>
        ))}
      </div>
      <p style={{ marginTop: 28 }}>
        <Link href="/source-and-verification-policy">Source and verification policy</Link>
      </p>
    </main>
  );
}
