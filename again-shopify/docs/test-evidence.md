# Subscription test evidence

Development-store subscription evidence supplied by the merchant on 2026-11-09. The screenshots were provided in chat and are not checked into this repository.

## T028 — Shopify Subscriptions selling plans

**Status: Partially verified.** Shopify Subscriptions is configured on the development store. The Admin screenshot shows these plan settings:

| Delivery frequency | Configured discount | Admin setup evidence |
|---|---:|---|
| Every 4 weeks | 10% off | Visible in the Shopify product's Purchase options |
| Every 6 weeks | 15% off | Visible in the Shopify product's Purchase options |
| Every 8 weeks | 20% off | Visible in the Shopify product's Purchase options |

The implementation plan currently says 15% off at all three frequencies. That does not match the rates shown in Admin. Treat this as a requirements discrepancy; do not change the configured rates or mark the task fully complete until the intended discounts are confirmed and the storefront behavior is tested for all frequencies.

### Cart and checkout evidence

| Check | Observation | Result |
|---|---|---|
| Starter Kit subscribed price | $45.00 one-time price; $38.25 with the selected 6-week, 15%-off plan | Pass |
| Balm subscribed price | $35.00 one-time price; $29.75 with the selected 6-week, 15%-off plan | Pass |
| Cart line metadata | Both subscribed lines display “Deliver every 6 weeks, 15% off” | Pass |
| One-time selection remains distinct | The cart shows separate one-time and subscribed product lines | Pass |
| Checkout subscription disclosure | Checkout displays “This order has a recurring charge for multiple items” | Pass |
| 4-week storefront selection and price | Not shown in the supplied cart or checkout evidence | Not verified |
| 8-week storefront selection and price | Not shown in the supplied cart or checkout evidence | Not verified |
| Selected-plan submission | The recurring lines reaching cart and checkout are consistent with a selling plan being applied; plan ID/payload was not captured separately | Partially verified |
| Six-week initial default on the product page | Not shown by these screenshots | Not verified |

### Reproduction and follow-up

1. On the Starter Kit and Balm product pages, verify that 4-, 6-, and 8-week options appear with the intended plan-specific prices.
2. Confirm which frequency is selected initially (expected: six weeks).
3. Add each frequency to cart separately and confirm the cart line displays the correct cadence and discount.
4. Confirm checkout shows the recurring-charge disclosure and the expected amount for each frequency.
5. In a test customer account, check skip, pause/resume, frequency change, and cancellation. Record each result separately; storefront checkout evidence does not prove portal behavior.
6. Place a suitable test order and inspect a renewal before claiming the Starter Kit's component fulfillment or inventory behavior is verified.

## Evidence references

- Merchant-provided Shopify Admin screenshot: three purchase options—4 weeks / 10% off, 6 weeks / 15% off, 8 weeks / 20% off.
- Merchant-provided cart screenshot: one-time Starter Kit ($45.00), subscribed Starter Kit ($38.25), Companion ($15.00), one-time Balm ($35.00), and subscribed Balm ($29.75); both subscription lines show six weeks and 15% off.
- Merchant-provided checkout screenshot: subscribed Starter Kit ($38.25), Companion ($15.00), one-time Balm ($35.00), and subscribed Balm ($29.75); checkout shows the recurring-charge disclosure.
- Related provider decision and official documentation: [`decisions.md`](./decisions.md).
