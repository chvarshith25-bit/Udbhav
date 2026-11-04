# UDHBHAV 2K27 — current project brief

## Confirmed information

Vidya Jyothi Institute of Technology, Hyderabad. Festival: January 28–30, 2027. Annual Day: January 30. Twenty-six events across Sports (9), Cultural & Activities (13) and Technical (4). Gaming remains under Cultural & Activities. Individual date assignments, times, venues, coordinators and contact destinations are unconfirmed.

## Experience

Preserve THE FESTIVAL IN MOTION: oversized editorial type, ink/paper/lime colors, original line-based graphics, intentional whitespace and restrained movement. The homepage is THE FESTIVAL IS YOURS: one original interactive SVG festival ground, three spatial entrances, finite category lighting, real event-name previews and a secondary native Sponsors overlay. It occupies one viewport at common desktop/mobile sizes; exceptional short/zoomed screens retain accessible content rather than clipping it. Mobile uses distinct vector signs rather than essential map interaction. Sponsors data stays empty until approved records are supplied. Category pages are distinct React Router routes. Sports is a winding nine-arena journey; Cultural is THE STAGE COMES ALIVE: warm theatrical scenery, three curated acts and an interactive typographic playbill with poster previews and its own accessible native event detail. Technical retains its searchable editorial list.

Routes: `/`, `/sports`, `/cultural`, `/technical`, `/about`, `/schedule`, `/gallery`, `/contact`. Category navigation must not become anchor scrolling. Supporting content is preserved on its own routes. Unknown paths and rendering errors have return-home states.

## Opening and navigation

THE CAMPUS TAKEOVER is approved and integrated: a nine-second continuous illustrated festival ground with court, stage and technology pavilion. Floodlights activate, the giant display counts 03/02/01, the whole ground illuminates and the camera moves through the UDHBHAV identity into the current homepage. Preserve the approved scenery, animation keyframes, easing, transitions and timing exactly; it is not a depiction of VJIT's real campus.

No visible intro controls, replay, skip, pause, progress or debugging UI. Automatic first home-entry playback claims `udbhav:intro:v1` at start, before initialization. Refresh, navigation, return home and Back/Forward cannot replay it. Reduced motion and direct category entries bypass/consume the opening. Fail open on initialization errors; restore all homepage styles and access. The separate review entry reuses production code.

GSAP route transitions remain separate: diagonal lime Sports wipe, warm spotlights, rhythmic wave, performance graphic, expanded Cultural typography and fabric curtains and periwinkle Technical panels. The previous page remains until covered; the destination commits before reveal. Preserve Back/Forward, duplicate-click protection, native link modifiers, focus and recovery timers.

## Current visual assets

The homepage now uses original SVG festival scenery. The existing header displays the unchanged colored logo reference with a transparent background, in the same position/proportions/style. The previous golden concert concept artwork remains in the asset registry; it is AI-generated, not event photography or official approval. Preserve provenance when reusing it. No sponsor names or logos have been supplied.

Gallery/category/event fallbacks remain original procedural artwork. Real photographs, posters, verified logos and video are pending. Site/category references belong in src/data/assets.js; event photographs belong in events.js. Missing or failed sources must show designed fallbacks. Follow public/ASSET_GUIDE.md.

## Remaining launch content

Organizer-approved event descriptions/rules, schedules, venues, both student coordinators, registration/WhatsApp links, phone/email contacts, real imagery, official logo approval and confirmed partners. Do not invent performers, sponsors, institutional claims or destinations. Keep unconfirmed values null and show coming-soon states.

## Sports: THE ROAD TO GLORY

Sports alone is redesigned as an interactive journey: Basketball, Football, Volleyball, Table Tennis, Cricket, Badminton, Chess, Carroms and Kabaddi. A continuous responsive SVG passes through measured waypoint positions, illuminates with scroll progress and tracks the active arena. Alternating desktop chapters become a simplified mobile side rail. Distinct sport graphics and roughly 0.85–0.95-second opening effects lead into a fullscreen native detail dialog. Reduced motion reveals details immediately. Close restores source scroll/focus; route changes clean up the modal. No event-specific routes are introduced. Existing homepage, intro, category transition controller and Technical layouts remain unchanged.

## Cricket media

Four user-supplied Cricket photos are installed through sportsAssets.js. The first is the arena/main image; all four are available in the detail gallery. Remaining arenas retain their procedural placeholders. The provided photos do not establish individual event dates or a festival-year claim.
