# Analytics Tracking Plan

## Current status

As of June 13, 2026, `@vercel/analytics` is installed and the official `Analytics` component is mounted in the root layout for aggregate page-view tracking on Vercel Web Analytics Hobby. No custom events are implemented, and the repository contains no Google Analytics Measurement ID. Do not enable a paid analytics add-on.

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

1. Confirm page views appear in the Vercel Web Analytics dashboard after production deployment.
2. Keep collection limited to the Hobby page-view analytics currently approved.
3. Do not add custom events unless the plan and approval explicitly change.
4. Update `/privacy` and this plan before collecting anything beyond aggregate usage.

Do not add Google Analytics until Mason supplies a real Measurement ID and explicitly approves the privacy and deployment changes.
