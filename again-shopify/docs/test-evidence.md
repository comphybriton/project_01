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
| Balm 4-week storefront selection and price | PDP screenshot selects 4 weeks and displays 10% off; $31.50 from $35.00 | Pass: PDP selection and price displayed |
| Balm 8-week storefront selection and price | PDP screenshot selects 8 weeks and displays 20% off; $28.00 from $35.00 | Pass: PDP selection and price displayed |
| 4-/8-week cart and checkout orders | No cart, checkout, or completed order screenshots for those frequencies supplied | Not verified |
| Selected-plan submission | The recurring lines reaching cart and checkout are consistent with a selling plan being applied; plan ID/payload was not captured separately | Partially verified |
| Six-week initial default on the Balm PDP | PDP screenshot shows 6 Wks selected on initial view; $29.75 with 15% off | Pass |

## T029 — One-time versus subscription order submission

**Status: Partially verified.** Merchant-provided PDP screenshots show the purchase controls, six-week default, and frequency-specific Balm prices. Order screenshots confirm that one-time and six-week purchases submit differently. The actual four- and eight-week cart/order submissions remain to be tested.

| Test order | Product and amount | Order evidence | Result |
|---|---|---|---|
| #1001 — one-time | The Deodorant Balm, $35.00; total $43.00 including $8.00 shipping | The order line has no delivery-frequency or subscription-discount text. The order total has no recurring-charge indicator. | Pass: one-time purchase is distinct from subscription. |
| #1002 — selling plan | The Deodorant Balm, $29.75; total $37.75 including $8.00 shipping | The order line says “Deliver every 6 weeks, 15% off.” | Pass: Shopify recorded the six-week selling plan and applied its 15% discount. |

These order records confirm the result through purchase, not merely the theme's displayed price. The order evidence covers the six-week plan only; it does not verify four- or eight-week orders or customer portal actions.

The additional Balm PDP screenshots show:

| Selected frequency | Displayed discount | Displayed subscription price | PDP selection result |
|---|---:|---:|---|
| 4 weeks | 10% off | $31.50 | Pass |
| 6 weeks | 15% off | $29.75 | Pass: selected by default |
| 8 weeks | 20% off | $28.00 | Pass |

### Reproduction and follow-up

1. The Balm PDP has visual evidence for all configured frequencies and prices, with six weeks selected by default. Verify the same behavior on the Starter Kit PDP if it uses the same plan group.
2. Add the Balm at four and eight weeks to cart separately, then verify cadence, discount, and amount in checkout/order evidence.
3. In a test customer account, check skip, pause/resume, frequency change, and cancellation. Record each result separately; storefront checkout evidence does not prove portal behavior.
4. Place a suitable test order and inspect a renewal before claiming the Starter Kit's component fulfillment or inventory behavior is verified.

## Evidence references

- Merchant-provided Shopify Admin screenshot: three purchase options—4 weeks / 10% off, 6 weeks / 15% off, 8 weeks / 20% off.
- Merchant-provided cart screenshot: one-time Starter Kit ($45.00), subscribed Starter Kit ($38.25), Companion ($15.00), one-time Balm ($35.00), and subscribed Balm ($29.75); both subscription lines show six weeks and 15% off.
- Merchant-provided checkout screenshot: subscribed Starter Kit ($38.25), Companion ($15.00), one-time Balm ($35.00), and subscribed Balm ($29.75); checkout shows the recurring-charge disclosure.
- Merchant-provided order screenshots for #1001 and #1002: a $35 one-time Balm order has no subscription cadence, and a $29.75 Balm order records “Deliver every 6 weeks, 15% off.”
- Merchant-provided Balm PDP screenshots: 6 weeks / 15% off is the selected default at $29.75; 4 weeks displays 10% off at $31.50; 8 weeks displays 20% off at $28.00.
- Related provider decision and official documentation: [`decisions.md`](./decisions.md).
