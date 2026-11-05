import { useCallback, useRef, useState } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { TransitionLink } from '../transitions/PageTransitionProvider';
import { Footer } from '../sections/Supporting';
import { technicalModes } from '../technical/modes';
import InventionArt from '../technical/InventionArt';
import { useInventionMotion } from '../technical/useInventionMotion';
import TechnicalDetail from '../technical/TechnicalDetail';
import '../technical/technical.css';

export default function TechnicalPage(){
 const root=useRef(null),opener=useRef(null);
 const [modeIndex,setModeIndex]=useState(0),[detail,setDetail]=useState(null);
 const mode=technicalModes[modeIndex];
 useInventionMotion(root,modeIndex);
 const dismiss=useCallback(()=>setDetail(null),[]);
 return <><main className="technical-engine" ref={root}>
  <header className="invention-header"><div className="invention-meta"><TransitionLink to="/"><ArrowLeft size={14} aria-hidden="true"/>The festival</TransitionLink><span>UDHBHAV 2K27 / Technical</span><span>Curiosity, under construction.</span></div><div className="invention-title"><h1 tabIndex={-1}>TECHNICAL</h1><p>The invention engine.<br/><strong>Build what’s next.</strong></p></div></header>
  <section className="invention-studio" aria-label="The interactive invention engine">
   <nav className="invention-selector" aria-label="Technical event modes"><p>Four competitions.<br/>{' '}Choose your starting point.</p>{technicalModes.map((item,index)=><button key={item.id} type="button" data-mode-id={item.id} aria-pressed={modeIndex===index} aria-controls="invention-object invention-event" onClick={()=>setModeIndex(index)}><span>{item.number}</span><div><strong>{item.event.title}</strong><small>{item.name}</small></div><ArrowUpRight size={15} aria-hidden="true"/></button>)}<span className="invention-independent">Independent events.<br/>{' '}No sequence required.</span></nav>
   <div className="invention-canvas" id="invention-object" data-engine-mode={mode.id} role="img" aria-label={`Original invention study in ${mode.name} configuration`}><div className="invention-canvas-label"><span>FIG. {mode.number} / {mode.name}</span><span>SVG ASSEMBLY STUDY</span></div><InventionArt/><div className="invention-caption"><span>{mode.annotation}</span><ArrowUpRight size={18} aria-hidden="true"/></div></div>
   <div className="invention-event" id="invention-event"><div className="invention-mode-label"><span>{mode.number} / EXPERIENCE</span><span className="invention-status-dot" aria-hidden="true"/></div><h2>{mode.event.title}</h2><p className="invention-event-verb">{mode.verb}</p><p className="invention-description">{mode.event.description}</p>{mode.id==='branch-wise-hackathons'&&<p className="invention-tracks">{mode.event.branchTracks?.length?'Branch-wise information is available in event details.':'Branch-wise information will be announced.'}</p>}<button type="button" data-open-technical={mode.id} onClick={event=>{opener.current=event.currentTarget;setDetail(mode)}}>Explore this event <ArrowUpRight size={21} aria-hidden="true"/></button><p className="invention-schedule-note">Dates, venue and registration details to be announced.</p></div>
  </section>
  <footer className="invention-footer"><span>One engine. Four ways to make something matter.</span><span>Designed to explore. Built to inspire.</span><TransitionLink to="/">Back to the festival <ArrowUpRight size={15} aria-hidden="true"/></TransitionLink></footer>
 </main><Footer/>{detail&&<TechnicalDetail mode={detail} onDismiss={dismiss} opener={opener.current}/>}</>;
}
