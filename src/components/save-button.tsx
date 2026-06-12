"use client";

import { usePlanIds, writePlanIds } from "@/lib/use-plan";

export function SaveButton({ id, removeOnly = false }: { id: string; removeOnly?: boolean }) {
  const ids = usePlanIds();
  const saved = ids.includes(id);

  function toggle() {
    writePlanIds(saved ? ids.filter((item) => item !== id) : [...ids, id]);
  }

  return (
    <button
      aria-pressed={saved}
      className={`save-plan-button${saved ? " saved" : ""}`}
      type="button"
      onClick={toggle}
    >
      {saved ? (removeOnly ? "Remove" : "Saved - Remove") : "Add to My Plan"}
    </button>
  );
}
