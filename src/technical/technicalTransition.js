import gsap from 'gsap';

function withoutMotion(callback){let cancelled=false;queueMicrotask(()=>{if(!cancelled)callback()});return {kill(){cancelled=true}}}
export function coverTechnical(overlay,shell,onCovered,trigger){
 let timeline;
 try{
  const q=gsap.utils.selector(overlay),pavilion=shell.querySelector('.arena-zone-technical>path');
  const bounds=pavilion?.getBoundingClientRect();
  const origin=bounds?.width&&bounds.top<innerHeight?bounds:trigger?.getBoundingClientRect();
  const x=origin?Math.max(0,Math.min(innerWidth,origin.left+origin.width/2)):innerWidth*.72;
  const y=origin?Math.max(0,Math.min(innerHeight,origin.top+origin.height/2)):innerHeight*.6;
  gsap.set(overlay,{visibility:'visible'});
  gsap.set(q('.technical-route-board'),{opacity:1,clipPath:`circle(0px at ${x}px ${y}px)`});
  gsap.set(q('.technical-route-machine'),{xPercent:-50,yPercent:-50,x:0,y:0,scale:1,opacity:0});
  const paths=q('.technical-route-draft path');
  paths.forEach(path=>{const length=path.getTotalLength();gsap.set(path,{strokeDasharray:length,strokeDashoffset:length})});
  timeline=gsap.timeline({onComplete:onCovered});
  return timeline.to(shell,{opacity:.55,duration:.2},0)
   .to(q('.technical-route-board'),{clipPath:`circle(${Math.ceil(Math.hypot(innerWidth,innerHeight))}px at ${x}px ${y}px)`,duration:.65,ease:'power3.inOut'},.05)
   .to(paths,{strokeDashoffset:0,duration:.65,ease:'power2.out'},.08)
   .fromTo(q('.technical-route-machine'),{y:35,scale:.82,opacity:0},{y:0,scale:1,opacity:1,duration:.55,ease:'power3.out'},.18)
   .fromTo(q('.technical-route-machine .engine-material'),{fillOpacity:0},{fillOpacity:1,duration:.3},.45)
   .fromTo(q('.technical-route-label'),{opacity:0},{opacity:1,duration:.25},.25)
   .to({},{duration:.05});
 }catch{timeline?.kill();return withoutMotion(onCovered)}
}
export function revealTechnical(overlay,onRevealed){
 let timeline;
 try{
  const q=gsap.utils.selector(overlay),machine=q('.technical-route-machine')[0];
  const target=document.querySelector('.invention-canvas>.engine-svg');
  const from=machine.getBoundingClientRect(),to=target?.getBoundingClientRect();
  const x=to?to.left+to.width/2-(from.left+from.width/2):0;
  const y=to?to.top+to.height/2-(from.top+from.height/2):0;
  timeline=gsap.timeline({onComplete:onRevealed});
  return timeline.to(q('.technical-route-board'),{opacity:0,duration:.45,ease:'power2.inOut'},.05)
   .to(machine,{x,y,scale:to?to.width/from.width:1,duration:.55,ease:'power3.inOut'},0)
   .to(machine,{opacity:0,duration:.13},.47);
 }catch{timeline?.kill();return withoutMotion(onRevealed)}
}
