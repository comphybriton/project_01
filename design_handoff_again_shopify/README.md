# Handoff: AGAIN — Shopify Theme Build

## Overview
AGAIN is a DTC natural deodorant brand. Its positioning is **a deodorant made for sensitive skin that smells good and works**. The formula is bicarb-free, magnesium-powered and aluminium-free. The site sells three products: **The Deodorant Balm** ($35, or $29.75 on subscription), **The Companion** ($15, a brass winding key) and **The Starter Kit** ($45, Balm + Companion). The Balm can be bought on subscription at **15% off**, delivered every **4, 6 or 8 weeks**. **6 weeks is the default.**

This package contains the high-fidelity designs (mobile + desktop) for the full storefront. It is everything a developer needs to build it as a **Shopify Online Store 2.0 theme**.

---

## ⚠️ Imagery is NOT available yet: build every image as an editable theme setting
No product photography, lifestyle imagery or video exists yet. In the designs, every image is a **placeholder**: a flat brand-colour block (mint `#D6F2ED`, sand `#DBD8BF` or cool blue `#9ABADB`) with a soft radial highlight and a faint AGAIN symbol.

**Requirement:** every placeholder must be an **`image_picker` (or `video`) setting in the Shopify theme editor**. The client will upload real images later with no code changes.

- Each image slot has an `image_picker` setting. **When it is empty, render the branded placeholder** (brand-colour block + faint symbol), so the site looks finished before photography lands.
- Each placeholder also gets a **`color` (or select) setting** for its fallback background (mint / sand / cool blue / teal), matching what is in the designs.
- Product images come from **Shopify product media** (PDP gallery, product cards, cart line items). They are not hard-coded. If a product has no media, show the branded placeholder.
- Video slots ("How it works", 16:9) use a **`video` setting** (Shopify-hosted), with an optional `video_url` fallback (YouTube/Vimeo) and an optional poster `image_picker`. Until a video is set, show the poster placeholder with the play button and duration pill, as designed.
- Render images with `image_url` + `image_tag` (responsive `srcset`, `loading="lazy"` except the hero) and `object-fit: cover` inside the designed aspect-ratio boxes. Layout must not shift when real images are added.

### Image / video slot inventory
| Page | Slot | Aspect / size in design | Setting type | Fallback colour |
|---|---|---|---|---|
| Homepage | Hero full-bleed lookbook (separate mobile + desktop images) | Desktop 1200×602; mobile ~392×704 (portrait) | `image_picker` ×2 (desktop / mobile) | Mint |
| Homepage | Range product cards (×3) | ~1:1-ish, 200px tall on desktop | Product featured media | Mint / Sand / Cool blue |
| Homepage | How it works video | 16:9 | `video` + poster `image_picker` | Mint |
| PDPs (×3) | Gallery main + thumbnails | Main 492px tall desktop / 320px mobile; thumbs 1:1 | Product media | Mint / Sand / Cool blue |
| Balm, Companion, Starter Kit PDPs | How it works video | 16:9 | `video` + poster | Mint |
| PDPs | "Complete the ritual" cross-sell thumbs | 1:1 | Product media | per product |
| About | Origin image (mobile + desktop) | ~1:1 / 400px tall desktop | `image_picker` | Sand |
| About | Founder portrait (Colin) | 380px tall desktop / 200px mobile | `image_picker` | Cool blue |
| Ingredients | (icon tiles only, no photos) | — | — | — |
| Cart / Checkout / Confirmation | Line-item thumbs | 1:1 | Product media | per product |

---

## About the Design Files
The files in `design_files/` are **design references built in HTML**. They are prototypes showing the intended look, layout, copy and behaviour, **not production code**. Recreate them as a Shopify theme in **Liquid + JSON templates, sections and blocks**, using vanilla JS / web components (Dawn-style) for interactivity. You can start from **Dawn** or another OS 2.0 base theme, or build a custom theme. Either way, match these designs.

To view a design, open any `.dc.html` file in a browser. Keep the folder structure intact: the files load `support.js`, `_ds/…` (tokens, fonts, component bundle) and `assets/logos/…` by relative path. Each file is a pannable canvas with a **mobile frame (392px)** and a **desktop frame (1200px)** side by side.

