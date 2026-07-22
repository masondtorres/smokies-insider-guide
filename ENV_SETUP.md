# Environment Variables — Owner Setup Required

None of these values are stored in the repository. Set them in the Vercel project settings for the `smokies-insider-guide` project.

## Required for contact form delivery

| Variable | Where to get it | Notes |
|---|---|---|
| `CONTACT_EMAIL` | Your preferred business inbox | Used by `/api/contact`. Until set, the form returns a clear "not yet configured" state and does not pretend success. |

Optional public mirror (only if you intentionally want the address visible in client code):

| Variable | Notes |
|---|---|
| `NEXT_PUBLIC_CONTACT_EMAIL` | Prefer leaving this empty. Server-side `CONTACT_EMAIL` is enough. |

## Recommended for measurement

| Variable | Where to get it | Notes |
|---|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 property | Do not invent. Leave unset until the owner creates the property and approves privacy updates. |
| `GOOGLE_SITE_VERIFICATION` | Google Search Console | Meta tag content value. |
| `BING_SITE_VERIFICATION` | Bing Webmaster Tools | Meta tag content value. |

## Future email / lead-magnet provider

| Variable | Purpose |
|---|---|
| `EMAIL_PROVIDER_API_KEY` | Resend, Postmark, ConvertKit, or equivalent |
| `LEAD_MAGNET_LIST_ID` | List or form ID for "Smokies Parking and First-Day Cheat Sheet" |

Until a real provider is connected, lead-magnet and newsletter forms must show an honest failure or "not configured" state. Do not fake success.

## Current behavior

- Contact form posts to `/api/contact`.
- If `CONTACT_EMAIL` is missing → HTTP 503 + `NOT_CONFIGURED`.
- Payload is logged to Vercel function logs for early setup only.
- Owner must wire a real delivery provider before treating submissions as production mail.

## Privacy note

Update `/privacy` before enabling Google Analytics, newsletter storage, or any new data collection.
