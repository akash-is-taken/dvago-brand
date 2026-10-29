---
name: dvago-brand
description: Applies Dvago's brand identity (DVAGO wordmark, heart-V mark, Dvago green palette, Inter type) to anything made for or about Dvago, the Pakistani pharmacy and wellness chain (dvago.pk). Use whenever the user asks for a deck, report, proposal, Word doc, PDF, Excel sheet, dashboard, website, landing page, web app, HTML artifact, React component, email template, social post, banner, flyer, poster, store signage, or promo graphic for Dvago, or mentions "Dvago", "DVAGO", "dvago.pk", "our pharmacy brand", "Dvago colors", "Dvago logo", or "on-brand" while working on Dvago material. Use even if the user does not ask for branding explicitly. Consult alongside the format skill (docx/pptx/pdf/xlsx) or frontend skill - this one supplies the brand, the other supplies mechanics. For web and UI work read references/web.md and ship assets/tokens.css or assets/tailwind.preset.js.
---

# Dvago Brand Kit

Dvago is a Pakistani pharmacy and wellness retailer: stores plus an online pharmacy at dvago.pk. The brand is warm, healthy and trustworthy. One fresh lime green, a dark green-charcoal, white space, and a friendly rounded heart-V mark. It should feel like a modern health retailer, not a hospital and not a discount bazaar.

This skill supplies the *what* (logo, colors, type, motif, layout, tone). Build the file with the matching format skill (`docx`, `pptx`, `pdf`, `xlsx`) or frontend skill, and follow that skill's own design-quality and QA guidance. For websites, web apps, HTML artifacts and UI components, read `references/web.md`.

The spec below was taken from the live dvago.pk site and its logo files. If the user supplies an official brand book or different values, theirs win.

## When this applies

Apply the brand without asking whenever the output is something that would go out under the Dvago name: decks, reports, proposals, letters, dashboards, web pages, social posts, flyers, signage, emails. A throwaway scratch table or code snippet does not need a logo. If unsure, apply colors and type (cheap, low risk) and skip the logo.

## Logo

Files in `assets/` (SVG is the master; PNGs are 1200px wide renders for Office files):

| File | What | Use on |
|---|---|---|
| `dvago-logo.svg` / `.png` | Green "DVAGO" wordmark with "Pharmacy & Wellness Experts" beneath | White, light tints, or the dark charcoal `#303733` |
| `dvago-white-logo.svg` / `.png` | Same lockup in white | Deep green `#4E7D17`, charcoal, dark photos |
| `dvago-mark.svg` / `.png` | The heart-V mark alone, green | Favicons, app icons, avatars, small corners, the motif |
| `dvago-white-mark.svg` / `.png` | Heart-V mark, white | Same, on dark or green fills |

Rules:
- The lockup is about 3:1. Set one dimension and scale proportionally. Never stretch it into a square slot; use the mark there instead.
- Keep clear space around the logo of at least the height of the "O" in DVAGO.
- The tagline is part of the lockup. At small sizes (under ~120px or ~1.2in wide) the tagline becomes unreadable; use the mark alone or keep the full lockup larger.
- Don't recolor the logo beyond green or white. Don't put the green logo on bright green (`#76BC21`) or on busy photos. White on `#76BC21` is only 2.3:1, so prefer white logo on deep green or charcoal.
- Once per document is enough: header or cover. Decks: large on the title slide, small mark or nothing on content slides. Spreadsheets: cover tab only.

## Signature motif: the heart-V

The "V" in DVAGO is a heart drawn as a single rounded stroke that also reads as a check mark: care plus "verified, genuine medicine." That double meaning is the brand's ownable shape. Use it instead of generic circles and rounded rectangles:

- Small: bullet markers, check-list ticks, icon containers, a mark above a stat, section dividers, "verified" or "genuine" badges.
- Large: the mark cropped and bleeding off a cover or hero edge, in green tint or at low opacity behind content.
- Keep its proportions and rounded stroke ends. Don't redraw it as a plain heart emoji or a sharp check mark.

## Colors

Core:

| Role | Hex | Use |
|---|---|---|
| Dvago Green | `#76BC21` | Logo, motif, big color fields, chart series 1, highlights. Never as text on white (2.3:1). On it, use charcoal text, not white. |
| Deep Green | `#4E7D17` | Primary buttons and CTAs with white text (4.9:1), links, active states |
| Forest Green | `#3F6614` | Green headings or text on white or tints (6.7:1) |
| Charcoal | `#303733` | Body text, headings, dark surfaces, footers. Dvago's own text color: a green-tinted near-black |

Supporting:

