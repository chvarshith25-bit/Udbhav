# UDHBHAV 2K27 — current project brief

## Confirmed information

Vidya Jyothi Institute of Technology, Hyderabad. Festival: January 28–30, 2027. Annual Day: January 30. Twenty-six events across Sports (9), Cultural & Activities (13) and Technical (4). Gaming remains under Cultural & Activities. Individual date assignments, times, venues, coordinators and contact destinations are unconfirmed.

## Experience

Preserve THE FESTIVAL IN MOTION: oversized editorial type, ink/paper/lime colors, original line-based graphics, intentional whitespace and restrained movement. The homepage occupies one desktop viewport; mobile/short screens keep accessible content rather than clipping it. Category pages are distinct React Router routes. Sports is a winding nine-arena journey; Cultural/Technical retain searchable editorial lists. All use accessible reusable event details.

Routes: `/`, `/sports`, `/cultural`, `/technical`, `/about`, `/schedule`, `/gallery`, `/contact`. Category navigation must not become anchor scrolling. Supporting content is preserved on its own routes. Unknown paths and rendering errors have return-home states.

## Opening and navigation

THE CAMPUS TAKEOVER is approved and integrated: a nine-second continuous illustrated festival ground with court, stage and technology pavilion. Floodlights activate, the giant display counts 03/02/01, the whole ground illuminates and the camera moves through the UDHBHAV identity into the unchanged homepage. Preserve the approved scenery, animation keyframes, easing, transitions and timing exactly; it is not a depiction of VJIT's real campus.

No visible intro controls, replay, skip, pause, progress or debugging UI. Automatic first home-entry playback claims `udbhav:intro:v1` at start, before initialization. Refresh, navigation, return home and Back/Forward cannot replay it. Reduced motion and direct category entries bypass/consume the opening. Fail open on initialization errors; restore all homepage styles and access. The separate review entry reuses production code.

GSAP route transitions remain separate: diagonal lime Sports wipe, clay Cultural curtains and periwinkle Technical panels. The previous page remains until covered; the destination commits before reveal. Preserve Back/Forward, duplicate-click protection, native link modifiers, focus and recovery timers.

## Current visual assets

At the user's latest request, the homepage displays the previous golden concert concept artwork and the header displays the previous colored logo reference with a transparent background. The concert is AI-generated, not actual event photography. The references are not proof of official approval. Keep the concept disclosure and accurate provenance.

Gallery/category/event fallbacks remain original procedural artwork. Real photographs, posters, verified logos and video are pending. Site/category references belong in src/data/assets.js; event photographs belong in events.js. Missing or failed sources must show designed fallbacks. Follow public/ASSET_GUIDE.md.

## Remaining launch content

Organizer-approved event descriptions/rules, schedules, venues, both student coordinators, registration/WhatsApp links, phone/email contacts, real imagery, official logo approval and confirmed partners. Do not invent performers, sponsors, institutional claims or destinations. Keep unconfirmed values null and show coming-soon states.

## Sports: THE ROAD TO GLORY

Sports alone is redesigned as an interactive journey: Basketball, Football, Volleyball, Table Tennis, Cricket, Badminton, Chess, Carroms and Kabaddi. A continuous responsive SVG passes through measured waypoint positions, illuminates with scroll progress and tracks the active arena. Alternating desktop chapters become a simplified mobile side rail. Distinct sport graphics and roughly 0.85–0.95-second opening effects lead into a fullscreen native detail dialog. Reduced motion reveals details immediately. Close restores source scroll/focus; route changes clean up the modal. No event-specific routes are introduced. Existing homepage, intro, category transition controller and Cultural/Technical layouts remain unchanged.

## Cricket media

Four user-supplied Cricket photos are installed through sportsAssets.js. The first is the arena/main image; all four are available in the detail gallery. Remaining arenas retain their procedural placeholders. The provided photos do not establish individual event dates or a festival-year claim.
