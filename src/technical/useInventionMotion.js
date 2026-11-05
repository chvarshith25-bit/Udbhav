import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { technicalModes, moduleTransform, coreTransform, connectionPath } from './modes';


function settleAssembly(root,modeIndex){
 const config=technicalModes[modeIndex].config;
 const find=selector=>root.current?.querySelector(`.invention-canvas ${selector}`);
 config.modules.forEach((point,index)=>{find(`.engine-module-${index}`)?.setAttribute('transform',moduleTransform(point));find(`.engine-link-${index}`)?.setAttribute('d',connectionPath(point,modeIndex))});
 find('.engine-core')?.setAttribute('transform',coreTransform(config.core));
 find('.engine-rotor')?.setAttribute('transform',`rotate(${config.ring})`);
 find('.engine-gantry')?.setAttribute('transform',`translate(${config.gantry[0]} ${config.gantry[1]})`);
 find('.engine-base')?.setAttribute('transform',`translate(0 ${config.base})`);
 const dome=find('.engine-dome');if(dome)dome.style.opacity=String(config.dome);
 const title=root.current?.querySelector('.invention-event h2');if(title)title.style.clipPath='';
}

export function useInventionMotion(root,modeIndex){
 const owner=useRef(null),motion=useRef(null);
 useLayoutEffect(()=>{
  owner.current=gsap.context(()=>{},root);
  return()=>{motion.current?.kill();owner.current?.revert();owner.current=null};
 },[root]);
 useLayoutEffect(()=>{
  const config=technicalModes[modeIndex].config;
  motion.current?.kill();
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){settleAssembly(root,modeIndex);return;}
  let failed=false;
  try{owner.current?.add(()=>{try{
   const q=gsap.utils.selector(root);
   const timeline=gsap.timeline({defaults:{duration:.8,ease:'power3.inOut'}});motion.current=timeline;
   config.modules.forEach((point,index)=>{
    timeline.to(q(`.invention-canvas .engine-module-${index}`),{attr:{transform:moduleTransform(point)}},index*.025);
    timeline.to(q(`.invention-canvas .engine-link-${index}`),{attr:{d:connectionPath(point,modeIndex)}},0);
   });
   timeline.to(q('.invention-canvas .engine-core'),{attr:{transform:coreTransform(config.core)}},0)
    .to(q('.invention-canvas .engine-rotor'),{attr:{transform:`rotate(${config.ring})`}},0)
    .to(q('.invention-canvas .engine-gantry'),{attr:{transform:`translate(${config.gantry[0]} ${config.gantry[1]})`}},0)
    .to(q('.invention-canvas .engine-base'),{attr:{transform:`translate(0 ${config.base})`}},0)
    .to(q('.invention-canvas .engine-dome'),{opacity:config.dome},.08)
    .fromTo(q('.invention-event h2'),{clipPath:modeIndex===1?'inset(0 100% 0 0)':modeIndex===2?'inset(50% 0 50% 0)':'inset(0 0 100% 0)'},{clipPath:'inset(0 0% 0 0)',duration:.45,ease:'power3.out'},.12);
  }catch{failed=true}})}catch{failed=true}
  if(failed){motion.current?.kill();owner.current?.revert();settleAssembly(root,modeIndex)}
 },[root,modeIndex]);
}
