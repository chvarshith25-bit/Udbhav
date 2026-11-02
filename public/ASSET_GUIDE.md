# Official asset handoff

No official photographs, posters, video or logos are currently supplied. All visible fallback artwork is original SVG/CSS, not event photography or an institutional logo.

- `logos/`: official VJIT or festival logo, once supplied. Set `siteAssets.institutionLogo` in src/data/assets.js.
- `images/`: approved hero image; set `siteAssets.hero`.
- `images/categories/<category>/`: category photos; set categoryAssets[category].photos.
- `images/events/<event-id>/`: individual photos; populate that event's images in src/data/events.js.
- `images/gallery/`: real festival gallery photos; populate siteAssets.gallery. The current gallery feature uses its first entry.
- `posters/<event-id>/`: approved posters; category poster arrays are reserved for future presentation.
- `videos/`: optional approved videos. No video is currently loaded or required.

Images use `{ src: '/images/...', alt: 'Accurate description' }`. Keep null/empty arrays until approved assets exist. AssetVisual renders the designed fallback if an image fails. Preserve existing crop/aspect ratios, test mobile crops, optimize dimensions and formats, and never label unrelated images as real festival coverage. The opening animation never reads this manifest and is independent of imagery.
