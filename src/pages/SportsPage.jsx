import { lazy, Suspense, useEffect, useCallback, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, ArrowRight } from 'lucide-react';
import { TransitionLink } from '../transitions/PageTransitionProvider';
import { Footer } from '../sections/Supporting';
import FestivalMark from '../components/FestivalMark';
import SportImage from '../sports/SportImage';
import useJourneyPath from '../sports/useJourneyPath';
import { sportsJourney } from '../data/sportsJourney';
import '../styles/sports.css';
const loadDetails = () => import('../components/EventDialog');
const EventDialog = lazy(loadDetails);
export default function SportsPage() {
  const route=useRef(null);
  const modalLock=useRef(false);
  useEffect(()=>{loadDetails().catch(()=>{});},[]);
  const [active,setActive]=useState(0);
  const [selection,setSelection]=useState(null);
  const onActive=useCallback(index=>setActive(index),[]);
  useJourneyPath(route,onActive);
  const close=useCallback(()=>{modalLock.current=false;setSelection(null)},[]);
  const open=(event,e)=>{if(modalLock.current)return;modalLock.current=true;const box=e.currentTarget.getBoundingClientRect();setSelection({event,origin:{scrollY:window.scrollY,x:e.detail?e.clientX:box.left+box.width/2,y:e.detail?e.clientY:box.top+box.height/2}})};
  return <><main className="sports-journey-page">
    <section className="sports-intro section-pad">
      <div className="section-topline"><TransitionLink to="/" className="sports-back"><ArrowRight size={15}/> THE FESTIVAL</TransitionLink><span className="eyebrow">SPORTS / UDHBHAV 2K27</span></div>
      <div className="sports-hero-heading"><h1 tabIndex={-1}>THE ROAD<br/>TO <em>GLORY.</em></h1><span className="sports-hero-mark"><FestivalMark/></span></div>
      <div className="sports-intro-bottom"><div><span className="eyebrow">09 ARENAS. ONE JOURNEY.</span><p>Follow the line. Find your arena.<br/>Make the moment yours.</p></div><a href="#arenas" className="sports-start">BEGIN THE JOURNEY <ArrowDown size={18}/></a><span className="sports-count">09<span>SPORTS / ONE FESTIVAL</span></span></div>
      <nav className="sports-other-worlds" aria-label="Other festival categories"><span>EXPLORE ANOTHER WORLD</span><TransitionLink to="/cultural">Cultural <ArrowUpRight size={15}/></TransitionLink><TransitionLink to="/technical">Technical <ArrowUpRight size={15}/></TransitionLink></nav>
    </section>
    <div className="journey-position"><span>THE ROAD TO GLORY</span><div className="journey-progress-track"><span style={{width:`${(active+1)/9*100}%`}}/></div><span>{sportsJourney[active].number} / 09 </span><select className="journey-jump" aria-label="Jump to arena" value={sportsJourney[active].id} onChange={e=>document.getElementById(`arena-${e.target.value}`)?.closest('article').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'})}>{sportsJourney.map(chapter=><option value={chapter.id} key={chapter.id}>{chapter.event.title}</option>)}</select></div>
    <div id="arenas" className="journey-route" ref={route}>
      <svg className="journey-path" preserveAspectRatio="none" aria-hidden="true"><path className="journey-path-base"/><path className="journey-path-center"/><path className="journey-path-lit"/></svg>
      {sportsJourney.map((chapter,index)=><article key={chapter.id} className={`arena-chapter arena-${chapter.id}`} data-active={active===index} aria-labelledby={`arena-${chapter.id}`}>
        <span className="arena-waypoint" aria-hidden="true">{chapter.number}</span>
        <div className="arena-copy"><span className="eyebrow">ARENA {chapter.number} / {chapter.label}</span><h2 id={`arena-${chapter.id}`}>{chapter.event.title}</h2><p>{chapter.story}</p><span className="arena-motto">{chapter.motto}</span><button className="arena-enter" onClick={e=>open(chapter.event,e)} aria-label={`Enter ${chapter.event.title} arena`}>Enter arena <ArrowUpRight size={19}/></button></div>
        <button className="arena-visual" aria-label={`Explore ${chapter.event.title}`} onClick={e=>open(chapter.event,e)}><SportImage event={chapter.event}/><span className="arena-visual-footer"><span>UD / {chapter.number}</span><span>EXPLORE THE ARENA <ArrowUpRight size={16}/></span></span></button>
      </article>)}
    </div>
    <section className="sports-finish section-pad"><span className="eyebrow">THE FINISH LINE IS ONLY THE BEGINNING.</span><h2>Find your arena.<br/><em>Make it count.</em></h2><p>Event dates, venues and registration details will be announced here.</p><a href="#arenas" className="outline-button">Explore the arenas again <ArrowUpRight size={18}/></a></section>
  </main><Footer/>{selection&&<Suspense fallback={<span className="dialog-loading" role="status">Opening arena…</span>}><EventDialog event={selection.event} onClose={close} sportExperience origin={selection.origin}/></Suspense>}</>;
}
