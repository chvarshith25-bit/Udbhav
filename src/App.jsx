import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import RouteErrorBoundary from './components/RouteErrorBoundary';
import PageTransitionProvider, { TransitionLink } from './transitions/PageTransitionProvider';
import HomePage from './pages/HomePage';
import SportsPage from './pages/SportsPage';
import CulturalPage from './pages/CulturalPage';
import TechnicalPage from './pages/TechnicalPage';
import FestivalPage from './pages/FestivalPage';
export default function App() {
  return <PageTransitionProvider>{location => <>
    <a className="skip-link" href="#page-content">Skip to content</a>
    <Header pathname={location.pathname}/>
    <div id="page-content"><RouteErrorBoundary key={location.key}><Routes location={location}>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/sports" element={<SportsPage/>}/>
      <Route path="/cultural" element={<CulturalPage/>}/>
      <Route path="/technical" element={<TechnicalPage/>}/>
      {['about','schedule','gallery','contact'].map(section => <Route key={section} path={`/${section}`} element={<FestivalPage section={section}/>}/>)}
      <Route path="*" element={<main className="route-error section-pad"><h1 tabIndex={-1}>This moment isn’t here.</h1><p>The page you’re looking for doesn’t exist.</p><TransitionLink to="/" className="outline-button">Back to the festival</TransitionLink></main>}/>
    </Routes></RouteErrorBoundary></div>
  </>}</PageTransitionProvider>;
}
