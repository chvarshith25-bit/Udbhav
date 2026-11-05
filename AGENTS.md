# Instructions for Codex and Antigravity

Read README.md, PROJECT_BRIEF.md, DESIGN_SYSTEM.md, PROGRESS.md and NEXT_STEPS.md before editing. These documents describe the current implementation; docs/SESSION_HISTORY.md is historical context only. Canonical repository: https://github.com/chvarshith25-bit/Udbhav.git. Fetch collaborator changes before work, preserve origin and avoid force pushes.

## Conventions

- React + Vite + Tailwind v4; JavaScript ESM and JSX. React Router is required. Use TransitionLink for internal navigation. Keep `/` a single-screen interactive festival arena and category pages at `/sports`, `/cultural`, `/technical`.
- All official event facts belong in src/data/events.js. Preserve exactly three primary categories and 26 requested events. Gaming is a Cultural subgroup. Unknown dates, venues, times, people, contacts and URLs stay null; no invented claims or arbitrary destinations.
- Site/category media references belong in src/data/assets.js. The restored golden concert image is disclosed AI-generated concept art; the colored logo is a restored display reference. Neither establishes official approval. The current homepage intentionally uses original SVG scenery per the newer homepage brief; retain the concert reference in the registry for future use. Never present generated/stock imagery as real event coverage.
- Keep SVG/CSS fallbacks and AssetVisual error handling. Use public/ASSET_GUIDE.md for future media placement and accurate alt text. Preserve aspect ratios/crops when assets change.
- GSAP owns the intro, normal hero entrance and route transitions on distinct nodes. Motion owns standard dialog UI; Sports disables that entrance and uses its own GSAP opening cover. Clean up effects and respect reduced motion. No overlapping animation ownership.
- IntroController stays above the route provider, never in a route. Preserve the approved nine-second THE CAMPUS TAKEOVER scenery, keyframes, easing and handoff. No playback/testing controls or replay/skip handlers. Claim session key `udbhav:intro:v1` before initialization; refresh/navigation/history must never replay. Reduced motion/direct category visits bypass and consume the opening. Fail open on initialization errors or stalled playback, with proper cleanup. Resize preserves playback; no Escape or visibility skip. Suppress the normal hero entrance only for the intro-owned mount. Preserve category composition/choreography outside the task scope.
- Route transitions keep the old page until covered and the destination until ready. Preserve Back/Forward, modified clicks, duplicate-click protection, heading focus and three-second recovery timer.
- Preserve semantic controls, focus handling, native dialog behavior and deliberate mobile layouts. Do not add dependencies/backends without a requirement.
- Preserve .openai/hosting.json identity and private audience. Never commit credentials, node_modules, dist or deployment archives.

## End of session

Run npm run check and npm run build. Use meaningful browser verification for behavior/layout changes when available; report limits honestly. Update current progress, actionable next steps and affected design/brief instructions. Preserve useful history in docs/SESSION_HISTORY.md rather than appending contradictory current-state claims. Commit and synchronize authorized source changes to the shared repository.

## Homepage ownership

THE FESTIVAL IS YOURS lives in src/home/, sections/Hero.jsx and pages/HomePage.jsx. Preserve header/logo markup and shared styles exactly. Three TransitionLink entrances share real event previews and a single active lighting state; mobile uses distinct vector signs and first-tap navigation. Finite GSAP scene effects respect reduced motion and do not own intro or route-transition nodes. Sponsors is secondary, implemented as a native modal with centralized src/data/sponsors.js and no invented records. Keep focus/scroll restoration and keyboard/touch behavior. No homepage photographs are required.

## Sports ownership

Preserve the nine-arena journey order in sportsJourney.js. Sport image arrays belong in sportsAssets.js and feed events.js; do not hardcode photos into components. The SVG path must follow measured waypoint coordinates after resize. Preserve natural scrolling, mobile side-rail layout, jump control and reduced-motion fallback. SportOpening animates only its own cover; shared EventDialog retains the data fields and focus trap. Closing a Sports detail restores scroll/focus. No event routes are currently used. Keep Cultural/Technical layouts, homepage, intro and category transition choreography scoped away from Sports changes.

## Cultural ownership

THE FESTIVAL STREET lives in src/cultural/ and pages/CulturalPage.jsx. Performance Boulevard, Creator’s Alley and Challenge District reference all 13 canonical Cultural records. Districts share one original street geometry; changing districts transforms signage, architecture accents, floor markings, lighting and event-poster arrangements in 0.85-second finite GSAP motion. Every event has a centralized poster design and motion family in acts.js. Preserve native wayfinding buttons, a quick-jump directory, first-tap poster/details, focus boundaries and exact district/scroll/focus restoration. PosterSurface is reused in the fullscreen native detail; photographs come only from event image arrays with designed fallback. Unknown facts remain pending. Respect reduced motion and fail open if animation fails. Cultural’s 1.49-second banner transition reads existing homepage stage geometry without mutating the approved homepage or its motion. Provider lifecycle, all other route choreography, intro, branding, Sports, Technical and registration remain protected.

## Technical ownership

THE INVENTION ENGINE lives in src/technical/ and pages/TechnicalPage.jsx. Its four independent modes reference canonical event objects without duplicating facts. Preserve one persistent SVG assembly across selection: finite GSAP attribute motion on the same modules/core/gantry/rotor/base/envelope, interrupted from current state. Reduced motion and animation initialization failures settle exact selected geometry without hiding content. The Technical-only pavilion/blueprint transition aligns the same object with its destination. Each native detail has a distinct short opening, an interruptible always-available Close button, content inert recovery, gallery fallback and focus/scroll/mode restoration. Optional confirmed rules, eligibility and branchTracks belong in events.js. See src/technical/README.md for photo-ready fields and paths. Keep Cultural, Sports, intro, homepage/VJIT, sponsors, registration and provider lifecycle protected.
