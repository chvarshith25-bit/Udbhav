import { useId, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { technicalModes } from './modes';
import WorkObject from './WorkObject';

function DeskLamp(){
 const id=useId().replace(/[^a-zA-Z0-9_-]/g,'');
 return <svg className="worktable-lamp" viewBox="0 0 260 240" fill="none" aria-hidden="true"><defs><linearGradient id={`lamp-${id}`} x2="1" y2="1"><stop stopColor="#3b4649"/><stop offset="1" stopColor="#6b7676"/></linearGradient></defs><ellipse cx="212" cy="47" rx="35" ry="31" fill="#202a2d" fillOpacity=".12"/><ellipse cx="209" cy="39" rx="35" ry="31" fill={`url(#lamp-${id})`} stroke="#334348"/><path d="M208 35L173 87L117 116" stroke="#24363d" strokeWidth="14" strokeLinecap="round"/><path d="M208 32L170 83L114 111" stroke="#88918a" strokeWidth="3"/><circle cx="174" cy="85" r="12" fill="#516261" stroke="#2a3e43"/><circle cx="174" cy="85" r="4" fill="#b1b4a2"/><ellipse cx="106" cy="141" rx="56" ry="43" transform="rotate(-27 106 141)" fill="#233438" fillOpacity=".13"/><ellipse cx="101" cy="130" rx="56" ry="43" transform="rotate(-27 101 130)" fill={`url(#lamp-${id})`} stroke="#34464a"/><ellipse cx="98" cy="137" rx="42" ry="28" transform="rotate(-27 98 137)" fill="#e6d2aa" stroke="#aeb3a0"/><ellipse cx="97" cy="138" rx="27" ry="15" transform="rotate(-27 97 138)" fill="#fff1cb"/><path d="M66 109Q94 76 128 106" stroke="#87968a" strokeWidth="2"/></svg>;
}
export default function Worktable({interactive=true,activeId=null,onActivate,onOpen}){
 const pointer=useRef({x:NaN,y:NaN});
 return <div className={`worktable ${interactive?'worktable-interactive':'worktable-study'}`} data-worktable="true"><div className="worktable-grain"/><div className="worktable-light-pool"/><DeskLamp/><span className="worktable-label">UD / TECHNICAL<br/>THE BUILD ROOM</span>{technicalModes.map(mode=>{
  const contents=<><span className="work-object-rest"><span className="work-object-lift"><WorkObject kind={mode.kind}/></span></span><span className="work-object-label"><span className="work-object-number">{mode.number}</span><span><strong>{mode.event.title}</strong><small id={interactive?`work-object-desc-${mode.id}`:undefined}>{interactive&&activeId===mode.id?mode.event.description:mode.name}</small></span><ArrowUpRight size={20} aria-hidden="true"/></span></>;
  return interactive?<button key={mode.id} type="button" className={`workbench-object workbench-object-${mode.kind}`} style={{'--object-tilt':`${mode.tilt}deg`}} data-work-object={mode.id} data-active={activeId===mode.id} aria-label={`Explore ${mode.event.title}`} aria-describedby={`work-object-desc-${mode.id}`} onPointerMove={event=>{if(event.pointerType==='touch')return;const moved=pointer.current.x!==event.clientX||pointer.current.y!==event.clientY;pointer.current={x:event.clientX,y:event.clientY};if(moved&&activeId!==mode.id)onActivate(mode.id)}} onFocus={()=>onActivate(mode.id)} onClick={event=>onOpen(mode,event.currentTarget)}>{contents}</button>:<div key={mode.id} className={`workbench-object workbench-object-${mode.kind}`} style={{'--object-tilt':`${mode.tilt}deg`}}>{contents}</div>;
 })}<span className="worktable-tape" aria-hidden="true">IDEAS WELCOME.</span></div>;
}
