function Tower({ x, y, angle = 0 }) {
  return <g transform={`translate(${x} ${y})`}>
    <path d="M-6 0 L-3-178 H3 L6 0 M-14 0 H14" fill="#293429" stroke="#65725c" strokeWidth="2"/>
    <path d="M-4-25 L4-52 M-4-65 L4-92 M-4-105 L4-132" fill="none" stroke="#68765d" strokeWidth="1.5"/>
    <g transform={`translate(0 -183) rotate(${angle})`}><rect x="-27" y="-7" width="54" height="19" rx="2" fill="#344031" stroke="#8d967c"/>{[-19,-6,7,20].map(cx=><rect key={cx} x={cx-4} y="-2" width="9" height="9" fill="#ece9c5"/>)}</g>
  </g>;
}

export function ZoneSymbol({ kind }) {
  return <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" stroke="currentColor" strokeWidth="1.25">
    {kind==='sports' ? <><path d="M8 12H56V52H8ZM32 12V52"/><circle cx="32" cy="32" r="10"/><path d="M8 22H19V42H8M56 22H45V42H56"/></> : kind==='cultural' ? <><path d="M7 50V15H57V50M7 15L20 28L14 50M57 15L44 28L50 50M4 53H60"/><path d="M25 10L32 35L39 10M32 35V48M27 48H37"/><circle cx="32" cy="31" r="4"/></> : <><path d="M8 49V19L32 9L56 19V49L32 58ZM8 19L32 29L56 19M32 29V58"/><path d="M20 32L15 37L20 42M44 32L49 37L44 42M35 33L29 47"/></>}
  </svg>;
}

