# Business Intake Workflow

Business intake is manual and email-based. The public contact is `masondtorres@duck.com`. Do not request payment information by email.

## Intake paths

- Request listing: `/business-listings`
- Claim a business: `/business-listings/claim`
- Advertising and featured placement inquiry: `/advertise`
- General business contact: `/contact`

## Workflow states

1. `received`: Save the inquiry date, sender, requested path, and business name in the private operations system.
2. `identity check`: Confirm the sender can represent the business. Do not publish a claim merely because the email domain looks plausible.
3. `verification`: Check submitted facts against first-party sources and record support in `SOURCE_VERIFICATION_LOG.md` or the private listing record.
4. `editorial review`: Check usefulness, clarity, disclosures, and compliance with site rules.
5. `approved`, `needs changes`, or `declined`: Send a plain-language outcome without promising ranking or coverage.
6. `published`: Publish only verified fields and record the date.
7. `refresh due`: Recheck after a material change, correction, owner request, or seasonal review.

## Supported listing fields

`name`, `category`, `location`, `address`, `phone`, `website`, `hours`, `description`, `photos`, `map`, `coupons`, `featured offer`, `tags`, `family-friendly status`, `local notes`, `price range`, `booking link`, `social links`, `sponsorship or featured status`, and `claim option`.

Unknown fields remain unpublished or explicitly unknown. Do not fill gaps with assumptions.

## Editorial and paid separation

- A verified listing is not an endorsement.
- Advertising, sponsorship, affiliate relationships, and featured placement must be labeled.
- Pricing is available by request; do not publish unapproved packages or rates.
- Paid placement does not buy editorial ranking or favorable claims.
- Editors may reject unverifiable, misleading, unsafe, or low-value material regardless of payment interest.

## Privacy and records

- Keep public business facts separate from private owner identity evidence.
- Do not put private inquiry contents, personal phone numbers, billing details, credentials, or identity documents in Git.
- Analytics may track an inquiry-link click, but must not include email addresses, names, message text, or other personal data.
- Contact submissions cannot be measured as completed until a consent-aware backend or email-provider confirmation exists; mailto clicks are only intent signals.
