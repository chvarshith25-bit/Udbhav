import { events } from '../data/events.js';

const definitions = [
  { id:'stage', number:'01', title:'The Stage', line:'Make yourself heard.', kind:'performance', caption:'Voices. Bodies. A room that moves.', words:['FEEL','IT ALL.'], ids:['battle-of-bands','classical-dance','singing-competition','dancing-competition'] },
  { id:'frame', number:'02', title:'The Frame', line:'Change the way we see.', kind:'visual', caption:'Find a story only you can tell.', words:['A NEW','POINT OF VIEW.'], ids:['photography-competition','videography-competition','short-film-competition'] },
  { id:'playground', number:'03', title:'The Playground', line:'Your next move starts here.', kind:'play', caption:'Instinct. Strategy. A little audacity.', words:['MAKE','YOUR MOVE.'], ids:['treasure-hunt','squid-game','bgmi','free-fire','valorant-tournament','ipl-auction'] },
];
export const culturalActs=definitions.map(channel=>({...channel,events:channel.ids.map(id=>events.find(event=>event.id===id&&event.category==='cultural')).filter(Boolean)}));
export const culturalEventCount=culturalActs.reduce((count,channel)=>count+channel.events.length,0);
