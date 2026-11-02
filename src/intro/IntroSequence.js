import gsap from 'gsap';

// Original 3.2-second ident. Only this timeline owns these intro nodes and the
// initial homepage handoff; HomePage suppresses its entrance for this mount.
export function createIntroSequence(root, onComplete) {
  const word = root.querySelector('.intro-word');
  const year = root.querySelector('.intro-year');
  const spark = root.querySelector('.intro-spark');
  const beams = root.querySelectorAll('.intro-beam');
  const labels = root.querySelectorAll('.intro-energy-label');
  const homeWord = document.querySelector('.hero-title > span:first-child');
  const homeYear = document.querySelector('.hero-year');
  if (!homeWord || !homeYear) throw new Error('Homepage wordmark not ready');
  const homeStyle = getComputedStyle(homeWord);
  const homeDetails = document.querySelectorAll('.site-header, .hero-meta, .hero-tagline, .hero-bottom');
  const photo = document.querySelector('.hero-photo');

  gsap.set([homeWord, homeYear], { opacity: 0 });
  gsap.set(homeDetails, { opacity: 0 });
  gsap.set(photo, { scale: 1.035 });
  gsap.set(word, { xPercent: -50, yPercent: -50, clipPath: 'inset(0 100% 0 0)' });
  gsap.set(year, { xPercent: -50, yPercent: -50, opacity: 0 });
  gsap.set(spark, { xPercent: -50, yPercent: -50, scaleY: 0, opacity: 0 });
  gsap.set(labels, { opacity: 0, y: 8 });
  gsap.set(beams, { opacity: 0, scaleX: .2 });

  const tl = gsap.timeline({ onComplete });
  tl.set(root, { attr: { 'data-phase': 'spark' } }, 0);
  tl.set(root, { attr: { 'data-phase': 'energy' } }, .5);
  tl.set(root, { attr: { 'data-phase': 'identity' } }, 1.3);
  tl.set(root, { attr: { 'data-phase': 'handoff' } }, 2.2);
  // 0–0.5 / A single warm incision in the dark.
  tl.to(spark, { opacity: 1, scaleY: 1, duration: .32, ease: 'power3.out' }, .08);
  tl.to(spark, { rotation: 90, scaleY: 3.5, duration: .42, ease: 'power3.inOut' }, .4);
  // 0.5–1.3 / Three restrained trajectories converge into a single identity.
  tl.fromTo(beams[0], { x: -innerWidth * .6, y: -95, rotation: -25 }, { x: 0, y: 0, rotation: -12, scaleX: 1, opacity: 1, duration: .62, ease: 'power3.out' }, .5);
  tl.fromTo(beams[1], { x: innerWidth * .6, y: 95, rotation: 25 }, { x: 0, y: 0, rotation: 12, scaleX: 1, opacity: 1, duration: .65, ease: 'power3.out' }, .57);
  tl.fromTo(beams[2], { x: 0, y: innerHeight * .55, rotation: 90 }, { x: 0, y: 0, rotation: 0, scaleX: 1, opacity: 1, duration: .6, ease: 'power3.out' }, .66);
  tl.to(labels, { opacity: .65, y: 0, duration: .25, stagger: .055 }, .84);
  tl.to(spark, { opacity: 0, duration: .25 }, 1.15);
  tl.to(beams, { scaleX: 1.8, opacity: 0, duration: .4, stagger: .035, ease: 'power2.in' }, 1.18);
  // 1.3–2.2 / The converging lines become the wordmark's reveal edge.
  tl.to(word, { clipPath: 'inset(0 0% 0 0)', duration: .62, ease: 'power3.inOut' }, 1.3);
  tl.fromTo(year, { letterSpacing: '.65em', y: 12 }, { opacity: 1, letterSpacing: '.26em', y: 0, duration: .46, ease: 'power3.out' }, 1.62);
  tl.to(labels, { opacity: 0, y: -6, duration: .25 }, 1.65);
  // 2.2–3.2 / Align the same wordmark to the live homepage, then hand it over.
  tl.to(word, {
    left: () => homeWord.getBoundingClientRect().left,
    top: () => homeWord.getBoundingClientRect().top,
    xPercent: 0, yPercent: 0,
    fontSize: homeStyle.fontSize, lineHeight: homeStyle.lineHeight,
    letterSpacing: homeStyle.letterSpacing,
    duration: .8, ease: 'power3.inOut',
  }, 2.2);
  tl.to(year, {
    left: () => homeYear.getBoundingClientRect().left + homeYear.getBoundingClientRect().width / 2,
    top: () => homeYear.getBoundingClientRect().top + homeYear.getBoundingClientRect().height / 2,
    opacity: 0, scale: .8, duration: .64, ease: 'power3.inOut',
  }, 2.24);
  tl.to(root.querySelector('.intro-backdrop'), { opacity: 0, duration: .85, ease: 'power2.inOut' }, 2.22);
  tl.to(photo, { scale: 1, duration: .88, ease: 'power2.out' }, 2.22);
  tl.to(homeDetails, { opacity: 1, duration: .48, stagger: .045, ease: 'power2.out' }, 2.55);
  tl.to(homeYear, { opacity: 1, duration: .24 }, 2.8);
  tl.set(homeWord, { opacity: 1 }, 3.02);
  tl.set(word, { opacity: 0 }, 3.02);
  tl.to(root.querySelector('.intro-skip'), { opacity: 0, duration: .15 }, 3.05);
  tl.to({}, { duration: .0 }, 3.2);
  return tl;
}
