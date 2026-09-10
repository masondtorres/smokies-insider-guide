# Analytics Tracking Plan

## Current status

As of September 8, 2026, `@vercel/analytics` remains installed and the official `Analytics` component is mounted in the root layout for aggregate page-view tracking on Vercel Web Analytics Hobby.

Mason supplied Google Analytics Measurement ID `G-MPRKPD95C1` and explicitly approved deployment to Smokies Insider. The Google tag is mounted sitewide in the root layout so Google Analytics can collect standard page-view, traffic-source and engagement data. No custom Google Analytics conversion events are enabled as part of this setup.

## Measurement principles

- Collect only what supports product, editorial, and business decisions.
- Never send names, email addresses, message bodies, saved-plan content, or other personal data as event properties.
- Treat mailto clicks as inquiry intent, not confirmed submissions.
- Keep paid and editorial performance reporting distinguishable.
- Google Analytics may use cookies or similar identifiers; the live privacy policy discloses this provider and its measurement purpose.
- Do not add advertising personalization or account-based tracking without a separate review.

## Core measures

| Need | Measure or event | Suggested properties | Current readiness |
| --- | --- | --- | --- |
| Sessions | Provider session metric | none | Vercel Web Analytics and Google Analytics are enabled; confirm production reporting after deployment |
| Page views | Provider page-view metric | path, referrer | Vercel Web Analytics and Google Analytics are enabled; Google tag uses `G-MPRKPD95C1` |
| Top landing pages | Landing-page report | first path, source group | Google Analytics can report acquisition and landing-page performance after traffic is received |
| Saves to My Plan | `plan_save` | `item_id`, `category`, `source_path` | Not enabled in Google Analytics |
| My Plan opens | `my_plan_open` | `saved_item_count`, `source_path` | Not enabled in Google Analytics |
| Warning views | `plan_warning_view` | `warning_type`, `warning_count` | Not enabled in Google Analytics |
| Deal clicks | `deal_click` | `deal_id`, `source_path`, `paid_status` | Use only for verified published deals; not enabled in Google Analytics |
| Email captures | `email_capture_complete` | `form_location` | No analytics event is enabled for this action |
| Sponsor inquiries | `sponsor_inquiry_click` | `source_path`, `inquiry_type` | Not enabled in Google Analytics |
| Contact submissions | `contact_inquiry_click` | `source_path`, `inquiry_type` | Not enabled in Google Analytics |

## Implementation order

1. Confirm the production deployment succeeds and `G-MPRKPD95C1` appears on `smokyinsider.com`.
2. Confirm page views appear in Google Analytics Realtime after visiting the live site.
3. Keep Vercel Web Analytics enabled as a separate aggregate comparison source.
4. Do not add custom Google Analytics events unless Mason explicitly approves the event and properties.
5. Never send names, emails, message bodies or saved-plan content as analytics properties.
6. Re-review privacy and consent requirements before enabling advertising personalization or materially broader tracking.
