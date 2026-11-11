# AGAIN Shopify Theme

This theme reproduces the AGAIN storefront handoff as a Shopify Online Store 2.0 theme built from Shopify Dawn. It is a development-store learning project and should be treated as a portfolio build rather than a live production storefront.

## Project status

- Storefront: AGAIN
- Theme base: Dawn
- Target sales model: DTC natural deodorant storefront
- Active app setup: Shopify Subscriptions in the development store
- Product scope: Balm, Companion, and Starter Kit
- Goal: respond to the supplied design handoff with a working preview, editable theme sections, and product/app behavior that matches the development-store setup

## Reproducible setup

### Prerequisites

Before you start, make sure you have:

- A Shopify development store
- Admin access to that store
- Shopify CLI installed locally
- Git installed
- A terminal with access to the project folder

Install or update Shopify CLI using the official docs, then verify the installation:

```bash
shopify version
```

### Local project setup

Clone the repository and open the theme folder:

```bash
git clone <your-fork-or-repo-url>
cd again-shopify
```

Authenticate the CLI to the target store:

```bash
shopify login --store again-dev-store.myshopify.com
```

If the project is meant to use a different store name, replace `again-dev-store.myshopify.com` with the actual development-store domain. Once authenticated, you can preview the theme from the local folder:

```bash
shopify theme dev --store again-dev-store.myshopify.com --theme-editor-sync
```

This starts a local preview and links the theme to your Shopify development store. Keep the terminal open while previewing.

### Useful Shopify commands

```bash
shopify theme pull --store again-dev-store.myshopify.com
shopify theme push --store again-dev-store.myshopify.com --unpublished
shopify theme check
```

## Preview workflow

Run the preview from the project root:

```bash
cd again-shopify
shopify theme dev --store again-dev-store.myshopify.com --theme-editor-sync
```

What to check in the preview:

- Homepage hero, feature cards, product range, how-it-works, and subscribe promo
- Product detail pages for the Balm, Companion, and Starter Kit
- Cart drawer and mobile cart behavior
- Shipping threshold progress state
- Editorial placeholders rendering when media is missing
- Product-form behavior for one-time vs subscription purchase

Use the Shopify theme editor to confirm section settings, image pickers, blocks, and color schemes. The preview should be used for design validation before you share any evidence.

## Product setup in the development store

The development store should have these products configured before theme testing begins.

| Product | Handle | Price | Notes |
|---|---|---:|---|
| The Deodorant Balm | `the-deodorant-balm` | $35.00 USD | One variant; 60g Eucalyptus & Bergamot; subscription eligible |
| The Companion | `the-companion` | $15.00 USD | One-time accessory; no selling plan |
| The Starter Kit | `starter-kit` | $45.00 USD | Compare-at price $50.00; fixed bundle with Balm + Companion |

Recommended product setup:

1. Create the three products in Shopify Admin.
2. Set each product to `Active` in the development store.
3. Use the handles above exactly so the theme and documentation stay aligned.
4. Use the placeholder images in the theme assets when photography is not yet approved.
5. Keep the Starter Kit configured as a standalone product with a $5 discount relative to buying the two items separately.

Do not introduce unsupported product variants or extra scent/size combinations unless the merchant provides new operational data.

## App setup and subscription requirements

### Selected app

Use Shopify Subscriptions for the development store. This matches the supplied storefront and the current learning project setup.

### Required subscription behavior

The Balm must support:

- One-time purchase
- Subscription purchase
- 4-week / 10% off
- 6-week / 15% off (selected by default)
- 8-week / 20% off

The Companion should remain one-time only, with no subscription option exposed.

The Starter Kit can be sold as a standalone product with a discounted bundle price, but it must not be treated as a Shopify Bundles subscription bundle unless the merchant explicitly requires that setup and the app supports it. The app should support the real selling-plan flow and not just a display price.

### Customer-account and portal actions

Before treating the app as a final solution, verify the current customer-account mode supports the required customer self-service actions:

- Skip
- Pause / resume
- Frequency change
- Cancellation

If the current Shopify Subscriptions setup does not meet the required actions in the chosen account experience, record the limitation and switch to an explicit, supported alternative before presenting the build as complete.

## Preview checklist for acceptance

Use the following checklist before calling the work ready for handoff:

- Theme loads in the development store preview
- Homepage sections match the supplied design system
- Product pages render with media fallback states
- Balm has the correct one-time and subscription pricing flow
- Companion does not expose subscription controls
- Starter Kit is shown at $45 with a $50 compare-at price
- Cart drawer and mobile cart show subtotal and shipping progress
- Shopify Theme Check passes without blocking errors
- Manual storefront journey is tested on desktop and mobile

## Recommended validation commands

```bash
shopify theme check
```

Use Theme Check after major theme changes and before capturing final evidence.

## Notes for reproducibility

- Keep the development store and theme preview separate from any live merchant store.
- Keep the theme files in this repository as the source of truth.
- Do not rely on local screenshots alone; include the preview URL, app configuration, and product setup evidence if you are documenting the result.
- Any changes to product prices, app setup, or fulfillment assumptions should be reflected in the documentation before presenting the project as done.

## License

This project is distributed under the same terms as the original Dawn-based theme repository, unless the project documentation or the merchant agreement states otherwise.
