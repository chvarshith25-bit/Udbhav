import test from 'node:test';
import assert from 'node:assert/strict';
import { arenaSports, arenaSurface } from './arenaData.js';
import { events } from '../data/events.js';

test('nine directly selectable arena profiles preserve all canonical Sports events and share morph-compatible geometry',()=>{
 assert.equal(arenaSports.length,9);
 assert.deepEqual(arenaSports.map(sport=>sport.id),events.filter(event=>event.category==='sports').map(event=>event.id));
 assert.equal(new Set(arenaSports.map(sport=>JSON.stringify(sport.surface))).size,9);
 const topology=arenaSurface(arenaSports[0].surface).replace(/[-\d.\s]/g,'');
 for(const sport of arenaSports){assert.equal(sport.event,events.find(event=>event.id===sport.id));assert(sport.surface.every(Number.isFinite));assert.equal(arenaSurface(sport.surface).replace(/[-\d.\s]/g,''),topology)}
 assert.equal(arenaSports.find(sport=>sport.id==='cricket').event.images.length,4);
});
