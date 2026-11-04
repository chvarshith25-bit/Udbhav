import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { posterDesigns } from './acts';

export function useStreetMotion(root,districtId){
 const interaction=useRef(null);
 useLayoutEffect(()=>{
  const context=gsap.context(()=>{},root);interaction.current=context;
  if(!matchMedia('(prefers-reduced-motion: reduce)').matches){try{context.add(()=>{
   const scene=root.current.querySelector(`[data-district="${districtId}"]`),q=gsap.utils.selector(scene);
   gsap.timeline().fromTo(q('.street-facades'),{x:-22},{x:0,duration:.8,ease:'power3.inOut'},0)
    .fromTo(q('.street-posters'),{x:40,opacity:.25,clipPath:'inset(0 0 0 8%)'},{x:0,opacity:1,clipPath:'inset(0 0 0 0%)',duration:.7,ease:'power3.inOut'},0)
    .fromTo(q('.street-district-title'),{y:12,opacity:.4},{y:0,opacity:1,duration:.55,ease:'power3.out'},.12)
    .fromTo(q('.street-festoon'),{y:-7},{y:0,duration:.85,ease:'sine.out'},0)
    .fromTo(q('.street-district-features'),{opacity:.2,y:8},{opacity:1,y:0,duration:.65,ease:'power2.out'},.08)
    .fromTo(q('.street-light-pools'),{opacity:.2},{opacity:1,duration:.7},0);
  })}catch{context.revert()}}
  return()=>{interaction.current=null;context.revert()};
 },[root,districtId]);
 return (event,element)=>{
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const art=element.querySelector('.street-poster-art');if(!art)return;
  const kind=posterDesigns[event.id].art;
  try{interaction.current?.add(()=>{
   gsap.killTweensOf(art);
   if(['frame','film','video','clue','auction'].includes(kind))gsap.fromTo(art,{clipPath:kind==='film'?'inset(45% 0 45% 0)':'inset(0 100% 0 0)'},{clipPath:'inset(0 0% 0 0)',duration:.5,ease:'power3.out'});
   else gsap.fromTo(art,{x:['dance','speed','versus','bracket'].includes(kind)?-15:0,rotation:kind==='gesture'?-7:0,scale:kind==='rhythm'?.85:.94},{x:0,rotation:0,scale:1,duration:kind==='gesture'?.65:.4,ease:'power2.out'});
  })}catch{/* A poster stays a native usable button if motion cannot start. */}
 };
}
