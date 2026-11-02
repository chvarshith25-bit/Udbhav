import SportGraphic from './SportGraphic';
import { useLayoutEffect, useRef } from 'react';
import { X } from 'lucide-react';
import gsap from 'gsap';
const full='inset(0% 0% 0% 0%)';
// Each game's opening is a distinct 0.8–1.05s composition inside the native dialog.
export default function SportOpening({ sport, title, origin, onClose }) {
  const root=useRef(null);
  useLayoutEffect(()=>{
    const el=root.current, content=el.parentElement.querySelector('.dialog-content');
    content.inert=true;
    let timer;
    let animation;
    let completed=false;
    const done=()=>{if(completed)return;completed=true;clearTimeout(timer);animation?.kill();content.parentElement.style.backgroundColor='var(--paper)';content.style.visibility='visible';content.inert=false;el.style.visibility='hidden';content.querySelector('.close-button')?.focus({preventScroll:true});};
    const media=matchMedia('(prefers-reduced-motion: reduce)');
    const context=gsap.context(()=>{},root);
    if(media.matches){done();return()=>context.revert()}
    try{context.add(()=>{
      const panels=el.querySelectorAll('.sport-opening-panel');
      const ball=el.querySelector('.sport-opening-ball');
      const lines=el.querySelector('.sport-opening-lines');
      const titleNode=el.querySelector('.sport-opening-title');
      const x=origin?.x??innerWidth/2,y=origin?.y??innerHeight/2;
      const circle=`circle(0px at ${x}px ${y}px)`;
      const openCircle=`circle(${Math.hypot(innerWidth,innerHeight)}px at ${x}px ${y}px)`;
      const tl=gsap.timeline({onComplete:done});
      animation=tl;
      gsap.set(titleNode,{opacity:0,y:12});
      gsap.set(lines,{opacity:0});
      gsap.set(el.querySelector('.sport-opening-ring'),{left:x,top:y});
      if(sport==='basketball'||sport==='carroms'){
        gsap.set(panels[0],{clipPath:circle});
        tl.to(panels[0],{clipPath:openCircle,duration:.4,ease:'power3.inOut'},0);
        if(sport==='carroms')tl.fromTo(el.querySelector('.sport-opening-ring'),{scale:0,opacity:.8},{scale:3,opacity:0,duration:.65,ease:'power2.out'},0);
      }else if(sport==='football'){
        tl.fromTo(panels[0],{xPercent:-100},{xPercent:0,duration:.38,ease:'power4.inOut'},0);
      }else if(sport==='volleyball'){
        tl.fromTo(panels,{scaleY:0,transformOrigin:'top'},{scaleY:1,duration:.24,stagger:.025,ease:'power3.inOut'},0);
      }else if(sport==='table-tennis'){
        tl.fromTo(ball,{x:-innerWidth*.6,y:35,opacity:1},{x:innerWidth*.6,y:-35,duration:.3,ease:'power2.inOut'},0);
        tl.fromTo(panels[0],{xPercent:-100},{xPercent:0,duration:.28},.12);
        tl.fromTo(panels[1],{xPercent:100},{xPercent:0,duration:.28},.12);
      }else if(sport==='cricket'){
        tl.fromTo(panels[0],{clipPath:'ellipse(0% 0% at 0% 100%)'},{clipPath:'ellipse(180% 180% at 0% 100%)',duration:.43,ease:'power3.inOut'},0);
      }else if(sport==='badminton'){
        tl.fromTo(panels[0],{xPercent:-110,yPercent:110},{xPercent:0,yPercent:0,duration:.4,ease:'power3.inOut'},0);
      }else if(sport==='chess'){
        tl.fromTo(panels,{scale:0},{scale:1,duration:.19,stagger:{each:.012,from:'center'},ease:'power2.out'},0);
      }else{
        tl.fromTo(panels[0],{clipPath:'inset(44% 48% 44% 48%)'},{clipPath:full,duration:.4,ease:'power4.inOut'},0);
      }
      tl.to(titleNode,{opacity:1,y:0,duration:.15},.2);
      tl.to(lines,{opacity:.2,duration:.16},.25);
      tl.to(lines,{opacity:0,duration:.16},.49);
      tl.call(()=>{content.parentElement.style.backgroundColor='var(--paper)';content.style.visibility='visible';content.inert=false;},[],.46);
      tl.to(titleNode,{opacity:0,y:-12,duration:.15},.48);
      if(sport==='basketball'||sport==='carroms')tl.to(panels[0],{clipPath:circle,duration:.4,ease:'power3.inOut'},.55);
      else if(sport==='volleyball'||sport==='chess')tl.to(panels,{scaleY:0,transformOrigin:'bottom',duration:.2,stagger:.012,ease:'power3.inOut'},.57);
      else if(sport==='table-tennis'){tl.to(panels[0],{xPercent:-100,duration:.32},.55);tl.to(panels[1],{xPercent:100,duration:.32},.55)}
      else if(sport==='badminton')tl.to(panels[0],{xPercent:110,yPercent:-110,duration:.38,ease:'power3.inOut'},.55);
      else if(sport==='cricket')tl.to(panels[0],{clipPath:'ellipse(0% 0% at 100% 0%)',duration:.4,ease:'power3.inOut'},.55);
      else if(sport==='kabaddi')tl.to(panels[0],{clipPath:'inset(50% 0% 50% 0%)',duration:.38,ease:'power3.inOut'},.55);
      else tl.to(panels[0],{xPercent:100,duration:.38,ease:'power3.inOut'},.55);
    });timer=setTimeout(done,1600);}catch{context.revert();done();}
    media.addEventListener('change',done);
    window.addEventListener('resize',done);
    return()=>{clearTimeout(timer);media.removeEventListener('change',done);window.removeEventListener('resize',done);context.revert();};
  },[sport,origin]);
  const count=sport==='chess'?16:sport==='volleyball'?8:sport==='table-tennis'?2:1;
  return <div ref={root} className="sport-opening" data-sport={sport}>
    <div className="sport-opening-panels" aria-hidden="true">{Array.from({length:count},(_,i)=><div className="sport-opening-panel" key={i}/>)}</div>
    <div className="sport-opening-lines" aria-hidden="true"><SportGraphic sport={sport}/></div>
    <span className="sport-opening-ball" aria-hidden="true"/><span className="sport-opening-ring" aria-hidden="true"/>
    <span className="sport-opening-title" aria-hidden="true">{title}</span>
    <button autoFocus className="close-button sport-opening-close" aria-label="Close event opening" onClick={onClose}><X/></button>
  </div>;
}
