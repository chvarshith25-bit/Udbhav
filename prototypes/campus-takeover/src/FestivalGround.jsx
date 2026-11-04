const crowd = Array.from({ length: 84 }, (_, i) => {
  const row = Math.floor(i / 14);
  return { x: 589 + (i % 14) * 32 + (row % 2) * 11 + Math.sin(i * 2.3) * 9, y: 626 + row * 26 + Math.cos(i * 1.7) * 7, r: 2.8 + row * .18 };
});

function LightTower({ x, y, flip = false, className = '' }) {
  return <g transform={`translate(${x} ${y})`} className={className}>
    <path d="M-6 0 L-3-205 H3 L6 0" fill="#283b40" />
    <path d="M-5-45 L5-75 M-5-95 L5-125 M-4-145 L4-175" stroke="#607271" strokeWidth="2" />
    <path d="M-18 2 H18" stroke="#52625d" strokeWidth="5" />
    <g transform={`translate(0 -207) rotate(${flip ? 12 : -12})`}>
      <rect x="-35" y="-8" width="70" height="25" rx="2" fill="#303e3f" stroke="#68736b" />
      {[-26,-9,8,25].map(x => <rect key={x} className="ct-lamp" x={x} y="-2" width="12" height="12" rx="1" fill="#fff5c7" />)}
    </g>
  </g>;
}

function Tree({ x, y, scale = 1 }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <path d="M0 0 V-40" stroke="#1e302c" strokeWidth="6" />
    <path d="M-21-23 Q-42-52-15-65 Q-20-92 4-94 Q35-95 29-67 Q55-42 24-23Z" fill="#14251f" />
    <path d="M-17-55 Q-7-77 10-79" fill="none" stroke="#294030" strokeWidth="2" />
  </g>;
}

