import { CategoryPage } from "@/components/category-page";
import { PlaceList } from "@/components/place-list";
import { placesByKind } from "@/data/places";

export default function Page() {
  return (
    <>
      <CategoryPage category="eat" />
      <div className="si-width">
        <PlaceList
          title="Real restaurants you can open right now"
          intro="Verified listings with official websites and directions. Confirm hours, menus and waits with the business. No invented ratings."
          items={placesByKind("restaurant")}
        />
      </div>
    </>
  );
}
