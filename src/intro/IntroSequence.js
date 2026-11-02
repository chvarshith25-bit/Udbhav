import gsap from 'gsap';

// Eight-second procedural ident: no photographs, logos, video or remote assets.
export function createIntroSequence(root, onComplete) {
  const word = root.querySelector('.intro-word');
  const year = root.querySelector('.intro-year');
  const spark = root.querySelector('.intro-spark');
  const beams = root.querySelectorAll('.intro-beam');
  const labels = root.querySelectorAll('.intro-energy-label');
  const traces = root.querySelectorAll('.intro-trace');
  const orbits = root.querySelector('.intro-orbits');
  const homeWord = document.querySelector('.hero-title > span:first-child');
  const homeYear = document.querySelector('.hero-year');
  if (!homeWord || !homeYear) throw new Error('Homepage wordmark not ready');
  const homeStyle = getComputedStyle(homeWord);
  const homeDetails = document.querySelectorAll('.site-header, .hero-meta, .hero-tagline, .hero-bottom');
  const homeVisual = document.querySelector('.hero-visual');
  gsap.set([homeWord, homeYear], { opacity: 0 });
  gsap.set(homeDetails, { opacity: 0 });
  gsap.set(homeVisual, { scale: 1.035 });
  gsap.set(word, { xPercent: -50, yPercent: -50, clipPath: 'inset(0 100% 0 0)' });
  gsap.set(year, { xPercent: -50, yPercent: -50, opacity: 0 });
  gsap.set(spark, { xPercent: -50, yPercent: -50, scaleY: 0, opacity: 0 });
  gsap.set(labels, { opacity: 0, y: 8 });
  gsap.set(beams, { opacity: 0, scaleX: .2 });
  gsap.set(traces, { strokeDasharray: 1, strokeDashoffset: 1 });
  gsap.set(orbits, { opacity: 0, scale: .75, rotation: -18, transformOrigin: '50% 50%' });
  const tl = gsap.timeline({ onComplete });
  for (const [phase, at] of [['spark',0],['energy',.8],['identity',3.5],['handoff',6.3]]) tl.set(root, {attr:{'data-phase':phase}}, at);
  // A precise warm spark becomes three measured trajectories.
  tl.to(spark, { opacity: 1, scaleY: 1, duration: .5, ease: 'power3.out' }, .12);
  tl.to(spark, { rotation: 90, scaleY: 4.5, duration: .7, ease: 'power3.inOut' }, .65);
  tl.fromTo(beams[0], {x:-innerWidth*.6,y:-95,rotation:-25}, {x:0,y:0,rotation:-12,scaleX:1,opacity:1,duration:1.4,ease:'power3.out'}, .8);
  tl.fromTo(beams[1], {x:innerWidth*.6,y:95,rotation:25}, {x:0,y:0,rotation:12,scaleX:1,opacity:1,duration:1.5,ease:'power3.out'}, 1);
  tl.fromTo(beams[2], {x:0,y:innerHeight*.55,rotation:90}, {x:0,y:0,rotation:0,scaleX:1,opacity:1,duration:1.4,ease:'power3.out'}, 1.2);
  // Three original SVG paths draw a shared orbital field, not a particle simulation.
  tl.to(orbits, {opacity:.8,scale:1,rotation:8,duration:2.4,ease:'power2.inOut'}, 1.25);
  tl.to(traces, {strokeDashoffset:0,duration:1.8,stagger:.22,ease:'power2.inOut'}, 1.3);
  tl.to(labels, {opacity:.7,y:0,duration:.5,stagger:.12}, 1.8);
  tl.to(spark, {opacity:0,duration:.5}, 2.4);
  tl.to(beams, {scaleX:1.8,opacity:0,duration:.75,stagger:.12,ease:'power2.in'}, 3);
  // The drawn field resolves into a tightly composed typographic identity.
  tl.to(word, {clipPath:'inset(0 0% 0 0)',duration:1.05,ease:'power3.inOut'}, 3.5);
  tl.fromTo(year, {letterSpacing:'.65em',y:12}, {opacity:1,letterSpacing:'.26em',y:0,duration:.75,ease:'power3.out'}, 4.2);
  tl.to(orbits, {opacity:0,scale:1.16,rotation:18,duration:1.2,ease:'power2.inOut'}, 4.2);
  tl.to(labels, {opacity:0,y:-6,duration:.5}, 4.6);
  // A continuous handoff to the live homepage's actual measured wordmark.
  tl.to(word, {
    left:()=>homeWord.getBoundingClientRect().left,top:()=>homeWord.getBoundingClientRect().top,
    xPercent:0,yPercent:0,fontSize:homeStyle.fontSize,lineHeight:homeStyle.lineHeight,
    letterSpacing:homeStyle.letterSpacing,duration:1.35,ease:'power3.inOut',
  }, 6.3);
  tl.to(year, {left:()=>homeYear.getBoundingClientRect().left+homeYear.getBoundingClientRect().width/2,
    top:()=>homeYear.getBoundingClientRect().top+homeYear.getBoundingClientRect().height/2,
    opacity:0,scale:.8,duration:1.1,ease:'power3.inOut'}, 6.35);
  tl.to(root.querySelector('.intro-backdrop'), {opacity:0,duration:1.5,ease:'power2.inOut'}, 6.3);
  tl.to(homeVisual, {scale:1,duration:1.5,ease:'power2.out'}, 6.3);
  tl.to(homeDetails, {opacity:1,duration:.7,stagger:.06,ease:'power2.out'}, 6.85);
  tl.to(homeYear, {opacity:1,duration:.35}, 7.35);
  tl.set(homeWord, {opacity:1}, 7.7);
  tl.set(word, {opacity:0}, 7.7);
  tl.to(root.querySelector('.intro-skip'), {opacity:0,duration:.15}, 7.85);
  tl.to({}, {duration:0}, 8);
  return tl;
}