## Fidelity
**High-fidelity.** Colours, typography, spacing, radii, copy and interactions are final. Recreate them pixel-accurately. The **only** non-final elements are the imagery placeholders (see above) and the review content (sample reviews; wire these to a reviews app).

---

## Theme architecture (recommended)

### Theme settings (`config/settings_schema.json`)
- **Colours:** the six brand colours (see tokens). Expose them as colour schemes: *Default (off-white)*, *Mint*, *Sand*, *Teal (inverted)*, *White*. Every section gets a `color_scheme` setting so background rhythm can be changed in the editor.
- **Typography:** Nicky Sans (headings) and Fira Sans (body). See Fonts.
- **Announcement bar:** text (default "Shipping on us for orders over $50"), secondary desktop text ("Made for sensitive skin").
- **Free-shipping threshold:** number, default `50`. Drives the cart progress bar.
- **Logo:** teal wordmark, white wordmark, symbol (all `image_picker`, defaults from `assets/logos/`).
- **Social links:** Instagram, Facebook.

### Templates → sections
| Template | Sections (in order) |
|---|---|
| `index.json` (Homepage) | announcement-bar · header (overlaid on hero) · **hero-lookbook** · **feature-cards** ("Why AGAIN") · **product-range** · **how-it-works** (video + steps) · **ingredients-teaser** (accordion) · **subscribe-promo** ("Fresh, on repeat") · **usp-marquee** · footer (with newsletter) |
| `product.balm.json` | main-product (gallery + buy box with subscription) · **usp-marquee** · how-it-works · **product-accordions** (Details / Good to know) · **reviews** · cross-sell · footer |
| `product.companion.json` | main-product (one-time only, "Better together" kit upsell) · usp-marquee · how-it-works · product-accordions · reviews · cross-sell |
| `product.kit.json` | main-product ("In the box" block, subscribe/one-time) · usp-marquee · how-it-works · product-accordions · reviews |
| `cart.json` | main-cart (mobile cart page); desktop uses **cart drawer** (snippet) |
| `page.about.json` | page-hero · image-with-text (origin) · pull-quote · values (3 cards) · founder (image + note) · cta-band |
| `page.ingredients.json` | page-hero · ingredient-grid (blocks) · free-from (chips) · cta-band |
| `page.faq.json` | page-hero · **faq-group** ×4 (blocks = Q&A) · contact-band |
| `customers/login.json` + subscription portal | see Subscription below |

Every section should use **blocks** wherever content repeats (feature cards, steps, ingredients, FAQ items, claims, reviews, values). The client can then add, remove and reorder content and images in the editor.

### Reusable snippets
`placeholder-image.liquid` (branded fallback) · `icon-*.liquid` (line icons) · `price.liquid` (incl. compare-at strike-through) · `product-card.liquid` · `subscription-picker.liquid` · `quantity-stepper.liquid` · `accordion.liquid` · `cart-drawer.liquid` · `free-shipping-bar.liquid`

---

## Commerce setup

### Products
| Product | Price | Notes |
|---|---|---|
| The Deodorant Balm | $35 | Variant: **Eucalyptus & Bergamot, 60g** (only scent for now; more coming. Build the scent selector to show automatically when >1 variant exists). Selling plan: Subscribe & save 15% → **$29.75**. |
| The Companion | $15 | One-time only (no selling plan). |
| The Starter Kit | $45 (compare-at $50, "Save $5") | Balm + Companion bundle (Shopify Bundles app or a standalone product). Subscription: the balm refill recurs, the Companion ships on the first order only. |

### Subscriptions
- Use **Shopify Subscriptions** (or Recharge / Skio / Loop). Selling plan group: **every 4 / 6 / 8 weeks, 15% off**. **Default selected = 6 weeks** ("based on the average usage of our customers").
- PDP buy box: two radio cards, *Subscribe & save 15%* (selected by default, shows ~~$35~~ **$29.75**) and *One-time purchase* ($35). Below them, a 3-option frequency picker (4 / 6 / 8 wks, 6 pre-selected). The picker is hidden when One-time is selected. The Add-to-bag label shows the live price ("Add to bag · $29.75").
- **Subscription management** (see `AGAIN Subscription.dc.html`): style the subscription app's customer portal / Shopify customer account to match. It shows next delivery date + **Skip next / Send now**, product + quantity, frequency (4/6/8, 6 = default), shipping address, payment method, order history, **Pause** and **Cancel**. The fragrance swap is intentionally **not** shown while there is one scent.
- **Account creation copy:** after the first subscription order, the customer gets an email asking them to create an account. Returning customers log in on `/account/login`. Use the copy in the design.

