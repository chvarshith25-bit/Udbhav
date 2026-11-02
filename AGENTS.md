# Instructions for Codex and Antigravity

Read README.md, PROJECT_BRIEF.md, DESIGN_SYSTEM.md, PROGRESS.md and NEXT_STEPS.md before editing. These documents describe the current implementation; docs/SESSION_HISTORY.md is historical context only. Canonical repository: https://github.com/chvarshith25-bit/Udbhav.git. Fetch collaborator changes before work, preserve origin and avoid force pushes.

## Conventions

- React + Vite + Tailwind v4; JavaScript ESM and JSX. React Router is required. Use TransitionLink for internal navigation. Keep `/` a single-screen hero and category pages at `/sports`, `/cultural`, `/technical`.
- All official event facts belong in src/data/events.js. Preserve exactly three primary categories and 26 requested events. Gaming is a Cultural subgroup. Unknown dates, venues, times, people, contacts and URLs stay null; no invented claims or arbitrary destinations.
- Site/category media references belong in src/data/assets.js. The restored golden concert image is disclosed AI-generated concept art; the colored logo is a restored display reference. Neither establishes official approval. Do not remove these requested references merely because official assets are pending. Never present generated/stock imagery as real event coverage.
- Keep SVG/CSS fallbacks and AssetVisual error handling. Use public/ASSET_GUIDE.md for future media placement and accurate alt text. Preserve aspect ratios/crops when assets change.
- GSAP owns the intro, normal hero entrance and route transitions on distinct nodes. Motion owns standard dialog UI; Sports disables that entrance and uses its own GSAP opening cover. Clean up effects and respect reduced motion. No overlapping animation ownership.
- IntroController stays above the route provider, never in a route. Preserve eight-second playback, session key `udbhav:intro:v1`, skip/Escape, ten-second fail-open timer and interruption cleanup. Suppress the normal hero entrance only for the intro-owned mount. Direct category visits bypass the opening; returning home cannot replay it.
- Route transitions keep the old page until covered and the destination until ready. Preserve Back/Forward, modified clicks, duplicate-click protection, heading focus and three-second recovery timer.
- Preserve semantic controls, focus handling, native dialog behavior and deliberate mobile layouts. Do not add dependencies/backends without a requirement.
- Preserve .openai/hosting.json identity and private audience. Never commit credentials, node_modules, dist or deployment archives.

## End of session

Run npm run check and npm run build. Use meaningful browser verification for behavior/layout changes when available; report limits honestly. Update current progress, actionable next steps and affected design/brief instructions. Preserve useful history in docs/SESSION_HISTORY.md rather than appending contradictory current-state claims. Commit and synchronize authorized source changes to the shared repository.

## Sports ownership

Preserve the nine-arena journey order in sportsJourney.js. Sport image arrays belong in sportsAssets.js and feed events.js; do not hardcode photos into components. The SVG path must follow measured waypoint coordinates after resize. Preserve natural scrolling, mobile side-rail layout, jump control and reduced-motion fallback. SportOpening animates only its own cover; shared EventDialog retains the data fields and focus trap. Closing a Sports detail restores scroll/focus. No event routes are currently used. Keep Cultural/Technical layouts, homepage, intro and category transition choreography scoped away from Sports changes.
