import { ArrowUpRight } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { createIntroSequence } from './IntroSequence';
import { markIntro } from './introSession';

export default function FestivalIntro({ onComplete }) {
  const root = useRef(null);
  useLayoutEffect(() => {
    let context;
    let timer;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const interrupt = () => onComplete();
    const onVisibility = () => { if (document.hidden) interrupt(); };
    const onKey = event => { if (event.key === 'Escape') { event.preventDefault(); interrupt(); } };
    if (reduced.matches) { onComplete(); return; }
    document.documentElement.classList.add('is-intro-active');
    markIntro('started'); // A reload/remount after interruption must not restart the ident.
    try {
      context = gsap.context(() => {}, root);
      context.add(() => createIntroSequence(root.current, onComplete));
      root.current.querySelector('button')?.focus({ preventScroll: true });
      timer = setTimeout(interrupt, 4000); // Fail open if animation scheduling stalls.
    } catch {
      context?.revert();
      onComplete();
    }
    reduced.addEventListener('change', interrupt);
    window.addEventListener('resize', interrupt);
    window.addEventListener('pagehide', interrupt);
    document.addEventListener('visibilitychange', onVisibility);
    document.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(timer);
      reduced.removeEventListener('change', interrupt);
      window.removeEventListener('resize', interrupt);
      window.removeEventListener('pagehide', interrupt);
      document.removeEventListener('visibilitychange', onVisibility);
      document.removeEventListener('keydown', onKey);
      context?.revert();
      document.documentElement.classList.remove('is-intro-active');
    };
  }, [onComplete]);

  return <div ref={root} className="festival-intro" role="dialog" aria-modal="true" onKeyDown={event => { if (event.key === 'Tab') { event.preventDefault(); root.current.querySelector('button')?.focus({preventScroll:true}); } }} aria-label="UDHBHAV opening animation">
    <div className="intro-backdrop"/>
    <div className="intro-geometry" aria-hidden="true">
      <span className="intro-spark"/>
      <span className="intro-beam beam-sports"/>
      <span className="intro-beam beam-cultural"/>
      <span className="intro-beam beam-technical"/>
    </div>
    <span className="intro-word" aria-hidden="true">UDHBHAV</span>
    <span className="intro-year" aria-hidden="true">2K27</span>
    <div className="intro-energies" aria-hidden="true">{['SPORTS', 'CULTURAL', 'TECHNICAL'].map(name => <span className="intro-energy-label" key={name}>{name}</span>)}</div>
    <button className="intro-skip" onClick={onComplete}>Skip intro <ArrowUpRight size={14} aria-hidden="true"/></button>
    <span className="sr-only">The birth of UDHBHAV. Press Escape or activate Skip intro to continue.</span>
  </div>;
}
