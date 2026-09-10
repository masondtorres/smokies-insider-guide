import { CategoryPage } from "@/components/category-page";
import { PlaceList } from "@/components/place-list";
import { placesByKind } from "@/data/places";

export default function Page() {
  return (
    <>
      <CategoryPage category="stay" />
      <div className="si-width">
        <PlaceList
          title="Verified lodging starting points"
          intro="Start with official property sites. Availability and rates are not invented here."
          items={placesByKind("lodging")}
        />
      </div>
    </>
  );
}
