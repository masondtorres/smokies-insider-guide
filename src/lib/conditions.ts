export type ConditionStatus = "available" | "unavailable";
export type WeatherPeriod = { name: string; temperature: number | null; temperatureUnit: string; wind: string; shortForecast: string; detailedForecast: string };
export type WeatherPlace = { label: string; status: ConditionStatus; period: WeatherPeriod | null; sourceName: string; sourceUrl: string; checkedAt: string };
export type AlertItem = { event: string; headline: string; sourceUrl: string };
export type OfficialCheck = { id: string; title: string; why: string; sourceName: string; sourceUrl: string; automated: boolean };

const NWS_UA = "SmokiesInsider.com conditions-layer (https://www.smokyinsider.com/today)";
const TIMEOUT_MS = 5500;

export const OFFICIAL_CHECKS: OfficialCheck[] = [
  { id: "park-roads", title: "Park roads, trails and closures", why: "A closed road can erase a Cades Cove, Newfound Gap or Kuwohi plan before you leave the driveway.", sourceName: "National Park Service current conditions", sourceUrl: "https://www.nps.gov/grsm/planyourvisit/conditions.htm", automated: false },
  { id: "parking-tag", title: "Park parking tag and fees", why: "A tag does not reserve a space. Confirm the current rule before you count on a trailhead.", sourceName: "NPS fees page", sourceUrl: "https://www.nps.gov/grsm/planyourvisit/fees.htm", automated: false },
  { id: "tdot", title: "Major traffic on the state roads", why: "US-441, Veterans Blvd and the Parkway backups are a town problem, not a park problem.", sourceName: "TDOT SmartWay", sourceUrl: "https://smartway.tn.gov/", automated: false },
  { id: "gatlinburg-parking", title: "Gatlinburg parking", why: "If downtown is the plan, check city parking before circling the Parkway.", sourceName: "City of Gatlinburg parking", sourceUrl: "https://www.gatlinburgtn.gov/page/parking", automated: false },
  { id: "events-pf", title: "Pigeon Forge events that change traffic", why: "A parade, race or festival on the Parkway can wipe out an otherwise good downtown loop.", sourceName: "MyPigeonForge events", sourceUrl: "https://www.mypigeonforge.com/events/", automated: false },
  { id: "events-gatlinburg", title: "Gatlinburg events", why: "Confirm whether downtown is hosting something that fills lots early.", sourceName: "Gatlinburg events", sourceUrl: "https://www.gatlinburg.com/events/", automated: false },
  { id: "dollywood", title: "Dollywood operating calendar", why: "Ticketed parks set their own hours and weather calls. Recheck the day you hold tickets.", sourceName: "Dollywood calendar", sourceUrl: "https://www.dollywood.com/calendar/", automated: false },
  { id: "trolley-gburg", title: "Gatlinburg trolley", why: "Only useful if it is running the route you need.", sourceName: "Gatlinburg Trolley", sourceUrl: "https://www.gatlinburg.com/things-to-do/trolley/", automated: false },
  { id: "trolley-pf", title: "Pigeon Forge trolley", why: "Confirm current route information before using it as the connection between timed stops.", sourceName: "Pigeon Forge Mass Transit", sourceUrl: "https://www.mypigeonforge.com/planning/getting-around/mass-transit-trolley/", automated: false },
];

function nowIso() { return new Date().toISOString(); }

async function fetchJson(url: string): Promise<unknown> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const response = await fetch(url, { headers: { Accept: "application/geo+json,application/json", "User-Agent": NWS_UA }, signal: controller.signal, cache: "no-store" });
    if (!response.ok) throw new Error("HTTP " + String(response.status));
    return await response.json();
  } finally {
    clearTimeout(timer);
  }
}

function readPeriod(raw: unknown): WeatherPeriod | null {
  if (!raw || typeof raw !== "object") return null;
  const period = raw as Record<string, unknown>;
  const shortForecast = String(period.shortForecast || "").trim();
  if (!shortForecast) return null;
  return {
    name: String(period.name || "Current period"),
    temperature: typeof period.temperature === "number" ? period.temperature : null,
    temperatureUnit: String(period.temperatureUnit || "F"),
    wind: [period.windDirection, period.windSpeed].filter(Boolean).map(String).join(" "),
    shortForecast,
    detailedForecast: String(period.detailedForecast || shortForecast),
  };
}

