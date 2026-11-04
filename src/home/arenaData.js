import { categories, events } from '../data/events';

const entrances = {
  sports: { venue: 'The arena', invitation: 'Bring your game.', accent: '#d7f34d' },
  cultural: { venue: 'The main stage', invitation: 'Own the spotlight.', accent: '#dbad91' },
  technical: { venue: 'The innovation pavilion', invitation: 'Make what’s next.', accent: '#b8c7ec' },
};

export const arenaZones = categories.map(category => ({
  ...category,
  ...entrances[category.id],
  eventNames: events.filter(event => event.category === category.id).slice(0, 3).map(event => event.title),
}));

export const arenaEventCount = events.length;
