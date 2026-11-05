import test from 'node:test';
import assert from 'node:assert/strict';
import { technicalModes } from './modes.js';
import { events } from '../data/events.js';

test('all four independent Technical events share one complete, distinct assembly configuration',()=>{
 assert.equal(technicalModes.length,4);
 assert.deepEqual(technicalModes.map(mode=>mode.id),events.filter(event=>event.category==='technical').map(event=>event.id));
 assert.equal(new Set(technicalModes.map(mode=>JSON.stringify(mode.config))).size,4);
 for(const mode of technicalModes){
  assert.equal(mode.event,events.find(event=>event.id===mode.id));
  assert.equal(mode.config.modules.length,4);
  assert.equal(new Set(mode.config.modules.map(point=>point.slice(0,2).join(','))).size,4);
  assert(mode.config.modules.flat().every(Number.isFinite));
  assert(mode.config.core.every(Number.isFinite));
 }
});
