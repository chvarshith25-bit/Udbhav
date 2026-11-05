import { events } from '../data/events.js';

const specs=[
 {id:'codeathon',number:'01',name:'The logic core',verb:'Connect the possibilities.',annotation:'A system of precise connections.',config:{modules:[[310,365,0],[600,175,0],[890,365,0],[600,595,0]],core:[0,0,0,1],gantry:[0,0],dome:0,base:0,ring:0}},
 {id:'ideathon',number:'02',name:'The idea generator',verb:'Give an idea room to grow.',annotation:'Separate. Reframe. Make a connection.',config:{modules:[[270,280,-15],[795,180,12],[930,505,17],[350,600,-12]],core:[0,-45,18,.9],gantry:[0,-45],dome:0,base:0,ring:35}},
 {id:'branch-wise-hackathons',number:'03',name:'The build station',verb:'Different minds. One invention.',annotation:'Independent modules, designed to work together.',config:{modules:[[440,305,0],[750,305,0],[440,495,0],[750,495,0]],core:[0,-20,0,.83],gantry:[0,40],dome:0,base:-10,ring:90}},
 {id:'project-expo',number:'04',name:'The innovation gallery',verb:'Make your thinking visible.',annotation:'An original exhibition study. Your ideas come next.',config:{modules:[[390,385,0],[600,240,0],[810,385,0],[600,525,0]],core:[0,-35,0,.93],gantry:[0,-80],dome:.8,base:20,ring:180}},
];
export const technicalModes=specs.map(mode=>({...mode,event:events.find(event=>event.id===mode.id&&event.category==='technical')}));
export function moduleTransform([x,y,r]){return `translate(${x} ${y}) rotate(${r})`}
export function coreTransform([x,y,r,s]){return `translate(${600+x} ${375+y}) rotate(${r}) scale(${s})`}
export function connectionPath(point,modeIndex){const [x,y]=point;return modeIndex===1?`M600 375Q${x} 375 ${x} ${y}`:`M600 375L${x} 375L${x} ${y}`}
