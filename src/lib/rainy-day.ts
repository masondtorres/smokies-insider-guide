export type RainWho = "young-kids" | "teens" | "adults" | "low-walking";
export type RainWhere = "gatlinburg" | "pigeon-forge" | "sevierville" | "townsend" | "not-sure";
export type RainLevel = "light" | "heavy" | "stormy";
export type RainWant = "attractions" | "food" | "shopping" | "indoors" | "low-drive";

export type RainStop = { name: string; why: string; href?: string };
export type RainPlan = { anchor: string; why: string; stops: RainStop[]; warning: string; backup: string };

const aquarium: RainStop = { name: "Ripley's Aquarium of the Smokies", why: "All-weather downtown Gatlinburg stop with little exposure between garage and door.", href: "/places/ripleys-aquarium-gatlinburg" };
const crafts: RainStop = { name: "Great Smoky Arts & Crafts Community", why: "Short hops between shops. Works in light rain if you keep the loop tight.", href: "/gatlinburg" };
const dollywood: RainStop = { name: "Dollywood (indoor shows + sheltered streets)", why: "A full paid day that can survive rain if the park is open. Recheck the calendar before you drive.", href: "/dollywood-day-plan" };
const wonderworks: RainStop = { name: "WonderWorks", why: "One indoor Pigeon Forge building. Useful when outdoor plans are dead and walking needs to stay short.", href: "/pigeon-forge-with-kids" };
const titanic: RainStop = { name: "Titanic Museum Attraction", why: "Self-contained indoor stop on the Parkway. Pair with food next door, not a second town.", href: "/pigeon-forge" };
const island: RainStop = { name: "The Island in Pigeon Forge", why: "Compact parking-once zone with indoor options. Better than hopping lots in heavy rain.", href: "/pigeon-forge" };
const tanger: RainStop = { name: "Tanger Outlets Sevierville", why: "The lowest-friction indoor stretch if you are already on the Sevierville side.", href: "/sevierville" };
const goat: RainStop = { name: "A Parkway sit-down meal", why: "Make food the pause, not another drive. Eat where you already parked.", href: "/eat" };
const pantry: RainStop = { name: "A downtown Gatlinburg meal near the garage", why: "Do not add a reservation across town. Keep lunch inside the same walking pocket.", href: "/restaurants/gatlinburg" };
const townsendMeal: RainStop = { name: "Stay put for a Townsend meal", why: "Townsend does not have a dense indoor backup. Eat locally before you decide whether the drive is worth it.", href: "/townsend" };
const movie: RainStop = { name: "One theater or indoor attraction already on your side", why: "A single paid indoor stop beats a scenic drive in the clouds.", href: "/things-to-do" };
const anakeesta: RainStop = { name: "Anakeesta (confirm weather hold)", why: "Useful only in light rain. Skip it if the mountain is in a storm hold.", href: "/places/anakeesta" };

