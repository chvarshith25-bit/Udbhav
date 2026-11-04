import gsap from 'gsap';

function withoutMotion(callback){
 let cancelled=false;queueMicrotask(()=>{if(!cancelled)callback()});
 return {kill(){cancelled=true}};
}

export function coverCultural(overlay,shell,onCovered,trigger){
 let timeline;
 try{
 const q=gsap.utils.selector(overlay);
 // Existing stage geometry is the origin; its homepage source and motion remain owned by Home.
 const stage=shell.querySelector('.arena-zone-cultural>path:nth-child(4)');
 const bounds=stage?.getBoundingClientRect();
 const origin=bounds?.width&&bounds.top<innerHeight?bounds:trigger?.getBoundingClientRect();
 const x=origin?Math.max(0,Math.min(innerWidth,origin.left+origin.width/2)):innerWidth/2;
 const y=origin?Math.max(0,Math.min(innerHeight,origin.top+origin.height/2)):innerHeight*.6;
 gsap.set(overlay,{visibility:'visible'});
 gsap.set(q('.cultural-route-stage'),{'--street-x':`${x}px`,'--street-y':`${y}px`});
 gsap.set(q('.street-route-celebration'),{clipPath:`circle(0px at ${x}px ${y}px)`});
 const radius=Math.ceil(Math.hypot(innerWidth,innerHeight));
 return (timeline=gsap.timeline({onComplete:onCovered}))
  .to(shell,{opacity:.5,duration:.2},0)
  .fromTo(q('.street-route-light'),{scale:.2,opacity:0},{scale:1.5,opacity:.8,duration:.3,ease:'power2.out'},0)
  .to(q('.street-route-light'),{opacity:0,duration:.4},.3)
  .to(q('.street-route-celebration'),{clipPath:`circle(${radius}px at ${x}px ${y}px)`,duration:.65,ease:'power3.inOut'},.08)
  .fromTo(q('.street-route-banner-one'),{xPercent:-110,rotation:-14},{xPercent:0,rotation:-8,duration:.66,ease:'power3.out'},.1)
  .fromTo(q('.street-route-banner-two'),{xPercent:110,rotation:0},{xPercent:0,rotation:-8,duration:.66,ease:'power3.out'},.15)
  .fromTo(q('.street-route-banner-three'),{xPercent:-110},{xPercent:0,duration:.6,ease:'power3.out'},.2)
  .to({},{duration:.06});
 }catch{timeline?.kill();return withoutMotion(onCovered)}
}
export function revealCultural(overlay,onRevealed){
 let timeline;
 try{
 const q=gsap.utils.selector(overlay);
 return (timeline=gsap.timeline({onComplete:onRevealed}))
  .to(q('.street-route-banner-one'),{xPercent:120,rotation:-14,duration:.58,ease:'power3.inOut'},0)
  .to(q('.street-route-banner-two'),{xPercent:-120,rotation:0,duration:.58,ease:'power3.inOut'},.03)
  .to(q('.street-route-banner-three'),{xPercent:120,duration:.55,ease:'power3.inOut'},.05)
  .to(q('.street-route-celebration'),{clipPath:'circle(0px at 50% 45%)',duration:.58,ease:'power3.inOut'},.04);
 }catch{timeline?.kill();return withoutMotion(onRevealed)}
}
