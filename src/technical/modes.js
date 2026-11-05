import { events } from '../data/events.js';

const objects=[
 {id:'codeathon',number:'01',kind:'laptop',tilt:-4,name:'The coding desk',cue:'Solve it. Build it. Make it work.'},
 {id:'ideathon',number:'02',kind:'notes',tilt:5,name:'The idea corner',cue:'A small thought can start something big.'},
 {id:'branch-wise-hackathons',number:'03',kind:'drawings',tilt:-3,name:'The maker’s bench',cue:'Different skills. Something made together.'},
 {id:'project-expo',number:'04',kind:'exhibit',tilt:3,name:'The showcase',cue:'Give your work a place to be seen.'},
];
export const technicalModes=objects.map(object=>({...object,event:events.find(event=>event.id===object.id&&event.category==='technical')}));
