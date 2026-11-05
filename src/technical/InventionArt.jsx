import { useId } from 'react';
import { technicalModes, moduleTransform, coreTransform, connectionPath } from './modes';

export default function InventionArt({modeIndex=0,className=''}){
 const id=useId().replace(/[^a-zA-Z0-9_-]/g,'');
 const config=technicalModes[modeIndex].config;
 return <svg className={`engine-svg ${className}`} viewBox="0 0 1200 820" fill="none" aria-hidden="true">
  <defs><linearGradient id={`metal-${id}`} x2=".8" y2="1"><stop stopColor="#fffef8"/><stop offset="1" stopColor="#d2d6d0"/></linearGradient><linearGradient id={`blue-${id}`} x2="1" y2="1"><stop stopColor="#527fff"/><stop offset="1" stopColor="#1244bf"/></linearGradient><pattern id={`draft-${id}`} width="40" height="40" patternUnits="userSpaceOnUse"><path d="M0 40H40V0" stroke="#3e64ad" strokeOpacity=".07"/></pattern></defs>
  <g className="engine-secondary engine-blueprint"><path d="M100 95H1100V735H100Z" fill={`url(#draft-${id})`}/><g stroke="#174fd3" strokeOpacity=".24" strokeWidth="1"><path d="M600 75V745M140 375H1060M165 95H205M185 75V115M995 95H1035M1015 75V115M165 735H205M185 715V755M995 735H1035M1015 715V755"/><ellipse cx="600" cy="415" rx="420" ry="230" strokeDasharray="3 9"/><path d="M210 690H990M210 680V700M990 680V700M1040 180V650M1030 180H1050M1030 650H1050"/></g><g fill="#597089" fontFamily="Arial" fontSize="12" letterSpacing="2"><text x="510" y="780">ASSEMBLY STUDY</text><text x="1070" y="425" transform="rotate(-90 1070 425)">IDEAS IN STRUCTURE</text><text x="185" y="58">UD / INVENTION ENGINE</text></g></g>
  <g className="engine-base" transform={`translate(0 ${config.base})`}><ellipse cx="600" cy="635" rx="330" ry="75" fill="#262f3a" fillOpacity=".055"/><path className="engine-material" d="M310 555L600 430L890 555V603L600 739L310 603Z" fill="#d4d9d5" stroke="#5f6f78"/><path className="engine-material" d="M310 555L600 423L890 555L600 685Z" fill={`url(#metal-${id})`} stroke="#73838a"/><path d="M328 557L600 435L873 557L600 669ZM600 685V739M310 577L600 711L890 577" stroke="#8998a0" strokeWidth="1"/><path d="M397 607L600 699L805 606" stroke="#174fd3" strokeWidth="4"/><g fill="#74838b">{[[390,545],[460,577],[530,609],[670,609],[740,577],[810,545]].map(([x,y])=><circle key={x} cx={x} cy={y} r="3"/>)}</g></g>
  <g className="engine-gantry" transform={`translate(${config.gantry[0]} ${config.gantry[1]})`}><path d="M395 452V237L600 140L805 237V452" stroke="#b3bbb7" strokeWidth="19"/><path d="M395 452V237L600 140L805 237V452" stroke="#596b77" strokeWidth="1"/><path d="M409 249L600 159L791 249" stroke="#174fd3" strokeWidth="3"/><path d="M600 141V217" stroke="#174fd3" strokeWidth="8"/><path className="engine-material" d="M567 211L600 195L633 211V255L600 271L567 255Z" fill={`url(#metal-${id})`} stroke="#5f6f78"/><circle cx="600" cy="242" r="7" fill="#f17a43"/></g>
  <g className="engine-connections" stroke="#174fd3" strokeWidth="4" strokeLinecap="round">{config.modules.map((point,i)=><path key={i} className={`engine-link engine-link-${i}`} d={connectionPath(point,modeIndex)}/>)}</g>
  <g className="engine-core" transform={coreTransform(config.core)}>
   <path className="engine-material" d="M-120-20L0-85L120-20V67L0 132L-120 67Z" fill="#cbd3d2" stroke="#536775" strokeWidth="2"/>
   <path className="engine-material" d="M-120-20L0-85L120-20L0 47Z" fill={`url(#metal-${id})`} stroke="#536775" strokeWidth="2"/>
   <path d="M-101 30L0 86L101 30M-101 48L0 104L101 48M0 47V132" stroke="#8b9ba3" strokeWidth="2"/>
   <g className="engine-rotor" transform={`rotate(${config.ring})`}><ellipse cy="-27" rx="79" ry="43" fill={`url(#blue-${id})`} stroke="#174fd3" strokeWidth="2"/><ellipse cy="-27" rx="58" ry="31" stroke="#dbe4ff" strokeWidth="2"/><path d="M-52-27H52M0-57V3M-36-47L36-7M-36-7L36-47" stroke="#a9bfff" strokeWidth="3"/><ellipse cy="-27" rx="15" ry="9" fill="#f17a43"/></g>
   <g fill="#f17a43">{[-78,-53,-28,28,53,78].map(x=><path key={x} d={`M${x} 13v18l8 4v-18Z`}/>)}</g>
  </g>
  {config.modules.map((point,i)=><g key={i} className={`engine-module engine-module-${i}`} transform={moduleTransform(point)}>
   <path className="engine-material" d="M-79-32L0-73L79-32V43L0 83L-79 43Z" fill="#d8ded9" stroke="#536775" strokeWidth="2"/><path className="engine-material" d="M-79-32L0-73L79-32L0 8Z" fill={`url(#metal-${id})`} stroke="#536775" strokeWidth="2"/>
   <path d="M-66-31L0-64L65-31L0 0Z" stroke="#174fd3" strokeWidth="2"/>
   <path d="M0 8V83M-64 16L-10 45M14 48L62 23" stroke="#8799a0"/>
   <path d="M-51-29L-23-44M-35-21L-7-36M-19-13L9-28M-3-5L25-20" stroke={i===2?'#f17a43':'#174fd3'} strokeWidth="6"/>
   <path d="M-65 34L-18 59M16 64L63 40" stroke="#8799a0" strokeWidth="2"/>
   <circle cx="42" cy="4" r="4" fill="#f17a43"/><text x="-49" y="32" fill="#405766" fontFamily="Arial" fontSize="15">0{i+1}</text>
  </g>)}
  <g className="engine-dome" opacity={config.dome}><path d="M310 280L600 125L890 280V594L600 747L310 594Z" fill="#7ba4ff" fillOpacity=".035" stroke="#174fd3" strokeWidth="1.5"/><path d="M310 280L600 435L890 280M600 435V747" stroke="#174fd3" strokeOpacity=".4"/><path d="M325 290L600 145L875 290" stroke="#174fd3" strokeWidth="3"/><path d="M310 280V594L600 747" stroke="#f17a43" strokeWidth="3"/></g>
 </svg>;
}
