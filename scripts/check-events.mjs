import assert from 'node:assert/strict';
import { events, categories, festival } from '../src/data/events.js';
assert.equal(events.length,26,'All 26 requested events must be present');
assert.equal(new Set(events.map(e=>e.id)).size,events.length,'Unique event IDs');
assert.deepEqual(categories.map(c=>c.id),['sports','cultural','technical']);
assert.deepEqual(categories.map(c=>events.filter(e=>e.category===c.id).length),[9,13,4]);
for(const e of events){
 assert.ok(e.title && e.description && categories.some(c=>c.id===e.category));
 assert.equal(e.coordinators.length,2);
 assert.ok(Array.isArray(e.images));
 for(const image of e.images) assert.ok(image.src && image.alt,'Event images need a source and alt text');
 assert.ok(!e.date || festival.dates.includes(e.date),'Event dates must belong to the festival');
 assert.ok(!e.registrationWhatsapp || /^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(e.registrationWhatsapp),'WhatsApp destination must be explicit');
}
assert.equal(festival.annualDay,'2027-01-30');
assert.equal(festival.schedule.length,0,'Do not assign an unconfirmed event schedule');
console.log('PASS: all 26 events, category counts, unique IDs, detail schema, festival dates and unconfirmed schedule.');