export function planRainyDay(input: { who: RainWho; where: RainWhere; rain: RainLevel; want: RainWant }): RainPlan {
  const { who, where, rain, want } = input;
  const lowWalk = who === "low-walking" || who === "young-kids";
  const storm = rain === "stormy";
  const heavy = rain === "heavy" || storm;

  if (where === "townsend") {
    if (heavy || want === "low-drive") {
      return {
        anchor: "Stay in Townsend unless you already planned one paid indoor day",
        why: "Townsend is the quiet park side. It does not have a dense indoor backup. A wet Cades Cove loop plus a cross-county drive is how the day collapses.",
        stops: [townsendMeal, movie, { name: "Only then consider one Gatlinburg indoor stop", why: "Make it one destination with parking once. Do not add Pigeon Forge after that." }],
        warning: "Cades Cove and Foothills Parkway are the wrong save in a storm. Roads get slick and views disappear.",
        backup: "If the rain gets worse, cancel the park idea and keep the rest of the day inside the cabin-to-meal radius.",
      };
    }
    return {
      anchor: "Townsend first, then one Gatlinburg indoor pocket if the rain stays light",
      why: "Light rain can still work if you refuse the long scenic loop. Do not turn a drizzle into a county crossing.",
      stops: [townsendMeal, crafts, pantry],
      warning: "The drive from Townsend to downtown Gatlinburg is the cost. If lots look ugly, turn around.",
      backup: "If showers thicken, drop the crafts loop and eat locally.",
    };
  }

  if (where === "gatlinburg" || (where === "not-sure" && want !== "attractions" && want !== "shopping")) {
    if (storm || want === "low-drive" || lowWalk) {
      return {
        anchor: "Downtown Gatlinburg, one garage",
        why: "You are already at the walkable indoor cluster. Parking once is the whole strategy.",
        stops: [aquarium, pantry, { name: "One nearby indoor shop or space", why: "Stay inside the same few blocks. Do not add Anakeesta or a Parkway attraction after the storm starts." }].slice(0, lowWalk ? 2 : 3),
        warning: "Do not drive to Pigeon Forge just to see. The Parkway is worse in a storm than the rain itself.",
        backup: "If the aquarium wait is ugly, eat and stop. A forced second attraction creates the walk you were trying to avoid.",
      };
    }
    if (want === "shopping" || want === "food") {
      return {
        anchor: "Gatlinburg walking pocket plus Arts and Crafts only if the rain stays light",
        why: "Shopping works here when you keep it on one side of town.",
        stops: [crafts, pantry, aquarium],
        warning: "The Arts and Crafts Community is a driving loop. Skip it in heavy rain.",
        backup: "Collapse back to the aquarium-and-lunch pocket downtown.",
      };
    }
    return {
      anchor: "Gatlinburg indoor core",
      why: "Light rain still favors staying in town over a ridge drive.",
      stops: [aquarium, pantry, rain === "light" ? anakeesta : crafts],
      warning: "Kuwohi and Newfound Gap are usually worse than town when it is already wet.",
      backup: "If the mountain attraction holds or fogs out, stay downtown and eat.",
    };
  }

  if (where === "sevierville") {
    if (want === "shopping" || want === "low-drive" || heavy) {
      return {
        anchor: "Sevierville / outlet side",
        why: "You already paid the location tax. Do not add Gatlinburg traffic on a washed-out day.",
        stops: [tanger, goat, movie],
        warning: "Driving to downtown Gatlinburg from Sevierville in heavy rain is a second trip, not a backup.",
        backup: "If outlets feel pointless, pick one Pigeon Forge indoor building and stop there. Do not stack both towns.",
      };
    }
    return {
      anchor: "One Pigeon Forge indoor cluster, then back",
      why: "Sevierville works as a base if the wet-day destination is a single Parkway stop, not a tour.",
      stops: [want === "attractions" ? dollywood : island, goat, titanic],
      warning: "Dollywood only if it is open and you already have the day committed. Do not discover a closure after a 40-minute drive.",
      backup: "Fall back to Tanger and a meal on the Sevierville side.",
    };
  }

  if (storm || want === "low-drive") {
    return {
      anchor: "Pigeon Forge Parkway cluster, park once",
      why: "The Island, nearby museums and food can salvage a dead outdoor day without crossing into Gatlinburg.",
      stops: [island, who === "young-kids" || who === "teens" ? wonderworks : titanic, goat],
      warning: "The Parkway itself is the hazard. Do not add downtown Gatlinburg after you already parked.",
      backup: "If the first indoor stop is packed, eat and quit. A second lot search is how families lose the afternoon.",
    };
  }

  if (want === "attractions" || who === "teens" || who === "young-kids") {
    return {
      anchor: "Pigeon Forge paid indoor day",
      why: "Shows and indoor attractions are why this base exists on a wet day.",
      stops: [rain === "light" ? dollywood : wonderworks, island, goat],
      warning: "Confirm Dollywood hours before you leave. A weather delay plus Parkway traffic is a wasted ticket morning.",
      backup: "If the park is a poor call, stay on the Island / museum cluster and skip Gatlinburg.",
    };
  }

  return {
    anchor: "Pigeon Forge, compact indoor loop",
    why: "Keep the day on this side of the county. Shopping, food and one indoor attraction are enough.",
    stops: [island, titanic, goat],
    warning: "Do not just swing through Gatlinburg. That swing is the traffic tax.",
    backup: "Drop the second stop and eat. Resume only if the rain actually breaks.",
  };
}
