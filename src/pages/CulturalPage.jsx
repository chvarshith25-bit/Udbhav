import { useCallback, useRef, useState } from 'react';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { TransitionLink } from '../transitions/PageTransitionProvider';
import { Footer } from '../sections/Supporting';
import { culturalActs, culturalEventCount } from '../cultural/acts';
import FrequencyArtwork from '../cultural/FrequencyArtwork';
import CulturalDetail from '../cultural/CulturalDetail';
import { useFrequencyMotion } from '../cultural/useFrequencyMotion';
import '../cultural/cultural.css';

function FrequencyMark(){return <svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M20 2V38M2 20H38M7 7L33 33M7 33L33 7" stroke="currentColor" strokeWidth="2"/></svg>}

export default function CulturalPage(){
  const root=useRef(null),tabs=useRef([]),opener=useRef(null);
  const [channelIndex,setChannelIndex]=useState(0),[previewId,setPreviewId]=useState(culturalActs[0].events[0].id),[detail,setDetail]=useState(null);
  const channel=culturalActs[channelIndex];
  const preview=channel.events.find(event=>event.id===previewId)??channel.events[0];
  useFrequencyMotion(root,channel.id,preview.id);
  const selectChannel=index=>{setChannelIndex(index);setPreviewId(culturalActs[index].events[0].id)};
  const openEvent=(event,element)=>{opener.current=element;setDetail(event)};
  const dismiss=useCallback(()=>setDetail(null),[]);
  return <><main ref={root} className="cultural-frequency">
    <header className="frequency-masthead"><div className="frequency-topline"><TransitionLink to="/"><ArrowLeft size={14} aria-hidden="true"/>The festival</TransitionLink><span className="frequency-broadcast"><i aria-hidden="true"/>LIVE FROM UDHBHAV 2K27</span><span>The festival frequency</span></div><h1 tabIndex={-1}>CULTURAL<span aria-hidden="true"><FrequencyMark/></span></h1><div className="frequency-deck"><p>Not just a festival.<br/>A feeling you tune into.</p><svg viewBox="0 0 320 48" fill="none" aria-hidden="true"><path d="M0 24H68C94 24 86 4 111 4C145 4 133 44 166 44C197 44 187 7 212 7C235 7 226 24 252 24H320" stroke="currentColor" strokeWidth="1.5"/><path d="M0 24H320" stroke="currentColor" strokeOpacity=".15"/></svg><span>Performance. Perspective. Play.</span></div></header>
    <section className="frequency-studio" aria-label="Cultural channels">
      <div className="frequency-channel-bar"><p>Find your frequency</p><span>Choose a channel to explore all {culturalEventCount} events</span></div>
      <div className="frequency-channels" role="tablist" aria-label="Festival channels">{culturalActs.map((item,index)=><button key={item.id} ref={el=>{tabs.current[index]=el}} id={`frequency-tab-${item.id}`} type="button" role="tab" aria-selected={channelIndex===index} aria-controls="frequency-environment" tabIndex={channelIndex===index?0:-1} onClick={()=>selectChannel(index)} onKeyDown={event=>{let next;if(event.key==='ArrowRight')next=(index+1)%3;else if(event.key==='ArrowLeft')next=(index+2)%3;else if(event.key==='Home')next=0;else if(event.key==='End')next=2;else return;event.preventDefault();selectChannel(next);tabs.current[next]?.focus()}}><span className="frequency-channel-number">CH / {item.number}</span><strong>{item.title}</strong><span className="frequency-channel-count">{item.events.length} events <ArrowUpRight size={18} aria-hidden="true"/></span></button>)}</div>
      <div id="frequency-environment" className={`frequency-environment frequency-${channel.kind}`} data-channel={channel.id} role="tabpanel" aria-labelledby={`frequency-tab-${channel.id}`}>
        <div className="frequency-scene"><div className="frequency-scene-meta"><span>UD / {channel.number}</span><span>{channel.title} / In focus</span><span aria-hidden="true"><FrequencyMark/></span></div><div className="frequency-environment-art"><FrequencyArtwork kind={channel.kind}/></div><div className="frequency-scene-type" aria-hidden="true"><span>{channel.words[0]}</span><strong>{channel.words[1]}</strong></div><button className="frequency-preview" type="button" onClick={event=>openEvent(preview,event.currentTarget)} aria-label={`View ${preview.title} details`}><span>In the spotlight</span><strong data-preview-id={preview.id}>{preview.title}</strong><ArrowUpRight size={26} aria-hidden="true"/></button><p className="frequency-image-note">Original visual study / Event photographs coming soon</p></div>
        <div className="frequency-discovery"><div className="frequency-discovery-heading"><span>CHANNEL {channel.number}</span><h2>{channel.line}</h2><p>{channel.caption}</p></div><div className="frequency-event-index">{channel.events.map((event,index)=><button key={event.id} className="frequency-event-title" data-event-id={event.id} data-selected={preview.id===event.id} type="button" onPointerEnter={e=>{if(e.pointerType!=='touch')setPreviewId(event.id)}} onFocus={()=>setPreviewId(event.id)} onClick={e=>openEvent(event,e.currentTarget)}><span className="frequency-event-number">{String(index+1).padStart(2,'0')}</span><span className="frequency-event-name">{event.title}{event.id==='dancing-competition'&&<small>Freestyle / Techno / Mass</small>}</span><ArrowUpRight size={18} aria-hidden="true"/></button>)}</div><p className="frequency-discovery-cue">Find your event. Make your moment.</p></div>
      </div>
    </section>
    <section className="frequency-signoff"><span>One festival. Every kind of energy.</span><p>This is your<br/><em>frequency.</em></p><TransitionLink to="/">Back to the festival <ArrowUpRight size={22} aria-hidden="true"/></TransitionLink></section>
  </main><Footer/>{detail&&<CulturalDetail key={detail.id} event={detail} act={channel} onDismiss={dismiss} opener={opener.current}/>}</>;
}
