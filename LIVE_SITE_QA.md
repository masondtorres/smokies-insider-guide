# Live Site QA

## Route inventory

- Public page routes in the application: 66
- Curated sitemap routes: 64
- Intentionally excluded: `/my-plan` and `/home-v2`
- Technical routes: `/sitemap.xml` and `/robots.txt`

`/my-plan` is a browser-local utility and uses `noindex, follow`. `/home-v2` is an alternate prototype and is not intended for search. All other current page routes are listed in `src/lib/site-routes.ts`.

## Release check

Before and after a production release:

1. Confirm every application route returns a successful response.
2. Crawl every internal link and investigate redirects or failures.
3. Confirm the sitemap uses `https://www.smokyinsider.com` and omits thin utility states.
4. Confirm robots links to the live sitemap and does not block pages that should be indexed.
5. Confirm `/my-plan` emits a noindex directive.
6. Check the homepage and site footer links to About, Contact, Business Listings, Advertise, Editorial Policy, Sponsored Content Policy, Affiliate Disclosure, Corrections, Disclaimer, Privacy, Terms, and Source & Verification.
7. Confirm business inquiry links use `masondtorres@duck.com`.
8. Search rendered public copy for placeholder, fake listing, cart, and basket language.
9. Confirm `My Plan`, `Save`, `Saved`, `Remove`, and `Add to My Plan` remain the visitor-facing vocabulary.

## June 12, 2026 baseline

The production-mode local build returned success for all 66 page routes. It exposed one obsolete `/privacy-policy` link in `/home-v2`; that link was corrected to `/privacy` before release. The post-deployment live check should repeat the full crawl and record any remaining failures in the release report.
