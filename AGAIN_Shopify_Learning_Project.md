# AGAIN Shopify Storefront — Learning & Portfolio Project

## Project overview

Build a realistic Shopify Online Store 2.0 storefront based on the AGAIN natural deodorant brand brief. The goal is to learn Shopify Liquid and create a professional portfolio project featuring editable sections, product pages, subscriptions, bundles, cart interactions, and responsive layouts.

- **Platform:** Shopify Online Store 2.0
- **Languages:** Liquid, JavaScript, CSS, JSON
- **Estimated duration:** 6–8 weeks part-time
- **Deliverable:** Working demo and GitHub repository

**Business scenario:** Build a premium Australian natural deodorant store with three products, editable content, subscription purchasing, a Starter Kit bundle, and a polished mobile and desktop shopping experience.

The supplied ZIP contains the design handoff, page-design references, brand logos, fonts, and design tokens. Treat the designs as references to recreate, not as production Shopify code.

## 1. What to build

### Module 1 — Storefront and design system
- Homepage with hero, feature cards, product range, and video section.
- About, Ingredients, and FAQ pages.
- Reusable Liquid sections and blocks.
- Brand typography, colours, buttons, and responsive layout.
- **Skills:** Liquid, JSON templates, CSS architecture, Shopify theme editor.

### Module 2 — Product pages and purchasing
- Deodorant Balm, The Companion, and Starter Kit.
- Product media galleries with branded placeholders.
- Product variants, quantity selector, and related products.
- Subscription versus one-time purchase options.
- **Skills:** Shopify product objects, Liquid forms, selling plans, product data modelling.

### Module 3 — Cart and checkout
- Desktop slide-out cart and mobile cart page.
- Quantity changes, item removal, live subtotal, and free-shipping progress bar.
- Branded checkout configuration.
- **Skills:** Shopify Ajax Cart API, asynchronous JavaScript, cart state, checkout branding.

### Module 4 — Subscriptions and bundles
- Subscribe and save 15%.
- Delivery every 4, 6, or 8 weeks, with 6 weeks as the default.
- Starter Kit bundle.
- Customer portal for skipping, pausing, changing frequency, and cancelling subscriptions.
- **Skills:** Shopify selling plans, bundle modelling, subscription integrations, customer accounts.

## 2. Eight-week learning roadmap

### Stage 1 — Shopify theme fundamentals (Week 1)
**Tasks**
- Create a development store.
- Install Dawn and explore its structure.
- Learn Liquid basics, theme settings, and JSON templates.
- Create your first custom section.

**Deliverable:** Working theme with brand settings and a reusable hero.

### Stage 2 — Design system and reusable sections (Week 2)
**Tasks**
- Implement design tokens, fonts, colour schemes, buttons, accordions, image placeholders, and configurable section blocks.
- Build reusable components.
- Confirm settings can be changed through the theme editor.

**Deliverable:** Reusable component library managed through the theme editor.

### Stage 3 — Homepage and content pages (Week 3)
**Tasks**
- Build the homepage, About, Ingredients, and FAQ templates.
- Support editable text, images, videos, and reorderable sections.

**Deliverable:** Four responsive page templates.

### Stage 4 — Product detail pages (Week 4)
**Tasks**
- Create a reusable product template.
- Build the product gallery, variant selector, quantity stepper, purchase options, and cross-sells.

**Deliverable:** Three functional product pages powered by Shopify data.

### Stage 5 — Cart and commerce interactions (Week 5)
**Tasks**
- Build the cart drawer, mobile cart page, quantity updates, item removal, and shipping threshold calculation.

**Deliverable:** End-to-end add-to-cart and cart management.

### Stage 6 — Subscriptions and bundles (Week 6)
**Tasks**
- Configure selling plans, subscription discounts, frequency options, and the Starter Kit.
- Integrate a subscription app and test its customer portal.

**Deliverable:** Testable subscription and bundle purchasing flow.