### Cart
- **Desktop:** slide-out **cart drawer** from the right (410px wide), translucent teal scrim `rgba(8,41,37,0.32)`, ease-out `cubic-bezier(0.16,1,0.3,1)` ~360ms.
- **Mobile:** full cart page (or a full-screen drawer).
- Contents: free-shipping progress bar ("You're **$X** away from free shipping", bar fill = subtotal / threshold), line items with quantity stepper + remove, a subscription tag on subscribed items ("Subscribe · every 6 wks"), compare-at strike-through, subtotal, "Shipping & taxes calculated at checkout", Checkout CTA, and a Starter Kit upsell row ("You might also like").

### Checkout & order confirmation
Shopify checkout is hosted. Apply the design through **Checkout branding** (logo, Deep Teal primary buttons, fonts, off-white summary panel, 12px input radius) in the checkout editor. Layout customisation beyond branding needs Shopify Plus / Checkout Extensibility. The checkout and thank-you designs in `AGAIN Cart & Checkout.dc.html` are the visual target: express pay buttons, contact → delivery → shipping method → payment, and an order summary with discount field and subscription saving line.

---

## Design tokens

### Colours
| Token | Hex | Use |
|---|---|---|
| White | `#FFFFFF` | Cards, inputs |
| Off-White | `#F5F5F5` | Default page background |
| Fresh Blue (mint) | `#D6F2ED` | Hero, accent sections, placeholders |
| Sand | `#DBD8BF` | Accent sections |
| Cool Blue | `#9ABADB` | Placeholder / accent |
| **Deep Teal** | `#0D3F38` | All ink, primary buttons, announcement bar, USP band, footer |
| Teal 900 / 700 / 050 | `#082925` / `#14554B` / `#EAF8F5` | Press / hover / selected-option fill |
| Text secondary / tertiary | `#4C6661` / `#8A9A96` | Body copy / hints |
| Borders | `rgba(13,63,56,0.10 / 0.18 / 0.32)` | subtle / default / strong |

No gradients on backgrounds (the only exception is the soft white radial highlight inside image placeholders, which disappears once real images are added).

### Typography
- **Headings:** *Nicky Sans* Medium (500), letter-spacing −0.02em to −0.03em, line-height 0.95–1.1. Font files (woff2) are in `design_files/_ds/.../assets/fonts/`. Upload them to theme `assets/` and declare with `@font-face`. **Check the Nicky Sans web licence before going live.**
- **Body:** *Fira Sans* (Google Fonts, OFL). Light 300 for body (line-height 1.6), Medium 500 for emphasis and labels.
- **Eyebrows:** Fira Sans 500, 11–13px, UPPERCASE, letter-spacing 0.16em.
- **Scale used (desktop / mobile):** hero 74 / 42–48 · page H1 56–64 / 36–38 · section H2 38–44 / 25–30 · card titles 19–20 / 15–17 · body 15–18 / 13.5–15 · eyebrow 13 / 11.

### Spacing, radii, shadows
- Spacing scale (4px base): 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. Desktop section padding is ~64–74px vertical × 48px horizontal; mobile is ~34–40px × 22–24px. The content container is max **1104px**, centred.
- Radii: 4 / 8 / **12 (inputs, options)** / **18 (cards)** / 24–28 (large media) / **999px (buttons, chips, pills)**.
- Shadows (teal-tinted, soft): sm `0 2px 8px rgba(13,63,56,.07)`, md `0 8px 24px rgba(13,63,56,.09)`, lg `0 18px 48px rgba(13,63,56,.12)`.
- Motion: standard `cubic-bezier(0.4,0,0.2,1)`, ease-out `cubic-bezier(0.16,1,0.3,1)`. Durations 140 / 220 / 360ms. Respect `prefers-reduced-motion`.

