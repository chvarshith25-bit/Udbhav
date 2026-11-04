import { useLayoutEffect } from 'react';
import gsap from 'gsap';

// React commits a usable environment first. Motion only owns decorative descendants.
export function useFrequencyMotion(root,channelId,previewId) {
  useLayoutEffect(()=>{
    const context=gsap.context(()=>{},root);
    if(matchMedia('(prefers-reduced-motion: reduce)').matches)return()=>context.revert();
    try{context.add(()=>{
      const environment=root.current.querySelector(`[data-channel="${channelId}"]`);
      const q=gsap.utils.selector(environment);
      const timeline=gsap.timeline();
      timeline.fromTo(q('.frequency-environment-art'),{clipPath:'inset(0 100% 0 0)',x:18},{clipPath:'inset(0 0% 0 0)',x:0,duration:.65,ease:'power3.inOut'},0)
        .fromTo(q('.frequency-scene-type'),{y:24,opacity:.3},{y:0,opacity:1,duration:.55,ease:'power3.out'},.08)
        .fromTo(q('.frequency-event-title'),{x:16,opacity:.3},{x:0,opacity:1,duration:.4,stagger:.035,ease:'power2.out'},.12);
      if(channelId==='stage')timeline.fromTo(q('.frequency-gesture'),{rotation:-7,scale:.96},{rotation:0,scale:1,duration:.8,ease:'sine.out'},0);
      else if(channelId==='frame')timeline.fromTo(q('.frequency-contact-sheet'),{x:50},{x:0,duration:.75,ease:'power3.out'},0);
      else timeline.fromTo(q('.frequency-play-arrow'),{x:-45},{x:0,duration:.5,ease:'power3.out'},.15);
    })}catch{context.revert()}
    return()=>context.revert();
  },[root,channelId]);
  useLayoutEffect(()=>{
    const context=gsap.context(()=>{},root);
    if(matchMedia('(prefers-reduced-motion: reduce)').matches)return()=>context.revert();
    try{context.add(()=>{
      const title=root.current.querySelector(`[data-preview-id="${previewId}"]`);
      gsap.fromTo(title,{clipPath:'inset(0 0 100% 0)'},{clipPath:'inset(0 0 0% 0)',duration:.3,ease:'power2.out'});
    })}catch{context.revert()}
    return()=>context.revert();
  },[root,previewId]);
}
