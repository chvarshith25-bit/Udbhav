import { useRef } from 'react';
import Hero from '../sections/Hero';
import { useFestivalMotion } from '../animations/useFestivalMotion';
export default function HomePage() {
  const root = useRef(null);
  useFestivalMotion(root);
  return <main ref={root} className="home-page"><Hero/></main>;
}
