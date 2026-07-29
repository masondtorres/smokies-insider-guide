# Operating Rhythm

## Weekly

- Smoke-test the homepage, Start Planning, My Plan, category hubs, utility pages, trust pages, and business intake paths.
- Check the live sitemap and robots file, then spot-check internal links and canonical URLs.
- Review official National Park Service current conditions and alerts before touching park access, closures, roads, safety, or parking guidance.
- Process listing requests, claims, corrections, sponsor inquiries, and contact email using the documented business workflow.
- Record newly verified or changed facts in `SOURCE_VERIFICATION_LOG.md`.
- Review failed production builds and runtime errors. Do not change Vercel settings during routine content work.
- If analytics is enabled, review sessions, top landing pages, saves, My Plan opens, warnings, and inquiry clicks for anomalies rather than vanity totals.

## Monthly

- Run a complete route and internal-link check against the production site.
- Review Search Console coverage, sitemap processing, manual actions, security issues, and top search landing pages.
- Review high-traffic pages for stale claims, broken official-source links, and unclear verification dates.
- Audit all published listings, offers, sponsor labels, affiliate disclosures, and featured placements for support and expiration risk.
- Review inquiry outcomes without storing private customer details in analytics.
- Update dependencies only in a separate, tested change. Check Next.js security notices before upgrades.

## Seasonal

Run a focused review before spring, summer, fall color season, and winter:

- Recheck current NPS conditions, seasonal roads, weather guidance, parking requirements, Cades Cove access, and accessibility information.
- Recheck any seasonal event, attraction, lodging, food, transit, or coupon claim from its first-party source.
- Refresh timing and crowd language without presenting predictions as guarantees.
- Remove or clearly mark content that cannot be verified for the new season.
- Review rainy-day, free-and-cheap, parking, family, cabin, and Cades Cove planning paths for current usefulness.

## Quarterly

- Audit account ownership, recovery coverage, domain renewal, repository access, and Vercel team access.
- Review editorial, sponsored-content, affiliate, corrections, privacy, disclaimer, and source policies.
- Confirm paid placement has not influenced editorial ranking.
- Compare the code route inventory with `src/lib/site-routes.ts`; keep thin utility states out of the sitemap.
- Review whether analytics collection is proportionate, privacy-safe, and still necessary.

## Incident response

For an outage, incorrect safety statement, exposed secret, or misleading paid placement:

1. Preserve evidence and identify the affected route or service.
2. Remove or correct harmful public content first when a code change is authorized.
3. Use official sources for safety and park corrections.
4. Record the correction and verification source.
5. Escalate credential, DNS, billing, auth, or platform changes to the account owner; do not improvise them in routine repo work.