export default function FestivalGround() {
  return <svg className="ct-ground" viewBox="0 0 1600 1000" role="img" aria-labelledby="ct-ground-title ct-ground-description">
    <title id="ct-ground-title">An imagined college festival ground at night</title>
    <desc id="ct-ground-description">One continuous setting with a basketball court, a central performance stage, an overhead countdown display and a technology pavilion. An original illustration, not the real VJIT campus.</desc>
    <defs>
      <linearGradient id="ct-sky" x2="0" y2="1"><stop stopColor="#071218"/><stop offset="1" stopColor="#1c2c2b"/></linearGradient>
      <linearGradient id="ct-floor" x2="0" y2="1"><stop stopColor="#172825"/><stop offset="1" stopColor="#0a1415"/></linearGradient>
      <linearGradient id="ct-warm-beam" x1=".5" y1="0" x2=".5" y2="1"><stop stopColor="#fff4c2" stopOpacity=".48"/><stop offset="1" stopColor="#efce8d" stopOpacity="0"/></linearGradient>
      <linearGradient id="ct-cool-beam" x1=".5" y1="0" x2=".5" y2="1"><stop stopColor="#d8eae5" stopOpacity=".4"/><stop offset="1" stopColor="#d8eae5" stopOpacity="0"/></linearGradient>
      <linearGradient id="ct-roof" x2="0" y2="1"><stop stopColor="#55645b"/><stop offset="1" stopColor="#1e302b"/></linearGradient>
      <radialGradient id="ct-ground-light"><stop stopColor="#e7d49b" stopOpacity=".25"/><stop offset="1" stopColor="#e7d49b" stopOpacity="0"/></radialGradient>
      <radialGradient id="ct-horizon-light"><stop stopColor="#d7f34d" stopOpacity=".17"/><stop offset="1" stopColor="#d7f34d" stopOpacity="0"/></radialGradient>
      <pattern id="ct-led-grid" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r=".65" fill="#d7f34d" opacity=".2"/></pattern>
      <pattern id="ct-building-windows" width="29" height="23" patternUnits="userSpaceOnUse"><rect width="12" height="7" x="7" y="7" fill="#dabd83" opacity=".3"/></pattern>
      <pattern id="ct-truss" width="36" height="16" patternUnits="userSpaceOnUse"><path d="M0 0 L18 16 L36 0 M0 16 H36 M0 0 H36" fill="none" stroke="#78827a" strokeWidth="1.2"/></pattern>
      <filter id="ct-soft-glow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="7"/></filter>
      <filter id="ct-near-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2"/></filter>
    </defs>

    <rect width="1600" height="1000" fill="url(#ct-sky)" />
    <g className="ct-skyline">
      <path d="M0 358 L0 290 H85 V270 H150 V295 H230 V245 H285 V289 H347 V265 H405 V300 H492 V250 H550 V303 H615 V265 H675 V295 H743 V250 H807 V277 H876 V241 H960 V285 H1030 V264 H1110 V290 H1190 V247 H1250 V273 H1320 V242 H1405 V280 H1500 V263 H1600 V390Z" fill="#101e20" />
      <path d="M101 358 V310 H260 V356 M1170 356 V300 H1390 V366 M330 365 V319 H540 V370" fill="url(#ct-building-windows)" />
      <path d="M0 385 Q170 315 320 357 Q500 309 650 365 Q880 321 1040 362 Q1290 307 1600 373 V460 H0Z" fill="#10221f" />
      {[80,205,355,469,1132,1240,1380,1510].map((x,i)=><Tree key={x} x={x} y={382 + (i%3)*12} scale={.6+(i%2)*.2}/>)}
    </g>
    <ellipse className="ct-horizon-glow" cx="800" cy="380" rx="680" ry="320" fill="url(#ct-horizon-light)" />

    <g className="ct-ground-plane">
      <path d="M200 395 H1400 L1750 1030 H-150Z" fill="url(#ct-floor)" />
      <path d="M154 820 L420 425 H1190 L1460 820 Q810 1100 154 820Z" fill="none" stroke="#26362e" strokeWidth="54" />
      <path className="ct-perimeter" d="M154 820 L420 425 H1190 L1460 820 Q810 1100 154 820Z" fill="none" stroke="#d7f34d" strokeWidth="2.5" />
      <path d="M80 920 L393 414 M1520 920 L1210 414 M800 1000 V580" stroke="#66715d" strokeOpacity=".16" strokeWidth="2" />
      <path d="M310 850 L495 504 M1295 850 L1125 504" stroke="#c7bb8b" strokeOpacity=".13" strokeDasharray="5 15" />
      <ellipse className="ct-ground-wash" cx="800" cy="690" rx="700" ry="360" fill="url(#ct-ground-light)" />
    </g>

    <g className="ct-court">
      <path d="M280 540 L530 493 L653 716 L320 792Z" fill="#354a3f" stroke="#5c6d53" strokeWidth="3" />
      <path d="M298 552 L520 510 L631 708 L335 773Z M403 531 L480 742 M321 594 L367 586 L403 651 L341 666 M559 582 L516 593 L553 662 L601 650" fill="none" stroke="#cbd0ac" strokeWidth="2" />
      <ellipse cx="447" cy="635" rx="31" ry="45" transform="rotate(-23 447 635)" fill="none" stroke="#cbd0ac" strokeWidth="2" />
      <path d="M331 612 L341 667 M562 587 L583 632" stroke="#cbd0ac" strokeWidth="2" />
      <g stroke="#83938c" fill="none" strokeWidth="4"><path d="M311 602 V522 L337 517 M583 678 V586 L563 590"/><path d="M322 505 L349 501 V528 L322 533Z M550 573 L576 568 V596 L550 602Z" fill="#c4cdc0" fillOpacity=".14"/></g>
      <g stroke="#ce8e56" fill="none" strokeWidth="3"><ellipse cx="337" cy="533" rx="12" ry="4"/><ellipse cx="563" cy="601" rx="12" ry="4"/></g>
      <g className="ct-court-players" fill="#e0dcc1"><circle cx="416" cy="602" r="5"/><path d="M414 609 L411 627 M412 616 L402 624 M413 616 L425 609 M411 625 L402 639 M411 625 L419 639" stroke="#e0dcc1" strokeWidth="4"/><circle cx="518" cy="668" r="5"/><path d="M517 675 L512 692 M515 680 L504 675 M515 680 L527 687 M512 692 L502 702 M512 692 L523 705" stroke="#e0dcc1" strokeWidth="4"/></g>
      <circle className="ct-basketball" cx="431" cy="602" r="6" fill="#dd9259" stroke="#513728" />
      <text x="404" y="807" fill="#afbba1" fontSize="15" letterSpacing="5" transform="rotate(-12 404 807)">SPORTS COURT</text>
    </g>

    <g className="ct-stage">
      <path d="M619 568 L976 568 L1040 622 H552Z" fill="#26322d" stroke="#5c6655" strokeWidth="2" />
      <path d="M552 622 H1040 V645 H552Z" fill="#14211f" />
      <g className="ct-stage-edge" stroke="#f0d7a1" strokeWidth="3"><path d="M552 625 H1040 M571 635 H1020"/></g>
      <path d="M630 382 H968 V568 H630Z" fill="#101a1b" stroke="#3f4f46" strokeWidth="2" />
      <path d="M642 393 H956 V556 H642Z" fill="#14231f" />
      <path d="M640 393 L691 393 L675 554 H641Z M956 393 H906 L925 554 H956Z" fill="#4e3932" />
      <path d="M620 377 H979 V395 H620Z M617 386 H635 V580 H617Z M963 386 H981 V580 H963Z" fill="url(#ct-truss)" />
      <g className="ct-stage-backlights" stroke="#e5c791" strokeWidth="3"><path d="M705 425 V537 M746 425 V537 M787 425 V537 M828 425 V537 M869 425 V537 M910 425 V537"/></g>
      <g fill="#0b1415" stroke="#3e4c42" strokeWidth="2"><rect x="583" y="495" width="33" height="78" rx="2"/><rect x="984" y="495" width="33" height="78" rx="2"/>{[514,544].map(y=><g key={y}><circle cx="600" cy={y} r="10"/><circle cx="1001" cy={y} r="10"/></g>)}</g>
      <g className="ct-performers" fill="#c9c9af"><circle cx="801" cy="489" r="5.5"/><path d="M795 498 Q800 494 805 498 L810 510 L817 497 L820 498 L813 518 L806 513 L805 528 L813 549 H808 L798 534 L789 549 H784 L793 527 L793 508 L780 503 L773 490 L776 488 L785 499Z"/><path d="M816 492 V546 M809 547 H824" stroke="#8e9c8d" strokeWidth="2"/><circle cx="816" cy="489" r="3"/></g>
      <text x="800" y="609" textAnchor="middle" fill="#f0d7a1" fontSize="13" letterSpacing="5">CULTURAL STAGE</text>
    </g>

    <g className="ct-pavilion">
      <path d="M1050 558 L1231 521 L1324 670 L1114 719Z" fill="#142d30" stroke="#536767" strokeWidth="2" />
      <path d="M1045 456 L1229 419 L1277 463 L1082 508Z" fill="url(#ct-roof)" stroke="#64716a" strokeWidth="2" />
      <path d="M1045 456 V573 L1082 620 V508Z" fill="#1e3535" stroke="#4c6461" strokeWidth="2" />
      <path d="M1082 508 L1277 463 V640 L1082 686Z" fill="#142a2c" fillOpacity=".8" stroke="#68766b" strokeWidth="2" />
      <g className="ct-pavilion-grid" stroke="#819fb1" fill="none" strokeWidth="1.5"><path d="M1103 519 L1257 484 V626 L1103 663Z M1135 512 V656 M1167 503 V647 M1199 496 V641 M1230 490 V633 M1103 559 L1257 523 M1103 606 L1257 569"/></g>
      <g className="ct-pavilion-screens" fill="#8faac2"><path d="M1118 557 L1149 550 V574 L1118 582Z M1172 544 L1203 537 V562 L1172 569Z M1220 532 L1249 525 V550 L1220 557Z"/><path d="M1128 582 V590 L1115 593 M1187 567 V576 L1173 580 M1235 553 V561 L1222 564" fill="none" stroke="#92b6c7" strokeWidth="2"/></g>
      <g className="ct-pavilion-code" fill="none" stroke="#172e34" strokeWidth="1.7"><path d="M1128 560 L1123 566 L1128 569 M1139 557 L1144 561 L1139 568 M1136 555 L1132 573 M1181 548 L1177 553 L1181 557 M1194 545 L1199 549 L1194 556 M1190 542 L1186 561 M1228 535 L1224 540 L1228 544 M1241 532 L1245 536 L1241 543 M1237 530 L1233 547"/></g>
      <path d="M1108 609 L1256 574 M1122 607 V635 M1240 578 V607" fill="none" stroke="#5c7a7e" strokeWidth="3" />
      <path className="ct-pavilion-edge" d="M1120 648 L1153 640 V625 L1190 617 V604 L1224 596" fill="none" stroke="#8daaba" strokeWidth="1.5"/>
      <path className="ct-pavilion-edge" d="M1045 456 L1229 419 L1277 463 V640 L1082 686 V508 L1277 463 M1082 508 L1045 456" fill="none" stroke="#c8daed" strokeWidth="2" />
      <text x="1145" y="750" fill="#b2c5cc" fontSize="14" letterSpacing="4" transform="rotate(-12 1145 750)">TECH PAVILION</text>
    </g>

    <g className="ct-strings" fill="none" stroke="#4c5e4e" strokeWidth="1.5"><path d="M235 403 Q530 500 800 396 Q1110 490 1380 400 M228 407 Q385 634 675 610 M1380 400 Q1250 629 953 612"/></g>
    <g className="ct-festoon-bulbs" fill="#ffe4a9">
      {Array.from({length:28},(_,i)=>{const x=245+i*42;const y=407+Math.sin((i/27)*Math.PI*2)*40;return <g key={i}><circle cx={x} cy={y} r="4"/><circle cx={x} cy={y} r="10" opacity=".12"/></g>;})}
    </g>

    <g className="ct-display-frame">
      <path d="M563 359 V442 M1036 359 V442" stroke="#526359" strokeWidth="9" />
      <path d="M548 160 H1052 V370 H548Z" fill="#071112" stroke="#4f6255" strokeWidth="6" />
      <rect className="ct-display-edge" x="548" y="160" width="504" height="210" fill="none" stroke="#d7f34d" strokeWidth="3" />
      <rect x="556" y="168" width="488" height="194" fill="url(#ct-led-grid)" />
      <path d="M530 144 H1070 V156 H530Z" fill="url(#ct-truss)" />
      <path d="M545 150 V370 M1055 150 V370" stroke="#4f6255" strokeWidth="2" />
      <text x="800" y="139" textAnchor="middle" fontSize="13" letterSpacing="5" fill="#9aa894">UDHBHAV / FESTIVAL GROUND</text>
    </g>

    <g className="ct-crowd" fill="#a1a78a">
      {crowd.map((p,i)=><g key={i} className="ct-person" opacity={.35+(i%4)*.13}><ellipse cx={p.x+3} cy={p.y+12} rx="6" ry="2" fill="#000"/><circle cx={p.x} cy={p.y} r={p.r}/><path d={`M${p.x-3} ${p.y+4} Q${p.x} ${p.y+2} ${p.x+3} ${p.y+4} L${p.x+4} ${p.y+11} H${p.x-4}Z`} fill={i%5===0?'#d7cfad':'#70857a'}/>{i%7===0&&<path d={`M${p.x-8} ${p.y-1} l8 8 l8-10`} fill="none" stroke="#c9c9a4" strokeWidth="2"/>}</g>)}
    </g>

    <g className="ct-court-light ct-beam" style={{ transformOrigin:'235px 205px' }}><path d="M235 205 L255 770 Q510 858 658 710Z" fill="url(#ct-cool-beam)" /></g>
    <g className="ct-stage-light ct-beam" style={{ transformOrigin:'686px 394px' }}><path d="M686 394 L615 707 Q800 782 972 698Z" fill="url(#ct-warm-beam)" /></g>
    <g className="ct-stage-light ct-beam" style={{ transformOrigin:'913px 394px' }}><path d="M913 394 L620 707 Q800 782 980 698Z" fill="url(#ct-warm-beam)" /></g>
    <g className="ct-tech-light ct-beam" style={{ transformOrigin:'1380px 193px' }}><path d="M1380 193 L1010 716 Q1200 825 1350 707Z" fill="url(#ct-cool-beam)" /></g>

    <g className="ct-light-towers"><LightTower x={235} y={412}/><LightTower x={1380} y={400} flip/><LightTower x={337} y={815}/><LightTower x={1277} y={816} flip/></g>
    <g className="ct-stage-lamps" fill="#fff0bc">{[686,741,800,858,913].map(x=><rect key={x} x={x-5} y="392" width="10" height="8" rx="2"/>)}</g>
    <g className="ct-crowd-near" fill="#10201d">
      {Array.from({length:21},(_,i)=><g key={i} transform={`translate(${85+i*73} ${940+(i%3)*16})`}><ellipse cx="0" cy="0" rx="12" ry="14"/><path d="M-19 44 Q-19 14 0 16 Q19 14 19 44Z"/></g>)}
    </g>
    <g className="ct-foreground-trees"><Tree x={105} y={770} scale={1.8}/><Tree x={1490} y={790} scale={1.9}/><Tree x={44} y={900} scale={1.6}/><Tree x={1565} y={920} scale={2}/></g>
  </svg>;
}
