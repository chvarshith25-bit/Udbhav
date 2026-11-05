import test from 'node:test';
import assert from 'node:assert/strict';
import { technicalModes } from './modes.js';
import { events } from '../data/events.js';

test('four distinct workspace objects preserve every canonical Technical event',()=>{
 assert.equal(technicalModes.length,4);
 assert.deepEqual(technicalModes.map(mode=>mode.id),events.filter(event=>event.category==='technical').map(event=>event.id));
 assert.deepEqual(technicalModes.map(mode=>mode.kind),['laptop','notes','drawings','exhibit']);
 for(const mode of technicalModes){assert.equal(mode.event,events.find(event=>event.id===mode.id));assert(Number.isFinite(mode.tilt))}
});
