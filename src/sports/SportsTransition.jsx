import ArenaGraphic from './ArenaGraphic';
import './sports-transition.css';

export default function SportsTransition(){
 return <div className="takeover-route" aria-hidden="true" style={{'--arena-accent':'#d7f34d'}}><div className="takeover-route-pool"/><div className="takeover-route-light"/><div className="takeover-route-floor"><ArenaGraphic/></div><div className="takeover-route-word"><span>UDHBHAV 2K27 / THE ARENA TAKEOVER</span><strong>SPORTS</strong><small>NINE GAMES. ONE UDHBHAV.</small></div></div>;
}
