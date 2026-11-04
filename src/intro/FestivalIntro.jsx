import { ArrowUpRight } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import FestivalScenes, { FestivalEmblem } from './FestivalScenes';
import { createIntroSequence } from './IntroSequence';
import { markIntro } from './introSession';
import './intro.css';

export default function FestivalIntro({ onComplete }) {
  const root=useRef(null);
  useLayoutEffect(()=>{
    let context,timer;
    const reduced=matchMedia('(prefers-reduced-motion: reduce)');
    const interrupt=()=>onComplete();
    const onVisibility=()=>{if(document.hidden)interrupt()};
    const onKey=event=>{if(event.key==='Escape'){event.preventDefault();interrupt()}};
    if(reduced.matches){onComplete();return;}
    document.documentElement.classList.add('is-intro-active');
    markIntro('started');
    try{
      context=gsap.context(()=>{},root);
      context.add(()=>createIntroSequence(root.current,onComplete));
      root.current.querySelector('button')?.focus({preventScroll:true});
      timer=setTimeout(interrupt,12000);
    }catch{context?.revert();onComplete();}
    reduced.addEventListener('change',interrupt);
    window.addEventListener('resize',interrupt);
    window.addEventListener('pagehide',interrupt);
    document.addEventListener('visibilitychange',onVisibility);
    document.addEventListener('keydown',onKey);
    return()=>{
      clearTimeout(timer);context?.revert();
      reduced.removeEventListener('change',interrupt);
      window.removeEventListener('resize',interrupt);
      window.removeEventListener('pagehide',interrupt);
      document.removeEventListener('visibilitychange',onVisibility);
      document.removeEventListener('keydown',onKey);
      document.documentElement.classList.remove('is-intro-active');
    };
  },[onComplete]);
  return <div ref={root} className="festival-intro festival-film-intro" role="dialog" aria-modal="true" aria-label="The festival comes alive — UDHBHAV opening" onKeyDown={event=>{if(event.key==='Tab'){event.preventDefault();root.current.querySelector('button')?.focus({preventScroll:true})}}}>
    <div className="intro-backdrop"/>
    <FestivalScenes/>
    <div className="film-emblems" aria-hidden="true">{['sports','cultural','technical'].map(kind=><span className={`film-emblem emblem-${kind}`} key={kind}><FestivalEmblem kind={kind}/></span>)}</div>
    <span className="intro-word" aria-hidden="true">UDHBHAV</span>
    <span className="intro-year" aria-hidden="true">2K27</span>
    <p className="film-institution">VIDYA JYOTHI INSTITUTE OF TECHNOLOGY</p>
    <p className="film-dates">JANUARY 28–30, 2027</p>
    <button className="intro-skip" onClick={onComplete}>Skip intro <ArrowUpRight size={14} aria-hidden="true"/></button>
    <span className="sr-only">An original festival sequence: basketball court, performance stage, coding interface, and the UDHBHAV identity. Press Escape or Skip intro to continue.</span>
  </div>;
}
