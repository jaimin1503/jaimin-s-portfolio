# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio for Jaimin Viramgama: a static single-page React 18 + Vite 5 + Tailwind 3 site with a monospace "terminal-meets-editorial" design. No backend, no tests.

## Commands

```bash
npm run dev       # Vite dev server on 0.0.0.0:3000 (strictPort, fails if 3000 is taken)
npm run build     # production build to dist/
npm run preview   # serve the built dist/
npm run lint      # ESLint, --max-warnings 0 (any warning fails)
```

There is no test runner. `test_reports/` holds output from an external tool, not a test suite.

## Deployment

- `.github/workflows/deploy.yml` builds with **yarn** (Node 20) and deploys `dist/` to GitHub Pages on every push to `main`/`master`.
- `vite.config.js` sets `base` from `BASE_PATH` at build time only. The workflow sets `BASE_PATH=/<repo-name>/`; it defaults to `/` elsewhere (README links a Netlify deploy). Asset URLs must stay relative/imported so both bases work.

## Architecture

**Live code path:** `src/main.jsx` → `src/App.jsx`, which renders `components/Nav`, then the sections in `src/sections/` (Hero, About, Projects, Experience, Skills, Contact), then `components/Footer`. Navigation is anchor-based scrolling between section `id`s. `react-router-dom`'s `BrowserRouter` wraps the app, but no routes are defined.

**Legacy, unused code:** `src/pages/**`, `components/Navbar.jsx`, `components/homepage/`, `components/TypeWriter.jsx`, `components/useCustomCursor.jsx`, `components/magicui/`, `components/Styles.css`, `src/pages/cursor.*`, and `src/fonts/` belong to the old design. Nothing imported from `App.jsx` reaches them. Edit `src/sections/` and the live components instead.

**Section pattern:** each section wraps its content in `components/Section.jsx` (`id`, `index`, `title`, `meta`). Section renders the numbered `§XX` header and ASCII rule, and uses `hooks/useReveal` (one-shot IntersectionObserver) to toggle the `.reveal` / `.reveal.in` CSS classes. Section content and copy are hardcoded inside each section file.

**Theming:**
- `src/index.css` defines RGB triplet CSS variables (`--bg`, `--surface`, `--fg`, `--muted`, `--line`, `--accent`, `--accent2`) on `:root` (dark) and `:root.light`.
- `tailwind.config.js` maps these to semantic colors (`bg-bg`, `text-fg`, `text-muted`, `border-line`, `text-accent`, …) using `<alpha-value>`. Use these tokens rather than raw colors.
- `hooks/useTheme.js` toggles the `light`/`dark` class on `<html>` and persists the choice in `localStorage` under `jv-theme`. Dark is the default.
- Shared utility classes (`.btn-mono`, `.link-mono`, `.dashed-*`, `.blink`, `.display`) live in `index.css`.

**Fonts:** IBM Plex Mono (`font-mono`) and Space Mono (`font-display`) load from Google Fonts in `index.html`.

**Contact form:** `sections/Contact.jsx` posts to Formspree through `@formspree/react` (`useForm("mayrnnrj")`).

## Notes

- `memory/PRD.md` holds the redesign brief and backlog. Most copy is placeholder; only the name is real.
- `vite.config.js` has `watch.ignored` entries for a `frontend` symlink left by the hosted dev environment (`.emergent/`). Keep them.
