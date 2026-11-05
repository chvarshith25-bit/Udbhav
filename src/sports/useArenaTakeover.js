import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { arenaById, arenaSurface } from './arenaData';

function settle(root,sport){
 const profile=arenaById[sport],q=selector=>root.current?.querySelector(`.takeover-scene ${selector}`);
 q('.arena-floor-sheet')?.setAttribute('d',arenaSurface(profile.surface));q('.arena-floor-sheet')?.setAttribute('fill',profile.fill);
 q('.arena-floor-shadow')?.setAttribute('d',arenaSurface(profile.surface));q('.arena-floor-transform')?.setAttribute('transform',`rotate(${profile.angle} 500 390)`);
 root.current?.querySelectorAll('.takeover-scene .arena-markings,.takeover-scene .arena-motif-layer,.takeover-scene .takeover-game-word').forEach(el=>{el.style.opacity='';el.style.clipPath='';el.style.transform=''});
 q('.arena-moving-motif')?.removeAttribute('style');q('.arena-striker-ripple')?.removeAttribute('style');
 q('.arena-chess-piece')?.setAttribute('transform','translate(520 410)');
}
export default function useArenaTakeover(root,sport){
 const owner=useRef(null),motion=useRef(null);
 useLayoutEffect(()=>{owner.current=gsap.context(()=>{},root);return()=>{motion.current?.kill();owner.current?.revert();owner.current=null}},[root]);
 useLayoutEffect(()=>{
  motion.current?.kill();
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){settle(root,sport);return;}
  let failed=false;
  try{owner.current?.add(()=>{try{
   const profile=arenaById[sport],q=gsap.utils.selector(root.current.querySelector('.takeover-scene'));
   const timeline=gsap.timeline();motion.current=timeline;
   timeline.to(q('.arena-floor-sheet'),{attr:{d:arenaSurface(profile.surface),fill:profile.fill},duration:.7,ease:'power3.inOut'},0)
    .to(q('.arena-floor-shadow'),{attr:{d:arenaSurface(profile.surface)},duration:.7,ease:'power3.inOut'},0)
    .to(q('.arena-floor-transform'),{attr:{transform:`rotate(${profile.angle} 500 390)`},duration:.7,ease:'power3.inOut'},0)
    .fromTo(q('.arena-markings'),{opacity:.15,clipPath:sport==='volleyball'?'inset(0 0 100% 0)':'inset(0 100% 0 0)'},{opacity:1,clipPath:'inset(0 0% 0% 0)',duration:.6,ease:'power3.out'},.1)
    .fromTo(q('.takeover-game-word'),{clipPath:sport==='chess'?'inset(50% 0 50% 0)':'inset(0 100% 0 0)'},{clipPath:'inset(0 0% 0% 0)',duration:.5,ease:'power3.out'},.05);
   const moving=q('.arena-moving-motif');
   if(moving.length){
    const x=sport==='football'?-90:sport==='badminton'?90:sport==='kabaddi'?-90:sport==='table-tennis'?-130:-30;
    const y=sport==='basketball'?45:sport==='badminton'?70:sport==='carroms'?40:0;
    timeline.fromTo(moving,{x,y},{x:0,y:0,duration:sport==='table-tennis'?.32:.65,ease:'power3.out'},.08);
   }
   if(sport==='chess')timeline.fromTo(q('.arena-chess-piece'),{attr:{transform:'translate(440 370)'}},{attr:{transform:'translate(520 410)'},duration:.65,ease:'power2.inOut'},.1);
   if(sport==='carroms')timeline.fromTo(q('.arena-striker-ripple'),{opacity:0},{opacity:.8,duration:.15},.3).to(q('.arena-striker-ripple'),{opacity:0,duration:.4},.45);
  }catch{failed=true}})}catch{failed=true}
  if(failed){motion.current?.kill();owner.current?.revert();settle(root,sport)}
 },[root,sport]);
}
