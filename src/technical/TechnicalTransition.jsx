import InventionArt from './InventionArt';
import './technical-transition.css';

export default function TechnicalTransition(){
 return <div className="technical-route" aria-hidden="true"><div className="technical-route-board"><svg className="technical-route-draft" viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none" aria-hidden="true"><path d="M720 100V800M150 450H1290M270 220H1170V680H270ZM235 205H285M260 180V230M1155 205H1205M1180 180V230M235 695H285M260 670V720M1155 695H1205M1180 670V720" stroke="currentColor" strokeWidth="1"/><path d="M310 630L720 170L1130 630ZM460 740H980M460 730V750M980 730V750" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8"/></svg><span className="technical-route-label">UDHBHAV 2K27 / THE INVENTION ENGINE</span></div><div className="technical-route-machine"><InventionArt/></div></div>;
}
