import gsap from 'gsap';

export const INTRO_DURATION = 8;

export function createIntroTimeline(root, onComplete) {
  const find = name => root.querySelector(`[data-unveil="${name}"]`);
  const camera = find('camera');
  const venue = find('venue');
  const leftGate = find('gate-left');
  const rightGate = find('gate-right');
  const track = find('track-light');
  const stage = find('stage-light');
  const marquee = find('marquee');
  const identity = find('identity');
  const subtitle = find('subtitle');
  const cameraValue = name => () => Number(getComputedStyle(camera).getPropertyValue(`--grand-${name}`));

  return gsap.timeline({ paused: true, onComplete })
    // Two heavy leaves open over the same moving view.
    .fromTo(find('seam'), { opacity: .12, scaleY: .62 }, {
      opacity: .87, scaleY: 1, duration: .54, ease: 'sine.out',
    }, .05)
    .to(find('seam'), { opacity: 0, duration: .47, ease: 'sine.in' }, .65)
    .fromTo(camera, { scale: 1.16 }, { scale: 1.04, duration: 1.48, ease: 'sine.inOut' }, 0)
    .call(() => {
      // A stalled image request must not leave a blank, locked opening.
      if (!venue.complete || venue.naturalWidth === 0) onComplete();
    }, [], 1.2)
    .to(leftGate, { xPercent: -145, rotationY: 21, duration: 1.05, ease: 'power3.inOut' }, .85)
    .to(rightGate, { xPercent: 145, rotationY: -21, duration: 1.05, ease: 'power3.inOut' }, .85)
    .set([leftGate, rightGate], { visibility: 'hidden' }, 1.91)
    // Follow the running lanes before lifting our gaze to the performers.
    .fromTo(track, { opacity: .88 }, { opacity: .65, duration: .63, ease: 'sine.out' }, 1.25)
    .to(camera, {
      xPercent: cameraValue('sport-x'), yPercent: cameraValue('sport-y'), scale: cameraValue('sport-scale'),
      duration: 1.45, ease: 'power2.inOut',
    }, 1.48)
    .to(camera, {
      xPercent: cameraValue('stage-x'), yPercent: cameraValue('stage-y'), scale: cameraValue('stage-scale'),
      duration: 1.45, ease: 'power2.inOut',
    }, 2.93)
    .to(track, { opacity: 0, duration: .75, ease: 'sine.inOut' }, 2.93)
    .fromTo(stage, { opacity: 0 }, { opacity: .84, duration: .77, ease: 'sine.inOut' }, 2.99)
    .to(stage, { opacity: .2, duration: .62, ease: 'sine.inOut' }, 4.38)
    // Pull back to show both halves of the venue beneath the festival identity.
    .to(camera, { xPercent: 0, yPercent: 0, scale: 1.015, duration: 1.71, ease: 'sine.inOut' }, 4.46)
    .to(stage, { opacity: 0, duration: .7, ease: 'sine.out' }, 4.84)
    .to(marquee, { opacity: 1, duration: .69, ease: 'sine.inOut' }, 4.77)
    .fromTo(identity, { y: 21, opacity: .35, clipPath: 'inset(100% -6% -35% -6%)' }, {
      y: 0, opacity: 1, clipPath: 'inset(-20% -6% -35% -6%)', duration: .64, ease: 'power3.out',
    }, 5.12)
    .fromTo(subtitle, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: .39, ease: 'power2.out' }, 5.5)
    // Clear the identity first so its type never doubles with the homepage.
    .to([identity, subtitle], { opacity: 0, y: -13, duration: .27, ease: 'sine.inOut' }, 7.25)
    .fromTo(root, { clipPath: 'inset(0% 0% 0% 0%)' }, {
      clipPath: 'inset(0% 0% 100% 0%)', duration: .5, ease: 'power2.inOut',
    }, INTRO_DURATION - .5);
}
