# Asset handoff

## Current display assets

The homepage uses festival-atmosphere.webp and its responsive small variant: previous AI-generated golden concert concept art, not an actual UDHBHAV photograph. The header uses the previous prepared logo reference at logos/vjit-logo.webp, with white background masked away. These were restored at the user's request; no official approval is inferred. Keep concept disclosure and accurate alt text.

All other gallery/category/event visuals are original SVG/CSS placeholders. No verified event photos, posters or video are currently installed.

## Where to add approved assets

| Directory | Central reference |
| --- | --- |
| `logos/` | siteAssets.institutionLogo in src/data/assets.js |
| `images/` | siteAssets.hero |
| `images/categories/<category>/` | categoryAssets[category].photos |
| `images/events/<event-id>/` | matching event.images in src/data/events.js |
| `images/gallery/` | siteAssets.gallery; current feature uses its first entry |
| `posters/<event-id>/` | category poster slots reserved for future presentation |
| `videos/` | reserved; no video is currently loaded or required |

Images use `{ src: '/images/...', alt: 'Accurate description' }`. Hero images may also provide srcSet and sizes. Unfilled slots remain null/empty. The current logo reference uses whiteBackgroundMask for its 1000×355 white-backed artwork; omit that option for an approved transparent logo.

AssetVisual restores the designed fallback if a source fails. Preserve existing image regions/aspect ratios, test mobile crops and optimize formats/dimensions. Do not represent unrelated imagery as real festival coverage. The eight-second opening itself reads no asset references and remains functional with images blocked.
