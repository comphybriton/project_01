# Project decisions

## T027 — Subscription app evaluation

**Reviewed:** 2026-11-09
**Status:** Shopify Subscriptions selected for the development store. The Balm PDP screenshots show all configured frequencies and prices, with six weeks selected by default. Cart/order evidence confirms one-time versus six-week behavior. Four- and eight-week order submission, customer portal actions, and Kit renewal fulfillment still need verification.

### Requirements used for the comparison

The subscription setup must support:

- Shopify selling plans for 4-, 6-, and 8-week delivery choices, with the configured discounts of 10%, 15%, and 20%, respectively, and six weeks initially selected.
- A real selling-plan selection submitted through the product form and carried through cart and checkout.
- Customer self-service for skip, pause, frequency changes, and cancellation through the store's customer-account setup.
- The agreed Starter Kit recurring fulfillment model, not just a recurring price label.

The current theme renders plan data from Shopify selling-plan allocations. A provider must expose compatible selling plans or its supported storefront integration must replace that picker; displaying a price alone is not sufficient.

### Capability matrix

Legend: **Yes** means documented publicly for the capability category; **Partial** means only some requested actions or conditions are documented; **Verify** means public evidence is insufficient to claim the exact project behavior; **No** means a documented incompatibility.

| Capability | Shopify Subscriptions |
|---|---|
| 4/6/8-week frequencies and frequency-specific discounts | **Configured and shown on the Balm PDP.** Screenshots show 4 weeks / 10% at $31.50, 6 weeks / 15% at $29.75 (selected by default), and 8 weeks / 20% at $28.00. Cart/order submission evidence is available for six weeks; verify four and eight weeks through checkout/order. |
| Real selling plan through cart/checkout/order | **Demonstrated for the 6-week plan.** The Starter Kit appears at $38.25 (15% off $45) and the Balm at $29.75 (15% off $35) in cart/checkout. Order #1002 records the Balm's “Deliver every 6 weeks, 15% off” plan. Separate one-time order #1001 has no subscription cadence. |
| Customer portal: skip, pause, change frequency, cancel | **Partial / still verify.** Shopify documents skip, pause/resume, and cancellation for customers. Its customer-facing documentation does not list customer-initiated frequency changes; test whether the current account experience offers this action. |
| Customer accounts compatibility | **Yes.** Shopify Subscriptions customer management uses Shopify customer accounts; verify the configured account experience in this store. |
| Starter Kit recurrence | **Selling plan demonstrated; fulfillment not yet verified.** The screenshots show a selling plan on the standalone Starter Kit product. Confirm that each renewal order contains and fulfills both the Balm and Companion. |
| Shopify Bundles compatibility | **No.** Shopify documents that Shopify Bundles is incompatible with Shopify Subscriptions. The current standalone Starter Kit product is not a Shopify Bundles component bundle. |
| App pricing | Shopify Subscriptions is Shopify's free subscription app; applicable payment processing and store fees still depend on the store setup. |

### Alternatives screened

| App | Publicly advertised fit | Decision |
|---|---|---|
| Loop Subscriptions | Shopify App Store listing advertises bundles, a customer portal, skips/swaps, and Customer accounts compatibility. Exact portal actions, kit renewal behavior, and fees would still need an installed-store test. | Not selected: the store already has Shopify Subscriptions configured and the screenshots show its selling plan reaching checkout. Reconsider only if native capability testing fails. |
| Appstle Subscriptions | App Store listing advertises subscriptions, subscription boxes/build-a-box, and a free plan. Exact required capabilities and fees need verification in-app. | Not selected: no current need to introduce a third-party app. |
| Recharge | Vendor pricing page advertises a portal and customizable bundles on a paid tier. Exact plan and kit behavior and total fees need a trial. | Not selected: no current need to introduce a third-party app. |

### Selection

**Shopify Subscriptions is the selected provider for this development store**, following the merchant's preference and the supplied Admin, cart, and checkout screenshots. The screenshots provide concrete evidence that a 6-week plan with a 15% discount reaches cart and checkout for both the standalone Starter Kit and Balm. At those prices, the evidenced recurring amounts are $38.25 for the $45 Kit and $29.75 for the $35 Balm.

