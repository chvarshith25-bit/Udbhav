import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ArenaGraphic from './ArenaGraphic';

export default function ArenaOpening({sport,title,content}){
 const root=useRef(null);
 useLayoutEffect(()=>{
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const el=root.current,context=gsap.context(()=>{},el);
  let timer,completed=false;
  const finish=()=>{if(completed)return;completed=true;clearTimeout(timer);el.style.display='none';if(content.current){content.current.inert=false;content.current.style.visibility='visible'}};
  let failed=false;
  try{context.add(()=>{try{
   el.style.display='block';if(content.current){content.current.inert=true;content.current.style.visibility='hidden'}
   const q=gsap.utils.selector(el),panels=q('.takeover-opening-panel');
   const timeline=gsap.timeline({onComplete:finish});
   const circle='circle(0% at 50% 50%)',fullCircle='circle(150% at 50% 50%)';
   if(sport==='basketball'||sport==='carroms')timeline.fromTo(panels,{clipPath:circle},{clipPath:fullCircle,duration:.4,ease:'power3.inOut'},0).to(panels,{clipPath:circle,duration:.4,ease:'power3.inOut'},.5);
   else if(sport==='football')timeline.fromTo(panels,{xPercent:-105},{xPercent:0,duration:.36,ease:'power3.out'},0).to(panels,{xPercent:105,duration:.44,ease:'power3.inOut'},.48);
   else if(sport==='volleyball')timeline.fromTo(panels,{scaleY:0,transformOrigin:'top'},{scaleY:1,duration:.24,stagger:.025,ease:'power3.out'},0).to(panels,{scaleY:0,transformOrigin:'bottom',duration:.24,stagger:.025,ease:'power3.inOut'},.48);
   else if(sport==='table-tennis'){
    timeline.fromTo(panels[0],{xPercent:-105},{xPercent:0,duration:.28},.08).fromTo(panels[1],{xPercent:105},{xPercent:0,duration:.28},.08).to(panels[0],{xPercent:-105,duration:.38},.47).to(panels[1],{xPercent:105,duration:.38},.47)
     .fromTo(q('.takeover-opening-ball'),{x:-innerWidth*.6,opacity:1},{x:innerWidth*.6,opacity:0,duration:.36,ease:'power2.inOut'},0);
   }else if(sport==='cricket')timeline.fromTo(panels,{clipPath:'ellipse(0% 0% at 0% 100%)'},{clipPath:'ellipse(180% 180% at 0% 100%)',duration:.42,ease:'power3.inOut'},0).to(panels,{clipPath:'ellipse(0% 0% at 100% 0%)',duration:.45,ease:'power3.inOut'},.48);
   else if(sport==='badminton')timeline.fromTo(panels,{xPercent:-110,yPercent:110},{xPercent:0,yPercent:0,duration:.4,ease:'power3.out'},0).to(panels,{xPercent:110,yPercent:-110,duration:.42,ease:'power3.inOut'},.48);
   else if(sport==='chess')timeline.fromTo(panels,{scale:0},{scale:1,duration:.18,stagger:{each:.004,from:'center'},ease:'power2.out'},0).to(panels,{scaleY:0,transformOrigin:'bottom',duration:.22,stagger:{each:.004,from:'center'},ease:'power3.inOut'},.47);
   else timeline.fromTo(panels,{clipPath:'inset(44% 48% 44% 48%)'},{clipPath:'inset(0% 0% 0% 0%)',duration:.4,ease:'power3.inOut'},0).to(panels,{clipPath:'inset(50% 0% 50% 0%)',duration:.42,ease:'power3.inOut'},.48);
   timeline.fromTo(q('.takeover-opening-title'),{opacity:0,clipPath:'inset(0 100% 0 0)'},{opacity:1,clipPath:'inset(0 0% 0 0)',duration:.2},.18)
    .to(q('.takeover-opening-title'),{opacity:0,duration:.15},.5)
    .fromTo(q('.takeover-opening-art'),{opacity:.25},{opacity:.4,duration:.2},0).to(q('.takeover-opening-art'),{opacity:0,duration:.18},.5);
   timeline.call(()=>{if(content.current)content.current.style.visibility='visible'},[],.45).to(q('.takeover-opening-base'),{opacity:0,duration:.15},.43);
   if(sport==='carroms')timeline.fromTo(q('.takeover-opening-ring'),{scale:.2,opacity:.85},{scale:2.5,opacity:0,duration:.7,ease:'power2.out'},.06);
   timer=setTimeout(()=>{context.revert();finish()},1600);
  }catch{failed=true}})}catch{failed=true}
  if(failed){context.revert();finish()}
  return()=>{clearTimeout(timer);context.revert();finish()};
 },[sport,content]);
 const count=sport==='chess'?64:sport==='volleyball'?8:sport==='table-tennis'?2:1;
 return <div ref={root} className="takeover-opening" data-opening-sport={sport} aria-hidden="true"><div className="takeover-opening-base"/><div className="takeover-opening-panels">{Array.from({length:count},(_,i)=><div className="takeover-opening-panel" key={i}/>)}</div><div className="takeover-opening-art"><ArenaGraphic sport={sport}/></div><span className="takeover-opening-ring"/><span className="takeover-opening-ball"/><strong className="takeover-opening-title">{title}</strong></div>;
}
