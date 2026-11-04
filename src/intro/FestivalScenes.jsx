const codeLines = [
  ['const ', 'festival', ' = {'],
  ['  name: ', '"UDHBHAV"', ','],
  ['  year: ', '2027', ','],
  ['  categories: ['],
  ['    ', '"sports"', ', ', '"cultural"', ', ', '"technical"'],
  ['  ]'],
  ['};'],
];
export function FestivalEmblem({ kind }) {
  return <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    {kind === 'sports' ? <><circle cx="32" cy="32" r="23"/><path d="M9 32H55M32 9V55M16 15Q47 32 16 49M48 15Q17 32 48 49"/></> : kind === 'cultural' ? <><rect x="25" y="8" width="14" height="28" rx="7"/><path d="M19 27V30A13 13 0 0 0 45 30V27M32 43V56M21 56H43M28 15H36M28 21H36"/></> : <><path d="M23 14L8 32L23 50M41 14L56 32L41 50M36 10L28 54"/></>}
  </svg>;
}

// A single theatrical space is repurposed from court to stage to coding canvas.
export default function FestivalScenes() {
  return <div className="festival-scenes" aria-hidden="true">
    <div className="film-athletic-light"/>
    <svg className="festival-film" viewBox="-720 -450 1440 900" preserveAspectRatio="xMidYMid slice" fill="none">
      <g className="film-court" stroke="#d1d9b1" strokeWidth="1.2">
        <path d="M-600 440L-335 45H335L600 440Z"/><path d="M0 45V440M-468 245H468"/>
        <ellipse cy="245" rx="125" ry="48"/><path d="M-335 45L-400 145H-240V45M335 45L400 145H240V45"/>
      </g>
      <ellipse className="film-ball-shadow" cy="215" rx="82" ry="13" fill="#000"/>
      <ellipse className="film-impact" cy="215" rx="100" ry="14" fill="#e7d29f"/>
      <g className="film-ball">
        <circle r="88" fill="#b47845" stroke="#d5a06a" strokeWidth="1.2"/>
        <path d="M-88 0H88M0-88V88M-62-62C35-20 35 20-62 62M62-62C-35-20-35 20 62 62" stroke="#33291d" strokeWidth="4"/>
        <ellipse cx="-24" cy="-34" rx="42" ry="25" fill="#f4d6ab" opacity=".1"/>
      </g>
      <g className="film-stage">
        <path d="M-720-310H720M-720-295H720" stroke="#7c826d" strokeWidth="1"/>
        {[-480,-360,0,360,480].map(x=><g key={x} transform={`translate(${x} -302)`}><path d="M0-35V0" stroke="#7c826d"/><rect x="-17" y="0" width="34" height="24" rx="3" fill="#454b3d" stroke="#8c957c"/><ellipse cy="25" rx="12" ry="4" fill="#e8d6ae"/></g>)}
        <path className="film-stage-beam beam-left" d="M-369-275L-351-275L310 270L-410 270Z" fill="#dfc79c"/>
        <path className="film-stage-beam beam-right" d="M351-275L369-275L410 270L-310 270Z" fill="#d3ddb2"/>
        <ellipse className="film-stage-pool" cy="225" rx="380" ry="47" fill="#e2d2aa" opacity=".1"/>
        <path d="M-550 265H550L620 310H-620Z" fill="#20251c" stroke="#899178" strokeWidth="1"/>
        <g className="film-microphone" stroke="#c8cbbd" strokeWidth="2"><rect x="-14" y="-55" width="28" height="54" rx="14" fill="#b6bcaa"/><path d="M-23-20V-10A23 23 0 0 0 23-10V-20M0 13V230M-30 232H30M-8-42H8M-8-31H8M-8-20H8"/></g>
        <path className="film-stage-edge" d="M-450 310H450" stroke="#d7f34d" strokeWidth="2"/>
      </g>
    </svg>
    <div className="film-editor">
      <div className="film-editor-top"><span className="film-editor-dots"><i/><i/><i/></span><span>festival.js</span><span className="film-editor-status">UDHBHAV / BUILD</span></div>
      <div className="film-editor-body"><div className="film-code">{codeLines.map((parts,index)=><div className="film-code-line" key={parts.join('')}><span className="film-line-number">{String(index+1).padStart(2,'0')}</span><code>{parts.map((part,i)=><span className={i%2?'film-code-value':''} key={`${part}-${i}`}>{part}</span>)}</code></div>)}<span className="film-code-cursor"/></div>
        <div className="film-editor-preview"><span className="film-preview-label">FESTIVAL EXPERIENCES</span>{['sports','cultural','technical'].map(kind=><div className={`film-preview-row preview-${kind}`} key={kind}><FestivalEmblem kind={kind}/><span>{kind.toUpperCase()}</span><span className="film-preview-dot"/></div>)}</div>
      </div><div className="film-editor-bottom"><span>SPORTS + CULTURAL + TECHNICAL</span><span className="film-build-ready">ONE FESTIVAL.</span></div>
    </div>
    <div className="film-scene-caption"><span className="film-caption caption-sports">01 / SPORTS — THE COURT</span><span className="film-caption caption-cultural">02 / CULTURAL — THE STAGE</span><span className="film-caption caption-technical">03 / TECHNICAL — THE BUILD</span></div>
  </div>;
}
