---
name: Suit U
description: A black-walled gallery for tailoring — full-bleed product photography, cream studio-backdrop accent, uppercase Arges confidence.
colors:
  ink-black: "#000000"
  gallery-charcoal: "#202020"
  soft-stone: "#f4f4f4"
  cream: "#f8f6ea"
  pure-white: "#ffffff"
  near-black: "#171717"
  placeholder-grey: "#9ca3af"
typography:
  wordmark:
    fontFamily: "Arges Condensed, Arges, Anton, Impact, sans-serif"
    fontSize: "3.125rem"
    fontWeight: 700
    lineHeight: 0.8
    letterSpacing: "0"
  hero:
    fontFamily: "Arges, Anton, Impact, sans-serif"
    fontSize: "clamp(4.375rem, 12vw, 11.25rem)"
    fontWeight: 900
    lineHeight: 0.91
    letterSpacing: "0.3375rem"
  heading:
    fontFamily: "Arges, Anton, Impact, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.125rem"
  body:
    fontFamily: "Roboto Flex, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Roboto Flex, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  none: "0"
spacing:
  hair: "0.5rem"
  sm: "0.75rem"
  edge-mobile: "1.25rem"
  md: "1.5rem"
  lg: "2rem"
  edge-desktop: "3rem"
  block: "3.75rem"
components:
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.pure-white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.5rem"
  button-secondary-cream:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.5rem"
  button-primary:
    backgroundColor: "{colors.pure-white}"
    textColor: "{colors.ink-black}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.5rem"
  input-email:
    backgroundColor: "{colors.pure-white}"
    textColor: "{colors.ink-black}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.75rem"
  product-card:
    backgroundColor: "{colors.cream}"
    rounded: "{rounded.none}"
    height: "18.75rem"
  showcase-card:
    backgroundColor: "{colors.soft-stone}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.none}"
    padding: "3rem"
---

# Design System: Suit U

## 1. Overview

**Creative North Star: "The Black Gallery"**

Suit U treats the screen as a black gallery wall and each garment photograph as the framed work hung on it. The surface is near-total black (`#000000`), edge to edge, and the photography is the only thing allowed to be loud. Cream (`#f8f6ea`) is not a background color here, it is the studio backdrop the suits were shot against, bleeding through the edges of the frames. Nothing competes with the product: no decorative panels, no gradient flourishes, no soft cards floating in space. The garments do the persuading.

The interface is deliberately architectural rather than minimal-by-timidity. Every edge is a true 90° corner, every divider a 1px hairline, every button a flat outlined rectangle. This hard-edged restraint is a stance, not an absence of design: borders behave like architecture, blocking black against light and image against ground. Typography carries the brand voice in two registers, a heavy Condensed wordmark (Arges Condensed) and uppercase Roman section headings (Arges Roman), both set with the confidence of printed signage rather than web chrome.

This system explicitly rejects generic ecommerce: no template product grids with rounded cards and drop shadows, no vague promotional gradients, no motion that competes with shopping, no decorative effects layered over the photography. If a treatment makes tailoring feel ordinary, it is wrong. Performance is part of the premium feel, image priority and layout stability protect the first impression as much as the art direction does.

**Key Characteristics:**
- Black gallery wall as the dominant, near-universal surface.
- Full-bleed photography is the hero; the UI recedes around it.
- Square corners everywhere (0px radius), no exceptions.
- Flat by default: depth comes from photo-against-black contrast, never shadows.
- Two-register Arges typography (Condensed wordmark + Roman headings), uppercase, structural.
- Cream as a single warm accent, read as studio backdrop, never as a body fill.

## 2. Colors

A near-monochrome system: black ground, white type, one warm cream accent, with photography supplying all the saturation.

### Primary
- **Ink Black** (`#000000`): The gallery wall. The site `<main>` is black end to end; every section sits on it. Carries 70–85% of any given screen. Its dominance is the brand, not a default.

### Secondary
- **Gallery Charcoal** (`#202020`): The single tonal step up from pure black, used only for the CTA / newsletter panel so it reads as a distinct "frame on the wall" without breaking the monochrome.
- **Soft Stone** (`#f4f4f4`): The light backing for the Showcase Pair cards, the one place the page inverts to dark-on-light so the lifestyle photography reads against a bright ground.

