import { About, AnnualDay, Gallery, Contact, Footer } from '../sections/Supporting';
import Schedule from '../sections/Schedule';
export default function FestivalPage({ section }) {
  const titles = { about: 'The spirit of UDHBHAV', schedule: 'Festival schedule', gallery: 'Through the lens', contact: 'Be part of it' };
  return <><main className="festival-page"><h1 className="sr-only" tabIndex={-1}>{titles[section]}</h1>{section === 'about' && <About/>}{section === 'schedule' && <><Schedule/><AnnualDay/></>}{section === 'gallery' && <Gallery/>}{section === 'contact' && <Contact/>}</main><Footer/></>;
}
