# AGAIN Shopify Storefront — Step-by-Step Learning and Implementation Plan

**Purpose:** Build the AGAIN design handoff into a portfolio-quality Shopify Online Store 2.0 theme while learning the platform in a deliberate sequence. This document is a guide and executable checklist; it does not claim that the storefront has already been built.

**Estimated pace:** 8–10 weeks at 8–12 hours per week. Allow extra time for app setup, theme-editor iteration and cross-device testing. Move at your own pace: do not advance past a phase gate until its evidence is working in a Shopify preview.

**Working project directory:** `again-shopify/` (create this as a separate theme project beside, not inside, the supplied design handoff).

**Source of truth:** [design_handoff_again_shopify/README.md](./design_handoff_again_shopify/README.md) and its nine `.dc.html` reference designs, supported by the existing [AGAIN_Shopify_Learning_Project.md](./AGAIN_Shopify_Learning_Project.md).

## Project outcome

Build a responsive, merchant-editable Shopify OS 2.0 theme with the supplied AGAIN visual system, three product experiences, content pages, cart interactions and an integrated subscription journey. Use Dawn as the learning base and extend its existing patterns rather than rewriting platform features.

The final portfolio deliverable is a working development-store preview, source theme, setup notes, test evidence and honest screenshots/demo. Treat this as a learning reproduction, not commissioned client work or proof of prior client delivery.

## Requirements register

| ID | Requirement |
|---|---|
| REQ-001 | Establish a safe Shopify development store, a Dawn-based OS 2.0 theme project and version control without changing the supplied handoff. |
| REQ-002 | Recreate the AGAIN brand system responsively using supplied colours, typography, logos, spacing and interaction patterns. |
| REQ-003 | Make every editorial image/video replaceable in the theme editor and render a deliberate branded placeholder when media is missing. Use Shopify product media for product imagery. |
| REQ-004 | Build a theme-editor-first homepage with editable/reorderable sections for hero, claims, feature cards, product range, video/how-it-works, ingredient teaser and subscription promotion. |
| REQ-005 | Build editable About, Ingredients and FAQ pages, including reusable blocks for repeated content. |
| REQ-006 | Build data-driven Balm, Companion and Starter Kit product experiences with product media, variant-aware controls, purchase options and related products. |
| REQ-007 | Configure subscription purchase for the Balm: 15% off, delivery every 4/6/8 weeks, 6 weeks initially selected, and the selected selling plan submitted with the cart line. |
| REQ-008 | Implement the Starter Kit as Balm + Companion, priced at $45 against $50, with clearly verified first-order/recurring bundle behaviour. |
| REQ-009 | Provide a desktop cart drawer and mobile cart page (or intentionally full-screen mobile drawer), with line-item updates, removal, subtotal and a $50 free-shipping progress indicator. |
| REQ-010 | Connect customer login/account access and a subscription management experience that supports skip, pause, frequency change and cancellation; verify the chosen app supports each action. |
| REQ-011 | Apply the achievable Shopify checkout branding settings and document limitations of the merchant's Shopify plan; do not imitate unsupported hosted-checkout layout control. |
| REQ-012 | Meet practical accessibility, responsive, performance and error-handling expectations; validate with Theme Check and manual journeys. |
| REQ-013 | Make the project reproducible and portfolio-ready with setup documentation, test evidence and accurate disclosure of learning-project status. |

## Decisions and important cautions

