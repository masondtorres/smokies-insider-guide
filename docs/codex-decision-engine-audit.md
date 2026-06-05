# Codex Decision Engine Audit

Timestamp: 2026-06-05T01:16:35-04:00

Active branch: `decision-engine-rebuild`

## Research Files

All required research files exist:

- `docs/research/smokies-master-research.md`
- `docs/research/smokies-native-design-voice.md`
- `docs/research/smokies-strategic-build-report.md`

## Current Route Inventory

Existing routes preserved:

- `/`
- `/about`
- `/advertise`
- `/cades-cove-first-time-guide`
- `/deals`
- `/dollywood-day-plan`
- `/eat-stay-shop`
- `/events`
- `/explore`
- `/free-and-cheap-smokies`
- `/gatlinburg`
- `/gatlinburg-vs-pigeon-forge`
- `/gatlinburg-without-walking-too-much`
- `/pigeon-forge`
- `/pigeon-forge-with-kids`
- `/rainy-day-smokies-with-kids`
- `/sevierville`
- `/smokies-parking-trolley-guide`
- `/smokies-with-toddlers`
- `/start-planning`
- `/the-track-pigeon-forge-closing`
- `/things-to-do`
- `/townsend`
- `/visitor-resources`
- `/where-to-stay-in-the-smokies-by-trip-type`

Routes created during this rebuild:

- `/accessible-smokies`
- `/affiliate-disclosure`
- `/best-time-to-visit`
- `/cades-cove`
- `/contact`
- `/corrections`
- `/disclaimer`
- `/editorial-policy`
- `/first-time-smokies`
- `/hiking`
- `/how-many-days`
- `/parking-tag`
- `/plan-your-trip`
- `/rainy-day`
- `/restaurants`
- `/restaurants/gatlinburg`
- `/restaurants/pigeon-forge`
- `/scenic-drives`
- `/sponsored-content-policy`
- `/things-to-do/gatlinburg`
- `/things-to-do/pigeon-forge`
- `/what-to-skip`
- `/where-to-stay`

## Existing Components Found

No `src/components` folder existed before this rebuild. Route pages had repeated local header, card and guide patterns.

## Components Created

- `LastUpdated`
- `SourceBox`
- `DirectAnswer`
- `DecisionCard`
- `BestForSkipIf`
- `LocalNote`
- `ItineraryTimeline`
- `PlannerQuestion`
- `PlannerResult`
- `InternalLinkGrid`
- `SponsoredLabel`
- `BusinessCard`
- `DealCard`
- `JsonLd`
- `SiteHeader`
- `SiteFooter`
- `PolicyPage`
- `TripPlanner`

## Existing Styles and Design Tokens Found

The previous global stylesheet already used Smokies-adjacent variables such as `--forest`, `--ridge`, `--cabin`, `--cream`, `--stone`, `--gold` and `--copper`.

Added exact prompt palette variables:

- `--forest-pine: #224534`
- `--ridge-blue: #566775`
- `--smoky-gray: #7D8587`
- `--cabin-brown: #6A4B38`
- `--map-cream: #F3EBD9`
- `--stone-surface: #E7E0D4`
- `--sunrise-gold: #C89A3C`
- `--laurel-bloom: #A65E78`
- `--barn-copper: #8B4B3F`
- `--charcoal-text: #22262A`

Body background was moved to Map Cream with subtle map-line texture instead of an image-dominant full-page background.

## Thin Pages Found

The earlier `/deals`, `/advertise`, `/things-to-do`, `/start-planning`, `/gatlinburg-vs-pigeon-forge` and `/where-to-stay-in-the-smokies-by-trip-type` pages were useful but not yet structured with the new direct-answer, source, last-updated, policy and internal-link system. These were improved or bridged.

## Missing High-Intent SEO/GEO Routes Found

Before this rebuild, the repo was missing the exact high-intent routes:

- `/where-to-stay`
- `/plan-your-trip`
- `/how-many-days`
- `/best-time-to-visit`
- `/parking-tag`
- `/first-time-smokies`
- `/rainy-day`
- `/cades-cove`
- `/accessible-smokies`
- `/scenic-drives`
- `/hiking`
- `/restaurants`
- `/restaurants/gatlinburg`
- `/restaurants/pigeon-forge`
- `/things-to-do/gatlinburg`
- `/things-to-do/pigeon-forge`
- `/what-to-skip`

## Pages That Looked Placeholder-Only

No app route was deleted. The old `/start-planning` and `/where-to-stay-in-the-smokies-by-trip-type` routes now serve as useful bridges to the stronger planner and town chooser.

## Pages That Should Not Be Touched

Existing article-style routes with specific legacy purpose were preserved:

- `/the-track-pigeon-forge-closing`
- `/cades-cove-first-time-guide`
- `/dollywood-day-plan`
- `/pigeon-forge-with-kids`
- `/rainy-day-smokies-with-kids`
- `/smokies-parking-trolley-guide`
- `/gatlinburg-without-walking-too-much`
- `/smokies-with-toddlers`

## Build Commands Available

From `package.json`:

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`

## Test and Lint Commands Available

- `npm run lint`
- `npm run build`

No dedicated unit or e2e test script is currently defined.

## What Changed

- Added shared decision-guide components.
- Added `src/lib/smokiesData.ts` for town data, planner options, planner result templates, guide links, deal placeholders and guide page content.
- Rebuilt the homepage as the front door for the free decision engine.
- Added a static manual planner with anchor-linked starter plans.
- Created high-priority SEO/GEO pages with metadata, direct answers, internal links, last-updated notes, source boxes and JSON-LD.
- Added policy/trust pages for editorial policy, affiliate disclosure, sponsored content, corrections, disclaimer and contact.
- Kept future sponsorship clearly labeled and secondary.

## Metadata and Schema Added

Each new or substantially edited page exports unique metadata. Shared guide pages include simple JSON-LD using `Article` or `WebPage` style data where safe.

## Validation Run

- `npm.cmd run lint`: passed.
- `npm.cmd run build`: passed.
- Browser smoke check: homepage, planner, where-to-stay, rainy-day, restaurants and what-to-skip loaded with correct H1s and no console error logs.
- Planner anchor check: `/plan-your-trip#family-pigeon-forge` works and the target result is visible.

## Known Limitations

- The planner was converted from attempted client state to a static anchor-based manual decision page because stateful button behavior could not be verified reliably in the in-app browser. This is the safer non-destructive fallback allowed by the prompt.
- Copy uses broad planning guidance and cautious verification language where exact current facts could be volatile.
- No new images or image-rights log were added.
- No database, authentication, payments, forms backend, CRM, analytics or email capture were added.
- Existing older routes outside the requested priority set may still need a future consistency pass.

## Next Recommended Work

Run a second focused Codex task to deepen the existing town pages and old guide routes with the new shared components, then add a rights-safe image/source log and lightweight business update forms.
