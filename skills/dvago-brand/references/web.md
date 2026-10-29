# Dvago Brand for Web and UI

Read this when building a website, web app, landing page, dashboard, HTML artifact, React/Vue/Svelte component or email template for Dvago. Everything in `SKILL.md` still applies; this covers what changes in the browser.

## Ship the tokens, not hex strings

Copy `assets/tokens.css`, the `assets/fonts/` folder, and `assets/dvago-mark.svg` (which `.dv-heart` references) into the project, keeping them side by side, and import `tokens.css` once. Components read `var(--dv-*)`. Don't paste raw brand hex into components. Wrap dark sections in `.dv-dark` and colors flip automatically.

Ready classes: `.dv-btn`, `.dv-btn--ghost`, `.dv-card`, `.dv-callout`, `.dv-badge`, `.dv-heart`.

Single-file HTML artifacts: inline the `:root` block and any classes you use in a `<style>` tag. Inline the mark SVG directly (`<svg>…</svg>`) instead of the mask URL, and load Inter from Google Fonts (`<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">`), since a single file can't load the sibling font. Use this only for one-off artifacts, never in deployed apps.

Tailwind v3: add `assets/tailwind.preset.js` to `presets`. Use `bg-green`, `bg-green-deep`, `text-green-forest`, `bg-green-tint`, `text-charcoal`, `bg-charcoal-deep`, `bg-sun`, `rounded-card`, `shadow-card`. Tailwind v4: paste the `:root` values into an `@theme` block.

## Fonts

Inter is bundled as `assets/fonts/InterVariable.woff2` (one variable file, weights 100–900, SIL Open Font License in `Inter-OFL.txt`). `tokens.css` loads it with `@font-face` from `fonts/` next to it, so apps make no external font requests and work offline. Ship `Inter-OFL.txt` with the font. Stack: `"Inter", "Segoe UI", system-ui, -apple-system, Arial, sans-serif`. For Urdu add `Noto Nastaliq Urdu` and set `dir="rtl"` on Urdu blocks; Nastaliq needs extra line height (about 2).

## Color rules

- Primary buttons: Deep Green `#4E7D17` with white text, pill-shaped. Hover Forest `#3F6614`.
- Dvago Green `#76BC21` for the logo, the heart-V, hero bands, chart series and decorative fills. Text on a `#76BC21` band is Charcoal, not white.
- Links: Deep Green with underline on light; Dvago Green on `.dv-dark`.
- Yellow `#F2E31B`: offer and sale badges, one highlighted stat. Charcoal text on it.
- Body text Charcoal `#303733`. Muted text `#5B5B5B`.

## Contrast (WCAG AA)

| Pair | Ratio | Verdict |
|---|---|---|
| `#303733` on `#FFFFFF` | 12.2:1 | Pass |
| `#FFFFFF` on `#4E7D17` | 4.9:1 | Pass, normal text |
| `#3F6614` on `#FFFFFF` | 6.7:1 | Pass |
| `#3F6614` on `#EEF7E1` | 6.1:1 | Pass |
| `#76BC21` on `#FFFFFF` | 2.3:1 | Fail. Decorative marks only |
| `#FFFFFF` on `#76BC21` | 2.3:1 | Fail. Don't put white text on bright green |
| `#303733` on `#76BC21` | 5.2:1 | Pass |
| `#76BC21` on `#303733` | 5.2:1 | Pass |
| `#303733` on `#F2E31B` | 9.2:1 | Pass |
| `#5B5B5B` on `#FFFFFF` | 6.8:1 | Pass |

## Logo

- Light header: `dvago-logo.svg`; dark or deep-green header/footer: `dvago-white-logo.svg`. Set `height` (36–44px in a nav), `width: auto`. `alt="Dvago"`, link to home.
- Favicon and app icon: `dvago-mark.svg`.
- Logo in header and optionally footer, not repeated in body content.

## The heart-V in UI

Use `.dv-heart` or the inline mark SVG for: list bullets and feature ticks, eyebrow markers before section headings, icon containers, empty states, loading indicator, "Genuine Medicine" or "Verified" badges, a large cropped watermark in a hero corner at 8–15% opacity.

## Pharmacy UI patterns

Dvago is e-commerce first. Common surfaces and how to brand them:
- **Product card:** white `.dv-card`, product image on white, name in Charcoal 600, price "Rs. 1,250" bold, struck-through old price in muted, yellow `.dv-badge` for "% Off", Deep Green pill "Add to Cart".
- **Category chips and search:** pill shapes, `#F3F3F3` fill, Deep Green when active.
- **Prescription upload / Instant Order:** prominent Deep Green CTA, Green Tint panel explaining steps with heart-V bullets.
- **Dashboards (internal):** white cards on `#F3F3F3` page, Charcoal sidebar (`.dv-dark`), green primary series, yellow for one alert or highlight.

## Checklist

- [ ] `tokens.css` or preset in use; no stray brand hex in components
- [ ] Inter loaded from the bundled `fonts/` folder (no Google Fonts in deployed apps), with fallbacks
- [ ] No white text on `#76BC21`, no green or yellow text on white
- [ ] Focus rings visible on light and dark sections
- [ ] Correct logo variant per background, aspect ratio kept, alt text
- [ ] Heart-V used as signature element
- [ ] Rounded corners (8–12px cards, pill buttons)
- [ ] Title-case labels, sentence-case copy
- [ ] Looks intentional at 375px and 1280px
