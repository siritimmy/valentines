# Valentine's Day Website

## Stack
- Vite 5 + vanilla JS + custom CSS (no framework)
- Node 18 — do NOT use Vite 6+ or create-vite 8+ (requires Node 20+)

## Commands
- `npm run dev` — start dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build

## Architecture
Single scrolling page with 4 sections: Hero, Timeline, Countdown, Quiz.
All content is driven from `src/data/config.js` — this is the only file the user edits.

### Key files
- `src/data/config.js` — user content: titles, countdown date, timeline memories, quiz questions, theme colors
- `src/main.js` — entry point, imports styles and initializes all section modules
- `src/js/{hero,timeline,countdown,quiz,animations,navigation}.js` — section modules
- `src/styles/{reset,variables,base,hero,timeline,countdown,quiz,animations}.css`
- `public/photos/` — user's photos, referenced by path in config

### How it works
- Each section module reads from the shared `config` object and renders its DOM
- CSS custom properties in `variables.css` define the theme; `main.js` overrides them at runtime from `config.theme`
- IntersectionObserver powers scroll-reveal animations and nav active state
- Countdown ticks every second via `setInterval`

## Deployment
- GitHub Pages at `https://siritimmy.github.io/valentines/`
- Base path `/valentines/` is set in `vite.config.js`

## Guidelines
- Keep the stack simple — no frameworks, no build complexity
- All user-facing content must come from `config.js`, never hardcoded in HTML/JS
- Mobile-first CSS with `min-width` breakpoints at 600px and 900px