| Role | Hex | Use |
|---|---|---|
| Charcoal Deep | `#1F2622` | Darkest background, covers, dividers |
| Green Tint | `#EEF7E1` | Light panels and callouts (charcoal or forest text on it) |
| Green Light | `#D6EDB8` | Stronger tint, chart series, hover backgrounds |
| Sunshine Yellow | `#F2E31B` | Spark only: sale or offer badges, one highlighted number, a small accent. Charcoal text on it (9.2:1). Never white text on yellow, never large page fills |
| Muted text | `#5B5B5B` | Captions, secondary text (6.8:1 on white) |
| Neutrals | `#FFFFFF`, `#F3F3F3`, `#E8ECF2` | Page background, table stripes, borders |

Green is the lead. Yellow is the only second hue, and it stays small. Don't add new brand hues. Dvago runs seasonal campaign colors on its site (for example pink in October), but those are not part of this kit; stay green unless the user explicitly asks for a campaign variant and supplies it.

Status colors, only when needed: success uses Deep Green; warning `#ED8D20`; error `#CB4B4B`.

Charts: Dvago Green, Charcoal, Green Light, `#5B5B5B`, then `#E8ECF2`. Use yellow for at most one highlighted point or series. Load the `dataviz` skill and swap its palette for these.

## Typography

- **Web, HTML, PDFs built from HTML, images:** Inter, bundled in `assets/fonts/InterVariable.woff2` (load it locally; `tokens.css` already does). Headings 700 (600 for smaller headings), body 400.
- **Word, PowerPoint, Excel:** Arial for headings (bold) and body. Inter is usually not installed on the reader's machine, and a missing font silently falls back and breaks the layout. Use Inter in Office files only if the user confirms it is installed or embedded.
- **Urdu text:** Noto Nastaliq Urdu (web) or the format's default Urdu-capable font. Roman Urdu (e.g. "Aap ki Sehat") uses the Latin fonts above.

Headings in Charcoal on light backgrounds, white on dark. Forest Green is fine for one heading level or eyebrow labels. Body text is Charcoal, never bright green.

Use real size contrast: titles and hero numbers 2–3× body size, small quiet labels. Headings, titles and UI labels use title case ("Order Medicines Online", "Health Tips for Ramadan"); sentences, captions and body copy use sentence case. In running text write "Dvago". "DVAGO" in caps is the logo form; "DVAGO®" appears in formal titles on dvago.pk.

## Shape and layout

The logo is all round terminals and soft curves. Match it:
- Rounded corners: 8–12px on cards and panels, pill shapes fine for buttons, chips and search bars. No sharp-cornered boxes, no heavy drop shadows (soft `0 2px 8px rgba(48,55,51,0.08)` at most).
- Lots of white space. Health brands earn trust by looking clean.
- Asymmetric splits (60/40) for covers and heroes; vary layouts between slides or sections rather than repeating one template.
- Use green as a surface, not only a text color: a green hero band, a green-tint panel, a charcoal footer.
- Photography: real people, pharmacists, families, Pakistani context, bright natural light. Product shots on white. Avoid gloomy clinical imagery.
- Icons: simple, rounded line icons in Charcoal or Deep Green, optionally inside a heart-V or green-tint circle.

## Tone and content

- Warm, caring, plain-spoken. Short sentences. English with Roman Urdu touches is on-brand for Pakistani audiences (dvago.pk runs banners like "Aap ki Sehat"), but only use slogans the user provides; don't invent official taglines. "Pharmacy & Wellness Experts" is the established tagline.
- Prices in Pakistani rupees, written "Rs. 499" as on dvago.pk.
- Health content needs care. Don't invent medical claims, cure promises, discounts, prices, phone numbers or addresses. Use clear placeholders (e.g. "[Discount %]") and tell the user what to fill in. Don't advertise prescription-only medicines to consumers; promote categories, OTC products, wellness and services instead. Add "Consult your doctor or pharmacist" where health advice appears.

## Format notes

- **Decks:** title slide with white logo on Deep Green or Charcoal, or green logo on white with a large cropped heart-V. Section dividers in Charcoal Deep or Dvago Green. Content slides white with green accents.
- **Documents/PDF reports:** logo in the first-page header (1–1.5in wide), Forest Green or Charcoal headings, Green Tint callout boxes, footer "Dvago" plus page number.
- **Spreadsheets:** header row Charcoal fill with white bold text, or Green Tint with Charcoal text; banded rows `#F3F3F3`; totals row bold with a Dvago Green top border; logo on a cover tab only.
- **Marketing creative (social, banners, flyers):** one message per piece, big headline, product or person photo, a yellow badge for the offer, logo in a corner, CTA like "Order on dvago.pk" or the app. Common sizes: 1080×1080 and 1080×1350 (feed), 1080×1920 (stories), A4/A5 (print).

## QA before delivering

Render it (screenshot or image per the format skill) and check:
- Logo variant matches its background, not stretched, has clear space, tagline readable or mark used instead
- No green or yellow text on white; buttons are Deep Green with white text
- Heart-V motif used at least once as the signature element
- Only green and yellow as hues; no campaign or random colors
- Rounded corners, title-case labels, sentence-case copy
- No invented claims, prices, slogans or contact details