1. **Scope conflict in supplied files:** The main theme handoff describes three products and includes Starter Kit design/commerce requirements. The nested design-system readme says the range contains only two products. For this project, implement the three products because the storefront handoff, job brief and Starter Kit reference are the direct build scope. Treat the nested readme as general brand guidance, and confirm the kit's final contents/pricing before presenting it as production-ready.
2. **Subscription app:** Start by evaluating Shopify Subscriptions in the development store because the handoff names it first and it is the simplest learning baseline. Before committing to it, prove that the current app/account setup supports all required customer actions: skip, pause, frequency changes and cancellation. If one is missing, compare Recharge, Loop or another supported app based on those exact capabilities, account/portal styling, selling-plan integration, cost and development-store availability. Do not hand-build a portal or show a fake frequency selector that does not submit a real selling plan.
3. **Starter Kit recurring composition:** The handoff asks for the Companion to ship on the first order while only the Balm recurs. Verify whether the selected bundle and subscription combination supports this correctly. If not, record the limitation and choose an explicit supported product/app configuration before coding; never imply the whole kit recurs if it does not.
4. **Customer accounts:** Confirm whether the chosen subscription app works with the store's customer-account mode and how it surfaces its portal. Style only what Shopify/app extension points allow.
5. **Checkout:** Shopify hosts checkout. Configure its branding editor (logo, colours, typography and supported controls). Do not plan custom checkout sections/layout unless the store's plan and current Checkout Extensibility capabilities explicitly allow them.
6. **Fonts:** Use Fira Sans under its OFL terms. Check and retain evidence of the Nicky Sans webfont licence before uploading or publishing it; otherwise use the closest licensed fallback and document the substitution.
7. **Shipping threshold arithmetic:** Keep the $50 threshold editable. Agree on whether the bar uses merchandise subtotal before/after discounts and whether subscription lines count. Implement and label the rule consistently; validate using Shopify cart values instead of a hard-coded display.
8. **Reference designs:** HTML files are visual/interaction references, not Shopify code. Preserve the original folder structure and do not copy design prototype JavaScript into the theme as production code.

## Technical approach

- **Theme base:** Shopify Dawn, using OS 2.0 JSON templates, Liquid sections/blocks, Shopify product/cart objects and vanilla JavaScript following Dawn's component conventions.
- **Commerce:** Shopify product/variant data, product form, Shopify selling plans for subscriptions, and Shopify cart endpoints. Prefer platform functionality before installing extra apps.
- **Theme editor:** Put changing content, images, videos, colours and repeated content in section settings/blocks. Use JSON templates to assemble page-specific sections.
- **Media:** Product imagery from product media. Editorial imagery uses image pickers; hosted video uses a video setting with poster image. All empty media slots need designed fallback blocks and stable aspect ratios.
- **Validation:** Preview in a development store, test desktop and mobile journeys, run Shopify Theme Check, keyboard-test interactive elements and record defects before closing each phase.
- **Suggested theme areas:** `assets/`, `config/`, `layout/`, `locales/`, `sections/`, `snippets/`, `templates/`, plus Shopify-required theme files. Keep Dawn's directory/naming patterns where suitable; the illustrative paths in tasks below are additions/adaptations, not a demand to duplicate built-in Dawn files.

## Phase 1 — Safe setup and design reconnaissance

**Outcome:** A clean Dawn preview works, the source handoff is understood, and the project has an initial baseline commit.

### Steps

1. Create or use a Shopify development store. Do not use a live merchant store or real customer data.
2. Install Shopify CLI and verify its version; authenticate with the development store.
3. Create a new Dawn-based theme in `again-shopify/`, initialize Git there, and launch a theme preview. Keep `design_handoff_again_shopify/` outside the theme.
4. Inspect the supplied reference designs in this order: homepage, Balm PDP, cart/checkout, then Companion PDP, Starter Kit PDP, About, Ingredients, FAQ and Subscription.
5. Record the reference viewport sizes, section order, responsive changes, text, interaction states and image slot inventory in `again-shopify/README.md`.
6. Write a short product/app decision note in `again-shopify/docs/decisions.md` covering the conflicts and cautions above. Leave decisions open until verified in the actual development store/app setup.

### Phase gate

- Dawn opens in the development-store preview with no theme errors.
- The references and theme code are in separate folders.
- Product scope, media slots, and unresolved subscription/bundle questions are documented.

### Tasks

