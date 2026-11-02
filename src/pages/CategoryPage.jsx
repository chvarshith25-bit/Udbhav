import { useState, lazy, Suspense } from 'react';
import EventExplorer from '../sections/EventExplorer';
import { Footer } from '../sections/Supporting';
const EventDialog = lazy(() => import('../components/EventDialog'));
export default function CategoryPage({ category }) {
  const [event, setEvent] = useState(null);
  return <><main className={`category-page page-${category}`}><EventExplorer active={category} onEvent={setEvent}/></main><Footer/>{event && <Suspense fallback={<div className="dialog-loading" role="status">Opening event details…</div>}><EventDialog key={event.id} event={event} onClose={() => setEvent(null)}/></Suspense>}</>;
}
