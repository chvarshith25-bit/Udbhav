import { events } from './events.js';
const chapters = [
  ['basketball','COURT ENERGY','Rise above the ordinary.','Own the air.'],
  ['football','FORWARD TOGETHER','Every great move starts with a little space.','Find your opening.'],
  ['volleyball','ABOVE THE LINE','Read the play. Rise to the moment.','Meet it at the net.'],
  ['table-tennis','PURE PRECISION','A split second. A perfectly placed response.','Make every edge count.'],
  ['cricket','THE LONG GAME','Patience meets the perfect moment to strike.','Write your innings.'],
  ['badminton','LIGHTNING IN FLIGHT','Float into position. Move with intent.','Chase the shuttle.'],
  ['chess','MIND OVER MOMENT','A quiet board. A world of possibilities.','See the next move.'],
  ['carroms','ANGLES & INSTINCT','Find the line. Trust the touch.','Play your angle.'],
  ['kabaddi','HOLD YOUR GROUND','Courage crosses the line. Teamwork brings it home.','Leave it all on the court.'],
];
export const sportsJourney = chapters.map(([id, label, story, motto], index) => ({
  id, label, story, motto, number: String(index + 1).padStart(2,'0'),
  event: events.find(event => event.id === id),
}));
