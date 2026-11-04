import test from 'node:test';
import assert from 'node:assert/strict';
import { culturalDistricts, culturalEventCount, posterDesigns } from './acts.js';
import { events } from '../data/events.js';
test('every canonical Cultural event belongs to exactly one festival district',()=>{
 const ids=culturalDistricts.flatMap(district=>district.events.map(event=>event.id));
 assert.equal(culturalEventCount,13);assert.equal(new Set(ids).size,13);
 assert.deepEqual(Object.keys(posterDesigns).sort(),[...ids].sort());
 assert.equal(new Set(Object.values(posterDesigns).map(design=>design.art)).size,13);
 assert.deepEqual([...ids].sort(),events.filter(event=>event.category==='cultural').map(event=>event.id).sort());
 assert.deepEqual(culturalDistricts.map(district=>district.events.length),[4,3,6]);
 assert.deepEqual(culturalDistricts[0].events.map(event=>event.id),['battle-of-bands','classical-dance','singing-competition','dancing-competition']);
 for(const district of culturalDistricts)for(const event of district.events)assert.equal(event,events.find(canonical=>canonical.id===event.id));
});
