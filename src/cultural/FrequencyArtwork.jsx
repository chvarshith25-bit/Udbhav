import { useId } from 'react';

// Original graphic studies. These are image-ready festival graphics, never photographs.
export default function FrequencyArtwork({kind='performance'}) {
  const id=useId().replace(/[^a-zA-Z0-9_-]/g,'');
  return <svg className={`frequency-art frequency-art-${kind}`} viewBox="0 0 760 610" fill="none" aria-hidden="true">
    <defs><linearGradient id={`ribbon-${id}`} x1=".1" y1="0" x2=".9" y2="1"><stop stopColor="#f7dec9"/><stop offset=".45" stopColor="#d09b91"/><stop offset="1" stopColor="#786577"/></linearGradient><linearGradient id={`light-${id}`} x1=".5" y1="0" x2=".5" y2="1"><stop stopColor="#e3c6b5" stopOpacity=".28"/><stop offset="1" stopColor="#e3c6b5" stopOpacity="0"/></linearGradient></defs>
    {kind==='performance'&&<>
      <path className="frequency-light" d="M120 0L650 610H0ZM640 0L760 610H100Z" fill={`url(#light-${id})`}/>
      <g className="frequency-gesture" transform="rotate(-14 380 300)">
        <path d="M84 399C132 146 598 68 663 224C720 363 288 382 232 491C191 570 487 557 610 406C668 334 649 264 583 278C515 293 543 408 685 462" stroke={`url(#ribbon-${id})`} strokeWidth="37"/>
        <path d="M84 389C132 136 598 58 663 214C720 353 288 372 232 481C191 560 487 547 610 396" stroke="#ffe5c7" strokeOpacity=".7" strokeWidth="1.5"/>
        <path d="M35 360C138 119 519 32 678 166M253 563C400 604 613 500 682 371" stroke="#e1bba6" strokeOpacity=".25"/>
      </g>
      <path d="M40 552H720" stroke="#f5e5db" strokeOpacity=".2"/>
    </>}
    {kind==='visual'&&<>
      <g className="frequency-contact-sheet" transform="rotate(-9 380 300)">
        <path d="M-45 108H800V507H-45Z" fill="#242934" stroke="#bac5d4"/>
        {[-20,250,520].map((x,i)=><g key={x}><path d={`M${x} 157H${x+240}V460H${x}Z`} fill={i===1?'#c8c9bc':'#373d47'} stroke="#c7cdbd" strokeOpacity=".5"/>{i===1?<><circle cx={x+120} cy="285" r="66" stroke="#4d5b63"/><path d={`M${x+45} 415L${x+184} 205M${x+35} 304H${x+205}`} stroke="#4d5b63"/><path d={`M${x+50} 192H${x+70}M${x+50} 192V212M${x+190} 425H${x+170}M${x+190} 425V405`} stroke="#2b333b" strokeWidth="3"/></>:<path d={`M${x+20} 430L${x+220} 185M${x+20} 185L${x+220} 430`} stroke="#87928e" strokeOpacity=".28"/>}<text x={x+8} y="490" fill="#e9e7d8" fontFamily="Arial" fontSize="12">UD / FRAME 0{i+1}</text></g>)}
        {Array.from({length:21},(_,i)=><g key={i*40}><rect x={i*40-30} y="120" width="18" height="19" fill="#13181c"/><rect x={i*40-30} y="474" width="18" height="9" fill="#13181c"/></g>)}
      </g><path d="M70 50H115M70 50V95M690 50H645M690 50V95M70 560H115M70 560V515M690 560H645M690 560V515" stroke="#d1d5c4" strokeWidth="2"/>
    </>}
    {kind==='play'&&<>
      <g className="frequency-play-field" transform="translate(0 4)"><path d="M88 84H672V520H88Z" stroke="#d7f34d" strokeOpacity=".4"/><path d="M105 101H655V503H105ZM380 101V503" stroke="#d7f34d" strokeOpacity=".14"/><circle cx="380" cy="302" r="142" stroke="#d7f34d" strokeOpacity=".2"/>
        <g stroke="#cdd99d" strokeWidth="3"><path d="M126 158H211V233H126M126 371H211V446H126M211 195H280V409H211M280 302H345M634 158H549V233H634M634 371H549V446H634M549 195H480V409H549M480 302H415"/></g>
        <path className="frequency-play-arrow" d="M294 238H382L447 302L382 366H294L359 302Z" fill="#d7f34d"/>
        <path d="M62 60H130M62 60V128M698 60H630M698 60V128M62 544H130M62 544V476M698 544H630M698 544V476" stroke="#e2ebc9" strokeWidth="3"/>
      </g>
    </>}
  </svg>;
}
