"use client";

import { usePlanIds, writePlanIds } from "@/lib/use-plan";

export function SaveButton({ id }: { id: string }) {
  const ids = usePlanIds();
  const saved = ids.includes(id);

  function toggle() {
    writePlanIds(saved ? ids.filter((item) => item !== id) : [...ids, id]);
  }

  return (
    <button className={`save-plan-button${saved ? " saved" : ""}`} type="button" onClick={toggle}>
      {saved ? "Remove from My Plan" : "Save to My Plan"}
    </button>
  );
}
