import FestivalMark from '../components/FestivalMark';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, ArrowRight, Search, X } from 'lucide-react';
import { categories, events } from '../data/events';
export default function EventExplorer({ active, onCategory, onEvent }) {
  const [query, setQuery] = useState('');
  const category = categories.find(c => c.id === active);
  const filtered = events.filter(e => e.category === active && e.title.toLowerCase().includes(query.toLowerCase()));
  return <section id="events" className="events-section section-pad">
    <div className="section-topline"><span className="eyebrow">01 / FIND YOUR MOMENT</span><span className="eyebrow muted">THREE WORLDS. ONE FESTIVAL.</span></div>
    <div className="section-heading" data-reveal><h2>Whatever moves you.<br/><span>Find it here.</span></h2><p>Chase a win. Own the stage. Build an idea.<br/>There’s more than one way to be part of it.</p></div>
    <div className="category-tabs" role="tablist" aria-label="Event categories">{categories.map(c => <button key={c.id} id={`tab-${c.id}`} role="tab" aria-selected={active === c.id} aria-controls="event-panel" tabIndex={active === c.id ? 0 : -1} onClick={() => { onCategory(c.id); setQuery(''); }} onKeyDown={e => { if (['ArrowLeft','ArrowRight','Home','End'].includes(e.key)) { e.preventDefault(); const index = categories.findIndex(x => x.id === active); const next = e.key === 'Home' ? 0 : e.key === 'End' ? 2 : (index + (e.key === 'ArrowRight' ? 1 : 2)) % 3; onCategory(categories[next].id); setQuery(''); document.getElementById(`tab-${categories[next].id}`).focus(); } }}><span>/{c.number}</span>{c.label}<ArrowUpRight size={23}/></button>)}</div>
    <div id="event-panel" role="tabpanel" aria-labelledby={`tab-${active}`} className="event-panel">
      <AnimatePresence mode="wait"><motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .22 }} className="category-feature">
        <div className={`category-art ${active}`} aria-hidden="true"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/><span className="category-art-symbol">{active === 'sports' ? <ArrowUpRight strokeWidth={1.2}/> : active === 'cultural' ? <FestivalMark/> : '{ }'}</span><span className="art-index">UD / {category.number}</span><span className="art-label">{category.cue}</span></div>
        <div className="category-intro"><span className="eyebrow">{String(events.filter(e => e.category === active).length).padStart(2,'0')} EVENTS / {active === 'cultural' ? 'CULTURAL & ACTIVITIES' : category.label.toUpperCase()}</span><h3>{category.heading}</h3><p>{category.intro}</p><span className="inline-cue">Choose your event <ArrowRight size={18}/></span></div>
      </motion.div></AnimatePresence>
      <div className="event-list-wrap"><label className="event-search"><Search size={17}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder={`Search ${category.label.toLowerCase()} events`} aria-label={`Search ${category.label.toLowerCase()} events`}/>{query && <button onClick={()=>setQuery('')} aria-label="Clear search"><X size={16}/></button>}</label><div className="event-list">{filtered.map((event, i) => <button className="event-row" key={event.id} onClick={()=>onEvent(event)}><span className="row-index">{String(i + 1).padStart(2,'0')}</span><span className="event-name">{event.title}{event.subgroup === 'Gaming & strategy' && <small>GAMING & STRATEGY</small>}</span><span className="row-details">Explore event</span><ArrowUpRight size={21}/></button>)}{!filtered.length && <p className="empty-search" role="status">No events match “{query}”. Try another search.</p>}</div></div>
    </div>
  </section>;
}
