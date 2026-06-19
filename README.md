# Smoky Insider

Independent, decision-first trip planning for the Smokies. The live site is [www.smokyinsider.com](https://www.smokyinsider.com), deployed from `main` in `masondtorres/smokies-insider-guide` through the Vercel project `smokies-insider-guide`.

This site is not affiliated with the National Park Service, Great Smoky Mountains National Park, or any official tourism board.

## Local development

```powershell
npm install
npm run dev
npm run lint
npm run build
```

Use `C:\Users\mason\Documents\Code\smokies-insider-guide` as the local repository. Do not operate from a OneDrive copy.

## Production rules

- Keep changes narrow and preserve the Smokies field-guide style.
- Use official sources first for park facts and visibly flag volatile details.
- Do not invent business details, park policies, prices, hours, reviews, coupons, or local authority.
- Use My Plan and Save language, never cart language.
- Label ads, affiliates, sponsored content, and paid placements. Payment does not buy editorial ranking.
- Do not change DNS, Vercel settings, secrets, environment variables, auth, databases, CMS, analytics, ads, or billing without explicit approval.

## Indexing

- `src/app/sitemap.ts` publishes curated public routes from `src/lib/site-routes.ts`.
- `src/app/robots.ts` publishes the crawler policy and sitemap location.
- `/my-plan` is intentionally omitted from the sitemap and marked `noindex, follow` because it is a browser-local utility state.
- `/home-v2` is an alternate prototype and is not indexable.
- Canonical public URLs use `https://www.smokyinsider.com`.

## Operations

- [Project identity](PROJECT_IDENTITY.md)
- [Account ownership map](ACCOUNT_OWNERSHIP.redacted.md)
- [Operating rhythm](OPERATING_RHYTHM.md)
- [Source verification log](SOURCE_VERIFICATION_LOG.md)
- [Business intake workflow](BUSINESS_INTAKE_WORKFLOW.md)
- [Analytics tracking plan](ANALYTICS_TRACKING_PLAN.md)
- [Search Console setup](SEARCH_CONSOLE_SETUP.md)
- [Live site QA](LIVE_SITE_QA.md)

The public/business contact is `masondtorres@duck.com`. Never commit credentials or private intake records.

## Manual production QA

In GitHub, open **Actions**, select **Production QA Verification**, choose **Run workflow**, and run it from `main`.

A PASS means production `robots.txt` and `sitemap.xml` returned HTTP 200, the sitemap contained exactly 64 URLs, every sitemap URL returned a final HTTP 200, and every discovered internal production link returned a final HTTP 200. Each run uploads raw headers, response evidence, crawl results, redirects, and failures as an artifact.
