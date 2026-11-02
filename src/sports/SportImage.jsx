import AssetVisual from '../components/AssetVisual';
import SportGraphic from './SportGraphic';
export default function SportImage({ event, index = 0 }) {
  return <AssetVisual asset={event.images[index]} className="sports-event-photo"><div className={`sport-art art-${event.id}`}><SportGraphic sport={event.id}/><span className="sport-art-caption">ORIGINAL VECTOR STUDY / EVENT PHOTOGRAPHY COMING SOON</span></div></AssetVisual>;
}