### Stage 7 — Accounts, checkout, and quality (Week 7)
**Tasks**
- Configure customer account access and checkout branding.
- Test accessibility, responsive behaviour, and performance.

**Deliverable:** A complete, tested shopping experience.

### Stage 8 — Portfolio and demonstration (Week 8)
**Tasks**
- Polish the README.
- Document the architecture.
- Capture screenshots and record a demo.
- Write test scenarios.

**Deliverable:** GitHub portfolio project ready to demonstrate.

> Treat the weeks as a guide, not a deadline. At 10–15 hours per week, this is a reasonable learning target, although subscriptions and pixel-accurate implementation may take longer.

## 3. Suggested technical architecture

Start with the official Shopify Dawn theme. Extend its existing patterns rather than rebuilding all storefront infrastructure from scratch.

```text
again-shopify/
├── assets/
│   ├── base.css
│   ├── component-product.css
│   ├── component-cart.css
│   ├── theme.js
│   └── brand-fonts/
├── config/
│   ├── settings_schema.json
│   └── settings_data.json
├── layout/
│   └── theme.liquid
├── sections/
│   ├── hero-lookbook.liquid
│   ├── feature-cards.liquid
│   ├── product-range.liquid
│   ├── how-it-works.liquid
│   ├── main-product.liquid
│   ├── main-cart.liquid
│   ├── faq-group.liquid
│   └── ingredient-grid.liquid
├── snippets/
│   ├── placeholder-image.liquid
│   ├── product-card.liquid
│   ├── subscription-picker.liquid
│   ├── free-shipping-bar.liquid
│   └── cart-drawer.liquid
├── templates/
│   ├── index.json
│   ├── product.balm.json
│   ├── product.companion.json
│   ├── product.kit.json
│   ├── cart.json
│   ├── page.about.json
│   ├── page.ingredients.json
│   └── page.faq.json
└── README.md
```

This is an initial structure, not a complete theme. Keep Dawn's existing files and naming conventions where practical, and add or adapt files as you discover what can be reused.

### Recommended tools
- **Shopify development store:** Build and test without using a live customer's storefront.
- **Shopify CLI:** Initialise, preview, and validate the theme.
- **Dawn:** Learn established Shopify theme patterns.
- **VS Code:** Edit Liquid, JSON, CSS, and JavaScript.
- **GitHub:** Version control and portfolio hosting.
- **Shopify Theme Check:** Catch Liquid and theme quality issues.
- **Browser developer tools:** Test responsive layouts, accessibility, and performance.

## 4. Five features to implement deeply

### A. Theme-editor-first image placeholders

The store should look intentional before product photography is available.

A section schema can expose an image picker:

```json
{
  "type": "image_picker",
  "id": "hero_image",
  "label": "Hero image"
}
```

Liquid should check whether an image has been supplied and render a branded fallback when it has not.

**Acceptance criteria**
- The merchant can upload a replacement image without editing code.
- The placeholder uses AGAIN's brand colours and symbol.
- Mobile and desktop hero images can be configured independently.
- Images maintain their aspect ratio and do not cause layout shifts.
- Images load appropriately; below-the-fold images use lazy loading.

Repeat this pattern for video posters, About page photography, and other editorial image slots.

### B. Reusable product template

Avoid creating three independent product pages with duplicated Liquid. Build one configurable product section and use separate JSON templates or settings where appropriate.

**Acceptance criteria**
- Product titles, prices, descriptions, and media come from Shopify.
- The variant selector appears when there are multiple variants.
- The Companion does not show subscription options.
- The Balm shows subscription and one-time purchase options.
- The Starter Kit displays the correct bundle contents and price.
- Related products are configurable in the theme editor.

### C. Subscription purchasing

For a $35 Balm with a 15% subscription discount:

`$35 × (1 − 0.15) = $29.75`

The purchase interface should default to Subscribe & Save, with six weeks selected.

