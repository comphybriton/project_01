# Dawn theme patterns for the AGAIN storefront

This note captures the reusable structure and conventions used by the Dawn-based Shopify theme in this project. It is intended as a quick reference for building the AGAIN storefront in a way that matches Online Store 2.0 patterns instead of inventing a custom theme architecture.

## Sources reviewed

- `layout/theme.liquid`
- `config/settings_schema.json`
- `sections/header.liquid`
- `snippets/social-icons.liquid`
- `templates/index.json`
- `templates/product.json`
- `assets/base.css` and shared `assets/*.js` files

## 1) Global layout pattern

The global theme shell is defined in `layout/theme.liquid` and acts as the single app wrapper for the storefront.

Common Dawn patterns:

- The document starts with `<!doctype html>` and the base `<html>` wrapper, including `lang` from `request.locale.iso_code`.
- `{{ content_for_header }}` is required in the `<head>` to load Shopify scripts and app features.
- `{{ content_for_layout }}` is the main page-rendering hook that swaps page content from templates and sections.
- Global SEO is standardized via `render 'meta-tags'` and canonical/meta tags in the head.
- Shared site fonts and theme colors are generated in the head via root CSS variables and `font_face` output.
- Global JS is loaded once with `defer` from the `assets/` folder, while interactive features can be conditionally added when the relevant setting is enabled.

Reusable takeaway for AGAIN:

- Keep a single `theme.liquid` wrapper for shared meta tags, fonts, color tokens, and global scripts.
- Use the theme’s root CSS variables as the design token layer for typography, spacing, and color.
- Put page-specific structure in sections and JSON templates rather than hard-coding layout inside the global shell.

## 2) Global settings pattern

The theme-level settings live in `config/settings_schema.json` and expose merchant-editable controls in the theme editor.

Common Dawn patterns:

- Settings are grouped in schema objects using `name` and `settings` arrays.
- Groups represent theme-level concerns such as logo, color schemes, typography, layout, animations, and buttons.
- Settings use standard Shopify schema types such as `image_picker`, `font_picker`, `range`, `checkbox`, `select`, `header`, `paragraph`, and `color_scheme_group`.
- Labels and help text are often sourced from translation keys like `t:settings_schema.colors.name` instead of hard-coded text.
- `color_scheme_group` is used to generate theme color variants and assign semantic roles such as text, background, buttons, and links.
- Most theme options are expressed as ranges or enum choices that feed CSS variables or classes.

Reusable takeaway for AGAIN:

- Model theme-wide design controls as settings groups rather than fixed hard-coded values.
- Store brand tokens in the theme settings layer (color, spacing, typography, media radius, and button rules).
- Use `color_scheme_group` and CSS variable generation so merchants can switch between branded palettes without editing liquid code.

## 3) Section pattern

Sections are the main reusable page modules. Each section includes a `schema` block that exposes merchant-editable settings and nested blocks.

Common Dawn patterns:

- Sections are self-contained modules that can be inserted in templates and reordered by merchants.
- `section.settings.*` drives the section’s overall appearance and behavior.
- `block.settings.*` allows repeated content items such as text, buttons, icons, and cards.
- The schema uses IDs, labels, defaults, and option sets to create theme-editor configuration.
- Sections often create a `color-{{ section.settings.color_scheme }}` wrapper and apply `gradient` styles for theme consistency.
- Dawn sections frequently pair settings with CSS variables or classes to keep logic maintainable.
- Interactive and layout variations are controlled using `if`/`else` logic in Liquid plus CSS media queries.

Reusable takeaway for AGAIN:

- Build page areas as sections: hero, feature list, video block, product range, claims, FAQ, and subscription CTA.
- Use blocks for repeated content such as feature cards, FAQ entries, or ingredient highlights.
- Split style choices into section settings rather than embedding fixed copy, spacing, or layout decisions directly in the Liquid markup.

## 4) Snippet pattern