- [ ] T001 [Plan:1.1] Create a Shopify development store, install Shopify CLI and record the CLI/store setup steps in `again-shopify/README.md`.
- [ ] T002 [Plan:1.1] Initialize a Dawn-based theme and Git repository under `again-shopify/`; start a preview and record the command used in `again-shopify/README.md`.
- [ ] T003 [P] [Plan:1.2] Inspect all supplied `.dc.html` references and record page sections, responsive differences and interactions in `again-shopify/docs/design-audit.md`.
- [ ] T004 [Plan:1.2] Record the product scope, app/bundle/account questions and Nicky Sans licensing check in `again-shopify/docs/decisions.md`.

## Phase 2 — Shopify fundamentals and design foundation

**Outcome:** You understand the theme structure and can change a shared design token and preview a theme-editor setting.

### Steps

1. Walk through Dawn's `layout/theme.liquid`, `config/settings_schema.json`, `sections/`, `snippets/`, `templates/` and `assets/`. Note what Dawn already provides before replacing anything.
2. Configure global brand settings in `config/settings_schema.json`: brand colour scheme controls, announcement text, $50 shipping threshold and logo pickers. Use theme settings for truly global options; use section settings for page/section-level content.
3. Add licensed font files to `assets/` and `@font-face` declarations to a brand stylesheet. Use a fallback font until Nicky Sans use is cleared.
4. Build responsive global styles in a new asset (for example `assets/again-brand.css`) and load it using Dawn's existing asset-loading pattern. Implement colour, spacing, type, button, radius, border and focus tokens from the handoff.
5. Build the first small custom section with heading, body, image picker and fallback colour, then test its settings in the theme editor.

### Phase gate

- Brand styles apply without breaking Dawn's cart/menu/product fundamentals.
- A setting change in the editor updates the preview without code edits.
- Empty image setting displays an accessible, stable-aspect-ratio placeholder.

### Tasks

- [ ] T005 [Plan:2.1] Review Dawn's global layout, settings, section, snippet, asset and JSON-template patterns; summarize reusable features in `again-shopify/docs/theme-notes.md`.
- [ ] T006 [P] [Plan:2.2] Add AGAIN global colour, logo, announcement and shipping-threshold settings in `again-shopify/config/settings_schema.json`.
- [ ] T007 [P] [Plan:2.2] Add licensed brand font files to `again-shopify/assets/` and define heading/body `@font-face` rules in `again-shopify/assets/again-brand.css`.
- [ ] T008 [Plan:2.2] Implement brand tokens and mobile-first typography, spacing, buttons, focus and reduced-motion rules in `again-shopify/assets/again-brand.css`.
- [ ] T009 [Plan:2.3] Create a reusable branded media fallback in `again-shopify/snippets/placeholder-image.liquid` with editable caller-provided aspect ratio and colour.
- [ ] T010 [Plan:2.3] Create a theme-editor practice section at `again-shopify/sections/learning-hero.liquid` and verify its heading, image and fallback settings in preview.

## Phase 3 — Shared storefront shell and homepage

**Outcome:** The homepage matches the reference composition and its copy/media/repeating cards can be maintained by a merchant.

### Steps

1. Adapt Dawn's header, announcement bar and footer rather than creating competing global navigation. Match transparent-on-homepage header behavior only after normal header navigation works.
2. Implement homepage sections in the handoff order: hero, feature cards, product range, how-it-works video/steps, ingredients teaser, subscription promotion, claims marquee and footer/newsletter.
3. Use blocks for every repeating card, claim and step. Provide sensible min/max block counts, accessible labels, mobile media settings where the design needs them, and reorderability through the JSON template.
4. Give image/video sections image pickers or Shopify-hosted video settings, poster pickers and branded fallbacks. Keep product cards sourced from Shopify products.
5. Compare mobile and desktop previews against the two frames in the reference HTML; note differences and refine layout rather than tuning only desktop.

### Phase gate

- Homepage sections can be reordered and edited in the theme editor.
- Hero, cards and video still look intentional without uploaded imagery.
- Navigation, newsletter form and product links work in the development store.

### Tasks