### Tertiary
- **Cream** (`#f8f6ea`, Figma token *Foundation/Yellow/Normal*): The accent and the brand's only warmth. Used for outline-button borders and text on black, the product-photo studio backdrop, and select hairlines. It is the studio paper the suits were shot on, surfacing in the interface.

### Neutral
- **Pure White** (`#ffffff`): Primary type on black, hairline dividers, solid fills for the primary store button, and input backgrounds.
- **Near Black** (`#171717`): The default `--foreground` token and the ink used for type on light surfaces (Showcase headings, PREORDER label).
- **Placeholder Grey** (`#9ca3af`): Input placeholder text only. Never used for body copy.

### Named Rules
**The Gallery Wall Rule.** Black is the default surface and the page returns to it between every section. Light surfaces (Soft Stone, Gallery Charcoal) are deliberate exceptions that frame a specific moment, never the resting state.

**The Cream-Is-Backdrop Rule.** Cream appears as accent borders, label text on black, and the photographic studio backdrop. It is forbidden as a large body background, the warm-paper landing-page move is exactly what this brand is not.

## 3. Typography

**Display Font:** Arges Condensed (Blaze Type) → Anton → Impact fallback
**Heading Font:** Arges, Roman width (Blaze Type) → Anton → Impact fallback
**Body Font:** Roboto Flex (with `wdth` axis) → system-ui

**Character:** Two widths of one proprietary grotesque do the brand work. The Condensed cut is reserved for the wordmark, tall and tightly packed like a fashion-house logotype; the Roman cut carries section headings, broad and authoritative. Roboto Flex is the quiet, neutral workhorse for everything functional, body copy, captions, buttons, nav, so the Arges faces never have to share their register. All display and heading type is set UPPERCASE.

### Hierarchy
- **Wordmark / Display** (Arges Condensed, 700, 3.125rem, line-height 0.8, tracking 0): "SUITS U" only, in nav and footer. The single use of the Condensed face.
- **Hero** (Arges Roman, 900, clamp up to 11.25rem desktop / 4.375rem mobile, line-height 0.91, tracking 0.3375rem): The landing headline. Oversized by intent, the loudest type on the site, sitting over full-bleed photography.
- **Heading** (Arges Roman, 700, clamp 2.5rem→3.75rem, line-height 1.2, tracking 0.125rem / 2px): All section titles (Business, Best Sellers, Craftsmanship, Visit Our Stores). Uppercase, 2px tracking is the signature.
- **Body** (Roboto Flex, 400, 1rem, line-height 1.5): Section copy and descriptions. Hold to 65–75ch line length.
- **Label** (Roboto Flex, 400, 1rem, line-height 1.5, uppercase): Buttons, input placeholders, store names, PREORDER badge. Uppercase reserved for these short strings only.

### Named Rules
**The Two-Width Rule.** Condensed Arges is the wordmark and nothing else. Roman Arges is every other heading. Never swap them, the Condensed face on a section heading is the most common mistake and it reads as a different brand.

**The 2px Heading Rule.** Section headings always carry `letter-spacing: 0.125rem` (2px). It is what separates an Arges heading from a generic uppercase sans.

## 4. Elevation

This system is flat. There are zero box-shadows anywhere in the interface. Depth is created entirely by blocking, full-bleed photography butted against pure black, light panels (Soft Stone, Charcoal) set into the black wall, and 1px hairline dividers. The "elevation" of a product is that it is a bright photograph hung on a black ground, not that it casts a shadow.

### Named Rules
**The No-Shadow Rule.** Surfaces never lift with shadow. If a region needs to separate from the black wall, it changes value (to Charcoal or Stone) or is bounded by a 1px hairline, never blurred elevation. A drop shadow on a card here would read as generic ecommerce, which is the named anti-reference.

## 5. Components

The component language is uniform and architectural: square corners, 1px borders, flat fills, opacity-only state changes. The UI is built to recede beneath the photography.

