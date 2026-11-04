import { events } from '../data/events.js';

const definitions = [
  { id: 'performance', number: '01', title: 'Performance', line: 'Voices rise. The room moves.', kind: 'performance', ids: ['battle-of-bands','singing-competition','classical-dance','dancing-competition'] },
  { id: 'visual-stories', number: '02', title: 'Visual stories', line: 'See a moment. Make it stay.', kind: 'visual', ids: ['photography-competition','videography-competition','short-film-competition'] },
  { id: 'festival-play', number: '03', title: 'Festival play', line: 'Follow the thrill. Play your part.', kind: 'play', ids: ['treasure-hunt','squid-game','bgmi','free-fire','valorant-tournament','ipl-auction'] },
];
export const culturalActs = definitions.map(act => ({ ...act, events: act.ids.map(id => events.find(event => event.id === id && event.category === 'cultural')).filter(Boolean) }));
export const culturalEventCount = culturalActs.reduce((count, act) => count + act.events.length, 0);