- [ ] T011 [Plan:3.1] Adapt announcement, header and footer to AGAIN using Dawn patterns in `again-shopify/sections/` and their existing snippets/assets.
- [ ] T012 [Plan:3.2] Build the editable homepage hero with separate desktop/mobile image pickers and placeholder fallback in `again-shopify/sections/hero-lookbook.liquid`.
- [ ] T013 [P] [Plan:3.2] Build block-based feature cards and product range sections in `again-shopify/sections/feature-cards.liquid` and `again-shopify/sections/product-range.liquid`.
- [ ] T014 [P] [Plan:3.2] Build editable claims marquee and reusable how-it-works video/steps section in `again-shopify/sections/usp-marquee.liquid` and `again-shopify/sections/how-it-works.liquid`.
- [ ] T015 [Plan:3.2] Build ingredient teaser and subscription promotion sections in `again-shopify/sections/ingredients-teaser.liquid` and `again-shopify/sections/subscribe-promo.liquid`.
- [ ] T016 [Plan:3.3] Assemble the homepage with the intended section order in `again-shopify/templates/index.json` and tune the homepage at mobile and desktop widths.

## Phase 4 — Editorial pages and reusable content blocks

**Outcome:** About, Ingredients and FAQ pages reuse configurable sections and can grow without editing Liquid.

### Steps

1. Implement generic page introduction/hero and image-with-text sections before designing one-off page markup.
2. Build the About story, values, founder image and call-to-action from the supplied copy and design. Make imagery editable with fallbacks.
3. Build the Ingredients content as repeatable ingredient blocks and the free-from claims as editable chips/blocks.
4. Build the FAQ as grouped, merchant-editable question/answer blocks. Ensure keyboard-operable disclosure controls and visible focus.
5. Assemble `page.about.json`, `page.ingredients.json` and `page.faq.json`, then create the matching Shopify Pages and assign templates in the development store.

### Phase gate

- A merchant can update/reorder all repeated content from the theme editor.
- Every editorial media slot is editable and works without media uploaded.
- All page links and FAQ interactions work with keyboard and touch.

### Tasks

- [ ] T017 [Plan:4.1] Create reusable page hero, image-with-text and CTA sections in `again-shopify/sections/page-hero.liquid`, `again-shopify/sections/image-with-text.liquid` and `again-shopify/sections/cta-band.liquid`.
- [ ] T018 [P] [Plan:4.2] Build About values and founder/story components with editable media in `again-shopify/sections/values.liquid` and `again-shopify/sections/founder.liquid`.
- [ ] T019 [P] [Plan:4.2] Build editable ingredient and free-from blocks in `again-shopify/sections/ingredient-grid.liquid` and `again-shopify/sections/free-from.liquid`.
- [ ] T020 [Plan:4.2] Build accessible grouped FAQ disclosures in `again-shopify/sections/faq-group.liquid` and assemble the three JSON page templates under `again-shopify/templates/`.
- [ ] T021 [Plan:4.3] Create and assign the About, Ingredients and FAQ pages in the development store; verify editable content and navigation.

## Phase 5 — Products, variants and buying experience

**Outcome:** Three Shopify products use reusable product presentation, and product availability/data—not hard-coded text—drives their experience.

### Steps

1. Create the Balm ($35, Eucalyptus & Bergamot, 60g), Companion ($15) and Starter Kit ($45, compare-at $50) in the development store. Add clear descriptions, product type/tags and placeholder media if real images are unavailable.
2. Before building Starter Kit recurrence, settle the exact bundle configuration and document how the Companion is fulfilled only on the first subscription order.
3. Build a shared product card and shared product page section using Shopify `product`, `variant`, `product.media` and price data.
4. Use Dawn's product form and variant handling as the baseline. Only show variant choices when the product has multiple variants.
5. Add product-specific blocks for details, claims, accordions, reviews placeholder/app mount and cross-sells; do not hard-code repeated content in the shared section.
6. Assemble the Balm, Companion and Kit JSON templates. Verify that the Companion never shows a subscription selector.

### Phase gate

