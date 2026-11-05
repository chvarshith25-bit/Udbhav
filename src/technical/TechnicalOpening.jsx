import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import WorkObject from './WorkObject';
import { technicalModes } from './modes';

export default function TechnicalOpening({modeIndex,content,origin,kind}){
 const root=useRef(null);
 useLayoutEffect(()=>{
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const el=root.current,context=gsap.context(()=>{},el);
  let frame,timer,finished=false;
  const finish=()=>{if(finished)return;finished=true;clearTimeout(timer);cancelAnimationFrame(frame);el.style.display='none';if(content.current)content.current.inert=false};
  el.style.display='block';if(content.current)content.current.inert=true;
  timer=setTimeout(()=>{context.revert();finish()},1500);
  frame=requestAnimationFrame(()=>{
   if(finished||!el.isConnected)return;
   let failed=false;
   try{context.add(()=>{try{
    const q=gsap.utils.selector(el),bounds=el.getBoundingClientRect();
    const target=content.current.querySelector('.technical-photo-study>.work-object-illustration')??content.current.querySelector('.tech-detail-media');
    const to=target.getBoundingClientRect(),from=origin??to;
    const clone=q('.technical-opening-clone');
    gsap.set(clone,{x:from.left+from.width/2-bounds.left-220,y:from.top+from.height/2-bounds.top-175,scale:Math.min((from.viewWidth??from.width)/440,(from.viewHeight??from.height)/350),rotation:from.rotation??0,opacity:1});
    const timeline=gsap.timeline({onComplete:finish});
    timeline.to(clone,{x:to.left+to.width/2-bounds.left-220,y:to.top+to.height/2-bounds.top-175,scale:Math.min(to.width/440,to.height/350),rotation:0,duration:.65,ease:'power3.inOut'},0);
    if(modeIndex===0)timeline.fromTo(q('.object-code-content'),{clipPath:'inset(0 100% 0 0)'},{clipPath:'inset(0 0% 0 0)',duration:.48},.12);
    else if(modeIndex===1)timeline.fromTo(q('.object-note-accent'),{attr:{transform:'translate(-10 8) rotate(12 331 126)'}},{attr:{transform:'translate(0 0) rotate(8 331 126)'},duration:.6,ease:'power3.out'},.05);
    else if(modeIndex===2)timeline.fromTo(q('.object-drawing-lines'),{clipPath:'inset(0 100% 0 0)'},{clipPath:'inset(0 0% 0 0)',duration:.6},.05);
    else {
     timeline.fromTo(q('.object-board-left'),{attr:{transform:'translate(143 0) scale(.7 1) translate(-143 0)'},opacity:.6},{attr:{transform:'translate(143 0) scale(1 1) translate(-143 0)'},opacity:1,duration:.6,ease:'power3.out'},.05);
     timeline.fromTo(q('.object-board-right'),{attr:{transform:'translate(304 0) scale(.7 1) translate(-304 0)'},opacity:.6},{attr:{transform:'translate(304 0) scale(1 1) translate(-304 0)'},opacity:1,duration:.6,ease:'power3.out'},.05);
    }
    const mask=modeIndex===0?'inset(0 0 100% 0)':modeIndex===1?'inset(0 0 0 100%)':modeIndex===2?'inset(100% 0 0 0)':'circle(0% at 50% 50%)';
    timeline.to(q('.technical-opening-paper'),{clipPath:mask,duration:.43,ease:'power3.inOut'},.4)
     .to(q('.technical-opening-label'),{opacity:0,duration:.2},.4)
     .to(clone,{opacity:0,duration:.12},.76);
   }catch{failed=true}})}catch{failed=true}
   if(failed){context.revert();finish()}
  });
  return()=>{clearTimeout(timer);cancelAnimationFrame(frame);context.revert();finish()};
 },[modeIndex,content,origin]);
 return <div ref={root} className={`technical-opening technical-opening-${modeIndex}`} aria-hidden="true"><div className="technical-opening-paper"/><div className="technical-opening-clone"><WorkObject kind={kind}/></div><span className="technical-opening-label">{technicalModes[modeIndex].event.title} / THE BUILD ROOM</span></div>;
}