export default function FestivalArena({ sceneRef }) {
  return <div ref={sceneRef} className="arena-scenery" aria-hidden="true">
    <svg className="arena-ground" viewBox="0 0 1600 720" fill="none">
      <defs>
        <linearGradient id="arena-floor" x2="0" y2="1"><stop stopColor="#283022"/><stop offset="1" stopColor="#171914"/></linearGradient>
        <linearGradient id="arena-beam" x1=".5" y1="0" x2=".5" y2="1"><stop stopColor="#f1efcc" stopOpacity=".45"/><stop offset="1" stopColor="#d7f34d" stopOpacity="0"/></linearGradient>
        <linearGradient id="arena-stage-beam" x1=".5" y1="0" x2=".5" y2="1"><stop stopColor="#efcfaf" stopOpacity=".55"/><stop offset="1" stopColor="#dbad91" stopOpacity="0"/></linearGradient>
        <linearGradient id="arena-tech-beam" x2="0" y2="1"><stop stopColor="#bdc9e1" stopOpacity=".4"/><stop offset="1" stopColor="#bdc9e1" stopOpacity="0"/></linearGradient>
        <radialGradient id="arena-pool"><stop stopColor="#c3ce80" stopOpacity=".14"/><stop offset="1" stopColor="#c3ce80" stopOpacity="0"/></radialGradient>
        <pattern id="arena-truss" width="32" height="14" patternUnits="userSpaceOnUse"><path d="M0 0L16 14L32 0M0 0H32M0 14H32" stroke="#8b9278" strokeWidth="1"/></pattern>
      </defs>

      <ellipse cx="800" cy="395" rx="760" ry="310" fill="url(#arena-pool)"/>
      <path d="M325 208H1275L1550 604Q810 789 50 604Z" fill="url(#arena-floor)"/>
      <g stroke="#68734c" opacity=".3"><path d="M325 208H1275L1550 604Q810 789 50 604Z"/><path d="M342 221H1258L1525 598Q810 764 75 598Z"/><path d="M800 510V706M410 432L265 652M1198 422L1330 651"/></g>
      <path d="M80 600Q795 766 1520 600" stroke="#a6b967" strokeOpacity=".5" strokeDasharray="3 13"/>
      <g fill="#d7dfb8" opacity=".35">{Array.from({length:26},(_,i)=><circle key={i} cx={150+i*52} cy={615+Math.sin(i/25*Math.PI)*70} r="2"/>)}</g>

      <g className="arena-zone arena-zone-sports">
        <path d="M149 390L481 311L631 540L194 647Z" fill="#2d3927" stroke="#7c8b59" strokeWidth="2"/>
        <path className="arena-detail arena-detail-sports" d="M170 398L472 328L610 530L210 627ZM312 364L391 582M187 449L254 433L298 504L221 525M538 423L481 440L525 512L586 495" stroke="#e2e5ba" strokeWidth="2"/>
        <ellipse className="arena-detail arena-detail-sports" cx="361" cy="469" rx="42" ry="54" transform="rotate(-22 361 469)" stroke="#e2e5ba" strokeWidth="2"/>
        <g stroke="#b2b69b" strokeWidth="3"><path d="M202 478V379L236 372M567 561V456L535 463"/><path d="M221 358L252 350V381L221 389ZM519 442L550 434V466L519 473Z" fill="#e1e5ca" fillOpacity=".12"/></g>
        <g stroke="#d9ab79" strokeWidth="2"><ellipse cx="238" cy="390" rx="13" ry="4"/><ellipse cx="535" cy="474" rx="13" ry="4"/></g>
        <g fill="#a3ae87"><circle cx="347" cy="452" r="5"/><path d="M342 460Q347 456 352 460L357 479L350 482L350 500H346L342 481H338Z"/><circle cx="446" cy="485" r="5"/><path d="M441 493H451L455 515L448 516L452 533H447L440 517H436Z"/></g>
        <g className="arena-ball"><circle cx="368" cy="454" r="7" fill="#cc9866"/><path d="M361 454H375M368 447V461" stroke="#4a3c28"/></g>
        <path d="M123 421L176 407M114 435L166 421M104 449L158 436" stroke="#6a7751" strokeWidth="4"/>
        <g className="arena-light arena-light-sports"><path d="M163 143L153 606Q369 705 629 534Z" fill="url(#arena-beam)"/><path d="M578 201L267 625Q477 668 620 538Z" fill="url(#arena-beam)"/></g>
        <Tower x={163} y={326} angle={-12}/><Tower x={578} y={384} angle={9}/>
      </g>

      <g className="arena-zone arena-zone-cultural">
        <path d="M623 451H979L1056 519H550Z" fill="#3c3d2b" stroke="#8f9274" strokeWidth="2"/>
        <path d="M550 519H1056V544H550Z" fill="#20251b"/>
        <path className="arena-detail arena-detail-cultural" d="M551 521H1055M573 535H1035" stroke="#d9bb8e" strokeWidth="2"/>
        <path d="M622 235H979V451H622Z" fill="#121a15" stroke="#7d8769" strokeWidth="2"/>
        <path d="M635 247H966V439H635Z" fill="#272b20"/>
        <path d="M635 248H691L679 438H635ZM966 248H910L924 438H966Z" fill="#594638"/>
        <path d="M604 221H998V238H604ZM604 232H620V460H604ZM980 232H997V460H980Z" fill="url(#arena-truss)"/>
        <g className="arena-detail arena-detail-cultural" stroke="#d0b796" strokeWidth="2">{[711,749,787,825,863,901].map(x=><path key={x} d={`M${x} 283V407`}/>)}</g>
        <g className="arena-stage-beam arena-light arena-light-cultural"><path d="M682 239L655 465Q802 516 968 466Z" fill="url(#arena-stage-beam)"/></g>
        <g className="arena-light arena-light-cultural"><path d="M917 239L651 466Q802 516 968 465Z" fill="url(#arena-stage-beam)"/></g>
        <g fill="#ded7ba"><circle cx="802" cy="365" r="6"/><path d="M796 374Q801 369 807 374L814 389L824 374L827 376L817 397L808 389L807 407L818 430H813L801 413L790 430H785L796 404L794 387L780 380L774 366L778 365L786 376Z"/></g>
        <path d="M823 368V429M817 430H830" stroke="#b1b49a" strokeWidth="2"/><circle cx="823" cy="365" r="3" fill="#bec4a5"/>
        <g fill="#151d16" stroke="#5e6c51">{[569,1005].map(x=><g key={x}><rect x={x} y="367" width="31" height="85" rx="2"/><circle cx={x+15} cy="389" r="10"/><circle cx={x+15} cy="423" r="10"/></g>)}</g>
        <g fill="#e1d4a2">{[682,740,800,859,917].map(x=><rect key={x} x={x-5} y="237" width="10" height="7" rx="1"/>)}</g>
        <g fill="#9caa7b">{Array.from({length:42},(_,i)=>{const x=636+(i%10)*36+Math.sin(i*2)*8,y=558+Math.floor(i/10)*19+Math.cos(i)*5;return <g key={i} opacity={.3+(i%3)*.12}><circle cx={x} cy={y} r="3"/><path d={`M${x-3} ${y+4}h6l1 7h-8Z`}/></g>;})}</g>
      </g>

      <g className="arena-zone arena-zone-technical">
        <path d="M1096 302L1320 252L1448 455L1170 523Z" fill="#283331" stroke="#6d807b" strokeWidth="2"/>
        <path d="M1096 302V443L1170 523V357L1384 309V473L1170 523" fill="#202e2c" fillOpacity=".6" stroke="#879487" strokeWidth="2"/>
        <path d="M1096 302L1320 252L1384 309L1170 357Z" fill="#3e4a3e" stroke="#879487" strokeWidth="2"/>
        <path className="arena-detail arena-detail-technical" d="M1170 357L1384 309V473L1170 523ZM1205 350V514M1241 341V505M1278 333V495M1316 325V486M1351 316V478M1170 412L1384 365M1170 468L1384 421" stroke="#94a5b3" strokeWidth="1.2"/>
        <g className="arena-detail arena-detail-technical" fill="#9baec6">{[0,1,2].map(i=><g key={i} transform={`translate(${i*61} ${-i*14})`}><path d="M1193 403L1230 394V422L1193 431Z"/><path d="M1203 407L1198 414L1204 419M1220 403L1225 407L1221 414M1216 402L1210 422" stroke="#273a39" strokeWidth="2"/><path d="M1211 427V438L1196 442" fill="none" stroke="#9baec6" strokeWidth="2"/></g>)}</g>
        <path d="M1192 455L1371 413M1206 452V479M1353 418V446" stroke="#617c78" strokeWidth="3"/>
        <path className="arena-code" d="M1194 496L1237 486V466L1282 456V438L1331 427" stroke="#c3d1e9" strokeWidth="2" strokeDasharray="220"/>
        <g className="arena-light arena-light-technical"><path d="M1440 180L1096 489Q1293 610 1459 473Z" fill="url(#arena-tech-beam)"/></g>
        <Tower x={1440} y={363} angle={12}/>
      </g>

      <g stroke="#7b8464" strokeOpacity=".45"><path d="M163 145Q400 294 682 240M917 240Q1192 302 1440 181"/></g>
      <g fill="#e7e0b0">{Array.from({length:26},(_,i)=>{const left=i<13,j=i%13;return <circle key={i} cx={left?185+j*39:947+j*38} cy={left?157+Math.sin(j/12*Math.PI)*28+j*6:244+Math.sin(j/12*Math.PI)*28-j*4} r="2.8" opacity=".65"/>;})}</g>
      <g stroke="#747f56" strokeWidth="1.5"><path d="M407 627V685M800 640V702M1220 616V682"/><circle cx="407" cy="625" r="5" fill="#aabd6e"/><circle cx="800" cy="638" r="5" fill="#d2ad89"/><circle cx="1220" cy="614" r="5" fill="#a9bad8"/></g>
    </svg>
  </div>;
}
