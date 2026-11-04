# UDHBHAV 2K27

THE FESTIVAL IN MOTION — a responsive multi-page festival website for Vidya Jyothi Institute of Technology, Hyderabad. Festival: January 28–30, 2027. Annual Day: January 30.

Live owner-private preview: https://udbhav-2k27-vjit.arcaneharp16.chatgpt.site/
Canonical collaboration repository: https://github.com/chvarshith25-bit/Udbhav

## Development

Node 20.19+ or 22.12+ is required; verified with Node 24.

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

Stack: React 19, Vite 7, Tailwind 4, React Router 7, GSAP/ScrollTrigger, Motion and Lucide. Versions are locked in package-lock.json. No backend, runtime secrets, video, audio or WebGL is required.

## Current experience

| Route | Content |
| --- | --- |
| `/` | THE FESTIVAL IS YOURS: interactive SVG festival ground, three spatial entrances, original VJIT branding and secondary Sponsors overlay |
| `/sports` | THE ROAD TO GLORY: nine connected arena chapters, progressive SVG path and sport-specific fullscreen details |
| `/cultural` | Thirteen cultural/activity events, including gaming/strategy |
| `/technical` | Four technical events |
| `/about` | Festival introduction |
| `/schedule` | Confirmed festival dates, calendar export and Annual Day highlight |
| `/gallery` | Procedural placeholder awaiting real photography |
| `/contact` | Registration/contact and partner announcement states |

THE CAMPUS TAKEOVER is the approved nine-second opening: one night-time festival ground, synchronized court/stage/pavilion floodlights, a giant 03/02/01 countdown, full-ground illumination and the UDHBHAV identity moving seamlessly into the homepage. The approved SVG scenery, keyframes, easing and timing are preserved. It is original illustration, not VJIT's real campus layout.

There are no playback controls or replay options. On the first home entry in a tab session, the intro starts automatically and marks `udbhav:intro:v1` complete **before** animation initialization. Refreshing during or after playback cannot restart it. Category navigation, home return and Back/Forward do not replay it. Direct non-home entries and reduced motion bypass and consume the opening. Normal playback runs uninterrupted; resize preserves the playhead. Initialization failure restores the homepage immediately; stalled playback has recovery. GSAP cleanup restores styles and unlocks homepage access/focus on completion. The review entry under prototypes/campus-takeover uses this same implementation.

Run session regression tests with `node src/intro/introSession.test.mjs`. Browser verification covers playback, controls absence, session refresh/history/navigation, mobile rotation, reduced motion and initialization failure.

Category navigation uses real React Router URLs and distinct GSAP transitions: diagonal Sports wipe, Cultural stage-origin signal reveal and Technical panels. Use TransitionLink for internal links. The old route stays mounted until covered; the new route commits before uncovering. Modified clicks, Back/Forward, heading focus and error recovery are preserved.

## Interactive homepage

The homepage continues the approved intro into one original festival ground. Sports, Cultural and Technical entrances activate court floodlights/ball, stage lighting or digital pavilion details. Only one zone is active. Real event names come from existing data; native TransitionLink navigation and page transitions are preserved. Keyboard focus provides the same response as hover, and touch links navigate on the first tap. Finite GSAP motion respects reduced motion and is suspended during intro/modal/route ownership.

Desktop entrances share hit regions with their illustrated zones. Mobile has a simplified composition with large vector symbols and visible event previews rather than a miniature interactive map. Sponsors & partners opens an accessible native dialog backed by src/data/sponsors.js; it is secondary navigation and currently contains no sponsor records or logos. Escape, backdrop, Close and return focus are supported.

Homepage implementation: src/home/ (scenery, motion, data adapter, sponsor modal and scoped CSS), sections/Hero.jsx and pages/HomePage.jsx. Shared header/logo, intro, category/details and transition source remain unchanged. The original concert concept asset remains in the asset registry but is no longer the homepage background.

## Content and assets

`src/data/events.js` contains all 26 events, descriptions, nullable details, two coordinator slots per event and the confirmed festival dates. Unconfirmed rules, dates, timings, venues, people and contacts must never be invented. Times are IST; dates use `YYYY-MM-DD`. The detailed programme remains empty.

