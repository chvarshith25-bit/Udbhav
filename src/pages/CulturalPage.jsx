import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowDown, ArrowUpRight, ArrowLeft } from 'lucide-react';
import { TransitionLink } from '../transitions/PageTransitionProvider';
import { Footer } from '../sections/Supporting';
import { festival } from '../data/events';
import { culturalActs, culturalEventCount } from '../cultural/acts';
import StageArtwork from '../cultural/StageArtwork';
import CulturalPoster from '../cultural/CulturalPoster';
import CulturalDetail from '../cultural/CulturalDetail';
import { useCulturalStage } from '../cultural/useCulturalStage';
import '../cultural/cultural.css';

export default function CulturalPage() {
  const root=useRef(null);
  const panel=useRef(null);
  const tabs=useRef([]);
  const opener=useRef(null);
  const [actIndex,setActIndex]=useState(0);
  const [previewId,setPreviewId]=useState(culturalActs[0].events[0].id);
  const [detail,setDetail]=useState(null);
  const act=culturalActs[actIndex];
  const preview=act.events.find(event=>event.id===previewId)??act.events[0];
  useCulturalStage(root);
  useLayoutEffect(()=>{
    const context=gsap.context(()=>{
      if(!matchMedia('(prefers-reduced-motion: reduce)').matches)gsap.fromTo(panel.current.querySelector(`[data-preview-id="${preview.id}"]`),{clipPath:'inset(0 0 0 100%)'},{clipPath:'inset(0 0 0 0%)',duration:.4,ease:'power3.out'});
    },panel);
    return()=>context.revert();
  },[preview.id]);
  const selectAct=index=>{setActIndex(index);setPreviewId(culturalActs[index].events[0].id)};
  const openEvent=(event,element)=>{opener.current=element;setDetail(event)};
  const dismiss=useCallback(()=>setDetail(null),[]);
  const festivalDates=new Intl.DateTimeFormat('en-IN',{day:'numeric',month:'long',year:'numeric',timeZone:'Asia/Kolkata'}).formatRange(new Date(`${festival.dates[0]}T12:00:00+05:30`),new Date(`${festival.dates.at(-1)}T12:00:00+05:30`));
  return <><main ref={root} className="cultural-stage-page">
    <section className="cultural-mainstage" aria-labelledby="cultural-heading">
      <div className="culture-hero-top"><TransitionLink to="/"><ArrowLeft size={14} aria-hidden="true"/>The festival</TransitionLink><span>02 / Cultural & activities</span><span>{festivalDates}</span></div>
      <h1 id="cultural-heading" className="culture-hero-title" tabIndex={-1}>CULTURAL</h1>
      <div className="culture-hero-scenery"><StageArtwork/></div>
      <div className="culture-hero-story"><p className="culture-eyebrow">The stage comes alive.</p><h2>Where talent takes<br/><em>the spotlight.</em></h2><p className="culture-hero-intro">For the voices that fill the room.<br/>The moves that make it yours.<br/>And the moments worth making.</p><a href="#cultural-playbill" className="culture-find-act">Find your act <ArrowDown size={18} aria-hidden="true"/></a></div>
      <div className="culture-hero-bottom"><span>Sound. Movement. Stories. Play.</span><span>{culturalActs.length} acts / {culturalEventCount} ways to be part of it</span></div>
    </section>
    <section id="cultural-playbill" className="cultural-playbill" aria-labelledby="playbill-heading">
      <div className="culture-program-heading"><div><p className="culture-eyebrow">Your name belongs on the stage.</p><h2 id="playbill-heading">The playbill.</h2></div><p>Choose an act.<br/>Find your kind of expression.</p></div>
      <div className="culture-act-tabs" role="tablist" aria-label="Cultural acts">{culturalActs.map((item,index)=><button key={item.id} ref={el=>{tabs.current[index]=el}} id={`culture-tab-${item.id}`} role="tab" type="button" aria-selected={actIndex===index} aria-controls="culture-act-panel" tabIndex={actIndex===index?0:-1} onClick={()=>selectAct(index)} onKeyDown={event=>{
        let next;if(event.key==='ArrowRight')next=(index+1)%culturalActs.length;else if(event.key==='ArrowLeft')next=(index+culturalActs.length-1)%culturalActs.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=culturalActs.length-1;else return;event.preventDefault();selectAct(next);tabs.current[next]?.focus();
      }}><span>ACT {item.number}</span><strong>{item.title}</strong><small>{item.events.length} events</small></button>)}</div>
      <div ref={panel} id="culture-act-panel" role="tabpanel" aria-labelledby={`culture-tab-${act.id}`} className={`culture-act-panel culture-act-${act.kind}`}>
        <div className="culture-poster-column"><div className="culture-poster-window" data-preview-id={preview.id}><CulturalPoster event={preview} act={act} interactive onOpen={event=>openEvent(preview,event.currentTarget)}/></div><p className="culture-preview-note">A glimpse of the energy. Select a title to explore.</p></div>
        <div className="culture-lineup"><div className="culture-act-intro"><span>ACT {act.number}</span><h3>{act.line}</h3></div><div className="culture-lineup-type">{act.events.map((event,index)=><button key={event.id} type="button" className={`culture-event-title culture-event-${index}`} data-event-id={event.id} data-selected={preview.id===event.id} onPointerEnter={e=>{if(e.pointerType!=='touch')setPreviewId(event.id)}} onFocus={()=>setPreviewId(event.id)} onClick={e=>openEvent(event,e.currentTarget)}><span className="culture-event-order">{String(index+1).padStart(2,'0')}</span><span className="culture-event-word">{event.title}{event.id==='dancing-competition'&&<small>Freestyle / Techno / Mass</small>}</span><ArrowUpRight size={23} aria-hidden="true"/></button>)}</div><p className="culture-lineup-cue">Pick your moment. <span>View event details ↗</span></p></div>
      </div>
    </section>
    <section className="culture-closing"><p>The stage is set.</p><h2>Bring what<br/><em>only you can.</em></h2><div><TransitionLink to="/">Back to the festival <ArrowUpRight size={18} aria-hidden="true"/></TransitionLink><span>UDHBHAV 2K27 / Cultural & activities</span></div></section>
  </main><Footer/>{detail&&<CulturalDetail key={detail.id} event={detail} act={act} onDismiss={dismiss} opener={opener.current}/>}</>;
}