Snippets are reusable fragments rendered from sections, templates, or other snippets. They are ideal for shared UI that should not be directly editable in the theme editor.

Common Dawn patterns:

- Snippets are rendered with `render 'snippet-name', param: value`.
- They usually contain small, isolated UI pieces such as social links, media, price, icons, and localized forms.
- Snippets may accept dynamic parameters and default values.
- A comment block at the top documents the snippet’s purpose and parameters.
- Shared icons often use inline SVG content via `{{ 'icon-name.svg' | inline_asset_content }}`.
- Snippets pull from global settings, such as `settings.social_facebook_link`, rather than repeating hard-coded URLs across sections.

Reusable takeaway for AGAIN:

- Reuse snippets for common UI patterns such as socials, product cards, filters, pricing, quantity controls, and navigation subcomponents.
- Keep snippets small and focused so they can be reused across sections and templates without duplicating markup.
- Use parameterized snippets for reusable logic that changes based on product, collection, or context.

## 5) Asset and CSS pattern

Assets are organized into component-level CSS files and shared JavaScript utilities.

Common Dawn patterns:

- CSS files are grouped by purpose, for example `component-card.css`, `section-image-banner.css`, `section-main-product.css`, and `base.css`.
- Shared theme variables live in the root CSS and are consumed by each component.
- JavaScript is modular and loaded with `defer`, usually in `assets/*.js` files such as `global.js`, `pubsub.js`, `facets.js`, and `product-form.js`.
- CSS is usually loaded per component or section, and some files use the `media="print" onload="this.media='all'"` pattern to reduce render-blocking overhead.
- Global behavior is separated from page layout so the storefront can progressively enhance without overloading the theme shell.

Reusable takeaway for AGAIN:

- Split CSS into component/section files with a base stylesheet for global design tokens.
- Keep JavaScript shared and dependency-light; only load the behavior needed for the current feature.
- Prefer CSS variables and component classes over repeated ad hoc style declarations across the theme.

## 6) JSON template pattern

The storefront templates are defined as JSON files in `templates/*.json`, which decide which sections and blocks appear on each page type.

Common Dawn patterns:

- Each page type (home, product, collection, cart, etc.) is represented by a JSON template file.
- The template defines a `sections` object that names each section type and its settings.
- The `order` array controls the visual order of sections on the page.
- Within a section, blocks may be configured via a `blocks` object and ordered using `block_order`.
- This architecture is the core of Shopify OS 2.0: merchants can reorder or edit a page without modifying code directly.

Reusable takeaway for AGAIN:

- Use JSON templates to define the homepage and content-page structure before styling the sections themselves.
- Keep each template as a composition of functional sections instead of hard-coded HTML pages.
- Reserve JSON template settings for content ordering and section defaults, while leaving highly custom logic in Liquid sections/snippets.

## 7) Reusable features to carry into AGAIN

The Dawn patterns that are most useful for this project are:

1. Theme-wide design tokens via CSS variables and theme settings.
2. Structured section-based architecture for homepage and content pages.
3. Merchant-editable blocks for repeated content and modular layouts.
4. Snippet-based reuse for shared components such as icons, forms, media, and prices.
5. JSON templates for page assembly and reorderable sections.
6. Performance-friendly asset loading with early loading of critical scripts and deferred enhancement for optional features.
7. Consistent naming and layering: `config/` for theme settings, `sections/` for page modules, `snippets/` for reusable fragments, `assets/` for styles and JS, and `templates/` for layouts.

## Implementation guidance for this project

When building the AGAIN theme, prefer the Dawn pattern set rather than rebuilding Shopify’s architecture from scratch:

- Keep the storefront theme-editor-first and section-based.
- Use settings as the first place for brand configuration.
- Reuse common components instead of duplicating markup.
- Use JSON templates to arrange content, not to hard-code pages in Liquid.
- Add custom storefront features by extending Dawn’s established structures instead of replacing them.

This gives the AGAIN theme a familiar Shopify behavior model while leaving room for the brand-specific design and commerce requirements.
