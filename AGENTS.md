<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Winter Labs — Agent & Contributor Guide

Winter Labs is a showcase and information website for a research + product studio.
It presents the studio and its individual **labs** (AI, Silicon, Research, Open
Source), each with its own projects. This file is the source of truth for anyone —
human or AI agent — working in this repo.

> `CLAUDE.md` simply imports this file, so both point to the same guidance.

---

## ⚠️ Next.js 16 specifics that bite

This project runs **Next.js 16 (App Router) + React 19 + Tailwind CSS v4**. The
banner above is not boilerplate — several conventions differ from older Next.js:

- **Dynamic route params are async.** In `app/**/[slug]/page.tsx`, `params` (and
  `searchParams`) are a `Promise`. You must `await` them:
  ```tsx
  export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
  }
  ```
- **`viewport` / `themeColor` are a separate export**, not part of `metadata`:
  `export const viewport: Viewport = { themeColor: "#04060d" }`.
- **Tailwind v4 has no `tailwind.config.js`.** The theme lives in CSS via
  `@theme { … }` inside `src/app/globals.css`. Add colors/fonts/tokens there.
- Turbopack is the default bundler for `dev` and `build`.

---

## Tech stack

| Concern      | Choice                                     |
| ------------ | ------------------------------------------ |
| Framework    | Next.js 16, App Router, TypeScript, `src/` |
| Styling      | Tailwind CSS v4 (CSS-first `@theme`)       |
| Animation    | Framer Motion 12                           |
| Fonts        | Space Grotesk (display), Inter (body), Geist Mono (code) via `next/font` |
| Import alias | `@/*` → `src/*`                            |

## Commands

```bash
npm run dev     # local dev server (Turbopack)
npm run build   # production build — run this before considering work done
npm run start   # serve the production build
npm run lint    # eslint
```

Always run `npm run build` after non-trivial changes; it type-checks and
statically generates every page (including each lab slug).

---

## Project structure

```
src/
  app/
    layout.tsx            # root shell: fonts, metadata, aurora bg, Navbar, Footer
    globals.css           # 🎨 design system: @theme tokens + helper classes
    page.tsx              # Home
    labs/
      page.tsx            # All-labs overview + project index
      [slug]/page.tsx     # Individual lab (async params, generateStaticParams)
    about/page.tsx
    contact/page.tsx
    not-found.tsx
  components/             # Reusable UI (client components marked "use client")
    Navbar, Footer, Hero, Marquee, SnowBackground,
    LabsShowcase, LabCard, ProjectCard, CTA, Reveal, ui.tsx
  lib/
    labs.ts               # 📇 all content: labs + projects (edit here)
    motion.ts             # shared Framer Motion variants
```

### Where to make common changes

- **Add / edit a lab or project** → `src/lib/labs.ts`. Everything (home cards,
  `/labs`, per-lab pages, footer, static params) is generated from this array.
  New active labs automatically get a static page at `/labs/<slug>`.
- **Change colors / fonts / theme tokens** → the `@theme` block in
  `src/app/globals.css`. Use the `frost-*`, `ice*`, and `aurora-*` tokens.
- **Adjust animations** → `src/lib/motion.ts` (variants) and the `Reveal`
  component. Respect `prefers-reduced-motion` (already handled in CSS and
  `SnowBackground`).

---

## Design system (Snow Blue)

Dark, frosted, aurora-lit aesthetic. Tokens are defined in `globals.css`:

- **Surfaces:** `ink` (page bg), `midnight`, `frost-bg`, `panel`.
- **Primary blue scale:** `frost-50 … frost-900`.
- **Neutrals:** `ice`, `ice-muted`, `ice-dim`.
- **Accents:** `aurora-teal`, `aurora-cyan`, `aurora-violet`.
- **Helper classes:** `.glass` / `.glass-strong` (glassmorphism), `.text-gradient`
  (frost→cyan heading gradient), `.aurora-field` + `.grid-veil` (ambient
  background), `.hairline` (glowing divider).

Guidelines: prefer the tokens over raw hex; headings use `font-display`; keep body
copy in `ice-muted`; use `.glass` panels and subtle accent glows rather than hard
borders. Each lab carries its own `accent` hex used for per-lab glows.

## Conventions

- Server Components by default; add `"use client"` only when a component needs
  hooks, state, or Framer Motion.
- Keep all site copy/content in `src/lib/labs.ts` — components stay presentational.
- Match the existing Tailwind utility style and spacing rhythm.
- Accessibility: decorative elements get `aria-hidden`; interactive elements stay
  keyboard-reachable; motion respects reduced-motion preferences.

## Content status

Copy is polished **placeholder** content (believable but fictional projects, stats,
and emails like `hello@winterlabs.example`). Replace with real details before
launch. The contact form is a **front-end demo** — wire `ContactForm.tsx` to a real
endpoint (route handler or form service) before going live.
