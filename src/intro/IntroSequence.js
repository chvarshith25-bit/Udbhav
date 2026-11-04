import gsap from 'gsap';

// THE FESTIVAL COMES ALIVE — one connected 9.8-second original title sequence.
export function createIntroSequence(root, onComplete) {
  const q=selector=>root.querySelector(selector);
  const all=selector=>root.querySelectorAll(selector);
  const word=q('.intro-word'),year=q('.intro-year');
  const homeWord=document.querySelector('.hero-title > span:first-child');
  const homeYear=document.querySelector('.hero-year');
  if(!homeWord||!homeYear)throw new Error('Homepage wordmark not ready');
  const homeStyle=getComputedStyle(homeWord);
  const homeDetails=document.querySelectorAll('.site-header, .hero-meta, .hero-tagline, .hero-bottom');
  const homeVisual=document.querySelector('.hero-visual');
  gsap.set([homeWord,homeYear,...homeDetails],{opacity:0});
  gsap.set(homeVisual,{scale:1.025});
  gsap.set(word,{xPercent:-50,yPercent:-50,opacity:0,clipPath:'inset(0 50% 0 50%)'});
  gsap.set(year,{xPercent:-50,yPercent:-50,opacity:0});
  gsap.set(all('.film-stage, .film-editor, .film-caption, .film-emblem, .film-institution, .film-dates'),{opacity:0});
  gsap.set(q('.film-court'),{opacity:0,y:20});
  gsap.set(q('.film-athletic-light'),{opacity:0});
  gsap.set(q('.film-ball'),{y:-560,rotation:-35,transformOrigin:'50% 50%'});
  gsap.set(q('.film-ball-shadow'),{scale:.25,opacity:0,transformOrigin:'50% 50%'});
  gsap.set(q('.film-impact'),{scale:0,opacity:0,transformOrigin:'50% 50%'});
  gsap.set(all('.film-stage-beam'),{opacity:0});
  gsap.set(q('.film-editor'),{clipPath:'inset(49.8% 0% 49.8% 0%)',scale:1.04});
  gsap.set(all('.film-code-line'),{clipPath:'inset(0 100% 0 0)'});
  gsap.set(all('.film-preview-row'),{opacity:0,y:8});
  gsap.set(q('.film-build-ready'),{opacity:0});
  const tl=gsap.timeline({onComplete});
  for(const [scene,time]of [['sports',0],['cultural',2.2],['technical',4.4],['identity',6.5],['handoff',8.5]])tl.set(root,{attr:{'data-scene':scene}},time);
  // SPORTS: gravity and one measured rebound, not a looping cartoon bounce.
  tl.to(q('.film-athletic-light'),{opacity:1,duration:.45},.05);
  tl.to(q('.film-court'),{opacity:.38,y:0,duration:.7,ease:'power2.out'},.15);
  tl.to(q('.caption-sports'),{opacity:.8,duration:.25},.35);
  tl.to(q('.film-ball'),{y:118,rotation:5,duration:1.05,ease:'power2.in'},.15);
  tl.to(q('.film-ball-shadow'),{scale:1,opacity:.8,duration:1.05,ease:'power2.in'},.15);
  tl.to(q('.film-ball'),{scaleY:.93,scaleX:1.04,duration:.07},1.2);
  tl.to(q('.film-ball'),{y:-42,rotation:18,scaleY:1,scaleX:1,duration:.42,ease:'power2.out'},1.27);
  tl.to(q('.film-ball-shadow'),{scale:.65,opacity:.5,duration:.42},1.27);
  tl.to(q('.film-ball'),{y:118,rotation:25,duration:.32,ease:'power2.in'},1.69);
  // The second impact expands into the stage's pool of light, in the same space.
  tl.to(q('.film-impact'),{opacity:.28,scaleX:4.2,scaleY:3.2,duration:.5,ease:'power3.out'},2.01);
  tl.to(q('.film-ball'),{opacity:0,scaleY:.93,duration:.22},2.03);
  tl.to(q('.film-ball-shadow'),{opacity:0,duration:.2},2.06);
  tl.to(q('.film-court'),{opacity:0,duration:.45},2.08);
  tl.to(q('.film-stage'),{opacity:1,duration:.4},2.12);
  tl.to(q('.film-athletic-light'),{opacity:0,duration:.4},2.15);
  tl.to(q('.caption-sports'),{opacity:0,duration:.2},2.1);
  tl.to(q('.caption-cultural'),{opacity:.8,duration:.3},2.35);
  tl.fromTo(q('.beam-left'),{rotation:-18,svgOrigin:'-360 -275'},{rotation:8,opacity:.17,duration:.65,ease:'power2.inOut'},2.25);
  tl.fromTo(q('.beam-right'),{rotation:18,svgOrigin:'360 -275'},{rotation:-8,opacity:.16,duration:.65,ease:'power2.inOut'},2.35);
  tl.fromTo(q('.film-microphone'),{y:15,opacity:0},{y:0,opacity:1,duration:.5,ease:'power2.out'},2.4);
  tl.to(q('.film-impact'),{opacity:0,duration:.6},2.5);
  tl.to(q('.beam-left'),{rotation:-6,duration:.65,ease:'sine.inOut'},2.95);
  tl.to(q('.beam-right'),{rotation:6,duration:.65,ease:'sine.inOut'},3.05);
  // The beams converge into a horizontal editing canvas; stage edges become UI.
  tl.to(all('.film-stage-beam'),{rotation:0,opacity:.07,duration:.5,ease:'power2.inOut'},3.65);
  tl.to(q('.film-editor'),{opacity:1,clipPath:'inset(0% 0% 0% 0%)',scale:1,duration:.65,ease:'power3.inOut'},4.08);
  tl.to(q('.film-stage'),{opacity:0,duration:.5},4.2);
  tl.to(q('.caption-cultural'),{opacity:0,duration:.2},4.2);
  tl.to(q('.caption-technical'),{opacity:.8,duration:.25},4.65);
  tl.to(all('.film-code-line'),{clipPath:'inset(0 0% 0 0)',duration:.26,stagger:.095,ease:'power2.out'},4.65);
  tl.to(all('.film-preview-row'),{opacity:1,y:0,duration:.3,stagger:.17,ease:'power2.out'},4.95);
  tl.fromTo(q('.film-code-cursor'),{opacity:0},{opacity:1,duration:.16,repeat:3,yoyo:true},5.4);
  tl.to(q('.film-build-ready'),{opacity:1,duration:.25},5.85);
  // A real festival object in each scene resolves into one complete identity.
  tl.to(q('.film-editor'),{opacity:0,scale:1.07,y:-12,duration:.48,ease:'power2.inOut'},6.25);
  tl.to(q('.caption-technical'),{opacity:0,duration:.2},6.35);
  const previews=all('.film-preview-row>svg');
  all('.film-emblem').forEach((emblem,i)=>{
    tl.fromTo(emblem,{
      x:()=>{const a=previews[i].getBoundingClientRect(),b=emblem.getBoundingClientRect();return a.left+a.width/2-b.left-b.width/2},
      y:()=>{const a=previews[i].getBoundingClientRect(),b=emblem.getBoundingClientRect();return a.top+a.height/2-b.top-b.height/2},
      scale:.7,opacity:0,
    },{x:0,y:0,scale:1,opacity:1,immediateRender:false,duration:.6,ease:'power3.out'},6.4+i*.06);
  });
  tl.to(word,{opacity:1,clipPath:'inset(0 0% 0 0%)',duration:.65,ease:'power3.inOut'},6.5);
  tl.to(year,{opacity:1,duration:.4},6.85);
  tl.fromTo(all('.film-institution, .film-dates'),{y:8},{opacity:1,y:0,duration:.4,stagger:.12,ease:'power2.out'},7);
  // Align the full wordmark to its live homepage position without a separate cut.
  tl.to(word,{left:()=>homeWord.getBoundingClientRect().left,top:()=>homeWord.getBoundingClientRect().top,
    xPercent:0,yPercent:0,fontSize:homeStyle.fontSize,lineHeight:homeStyle.lineHeight,
    letterSpacing:homeStyle.letterSpacing,duration:1.12,ease:'power3.inOut'},8.5);
  tl.to(year,{left:()=>homeYear.getBoundingClientRect().left+homeYear.getBoundingClientRect().width/2,
    top:()=>homeYear.getBoundingClientRect().top+homeYear.getBoundingClientRect().height/2,
    opacity:0,scale:.8,duration:.95,ease:'power3.inOut'},8.55);
  const entries=document.querySelectorAll('.hero-categories>a');
  all('.film-emblem').forEach((emblem,i)=>{
    tl.to(emblem,{x:()=>{const a=entries[i]?.getBoundingClientRect(),b=emblem.getBoundingClientRect();return a?a.left+a.width/2-b.left-b.width/2:0},
      y:()=>{const a=entries[i]?.getBoundingClientRect(),b=emblem.getBoundingClientRect();return a?a.top+a.height/2-b.top-b.height/2:80},
      opacity:0,scale:.4,duration:1,ease:'power3.inOut'},8.5);
  });
  tl.to(all('.film-institution, .film-dates'),{opacity:0,duration:.35},8.5);
  tl.to(q('.intro-backdrop'),{opacity:0,duration:1.15,ease:'power2.inOut'},8.5);
  tl.to(homeVisual,{scale:1,duration:1.2,ease:'power2.out'},8.5);
  tl.to(homeDetails,{opacity:1,duration:.6,stagger:.04,ease:'power2.out'},8.85);
  tl.to(homeYear,{opacity:1,duration:.3},9.15);
  tl.set(homeWord,{opacity:1},9.64);
  tl.set(word,{opacity:0},9.64);
  tl.to(q('.intro-skip'),{opacity:0,duration:.15},9.65);
  tl.to({}, {duration:0},9.8);
  return tl;
}
