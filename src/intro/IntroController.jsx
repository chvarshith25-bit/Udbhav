import { createContext, useCallback, useContext, useLayoutEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FestivalIntro from './FestivalIntro';
import { markIntro, shouldPlayIntro } from './introSession';
const IntroContext = createContext(false);
export function useIntroActive() { return useContext(IntroContext); }

// Mounted once above the route transition system, never inside HomePage.
export default function IntroController({ children }) {
  const location = useLocation();
  const [active, setActive] = useState(() => shouldPlayIntro(location.pathname));
  const finished = useRef(!active);
  const complete = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    markIntro();
    setActive(false);
    requestAnimationFrame(() => document.querySelector('main h1')?.focus({ preventScroll: true }));
  }, []);
  useLayoutEffect(() => {
    if (active && location.pathname !== '/') complete();
  }, [location.pathname, active, complete]);
  return <IntroContext.Provider value={active}>
    <div className="intro-site" inert={active} aria-hidden={active ? true : undefined}>{children}</div>
    {active && <FestivalIntro onComplete={complete}/>}
  </IntroContext.Provider>;
}
