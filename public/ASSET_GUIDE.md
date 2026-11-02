# Official asset handoff

No verified official photographs, posters, video or logos are assumed. At the user’s request, the previous AI-generated concert concept image is restored in the hero and the previous prepared logo reference is restored in the header. These display references do not establish official provenance. Fallback artwork remains original SVG/CSS.

- `logos/`: official VJIT or festival logo, once supplied. Set `siteAssets.institutionLogo` in src/data/assets.js.
- `images/`: approved hero image; set `siteAssets.hero`.
- `images/categories/<category>/`: category photos; set categoryAssets[category].photos.
- `images/events/<event-id>/`: individual photos; populate that event's images in src/data/events.js.
- `images/gallery/`: real festival gallery photos; populate siteAssets.gallery. The current gallery feature uses its first entry.
- `posters/<event-id>/`: approved posters; category poster arrays are reserved for future presentation.
- `videos/`: optional approved videos. No video is currently loaded or required.

Images use `{ src: '/images/...', alt: 'Accurate description' }`. Keep null/empty arrays until approved assets exist. AssetVisual renders the designed fallback if an image fails. Preserve existing crop/aspect ratios, test mobile crops, optimize dimensions and formats, and never label unrelated images as real festival coverage. The opening animation never reads this manifest and is independent of imagery.
