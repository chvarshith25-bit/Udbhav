// Original vector motion study. No photographs, raster textures or external assets.
export default function ProceduralVisual({ archive = false }) {
  return <div className={`procedural-visual ${archive ? 'visual-archive' : ''}`} aria-hidden="true">
    <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none">
      <defs><pattern id={archive ? 'archive-grid' : 'motion-grid'} width="80" height="80" patternUnits="userSpaceOnUse"><path d="M80 0H0V80" stroke="currentColor" strokeOpacity=".08"/></pattern></defs>
      <rect width="1440" height="900" fill={`url(#${archive ? 'archive-grid' : 'motion-grid'})`}/>
      <g transform="translate(1040 610) rotate(-28)">
        {[0,1,2,3,4,5,6].map(i => <ellipse key={i} rx={220+i*48} ry={100+i*29} stroke="currentColor" strokeOpacity={.65-i*.075} strokeWidth={i===0?2:1}/>)}
        <path d="M-570 0H570M0-310V310" stroke="currentColor" strokeOpacity=".2"/>
      </g>
      <path d="M-160 850C240 800 270 350 750 400S1310 710 1620 150" stroke="#df9c7a" strokeOpacity=".42"/>
      <path d="M-160 865C240 815 270 365 750 415S1310 725 1620 165" stroke="#c6c8e5" strokeOpacity=".35"/>
      <circle cx="1040" cy="610" r="5" fill="currentColor"/>
      <path d="M96 650H185M140 605V695" stroke="currentColor" strokeOpacity=".35"/>
      <path d="M1240 160H1329M1284 115V205" stroke="currentColor" strokeOpacity=".35"/>
    </svg>
    <span className="visual-coordinate coordinate-one">UD / 27</span><span className="visual-coordinate coordinate-two">MOTION STUDY — 001</span>
  </div>;
}
