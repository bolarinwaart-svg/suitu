# Suit-U — Engineering Guidelines

Stack: **Next.js 16.2.6 (App Router) · React 19 · Tailwind CSS v4 · TypeScript**.

This is the canonical rulebook. When in doubt, follow these. If a rule is wrong, update this file in the same PR that breaks it.

---

## 1. Sizing — always `rem` for typography and spacing

**Rule:** Never write font sizes, line heights, or layout spacing in `px`. Use `rem` (or Tailwind tokens that resolve to `rem`).

**Why:** `rem` scales with the user's root font size, which is what assistive tech and browser zoom rely on. Hard-coded `px` breaks accessibility and makes responsive scaling brittle.

**How:**
- 1rem = 16px (project default — do not change `html { font-size }`).
- Conversion: `px / 16 = rem`. E.g. `24px → 1.5rem`, `14px → 0.875rem`.
- Prefer Tailwind utilities (`text-sm`, `text-lg`, `p-4`) — they already emit `rem`.
- If you must write raw CSS, use `rem`. The only acceptable `px` values are: borders (`1px`, `2px`), shadows, and image/asset dimensions inside `next/image`.

**When pulling from Figma:** the Figma Dev Mode panel shows values in `px`. Convert every typography/spacing value to `rem` before pasting into code.

---

## 2. Next.js 16 — this is NOT the Next.js you remember

App Router only. Key behaviours that differ from older training data:
- Read `node_modules/next/dist/docs/` before writing any new server/client component pattern.
- Server Components are the default. Add `"use client"` only when you need interactivity, browser APIs, or hooks.
- `next/font` is the only sanctioned way to load web fonts (already wired in `src/app/layout.tsx`).
- Use Cache Components / `use cache` directive (Next 16) instead of `unstable_cache`.

---

## 3. Fonts

- Loaded via `next/font/google` in `src/app/layout.tsx` as `--font-geist-sans` and `--font-geist-mono`.
- Exposed to Tailwind via `@theme` in `src/app/globals.css` as `--font-sans` / `--font-mono`.
- **Do not** override `body { font-family }` in CSS — it bypasses the Tailwind/next-font wiring. Use the `font-sans` / `font-mono` Tailwind utilities or rely on the inherited default.

---

## 4. Styling

- Tailwind v4 with the new `@theme` / `@import "tailwindcss"` syntax. No `tailwind.config.{js,ts}` file — tokens live in `globals.css`.
- Component-level styles go in Tailwind utilities. Reach for plain CSS only when a utility cannot express it (e.g. complex `clip-path`, scroll snap-points).
- Colors, type, and spacing live as CSS variables under `@theme`. Add new tokens there, not inline.

---

## 5. Figma → Code workflow

1. Select the frame in the Figma desktop app (the MCP tools operate on the current selection).
2. Use `get_design_context` for code + screenshot, `get_variable_defs` for tokens.
3. Map Figma variables to the `@theme` tokens in `globals.css`. Reuse existing tokens before adding new ones.
4. Convert every `px` typography/spacing value to `rem` (see §1).
5. Compose with Tailwind utilities; only extract a component when it's used in ≥2 places.

---

## 6. Commit / PR hygiene

- One logical change per commit.
- Run `npm run lint` and `npm run build` before pushing.
- If you discover a footgun during work, log it in `docs/mistakes-and-solutions.md` in the same PR.