Shopify Subscriptions is preferred over a third-party app for this scope because its native selling plans are configured and screenshots show all three frequency/discount combinations on the Balm PDP, plus distinct one-time and six-week orders. Do not interpret that as proof that all acceptance criteria have passed: four- and eight-week cart/order submission, customer-initiated frequency changes, and actual renewal fulfillment still require testing.

### Scope and proof-of-concept gates

The approved Starter Kit PDP requirement is that the **full Starter Kit, including both Balm and Companion, repeats**. This supersedes the earlier one-time-only note in [`catalog.md`](./catalog.md), which has now been updated. The screenshots demonstrate a selling plan on the standalone Starter Kit product, but do not prove renewal order contents or component inventory behavior. Test an actual renewal before claiming fulfillment is verified. Do not convert the product to a Shopify Bundles app bundle; Shopify documents that app as incompatible with Shopify Subscriptions.

Run these checks in the development store before accepting the provider:

1. Confirm the Admin plan group has 4 weeks at 10%, 6 weeks at 15%, and 8 weeks at 20% for each intended product. Balm PDP evidence shows the three prices; verify cart/checkout/order submission for four and eight weeks.
2. Select one-time and subscription options separately. Verify the correct product variant and selected selling-plan ID in cart and checkout; one-time must submit no selling plan. Orders #1001 and #1002 demonstrate a one-time Balm order without cadence and a Balm order with the six-week plan.
3. Sign in using the store's configured customer-account mode. Exercise skip, pause/resume, frequency change, and cancellation; note whether frequency changes are supported for customers. Record screenshots or equivalent evidence in `test-evidence.md`.
4. Confirm whether the intended Balm subscription ships only Balm on renewals and whether the standalone Starter Kit subscription repeats both Balm and Companion. Verify order lines, quantities, component inventory, and fulfillment on a renewal test.
5. Confirm supported payment gateway, customer notifications, and relevant store/payment processing fees before production use.

### Evidence sources

Reviewed on 2026-11-09:

- Merchant-provided Shopify Admin screenshot: selling plans are configured at 4 weeks / 10% off, 6 weeks / 15% off, and 8 weeks / 20% off.
- Merchant-provided cart screenshot: one-time Starter Kit $45.00; 6-week subscribed Starter Kit $38.25 with “15% off”; one-time Balm $35.00; and 6-week subscribed Balm $29.75 with “15% off”.
- Merchant-provided checkout screenshot: includes the 6-week Starter Kit subscription and displays Shopify's recurring-charge notice.
- Merchant-provided order screenshots: order #1001 records a $35 one-time Balm without subscription cadence; order #1002 records a $29.75 Balm with “Deliver every 6 weeks, 15% off.”
- Merchant-provided Balm PDP screenshots: six weeks / 15% off is the selected default at $29.75; four weeks shows 10% off at $31.50; eight weeks shows 20% off at $28.00.
- [Shopify Subscriptions overview](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions) — plan types, discounts, merchant and customer subscription actions.
- [Shopify Subscriptions customer experience](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/customer-experience) — customer-account actions; documents skip, pause/resume, and cancellation.
- [Shopify Subscriptions eligibility considerations](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/considerations) — explicitly states that bundles are not compatible with Shopify Subscriptions.
- [Loop Subscriptions Shopify App Store listing](https://apps.shopify.com/loop-subscriptions) — advertised bundles, portal, skips/swaps, Customer accounts compatibility, and pricing summary.
- [Loop pricing](https://www.loopwork.co/pricing) — published plan structure and free-tier limits; recheck current terms before installation or launch.
- [Appstle Subscriptions Shopify App Store listing](https://apps.shopify.com/subscriptions-by-appstle) — subscription-box/build-a-box positioning and free-plan availability.
- [Appstle pricing](https://appstle.com/products/appstle-subscriptions-pricing/) — vendor pricing reference; confirm current tier limits in the app.
- [Recharge pricing](https://getrecharge.com/pricing/) — vendor's published feature and fee reference, including customizable bundles on a paid tier.

Public descriptions are screening evidence only. They are not a substitute for testing the installed app, theme, checkout, customer-account mode, and renewal orders in this development store.
