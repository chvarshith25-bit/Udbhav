import gsap from 'gsap';

export function coverCultural(overlay,shell,onCovered,trigger){
  const q=gsap.utils.selector(overlay);
  // Read existing stage geometry; homepage markup and animation ownership stay untouched.
  const stage=shell.querySelector('.arena-zone-cultural>path:nth-child(4)');
  const stageRect=stage?.getBoundingClientRect();
  const origin=stageRect?.width&&stageRect.top<innerHeight?stageRect:trigger?.getBoundingClientRect();
  const x=origin?Math.max(0,Math.min(innerWidth,origin.left+origin.width/2)):innerWidth/2;
  const y=origin?Math.max(0,Math.min(innerHeight,origin.top+origin.height/2)):innerHeight*.6;
  gsap.set(overlay,{visibility:'visible'});
  gsap.set(q('.cultural-route-stage'),{'--signal-x':`${x}px`,'--signal-y':`${y}px`});
  gsap.set(q('.cultural-route-signal'),{clipPath:`circle(0px at ${x}px ${y}px)`});
  const radius=Math.ceil(Math.hypot(innerWidth,innerHeight));
  return gsap.timeline({onComplete:onCovered})
    .to(shell,{opacity:.45,duration:.2},0)
    .fromTo(q('.cultural-route-pulse'),{scale:.1,opacity:.9},{scale:12,opacity:0,duration:.5,ease:'power2.out'},0)
    .to(q('.cultural-route-signal'),{clipPath:`circle(${radius}px at ${x}px ${y}px)`,duration:.6,ease:'power3.inOut'},.06)
    .fromTo(q('.cultural-route-flow'),{x:-180,rotation:-12,scale:.8},{x:0,rotation:0,scale:1,duration:.65,ease:'power3.out'},.02)
    .fromTo(q('.cultural-route-word'),{opacity:0,scale:.84,clipPath:'inset(0 100% 0 0)'},{opacity:1,scale:1,clipPath:'inset(0 0% 0 0)',duration:.38,ease:'power3.out'},.23)
    .to({},{duration:.05});
}
export function revealCultural(overlay,onRevealed){
  const q=gsap.utils.selector(overlay);
  return gsap.timeline({onComplete:onRevealed})
    .to(q('.cultural-route-word'),{opacity:0,scale:1.1,duration:.22},0)
    .to(q('.cultural-route-flow'),{x:220,rotation:10,duration:.5,ease:'power3.inOut'},0)
    .to(q('.cultural-route-signal'),{clipPath:'circle(0px at 50% 28%)',duration:.5,ease:'power3.inOut'},.02);
}
