import AssetVisual from './AssetVisual';
import { siteAssets } from '../data/assets';
import { TransitionLink } from '../transitions/PageTransitionProvider';
import FestivalMark from './FestivalMark';
import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
const links=[['About','/about'],['Events','/sports'],['Schedule','/schedule'],['Gallery','/gallery']];
export default function Header({ pathname }) {
  const [open,setOpen]=useState(false);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(()=>{if(!open)return; const escape=e=>{if(e.key==='Escape'){setOpen(false);document.getElementById('menu-toggle')?.focus();}};document.addEventListener('keydown',escape);return()=>document.removeEventListener('keydown',escape);},[open]);
  return <header className={`site-header ${pathname === '/' ? 'header-home' : 'header-inner'}`}><TransitionLink to="/" className="brand" aria-label="UDHBHAV home">ud<span className="brand-star" aria-hidden="true"><FestivalMark/></span><small>UDHBHAV / 2K27</small></TransitionLink><nav className="desktop-nav" aria-label="Main navigation">{links.map(([label,href])=><TransitionLink key={href} to={href} aria-current={pathname === href ? 'page' : undefined}>{label}</TransitionLink>)}<TransitionLink className="nav-cta" to="/contact">Be part of it <ArrowUpRight size={15}/></TransitionLink></nav><TransitionLink className="college-brand" to="/about" aria-label="About Vidya Jyothi Institute of Technology"><AssetVisual asset={siteAssets.institutionLogo} eager className="college-logo"><span className="institution-placeholder"><strong>VJIT</strong><span>HYDERABAD<small>OFFICIAL LOGO PENDING</small></span></span></AssetVisual></TransitionLink><button id="menu-toggle" className="menu-toggle" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="mobile-nav" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>{open&&<nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{[...links,['Be part of it','/contact']].map(([label,href],i)=><TransitionLink to={href} key={href} onClick={()=>setOpen(false)}><span>0{i+1}</span>{label}<ArrowUpRight/></TransitionLink>)}</nav>}</header>;
}
