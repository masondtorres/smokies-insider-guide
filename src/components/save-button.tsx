"use client";

import { usePlanIds, writePlanIds } from "@/lib/use-plan";

export function SaveButton({ id }: { id: string }) {
  const ids = usePlanIds();
  const saved = ids.includes(id);

  function toggle() {
    const next = ids.includes(id) ? ids.filter((item) => item !== id) : [...ids, id];
    writePlanIds(next);
  }

  return <button className={`button button-small ${saved ? "saved-state" : ""}`} type="button" onClick={toggle}>{saved ? "Remove from plan" : "Save to plan"}</button>;
}
