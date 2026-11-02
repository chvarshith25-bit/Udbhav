import FestivalMark from './components/FestivalMark';
import { ArrowUpRight } from 'lucide-react';
import { useRef, useState, lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import EventExplorer from './sections/EventExplorer';
import Schedule from './sections/Schedule';
import { About, AnnualDay, Gallery, Contact, Footer } from './sections/Supporting';
import { useFestivalMotion } from './animations/useFestivalMotion';
const EventDialog=lazy(()=>import('./components/EventDialog'));
export default function App(){
 const root=useRef(null); const [category,setCategory]=useState('sports'); const [event,setEvent]=useState(null);
 useFestivalMotion(root);
 return <div ref={root}><a className="skip-link" href="#events">Skip to events</a><Header/><main><Hero onCategory={setCategory}/><div className="festival-strip" aria-hidden="true"><span>SPORT. CULTURE. POSSIBILITY.</span><span><FestivalMark/></span><span>THE FESTIVAL IN MOTION.</span><span><FestivalMark/></span><span>UDHBHAV 2K27</span><span><ArrowUpRight size={22}/></span></div><About/><EventExplorer active={category} onCategory={setCategory} onEvent={setEvent}/><Schedule/><AnnualDay/><Gallery/><Contact/></main><Footer/>{event&&<Suspense fallback={<div role="status" className="dialog-loading">Opening event details…</div>}><EventDialog key={event.id} event={event} onClose={()=>setEvent(null)}/></Suspense>}</div>
}