- All product titles, prices, variants and media are sourced from Shopify data.
- The Companion has one-time purchase only.
- The Starter Kit's actual product composition and fulfilment behavior are verified/documented.

### Tasks

- [ ] T022 [Plan:5.1] Create the three catalog entries and product data in the development store; document handles, variant setup, prices and bundle decision in `again-shopify/docs/catalog.md`.
- [ ] T023 [Plan:5.2] Create reusable product card and product media fallback snippets in `again-shopify/snippets/product-card.liquid` and `again-shopify/snippets/placeholder-image.liquid`.
- [ ] T024 [Plan:5.2] Adapt Dawn's product form/gallery into the reusable product section at `again-shopify/sections/main-product.liquid`, preserving variant and quantity behavior.
- [ ] T025 [P] [Plan:5.2] Build configurable product details, FAQ/accordion, claims and cross-sell sections in `again-shopify/sections/product-accordions.liquid`, `again-shopify/sections/usp-marquee.liquid` and `again-shopify/sections/cross-sell.liquid`.
- [ ] T026 [Plan:5.3] Create Balm, Companion and Starter Kit JSON templates in `again-shopify/templates/product.balm.json`, `again-shopify/templates/product.companion.json` and `again-shopify/templates/product.kit.json`; test all three in preview.

## Phase 6 — Subscriptions, bundle and customer portal

**Outcome:** A real selling plan is added to a cart line and customers can use the selected provider's subscription-management portal.

### Steps

1. Compare subscription apps in the development store against a written checklist: supported 4/6/8-week plans, 15% discount, selected default, cart/checkout behavior, customer portal styling, skip, pause, frequency changes, cancellation, account mode and bundle compatibility.
2. Choose the simplest provider that proves every required capability; record evidence, account limitations and costs in `again-shopify/docs/decisions.md`.
3. Configure a 15%-off selling plan group with 4, 6 and 8 week frequencies. Verify the default display is 6 weeks, without assuming the app's selling-plan IDs or query structure.
4. Build/enable the purchase-option interface using real selling-plan allocations. Ensure the selected `selling_plan` identifier is submitted with the product variant. A changed display price alone is not a subscription implementation.
5. Test one-time and subscription Balm purchases from PDP through checkout/order test flow; verify discount and frequency on cart/order.
6. Configure the subscription customer portal/account link. Test skip, pause, frequency change and cancellation with test data.
7. Validate Starter Kit behavior separately. If the provider cannot make only Balm recur while Companion ships once, choose a supported bundle design before claiming this requirement is met.

### Phase gate

- Cart line and order evidence show the correct Balm variant and selling plan.
- One-time purchase does not submit a selling plan.
- Every management action has been exercised in the real app portal; unsupported actions are reported, not faked.

### Tasks

- [ ] T027 [Plan:6.1] Compare eligible subscription apps against the required capability matrix and record the selection/evidence in `again-shopify/docs/decisions.md`.
- [ ] T028 [Plan:6.2] Configure the verified app's selling plan group for 15% off at 4/6/8 weeks in its admin; capture test evidence in `again-shopify/docs/test-evidence.md`.
- [ ] T029 [Plan:6.2] Implement subscription/one-time controls and real selling-plan submission in `again-shopify/snippets/subscription-picker.liquid` and `again-shopify/sections/main-product.liquid`.
- [ ] T030 [Plan:6.3] Validate Starter Kit bundle composition, first-order Companion fulfillment and repeat Balm orders; document the verified behavior in `again-shopify/docs/catalog.md`.
- [ ] T031 [Plan:6.3] Configure and test account access, customer portal and skip/pause/frequency-change/cancel actions; document the customer flow in `again-shopify/docs/test-evidence.md`.

## Phase 7 — Cart, checkout, account styling and quality

**Outcome:** The end-to-end shopping journey behaves correctly across mobile and desktop and avoids misleading states.

### Steps

