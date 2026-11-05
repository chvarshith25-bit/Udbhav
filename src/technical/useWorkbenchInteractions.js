import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { technicalModes } from './modes';

function settle(root,activeId){
 root.current?.querySelectorAll('.worktable-interactive .workbench-object').forEach(object=>{
  const active=object.dataset.workObject===activeId;
  const lift=object.querySelector('.work-object-lift');lift.style.transform=`translateY(${active?-7:0}px)`;
  object.querySelector('.work-object-illustration').style.opacity=!activeId||active?'1':'.76';
  object.querySelectorAll('.object-micro').forEach(part=>{part.style.clipPath='';part.style.opacity='';part.style.transform=''});
  object.querySelector('.object-note-accent')?.setAttribute('transform','rotate(8 331 126)');
 });
}
export function useWorkbenchInteractions(root,activeId){
 const owner=useRef(null),motion=useRef(null);
 useLayoutEffect(()=>{owner.current=gsap.context(()=>{},root);return()=>{motion.current?.kill();owner.current?.revert();owner.current=null}},[root]);
 useLayoutEffect(()=>{
  motion.current?.kill();
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){settle(root,activeId);return;}
  let failed=false;
  try{owner.current?.add(()=>{try{
   const timeline=gsap.timeline();motion.current=timeline;
   const objects=root.current.querySelectorAll('.worktable-interactive .workbench-object');
   objects.forEach(object=>{
    const active=object.dataset.workObject===activeId;
    timeline.to(object.querySelector('.work-object-lift'),{y:active?-7:0,duration:.35,ease:'power2.out'},0)
     .to(object.querySelector('.work-object-illustration'),{opacity:!activeId||active?1:.76,duration:.3},0);
   });
   const selected=root.current.querySelector(`[data-work-object="${activeId}"]`);
   if(selected){
    const kind=technicalModes.find(mode=>mode.id===activeId).kind;
    const micro=selected.querySelectorAll('.object-micro');
    if(kind==='laptop')timeline.fromTo(micro,{clipPath:'inset(0 100% 0 0)'},{clipPath:'inset(0 0% 0 0)',duration:.5,ease:'power2.out'},.03);
    else if(kind==='notes')timeline.fromTo(micro,{attr:{transform:'translate(0 2) rotate(8 331 126)'}},{attr:{transform:'translate(0 -4) rotate(8 331 126)'},duration:.25,ease:'power2.out'},.03).to(micro,{attr:{transform:'translate(0 0) rotate(8 331 126)'},duration:.3},.28);
    else if(kind==='drawings')timeline.fromTo(micro,{clipPath:'inset(0 100% 0 0)'},{clipPath:'inset(0 0% 0 0)',duration:.5,ease:'power2.out'},.03);
    else timeline.fromTo(micro,{opacity:.45},{opacity:1,duration:.5,ease:'power2.out'},.03);
   }
  }catch{failed=true}})}catch{failed=true}
  if(failed){motion.current?.kill();owner.current?.revert();settle(root,activeId)}
 },[root,activeId]);
}
