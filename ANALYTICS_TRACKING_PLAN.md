# Analytics Tracking Plan

## Current status

As of June 12, 2026, `@vercel/analytics` is not installed and no analytics component is mounted in the application. The repository contains no Google Analytics Measurement ID. Vercel dashboard enablement is not represented in code and must be confirmed by Mason in the project dashboard. Do not enable a paid add-on.

## Measurement principles

- Collect only what supports product, editorial, and business decisions.
- Never send names, email addresses, message bodies, saved-plan content, or other personal data as event properties.
- Treat mailto clicks as inquiry intent, not confirmed submissions.
- Keep paid and editorial performance reporting distinguishable.
- Document consent and privacy implications before adding any new provider.

## Core measures

| Need | Measure or event | Suggested properties | Current readiness |
| --- | --- | --- | --- |
| Sessions | Provider session metric | none | Requires analytics provider enablement |
| Page views | Provider page-view metric | path, referrer | Requires analytics provider enablement |
| Top landing pages | Landing-page report | first path, source group | Requires analytics provider enablement |
| Saves to My Plan | `plan_save` | `item_id`, `category`, `source_path` | Event hook can be added later |
| My Plan opens | `my_plan_open` | `saved_item_count`, `source_path` | Event hook can be added later |
| Warning views | `plan_warning_view` | `warning_type`, `warning_count` | Event hook can be added later |
| Deal clicks | `deal_click` | `deal_id`, `source_path`, `paid_status` | Use only for verified published deals |
| Email captures | `email_capture_complete` | `form_location` | No capture backend exists; do not claim this metric |
| Sponsor inquiries | `sponsor_inquiry_click` | `source_path`, `inquiry_type` | Can measure mailto click only |
| Contact submissions | `contact_inquiry_click` | `source_path`, `inquiry_type` | Can measure mailto click only; completion unknown |

## Recommended implementation order

1. Mason confirms whether Vercel Web Analytics is enabled for the existing project and whether the current plan includes it at no added cost.
2. In a separate approved code task, install the official package and mount the Analytics component using Vercel's current Next.js instructions.
3. Confirm page views in a production deployment before adding custom events.
4. Add a small typed event helper and instrument the events above one workflow at a time.
5. Update `/privacy` and this plan before collecting anything beyond aggregate usage.

Do not add Google Analytics until Mason supplies a real Measurement ID and explicitly approves the privacy and deployment changes.
