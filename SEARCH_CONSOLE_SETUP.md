# Google Search Console Setup

Search Console access requires Mason's Google authentication. Ownership for the `smokyinsider.com` Domain property has been verified using a DNS TXT record.

## Current status

| Date | Item | Status | Follow-up |
| --- | --- | --- | --- |
| 2026-06-13 | Domain property ownership | Verified by DNS TXT record | Keep the verification record in DNS and confirm ownership remains valid during quarterly account reviews. |
| 2026-06-13 | `https://www.smokyinsider.com/sitemap.xml` | Submitted in Search Console | Record Google's sitemap processing status, discovered URL count, and last read date when available. |

Update this table whenever ownership, sitemap processing, or indexing status changes. Do not record the private verification token in the repository.

## Setup and recovery reference

1. Sign in to [Google Search Console](https://search.google.com/search-console/) with the Google account that should own the site.
2. Choose **Add property**, select **Domain**, and enter `smokyinsider.com` without `https://` or `www`.
3. Copy the exact TXT verification record Google displays. Do not reuse or guess a token.
4. In a separately approved DNS change, add that TXT record to the `smokyinsider.com` DNS zone in Namecheap. Preserve the existing Vercel A and CNAME records.
5. Return to Search Console and select **Verify**. DNS verification can take time to propagate.
6. Open the **Sitemaps** report and submit `https://www.smokyinsider.com/sitemap.xml`.
7. After Google processes it, review page indexing, security issues, manual actions, and search performance monthly.

Use Google's current [ownership verification](https://support.google.com/webmasters/answer/9008080) and [sitemap report](https://support.google.com/webmasters/answer/7451001) instructions if the interface differs.
