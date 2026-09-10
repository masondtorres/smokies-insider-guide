import type { Metadata } from "next";
import { GuidePage } from "@/components/guide";
import { PlaceList } from "@/components/place-list";
import { placesByKind } from "@/data/places";
import { guidePages } from "@/lib/smokiesData";

export const metadata: Metadata = {
  title: "Smokies Restaurants by Situation",
  description: guidePages["/restaurants"].description,
};

export default function RestaurantsPage() {
  return (
    <>
      <GuidePage page={guidePages["/restaurants"]} path="/restaurants" />
      <div className="si-width">
        <PlaceList
          title="Verified restaurants with official links"
          intro="Start here, then confirm hours and waits with the restaurant."
          items={placesByKind("restaurant")}
        />
      </div>
    </>
  );
}
