import { useIntroActive } from '../intro/IntroController';
import { useRef } from 'react';
import Hero from '../sections/Hero';
import { useFestivalMotion } from '../animations/useFestivalMotion';
export default function HomePage() {
  const root = useRef(null);
  const introActive = useIntroActive();
  const introOnMount = useRef(introActive);
  useFestivalMotion(root, !introOnMount.current);
  return <main ref={root} className="home-page"><Hero/></main>;
}
