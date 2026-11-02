# Next steps

1. Obtain official festival photography. Replace procedural placeholders only with approved media, and supply accurate alt text and provenance.
2. Confirm event descriptions/rules, dates, times, venues and both student coordinators. Populate src/data/events.js; retain nulls for unknown facts. Add multiple `{ src, alt }` photos per event as available.
3. Supply and verify official WhatsApp registration links, phone numbers and email addresses before enabling contact actions. There is no live registration backend in this static site.
4. Populate festival.schedule with confirmed event assignments and publish the Annual Day programme when approved. Do not infer a day from category ordering.
5. Add only confirmed sponsors/partners and approved logos; replace the announcement state when ready.
6. Review Safari/Firefox, screen-reader behavior, real devices and normal-motion performance. Confirm imagery, copy and accessibility with organizers before a public launch.
7. Both Codex and Antigravity should pull from the canonical GitHub repository before changes and update the six handoff documents after each session. Preserve the Sites identity and deployment mirror separately.
8. Deploy with Vercel from the same GitHub repository if desired; Vite configuration is included. Preserve private access on Sites until the owner requests a public audience.

- The header currently shows the restored logo reference, with a logo-pending text fallback. Add an organizer-supplied official logo through siteAssets.institutionLogo when available.

- Keep `/` a single-screen hero. Maintain dedicated category routes and SPA fallback rules.
- Test transition changes with both motion preferences, direct reloads, rapid clicks, and interrupted browser Back/Forward. Review the cinematic choreography on Safari/Firefox and physical mid-range phones.

- Review the opening ident on physical iOS/Android devices and Safari/Firefox. Keep it eight seconds, preserve skip/reduced-motion behavior and test session refresh, direct category URLs and interrupted playback whenever changing it.
- Optional audio is intentionally not implemented; introduce sound only with an explicit user-activated control if requested later.

- Obtain the official logo, event photographs, posters and any approved video. Nothing is currently assumed available. Populate src/data/assets.js and individual event images; follow public/ASSET_GUIDE.md. Do not substitute unrelated or generated event photography.

- The previous concert concept artwork and colored logo reference have been restored for display at the user’s request. Replace them with verified official assets when available; retain accurate provenance and concept-art disclosure until then.
