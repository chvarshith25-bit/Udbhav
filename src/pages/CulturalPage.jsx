import { useCallback, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, ArrowDown } from 'lucide-react';
import { TransitionLink } from '../transitions/PageTransitionProvider';
import { Footer } from '../sections/Supporting';
import { culturalDistricts, culturalEventCount, posterDesigns } from '../cultural/acts';
import { PosterSurface } from '../cultural/CulturalPoster';
import StreetScenery from '../cultural/StreetScenery';
import CulturalDetail from '../cultural/CulturalDetail';
import { useStreetMotion } from '../cultural/useStreetMotion';
import '../cultural/cultural.css';

export default function CulturalPage(){
 const root=useRef(null),opener=useRef(null);
 const [districtIndex,setDistrictIndex]=useState(0),[activeId,setActiveId]=useState(null),[detail,setDetail]=useState(null);
 const district=culturalDistricts[districtIndex];
 const animatePoster=useStreetMotion(root,district.id);
 const dismiss=useCallback(()=>setDetail(null),[]);
 const openEvent=(event,element)=>{opener.current=element;setDetail(event)};
 const chooseDistrict=index=>{setDistrictIndex(index);setActiveId(null)};
 return <><main ref={root} className="cultural-street">
  <header className="street-header"><div className="street-header-top"><TransitionLink to="/"><ArrowLeft size={14} aria-hidden="true"/>The festival</TransitionLink><span>UDHBHAV 2K27 / Cultural</span><span>{culturalEventCount} events. One celebration.</span></div><div className="street-header-title"><h1 tabIndex={-1}>CULTURAL</h1><p>Don’t browse the festival.<br/><span>Walk into it.</span></p><span className="street-edition">THE FESTIVAL<br/>STREET / 2K27</span></div></header>
  <section className="street-exploration" aria-label="Explore the Cultural Festival Street">
   <nav className="street-wayfinding" aria-label="Festival districts"><div className="street-wayfinding-intro"><span className="street-wayfinding-label">Choose your next turn</span><button type="button" aria-controls="street-directory" onClick={()=>root.current.querySelector('#street-directory').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'})}>Event index <ArrowDown size={12} aria-hidden="true"/></button></div><div className="street-signpost">{culturalDistricts.map((item,index)=><button key={item.id} type="button" className={`street-sign street-sign-${index}`} aria-pressed={districtIndex===index} aria-controls="street-world" onClick={()=>chooseDistrict(index)}><span>{item.number}</span><strong>{item.title}</strong><ArrowRight size={20} aria-hidden="true"/></button>)}</div></nav>
   <div className={`street-world street-${district.kind}`} id="street-world" data-district={district.id} role="region" aria-labelledby="street-district-heading">
    <StreetScenery district={district}/><div className="street-scene-intro"><span>YOU’VE ARRIVED / DISTRICT {district.number}</span><h2 id="street-district-heading" className="street-district-title">{district.title}</h2><p>{district.line}</p></div>
    <div className="street-posters" aria-label={`${district.title} event posters`}>{district.events.map((event,index)=>{const design=posterDesigns[event.id];return <button key={event.id} type="button" className={`street-event-poster street-poster-surface tone-${design.tone} poster-${design.art} street-position-${index}`} data-event-id={event.id} data-active={activeId===event.id} aria-label={`Explore ${event.title}`} onPointerEnter={e=>{if(e.pointerType!=='touch'){setActiveId(event.id);animatePoster(event,e.currentTarget)}}} onFocus={e=>{setActiveId(event.id);animatePoster(event,e.currentTarget)}} onClick={e=>openEvent(event,e.currentTarget)}><PosterSurface event={event} district={district} index={index}/></button>})}</div>
    <div className="street-scene-bottom"><span>Pick a poster. Step into an event.</span><span>Original illustrated festival street</span></div>
   </div>
   <div className="street-event-index" id="street-directory"><div><span>Street directory</span><p>{district.events.length} experiences in {district.title}</p></div><div className="street-index-links">{district.events.map((event,index)=><button key={event.id} type="button" aria-label={`Open ${event.title} details`} onFocus={()=>setActiveId(event.id)} onPointerEnter={()=>setActiveId(event.id)} onClick={e=>openEvent(event,e.currentTarget)}><span>{String(index+1).padStart(2,'0')}</span>{event.title}<ArrowUpRight size={13} aria-hidden="true"/></button>)}</div></div>
  </section>
  <footer className="street-signoff"><p>Different turns.<br/><em>Unforgettable moments.</em></p><TransitionLink to="/">Back to the festival <ArrowUpRight size={19} aria-hidden="true"/></TransitionLink></footer>
 </main><Footer/>{detail&&<CulturalDetail key={detail.id} event={detail} act={district} onDismiss={dismiss} opener={opener.current}/>}</>;
}
