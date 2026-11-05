import { useId } from 'react';

export default function WorkObject({kind,className=''}){
 const id=useId().replace(/[^a-zA-Z0-9_-]/g,'');
 return <svg className={`work-object-illustration object-${kind} ${className}`} viewBox="0 0 440 350" fill="none" aria-hidden="true">
  <defs><linearGradient id={`alloy-${id}`} x1=".2" y1="0" x2=".8" y2="1"><stop stopColor="#a5adb0"/><stop offset=".5" stopColor="#d5d8d5"/><stop offset="1" stopColor="#909b9f"/></linearGradient><linearGradient id={`paper-${id}`} x2=".8" y2="1"><stop stopColor="#fffdf5"/><stop offset="1" stopColor="#e4dfd1"/></linearGradient><pattern id={`grid-${id}`} width="15" height="15" patternUnits="userSpaceOnUse"><path d="M0 15H15V0" stroke="#3766a4" strokeOpacity=".12" strokeWidth=".7"/></pattern></defs>
  {kind==='laptop'&&<>
   <path d="M59 18H381Q389 18 389 28V224H51V28Q51 18 59 18Z" fill="#4c555a" stroke="#333b40" strokeWidth="2"/>
   <path d="M65 31H375V211H65Z" fill="#1e292e"/><circle cx="220" cy="25" r="2" fill="#a1aaab"/>
   <path d="M66 51H374" stroke="#5b717a" strokeOpacity=".5"/><text x="80" y="44" fill="#a2b4ba" fontSize="9" fontFamily="Arial">build.js</text><circle cx="352" cy="41" r="2" fill="#c6d598"/>
   <g className="object-code-content object-micro" fontFamily="monospace" fontSize="12" letterSpacing="-.2"><text x="83" y="77" fill="#b5cfe0">function <tspan fill="#e6b68b">makeNext</tspan>(ideas) {'{'}</text><text x="98" y="101" fill="#d5e2df">return ideas</text><text x="110" y="125" fill="#a6c7db">.filter(Boolean)</text><text x="110" y="149" fill="#a6c7db">.map(idea =&gt; ({'{'} idea,</text><text x="128" y="173" fill="#d9c59f">ready: true {'}'}));</text><text x="83" y="197" fill="#b5cfe0">{'}'}</text></g>
   <path d="M51 224H389L421 320Q424 333 408 334H32Q16 333 19 320Z" fill={`url(#alloy-${id})`} stroke="#747f83"/>
   <path d="M19 320H421L412 337H29Z" fill="#8b969b" stroke="#6b777c"/>
   <path d="M52 234H388L402 288H38Z" fill="#929c9e"/>
   {[0,1,2,3].map(row=><g key={row} fill="#dce0dc" stroke="#6d797d" strokeWidth=".7">{Array.from({length:13},(_,i)=><rect key={i} x={49+i*26-row*2} y={240+row*11} width="22" height="8" rx="1"/>)}</g>)}
   <path d="M168 296H272L279 322H161Z" fill="#c8cfcb" stroke="#8a9699"/>
   <path d="M178 327H262" stroke="#66747a" strokeWidth="2"/>
   <path d="M67 220H373" stroke="#7b888c" strokeWidth="3"/>
  </>}
  {kind==='notes'&&<>
   <g transform="rotate(-6 202 176)"><path d="M59 38H305V311H59Z" fill="#c4b598"/><path d="M64 32H305V304H64Z" fill={`url(#paper-${id})`} stroke="#c4bcab"/><path d="M89 32V304" stroke="#b3b0a3"/>{Array.from({length:11},(_,i)=><path key={i} d={`M104 ${81+i*18}H285`} stroke="#bfc5bd" strokeOpacity=".45"/>)}<text x="110" y="91" fontFamily="Georgia" fontStyle="italic" fontSize="33" fill="#34434a">what if?</text><g stroke="#3b6e9e" strokeWidth="1.6"><ellipse cx="145" cy="159" rx="31" ry="20"/><path d="M176 159H225M215 153L225 159L215 165M225 139H278V179H225ZM132 179L132 220L184 241M177 233L184 241L172 242M126 245H236"/></g><text x="115" y="282" fontFamily="Arial" fontSize="10" letterSpacing="1" fill="#69747a">QUESTION. TRY. REPEAT.</text><g stroke="#687b8c" strokeWidth="2">{[0,1,2,3,4,5].map(i=><path key={i} d={`M57 ${54+i*42}Q79 ${43+i*42} 79 ${54+i*42}Q79 ${65+i*42} 57 ${59+i*42}`}/>)}</g></g>
   <g className="object-note-accent object-micro" transform="rotate(8 331 126)"><path d="M263 55H407V185H263Z" fill="#b68152" fillOpacity=".15"/><path d="M260 50H404V178H260Z" fill="#e3a36a"/><path d="M260 50H404V70H260Z" fill="#d58e55" fillOpacity=".35"/><text x="278" y="110" fill="#364149" fontFamily="Arial" fontWeight="700" fontSize="23">MAKE IT</text><text x="278" y="139" fill="#364149" fontFamily="Arial" fontWeight="700" fontSize="23">MATTER.</text><path d="M377 151L388 161L378 170" stroke="#364149" strokeWidth="2"/></g>
   <g transform="rotate(-9 323 265)"><path d="M247 211H398V317H247Z" fill="#bdc88b"/><path d="M247 211H398V228H247Z" fill="#acb675" fillOpacity=".4"/><text x="265" y="257" fontFamily="Georgia" fontStyle="italic" fontSize="22" fill="#384747">Start small.</text><text x="265" y="283" fontFamily="Georgia" fontStyle="italic" fontSize="22" fill="#384747">Think bigger.</text><path d="M383 300L398 303L387 317Z" fill="#a6b47c"/></g>
   <g transform="rotate(12 29 178)"><path d="M23 56H34V293H23Z" fill="#3c6990"/><path d="M23 56H34V80H23Z" fill="#d7a376"/><path d="M23 293L28 315L34 293Z" fill="#d0b68f"/><path d="M26 306L28 315L31 306Z" fill="#3f4a4e"/></g>
  </>}
  {kind==='drawings'&&<>
   <g transform="rotate(-5 211 165)"><path d="M26 38H369V296H26Z" fill="#c9c1b0"/><path d="M22 33H365V290H22Z" fill={`url(#paper-${id})`} stroke="#bdb7a7"/><path d="M39 50H349V273H39Z" fill={`url(#grid-${id})`} stroke="#7393a8" strokeWidth=".7"/><text x="52" y="72" fontFamily="Arial" fontSize="9" letterSpacing="1" fill="#2d5e89">STRUCTURE / CONCEPT STUDY</text><g className="object-drawing-lines object-micro" stroke="#386b94" strokeWidth="1.7"><path d="M62 181H323M69 178L127 106L188 178L249 106L309 178M69 178H309M127 106H249M127 106V178M249 106V178M188 107V178M69 192H309M69 187V198M309 187V198M84 214H159V253H84ZM223 214H297V253H223Z"/><path d="M85 224L159 245M223 225L297 246M54 106V178M48 106H60M48 178H60" strokeWidth=".8"/></g><path d="M253 259H340V269H253Z" fill="#edeae0" stroke="#7393a8" strokeWidth=".5"/></g>
   <g transform="rotate(10 352 230)"><path d="M293 174L334 151L392 180L350 205Z" fill="#c29d70"/><path d="M293 174V233L350 264V205Z" fill="#ae875f"/><path d="M350 205L392 180V239L350 264Z" fill="#d6b68b"/><path d="M307 181L334 166L378 187M350 219V247" stroke="#88694b"/><path d="M310 213L337 228M310 222L337 237" stroke="#94724f" strokeWidth="2"/></g>
   <g transform="rotate(-8 245 308)"><path d="M86 296H415V325H86Z" fill="#b7c0bf" stroke="#818f93"/>{Array.from({length:30},(_,i)=><path key={i} d={`M${99+i*10} 298V${i%5===0?315:307}`} stroke="#5d707b" strokeWidth=".7"/>)}<circle cx="404" cy="311" r="4" stroke="#73848b"/></g>
   <path d="M40 41V16Q40 6 49 6Q58 6 58 16V55Q58 64 50 64Q43 64 43 56V21" stroke="#6c7b86" strokeWidth="2"/>
  </>}
  {kind==='exhibit'&&<>
   <path d="M51 48L145 68L304 65L398 40V225L304 250L145 250L51 225Z" fill="#c9c5b8" fillOpacity=".35"/>
   <g className="object-board-left object-micro"><path d="M43 30L143 56V239L43 213Z" fill="#dedfd5" stroke="#b7c0ba"/><path d="M57 57L126 75V126L57 108Z" fill="#c1cfd2"/><path d="M57 144L125 162M57 156L125 174M57 169L112 184" stroke="#829da9" strokeWidth="2"/><path d="M58 197L125 215" stroke="#416d8c" strokeWidth="4"/></g>
   <path d="M143 56H304V239H143Z" fill={`url(#paper-${id})`} stroke="#bfc6bd"/>
   <path d="M156 69H290V87H156Z" fill="#d8a16c"/><text x="165" y="82" fontFamily="Arial" fontSize="8" letterSpacing="1" fill="#384953">PROJECT EXPO</text>
   <text x="158" y="118" fontFamily="Arial" fontSize="24" fontWeight="700" letterSpacing="-1" fill="#34454e">SHOW YOUR</text><text x="158" y="145" fontFamily="Arial" fontSize="24" fontWeight="700" letterSpacing="-1" fill="#34454e">THINKING.</text>
   <path d="M157 164H291V220H157Z" stroke="#8b9fa7"/><path d="M169 207L193 180L221 199L245 177L280 207M169 207H280" stroke="#3c7298" strokeWidth="1.5"/>
   <g className="object-board-right object-micro"><path d="M304 56L405 26V209L304 239Z" fill="#e2e4d9" stroke="#b7c0ba"/><path d="M321 70L389 50V104L321 124Z" fill="#b8c4a0"/><path d="M321 147L389 127M321 161L389 141M321 175L375 159" stroke="#94a38c" strokeWidth="2"/></g>
   <path d="M98 268L238 235L362 281L222 322Z" fill="#d9c6a1" stroke="#b7a17f"/><path d="M98 268V280L222 335L362 291V281L222 322Z" fill="#bca986"/>
   <path d="M158 273L194 226L230 272L264 222L301 278L230 304Z" fill="#e6b78a" stroke="#9a775a"/><path d="M158 273L230 304L230 272L194 226ZM230 272L264 222L301 278L230 304Z" fill="#ca976d"/><path d="M173 274L194 246L215 274M244 274L264 244L286 278" stroke="#f5d7ae"/>
   <text x="113" y="277" transform="rotate(24 113 277)" fontFamily="Arial" fontSize="7" letterSpacing=".8" fill="#6f6757">CONCEPT STUDY</text>
  </>}
 </svg>;
}