### Buttons
- **Shape:** Hard rectangle, 0px radius (`rounded-none`). Never rounded.
- **Secondary (default):** 1px border, transparent fill, uppercase Roboto 1rem, padding 0.75rem × 1.5rem (12×24px). `tone="white"` (white border + white text on black) or `tone="cream"` (cream border + cream text). This is the workhorse CTA across every section.
- **Primary:** Solid white fill, black text, same square shape and padding. Used for the emphasized store button ("Maidstone") to mark the user's home location against the outline siblings.
- **Hover / Focus:** Hover drops opacity to 0.8 (no color shift, no movement). Focus-visible draws a 2px outline at 2px offset. No transforms, no shadow.

### Cards / Containers
- **Product Card:** Image tile, 0px radius, `overflow: hidden`. Fixed heights (18.75rem mobile / 29.375rem desktop, aspect 330/470). Optional uppercase "PREORDER" label in near-black, top-left, set on the cream studio backdrop that shows through the photography.
- **Showcase Card:** The signature inverted card. Soft Stone (`#f4f4f4`) background, full-bleed lifestyle photo, black type. Three-point layout: heading top-left, tagline bottom-left, underlined "SHOP NOW" bottom-right. Padding 3rem (1.25rem mobile). No border, no radius, no shadow.
- **Shadow Strategy:** None. See Elevation.
- **Border:** None on image cards; light panels rely on value contrast against black.

### Inputs / Fields
- **Style:** 1px white border, white (or cream on mobile CTA) fill, 0px radius, padding 0.75rem. Uppercase Roboto value and placeholder.
- **Placeholder:** Uppercase, Placeholder Grey (`#9ca3af`).
- **Focus:** Inherits the global focus-visible outline; no glow.

### Navigation
- **Style:** Black bar, white text and icons, Roboto Flex. Desktop is a three-zone layout, links left / centered wordmark / actions right, 72px (4.5rem) tall, 3rem horizontal padding. Icons are 1.5rem (size-6).
- **States:** Links and icon buttons hover to opacity 0.8; focus-visible draws a 2px white outline. The "Shop" disclosure carries `aria-haspopup` / `aria-expanded`.
- **Mobile:** Separate mobile-nav variant; wordmark line-height shifts to 1.2.

### Showcase Pair (Signature Component)
The page's one dark-on-light moment: two side-by-side full-height cards on Soft Stone, each a lifestyle photograph with the three-point text layout described above. It exists to break the black rhythm exactly once and let a styled, in-context look breathe.

## 6. Do's and Don'ts

### Do:
- **Do** keep black (`#000000`) as the default surface and return to it between sections (the Gallery Wall Rule).
- **Do** let full-bleed photography lead every section; the garment is the hero, the UI recedes.
- **Do** use square corners (0px radius) on every button, card, input, and image tile, without exception.
- **Do** set section headings in Roman Arges, uppercase, 700, with `letter-spacing: 0.125rem` (the 2px Heading Rule).
- **Do** reserve Arges Condensed for the "SUITS U" wordmark only (the Two-Width Rule).
- **Do** keep cream as accent, border, label, and studio backdrop only.
- **Do** convey depth through value blocking and 1px hairlines, never shadow.
- **Do** give product images `priority` / correct `sizes` and meaningful alt text; empty `alt=""` only for the decorative hero backdrop (performance is part of trust).

### Don't:
- **Don't** ship generic ecommerce: no rounded cards, drop shadows, or template product grids.
- **Don't** use cream as a large body background, the warm-paper / cream landing-page move is exactly this brand's anti-reference.
- **Don't** put Arges Condensed on a section heading, or omit the 2px tracking; both read as a different, lesser brand.
- **Don't** add gradients, glassmorphism, or decorative effects over the photography.
- **Don't** use motion that competes with shopping; animation stays at opacity/state level and respects `prefers-reduced-motion`.
- **Don't** use vague promotional copy or buzzwords; speak to fit, alteration, occasion, and wardrobe upgrade specifically.
- **Don't** let any heading overflow its container; test the uppercase Arges copy at every breakpoint.
- **Don't** drop body or placeholder text below WCAG AA contrast; Placeholder Grey is for placeholders, never body copy.
