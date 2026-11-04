import { useCallback, useRef, useState } from 'react';
import { ArrowUpRight, MoveUpRight } from 'lucide-react';
import FestivalMark from '../components/FestivalMark';
import { TransitionLink, usePageTransition } from '../transitions/PageTransitionProvider';
import { useIntroActive } from '../intro/IntroController';
import FestivalArena, { ZoneSymbol } from '../home/FestivalArena';
import SponsorsOverlay from '../home/SponsorsOverlay';
import { arenaEventCount, arenaZones } from '../home/arenaData';
import { useArenaMotion } from '../home/useArenaMotion';
import '../home/arena.css';

export default function Hero() {
  const scene = useRef(null);
  const sponsorsButton = useRef(null);
  const [active, setActive] = useState(null);
  const [sponsorsOpen, setSponsorsOpen] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const introActive = useIntroActive();
  const { busyRef } = usePageTransition();
  useArenaMotion(scene, active, !introActive && !sponsorsOpen && !leaving);
  const dismissSponsors = useCallback(() => setSponsorsOpen(false), []);
  const activate = id => { if (!introActive && !busyRef.current && !leaving) setActive(id); };
  const restoreFocused = () => {
    const link = document.activeElement?.closest('[data-arena-link]');
    setActive(link?.getAttribute('data-arena-link') ?? null);
  };

  return <section id="home" className="hero arena-hero" data-active-zone={active ?? 'balanced'} aria-labelledby="hero-heading">
    <div className="arena-atmosphere" aria-hidden="true"/>
    <FestivalArena sceneRef={scene}/>
    <div className="hero-content">
      <div className="hero-meta"><span><span className="status-dot"/> VJIT, HYDERABAD</span><span>JANUARY 28–30, 2027</span><span className="hero-edition">THREE WORLDS. ONE FESTIVAL.</span></div>
      <h1 id="hero-heading" tabIndex={-1} className="hero-title"><span>UDHBHAV</span><span className="hero-year">2K27<span className="year-symbol" aria-hidden="true"><FestivalMark/></span></span></h1>
      <div className="hero-tagline"><p>The festival is yours.</p><span className="arena-invitation">Pick your world.<br/>We’ll meet you inside.</span></div>
    </div>
    <div className="arena-scene-caption" aria-hidden="true"><span>THE GROUND IS OPEN</span><span>CHOOSE AN ENTRANCE <MoveUpRight size={12}/></span></div>
    <div className="hero-bottom arena-entrances" onPointerLeave={restoreFocused}>
      <nav className="hero-categories" aria-label="Festival entrances">
        {arenaZones.map(zone => <TransitionLink key={zone.id} to={`/${zone.id}`} data-arena-link={zone.id} className={`arena-entrance arena-entrance-${zone.id}`} style={{ '--zone-accent': zone.accent }}
          onPointerEnter={event => { if (event.pointerType !== 'touch') activate(zone.id); }}
          onPointerDown={event => { if (event.pointerType === 'touch') activate(zone.id); }}
          onFocus={() => activate(zone.id)}
          onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setActive(null); }}
          onClick={event => { if (event.button===0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) { setActive(null); setLeaving(true); } }}>
          <span className="arena-mobile-symbol"><ZoneSymbol kind={zone.id}/></span>
          <span className="arena-entrance-body"><span className="arena-venue"><span>{zone.number}</span>{zone.venue}</span><span className="arena-entrance-name">{zone.label}<ArrowUpRight aria-hidden="true"/></span><span className="arena-event-preview">{zone.eventNames.join(' · ')}</span><span className="arena-event-preview-mobile">{zone.eventNames.slice(0,2).join(' · ')}</span><span className="arena-enter-cue">Enter {zone.label.toLowerCase()} <span aria-hidden="true">↗</span></span></span>
        </TransitionLink>)}
      </nav>
    </div>
    <footer className="arena-footer"><span>{arenaEventCount} events. Three days. Your festival.</span><button ref={sponsorsButton} type="button" className="arena-sponsors-entry" aria-haspopup="dialog" onClick={() => { setActive(null); setSponsorsOpen(true); }}><svg viewBox="0 0 28 28" aria-hidden="true" fill="none" stroke="currentColor"><path d="M5 25V6L14 2L23 6V25M5 7H23M10 25V11H18V25M2 25H26"/></svg><span>Sponsors & partners</span><ArrowUpRight size={15} aria-hidden="true"/></button><span className="arena-footer-note">Find your people. Make your moment.</span></footer>
    {sponsorsOpen && <SponsorsOverlay onDismiss={dismissSponsors} returnFocus={sponsorsButton}/>}
  </section>;
}
