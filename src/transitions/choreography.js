import { coverCultural, revealCultural } from '../cultural/culturalTransition';
import gsap from 'gsap';

export const transitionThemes = {
  sports: { title: 'SPORTS', caption: 'ENERGY / IMPACT', number: '01' },
  cultural: { title: 'CULTURAL', caption: 'RHYTHM / EXPRESSION', number: '02' },
  technical: { title: 'TECHNICAL', caption: 'PRECISION / POSSIBILITY', number: '03' },
  festival: { title: 'UDHBHAV', caption: 'THE FESTIVAL IN MOTION', number: '27' },
};
export function themeFor(path) { return transitionThemes[path.slice(1)] ? path.slice(1) : 'festival'; }

// Only the provider owns these nodes. Page GSAP and Motion never animate them.
export function coverPage(overlay, shell, theme, trigger, onCovered) {
  if (theme === 'cultural') return coverCultural(overlay, shell, onCovered);
  const panels = overlay.querySelectorAll('.transition-panel');
  const copy = overlay.querySelector('.transition-copy');
  gsap.set(overlay, { visibility: 'visible' });
  gsap.set(panels, { xPercent: 0, yPercent: 0 });
  gsap.set(copy, { opacity: 0, y: 35 });
  const tl = gsap.timeline({ onComplete: onCovered });
  tl.to(shell, { opacity: .35, y: -10, duration: .24, ease: 'power2.out' }, 0);
  if (trigger?.isConnected && trigger.matches('.hero-categories a')) tl.to(trigger, { x: 8, duration: .18, ease: 'power2.out' }, 0);
  if (theme === 'sports') {
    tl.fromTo(panels[0], { xPercent: -115 }, { xPercent: 0, duration: .42, ease: 'power4.inOut' }, 0);
  } else {
    tl.fromTo(panels, { yPercent: -100 }, { yPercent: 0, duration: .3, stagger: .045, ease: 'power3.inOut' }, 0);
  }
  tl.to(copy, { opacity: 1, y: 0, duration: .23, ease: 'power3.out' }, .2);
  tl.to({}, { duration: .13 });
  return tl;
}
export function revealPage(overlay, theme, onRevealed) {
  if (theme === 'cultural') return revealCultural(overlay, onRevealed);
  const panels = overlay.querySelectorAll('.transition-panel');
  const tl = gsap.timeline({ onComplete: onRevealed });
  tl.to(overlay.querySelector('.transition-copy'), { opacity: 0, y: -22, duration: .18, ease: 'power2.in' }, 0);
  if (theme === 'sports') {
    tl.to(panels[0], { xPercent: 115, duration: .42, ease: 'power4.inOut' }, .08);
  } else {
    tl.to(panels, { yPercent: 100, duration: .32, stagger: .04, ease: 'power3.inOut' }, .06);
  }
  return tl;
}
