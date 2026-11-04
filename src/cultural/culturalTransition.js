import gsap from 'gsap';

export function coverCultural(overlay,shell,onCovered) {
  const q=gsap.utils.selector(overlay);
  const panels=q('.transition-panel');
  gsap.set(overlay,{visibility:'visible'});
  gsap.set(panels,{xPercent:0,yPercent:0});
  gsap.set(panels[0],{xPercent:-105});
  gsap.set(panels[1],{xPercent:105});
  const tl=gsap.timeline({onComplete:onCovered});
  tl.to(shell,{opacity:.4,y:0,duration:.25,ease:'power2.out'},0)
    .fromTo(q('.cultural-route-veil'),{autoAlpha:0},{autoAlpha:1,duration:.25},0)
    .fromTo(q('.cultural-route-beam-left'),{autoAlpha:0,rotation:-24},{autoAlpha:.8,rotation:10,duration:.85,ease:'sine.inOut'},.05)
    .fromTo(q('.cultural-route-beam-right'),{autoAlpha:0,rotation:24},{autoAlpha:.7,rotation:-10,duration:.85,ease:'sine.inOut'},.1)
    .fromTo(q('.cultural-route-performance'),{autoAlpha:0,y:15,scale:.96},{autoAlpha:.65,y:0,scale:1,duration:.4},.2)
    .fromTo(q('.cultural-route-wave span'),{scaleY:.1,opacity:0},{scaleY:1,opacity:.65,duration:.24,stagger:.006,ease:'power2.out'},.2)
    .to(q('.cultural-route-wave span'),{scaleY:.32,duration:.17,stagger:.003},.5)
    .to(q('.cultural-route-wave span'),{scaleY:.85,duration:.2,stagger:.003},.72)
    .fromTo(q('.cultural-route-word'),{autoAlpha:0,y:24,scale:.92,clipPath:'inset(0 0 100% 0)'},{autoAlpha:1,y:0,scale:1,clipPath:'inset(0 0 0% 0)',duration:.55,ease:'power3.out'},.38)
    .to(panels[0],{xPercent:0,duration:.42,ease:'power3.inOut'},.83)
    .to(panels[1],{xPercent:0,duration:.42,ease:'power3.inOut'},.86);
  return tl;
}

export function revealCultural(overlay,onRevealed) {
  const q=gsap.utils.selector(overlay);
  return gsap.timeline({onComplete:onRevealed})
    .to(q('.cultural-route-word'),{autoAlpha:0,y:-16,scale:1.08,duration:.26,ease:'power2.in'},0)
    .to(q('.cultural-route-performance, .cultural-route-wave span'),{autoAlpha:0,duration:.2},0)
    .to(q('.cultural-route-beam-left, .cultural-route-beam-right, .cultural-route-veil'),{autoAlpha:0,duration:.4},.05)
    .to(q('.panel-0'),{xPercent:-105,duration:.62,ease:'power3.inOut'},.1)
    .to(q('.panel-1'),{xPercent:105,duration:.62,ease:'power3.inOut'},.14);
}
