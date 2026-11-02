# Next steps

1. Obtain real festival photography. Replace concept imagery, update alt text and provenance, and only remove concept-art disclosures once imagery is real and approved.
2. Confirm event descriptions/rules, dates, times, venues and both student coordinators. Populate src/data/events.js; retain nulls for unknown facts. Add multiple `{ src, alt }` photos per event as available.
3. Supply and verify official WhatsApp registration links, phone numbers and email addresses before enabling contact actions. There is no live registration backend in this static site.
4. Populate festival.schedule with confirmed event assignments and publish the Annual Day programme when approved. Do not infer a day from category ordering.
5. Add only confirmed sponsors/partners and approved logos; replace the announcement state when ready.
6. Review Safari/Firefox, screen-reader behavior, real devices and normal-motion performance. Confirm imagery, copy and accessibility with organizers before a public launch.
7. Both Codex and Antigravity should pull from the canonical GitHub repository before changes and update the six handoff documents after each session. Preserve the Sites identity and deployment mirror separately.
8. Deploy with Vercel from the same GitHub repository if desired; Vite configuration is included. Preserve private access on Sites until the owner requests a public audience.

- The header now preserves original logo colors with a transparent background. Prefer an approved transparent vector lockup if one becomes available.

- Keep `/` a single-screen hero. Maintain dedicated category routes and SPA fallback rules.
- Test transition changes with both motion preferences, direct reloads, rapid clicks, and interrupted browser Back/Forward. Review the cinematic choreography on Safari/Firefox and physical mid-range phones.

- Review the opening ident on physical iOS/Android devices and Safari/Firefox. Keep it 2.5–3.5 seconds, preserve skip/reduced-motion behavior and test session refresh, direct category URLs and interrupted playback whenever changing it.
- Optional audio is intentionally not implemented; introduce sound only with an explicit user-activated control if requested later.
