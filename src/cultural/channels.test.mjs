import test from 'node:test';
import assert from 'node:assert/strict';
import { culturalActs, culturalEventCount } from './acts.js';
import { events } from '../data/events.js';
test('every canonical Cultural event belongs to exactly one frequency channel',()=>{
 const ids=culturalActs.flatMap(channel=>channel.events.map(event=>event.id));
 assert.equal(culturalEventCount,13);assert.equal(new Set(ids).size,13);
 assert.deepEqual([...ids].sort(),events.filter(event=>event.category==='cultural').map(event=>event.id).sort());
 assert.deepEqual(culturalActs.map(channel=>channel.events.length),[4,3,6]);
 assert.deepEqual(culturalActs[0].events.map(event=>event.id),['battle-of-bands','classical-dance','singing-competition','dancing-competition']);
 for(const channel of culturalActs)for(const event of channel.events)assert.equal(event,events.find(canonical=>canonical.id===event.id));
});
