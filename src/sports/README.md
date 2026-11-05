# Sports — The Arena Takeover

The `/sports` route uses one original SVG arena with nine directly selectable configurations. `arenaData.js` holds only graphic direction and references canonical `events.js` records. Dates, venues, people, contacts and registration must never be inferred from profile geometry or order.

- `ArenaGraphic`: memoized original court/board geometry and equipment. Main floor uses one morph-compatible path; shared detail and route copies are static selected profiles.
- `useArenaTakeover`: finite selection timeline, interruption cleanup, native reduced-motion/error settlement. Catch inside GSAP context callbacks and revert outside them to avoid leaking GSAP context ownership.
- `ArenaDetail` / `ArenaOpening`: native modal and nine short covers. Close remains accessible during motion; content visibility/inert state, timers, scroll and focus are restored on interruption. Details retain the selected game.
- `SportsTransition` / `sportsTransition`: homepage-zone-origin floodlight entry and matching floor handoff. Shared provider only mounts/delegates; other route choreography is protected.
- `arena-takeover.css` / `sports-transition.css`: scoped Sports presentation. Mobile uses three full-name selector columns and a readable arena, with natural scrolling.

## Photographs

Add approved `{ src, alt }` records to `sportsAssets[eventId].images` in `src/data/sportsAssets.js`; event records consume that centralized map. First image is the main detail photograph; others are gallery images. Missing/broken sources restore the matching vector study. Supplied Cricket images remain intact and are not presented as official UDHBHAV 2K27 coverage. The main arena always works independently of photos. No component changes should be needed to add assets.

## Legacy compatibility

`useJourneyPath`, `SportGraphic`, `SportImage`, `SportOpening`, `sportsJourney.js` and the previous Sports stylesheet are retained for compatibility/history, including shared `EventDialog` imports. The new Sports route does not use the winding path, chapters or jump controls. Remove legacy modules only after independently checking every remaining consumer; do not alter unrelated dialogs as part of Sports styling.

## Verification

Run `node src/sports/arenaData.test.mjs`, `npm run check` and `npm run build`. Check all nine configurations, rapid selection, detail/Escape/early Close, selected-state/focus/scroll return, missing-image recovery, reduced motion and Back/Forward. Test 1920×1080, 1440×900, 1366×768, 820×900, 390×844 and 360×844, plus landscape rotation. Check protected-file hashes when integrating shared transitions. Physical devices and Safari/Firefox remain outstanding.