async function fetchWeather(label: string, lat: number, lon: number): Promise<WeatherPlace> {
  const sourceUrl = "https://www.weather.gov/mrx/";
  try {
    const point = (await fetchJson(`https://api.weather.gov/points/${lat},${lon}`)) as { properties?: { forecast?: string } };
    const forecastUrl = point.properties?.forecast;
    if (!forecastUrl) throw new Error("missing forecast url");
    const forecast = (await fetchJson(forecastUrl)) as { properties?: { periods?: unknown[] } };
    const period = readPeriod(forecast.properties?.periods?.[0]);
    if (!period) throw new Error("missing period");
    return { label, status: "available", period, sourceName: "National Weather Service", sourceUrl, checkedAt: nowIso() };
  } catch {
    return { label, status: "unavailable", period: null, sourceName: "National Weather Service", sourceUrl, checkedAt: nowIso() };
  }
}

export function seasonalWarning(date = new Date()) {
  const month = date.getUTCMonth() + 1;
  if (month === 10 || month === 11) return { title: "Fall leaf-season warning", text: "October and early November pack Newfound Gap Road, Cades Cove and downtown lots. Leave earlier than the listing photos suggest and keep one indoor backup." };
  if (month === 12 || month === 1 || month === 2) return { title: "Winter mountain warning", text: "Town weather is not ridge weather. Ice, chain restrictions and sudden Kuwohi closures are common. Check NPS roads before a high-country drive." };
  if (month >= 6 && month <= 8) return { title: "Summer storm and crowd warning", text: "Afternoon storms and Parkway congestion are the usual day-breakers. Do the park or outdoor stop first. Keep an indoor anchor for after 2 p.m." };
  return { title: "Shoulder-season warning", text: "Hours, trolleys and some attractions change in spring and early fall. Recheck the specific venue and the NPS conditions page the morning you go." };
}

export async function getTodayConditions() {
  const [weatherTown, weatherHighCountry] = await Promise.all([
    fetchWeather("Gatlinburg / town elevation", 35.7142, -83.5102),
    fetchWeather("Newfound Gap / high country", 35.611, -83.425),
  ]);
  let alerts: AlertItem[] = [];
  let alertsStatus: ConditionStatus = "unavailable";
  try {
    const data = (await fetchJson("https://api.weather.gov/alerts/active?zone=TNZ074")) as { features?: Array<{ properties?: Record<string, unknown> }> };
    alerts = (data.features || []).map((feature) => {
      const props = feature.properties || {};
      return { event: String(props.event || "Advisory"), headline: String(props.headline || props.event || "Active NWS advisory"), sourceUrl: String(props.id || "https://www.weather.gov/mrx/") };
    }).slice(0, 5);
    alertsStatus = "available";
  } catch {
    alerts = [];
    alertsStatus = "unavailable";
  }
  const text = (weatherTown.period?.shortForecast || "").toLowerCase();
  const backup = weatherTown.status === "unavailable"
    ? { title: "Keep a same-town indoor backup", text: "Weather could not be refreshed here. Open NWS, then keep the backup on the same side of the county.", href: "/rainy-day" }
    : /(thunder|storm|heavy rain|flood)/.test(text)
      ? { title: "Treat outdoor plans as dead until the storm clears", text: "Do not drive to Kuwohi or Cades Cove hoping the ridge is clearer.", href: "/rainy-day" }
      : /(rain|shower)/.test(text)
        ? { title: "Use the rain window, do not invent a second town", text: "A light morning can still work downtown. Save the long park loop for a drier block.", href: "/rainy-day" }
        : { title: "Protect the park stop with an early departure", text: "If the forecast is usable, do the park or outdoor stop first.", href: "/parking-traffic" };
  return { checkedAt: nowIso(), weatherTown, weatherHighCountry, alerts, alertsStatus, alertsSourceUrl: "https://www.weather.gov/mrx/", officialChecks: OFFICIAL_CHECKS, seasonal: seasonalWarning(), backup };
}

export function formatCheckedAt(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit", timeZoneName: "short" }).format(new Date(iso));
  } catch {
    return iso;
  }
}
