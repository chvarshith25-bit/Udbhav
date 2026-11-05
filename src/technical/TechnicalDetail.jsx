import { useLayoutEffect, useRef, useState } from 'react';
import { X, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import InventionArt from './InventionArt';
import TechnicalOpening from './TechnicalOpening';

const pending = 'To be announced';
export default function TechnicalDetail({ mode, onDismiss, opener }) {
  const event=mode.event;
  const modeIndex=Number(mode.number)-1;
  const dialog=useRef(null);
  const content=useRef(null);
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
    return()=>{
      if(el.open)el.close();
      document.body.style.overflow=previousOverflow;document.body.style.paddingRight=previousPadding;
      requestAnimationFrame(()=>{
        if(!el.open && opener?.isConnected){window.scrollTo({top:savedY,left:0,behavior:'instant'});opener.focus({preventScroll:true});}
      });
    };
  },[opener]);
  const close=()=>dialog.current.close();
  const date=event.date?new Date(`${event.date}T12:00:00+05:30`).toLocaleDateString('en-IN',{dateStyle:'long',timeZone:'Asia/Kolkata'}):pending;
  const time=event.startTime?`${event.startTime}${event.endTime?` – ${event.endTime}`:''} IST`:pending;
  return <dialog ref={dialog} className="technical-detail" aria-labelledby="tech-detail-title" aria-describedby="tech-detail-description" onClose={()=>{if(!dialog.current?.open)onDismiss()}} onCancel={e=>{e.preventDefault();close()}} onKeyDown={e=>{
    if(e.key!=='Tab')return;
    const controls=[...e.currentTarget.querySelectorAll('button:not([disabled]),a[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex="0"]')].filter(control=>control.getClientRects().length&&!control.closest('[inert]')&&getComputedStyle(control).visibility!=='hidden');
    const first=controls[0],last=controls.at(-1);
    if((e.shiftKey&&document.activeElement===first)||(!e.shiftKey&&document.activeElement===last)){e.preventDefault();(e.shiftKey?last:first)?.focus()}
  }} onClick={e=>{
    if(e.target!==e.currentTarget)return;const r=e.currentTarget.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close();
  }}>
    <header className="tech-detail-header"><span>UDHBHAV 2K27 / EXPERIENCE {mode.number}</span><span>{mode.name}</span><button type="button" onClick={close} aria-label="Close Technical event details"><X size={23} aria-hidden="true"/></button></header>
    <div className="tech-detail-stage"><div ref={content} className="tech-detail-scroll"><div className="tech-detail-body">
      <div className="tech-detail-media">
        {image && failedSrc!==image.src ? <img src={image.src} alt={image.alt||event.title} onError={()=>setFailedSrc(image.src)} width="720" height="960"/> : <div className="technical-photo-study"><span>UD / INVENTION STUDY {mode.number}</span><InventionArt modeIndex={modeIndex}/><strong>{event.title}</strong><p>Original assembly study. Event photographs coming soon.</p></div>}
        {images.length>1 && <div className="tech-gallery-controls"><button type="button" aria-label="Previous event image" onClick={()=>setImageIndex((imageIndex+images.length-1)%images.length)}><ChevronLeft aria-hidden="true"/></button><span>{imageIndex+1} / {images.length}</span><button type="button" aria-label="Next event image" onClick={()=>setImageIndex((imageIndex+1)%images.length)}><ChevronRight aria-hidden="true"/></button></div>}

      </div>
      <div className="tech-detail-info"><p className="tech-detail-kicker">{mode.name} / Technical</p><h2 id="tech-detail-title">{event.title}</h2><p id="tech-detail-description">{event.description}</p>
        <dl className="tech-event-facts"><div><dt>Event date</dt><dd>{date}</dd></div><div><dt>Time</dt><dd>{time}</dd></div><div><dt>Venue</dt><dd>{event.venue||pending}</dd></div></dl>
        <section className="tech-rules"><h3>Rules & eligibility</h3>{event.rules?(Array.isArray(event.rules)?<ul>{event.rules.map(rule=><li key={rule}>{rule}</li>)}</ul>:<p>{event.rules}</p>):<p>Rules to be announced.</p>}{event.eligibility&&<p>{event.eligibility}</p>}{mode.id==='branch-wise-hackathons'&&(event.branchTracks?.length?<><h3>Branch-wise tracks</h3><ul>{event.branchTracks.map(track=><li key={track}>{track}</li>)}</ul></>:<p>Branch-wise tracks and information will be announced.</p>)}</section>
        <section className="tech-coordinators" aria-label="Event coordinators"><h3>Your event coordinators</h3>{event.coordinators.map((person,i)=><div key={`coordinator-${i}`}><span>0{i+1}</span><p><span>{person.name||'Name to be announced'}</span>{person.phone?<a href={`tel:${person.phone}`}>{person.phone}</a>:<small>Phone to be announced</small>}</p></div>)}</section>
        <section className="tech-registration" aria-label="Registration information"><h3>Registration</h3>{event.registrationWhatsapp?<a className="tech-registration-link" href={event.registrationWhatsapp} target="_blank" rel="noreferrer">Register / enquire on WhatsApp <ArrowUpRight size={18} aria-hidden="true"/></a>:<p>Registration information is coming soon.</p>}</section>
        <dl className="tech-contact-facts"><div><dt>Contact number</dt><dd>{event.contactPhone?<a href={`tel:${event.contactPhone}`}>{event.contactPhone}</a>:pending}</dd></div><div><dt>WhatsApp</dt><dd>{event.registrationWhatsapp?<a href={event.registrationWhatsapp} target="_blank" rel="noreferrer">Open WhatsApp <ArrowUpRight size={13} aria-hidden="true"/></a>:pending}</dd></div><div><dt>Email</dt><dd>{event.contactEmail?<a href={`mailto:${event.contactEmail}`}>{event.contactEmail}</a>:pending}</dd></div></dl>
      </div>
    </div></div><TechnicalOpening modeIndex={modeIndex} content={content}/></div>
  </dialog>;
}
