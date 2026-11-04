import { useIntroActive } from '../intro/IntroController';
import { useLayoutEffect, useRef } from 'react';
import Hero from '../sections/Hero';
import { useFestivalMotion } from '../animations/useFestivalMotion';
export default function HomePage() {
  const root = useRef(null);
  const introActive = useIntroActive();
  const introOnMount = useRef(introActive);
  useLayoutEffect(() => { if (introActive) introOnMount.current = true; }, [introActive]);
  useFestivalMotion(root, !introOnMount.current && !introActive);
  return <main ref={root} className="home-page arena-home"><Hero/></main>;
}
