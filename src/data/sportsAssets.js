// Approved event photography only. Populate images with { src, alt } entries.
// The first image is the main photograph; remaining entries appear in details.
export const sportsAssets = {
  basketball: { directory: '/images/events/basketball/', images: [], posters: [] },
  football: { directory: '/images/events/football/', images: [], posters: [] },
  volleyball: { directory: '/images/events/volleyball/', images: [], posters: [] },
  'table-tennis': { directory: '/images/events/table-tennis/', images: [], posters: [] },
  cricket: {
    directory: '/images/events/cricket/',
    images: [
      { src: '/images/events/cricket/cricket-01.webp', alt: 'Two VJIT cricket players in white uniforms greeting each other on the pitch' },
      { src: '/images/events/cricket/cricket-02.webp', alt: 'A VJIT batter playing a shot with fielders and an umpire on the cricket pitch' },
      { src: '/images/events/cricket/cricket-03.webp', alt: 'VJIT cricket players gathered on the pitch between play' },
      { src: '/images/events/cricket/cricket-04.webp', alt: 'VJIT cricket players walking across the pitch with a helmeted batter in the foreground' },
    ],
    posters: [],
  },
  badminton: { directory: '/images/events/badminton/', images: [], posters: [] },
  chess: { directory: '/images/events/chess/', images: [], posters: [] },
  carroms: { directory: '/images/events/carroms/', images: [], posters: [] },
  kabaddi: { directory: '/images/events/kabaddi/', images: [], posters: [] },
};
