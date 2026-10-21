# AGAIN — Design System

> Natural Self-Care, Done Right.

AGAIN is a **natural deodorant** brand. The range is deliberately tiny — **two products**:

1. **The Deodorant Balm** — an aluminium-free deodorant balm in a recyclable squeeze tube. Natural ingredients that actually work, all-day fresh, no compromise on results.
2. **The Companion** — a small solid-brass key that winds up the balm tube and squeezes out every last bit, so nothing goes to waste. The brand's zero-waste hero.

The brand is built on everyday reliability — trusted routines and positive habits — and on sustainability. Voice is fresh yet approachable with a playful soul. (Note: the products are **not refillable**; the sustainability story is recyclable packaging + The Companion getting every last bit, not refills.)

This project is the AGAIN design system: brand foundations (colour, type, logos), reusable React UI components, and a website UI kit. An automated compiler bundles the components into `_ds_bundle.js` and indexes tokens/fonts.

## Sources provided
- `uploads/AGAIN - Brand Guidelines  .pdf` — 27-page brand book (messaging, logo, colour, fonts, in-use). The authoritative source for everything here.
- Logo / symbol artwork (SVG, PNG, AI, PDF) in teal & white → copied to `assets/logos/`.
- **Nicky Sans** webfont family (Thin–Black + italics) → headings font. Copied weights in `assets/fonts/`.
- **Fira Sans** family (Google Fonts, OFL) → copy font. Copied weights in `assets/fonts/`.

No codebase, Figma, or product photography was provided — the website UI kit uses tactile brand-colour placeholder blocks where photography would go.

---

## Index / manifest
- `styles.css` — global entry point (`@import` list only). Consumers link this one file.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`.
- `assets/logos/` — wordmark + symbol, teal & white, SVG + PNG.
- `assets/fonts/` — Nicky Sans (woff2) + Fira Sans (ttf).
- `components/core/` — Button, IconButton, Badge, Card, Tag, Avatar.
- `components/forms/` — Input, Switch, Checkbox, QuantityStepper.
- `components/navigation/` — Tabs.
- `components/feedback/` — Rating, Banner, Accordion.
- `guidelines/cards/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `ui_kits/website/` — interactive deodorant storefront kit (balm + The Companion).
- `templates/landing/` — an "AGAIN Landing" starting-point template.
- `SKILL.md` — Agent-Skill wrapper for use in Claude Code.

---

## CONTENT FUNDAMENTALS

**Tone:** Fresh, calm, confident, quietly playful. Reassuring rather than hype-y. Speaks to building better daily habits.

**Voice & person:** Mostly second person — speaks to "you" ("Our products work hard, so *you* can play harder"). Uses "our" for the brand. Warm and direct.

**Casing:**
- Headlines & statements → sentence case or Title Case, often short and declarative ("Reliability on repeat", "Natural Self-Care, Done Right.").
- Eyebrows / subheadings / labels → ALL CAPS with wide tracking ("HEALTH & SUPPORT", "BRAND MESSAGING").
- Body → sentence case.

**Punctuation & rhythm:** Em dashes for the signature "natural *and* effective — so we made sure you don't" cadence. Short sentences. Confident full stops, even on the tagline ("Done Right.").

**Signature phrases (use verbatim where fitting):**
- "Natural Self-Care, Done Right."
- "Our products work hard, so you can play harder."
- "Ingredients that work, everyday."
- "No compromise on results."
- "Fresh, on repeat." / "Reliability on repeat."
- "Trusted routines, positive habits."
- "Every last bit." (The Companion / zero-waste)

**Emoji:** None. The brand does not use emoji. Iconography is line-based and minimal.

**Vibe in one line:** A trusted morning ritual — clean, natural, dependable, with a light touch of play.

---

## VISUAL FOUNDATIONS

**Colour:** Clean and fresh, leaning into white / light tones to match the environmental ethos. Six brand colours: White `#FFFFFF`, Off-White `#F5F5F5`, Fresh Blue (mint) `#D6F2ED`, Sand `#DBD8BF`, Cool Blue `#9ABADB`, and the anchor **Deep Teal `#0D3F38`**. Deep Teal carries nearly all "ink", primary buttons, and dark sections. Mint and Sand are the warm/cool soft fills. Any pairing is allowed provided contrast is sufficient. Status colours are deliberately muted and natural (no neon).

