import './cultural-transition.css';

export default function CulturalTransition() {
  const heights=[16,28,43,30,54,38,65,44,29,55,70,48,34,62,46,30,51,36,58,42,25,46,32,20,14];
  return <div className="cultural-route-stage" aria-hidden="true">
    <div className="cultural-route-veil"/>
    <div className="cultural-route-beam cultural-route-beam-left"/>
    <div className="cultural-route-beam cultural-route-beam-right"/>
    <svg className="cultural-route-performance" viewBox="0 0 400 300" fill="none"><ellipse cx="200" cy="249" rx="154" ry="31" stroke="currentColor" strokeOpacity=".2"/><rect x="184" y="49" width="29" height="63" rx="14" stroke="currentColor" strokeWidth="2"/><path d="M176 78V99Q176 123 198 123Q221 123 221 99V78M198 123V241M174 242H222M189 60H207M189 69H207M189 78H207M189 87H207" stroke="currentColor" strokeWidth="2"/><path d="M89 216C115 126 156 162 136 223C119 275 73 225 119 180C163 134 256 213 295 140C320 95 269 113 275 156C284 204 328 221 349 180" stroke="currentColor" strokeOpacity=".45" strokeWidth="1.4"/></svg>
    <div className="cultural-route-wave">{heights.map((height,i)=><span key={i} style={{height}}/>)}</div>
    <div className="cultural-route-word"><span>UDHBHAV 2K27</span><strong>CULTURAL</strong><small>The stage comes alive.</small></div>
  </div>;
}
