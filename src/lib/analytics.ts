/**
 * Conversion event helpers.
 * Events fire only when NEXT_PUBLIC_GA_MEASUREMENT_ID is set and gtag is present.
 * Do not invent measurement IDs.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type AnalyticsEvent =
  | "newsletter_signup"
  | "lead_magnet_request"
  | "planner_started"
  | "planner_completed"
  | "plan_item_added"
  | "plan_printed"
  | "plan_exported"
  | "contact_delivered"
  | "official_source_click"
  | "affiliate_click";

export function trackEvent(event: AnalyticsEvent, params?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;
  if (!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", event, params ?? {});
}
