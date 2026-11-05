# The Invention Engine

The Technical page uses four independent event modes from the canonical `src/data/events.js` records. `modes.js` stores only the concept labels and assembly configurations. `InventionArt` is one persistent SVG: module, core, gantry, rotor, base and display-envelope nodes move together. A scoped GSAP owner interrupts the old timeline and starts from current attributes; it never replaces the object when selecting a mode. Reduced motion and initialization failure apply the selected configuration directly. Catch animation errors inside GSAP context callbacks before reverting outside them, so a failed callback cannot retain a global context or capture the route controller’s later cleanup.

`TechnicalTransition` reads the existing homepage pavilion bounds, draws a blueprint and aligns the same assembly with the destination canvas. `TechnicalOpening` owns only its cover and content inert state, leaving the modal Close button available. The native detail owns scrolling, focus containment and source-position restoration.

## Real photographs and confirmed information

No event photographs are installed. Add approved files under:

- `public/images/events/codeathon/`
- `public/images/events/ideathon/`
- `public/images/events/branch-wise-hackathons/`
- `public/images/events/project-expo/`

Reference them through the corresponding canonical event's `images` array in `src/data/events.js`, using `{ src, alt }` objects. The first image is the main photograph; later entries form the gallery. Use accurate alt text and optimized WebP/AVIF/JPEG assets. Do not alter the Sports image mappings. Missing/failed images retain the original assembly study. No component changes are required when the event arrays are populated.

The detail also accepts organizer-supplied optional `rules` (string or string array), `eligibility` (string), and `branchTracks` (string array for Branch-wise Hackathons) on that same canonical event record. Keep unconfirmed fields absent/null. Existing date/time/venue, both coordinator slots and WhatsApp/phone/email fields feed the native actions directly. Never invent branch names, rules or contact destinations.

Run `node src/technical/modes.test.mjs`, `npm run check` and `npm run build`. Preserve homepage, intro, shared branding, Sports, Cultural Festival Street, sponsors and all unrelated route choreography.
