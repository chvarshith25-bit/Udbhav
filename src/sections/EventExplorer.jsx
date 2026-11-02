import { TransitionLink } from '../transitions/PageTransitionProvider';
import FestivalMark from '../components/FestivalMark';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, ArrowRight, Search, X } from 'lucide-react';
import { categories, events } from '../data/events';
export default function EventExplorer({ active, onEvent }) {
  const [query, setQuery] = useState('');
  const category = categories.find(c => c.id === active);
  const filtered = events.filter(e => e.category === active && e.title.toLowerCase().includes(query.toLowerCase()));
  return <section id="events" className="events-section section-pad">
    <div className="section-topline"><span className="eyebrow">01 / FIND YOUR MOMENT</span><span className="eyebrow muted">THREE WORLDS. ONE FESTIVAL.</span></div>
    <div className="section-heading" data-reveal><h1 tabIndex={-1}>{category.label}<span className="category-page-number">/{category.number}</span></h1><p>{category.intro}</p></div>
    <nav className="category-tabs" aria-label="Event categories">{categories.map(c => <TransitionLink key={c.id} to={`/${c.id}`} aria-current={active === c.id ? 'page' : undefined}><span>/{c.number}</span>{c.label}<ArrowUpRight size={23}/></TransitionLink>)}</nav>
    <div id="event-panel" aria-label={`${category.label} events`} className="event-panel">
      <AnimatePresence mode="wait"><motion.div key={active} initial={false} transition={{ duration: .22 }} className="category-feature">
        <div className={`category-art ${active}`} aria-hidden="true"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/><span className="category-art-symbol">{active === 'sports' ? <ArrowUpRight strokeWidth={1.2}/> : active === 'cultural' ? <FestivalMark/> : '{ }'}</span><span className="art-index">UD / {category.number}</span><span className="art-label">{category.cue}</span></div>
        <div className="category-intro"><span className="eyebrow">{String(events.filter(e => e.category === active).length).padStart(2,'0')} EVENTS / {active === 'cultural' ? 'CULTURAL & ACTIVITIES' : category.label.toUpperCase()}</span><h3>{category.heading}</h3><p>{category.intro}</p><span className="inline-cue">Choose your event <ArrowRight size={18}/></span></div>
      </motion.div></AnimatePresence>
      <div className="event-list-wrap"><label className="event-search"><Search size={17}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder={`Search ${category.label.toLowerCase()} events`} aria-label={`Search ${category.label.toLowerCase()} events`}/>{query && <button onClick={()=>setQuery('')} aria-label="Clear search"><X size={16}/></button>}</label><div className="event-list">{filtered.map((event, i) => <button className="event-row" key={event.id} onClick={()=>onEvent(event)}><span className="row-index">{String(i + 1).padStart(2,'0')}</span><span className="event-name">{event.title}{event.subgroup === 'Gaming & strategy' && <small>GAMING & STRATEGY</small>}</span><span className="row-details">Explore event</span><ArrowUpRight size={21}/></button>)}{!filtered.length && <p className="empty-search" role="status">No events match “{query}”. Try another search.</p>}</div></div>
    </div>
  </section>;
}
