import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { usePageTransition } from '../transitions/PageTransitionProvider';

export function useCulturalStage(root) {
  const { busyRef } = usePageTransition();
  useLayoutEffect(() => {
    let frame;
    const context = gsap.context(() => {}, root);
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return () => context.revert();
    const enter = () => {
      if (busyRef.current) { frame=requestAnimationFrame(enter); return; }
      context.add(() => {
        const q=gsap.utils.selector(root);
        gsap.fromTo(q('.culture-hero-title'),{clipPath:'inset(0 0 100% 0)',y:22},{clipPath:'inset(0 0 0% 0)',y:0,duration:.85,ease:'power3.out'});
        gsap.fromTo(q('.cultural-mainstage .culture-art-beam-left'),{rotation:-8,opacity:.25},{rotation:5,opacity:1,duration:1.1,ease:'sine.inOut'});
        gsap.fromTo(q('.cultural-mainstage .culture-art-beam-right'),{rotation:8,opacity:.25},{rotation:-5,opacity:1,duration:1.1,ease:'sine.inOut'});
      });
    };
    frame=requestAnimationFrame(enter);
    return () => {cancelAnimationFrame(frame);context.revert();};
  },[root,busyRef]);
}