1. Keep Dawn's cart drawer conventions where possible. Implement its open/close behavior, focus management, Escape handling, focus return and accessible labels.
2. Add mobile cart-page presentation and line item controls. Use Shopify's cart endpoints and authoritative returned cart data for quantities, subtotal and shipping-bar progress.
3. Handle request failures explicitly: announce errors and preserve accurate cart state; do not show a false success or stale subtotal.
4. Implement the $50 free-shipping progress based on the agreed eligible subtotal rule. Test below, at and above threshold with one-time and subscription lines.
5. Configure checkout branding in the Shopify checkout editor; document unavailable controls based on the store plan. Do not alter hosted-checkout internals.
6. Run keyboard, screen-reader-friendly naming, contrast, focus, reduced-motion, mobile viewport and image-loading checks. Run Shopify Theme Check and resolve findings related to this project.

### Phase gate

- Add, update quantity, remove, threshold-crossing and checkout journeys pass.
- Cart UI remains accurate when requests fail.
- Theme Check and manual accessibility/responsive checks have evidence in the repository.

### Tasks

- [ ] T032 [Plan:7.1] Adapt/create accessible cart drawer and free-shipping progress components in `again-shopify/snippets/cart-drawer.liquid` and `again-shopify/snippets/free-shipping-bar.liquid`.
- [ ] T033 [Plan:7.1] Implement cart quantity, removal, add-to-cart and error-state handling using Shopify cart endpoints in `again-shopify/assets/again-cart.js`.
- [ ] T034 [Plan:7.1] Assemble the mobile cart template in `again-shopify/sections/main-cart.liquid` and `again-shopify/templates/cart.json`; test mobile and desktop behavior.
- [ ] T035 [Plan:7.2] Configure available checkout branding in Shopify admin and document plan-dependent limitations in `again-shopify/docs/decisions.md`.
- [ ] T036 [Plan:7.2] Run Theme Check and keyboard/accessibility/responsive audits; track and resolve project defects in `again-shopify/docs/test-evidence.md`.

## Phase 8 — Final walkthrough and portfolio packaging

**Outcome:** Another developer can run the preview and understand what was implemented, how to test it and what remains app/plan dependent.

### Steps

1. Walk through each primary journey from a fresh development-store state: homepage navigation, content pages, product selection, subscription, kit, cart and account portal.
2. Capture mobile and desktop screenshots from the working theme, not from the supplied prototype, and label them as a portfolio reproduction.
3. Complete `again-shopify/README.md`: prerequisites, CLI commands, dev-store setup, product seed/setup data, app configuration, known constraints, testing and attribution/licensing notes.
4. Confirm all known limits and unresolved production questions are visible. Do not describe Shopify Subscriptions/app features, client delivery or live stores inaccurately.
5. Commit completed work with clear phase-sized commits and push only files whose licenses permit redistribution.

### Phase gate

- A reviewer can follow the README and preview the theme.
- Test evidence covers the key journeys and known gaps are explicit.
- Screenshots/demo are actual outputs from the learning build.

### Tasks

- [ ] T037 [Plan:8.1] Write reproducible setup, preview, product and app instructions in `again-shopify/README.md`.
- [ ] T038 [P] [Plan:8.1] Capture actual working-theme mobile and desktop screenshots and add a truthful portfolio walkthrough to `again-shopify/docs/portfolio.md`.
- [ ] T039 [Plan:8.2] Complete the end-to-end evidence and known-limitations record in `again-shopify/docs/test-evidence.md`.

## Detailed validation checklist

Use these as manual test cases and record pass/fail plus evidence in `again-shopify/docs/test-evidence.md`.

### Theme editor and media

- Change each section heading/body, reorder and remove a repeated block, then confirm preview changes without Liquid edits.
- Leave every image/video unset; verify fallback colour, brand mark, aspect ratio and visible content. Then upload an image/video and verify it replaces the placeholder cleanly.
- Check mobile hero image independently from desktop image; check no content shifts when media loads.

### Content and interaction

- Verify About, Ingredients and each FAQ group match the provided copy and reference flow.
- Operate navigation, accordions, claims strip, video poster and buttons by keyboard and touch.
- Enable reduced motion and confirm marquee/animations do not violate the preference.

