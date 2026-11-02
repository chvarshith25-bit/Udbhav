import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default function useJourneyPath(root, onActive) {
  useLayoutEffect(() => {
    const container = root.current;
    if (!container) return;
    const media = gsap.matchMedia();
    media.add({ motion: '(prefers-reduced-motion: no-preference)', reduced: '(prefers-reduced-motion: reduce)' }, context => {
      let drawing;
      let frame;
      const svg = container.querySelector('.journey-path');
      const paths = svg.querySelectorAll('path');
      const lit = svg.querySelector('.journey-path-lit');
      const chapters = [...container.querySelectorAll('.arena-chapter')];
      const triggers = chapters.map((chapter,index) => ScrollTrigger.create({trigger:chapter,start:'top 55%',end:'bottom 55%',onToggle:self=>{if(self.isActive)onActive(index)}}));
      const reveal = context.conditions.motion ? gsap.context(() => {
        chapters.forEach(chapter => gsap.from(chapter.querySelectorAll('.arena-copy, .arena-visual'), {opacity:0,y:25,duration:.65,stagger:.08,ease:'power3.out',scrollTrigger:{trigger:chapter,start:'top 85%',once:true}}));
      }, container) : null;
      const measure = () => {
        drawing?.scrollTrigger?.kill(); drawing?.kill();
        const bounds = container.getBoundingClientRect();
        const points = [...container.querySelectorAll('.arena-waypoint')].map(marker => {const r=marker.getBoundingClientRect();return {x:r.left-bounds.left+r.width/2,y:r.top-bounds.top+r.height/2}});
        svg.setAttribute('viewBox', `0 0 ${bounds.width} ${bounds.height}`);
        let d=`M${points[0].x},0 L${points[0].x},${points[0].y}`;
        if (bounds.width > 760) {
          // Route around each composition through measured inter-chapter space.
          points.slice(1).forEach((point,i) => {
            const prev=points[i],turn=chapters[i].getBoundingClientRect().bottom-bounds.top;
            const direction=point.x>prev.x?1:-1;
            const radius=Math.min(bounds.width*.055,(point.y-turn)*.8,(turn-prev.y)*.4);
            d+=` L${prev.x},${turn-radius} Q${prev.x},${turn} ${prev.x+direction*radius},${turn}`;
            d+=` L${point.x-direction*radius},${turn} Q${point.x},${turn} ${point.x},${turn+radius} L${point.x},${point.y}`;
          });
        } else {
          points.slice(1).forEach((point,i) => {const prev=points[i],mid=(prev.y+point.y)/2;d+=` C${prev.x},${mid} ${point.x},${mid} ${point.x},${point.y}`;});
        }
        d+=` L${points.at(-1).x},${bounds.height-10}`;
        paths.forEach(path=>path.setAttribute('d',d));
        const length=lit.getTotalLength();
        gsap.set(lit,{strokeDasharray:length,strokeDashoffset:context.conditions.reduced?0:length});
        if(context.conditions.motion) drawing=gsap.to(lit,{strokeDashoffset:0,ease:'none',scrollTrigger:{trigger:container,start:'top 55%',end:'bottom 55%',scrub:.4}});
      };
      const observer = new ResizeObserver(() => {cancelAnimationFrame(frame);frame=requestAnimationFrame(measure)});
      observer.observe(container); measure();
      return () => {cancelAnimationFrame(frame);observer.disconnect();drawing?.scrollTrigger?.kill();drawing?.kill();triggers.forEach(t=>t.kill());reveal?.revert();};
    });
    return () => media.revert();
  }, [root, onActive]);
}
