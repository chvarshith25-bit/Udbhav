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
| `/sports` | THE ARENA TAKEOVER: one transforming arena, nine directly selectable sports and sport-specific native details |
| `/cultural` | Thirteen cultural/activity events, including gaming/strategy |
| `/technical` | THE BUILD ROOM: four tactile workspace objects opening independent competition details |
| `/about` | Festival introduction |
| `/schedule` | Confirmed festival dates, calendar export and Annual Day highlight |
| `/gallery` | Procedural placeholder awaiting real photography |
| `/contact` | Registration/contact and partner announcement states |

THE CAMPUS TAKEOVER is the approved nine-second opening: one night-time festival ground, synchronized court/stage/pavilion floodlights, a giant 03/02/01 countdown, full-ground illumination and the UDHBHAV identity moving seamlessly into the homepage. The approved SVG scenery, keyframes, easing and timing are preserved. It is original illustration, not VJIT's real campus layout.

There are no playback controls or replay options. On the first home entry in a tab session, the intro starts automatically and marks `udbhav:intro:v1` complete **before** animation initialization. Refreshing during or after playback cannot restart it. Category navigation, home return and Back/Forward do not replay it. Direct non-home entries and reduced motion bypass and consume the opening. Normal playback runs uninterrupted; resize preserves the playhead. Initialization failure restores the homepage immediately; stalled playback has recovery. GSAP cleanup restores styles and unlocks homepage access/focus on completion. The review entry under prototypes/campus-takeover uses this same implementation.

Run session regression tests with `node src/intro/introSession.test.mjs`. Browser verification covers playback, controls absence, session refresh/history/navigation, mobile rotation, reduced motion and initialization failure.

Category navigation uses real React Router URLs and distinct GSAP transitions: Sports-zone floodlight/directional arena reveal, Cultural stage-origin festival-banner reveal and Technical pavilion-to-overhead-workspace reveal. Use TransitionLink for internal links. The old route stays mounted until covered; the new route commits before uncovering. Modified clicks, Back/Forward, heading focus and error recovery are preserved.

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
- `src/data/`: canonical event facts and centralized media references.
- `src/sports/`: nine arena configurations, persistent court/board SVG, scoped selection motion, native details and Sports-only route choreography.
- `src/styles/`, `src/animations/`: shared tokens, responsive layouts and page motion.
- `public/`: local assets, reserved official-asset folders and hosting redirects.
- `scripts/check-events.mjs`: event-data integrity checks.
- `docs/SESSION_HISTORY.md`: historical implementation notes; PROGRESS.md is the current snapshot.

## Deployment and collaboration

Vercel: import the GitHub repository; build `npm run build`, output `dist`. vercel.json and public/_redirects preserve direct-route SPA entry handling. Sites identity is tracked in .openai/hosting.json; preserve it. dist/ and node_modules/ are generated and ignored. Never commit credentials or deployment archives.

Codex and Antigravity use the same GitHub repository. Read AGENTS.md and the project documents before editing, fetch collaborator changes, avoid force pushes, and update progress/next steps after each session. The Sites source repository is a separate deployment mirror. The application source, assets and configuration in this checkout are the current implementation.

## Sports — The Arena Takeover

All nine sports are directly selectable from one arena-wayfinding index. Hover/focus previews a cue; click transforms the same floor, court/board geometry, equipment, typography and information. Mobile has a full-name three-column selector and a purpose-built arena below it. Explore opens native details through a short sport-specific cover. Close restores the active sport, source scroll and focus. Browser Back/Forward continues between routes; no event routes or forced sequence are introduced. Entry expands from the homepage Sports zone through a floodlight sweep into the arena (roughly 1.4 seconds).

Populate sportsAssets[<event-id>].images with approved `{ src, alt }` objects. Main/additional detail images retain contain sizing; missing/broken media restores the matching original SVG study. Cricket retains four previously supplied photographs, without claiming official event coverage. The main arena uses procedural graphics independently of photographs. See src/sports/README.md and public/images/events/cricket/ASSETS.md.

Checks: `node src/sports/arenaData.test.mjs`, `npm run check`, `npm run build`. Focused Biome React/accessibility lint runs against the new Sports files without adding dependencies. Legacy journey helpers remain for compatibility but are not consumed by the new Sports page.

### Cultural: The Festival Street

The /cultural route is one original illustrated festival street: Performance Boulevard (4 events), Creator’s Alley (3), Challenge District (6). Angled wayfinding signs move between districts, transforming architecture accents, signage, lighting and poster arrangements in roughly 0.85 seconds. Every event has an original interactive poster and a visible directory entry. Selecting either opens its fullscreen native detail; close restores the same district, position and focus. The Cultural-only entry transition expands festival banners from the existing homepage stage (roughly 1.49 seconds of timeline animation). Event facts, photos and contact/registration references remain centralized in events.js; no missing values are invented. Run `node src/cultural/districts.test.mjs` to verify every record belongs to exactly one district. No new dependencies, external media or real-campus geography claims.

### Technical: The Build Room

The Technical page is an original overhead student-maker worktable. A laptop opens Codeathon, notes/sketches open Ideathon, drawings/model materials open Branch-wise Hackathons, and an exhibition board/concept model opens Project Expo. Native object buttons lift/react on hover or focus, reveal descriptions in reserved captions and open details from the clicked object’s actual position/scale. Mobile becomes a vertical workbench with full-size objects. The Technical-only entry expands from the existing pavilion into a lamp-lit overhead table (roughly 1.41 seconds plus route commit). Details preserve selected workspace state, photo galleries, optional confirmed rules/eligibility/tracks and existing contacts/registration. No missing facts, real facilities, student prototypes or photographs are invented. See src/technical/README.md.
