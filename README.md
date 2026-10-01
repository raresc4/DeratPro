# Derat Pro

**Live site:** https://deratpro-lac.vercel.app/

A single-page marketing website for a professional pest-control business offering
DDD services (deratizare, dezinsecție, dezinfecție). The site presents the
company's services, differentiators, and process, and includes a contact form
with reference-code generation and client-side validation.

The landing page is composed of modular sections — header, hero, services,
why-us, how-it-works, contact form, and footer — with an interactive 3D model
rendered via Three.js / React Three Fiber.

## Design

The UI was designed with [Stitch](https://stitch.withgoogle.com), Google's
AI-assisted design tool. The site was first generated from a prompt and then
iteratively refined with follow-up prompts.

All design artifacts live under `docs/`:

- `docs/design_prompt.md` — the original Stitch prompt plus the follow-up prompts used to correct and refine the design.
- `docs/design/DESIGN.md` — overall design notes.
- `docs/design/web/` — desktop design (`DESIGN.md`, `code.html`, `screen.png`).
- `docs/design/mobile/` — mobile design (`DESIGN.md`, `code.html`, `screen.png`).
- `docs/design/logo/` — logo design (`code.html`, `screen.png`).

## Development Workflow

The codebase was built with [Kiro](https://kiro.dev), an agentic AI development
environment. Each component was implemented using Kiro's plan mode: before
writing any code, the agent first produced a plan for the component (structure,
props, content model, and tests), which I reviewed and refined. Only after the
plan was agreed upon did implementation begin.

This plan-first, per-component approach kept the sections modular and consistent, each one split into a presentational component, a separate content module (`*Content.ts`), and icons (`icons.tsx` / `*Icons.tsx`) — and produced the accompanying unit and component tests.

## Tech Stack

- **React 19** + **TypeScript** — UI and type safety
- **Vite** — dev server, build, and preview tooling
- **Tailwind CSS v4** (`@tailwindcss/vite`) — styling
- **Three.js** with **@react-three/fiber** and **@react-three/drei** — 3D animation
- **Vitest** + **Testing Library** (jsdom) — unit and component tests
- **ESLint** (typescript-eslint) — linting

## Getting Started

Requires Node.js (18+) and npm.

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev

# Type-check and build for production (outputs to dist/)
npm run build

# Preview the production build locally
npm run preview

# Run the test suite
npm test

# Lint the codebase
npm run lint
```

## Deployment

The site is deployed on [Vercel](https://vercel.com) at
**https://deratpro-lac.vercel.app/**.

Vercel builds from the `main` branch using the standard Vite preset (`npm run
build`, output in `dist/`) and redeploys automatically on every push.

## Project Structure

```
src/
  components/   Section components (header, hero, services, whyUs, howItWorks, contact, footer, animation)
  functions/    Pure helpers (form validation, reference-code generation)
  hooks/        Reusable React hooks (useIsMobile, useDisclosure)
  models/       Domain types
  assets/       3D models (.glb) and images
```

## Decisions & Tradeoffs


**Three.js animation: a short narrative loop over a particle field.** The hero
shows a mouse running into a hole and disappearing, on a loop. It reads as
on-brand for a pest-control company and is more memorable than an abstract
particle background. The cost is shipping real `.glb` models (see below); an
abstract shader/particle effect would have been far lighter but less distinctive.

**Heavy 3D assets are the main performance tradeoff.** The models are large
(`mouse_high.glb` ~15 MB, `mouse_low.glb` ~9.3 MB). To soften this on phones,
`useIsMobile` selects the low-poly model and only that asset is preloaded, so a
phone never downloads the 15 MB desktop model. This is still heavy for a landing
page. Given more time I'd compress the meshes with Draco/meshopt and serve them
gzip/brotli-compressed, which typically cuts GLB size by an order of magnitude.

**Single JS bundle (~1.2 MB, ~343 kB gzipped).** The build emits one chunk and
Vite warns it exceeds 500 kB. For a single-page site with no routing, lazy-
loading the Three.js scene is the only split that would clearly help; it was
left out to keep the build simple, and is the obvious next optimization if
first-paint matters more than the current simplicity.

**No backend for the contact form.** Per the brief, the form validates entirely
on the client (`validateContactForm`) and, on success, shows a confirmation with
a locally generated reference code (`generateReferenceCode`) instead of sending
data anywhere. Validation lives in a pure function so it is trivial to unit-test.

**`useIsMobile` reads the viewport once on mount.** There is intentionally no
resize listener: the mobile/desktop decision (which model to load, how to frame
the camera) is made once rather than re-running on every resize. The tradeoff is
that rotating a device or resizing the window mid-session won't swap the 3D model
until the component remounts — an acceptable edge case for a marketing page.

**Known limitation — no `prefers-reduced-motion` handling.** The hero animation
runs regardless of the user's reduced-motion preference. A production build
should pause or simplify the animation when that preference is set;
