import { memo, useCallback, useRef, useState } from 'react';
import { ArrowLeft, ArrowUpRight, ArrowRight } from 'lucide-react';
import { TransitionLink } from '../transitions/PageTransitionProvider';
import { Footer } from '../sections/Supporting';
import { arenaSports } from '../sports/arenaData';
import ArenaGraphic from '../sports/ArenaGraphic';
import useArenaTakeover from '../sports/useArenaTakeover';
import ArenaDetail from '../sports/ArenaDetail';
import '../sports/arena-takeover.css';

const ArenaStage=memo(function ArenaStage({sport,onOpen}){
 return <section className={`takeover-scene takeover-game-${sport.id}`} style={{'--arena-accent':sport.accent}} data-arena-sport={sport.id} aria-labelledby="takeover-game-heading"><div className="takeover-scene-light"/><div className="takeover-scene-top"><span>UDHBHAV / ARENA {sport.number}</span><span>CHANGE THE GAME.</span></div><h2 className="takeover-game-word" id="takeover-game-heading">{sport.words.map(word=><span key={word}>{word}</span>)}</h2><div className="takeover-arena-visual"><ArenaGraphic sport={sport.id} mutable/></div><div className="takeover-field-caption"><span>{sport.cue}</span><span>ORIGINAL ARENA STUDY</span></div><div className="takeover-active-info"><div><span>{sport.number} / {sport.event.title}</span><p>{sport.event.description}</p></div><button type="button" data-explore-sport={sport.id} onClick={event=>onOpen(sport,event.currentTarget)} aria-label={`Explore ${sport.event.title} event`}>Explore event <ArrowUpRight size={23} aria-hidden="true"/></button></div></section>;
});
export default function SportsPage(){
 const root=useRef(null),opener=useRef(null),pointer=useRef({x:NaN,y:NaN});
 const [activeIndex,setActiveIndex]=useState(0),[previewIndex,setPreviewIndex]=useState(0),[detail,setDetail]=useState(null);
 const active=arenaSports[activeIndex],preview=arenaSports[previewIndex];
 useArenaTakeover(root,active.id);
 const dismiss=useCallback(()=>setDetail(null),[]);
 const open=useCallback((sport,element)=>{opener.current=element;setDetail(sport)},[]);
 return <><main className="sports-takeover" ref={root}><header className="takeover-header"><div className="takeover-meta"><TransitionLink to="/"><ArrowLeft size={14} aria-hidden="true"/>The festival</TransitionLink><span>UDHBHAV 2K27 / SPORTS</span><span>THE ARENA TAKEOVER</span></div><div className="takeover-heading"><h1 tabIndex={-1}>SPORTS</h1><p>Nine games.<br/>{' '}Nine battlegrounds.<br/><strong>One UDHBHAV.</strong></p><span className="takeover-edition">PLAY FOR<br/>THE MOMENT.</span></div></header><div className="takeover-layout"><nav className="takeover-index" aria-label="Choose a sport"><div className="takeover-index-heading"><p>CHANGE<br/>{' '}THE GAME.</p><span>All nine. Any order.</span></div><div className="takeover-game-selector">{arenaSports.map((sport,index)=><button key={sport.id} type="button" data-select-sport={sport.id} aria-pressed={activeIndex===index} aria-controls="takeover-game-heading" onFocus={()=>setPreviewIndex(index)} onPointerMove={event=>{if(event.pointerType==='touch')return;const moved=pointer.current.x!==event.clientX||pointer.current.y!==event.clientY;pointer.current={x:event.clientX,y:event.clientY};if(moved&&previewIndex!==index)setPreviewIndex(index)}} onClick={()=>{setActiveIndex(index);setPreviewIndex(index)}}><span>{sport.number}</span><strong>{sport.event.title}</strong><ArrowRight size={15} aria-hidden="true"/></button>)}</div><div className="takeover-preview" aria-live="polite"><span>IN YOUR SIGHTS / {preview.number}</span><strong>{preview.event.title}</strong><p>{preview.cue}</p></div></nav><ArenaStage sport={active} onOpen={open}/></div><footer className="takeover-footer"><span>Dates, venues and registration details to be announced.</span><div><TransitionLink to="/cultural">Cultural <ArrowUpRight size={14} aria-hidden="true"/></TransitionLink><TransitionLink to="/technical">Technical <ArrowUpRight size={14} aria-hidden="true"/></TransitionLink></div></footer></main><Footer/>{detail&&<ArenaDetail sport={detail} opener={opener.current} onDismiss={dismiss}/>}</>;
}