## Components (from the AGAIN design system)
- **Button:** pill, 52px tall (lg), 46px (md). *Solid* = Deep Teal bg / white text, hover `#14554B`, press scale 0.97. *Soft* = mint bg / teal text (used on teal backgrounds). *Outline* = 1px teal border. *Ghost*.
- **Option cards** (subscribe/one-time, frequency, shipping method): white, 1.5px `border-default`, radius 12–14. Selected = 1.5px Deep Teal border + `#EAF8F5` fill + filled radio.
- **Quantity stepper**, **Input** (48px, radius 12, focus ring `0 0 0 3px rgba(13,63,56,.18)`), **Badge** (pill), **Rating** (stars), **Accordion** (Q/A rows, chevron, one open at a time).
- **Cards:** white, 1px `border-subtle`, radius 18, hover `translateY(-2/-3px)` + `shadow-md`. Product range cards and cross-sells are fully clickable links.
- **Icons:** line icons, 1.6–1.8px stroke, round caps, `currentColor` (Lucide-equivalent). The **AGAIN symbol** is used as a decorative watermark and as the USP separator/bullet.

## Interactions & behaviour
- **Announcement bar:** Deep Teal, mint text. Mobile shows a single message; desktop shows two separated by "·".
- **Header:** overlaid transparent on the homepage hero, solid white elsewhere. Mobile: hamburger / centred logo / bag with count badge. Desktop: logo + nav (Shop, How it works, Ingredients, Our Story; active = 1.5px underline) + search / account / bag.
- **USP marquee** (homepage claims strip and PDP claims band): an infinite horizontal scroll. Duplicate the item set and animate `translateX(0 → -50%)`, **22s linear infinite**, paused on hover, static under reduced motion. On the PDPs, mobile scrolls and desktop is a static centred row with symbol separators.
- **Accordions:** smooth height transition, ~220ms. Ingredients teaser: tapping an ingredient reveals what it does.
- **Video blocks:** clicking the poster plays inline (or in a modal).
- **Buy box:** switching between subscription and one-time updates the price, the Add-to-bag label and the visibility of the frequency picker. Default selection is subscribe + 6 weeks.
- **Cart:** Add to bag opens the drawer (desktop) or goes to the cart (mobile). Quantity changes update the subtotal and the free-shipping bar live (Cart AJAX API).
- **Footer:** newsletter signup ("Join the routine", email + Sign up, no discount offer) → Shopify customer form with `accepts_marketing`. Link columns: Shop / Learn / Support.

## Copy
All final copy is in the HTML files. Positioning: **sensitive skin · bicarb-free · magnesium-powered · smells good · works all day**. Make all copy editable through section/block settings. Key strings:
- Hero: "Natural Self-Care, Done Right." · CTAs "Shop the balm" / "Meet the duo →"
- Announcement: "Shipping on us for orders over $50" · "Made for sensitive skin"
- Homepage claims: Made in Australia · Free shipping over $50 · 100% Natural · Cruelty Free
- PDP claims: Sensitive skin · Bicarb-free · 100% Natural · Plastic free · All genders
- Founder: Colin (single founder)

## Assets
- `design_files/assets/logos/`: AGAIN wordmark + symbol, teal and white (SVG).
- `design_files/_ds/.../assets/fonts/`: Nicky Sans (woff2), Fira Sans (ttf).
- No photography or video yet. See the slot inventory above.

## Files
| File | Contents |
|---|---|
| `AGAIN Homepage - Lane D.dc.html` | Homepage, mobile + desktop |
| `AGAIN Balm PDP.dc.html` | The Deodorant Balm product page |
| `AGAIN Companion PDP.dc.html` | The Companion product page |
| `AGAIN Starter Kit PDP.dc.html` | The Starter Kit product page |
| `AGAIN Cart & Checkout.dc.html` | Cart page + cart drawer, checkout, order confirmation |
| `AGAIN About.dc.html` | Our Story (founder Colin) |
| `AGAIN Ingredients.dc.html` | Ingredients page |
| `AGAIN FAQ.dc.html` | FAQ page (4 groups) |
| `AGAIN Subscription.dc.html` | Account login + subscription management |
| `_ds/`, `support.js`, `assets/` | Supporting files needed to render the designs (tokens, fonts, component bundle, logos) |
