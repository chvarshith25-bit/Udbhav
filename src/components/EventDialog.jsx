import FestivalMark from './FestivalMark';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { X, ArrowUpRight, MapPin, CalendarDays, Clock3, ChevronLeft, ChevronRight } from 'lucide-react';
const pending = 'Details coming soon';
export default function EventDialog({ event, onClose }) {
  const dialog = useRef(null);
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    const el = dialog.current;
    const previous = document.activeElement;
    const scroll = document.body.style.overflow;
    el.showModal(); document.body.style.overflow = 'hidden';
    return () => { el.close(); document.body.style.overflow = scroll; previous?.focus(); };
  }, []);
  return <dialog ref={dialog} className="event-dialog" onKeyDown={e => {
      if (e.key !== 'Tab') return;
      const controls = [...e.currentTarget.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), [tabindex="0"]')].filter(el => el.getClientRects().length);
      const first = controls[0], last = controls.at(-1);
      if (!first) { e.preventDefault(); return; }
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }} onCancel={onClose} onClick={e => { if (e.target === e.currentTarget) onClose(); }} aria-labelledby="event-title">
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .25 }} className="dialog-content">
      <button autoFocus className="close-button" aria-label="Close event details" onClick={onClose}><X size={24}/></button>
      <div className={`dialog-art ${event.category}`}>
        {event.images.length ? <><img src={event.images[imageIndex].src} alt={event.images[imageIndex].alt || event.title}/>{event.images.length > 1 && <div className="image-controls"><button aria-label="Previous photograph" onClick={() => setImageIndex((imageIndex + event.images.length - 1) % event.images.length)}><ChevronLeft/></button><span>{imageIndex + 1} / {event.images.length}</span><button aria-label="Next photograph" onClick={() => setImageIndex((imageIndex + 1) % event.images.length)}><ChevronRight/></button></div>}</> : <><span className="art-mark" aria-hidden="true">{event.category === 'sports' ? <ArrowUpRight strokeWidth={1.2}/> : event.category === 'cultural' ? <FestivalMark/> : '{ }'}</span><span className="art-caption">OFFICIAL EVENT PHOTOGRAPHY COMING SOON</span></>}
      </div>
      <div className="dialog-info"><span className="eyebrow">{event.category === 'cultural' ? 'Cultural & Activities' : event.category} {event.subgroup && ` / ${event.subgroup}`}</span><h2 id="event-title">{event.title}</h2><p>{event.description}</p>
        <div className="event-facts"><div><MapPin size={17}/><span>VENUE<strong>{event.venue || pending}</strong></span></div><div><CalendarDays size={17}/><span>EVENT DATE<strong>{event.date ? new Date(event.date+'T12:00:00+05:30').toLocaleDateString('en-IN', { dateStyle: 'long', timeZone: 'Asia/Kolkata' }) : pending}</strong></span></div><div><Clock3 size={17}/><span>TIMING<strong>{event.startTime ? `${event.startTime}${event.endTime ? ' – '+event.endTime : ''} IST` : pending}</strong></span></div></div>
        <div className="coordinators"><h3>Student coordinators</h3>{event.coordinators.map((c,i)=><div key={i}><span>0{i+1}</span><p>{c.name || 'Name coming soon'}<small>{c.phone ? <a href={`tel:${c.phone}`}>{c.phone}</a> : 'Phone coming soon'}</small></p></div>)}</div>
        {event.registrationWhatsapp ? <a className="solid-button" href={event.registrationWhatsapp} target="_blank" rel="noreferrer">Register / enquire on WhatsApp <ArrowUpRight size={18}/></a> : <div className="pending-registration"><span className="status-dot"/> Registration details coming soon</div>}
        <div className="contact-facts"><span>Phone: {event.contactPhone ? <a href={`tel:${event.contactPhone}`}>{event.contactPhone}</a> : pending}</span><span>Email: {event.contactEmail ? <a href={`mailto:${event.contactEmail}`}>{event.contactEmail}</a> : pending}</span></div>
      </div>
    </motion.div>
  </dialog>;
}
