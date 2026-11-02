import FestivalMark from './FestivalMark';
import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
const links=[['About','#about'],['Events','#events'],['Schedule','#schedule'],['Gallery','#gallery']];
export default function Header() {
  const [open,setOpen]=useState(false);
  useEffect(()=>{if(!open)return; const escape=e=>{if(e.key==='Escape'){setOpen(false);document.getElementById('menu-toggle')?.focus();}};document.addEventListener('keydown',escape);return()=>document.removeEventListener('keydown',escape);},[open]);
  return <header className="site-header"><a href="#home" className="brand" aria-label="UDHBHAV home">ud<span className="brand-star" aria-hidden="true"><FestivalMark/></span><small>UDHBHAV / 2K27</small></a><nav className="desktop-nav" aria-label="Main navigation">{links.map(([label,href])=><a key={href} href={href}>{label}</a>)}<a className="nav-cta" href="#contact">Be part of it <ArrowUpRight size={15}/></a></nav><a className="college-brand" href="#about" aria-label="About Vidya Jyothi Institute of Technology"><strong>VJIT<span><ArrowUpRight size={16}/></span></strong><small>VIDYA JYOTHI INSTITUTE<br/>OF TECHNOLOGY</small></a><button id="menu-toggle" className="menu-toggle" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="mobile-nav" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>{open&&<nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{[...links,['Be part of it','#contact']].map(([label,href],i)=><a href={href} key={href} onClick={()=>setOpen(false)}><span>0{i+1}</span>{label}<ArrowUpRight/></a>)}</nav>}</header>;
}
