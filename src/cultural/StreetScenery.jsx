import { useId } from 'react';

export default function StreetScenery({district}){
 const id=useId().replace(/[^a-zA-Z0-9_-]/g,'');
 return <svg className="street-scenery" viewBox="0 0 1600 880" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true">
  <defs><linearGradient id={`street-light-${id}`} x1=".5" y1="0" x2=".5" y2="1"><stop stopColor={district.kind==='visual'?'#b8acd2':district.kind==='play'?'#d7e88a':'#f4c891'} stopOpacity=".2"/><stop offset="1" stopColor="#f4c891" stopOpacity="0"/></linearGradient><pattern id={`street-tile-${id}`} width="55" height="35" patternUnits="userSpaceOnUse"><path d="M0 35H55M0 0V35M55 0V35" stroke="#b2a6be" strokeOpacity=".12"/></pattern></defs>
  <path d="M0 0H1600V880H0Z" fill="#181d38"/>
  <g className="street-facades"><path d="M0 126L184 75L429 192V555L0 735Z" fill="#343451"/><path d="M0 126L184 75V531L0 608Z" fill="#45415d"/><path d="M1158 132L1442 58L1600 112V730L1158 549Z" fill="#343451"/><path d="M1442 58L1600 112V623L1442 532Z" fill="#45415d"/>
   <path d="M410 231L620 275V530L410 611Z" fill="#282e4b"/><path d="M1190 207L991 270V530L1190 617Z" fill="#282e4b"/>
   <path d="M626 239H977V556H626Z" fill="#292f4c"/><path d="M666 541V382C666 213 938 213 938 382V541Z" fill="#131a31"/><path d="M684 540V381C684 238 920 238 920 381V540" stroke="#70718a" strokeWidth="2"/>
   <g fill="#111a32" stroke="#716b84" strokeOpacity=".45">{[35,102,253,323].map(x=><path key={x} d={`M${x} ${x<184?167:227}V292L${x+43} 310V188Z`}/>)}{[1241,1313,1488].map(x=><path key={x} d={`M${x} 184V303L${x+42} 289V167Z`}/>)}</g>
   <path d="M0 366L426 365M1162 357L1600 355" stroke="#a29ab2" strokeOpacity=".2"/>
   <path d="M0 126L184 75L429 192M1158 132L1442 58L1600 112" stroke="#8b7f97" strokeWidth="5"/>
  </g>
  <path d="M0 690L666 478H937L1600 681V880H0Z" fill="#2c314b"/>
  <path d="M0 719L682 491M1600 719L919 491M447 880L738 491M1195 880L861 491M57 788H1540M371 650H1249M533 567H1086" stroke="#b2a6be" strokeOpacity=".18"/>
  <path d="M603 518L997 518L1289 880H293Z" fill={`url(#street-tile-${id})`}/>
  <path d="M729 491L438 880M870 491L1159 880" stroke="#efb67d" strokeOpacity=".3" strokeDasharray="15 25"/>

  <g className="street-district-features">
   {district.kind==='performance'&&<><path d="M1168 194L1400 132V209L1168 271Z" fill="#f48673"/><text x="1190" y="226" transform="rotate(-15 1190 226)" fill="#25263b" fontFamily="Arial" fontWeight="800" fontSize="34">LET IT MOVE YOU</text><path d="M45 198Q95 159 136 199T224 199M45 216Q95 177 136 217T224 217" stroke="#eab185" strokeOpacity=".4" strokeWidth="2"/><ellipse cx="802" cy="722" rx="235" ry="65" stroke="#f48673" strokeOpacity=".4"/><ellipse cx="802" cy="722" rx="200" ry="51" stroke="#f48673" strokeOpacity=".2"/></>}
   {district.kind==='visual'&&<><path d="M1163 152L1416 84V225L1163 292Z" fill="#b8acd2"/><path d="M1174 177L1407 115M1174 263L1407 201" stroke="#363451" strokeWidth="9" strokeDasharray="12 9"/><text x="1189" y="225" transform="rotate(-15 1189 225)" fill="#25263b" fontFamily="Georgia" fontSize="28">A DIFFERENT VIEW</text><path d="M48 173H120V199M48 173V246M340 203H385V270M340 203V231" stroke="#c5bacf" strokeWidth="3"/><path d="M581 734V706H635M1023 734V706H969M581 827V855H635M1023 827V855H969" stroke="#b8acd2" strokeOpacity=".5" strokeWidth="3"/></>}
   {district.kind==='play'&&<><path d="M1164 162L1417 94V238L1164 306Z" fill="#d7e88a"/><text x="1190" y="213" transform="rotate(-15 1190 213)" fill="#25263b" fontFamily="Arial" fontWeight="800" fontSize="30">YOUR NEXT MOVE</text><path d="M1182 251L1379 198" stroke="#25263b" strokeWidth="12" strokeDasharray="12 12"/><path d="M40 191H116V217H40M40 253H116V279H40M116 205H150V267H116" stroke="#d7e88a" strokeOpacity=".5" strokeWidth="3"/><path d="M646 716H715L753 751L715 786H646L684 751ZM810 716H879L917 751L879 786H810L848 751Z" fill="#d7e88a" fillOpacity=".22"/></>}
  </g>
  <g className="street-festoon"><path d="M-20 85Q800 395 1620 85M-20 25Q800 290 1620 25" stroke="#a5a0ad" strokeWidth="1.5"/>{Array.from({length:17},(_,i)=>{const x=i*100,y=84+Math.sin(i/16*Math.PI)*155;return <g key={i*100}><path d={`M${x} ${y}L${x+20} ${y+52}L${x+40} ${y+12}Z`} fill={i%3===0?'#ef8b73':i%3===1?'#d5e785':'#b2a7cc'}/><circle cx={x} cy={y-30} r="3" fill="#f7d6a3"/></g>})}</g>
  <g className="street-light-pools"><path d="M249 70L102 703H669Z" fill={`url(#street-light-${id})`}/><path d="M1364 94L971 718H1569Z" fill={`url(#street-light-${id})`}/></g>
  <g transform="translate(669 315)"><path d="M0 0H270V75H0Z" fill="#e7cfa9"/><text x="135" y="29" textAnchor="middle" fontFamily="Arial" fontSize="13" letterSpacing="2" fill="#202340">UDHBHAV 2K27</text><text x="135" y="54" textAnchor="middle" fontFamily="Arial" fontSize="15" fontWeight="700" fill="#202340">{district.sign}</text></g>
  <g stroke="#b5a9b7" strokeOpacity=".45"><path d="M89 736V483M1484 736V458" strokeWidth="5"/><path d="M69 483H109M1464 458H1504" strokeWidth="14"/></g>
  <g fill="#f4ce9f"><path d="M68 483H110V499H68ZM1463 458H1505V474H1463Z"/></g>
  <g className="street-direction" transform="translate(717 735) rotate(-4)"><path d="M0 0H160L190 32L160 64H0Z" fill="#d7f34d"/><text x="77" y="25" textAnchor="middle" fill="#252b36" fontFamily="Arial" fontSize="10">YOU ARE HERE</text><text x="77" y="44" textAnchor="middle" fill="#252b36" fontFamily="Arial" fontSize="12" fontWeight="700">DISTRICT {district.number}</text></g>
 </svg>;
}
