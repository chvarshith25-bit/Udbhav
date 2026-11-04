import { useLayoutEffect } from 'react';
import gsap from 'gsap';

export function useArenaMotion(root, active, enabled) {
  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    media.add({ reduced: '(prefers-reduced-motion: reduce)', standard: '(prefers-reduced-motion: no-preference)' }, context => {
      const q = gsap.utils.selector(root);
      const duration = context.conditions.reduced || !enabled ? 0 : .38;
      for (const id of ['sports', 'cultural', 'technical']) {
        const selected = enabled && active === id;
        gsap.to(q(`.arena-zone-${id}`), { opacity: !active || !enabled || selected ? 1 : .4, duration, overwrite: true });
        gsap.to(q(`.arena-light-${id}`), { opacity: selected ? .9 : .2, duration, overwrite: true });
        gsap.to(q(`.arena-detail-${id}`), { opacity: selected ? 1 : .45, duration, overwrite: true });
      }
      if (!duration || !active || !enabled) return;
      if (active === 'sports') gsap.fromTo(q('.arena-ball'), { y: 0 }, { y: -17, duration: .38, repeat: 1, yoyo: true, ease: 'power2.out' });
      if (active === 'cultural') gsap.fromTo(q('.arena-stage-beam'), { rotation: -8, svgOrigin: '682 239' }, { rotation: 8, duration: .85, ease: 'sine.inOut' });
      if (active === 'technical') gsap.fromTo(q('.arena-code'), { strokeDashoffset: 220 }, { strokeDashoffset: 0, duration: .7, ease: 'power2.out' });
    }, root);
    return () => media.revert();
  }, [root, active, enabled]);
}
