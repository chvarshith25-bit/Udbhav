import gsap from 'gsap';

export const DURATION = 9;
export function createCampusTimeline(root, { onComplete }) {
  const q = gsap.utils.selector(root);
  const world = q('.ct-world');
  const source = q('.ct-screen-word')[0];
  const target = () => root.querySelector('.hero-title > span:first-child');
  const bridge = q('.ct-bridge');
  const bounds = element => element.getBoundingClientRect();
  const sourceScale = () => bounds(source).width / source.offsetWidth;
  const tl = gsap.timeline({ paused: true, onComplete, defaults: { ease: 'power2.inOut' } });

  tl.set(q('.ct-film'), { autoAlpha: 1 })
    .set(q('.ct-homepage .hero-title, .ct-homepage .site-header, .ct-homepage .hero-meta, .ct-homepage .hero-tagline, .ct-homepage .hero-bottom'), { opacity: 0 })
    .set(world, { scale: 1.08, xPercent: -1.5, yPercent: 2, transformOrigin: '50% 29%' })
    .set(q('.ct-court, .ct-stage, .ct-pavilion'), { opacity: .22 })
    .set(q('.ct-beam, .ct-lamp, .ct-stage-lamps, .ct-stage-backlights, .ct-stage-edge, .ct-pavilion-screens, .ct-pavilion-edge, .ct-festoon-bulbs, .ct-ground-wash, .ct-horizon-glow, .ct-crowd, .ct-court-players, .ct-basketball, .ct-display-edge'), { opacity: 0 })
    .set(q('.ct-perimeter'), { strokeDasharray: '3400', strokeDashoffset: 3400, opacity: 0 })
    .set(q('.ct-number, .ct-screen-id, .ct-screen-caption'), { opacity: 0 })
    .set(bridge, { autoAlpha: 0 })
    .set(q('.ct-night'), { opacity: .34 })
    .to(world, { scale: 1, xPercent: 0, yPercent: 0, duration: 7.4, ease: 'sine.inOut' }, 0)
    .to(q('.ct-night'), { opacity: .08, duration: 2 }, 1.1)
    .to(q('.ct-court'), { opacity: 1, duration: .65 }, 1.1)
    .to(q('.ct-light-towers > g:nth-child(1) .ct-lamp, .ct-light-towers > g:nth-child(3) .ct-lamp'), { opacity: 1, duration: .2, stagger: .025 }, 1.1)
    .to(q('.ct-court-light'), { opacity: .85, duration: .7 }, 1.15)
    .to(q('.ct-court-players, .ct-basketball'), { opacity: 1, duration: .5 }, 1.4)
    .to(q('.ct-basketball'), { y: -24, duration: .42, ease: 'power2.out', yoyo: true, repeat: 1 }, 1.6)
    .to(q('.ct-stage, .ct-stage-lamps, .ct-stage-edge'), { opacity: 1, duration: .65 }, 1.65)
    .to(q('.ct-stage-light'), { opacity: .65, duration: .65, stagger: .12 }, 1.7)
    .fromTo(q('.ct-stage-light')[0], { rotation: -9 }, { rotation: 6, duration: 4.8, ease: 'sine.inOut' }, 1.7)
    .fromTo(q('.ct-stage-light')[1], { rotation: 9 }, { rotation: -6, duration: 4.8, ease: 'sine.inOut' }, 1.7)
    .to(q('.ct-stage-backlights'), { opacity: .42, duration: .6 }, 1.8)
    .to(q('.ct-pavilion, .ct-pavilion-screens, .ct-pavilion-edge'), { opacity: 1, duration: .65 }, 2.15)
    .to(q('.ct-light-towers > g:nth-child(2) .ct-lamp, .ct-light-towers > g:nth-child(4) .ct-lamp'), { opacity: 1, duration: .2, stagger: .025 }, 2.15)
    .to(q('.ct-tech-light'), { opacity: .8, duration: .65 }, 2.15)
    .to(q('.ct-display-edge, .ct-screen-caption'), { opacity: .65, duration: .5 }, 2.5);

  // One physical display in the same world, not separate category scenes.
  [3, 4, 5].forEach((time, i) => {
    const number = q(`.ct-number-${3-i}`);
    tl.fromTo(number, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: .14, ease: 'power2.out' }, time)
      .to(number, { opacity: 0, y: -5, duration: .13, ease: 'power2.in' }, time + .82);
  });

  tl.to(q('.ct-festoon-bulbs'), { opacity: 1, duration: .45 }, 6)
    .to(q('.ct-perimeter'), { opacity: .9, strokeDashoffset: 0, duration: .85, ease: 'power2.out' }, 6)
    .to(q('.ct-ground-wash, .ct-horizon-glow'), { opacity: 1, duration: .8 }, 6)
    .to(q('.ct-crowd'), { opacity: 1, duration: .65 }, 6.05)
    .to(q('.ct-stage-backlights'), { opacity: 1, duration: .55 }, 6)
    .to(q('.ct-screen-caption'), { opacity: 0, duration: .15 }, 6)
    .fromTo(q('.ct-screen-id'), { opacity: 0, clipPath: 'inset(48% 0 48% 0)' }, { opacity: 1, clipPath: 'inset(0% 0 0% 0)', duration: .65, ease: 'power3.out' }, 6.1)
    .to(q('.ct-display-edge'), { opacity: 1, duration: .3 }, 6.1)
    // The camera travels toward the display before its typography meets the homepage.
    .to(world, { scale: 3.1, xPercent: 0, yPercent: 0, duration: 1.1, ease: 'power3.in' }, 7.25)
    .fromTo(bridge, {
      left: () => bounds(source).left,
      top: () => bounds(source).top,
      fontSize: () => parseFloat(getComputedStyle(source).fontSize) * sourceScale(),
      letterSpacing: () => `${parseFloat(getComputedStyle(source).letterSpacing) * sourceScale()}px`,
      lineHeight: () => `${parseFloat(getComputedStyle(source).lineHeight) * sourceScale()}px`,
      fontWeight: 900,
      autoAlpha: 1,
    }, {
      left: () => bounds(target()).left,
      top: () => bounds(target()).top,
      fontSize: () => parseFloat(getComputedStyle(target()).fontSize),
      letterSpacing: () => getComputedStyle(target()).letterSpacing,
      lineHeight: () => getComputedStyle(target()).lineHeight,
      fontWeight: () => getComputedStyle(target()).fontWeight,
      duration: .65, ease: 'power3.inOut', immediateRender: false,
    }, 8.3)
    .to(q('.ct-screen-word'), { opacity: 0, duration: .08 }, 8.3)
    .to(q('.ct-world, .ct-night, .ct-vignette'), { opacity: 0, duration: .55 }, 8.3)
    .to(q('.ct-film'), { backgroundColor: 'rgba(8,15,18,0)', duration: .55 }, 8.3)
    .to(q('.ct-film-meta'), { autoAlpha: 0, duration: .2 }, 8.25)
    .to(q('.ct-homepage .site-header, .ct-homepage .hero-meta, .ct-homepage .hero-tagline, .ct-homepage .hero-bottom'), { opacity: 1, duration: .45 }, 8.5)
    .to(q('.ct-homepage .hero-title'), { opacity: 1, duration: .12 }, 8.88)
    .to(bridge, { autoAlpha: 0, duration: .12 }, 8.88)
    .set(q('.ct-film'), { autoAlpha: 0 }, DURATION);

  return tl;
}
