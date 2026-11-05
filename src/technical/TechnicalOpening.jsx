import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import InventionArt from './InventionArt';

export default function TechnicalOpening({modeIndex,content}){
 const root=useRef(null);
 useLayoutEffect(()=>{
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const el=root.current,context=gsap.context(()=>{},el);
  let timer;
  const finish=()=>{clearTimeout(timer);el.style.display='none';if(content.current)content.current.inert=false};
  let failed=false;
  try{context.add(()=>{try{
   el.style.display='block';if(content.current)content.current.inert=true;
   const q=gsap.utils.selector(el),timeline=gsap.timeline({onComplete:finish});
   if(modeIndex===0){
    timeline.fromTo(q('.technical-opening-panel'),{scaleY:0},{scaleY:1,transformOrigin:'top',duration:.3,stagger:.04,ease:'power3.out'},0)
     .fromTo(q('.technical-opening-art'),{opacity:0,y:15},{opacity:1,y:0,duration:.25},.2)
     .to(el,{clipPath:'inset(0 0 100% 0)',duration:.45,ease:'power3.inOut'},.43);
   }else if(modeIndex===1){
    timeline.fromTo(q('.technical-opening-panel'),{scaleX:0,rotation:-5},{scaleX:1,rotation:0,transformOrigin:'left',duration:.4,stagger:.04,ease:'power3.out'},0)
     .fromTo(q('.technical-opening-art'),{clipPath:'inset(0 100% 0 0)'},{clipPath:'inset(0 0% 0 0)',duration:.35},.2)
     .to(el,{clipPath:'inset(0 0 0 100%)',duration:.45,ease:'power3.inOut'},.48);
   }else if(modeIndex===2){
    timeline.fromTo(q('.technical-opening-panel'),{xPercent:index=>index%2?-105:105},{xPercent:0,duration:.4,stagger:.035,ease:'power3.out'},0)
     .fromTo(q('.technical-opening-art'),{scale:.9,opacity:0},{scale:1,opacity:1,duration:.3},.2)
     .to(q('.technical-opening-panel'),{yPercent:-105,duration:.45,stagger:.03,ease:'power3.inOut'},.43)
     .to(q('.technical-opening-art'),{opacity:0,duration:.3},.52);
   }else{
    timeline.fromTo(q('.technical-opening-art'),{scale:.8,opacity:0},{scale:1,opacity:1,duration:.45,ease:'power3.out'},0)
     .fromTo(q('.technical-opening-halo'),{scale:.5,opacity:0},{scale:1,opacity:1,duration:.45},0)
     .to(el,{clipPath:'circle(0% at 50% 50%)',duration:.5,ease:'power3.inOut'},.4);
   }
   timer=setTimeout(()=>{context.revert();finish()},1500);
  }catch{failed=true}})}catch{failed=true}
  if(failed){context.revert();finish()}
  return()=>{clearTimeout(timer);context.revert();if(content.current)content.current.inert=false};
 },[modeIndex,content]);
 return <div ref={root} className={`technical-opening technical-opening-${modeIndex}`} aria-hidden="true"><div className="technical-opening-panels">{[0,1,2,3].map(i=><div key={i} className="technical-opening-panel"/>)}</div><div className="technical-opening-halo"/><div className="technical-opening-art"><InventionArt modeIndex={modeIndex}/></div></div>;
}