**Type:** Two families. **Nicky Sans Medium** — a soft, rounded geometric sans — for all headings, statements and quotes (tracked slightly tight, ~-2%). **Fira Sans** for copy: Light for body, Medium for emphasis and for ALL-CAPS subheadings/eyebrows (tracked wide, ~0.16em). Generous line-height on body (~1.6).

**Layout:** Spacious and uncluttered. Centred max-width containers (~1120px), large vertical padding between sections, lots of whitespace. Simplicity is a stated brand value ("We are big on simplicity, natural materials & tactile textures").

**Backgrounds:** Mostly flat brand colours — Off-White as the default page, Deep Teal for inverted bands, Sand/Mint for accent sections. No gradients. In photography the brand favours natural materials and tactile textures (stone, ceramic, linen); imagery is calm, warm-neutral, and minimal. (Photography not provided here — placeholders used.)

**Corner radii:** Gently rounded, calm not bubbly. Cards ~18px, inputs/buttons inner ~12px, buttons & chips are full pills. Small UI details ~4–8px.

**Cards:** White surface, hairline teal-tinted border, soft low-contrast shadow (`shadow-sm`/`md`). Optional mint / sand / teal tonal variants. Lift slightly on hover (translateY + larger shadow).

**Shadows:** Soft and teal-tinted (`rgba(13,63,56,…)`), never harsh black. Low spread, used sparingly for elevation.

**Borders:** Thin, low-opacity teal (`rgba(13,63,56,0.1–0.32)`). Used for separators and resting input outlines.

**Buttons:** Pill-shaped. Solid Deep Teal is primary; soft mint, outline, and ghost for secondary. Hover darkens the teal / tints the soft background; press scales down slightly (~0.97). Hit targets ≥36px.

**Animation:** Restrained and smooth. Standard ease `cubic-bezier(0.4,0,0.2,1)`, gentle ease-out `cubic-bezier(0.16,1,0.3,1)` for drawers. Durations 140–360ms. Fades and slides, no bounces or playful overshoot. Respect reduced-motion.

**Hover states:** Buttons darken/tint; cards lift; links shift to a darker teal; nav links move from secondary to primary text colour.

**Press states:** Slight scale-down (0.97) on buttons; selected chips/options fill Deep Teal.

**Transparency & blur:** Used minimally — drawer scrim is a translucent deep-teal overlay. No heavy glassmorphism.

**Imagery vibe:** Warm-neutral, natural, tactile, lots of negative space. White logo preferred on imagery (with legibility judgement).

---

## ICONOGRAPHY

AGAIN's brand book does not ship a bespoke icon set. The system uses **minimal line icons** that match the brand's calm, simple character: ~1.6–2px stroke, round caps/joins, currentColor, no fills. These are authored inline as small SVGs within components and kits (cart, account, checkmark, chevron).

- **Recommended set:** [Lucide](https://lucide.dev) (or Feather) — same thin, rounded-stroke aesthetic. Link from CDN when a broader set is needed: `https://unpkg.com/lucide@latest`. *(Substitution flagged: no brand-specific icon font was provided.)*
- **The AGAIN symbol** (`assets/logos/again-*-symbol.svg`) — the "a"/refresh mark — is the one true brand glyph. Use it for favicons, tight spaces, watermarks, and decorative moments. Teal on light, white on dark; the playful half-tone symbol pairings from the guidelines are for decorative use only.
- **Emoji / unicode icons:** Not used.

---

## Using the system
Consumers link `styles.css` and read components from the global namespace after loading `_ds_bundle.js`:
```js
const { Button, IconButton, Card, Badge, Tag, Avatar, Input, Switch, Checkbox, QuantityStepper, Tabs, Rating, Banner, Accordion } = window.AGAINDesignSystem_664992;
```
(See `check_design_system` for the current namespace.)
