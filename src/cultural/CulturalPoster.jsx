import FrequencyArtwork from './FrequencyArtwork';

export default function CulturalPoster({event,act}) {
  return <div className={`culture-poster frequency-poster-${act.kind}`}><div className="culture-poster-top"><span>LIVE FROM UDHBHAV 2K27</span><span>CH {act.number}</span></div><div className="culture-poster-art"><FrequencyArtwork kind={act.kind}/></div><div className="culture-poster-type"><span>{act.title}</span><strong>{event.title}</strong>{event.id==='dancing-competition'&&<small>Freestyle / Techno / Mass</small>}</div><div className="culture-poster-bottom"><span>Event photographs coming soon</span><span>THE FESTIVAL FREQUENCY</span></div></div>;
}
