import CulturalTransition from '../cultural/CulturalTransition';
import { createContext, useContext, useLayoutEffect, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { coverPage, revealPage, themeFor, transitionThemes } from './choreography';

const TransitionContext = createContext(null);
export function TransitionLink({ to, children, onClick, ...props }) {
  const { go, busyRef } = useContext(TransitionContext);
  return <Link to={to} {...props} onClick={event => {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || props.target === '_blank') return;
    event.preventDefault();
    if (!busyRef.current) go(to, event.currentTarget);
  }}>{children}</Link>;
}
export function usePageTransition() { return useContext(TransitionContext); }

export default function PageTransitionProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [busy, setBusy] = useState(false);
  const [theme, setTheme] = useState(themeFor(location.pathname));
  const overlay = useRef(null);
  const shell = useRef(null);
  const busyRef = useRef(false);
  const latestLocation = useRef(location);
  const displayedKey = useRef(location.key);
  const timeline = useRef(null);
  const generation = useRef(0);
  const pendingReveal = useRef(false);
  const trigger = useRef(null);
  const frame = useRef(null);
  const watchdog = useRef(null);
  latestLocation.current = location;

  function unlock() {
    document.documentElement.classList.remove('is-route-transitioning');
  }
  function finish() {
    clearTimeout(watchdog.current);
    gsap.set(overlay.current, { visibility: 'hidden' });
    gsap.set(shell.current, { clearProps: 'opacity,transform' });
    busyRef.current = false;
    setBusy(false);
    unlock();
    requestAnimationFrame(() => shell.current?.querySelector('main h1')?.focus({ preventScroll: true }));
  }
  const go = (to, element) => {
    if (to === latestLocation.current.pathname) return;
    busyRef.current = true; // Synchronous guard covers two clicks in the same React tick.
    trigger.current = element;
    try { navigate(to); } catch { busyRef.current = false; finish(); }
  };

  // Keep the previous route mounted until the cover is completely opaque.
  // POP navigation uses this same controller, including rapid Back/Forward.
  useLayoutEffect(() => {
    if (location.key === displayedKey.current) {
      if (busyRef.current) {
        generation.current++;
        timeline.current?.kill();
        cancelAnimationFrame(frame.current);
        pendingReveal.current = false;
        finish();
      }
      return;
    }
    const id = ++generation.current;
    timeline.current?.kill();
    cancelAnimationFrame(frame.current);
    clearTimeout(watchdog.current);
    pendingReveal.current = false;
    busyRef.current = true;
    setBusy(true);
    document.documentElement.classList.add('is-route-transitioning');
    document.querySelectorAll('dialog[open]').forEach(dialog => dialog.close());
    const nextTheme = themeFor(location.pathname);
    setTheme(nextTheme);
    overlay.current.dataset.theme = nextTheme;
    const commit = () => {
      if (generation.current !== id) return;
      pendingReveal.current = true;
      displayedKey.current = location.key;
      setDisplayLocation(location);
    };
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      commit();
    } else {
      timeline.current = coverPage(overlay.current, shell.current, nextTheme, trigger.current, commit);
    }
    trigger.current = null;
    // Navigation must never strand an inert page behind a stale overlay.
    watchdog.current = setTimeout(() => {
      timeline.current?.kill();
      pendingReveal.current = false;
      displayedKey.current = latestLocation.current.key;
      setDisplayLocation(latestLocation.current);
      finish();
    }, 3000);
  }, [location.key]);

  // All route components are eagerly imported, so this layout effect runs only
  // after the destination DOM (or its error fallback) has actually committed.
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.title = displayLocation.pathname === '/' ? 'UDHBHAV 2K27 — The Festival in Motion' : `${displayLocation.pathname.slice(1).toUpperCase()} — UDHBHAV 2K27`;
    if (!pendingReveal.current) return;
    pendingReveal.current = false;
    gsap.set(shell.current, { clearProps: 'opacity,transform' });
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { finish(); return; }
    const id = generation.current;
    frame.current = requestAnimationFrame(() => {
      frame.current = requestAnimationFrame(() => {
        if (id !== generation.current) return;
        timeline.current = revealPage(overlay.current, themeFor(displayLocation.pathname), finish);
      });
    });
  }, [displayLocation.key]);

  useEffect(() => () => {
    generation.current++;
    timeline.current?.kill();
    cancelAnimationFrame(frame.current);
    clearTimeout(watchdog.current);
    unlock();
  }, []);

  const copy = transitionThemes[theme];
  return <TransitionContext.Provider value={{ go, busyRef, displayLocation }}>
    <div ref={shell} className="route-shell" data-pathname={displayLocation.pathname} inert={busy} aria-busy={busy}>{children(displayLocation)}</div>
    <div ref={overlay} className="transition-overlay" data-theme={theme} aria-hidden="true">
      <CulturalTransition/>
      {[0,1,2,3].map(i => <div className={`transition-panel panel-${i}`} key={i}/>)}
      <div className="transition-copy"><span className="eyebrow">UDHBHAV 2K27 / {copy.number}</span><span className="transition-title">{copy.title}</span><span className="eyebrow">{copy.caption}</span></div>
    </div>
    <span className="sr-only" role="status" aria-live="polite">{busy ? `Opening ${copy.title.toLowerCase()}` : ''}</span>
  </TransitionContext.Provider>;
}
