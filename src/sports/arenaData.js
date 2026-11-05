import { events } from '../data/events.js';

const profiles=[
 ['basketball',['BASKET','BALL'],'Own the air.','#d7f34d','#65503b',-9,[220,235,560,300,3,3]],
 ['football',['FOOTBALL'],'Find your opening.','#b5d28b','#304c3d',10,[210,235,580,330,3,3]],
 ['volleyball',['VOLLEY','BALL'],'Meet it at the net.','#e6b29b','#5a4942',-8,[200,250,600,300,3,3]],
 ['table-tennis',['TABLE','TENNIS'],'Make every edge count.','#9fcbd0','#284d58',8,[230,250,540,300,3,3]],
 ['cricket',['CRICKET'],'Write your innings.','#c4cf86','#344b3c',-7,[200,180,600,380,300,190]],
 ['badminton',['BAD','MINTON'],'Chase the shuttle.','#b6d0c5','#344f49',9,[200,252,600,274,3,3]],
 ['chess',['CHESS'],'See the next move.','#e6dfc9','#bcb39b',-5,[325,215,350,350,3,3]],
 ['carroms',['CARROMS'],'Play your angle.','#d4c195','#cbb58c',7,[310,195,380,380,16,16]],
 ['kabaddi',['KABADDI'],'Hold your ground.','#e6ae93','#554039',-8,[240,190,520,400,3,3]],
];
export const arenaSports=profiles.map(([id,words,cue,accent,fill,angle,surface],index)=>({id,words,cue,accent,fill,angle,surface,number:String(index+1).padStart(2,'0'),event:events.find(event=>event.id===id&&event.category==='sports')}));
export const arenaById=Object.fromEntries(arenaSports.map(sport=>[sport.id,sport]));
// Every sport uses the same path command topology, so native GSAP attributes can reshape the floor.
export function arenaSurface([x,y,w,h,rx,ry]){
 const k=.5523;
 return `M${x+rx} ${y}L${x+w-rx} ${y}C${x+w-rx+k*rx} ${y} ${x+w} ${y+ry-k*ry} ${x+w} ${y+ry}L${x+w} ${y+h-ry}C${x+w} ${y+h-ry+k*ry} ${x+w-rx+k*rx} ${y+h} ${x+w-rx} ${y+h}L${x+rx} ${y+h}C${x+rx-k*rx} ${y+h} ${x} ${y+h-ry+k*ry} ${x} ${y+h-ry}L${x} ${y+ry}C${x} ${y+ry-k*ry} ${x+rx-k*rx} ${y} ${x+rx} ${y}Z`;
}
