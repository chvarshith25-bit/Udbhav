import { ArrowUpRight } from 'lucide-react';
import { posterDesigns } from './acts';
import PosterArtwork from './PosterArtwork';

export function PosterSurface({event,district,index=0}){
 const design=posterDesigns[event.id];
 return <><span className="street-poster-meta">UDHBHAV / 2K27 <span>{String(index+1).padStart(2,'0')}</span></span><span className="street-poster-headline">{design.headline.map(line=><span key={line}>{line}</span>)}</span><PosterArtwork kind={design.art}/><span className="street-poster-caption">{design.note}</span><span className="street-poster-footer"><span>{event.title}</span><ArrowUpRight size={17} aria-hidden="true"/></span><span className="sr-only">{district.title}</span></>;
}
export default function CulturalPoster({event,act}){
 const design=posterDesigns[event.id];
 return <div className={`culture-poster street-poster-surface tone-${design.tone} poster-${design.art}`}><PosterSurface event={event} district={act} index={act.events.findIndex(item=>item.id===event.id)}/><p className="street-photo-pending">Event photographs coming soon</p></div>;
}
