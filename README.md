# UDHBHAV 2K27

The festival in motion. A responsive one-page festival experience for Vidya Jyothi Institute of Technology, Hyderabad. Festival: January 28–30, 2027; Annual Day: January 30.

## Develop

Requires Node.js 20.19+ or 22.12+ (verified with Node 24).

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

React 19, Vite 7, Tailwind CSS 4, GSAP + ScrollTrigger, Motion for React, Lucide React. Package versions are locked in package-lock.json. No router, backend, accounts or WebGL is needed.

## Content

Edit `src/data/events.js` for all event facts. Events support multiple `{ src, alt }` images, two student coordinators, optional date, start/end times, venue and contacts. Local times are IST. Dates use `YYYY-MM-DD`. Missing fields stay `null`; never substitute invented information. Descriptions are draft editorial summaries, not confirmed rules. The programme remains empty until assignments are confirmed.

Event images go in `public/images/events/<event-id>/`; institutional marks go in `public/logos/`. The VJIT header is a typographic fallback, not an official logo. Existing AI-generated hero imagery is explicitly labeled as concept art and must not be described as documentary event photography. See `public/images/ASSETS.md`.

## Deployment

Vercel: import this repository, select Vite, build `npm run build`, output `dist`. The committed `vercel.json` sets these defaults. All interactions are browser-local; no environment variables are required. Sites deployment identity lives in `.openai/hosting.json`; preserve it on edits. Never commit credentials or archives.

## Shared development

Canonical GitHub remote: https://github.com/chvarshith25-bit/Udbhav.git. Codex and Antigravity should use this same repository. Read AGENTS.md and PROGRESS.md before editing. Commit on a feature branch, pull/rebase before work, and avoid overwriting collaborators. The Sites source remote is a deployment mirror, not a replacement for GitHub.

See PROJECT_BRIEF.md, DESIGN_SYSTEM.md, PROGRESS.md and NEXT_STEPS.md for decisions, checks and remaining content.
