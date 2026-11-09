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

## T030 — Starter Kit composition and renewal behavior

**Status: Not verified; the supplied orders do not establish Starter Kit bundle behavior.**

| Test order | Screenshot contents | What it establishes | T030 result |
|---|---|---|---|
| #1003 | Companion only, $15.00, one-time order | A separate Companion purchase can be completed. It is not shown as part of a Starter Kit or Balm subscription. | Does not verify Companion is included with the first Balm subscription order. |
| #1002 | Balm only, $29.75, “Deliver every 6 weeks, 15% off” | A Balm line was purchased with a six-week selling plan. This is the same November 9 order already documented above, not a later renewal. | Does not verify a repeat charge or that the Companion is excluded from renewals. |

The intended behavior, confirmed by the merchant, is Companion fulfillment on the initial subscription order only, followed by Balm-only renewals. No supplied order screenshot shows a Starter Kit order containing the Balm and Companion together, nor a later renewal linked to the initial subscription. The intended behavior is therefore clear but remains unverified.

### Remaining evidence needed

1. Capture the initial subscription order showing the Balm and Companion with actual contents and quantities.
2. Capture a later renewal for that same subscription showing Balm only.
3. Verify component inventory changes and fulfillment reflect those order lines.

## T031 — Customer account and subscription management

**Status: Partially verified.** Merchant-provided screenshots show the management entry points and a signed-in subscription details page. They do not show completion of skip, pause/resume, frequency change, or cancellation, so those actions remain unverified.

### Setup and customer flow shown

1. The signed-in storefront account menu contains a **Management page** link.
2. The order confirmation page for a subscribed Balm order displays **Manage your subscription** and explains that customers can continue to their account to view and manage subscriptions.
3. The customer account Orders page displays **Manage subscription** for subscription orders #1004 and #1002. The one-time Companion order #1003 has no such button, as expected.
4. The subscription management page displays the Balm, next order date, **Skip**, **Pause**, and **Cancel** controls. It also shows a pencil control beside delivery frequency, plus payment and shipping-address details.

### Results

| Check/action | Result | Evidence / notes |
|---|---|---|
| Account menu entry point | Pass | Management page link is visible in the signed-in account menu. |
| Order confirmation entry point | Pass | Subscribed Balm confirmation page shows **Manage your subscription**. |
| Orders-page entry point | Pass | **Manage subscription** appears for subscription orders #1004 and #1002; it is absent from one-time Companion order #1003. |
| Subscription management page loads | Pass | Signed-in page shows upcoming order, product, frequency, payment, address, and management controls. |
| Skip next order | Not tested | **Skip** is visible; no confirmation or changed upcoming-order state was supplied. |
| Pause and resume | Not tested | **Pause** is visible; no paused or resumed state was supplied. |
| Change delivery frequency | Not tested | Pencil control is visible beside “Deliver every 6 weeks”; no edited frequency or saved result was supplied. |
| Cancel subscription | Not tested | **Cancel** is visible; no cancellation confirmation or resulting status was supplied. |

### Follow-up tests

Use a disposable development-store subscription, and capture the resulting page or Admin state after each action. Test skip, pause, resume, and frequency change first. Test cancellation last because it ends the subscription and cannot be undone. For frequency change, verify the new frequency is actually saved on the subscription and reflected in the next order; a visible pencil icon alone does not establish that customer changes are supported.

## Evidence references

- Merchant-provided Shopify Admin screenshot: three purchase options—4 weeks / 10% off, 6 weeks / 15% off, 8 weeks / 20% off.
- Merchant-provided cart screenshot: one-time Starter Kit ($45.00), subscribed Starter Kit ($38.25), Companion ($15.00), one-time Balm ($35.00), and subscribed Balm ($29.75); both subscription lines show six weeks and 15% off.
- Merchant-provided checkout screenshot: subscribed Starter Kit ($38.25), Companion ($15.00), one-time Balm ($35.00), and subscribed Balm ($29.75); checkout shows the recurring-charge disclosure.
- Merchant-provided order screenshots for #1001 and #1002: a $35 one-time Balm order has no subscription cadence, and a $29.75 Balm order records “Deliver every 6 weeks, 15% off.”
- Merchant-provided Order #1003 screenshot: one-time Companion only, $15.00; it does not show a bundle or subscription.
- Merchant-provided Order #1002 screenshot: Balm only at $29.75 with the six-week plan; same initial November 9 order as above, not a later renewal.
- Merchant-provided Balm PDP screenshots: 6 weeks / 15% off is the selected default at $29.75; 4 weeks displays 10% off at $31.50; 8 weeks displays 20% off at $28.00.
- Merchant-provided T031 screenshots: account menu Management page link; subscribed order confirmation Manage your subscription link; Orders page Manage subscription buttons for #1004 and #1002 but not one-time order #1003; and the signed-in subscription page with Skip, Pause, Cancel, and delivery-frequency edit controls. Screenshots show controls, not completed actions.
- Related provider decision and official documentation: [`decisions.md`](./decisions.md).
