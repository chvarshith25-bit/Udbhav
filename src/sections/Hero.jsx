import AssetVisual from '../components/AssetVisual';
import ProceduralVisual from '../components/ProceduralVisual';
import { siteAssets } from '../data/assets';
import { TransitionLink } from '../transitions/PageTransitionProvider';
import FestivalMark from '../components/FestivalMark';
import { ArrowUpRight } from 'lucide-react';
import { categories } from '../data/events';
export default function Hero() {
  return <section id="home" className="hero" aria-labelledby="hero-heading"><div className="hero-image-wrap hero-visual"><AssetVisual asset={siteAssets.hero} eager className="hero-photo"><ProceduralVisual/></AssetVisual></div><div className="hero-shade"/>
    <div className="hero-content"><div className="hero-meta"><span><span className="status-dot"/> VJIT, HYDERABAD</span><span>JAN 28 — 30, 2027</span><span className="hero-edition">A NEW YEAR. A NEW FREQUENCY.</span></div><h1 id="hero-heading" tabIndex={-1} className="hero-title"><span>UDHBHAV</span><span className="hero-year">20<span className="year-symbol" aria-hidden="true"><FestivalMark/></span>27</span></h1><div className="hero-tagline"><p>THE FESTIVAL<br/><em>IN MOTION.</em></p><span className="hero-note">Three days of everything<br/>that makes you feel alive.</span><span className="hero-navigation-note">PICK YOUR WORLD<br/>BELOW <ArrowUpRight size={15}/></span></div></div>
    <div className="hero-bottom"><span className="hero-bottom-label">CHOOSE YOUR<br/>KIND OF ENERGY</span><div className="hero-categories">{categories.map(c=><TransitionLink key={c.id} to={`/${c.id}`}><span className="eyebrow">0{categories.indexOf(c)+1}</span><span>{c.label.toUpperCase()}</span><ArrowUpRight size={23}/></TransitionLink>)}</div><span className="hero-image-credit">CONCEPT VISUAL / OFFICIAL PHOTOGRAPHY COMING SOON</span></div>
  </section>;
}
