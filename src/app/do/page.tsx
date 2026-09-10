import { CategoryPage } from "@/components/category-page";
import { PlaceList } from "@/components/place-list";
import { placesByKind } from "@/data/places";

export default function Page() {
  return (
    <>
      <CategoryPage category="do" />
      <div className="si-width">
        <PlaceList
          title="Verified attractions with working links"
          intro="Buy tickets and check hours only on official attraction sites."
          items={placesByKind("attraction")}
        />
      </div>
    </>
  );
}
