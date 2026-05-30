# Japanese Learning App

Personalized Japanese study app focused on practical travel language, itinerary-driven scenarios, and short-session learning for `iPhone` and `iPad`.

## Structure

- `apps/web/`: Main app frontend. Naming can be revisited later if the implementation becomes a fully native or hybrid mobile app.
- `packages/shared/`: Shared types, utilities, and future reusable modules.
- `content/`: Learning material and study assets.
- `docs/`: Product notes, scope, and planning.
- `research/`: Language-learning ideas, references, and experiments.

## Current Direction

- private personal app
- mobile-first for `iPhone` and `iPad`
- gamified progression
- non-linear dependency-based lesson unlocking
- itinerary-themed lesson areas

## Deployment Direction

- `index.html` at the project root redirects GitHub Pages visitors into `apps/web/`
- `apps/web/` is set up as an installable `PWA` with:
  - `manifest.webmanifest`
  - offline asset caching via `sw.js`
  - locally saved progress in browser storage
- GitHub Pages can publish this repository from the `main` branch root
- On iPad, the hosted app can be added to the Home Screen for personal offline practice
