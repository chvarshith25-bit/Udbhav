import { useCallback, useRef, useState } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { TransitionLink } from '../transitions/PageTransitionProvider';
import { Footer } from '../sections/Supporting';
import { technicalModes } from '../technical/modes';
import Worktable from '../technical/Worktable';
import { useWorkbenchInteractions } from '../technical/useWorkbenchInteractions';
import TechnicalDetail from '../technical/TechnicalDetail';
import '../technical/technical.css';

export default function TechnicalPage(){
 const root=useRef(null),opener=useRef(null);
 const [activeId,setActiveId]=useState(null),[detail,setDetail]=useState(null);
 const selected=technicalModes.find(mode=>mode.id===activeId);
 useWorkbenchInteractions(root,activeId);
 const dismiss=useCallback(()=>setDetail(null),[]);
 const openEvent=(mode,element)=>{
  setActiveId(mode.id);opener.current=element;
  const illustration=element.querySelector('.work-object-illustration');
  const bounds=illustration.getBoundingClientRect();
  setDetail({mode,origin:{left:bounds.left,top:bounds.top,width:bounds.width,height:bounds.height,viewWidth:illustration.clientWidth,viewHeight:illustration.clientHeight,rotation:mode.tilt}});
 };
 return <><main className="build-room" ref={root}>
  <header className="build-room-header"><div className="build-room-meta"><TransitionLink to="/"><ArrowLeft size={14} aria-hidden="true"/>The festival</TransitionLink><span>UDHBHAV 2K27 / Technical</span><span>Four competitions. Bring your curiosity.</span></div><div className="build-room-title"><h1 tabIndex={-1}>TECHNICAL</h1><div><span>The Build Room.</span><p>Enter with an idea.<br/>Leave with something extraordinary.</p></div></div></header>
  <section className="build-room-workspace" aria-label="Explore four Technical competitions on the interactive worktable"><div className="build-room-invitation"><p>Pick something up.<br/><span>See where it takes you.</span></p><span>Four independent competitions.<br/>Choose any object to explore.</span></div><Worktable activeId={activeId} onActivate={setActiveId} onOpen={openEvent}/><div className="build-room-context" aria-live="polite"><div><span>{selected?`${selected.number} / ${selected.name}`:'THE BUILD ROOM'}</span><h2>{selected?selected.event.title:'Good things start with a little curiosity.'}</h2></div><p>{selected?selected.event.description:'Code, pitch, build or showcase. Four ways to turn what’s in your head into something worth sharing.'}</p><span className="build-room-context-arrow" aria-hidden="true"><ArrowUpRight size={25}/></span></div></section>
  <footer className="build-room-footer"><span>Original illustrated workspace / Event photographs coming soon</span><TransitionLink to="/">Back to the festival <ArrowUpRight size={16} aria-hidden="true"/></TransitionLink></footer>
 </main><Footer/>{detail&&<TechnicalDetail mode={detail.mode} origin={detail.origin} onDismiss={dismiss} opener={opener.current}/>}</>;
}
