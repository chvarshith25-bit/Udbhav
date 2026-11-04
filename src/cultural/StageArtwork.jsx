import { useId } from 'react';

export default function StageArtwork({ kind = 'stage', className = '' }) {
  const id=useId().replace(/[^a-zA-Z0-9_-]/g,'');
  return <svg className={`cultural-artwork ${className}`} viewBox="0 0 1000 800" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id={`culture-beam-${id}`} x1=".5" y1="0" x2=".5" y2="1"><stop stopColor="#f3d8ad" stopOpacity=".5"/><stop offset="1" stopColor="#e7bb86" stopOpacity="0"/></linearGradient>
      <radialGradient id={`culture-floor-${id}`}><stop stopColor="#e7bb86" stopOpacity=".16"/><stop offset="1" stopColor="#e7bb86" stopOpacity="0"/></radialGradient>
      <pattern id={`culture-rig-${id}`} width="40" height="18" patternUnits="userSpaceOnUse"><path d="M0 0L20 18L40 0M0 0H40M0 18H40" stroke="#b3a18a" strokeOpacity=".45"/></pattern>
    </defs>
    <ellipse cx="515" cy="654" rx="460" ry="125" fill={`url(#culture-floor-${id})`}/>
    <path d="M86 640L300 543H728L941 640L515 761Z" fill="#28231d" stroke="#7c6a5355"/>
    <path d="M86 640L515 741L941 640M118 646L515 737L909 646" stroke="#b9a17b" strokeOpacity=".28"/>
    <path d="M153 132H851V152H153ZM153 132H171V584H153ZM833 132H851V584H833Z" fill={`url(#culture-rig-${id})`}/>
    <path d="M175 153H831V565H175Z" fill="#181613"/>
    <path d="M175 153H315L276 565H175ZM831 153H691L730 565H831Z" fill="#483327"/>
    <path d="M190 154L205 559M221 154L231 559M258 154V557M812 154L799 557M777 154L770 557M742 154V557" stroke="#85614a" strokeOpacity=".3" strokeWidth="9"/>
    <g className="culture-art-beam-left" style={{transformOrigin:'282px 151px'}}><path d="M282 151L339 664Q526 740 732 664Z" fill={`url(#culture-beam-${id})`}/></g>
    <g className="culture-art-beam-right" style={{transformOrigin:'740px 151px'}}><path d="M740 151L299 664Q526 740 721 664Z" fill={`url(#culture-beam-${id})`}/></g>
    <g fill="#dec29b">{[282,398,514,626,740].map(x => <rect key={x} x={x-8} y="150" width="16" height="10" rx="2"/>)}</g>
    <g stroke="#756651" fill="#191814">{[207,766].map(x => <g key={x}><rect x={x} y="485" width="55" height="104" rx="3"/><circle cx={x+27} cy="514" r="17"/><circle cx={x+27} cy="559" r="18"/></g>)}</g>
    {(kind==='stage'||kind==='performance') && <g className="culture-art-performer" stroke="#e5ca9d" strokeWidth="3">
      <rect x="484" y="315" width="37" height="69" rx="18" fill="#ad927066"/>
      <path d="M474 351V366Q474 395 502 395Q530 395 530 366V351M502 395V598M472 599H533M489 329H516M489 338H516M489 347H516"/>
      <path d="M451 342Q423 366 451 390M554 340Q586 366 554 392" strokeOpacity=".38"/>
      <path d="M355 512C389 419 426 452 412 526C399 600 326 610 358 534C408 416 520 512 579 454C620 414 601 372 579 413C536 498 655 535 696 465" stroke="#c9a782" strokeWidth="1.5" strokeOpacity=".45"/>
    </g>}
    {kind==='visual' && <g stroke="#e4c89b" strokeWidth="3">
      <path d="M329 319H669V539H329ZM344 335H654V523H344Z"/>
      <path d="M329 350H346M329 382H346M329 414H346M329 446H346M329 478H346M329 510H346M652 350H669M652 382H669M652 414H669M652 446H669M652 478H669M652 510H669"/>
      <circle cx="499" cy="426" r="68"/><circle cx="499" cy="426" r="43"/><path d="M478 385L520 426L478 467Z" fill="#c7aa7c44"/>
      <path d="M365 289L405 263H580L624 289M365 569L405 595H580L624 569" strokeOpacity=".4"/>
    </g>}
    {kind==='play' && <g stroke="#e4c89b" strokeWidth="3">
      <path d="M349 379Q351 342 397 342H605Q651 342 653 379L676 482Q680 523 649 524L589 474H413L353 524Q322 522 326 482Z" fill="#b49b7420"/>
      <path d="M390 375V437M359 406H422" strokeWidth="7"/><circle cx="590" cy="390" r="9"/><circle cx="623" cy="422" r="9"/>
      <path d="M462 397H537M462 415H537M462 433H514M399 566H605M435 586H568" strokeOpacity=".4"/>
    </g>}
    <g stroke="#c6ae88" strokeOpacity=".24"><path d="M354 665L361 647M395 676L403 655M438 686L445 662M482 696L485 670M526 696V671M569 686L565 664M612 677L605 658M654 667L645 649"/></g>
  </svg>;
}
