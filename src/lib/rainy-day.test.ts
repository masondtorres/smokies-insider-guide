import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { planRainyDay } from "./rainy-day";

describe("planRainyDay", () => {
  it("keeps Townsend from becoming a wet Cades Cove plus county crossing", () => {
    const plan = planRainyDay({
      who: "young-kids",
      where: "townsend",
      rain: "stormy",
      want: "attractions",
    });
    assert.match(plan.anchor, /Townsend/i);
    assert.match(plan.warning, /Cades Cove/i);
    assert.ok(plan.stops.length >= 2 && plan.stops.length <= 4);
  });

  it("parks Gatlinburg low-walking families downtown", () => {
    const plan = planRainyDay({
      who: "low-walking",
      where: "gatlinburg",
      rain: "heavy",
      want: "low-drive",
    });
    assert.match(plan.anchor, /Gatlinburg/i);
    assert.match(plan.warning, /Pigeon Forge/i);
  });

  it("keeps Sevierville shopping on the outlet side", () => {
    const plan = planRainyDay({
      who: "adults",
      where: "sevierville",
      rain: "heavy",
      want: "shopping",
    });
    assert.match(plan.anchor, /Sevierville/i);
    assert.ok(plan.stops.some((stop) => /Tanger/i.test(stop.name)));
  });
});
