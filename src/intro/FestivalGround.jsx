import landscape from './unveiling/arena-landscape.webp';
import landscapeSmall from './unveiling/arena-landscape-small.webp';
import portrait from './unveiling/arena-portrait.webp';
import portraitSmall from './unveiling/arena-portrait-small.webp';

export default function FestivalGround({ onError }) {
  return <div className="grand-arena" aria-hidden="true">
    <div className="grand-camera" data-unveil="camera">
      <picture>
        <source media="(orientation: portrait)" srcSet={`${portraitSmall} 576w, ${portrait} 864w`} sizes="100vw"/>
        <img data-unveil="venue" src={landscape} srcSet={`${landscapeSmall} 960w, ${landscape} 1536w`}
          sizes="100vw" alt="" draggable="false" fetchPriority="high" onError={onError}/>
      </picture>
    </div>
    <div className="grand-light grand-light--sport" data-unveil="track-light"/>
    <div className="grand-light grand-light--culture" data-unveil="stage-light"/>
    <div className="grand-light grand-light--identity" data-unveil="marquee"/>
    <div className="grand-gates">
      <div className="grand-gate grand-gate--left" data-unveil="gate-left"/>
      <div className="grand-gate grand-gate--right" data-unveil="gate-right"/>
      <div className="grand-seam" data-unveil="seam"/>
    </div>
  </div>;
}
