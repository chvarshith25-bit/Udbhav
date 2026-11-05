import gsap from 'gsap';

function withoutMotion(callback){let cancelled=false;queueMicrotask(()=>{if(!cancelled)callback()});return {kill(){cancelled=true}}}
export function coverSports(overlay,shell,onCovered,trigger){
 let timeline;
 try{
  const q=gsap.utils.selector(overlay),zone=shell.querySelector('.arena-zone-sports>path');
  const rect=zone?.getBoundingClientRect();
  const origin=rect?.width&&rect.top<innerHeight?rect:trigger?.getBoundingClientRect();
  const x=origin?Math.max(0,Math.min(innerWidth,origin.left+origin.width/2)):innerWidth*.3;
  const y=origin?Math.max(0,Math.min(innerHeight,origin.top+origin.height/2)):innerHeight*.6;
  gsap.set(overlay,{visibility:'visible'});
  gsap.set(q('.takeover-route-pool'),{opacity:1,clipPath:`circle(0px at ${x}px ${y}px)`});
  gsap.set(q('.takeover-route-floor'),{xPercent:-50,yPercent:-50,x:0,y:0,scale:.78,opacity:0});
  timeline=gsap.timeline({onComplete:onCovered});
  return timeline.to(shell,{opacity:.45,duration:.2},0)
   .to(q('.takeover-route-pool'),{clipPath:`circle(${Math.ceil(Math.hypot(innerWidth,innerHeight))}px at ${x}px ${y}px)`,duration:.65,ease:'power3.inOut'},.05)
   .fromTo(q('.takeover-route-light'),{xPercent:-100,opacity:0},{xPercent:100,opacity:.7,duration:.7,ease:'power3.inOut'},0)
   .to(q('.takeover-route-light'),{opacity:0,duration:.15},.62)
   .to(q('.takeover-route-floor'),{scale:1,opacity:1,duration:.62,ease:'power3.out'},.14)
   .fromTo(q('.takeover-route-word'),{x:-80,opacity:0,clipPath:'polygon(0 0,0 0,0 100%,0 100%)'},{x:0,opacity:1,clipPath:'polygon(0 0,100% 0,100% 100%,0 100%)',duration:.42,ease:'power3.out'},.2)
   .to({},{duration:.05});
 }catch{timeline?.kill();return withoutMotion(onCovered)}
}
export function revealSports(overlay,onRevealed){
 let timeline;
 try{
  const q=gsap.utils.selector(overlay),floor=q('.takeover-route-floor')[0],target=document.querySelector('.takeover-scene .takeover-court');
  const from=floor.getBoundingClientRect(),to=target?.getBoundingClientRect();
  timeline=gsap.timeline({onComplete:onRevealed});
  return timeline.to(q('.takeover-route-word'),{x:70,opacity:0,duration:.22,ease:'power2.in'},0)
   .to(q('.takeover-route-pool'),{opacity:0,duration:.48,ease:'power2.inOut'},.1)
   .to(floor,{x:to?to.left+to.width/2-(from.left+from.width/2):0,y:to?to.top+to.height/2-(from.top+from.height/2):0,scale:to?to.width/from.width:1,duration:.55,ease:'power3.inOut'},0)
   .to(floor,{opacity:0,duration:.12},.48);
 }catch{timeline?.kill();return withoutMotion(onRevealed)}
}
