import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { MemoryRouter } from 'react-router-dom';
import gsap from 'gsap';
import { Pause, Play, RotateCcw, ArrowUpRight, SkipForward } from 'lucide-react';
import App from '../../../src/App';
import FestivalMark from '../../../src/components/FestivalMark';
import FestivalGround from './FestivalGround';
import { CHAPTERS, DURATION, REVEAL_TIME, createCampusTimeline } from './createCampusTimeline';

export default function CampusPrototype() {
  const root = useRef(null);
  const timeline = useRef(null);
  const clock = useRef(null);
  const scrubber = useRef(null);
  const replayButton = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [homeVisible, setHomeVisible] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [chapter, setChapter] = useState(CHAPTERS[0][1]);
  const [notice, setNotice] = useState('');
  const [homeVersion, setHomeVersion] = useState(0);
  const shownChapter = useRef('');

  const finish = useCallback(() => {
    setHomeVisible(true);
    setPlaying(false);
    setNotice('Prototype complete. The existing homepage is now visible.');
  }, []);

  useLayoutEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => {
      const time = timeline.current?.time() ?? 0;
      if (clock.current) clock.current.textContent = `${time.toFixed(1).padStart(4, '0')} / 09.0`;
      if (scrubber.current) scrubber.current.value = time;
      const name = [...CHAPTERS].reverse().find(([start]) => time >= start)?.[1] ?? CHAPTERS[0][1];
      if (shownChapter.current !== name) { shownChapter.current = name; setChapter(name); }
    };
    let context;
    try {
      context = gsap.context(() => {
        timeline.current = createCampusTimeline(root.current, { onUpdate: update, onComplete: finish });
      }, root);
    } catch {
      setNotice('Animation could not start. The existing homepage is available.');
      setHomeVisible(true);
      gsap.set(root.current.querySelector('.ct-film'), { autoAlpha: 0 });
    }
    const applyPreference = () => {
      setReduced(media.matches);
      if (media.matches) {
        timeline.current?.pause().time(REVEAL_TIME, false);
        setPlaying(false);
        setHomeVisible(false);
        setNotice('Reduced motion: showing the illuminated ground as a still. Use Skip to view the homepage.');
      }
    };
    if (media.matches) applyPreference();
    else if (timeline.current) { timeline.current.play(0); setPlaying(true); }
    media.addEventListener('change', applyPreference);
    const hide = () => { if (document.hidden) { timeline.current?.pause(); setPlaying(false); } };
    const escape = event => { if (event.key === 'Escape') { timeline.current?.pause().time(DURATION, false); finish(); replayButton.current?.focus({ preventScroll: true }); } };
    const resize = () => {
      // Recompute the measured identity handoff on the next render, without replaying.
      const tl = timeline.current;
      if (!tl) return;
      const time = tl.time();
      const wasPlaying = !tl.paused();
      tl.pause(0).invalidate().time(time, false);
      if (wasPlaying) tl.play();
    };
    document.addEventListener('visibilitychange', hide);
    document.addEventListener('keydown', escape);
    window.addEventListener('resize', resize);
    return () => {
      media.removeEventListener('change', applyPreference);
      document.removeEventListener('visibilitychange', hide);
      document.removeEventListener('keydown', escape);
      window.removeEventListener('resize', resize);
      context?.revert();
      timeline.current = null;
    };
  }, [finish, homeVersion]);

  const replay = () => {
    setHomeVisible(false);
    setNotice('');
    // Reset only this preview's homepage/router state, then rebuild the scoped film.
    // The installed production intro and its session controller are never mounted.
    setHomeVersion(version => version + 1);
  };
  const toggle = () => {
    if (!timeline.current || reduced) return;
    if (homeVisible) { replay(); return; }
    if (playing) timeline.current.pause(); else timeline.current.play();
    setPlaying(!playing);
  };
  const seek = event => {
    const time = Number(event.target.value);
    timeline.current?.pause().time(time, false);
    setPlaying(false);
    setHomeVisible(time >= DURATION);
    setNotice('');
  };
  const skip = () => { timeline.current?.pause().time(DURATION, false); finish(); replayButton.current?.focus({ preventScroll: true }); };

  return <div ref={root} className="campus-prototype" data-playing={playing} data-home={homeVisible} data-chapter={chapter}>
    <div className="ct-homepage" inert={!homeVisible} aria-hidden={!homeVisible || undefined}><MemoryRouter key={homeVersion}><App /></MemoryRouter></div>
    <section className="ct-film" aria-label="The Campus Takeover, nine-second intro concept" aria-hidden={homeVisible || undefined}>
      <div className="ct-world">
        <FestivalGround />
        <div className="ct-screen" aria-hidden="true">
          <span className="ct-screen-caption">UDHBHAV / 2K27</span>
          {[3,2,1].map(n=><span key={n} className={`ct-number ct-number-${n}`}>0{n}</span>)}
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
      <div className="ct-film-meta"><span><i />UDHBHAV 2K27</span><span>Original motion study</span></div>
      <button className="ct-skip" onClick={skip}>Skip <SkipForward size={14} aria-hidden="true" /></button>
      <p className="ct-disclosure">An imagined festival ground.<br/>Not a depiction of VJIT’s campus.</p>
    </section>
    <aside className="ct-review" aria-label="Prototype playback controls">
      <div className="ct-review-title"><span>Intro concept / 01</span><strong>The Campus Takeover</strong></div>
      <div className="ct-playback">
        <button className="ct-play-toggle" onClick={toggle} disabled={reduced} aria-label={playing ? 'Pause intro' : 'Play intro'}>{playing ? <Pause size={18} aria-hidden="true"/> : <Play size={18} aria-hidden="true"/>}</button>
        <button ref={replayButton} className="ct-replay" onClick={replay}><RotateCcw size={15} aria-hidden="true"/><span>{reduced ? 'View still' : 'Replay'}</span></button>
        <label className="ct-scrubber"><span className="sr-only">Review intro timeline in seconds</span><input ref={scrubber} type="range" min="0" max={DURATION} step=".01" defaultValue="0" onChange={seek} disabled={reduced}/></label>
        <output ref={clock} className="ct-clock" aria-label="Playback time">00.0 / 09.0</output>
      </div>
      <div className="ct-review-status"><span>{homeVisible ? 'Homepage handoff' : reduced ? 'Reduced-motion still' : chapter}</span><a href="https://udbhav-2k27-vjit.arcaneharp16.chatgpt.site/" target="_blank" rel="noreferrer">Current website <ArrowUpRight size={13} aria-hidden="true"/></a></div>
    </aside>
    <span className="sr-only" role="status">{notice}</span>
  </div>;
}
