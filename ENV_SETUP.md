# Environment Variables — Owner Setup Required

None of these values are stored in the repository. Set them in the Vercel project settings for `smokies-insider-guide`.

## Required for contact form delivery (all three)

| Variable | Where to get it | Notes |
|---|---|---|
| `RESEND_API_KEY` | [resend.com](https://resend.com) API keys | Server-only. Never prefix with `NEXT_PUBLIC_`. |
| `CONTACT_EMAIL` | Your business inbox | Server-only receiving address. Never exposed in browser code. |
| `EMAIL_FROM` | Verified sender in Resend | Example format: `Smoky Insider <onboarding@resend.dev>` until a custom domain is verified. |

If any of the three is missing, `/api/contact` returns HTTP 503 with `code: NOT_CONFIGURED`. The form shows “not yet configured” and does **not** claim success.

Success is returned only after Resend confirms delivery with a message id.

## Do not use

| Variable | Reason |
|---|---|
| `NEXT_PUBLIC_CONTACT_EMAIL` | Would expose the receiving address in the browser. Removed. |

## Recommended for measurement

| Variable | Where to get it | Notes |
|---|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 | Leave unset until privacy policy is updated. |
| `GOOGLE_SITE_VERIFICATION` | Search Console | Meta tag content value. |
| `BING_SITE_VERIFICATION` | Bing Webmaster Tools | Meta tag content value. |

## Future lead-magnet / newsletter

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Same key can send transactional mail |
| `LEAD_MAGNET_FROM` | Verified from address for cheat-sheet delivery |
| `LEAD_MAGNET_AUDIENCE_ID` | Resend audience or equivalent list id |

Until those exist, lead-magnet forms must return a clear not-configured state.

## Privacy

Update `/privacy` before enabling Google Analytics, newsletter storage, or any new personal-data collection.
