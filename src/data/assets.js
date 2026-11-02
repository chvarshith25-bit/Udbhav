// Display references restored at the user's request; not verified official assets.
// Future image shape: { src: '/images/...', alt: 'Accurate description' }.
export const siteAssets = {
  institutionLogo: {
    src: '/logos/vjit-logo.webp',
    alt: 'Vidya Jyothi Institute of Technology — previously prepared logo reference',
    whiteBackgroundMask: true,
  },
  hero: {
    src: '/images/festival-atmosphere.webp',
    srcSet: '/images/festival-atmosphere-small.webp 900w, /images/festival-atmosphere.webp 1672w',
    sizes: '100vw',
    alt: 'AI-generated concert concept art with silhouetted crowds and golden lights; not an actual UDHBHAV event photograph',
  },
  gallery: [],
};
export const categoryAssets = {
  sports: { photos: [], posters: [] },
  cultural: { photos: [], posters: [] },
  technical: { photos: [], posters: [] },
};
// Individual event images remain in events.js; never infer official imagery.
