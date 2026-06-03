# Mistakes & Solutions

A running log of footguns hit in this project, what caused them, and how to avoid them next time. Append new entries to the top.

---

## Template

```
### YYYY-MM-DD — Short title
**Symptom:** what you saw
**Cause:** what was actually wrong
**Fix:** the change that resolved it
**Prevention:** rule or check to add (link to docs/guidelines.md section if it became a rule)
```

---

### 2026-06-02 — Arges trial files cannot ship to production
**Symptom:** The Arges files in `/public/fonts/arges-trial/` work in dev but using them on a live site violates the Blaze Type trial license.
**Cause:** The "Trial" suffix in filenames (e.g. `ArgesNormal-Trial-Bold.otf`) marks them as evaluation copies. The Blaze Type trial license prohibits production / commercial use.
**Fix:** Before launching, license the full Arges family via [Blaze Type](https://blazetype.eu/typefaces/arges/) (~€280), replace files in `/public/fonts/arges-trial/`, and rename the directory to `/public/fonts/arges/` (then update paths in `globals.css`).
**Prevention:** Whenever a vendor ships trial / demo / eval files, do not put them on a publicly-accessible host. Treat trial files as an internal-only design check and gate production behind a license.

---

### 2026-06-02 — Figma's font slug lied about the width axis
**Symptom:** I wired `font-family: "Arges"` (Normal width) based on Figma reporting `"Arges:Bold"`. Rendered wordmark looked chunky/wide compared to the design, which was tall + narrow.
**Cause:** Figma reports both width axes of Arges under the same slug `"Arges:Bold"`. The visual width is determined by a style variant the slug doesn't expose. The design actually uses **Arges Condensed Bold**.
**Fix:** Changed `--font-display` cascade in `globals.css` to prefer `"Arges Condensed"` first, then fall back to `"Arges"`:
```css
--font-display: "Arges Condensed", "Arges", var(--font-display-fallback), Impact, sans-serif;
```
**Prevention:** Never trust the Figma font slug alone for multi-width families (Arges, Roboto, Inter, etc.). **Visually compare** the rendered wordmark to a Figma screenshot — a chunky vs tall difference is the tell that you've picked the wrong width axis.

---

### 2026-06-02 — Font files copied to both /src/ and /public/
**Symptom:** Duplicate `arges-trial/` directories at both `/src/arges-trial/` and `/public/fonts/arges-trial/`. The `/src/` copy is dead weight — Next won't serve it.
**Cause:** Drag-and-drop into Finder hit the wrong target.
**Fix:** Deleted the `/src/arges-trial/` copy. Only `/public/fonts/arges-trial/` is needed.
**Prevention:** Static assets (fonts, images, favicons) belong in `/public/` only. Anything in `/src/` only gets bundled by webpack/turbopack — fonts there won't be reachable as `/fonts/...` URLs.

---

### 2026-06-02 — Figma reports fonts by display name, not foundry/license
**Symptom:** Figma Dev Mode shows `font-family: "Arges", "Roboto"`. "Arges" is not on Google Fonts and `next/font/google` throws if requested. "Roboto" works but the design uses `fontVariationSettings: "wdth" 100` which only exists on the variable-axis version.
**Cause:**
  - **Arges** is a commercial font by Blaze Type (https://blazetype.eu/typefaces/arges/). Paid license, must be self-hosted via `@font-face`.
  - **Roboto** with a `wdth` axis is actually **Roboto Flex** — the variable-axis sibling, available as `Roboto_Flex` from `next/font/google`.
**Fix:**
  - Imported `Roboto_Flex` (with `axes: ["wdth"]`) instead of `Roboto`.
  - Added Google's **Anton** as `--font-display-fallback`. Closest free stand-in for Arges Bold's condensed heavy display feel.
  - `--font-display` cascade: `"Arges", var(--font-display-fallback), Impact, sans-serif`. When the licensed Arges files are added via `@font-face` in `globals.css`, the cascade prefers them automatically with no component changes.
**Prevention:**
  - When Figma reports a font name, **search the web first** to confirm whether it's free (Google Fonts) or licensed (Blaze Type, Commercial Type, etc.).
  - If Figma's CSS uses `fontVariationSettings`, check whether the font is actually the **variable-axis** variant (e.g. Roboto Flex vs Roboto, Inter vs Inter Variable).
  - Build a fallback chain `[licensed font] → [free stand-in] → [system fallback]` so the design renders today and upgrades silently when the license is dropped in.

---

### 2026-06-02 — `body { font-family: Arial }` shadowed `next/font`
**Symptom:** `layout.tsx` wires Geist via `next/font/google`, but the rendered page used Arial.
**Cause:** `src/app/globals.css` had a hard-coded `body { font-family: Arial, Helvetica, sans-serif; }` that overrode the Tailwind `--font-sans` chain set up under `@theme`.
**Fix:** Removed the `body { font-family }` declaration. Body now inherits the Tailwind `font-sans` family which resolves to `var(--font-geist-sans)`.
**Prevention:** Never set `body { font-family }` directly. Set font on `<html>` or `<body>` via the Tailwind `font-sans` / `font-mono` utility, or via the `@theme` token. See `guidelines.md` §3.

---

### 2026-06-02 — Hard-coded `px` font sizes from Figma
**Symptom:** Pasting Dev Mode CSS from Figma drops `font-size: 24px;` into components, breaking user zoom + accessibility.
**Cause:** Figma exports raw `px`. There is no automatic conversion.
**Fix:** Convert with `px / 16 = rem` (24px → 1.5rem) or pick the closest Tailwind utility (`text-2xl` = 1.5rem).
**Prevention:** See `guidelines.md` §1. Code review rejects any new `font-size: *px` outside borders/shadows.

---

### 2026-06-02 — Figma MCP tools failed with "nothing selected"
**Symptom:** `get_design_context` / `get_variable_defs` returned `You currently have nothing selected.` even when a node URL was supplied.
**Cause:** The Figma MCP plugin reads the current selection in the Figma desktop app, not the node ID in the URL.
**Fix:** Open the Figma desktop app, click the target frame, then retry the tool.
**Prevention:** Always confirm the user has selected the frame before calling Figma MCP tools that operate on a node.
