import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import FestivalMark from '../components/FestivalMark';
import FestivalGround from './FestivalGround';
import { createCampusTimeline } from './IntroSequence';
import { markIntro } from './introSession';
import './intro.css';

export default function FestivalIntro({ onComplete }) {
  const film = useRef(null);
  useLayoutEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    // The film's own DOM ref is attached before this layout effect. A parent
    // component's ref can still be unset during the first child layout pass.
    const sceneRoot = film.current.parentElement;
    let context, timeline, watchdog;
    // Consume the session before initialization: reloads must never restart it.
    markIntro();
    if (reduced.matches) { onComplete(); return; }
    document.documentElement.classList.add('is-intro-active');
    try {
      context = gsap.context(() => {}, sceneRoot);
      context.add(() => {
        timeline = createCampusTimeline(sceneRoot, { onComplete });
        timeline.play(0);
      });
      film.current?.focus({ preventScroll: true });
      // Recovery only for a stalled animation; no timer shortens normal playback.
      let lastTime = 0, lastProgress = performance.now();
      watchdog = setInterval(() => {
        const now = performance.now();
        if (document.hidden) { lastProgress = now; return; }
        if (timeline.time() > lastTime) { lastTime = timeline.time(); lastProgress = now; }
        else if (now - lastProgress > 3000) onComplete();
      }, 1000);
    } catch {
      context?.revert();
      onComplete();
    }
    const preferenceChanged = () => { if (reduced.matches) onComplete(); };
    const restored = event => { if (event.persisted) onComplete(); };
    const resize = () => {
      if (!timeline) return;
      try {
        const time = timeline.time();
        timeline.pause(0).invalidate().time(time, false).play();
      } catch { onComplete(); }
    };
    reduced.addEventListener('change', preferenceChanged);
    window.addEventListener('resize', resize);
    window.addEventListener('pageshow', restored);
    return () => {
      clearInterval(watchdog);
      context?.revert();
      reduced.removeEventListener('change', preferenceChanged);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pageshow', restored);
      document.documentElement.classList.remove('is-intro-active');
    };
  }, [onComplete]);
  return <section ref={film} className="ct-film" tabIndex={-1} aria-label="The Campus Takeover — UDHBHAV opening">
    <div className="ct-world">
      <FestivalGround />
      <div className="ct-screen" aria-hidden="true">
        <span className="ct-screen-caption">UDHBHAV / 2K27</span>
        {[3,2,1].map(n => <span key={n} className={`ct-number ct-number-${n}`}>0{n}</span>)}
        <div className="ct-screen-id">
          <span className="ct-screen-word">UDHBHAV</span>
          <span className="ct-screen-year">2K27<span className="ct-screen-star"><FestivalMark /></span></span>
          <span className="ct-screen-date">JANUARY 28–30, 2027</span>
        </div>
      </div>
    </div>
    <div className="ct-night" />
    <div className="ct-vignette" />
    <div className="ct-bridge" aria-hidden="true">UDHBHAV</div>
    <div className="ct-film-meta"><span><i />UDHBHAV 2K27</span></div>
    <p className="ct-disclosure">An imagined festival ground.<br/>Not a depiction of VJIT’s campus.</p>
  </section>;
}
