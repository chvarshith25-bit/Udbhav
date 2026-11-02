# UDHBHAV 2K27 — project brief

## Confirmed facts

Vidya Jyothi Institute of Technology, Hyderabad. Festival dates: January 28–30, 2027. Annual Day: January 30. Three primary categories: Sports (9 events), Cultural & Activities (13), Technical (4). Gaming remains a Cultural subgroup. Event assignments, times, venues and contacts remain unconfirmed.

## Experience and routes

Preserve THE FESTIVAL IN MOTION: editorial typography, original procedural vector studies, ink/paper/lime palette and restrained motion. The homepage is a single-screen invitation, not a long landing page.

- `/`: full-viewport hero, dates, VJIT logo and category entry links. No category lists or supporting sections below it. Mobile/short screens can scroll when necessary to keep content accessible.
- `/sports`, `/cultural`, `/technical`: separate React page components; category-specific artwork, searchable event list and reusable event dialog.
- `/about`, `/schedule`, `/gallery`, `/contact`: retained festival information on dedicated pages. Schedule includes Annual Day; contact includes partner announcement state.
- Unknown paths have an accessible return-home state.

## Navigation and transition contract

React Router owns history and real URLs. A GSAP overlay covers the old page before replacing the route DOM, then uncovers the committed destination. Sports uses a diagonal lime wipe; Cultural uses opposing clay curtains; Technical uses staggered periwinkle panels. Reduced motion navigates immediately without choreography. The same controller handles Back/Forward. No category anchor scrolling or category pages below the homepage.

## Publication readiness

Static Vite deployment with SPA rewrites for direct URLs. Approved official photography and detailed organizer content are still pending. No official visual assets are supplied. Procedural artwork is labeled as a visual study; the VJIT slot is an explicit logo-pending text placeholder. No invented performers, sponsors, contact destinations, schedules or institutional claims.

## First-session opening

The homepage optionally begins with THE BIRTH OF UDHBHAV, an original eight-second GSAP ident. It uses a spark and three converging energy lines to reveal the festival wordmark and align it into the existing hero. It plays once per tab session, has Skip/Escape controls, respects reduced motion and never delays direct category visits. This is an added experience; existing category pages and their transitions are preserved.

## Asset availability update

No official images, posters, videos or logos are assumed. Previous generated imagery and the prepared logo are removed from the published tree. All future approved asset references are centralized; visual fallbacks retain the same layout and color system. The ident is independent of all external imagery.
