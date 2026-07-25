# Jaimin Viramgama — Portfolio (Monospace Redesign)

## Original Problem Statement
> I want to re design my portfolio, want to go full monospace design, aesthetic and attractive designs with minimal animations.

## User Choices
- **Content**: keep name (Jaimin Viramgama) intact; placeholder copy elsewhere
- **Font**: AI's pick → IBM Plex Mono (primary) + Space Mono (display)
- **Theme**: light + dark, with toggle (dark by default)
- **Vibe direction**: "surprise me" → terminal-meets-editorial monospace aesthetic
- **Sections**: defaults → Hero, About, Projects, Experience, Skills, Contact

## Architecture
- **Framework**: React 18 + Vite 5 + Tailwind CSS 3
- **Routing**: single-page with `react-scroll` smooth-anchor nav
- **Theme**: CSS variables driven by `class="light" | "dark"` on `<html>`; persisted in `localStorage`
- **Fonts**: Google Fonts (IBM Plex Mono 300–700, Space Mono 400/700)
- **Motion**: minimal — cursor blink, section fade-in on scroll (IntersectionObserver), underline slide, marquee ticker
- **Layout**: fixed nav → 6 anchored sections → footer with ASCII signature

## File Map
```
/app
├── index.html                       Google Fonts + meta
├── tailwind.config.js               tokens, font families, semantic colors
├── vite.config.js                   dev server on 0.0.0.0:3000, watch ignores frontend symlink
└── src/
    ├── main.jsx
    ├── App.jsx                      composes Nav + sections + Footer
    ├── index.css                    theme variables, base styles, utilities
    ├── hooks/
    │   ├── useTheme.js              light/dark persistence
    │   └── useReveal.js             IntersectionObserver reveal
    ├── components/
    │   ├── Nav.jsx                  fixed monospace nav with active spy
    │   ├── ThemeToggle.jsx
    │   ├── Section.jsx              numbered §XX header + ascii rule
    │   └── Footer.jsx               ASCII signature
    └── sections/
        ├── Hero.jsx                 whoami, typewriter role, session.log card
        ├── About.jsx                narrative + facts object
        ├── Projects.jsx             table-styled project listing
        ├── Experience.jsx           git-log style timeline
        ├── Skills.jsx               grouped chips + principles + marquee
        └── Contact.jsx              socials + compose_message.sh form
```

## What's Implemented (Jan 2026)
- ✅ Full monospace redesign with terminal-editorial hybrid aesthetic
- ✅ Persistent light/dark theme toggle (dark default)
- ✅ Six anchored sections with numbered `§XX` headers & dashed ASCII rules
- ✅ Hero: typewriter role, live UTC clock, session.log side card, uptime counter
- ✅ Projects presented as a `ls -la` table with hover states and status pills
- ✅ Experience shown as a `git log` timeline with connector line
- ✅ Skills grouped by domain + 4 build principles + horizontal marquee ticker
- ✅ Contact form with terminal-style states (idle / sending / sent) — front-end only, needs backend
- ✅ Custom scrollbar, grain texture background, ASCII footer signature
- ✅ Responsive across mobile / tablet / desktop; mobile menu

## Backlog / Nice-to-haves
- **P1**: Wire Contact form to a real backend (Formspree already installed) or add own `/api/contact`
- **P1**: Add a `/log` blog section (MDX) — placeholder mentioned in copy
- **P2**: `/` cmd-k style palette for keyboard navigation (hint already in hero footer)
- **P2**: Real project screenshots + case-study detail pages
- **P2**: SEO / OG images with monospace generator
- **P3**: Cursor trail with letter-based glitch on hover (kept for later — user asked "minimal animations")

## Notes for Next Session
- Vite watch has a benign `/app/frontend` symlink recursion warning in supervisor logs — ignored via `watch.ignored`; server stays up.
- All copy is placeholder (only real: name). Replace at will in `/src/sections/*.jsx`.
- No backend used yet — pure static React SPA.
