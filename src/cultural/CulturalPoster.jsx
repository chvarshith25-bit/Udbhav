import StageArtwork from './StageArtwork';

export default function CulturalPoster({ event, act, interactive = false, onOpen }) {
  const contents = <><div className="culture-poster-top"><span>UDHBHAV / 2K27</span><span>ACT {act.number}</span></div><div className="culture-poster-art"><StageArtwork kind={act.kind}/></div><div className="culture-poster-type"><span>{act.title}</span><strong>{event.title}</strong>{event.id==='dancing-competition' && <small>Freestyle · Techno · Mass</small>}</div><div className="culture-poster-bottom"><span>Event imagery coming soon</span><span>{interactive ? 'View details ↗' : 'UDHBHAV 2K27'}</span></div></>;
  return interactive ? <button type="button" className="culture-poster" onClick={onOpen} aria-label={`View ${event.title} details`}>{contents}</button> : <div className="culture-poster">{contents}</div>;
}