**Required behaviour**
- Choose one-time purchase or subscription.
- Select delivery every 4, 6, or 8 weeks.
- Display the correct price and discount.
- Submit the selected Shopify `selling_plan` ID with the product variant.
- Allow customers to manage subscriptions through the chosen app's customer portal.

Changing the visible price alone is not sufficient. The correct selling plan must be submitted with the cart item. Test the subscription app's portal separately: skip, pause, frequency changes, and cancellation must be supported and configured by the app.

### D. AJAX cart and free-shipping progress

The free-shipping threshold is $50.

`Progress = min((eligible cart subtotal / 50) × 100, 100)`

For example, if the eligible subtotal is $35, the bar is 70% full and the customer needs another $15 to qualify.

**Test cases**
- Add the Balm to the cart.
- Change quantity from one to two.
- Remove an item.
- Reach the free-shipping threshold.
- Add subscription products.
- Handle failed cart requests without leaving the UI in a misleading state.

Confirm how the store calculates eligible merchandise totals, discounts, and shipping before implementing the production calculation.

### E. Merchant-editable sections

Every repeated content group should use Shopify section blocks rather than hard-coded HTML.

Examples:
- Feature cards: heading, body, image, and link.
- FAQs: question and answer.
- Ingredients: name, description, and icon.
- Claims strip: editable text and ordering.
- How-it-works steps: number, title, body, and optional media.

**Key test:** Can a merchant who does not know Liquid update the storefront entirely through the theme editor?

## 5. Project completion checklist

Use this checklist to measure completion.

### Foundation
- [ ] Shopify development store and Git repository created.
- [ ] Design tokens and fonts configured.
- [ ] Theme settings expose brand colours and logos.
- [ ] All custom sections have valid schemas.

### Storefront
- [ ] Homepage matches supplied design on mobile and desktop.
- [ ] About, Ingredients, and FAQ pages are complete.
- [ ] All editorial image slots have editable placeholders.
- [ ] Merchant can add and reorder repeating blocks.

### Commerce
- [ ] All three product pages use real Shopify product data.
- [ ] Subscription selling plans submit correctly.
- [ ] Starter Kit price and bundle contents are correct.
- [ ] Cart updates quantity, subtotal, and shipping progress.

### Production readiness
- [ ] Subscription portal supports the agreed management actions.
- [ ] Checkout branding is configured and verified.
- [ ] Keyboard navigation and focus states are tested.
- [ ] Theme Check passes and major responsive defects are fixed.
- [ ] README, screenshots, and demo walkthrough are published.

## 6. Portfolio and job application

Treat this as a learning and portfolio project, not evidence that you have already delivered a production Shopify store.

When the core modules are complete, demonstrate:
- A custom OS 2.0 theme built from supplied high-fidelity designs.
- Merchant-friendly, editable sections and blocks.
- A subscription integration and functional cart.
- Responsive implementation, testing, and clear technical architecture.

For job applications, distinguish existing e-commerce engineering experience from Shopify-specific experience. Share live Shopify stores only if you genuinely built them. Identify AGAIN as a portfolio reproduction if it is not commissioned client work.

## 7. First milestone: set up the project

Do not start by implementing the homepage. First, get the theme running and understand its structure.

1. Create a Shopify development store and populate the three products with the specified prices.
2. Install Dawn and initialise a Git repository.
3. Extract `Again - Website Design.zip` into a reference directory outside the theme's production files.
4. Read the design handoff's tokens and inspect the homepage, Balm product page, and cart designs.
5. Create your first custom section with editable heading, body text, image picker, and fallback placeholder.
6. Verify that editing those settings in the Shopify theme editor updates the preview.

**Milestone complete:** You can edit a custom section in the theme editor and see the changes in the storefront preview.

Once that works, build the reusable design system and proceed through the roadmap. The aim is to develop practical Shopify skills you can reuse on freelance projects, not just copy a single storefront.
