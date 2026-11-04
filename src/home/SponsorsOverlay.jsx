import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { X, ArrowUpRight } from 'lucide-react';
import FestivalMark from '../components/FestivalMark';
import { sponsors, sponsorShowcase } from '../data/sponsors';

export default function SponsorsOverlay({ onDismiss, returnFocus }) {
  const dialog = useRef(null);
  useLayoutEffect(() => {
    const el = dialog.current;
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;
    const gap = innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (gap) document.body.style.paddingRight = `${gap}px`;
    el.showModal();
    const context = gsap.context(() => {
      if (!matchMedia('(prefers-reduced-motion: reduce)').matches) gsap.fromTo(el.querySelector('.sponsors-content'), { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: .4, ease: 'power2.out' });
    }, el);
    return () => {
      context.revert();
      if (el.open) el.close();
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
      requestAnimationFrame(() => { if (!el.open && returnFocus.current?.isConnected) returnFocus.current.focus({ preventScroll: true }); });
    };
  }, [returnFocus]);
  const close = () => dialog.current.close();
  return <dialog ref={dialog} className="sponsors-dialog" aria-labelledby="sponsors-title" aria-describedby="sponsors-description" onClose={() => { if (!dialog.current?.open) onDismiss(); }} onCancel={event => { event.preventDefault(); close(); }} onClick={event => {
    if (event.target !== event.currentTarget) return;
    const box = event.currentTarget.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) close();
  }}>
    <button type="button" className="sponsors-close" onClick={close} aria-label="Close sponsors and partners"><X size={22} aria-hidden="true"/></button>
    <div className="sponsors-content">
      <div className="sponsors-topline"><span>UDHBHAV 2K27</span><span>January 28–30, 2027</span></div>
      <p className="sponsors-kicker">{sponsorShowcase.title}</p>
      <h2 id="sponsors-title">{sponsors.length ? 'The people behind the festival.' : sponsorShowcase.emptyHeading}</h2>
      <p id="sponsors-description">{sponsors.length ? sponsorShowcase.description : sponsorShowcase.emptyDescription}</p>
      {sponsors.length ? <ul className="sponsors-list">{sponsors.map(partner => <li key={partner.id}>{partner.logo && <img src={partner.logo.src} alt={partner.logo.alt} width="160" height="80"/>}{partner.url ? <a href={partner.url} target="_blank" rel="noreferrer">{partner.name}<ArrowUpRight size={16} aria-hidden="true"/></a> : <span>{partner.name}</span>}</li>)}</ul> : <div className="sponsors-reserved" aria-hidden="true"><div className="sponsors-banner"><FestivalMark/><span>2K27</span></div><div className="sponsors-pole"/><div className="sponsors-pole"/></div>}
      <div className="sponsors-bottom"><span className="sponsors-status"><i/>{sponsors.length ? 'Official festival partners' : sponsorShowcase.emptyStatus}</span><button type="button" onClick={close}>Back to the festival <ArrowUpRight size={17} aria-hidden="true"/></button></div>
    </div>
  </dialog>;
}
