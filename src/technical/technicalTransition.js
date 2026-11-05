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
  gsap.set(q('.technical-route-room'),{opacity:1,clipPath:`circle(0px at ${x}px ${y}px)`});
  gsap.set(q('.technical-route-desk'),{xPercent:-50,yPercent:matchMedia('(max-width:760px)').matches?0:-50,x:0,y:0,scale:.78,rotationX:25,opacity:0});
  timeline=gsap.timeline({onComplete:onCovered});
  return timeline.to(shell,{opacity:.55,duration:.2},0)
   .to(q('.technical-route-room'),{clipPath:`circle(${Math.ceil(Math.hypot(innerWidth,innerHeight))}px at ${x}px ${y}px)`,duration:.65,ease:'power3.inOut'},.05)
   .to(q('.technical-route-desk'),{scale:1,rotationX:0,opacity:1,duration:.68,ease:'power3.out'},.1)
   .fromTo(q('.worktable-light-pool'),{opacity:0},{opacity:.7,duration:.45},.3)
   .fromTo(q('.technical-route-label'),{opacity:0},{opacity:1,duration:.3},.3)
   .to({},{duration:.05});
 }catch{timeline?.kill();return withoutMotion(onCovered)}
}
export function revealTechnical(overlay,onRevealed){
 let timeline;
 try{
  const q=gsap.utils.selector(overlay),desk=q('.technical-route-desk')[0];
  const target=document.querySelector('.build-room .worktable');
  const from=desk.getBoundingClientRect(),to=target?.getBoundingClientRect();
  const x=to?to.left+to.width/2-(from.left+from.width/2):0;
  const y=to?to.top+to.height/2-(from.top+from.height/2):0;
  timeline=gsap.timeline({onComplete:onRevealed});
  return timeline.to(q('.technical-route-room'),{opacity:0,duration:.58,ease:'power3.inOut'},0)
   .to(desk,{x,y,scale:to?Math.min(to.width/from.width,1.4):1,duration:.58,ease:'power3.inOut'},0);
 }catch{timeline?.kill();return withoutMotion(onRevealed)}
}
