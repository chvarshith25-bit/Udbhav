import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export function useFestivalMotion(root) {
  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        gsap.from('.hero-title > span', { yPercent: 105, opacity: 0, duration: 1.15, stagger: .08, ease: 'power4.out', delay: .15 });
        gsap.from('.hero-meta, .hero-bottom', { opacity: 0, y: 15, duration: .8, delay: .7 });
        gsap.utils.toArray('[data-reveal]').forEach(el => gsap.from(el, { y: 35, opacity: 0, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } }));

      }, root);
      return () => ctx.revert();
    });
    return () => media.revert();
  }, [root]);
}
