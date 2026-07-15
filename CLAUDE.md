# Winter Labs — website

Showcase & information site for the Winter Labs studio, built with **Next.js 16 +
React 19 + Tailwind v4 + Framer Motion**. Snow-blue frosted theme.

The full guide (stack, Next 16 gotchas, structure, design system, where to edit
content) lives in **AGENTS.md**, imported below — read it before making changes.

Quick facts:
- All site content is data-driven from `src/lib/labs.ts`.
- Design tokens (`frost-*`, `ice*`, `aurora-*`) are in `src/app/globals.css` under `@theme`.
- Run `npm run build` after non-trivial changes — it type-checks and prerenders every page.

@AGENTS.md
