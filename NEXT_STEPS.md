# Next steps

1. Obtain verified official logo files, real festival/event photography and approved posters. Replace the current concert concept art and logo display reference through src/data/assets.js; retain correct disclosure/provenance until approved replacements exist. Follow public/ASSET_GUIDE.md.
2. Confirm event descriptions/rules, date assignments, times, venues, both student coordinators and registration/contact details. Populate events.js; keep unknown values null. Verify destinations before enabling actions.
3. Add confirmed schedule entries and the Annual Day programme. Never infer dates/times from category order. Add only approved sponsors/partners.
4. Review Safari/Firefox, screen readers and physical iOS/Android devices, including mid-range motion performance. Current browser verification used Chromium on Linux.
5. Preserve the single-screen homepage and dedicated category routes. Test direct reloads, Back/Forward, rapid clicks, keyboard focus and interrupted transitions when changing navigation.
6. Keep the opening eight seconds and independent of images/video/audio. Test new-session playback, refresh suppression, skip, reduced motion, interruption recovery and category-return behavior after intro changes.
7. Codex and Antigravity should fetch the same GitHub repository before work and update the current handoff documents afterward. Preserve Sites identity and its separate deployment mirror.
8. Vercel deployment is ready if requested: Vite build to dist with committed SPA rewrites. Preserve owner-private access on Sites until the owner requests otherwise.

Optional sound is not implemented. Add it only if requested, with an explicit user-activated control.
