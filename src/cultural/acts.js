import { events } from '../data/events.js';

const definitions=[
 {id:'performance',number:'01',title:'Performance Boulevard',short:'Performance',kind:'performance',line:'Follow the sound. Find your people.',sign:'MAKE SOME NOISE',ids:['battle-of-bands','classical-dance','singing-competition','dancing-competition']},
 {id:'creators',number:'02',title:"Creator’s Alley",short:'Creators',kind:'visual',line:'A different story around every corner.',sign:'LOOK A LITTLE CLOSER',ids:['photography-competition','videography-competition','short-film-competition']},
 {id:'challenge',number:'03',title:'Challenge District',short:'Challenge',kind:'play',line:'Take a chance. Make your next move.',sign:'COME OUT & PLAY',ids:['treasure-hunt','squid-game','bgmi','free-fire','valorant-tournament','ipl-auction']},
];
export const culturalDistricts=definitions.map(district=>({...district,events:district.ids.map(id=>events.find(event=>event.id===id&&event.category==='cultural')).filter(Boolean)}));
export const culturalEventCount=culturalDistricts.reduce((count,district)=>count+district.events.length,0);
export const posterDesigns={
 'battle-of-bands':{art:'rhythm',tone:'coral',headline:['BATTLE','OF BANDS'],note:'Turn it up.'},
 'classical-dance':{art:'gesture',tone:'cream',headline:['Classical','Dance'],note:'Every movement, a story.'},
 'singing-competition':{art:'voice',tone:'orange',headline:['SING','YOUR HEART OUT.'],note:'Singing Competition'},
 'dancing-competition':{art:'dance',tone:'lime',headline:['MOVE','THE STREET.'],note:'Freestyle / Techno / Mass'},
 'photography-competition':{art:'frame',tone:'cream',headline:['A NEW','POINT OF VIEW.'],note:'Photography Competition'},
 'videography-competition':{art:'video',tone:'lilac',headline:['LIFE','IN MOTION.'],note:'Videography Competition'},
 'short-film-competition':{art:'film',tone:'night',headline:['SHORT FILM.','BIG FEELING.'],note:'Short Film Competition'},
 'treasure-hunt':{art:'clue',tone:'cream',headline:['FOLLOW','THE CLUE.'],note:'Treasure Hunt'},
 'squid-game':{art:'challenge',tone:'coral',headline:['SQUID','GAME'],note:'Trust your next move.'},
 bgmi:{art:'bracket',tone:'lime',headline:['BGMI'],note:'Bring your squad.'},
 'free-fire':{art:'speed',tone:'orange',headline:['FREE','FIRE'],note:'Make your moment.'},
 'valorant-tournament':{art:'versus',tone:'lilac',headline:['VALORANT'],note:'Tournament'},
 'ipl-auction':{art:'auction',tone:'orange',headline:['IPL','AUCTION'],note:'Your call. Your bid.'},
};
