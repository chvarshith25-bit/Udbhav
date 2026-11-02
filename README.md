# UDHBHAV 2K27

The festival in motion. A responsive multi-page festival experience for Vidya Jyothi Institute of Technology, Hyderabad. Festival: January 28–30, 2027; Annual Day: January 30.

## Develop

Requires Node.js 20.19+ or 22.12+ (verified with Node 24).

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

React 19, Vite 7, Tailwind CSS 4, GSAP + ScrollTrigger, Motion for React, Lucide React. Package versions are locked in package-lock.json. React Router provides client-side navigation; no backend, accounts or WebGL is needed.

## Content

Edit `src/data/events.js` for all event facts. Events support multiple `{ src, alt }` images, two student coordinators, optional date, start/end times, venue and contacts. Local times are IST. Dates use `YYYY-MM-DD`. Missing fields stay `null`; never substitute invented information. Descriptions are draft editorial summaries, not confirmed rules. The programme remains empty until assignments are confirmed.

Event images go in `public/images/events/<event-id>/`; institutional marks go in `public/logos/`. The header uses the supplied VJIT logo, prepared as a WebP asset in public/logos/. Existing AI-generated hero imagery is explicitly labeled as concept art and must not be described as documentary event photography. See `public/images/ASSETS.md`.

## Deployment

Vercel: import this repository, select Vite, build `npm run build`, output `dist`. The committed `vercel.json` sets these defaults. All interactions are browser-local; no environment variables are required. Sites deployment identity lives in `.openai/hosting.json`; preserve it on edits. Never commit credentials or archives.

## Shared development

Canonical GitHub remote: https://github.com/chvarshith25-bit/Udbhav.git. Codex and Antigravity should use this same repository. Read AGENTS.md and PROGRESS.md before editing. Commit on a feature branch, pull/rebase before work, and avoid overwriting collaborators. The Sites source remote is a deployment mirror, not a replacement for GitHub.

See PROJECT_BRIEF.md, DESIGN_SYSTEM.md, PROGRESS.md and NEXT_STEPS.md for decisions, checks and remaining content.

## Routes and transition architecture

The homepage `/` contains only the full-screen hero. `/sports`, `/cultural` and `/technical` render their own page components. Supporting information lives at `/about`, `/schedule`, `/gallery` and `/contact`.

Use `TransitionLink` for internal links. It preserves real hrefs and modified-click behavior, prevents repeated navigation while transitioning, and delegates history to React Router. `src/transitions/PageTransitionProvider.jsx` retains the outgoing route until the GSAP cover is opaque. It mounts the destination underneath, waits for its DOM commit, then removes the cover. Category choreography and timings live in `src/transitions/choreography.js`. Native dialog UI remains lazy loaded; route components are eagerly imported to keep destination preparation deterministic.

Vercel rewrites and `public/_redirects` provide SPA entry handling for direct category URLs. Keep those configurations when changing hosting. Unknown routes and route rendering errors have return-home fallbacks.

## Opening ident

`src/intro/IntroController.jsx` mounts once above the route transition provider. The original 3.2-second GSAP sequence lives in `IntroSequence.js`; the overlay, skip control and lifecycle cleanup live in `FestivalIntro.jsx`. No video, WebGL or audio is downloaded.

Session key: `udbhav:intro:v1`. `started` prevents interruption/remount/refresh replay; `complete` is recorded on finishing or skipping. Reduced motion and direct non-home visits bypass and consume the opening. A new independent browser tab/session can play it again. Storage failures fall back to document memory. For development replay, remove that sessionStorage key and reload the homepage (with reduced motion off).

The homepage mounts underneath immediately. Its usual entrance animation is suppressed only for the mount owned by the opening, so returning home retains its original entrance. The intro aligns its wordmark to the real homepage DOM before handing it over. Skip/Escape, resizing, tab hiding, page departure and motion-preference changes safely finish it. A recovery timer and guarded initialization restore the underlying page if animation setup fails.