### Product and subscriptions

- Balm: $35 one-time; 15%-off subscription price is $29.75; 4/6/8 weeks are available and 6 weeks is the displayed default.
- Selecting subscribe submits the actual selling-plan ID; selecting one-time removes that plan. Verify variant and plan in cart/order evidence.
- Companion: $15 and no subscription UI or selling plan.
- Starter Kit: $45 with $50 compare-at and $5 saving; verify exact bundle contents and whether only Balm repeats.
- Test portal actions independently: skip, pause, change frequency, cancel. Confirm the customer's resulting portal/order state.

### Cart, checkout and quality

- Add one Balm ($35): progress is 70% if eligible subtotal is $35 and threshold is $50.
- Increase quantity to two ($70): progress caps at 100%. Remove the item and confirm state and progress recalculate.
- Test just below, exactly at and above $50, plus discount/subscription cases according to the documented subtotal rule.
- Simulate an unsuccessful cart request; verify visible error and no false success/subtotal.
- Confirm checkout branding only uses supported checkout-editor capabilities on this store plan.
- Check focus visibility, accessible names, contrast, responsive layout, image loading and Theme Check output.

## Requirement mapping

| REQ ID | Description | Plan items | Implementation evidence |
|---|---|---|---|
| REQ-001 | Safe development-store and theme setup | 1.1 | `again-shopify/README.md`, Dawn theme preview and Git history |
| REQ-002 | AGAIN design system | 2.1, 2.2 | `again-shopify/assets/again-brand.css`, global theme settings |
| REQ-003 | Editable media and placeholders | 2.3, 3.2, 4.1 | `again-shopify/snippets/placeholder-image.liquid`, image/video section settings |
| REQ-004 | Editable homepage | 3.1, 3.2, 3.3 | `again-shopify/sections/`, `again-shopify/templates/index.json` |
| REQ-005 | Editable About, Ingredients and FAQ pages | 4.1, 4.2, 4.3 | `again-shopify/sections/`, `again-shopify/templates/page.*.json` |
| REQ-006 | Three product experiences | 5.1, 5.2, 5.3 | `again-shopify/sections/main-product.liquid`, product JSON templates, Shopify catalog |
| REQ-007 | Real subscription purchase behavior | 6.1, 6.2 | Subscription app settings, `subscription-picker.liquid`, cart/order evidence |
| REQ-008 | Starter Kit composition and recurrence | 5.1, 6.2, 6.3 | `again-shopify/docs/catalog.md`, app/order test evidence |
| REQ-009 | Responsive cart and shipping progress | 7.1 | `again-shopify/snippets/cart-drawer.liquid`, `main-cart.liquid`, `again-cart.js` |
| REQ-010 | Account and subscription portal | 6.1, 6.3 | App portal settings and `again-shopify/docs/test-evidence.md` |
| REQ-011 | Checkout branding within platform limits | 7.2 | Checkout editor verification and `again-shopify/docs/decisions.md` |
| REQ-012 | Accessibility, responsiveness, performance, errors | 2.2, 3.3, 4.3, 7.1, 7.2 | Theme Check output and manual evidence in `again-shopify/docs/test-evidence.md` |
| REQ-013 | Reproducible and honest portfolio project | 1.1, 1.2, 8.1, 8.2 | `again-shopify/README.md`, portfolio screenshots and known-limitations evidence |

## Learning method

For each task, follow this loop:

1. Read the corresponding Dawn implementation and the specific design reference before editing.
2. Write down what Shopify/Liquid concept the task teaches.
3. Implement the smallest coherent slice and preview it in the development store.
4. Test the acceptance criteria above; inspect both desktop and mobile.
5. Note what went wrong and the fix in `again-shopify/docs/learning-log.md`.
6. Commit the working increment before moving on.

Do not skip ahead to visual polish while product data, theme-editor settings or buying behavior are still mocked. The strongest learning evidence is a functioning, maintainable theme-editor workflow backed by a real Shopify preview.