`src/data/assets.js` holds site/category asset references. Sports photographs are mapped in `src/data/sportsAssets.js` and consumed by events.js; see public/images/events/SPORTS_ASSETS.md. The restored golden concert artwork is AI-generated concept art, not real UDHBHAV photography. The restored colored VJIT logo is a display reference, not verified official approval. No new official photography, posters, video or logos are assumed available. Gallery/category/event visuals remain original SVG/CSS placeholders. AssetVisual restores fallbacks for missing/broken sources and preserves the logo's transparent alpha-mask treatment.

See public/ASSET_GUIDE.md for directories and replacement instructions. The opening does not depend on image/logo references.

## Source structure

- `src/intro/`: opening controller, session state, scene graphics, GSAP sequence, overlay and isolated intro.css.
- `src/transitions/`: route readiness/history controller and GSAP choreography.
- `src/pages/`: home, category and festival-information pages.
- `src/sections/`, `src/components/`: reusable content, dialogs, navigation and visual fallbacks.
- `src/data/`: event facts, Sports journey chapter metadata and centralized media references.
- `src/sports/`: responsive path/ScrollTrigger hook, nine original vector graphics, reusable photo fallback and game-specific opening choreography.
- `src/styles/`, `src/animations/`: shared tokens, responsive layouts and page motion.
- `public/`: local assets, reserved official-asset folders and hosting redirects.
- `scripts/check-events.mjs`: event-data integrity checks.
- `docs/SESSION_HISTORY.md`: historical implementation notes; PROGRESS.md is the current snapshot.

## Deployment and collaboration

Vercel: import the GitHub repository; build `npm run build`, output `dist`. vercel.json and public/_redirects preserve direct-route SPA entry handling. Sites identity is tracked in .openai/hosting.json; preserve it. dist/ and node_modules/ are generated and ignored. Never commit credentials or deployment archives.

Codex and Antigravity use the same GitHub repository. Read AGENTS.md and the project documents before editing, fetch collaborator changes, avoid force pushes, and update progress/next steps after each session. The Sites source repository is a separate deployment mirror. The application source, assets and configuration in this checkout are the current implementation.

## Sports journey

Sports has nine arenas in the requested order, connected by a continuous SVG measured from the actual waypoint positions. Desktop chapters alternate composition; mobile uses a gently curved side rail. Natural scrolling draws the path and updates the sticky progress/jump control. Opening an arena uses its game-specific GSAP transition inside the shared native dialog; all existing event fields and image controls remain. Closing restores the source scroll position and button focus. There are no event-specific routes; browser Back/Forward continues between category pages and cleans up any open detail.

Populate sportsAssets[<event-id>].images with approved `{ src, alt }` objects. The first image is the main journey/detail image; remaining images appear in the detail controls. Missing/broken images restore the matching original SVG sport graphic. Cricket currently has four user-supplied photographs; all other Sports arenas retain vector placeholders. See public/images/events/SPORTS_ASSETS.md.

Focused React correctness lint for Sports changes can be run without adding a runtime dependency:

```sh
npm exec --yes --package=@biomejs/biome -- biome lint --only=correctness/noUnusedVariables --only=correctness/noUnusedImports --only=correctness/useExhaustiveDependencies --only=correctness/useJsxKeyInIterable --only=suspicious/noAssignInExpressions --only=suspicious/noDuplicateObjectKeys src/sports src/pages/SportsPage.jsx src/data/sportsAssets.js src/data/sportsJourney.js src/components/EventDialog.jsx
```

Cricket uses four user-supplied photographs from the uploaded ZIP. The first appears on the journey; all four are available through the detail gallery controls. Detail photographs use contain sizing to preserve the complete scene. See public/images/events/cricket/ASSETS.md for provenance.

### Cultural: The Festival Frequency

The dedicated /cultural route is an interactive festival broadcast: The Stage (4 events), The Frame (3), The Playground (6). Switching channels transforms the artwork, composition, typography and event index. Hover/focus previews an event; the first tap opens its accessible detail panel. The Cultural-only signal transition originates at the existing homepage stage and takes approximately 1.2–1.6 seconds. Event facts, image arrays and contact/registration references remain in events.js; pending values are not invented. No external media or new dependencies are required. Run `node src/cultural/channels.test.mjs` to verify every Cultural record is mapped exactly once.
