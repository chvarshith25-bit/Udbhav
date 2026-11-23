import { useId, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import FestivalGround from './FestivalGround';
import { createIntroTimeline } from './IntroSequence';
import { markIntro } from './introSession';
import './intro.css';

export default function FestivalIntro({ onComplete }) {
  const film = useRef(null);
  const titleId = useId();

  useLayoutEffect(() => {
    const element = film.current;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let context, timeline, watchdog;
    markIntro();
    if (reduced.matches) { onComplete(); return; }

    document.documentElement.classList.add('is-intro-active');
    const onPreference = () => { if (reduced.matches) onComplete(); };
    const onRestore = event => { if (event.persisted) onComplete(); };

    try {
      context = gsap.context(() => {}, element);
      // Keep the context even if a partially constructed timeline throws.
      context.add(() => { timeline = createIntroTimeline(element, onComplete); });
      element.focus({ preventScroll: true });
      timeline.play(0);

      let previousTime = 0;
      let lastProgress = performance.now();
      watchdog = window.setInterval(() => {
        const now = performance.now();
        if (document.hidden || timeline.time() !== previousTime) {
          previousTime = timeline.time();
          lastProgress = now;
        } else if (now - lastProgress > 3000) {
          onComplete();
        }
      }, 1000);
      reduced.addEventListener('change', onPreference);
      window.addEventListener('pageshow', onRestore);
    } catch {
      onComplete();
    }

    return () => {
      window.clearInterval(watchdog);
      timeline?.pause();
      context?.revert();
      reduced.removeEventListener('change', onPreference);
      window.removeEventListener('pageshow', onRestore);
      document.documentElement.classList.remove('is-intro-active');
    };
  }, [onComplete]);

  return <section ref={film} className="play-intro" tabIndex={-1} aria-labelledby={titleId}>
    <FestivalGround onError={onComplete}/>
    <div className="grand-identity">
      <h2 id={titleId} data-unveil="identity">UDBHAV <span>2K27</span></h2>
      <p data-unveil="subtitle">Sports &amp; Cultural Fest</p>
    </div>
    <button type="button" className="play-skip" onClick={onComplete}>
      Skip Intro
    </button>
  </section>;
}
