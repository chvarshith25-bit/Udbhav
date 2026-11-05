# The Build Room

Four independent canonical Technical events map to a laptop, notebook/sticky notes, engineering drawings/materials and an exhibition board/concept model. `modes.js` stores only object art direction and canonical event references. `WorkObject` supplies reusable original SVG illustrations; `Worktable` shares the page and route-entry geometry without generic cards. CSS owns resting tilt and GSAP owns separate inner lift/art nodes. Mobile is a deliberately vertical workbench.

Pointer previews respond to actual movement; scroll under a stationary pointer cannot override keyboard focus. Preview captions reserve their full height. `TechnicalOpening` measures actual clicked viewport bounds, untransformed SVG size and tilt, then aligns that illustration with the native detail’s photo study. It cancels RAF/timers/animations and restores inert state on early Close. Catch GSAP errors inside context callbacks before reverting outside them, preventing leaked global animation context. Native details preserve event fields, focus containment and source position; delayed focus return must not steal a later user choice.

## Real photographs and confirmed information

No event photographs are installed. Add approved files under:

- `public/images/events/codeathon/`
- `public/images/events/ideathon/`
- `public/images/events/branch-wise-hackathons/`
- `public/images/events/project-expo/`

Reference them through the corresponding canonical event's `images` array in `src/data/events.js`, using `{ src, alt }` objects. The first image is the main photograph; later entries form the gallery. Use accurate alt text and optimized WebP/AVIF/JPEG assets. Do not alter the Sports image mappings. Missing/failed images retain the original workspace illustration. No component changes are required when the event arrays are populated.

The detail also accepts organizer-supplied optional `rules` (string or string array), `eligibility` (string), and `branchTracks` (string array for Branch-wise Hackathons) on that same canonical event record. Keep unconfirmed fields absent/null. Existing date/time/venue, both coordinator slots and WhatsApp/phone/email fields feed the native actions directly. Never invent branch names, rules or contact destinations.

Run `node src/technical/modes.test.mjs`, `npm run check` and `npm run build`. Preserve homepage, intro, shared branding, Sports, Cultural Festival Street, sponsors and all unrelated route choreography.
