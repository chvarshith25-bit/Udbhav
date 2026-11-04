import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { X, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import CulturalPoster from './CulturalPoster';

const pending = 'To be announced';
export default function CulturalDetail({ event, act, onDismiss, opener }) {
  const dialog=useRef(null);
  const [imageIndex,setImageIndex]=useState(0);
  const [failedSrc,setFailedSrc]=useState(null);
  const images=event.images??[];
  const image=images[imageIndex];
  useLayoutEffect(()=>{
    const el=dialog.current;
    const savedY=window.scrollY;
    const previousOverflow=document.body.style.overflow;
    const previousPadding=document.body.style.paddingRight;
    const gap=innerWidth-document.documentElement.clientWidth;
    document.body.style.overflow='hidden';
    if(gap)document.body.style.paddingRight=`${parseFloat(getComputedStyle(document.body).paddingRight)+gap}px`;
    el.showModal();
    const context=gsap.context(()=>{},el);
    try{context.add(()=>{
      if(!matchMedia('(prefers-reduced-motion: reduce)').matches){
        gsap.fromTo(el.querySelector('.culture-detail-curtain'),{scaleX:1},{scaleX:0,transformOrigin:'right center',duration:.5,ease:'power3.inOut'});
        gsap.fromTo(el.querySelector('.culture-detail-info'),{opacity:0,y:12},{opacity:1,y:0,duration:.35,delay:.15});
      }
    })}catch{context.revert()}
    return()=>{
      context.revert();if(el.open)el.close();
      document.body.style.overflow=previousOverflow;document.body.style.paddingRight=previousPadding;
      requestAnimationFrame(()=>{
        if(!el.open && opener?.isConnected){window.scrollTo({top:savedY,left:0,behavior:'instant'});opener.focus({preventScroll:true});}
      });
    };
  },[opener]);
  const close=()=>dialog.current.close();
  const date=event.date?new Date(`${event.date}T12:00:00+05:30`).toLocaleDateString('en-IN',{dateStyle:'long',timeZone:'Asia/Kolkata'}):pending;
  const time=event.startTime?`${event.startTime}${event.endTime?` – ${event.endTime}`:''} IST`:pending;
  return <dialog ref={dialog} className="cultural-detail" aria-labelledby="culture-detail-title" aria-describedby="culture-detail-description" onClose={()=>{if(!dialog.current?.open)onDismiss()}} onCancel={e=>{e.preventDefault();close()}} onKeyDown={e=>{
    if(e.key!=='Tab')return;
    const controls=[...e.currentTarget.querySelectorAll('button:not([disabled]),a[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex="0"]')].filter(control=>control.getClientRects().length);
    const first=controls[0],last=controls.at(-1);
    if((e.shiftKey&&document.activeElement===first)||(!e.shiftKey&&document.activeElement===last)){e.preventDefault();(e.shiftKey?last:first)?.focus()}
  }} onClick={e=>{
    if(e.target!==e.currentTarget)return;const r=e.currentTarget.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close();
  }}>
    <header className="culture-detail-header"><span>UDHBHAV 2K27 / DISTRICT {act.number}</span><span>{act.title}</span><button type="button" onClick={close} aria-label="Close Cultural event details"><X size={23} aria-hidden="true"/></button></header>
    <div className="culture-detail-scroll"><div className="culture-detail-body">
      <div className="culture-detail-media">
        {image && failedSrc!==image.src ? <img src={image.src} alt={image.alt||event.title} onError={()=>setFailedSrc(image.src)} width="720" height="960"/> : <CulturalPoster event={event} act={act}/>}
        {images.length>1 && <div className="culture-gallery-controls"><button type="button" aria-label="Previous event image" onClick={()=>setImageIndex((imageIndex+images.length-1)%images.length)}><ChevronLeft aria-hidden="true"/></button><span>{imageIndex+1} / {images.length}</span><button type="button" aria-label="Next event image" onClick={()=>setImageIndex((imageIndex+1)%images.length)}><ChevronRight aria-hidden="true"/></button></div>}
        <div className="culture-detail-curtain" aria-hidden="true"/>
      </div>
      <div className="culture-detail-info"><p className="culture-detail-kicker">{act.title} / {event.subgroup??'Cultural & activities'}</p><h2 id="culture-detail-title">{event.title}</h2><p id="culture-detail-description">{event.description}</p>
        {event.id==='dancing-competition' && <p className="culture-dance-styles">Freestyle · Techno · Mass</p>}
        <dl className="culture-event-facts"><div><dt>Event date</dt><dd>{date}</dd></div><div><dt>Time</dt><dd>{time}</dd></div><div><dt>Venue</dt><dd>{event.venue||pending}</dd></div></dl>
        <section className="culture-coordinators" aria-label="Event coordinators"><h3>Your event coordinators</h3>{event.coordinators.map((person,i)=><div key={`coordinator-${i}`}><span>0{i+1}</span><p><span>{person.name||'Name to be announced'}</span>{person.phone?<a href={`tel:${person.phone}`}>{person.phone}</a>:<small>Phone to be announced</small>}</p></div>)}</section>
        <section className="culture-registration" aria-label="Registration information"><h3>Registration</h3>{event.registrationWhatsapp?<a className="culture-registration-link" href={event.registrationWhatsapp} target="_blank" rel="noreferrer">Register / enquire on WhatsApp <ArrowUpRight size={18} aria-hidden="true"/></a>:<p>Registration information is coming soon.</p>}</section>
        <dl className="culture-contact-facts"><div><dt>Contact number</dt><dd>{event.contactPhone?<a href={`tel:${event.contactPhone}`}>{event.contactPhone}</a>:pending}</dd></div><div><dt>WhatsApp</dt><dd>{event.registrationWhatsapp?<a href={event.registrationWhatsapp} target="_blank" rel="noreferrer">Open WhatsApp <ArrowUpRight size={13} aria-hidden="true"/></a>:pending}</dd></div><div><dt>Email</dt><dd>{event.contactEmail?<a href={`mailto:${event.contactEmail}`}>{event.contactEmail}</a>:pending}</dd></div></dl>
      </div>
    </div></div>
  </dialog>;
}
