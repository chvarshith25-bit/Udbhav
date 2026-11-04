import { test } from 'node:test';
import assert from 'node:assert/strict';

let instance = 0;
async function session({ reduced = false, stored, blocked = false } = {}) {
  const entries = new Map(stored ? [['udbhav:intro:v1', stored]] : []);
  globalThis.matchMedia = () => ({ matches: reduced });
  globalThis.sessionStorage = {
    getItem(key) { if (blocked) throw new Error('Storage unavailable'); return entries.get(key) ?? null; },
    setItem(key, value) { if (blocked) throw new Error('Storage unavailable'); entries.set(key, value); },
  };
  const fresh = () => import(`./introSession.js?session-test=${++instance}`);
  return { api: await fresh(), entries, fresh };
}

test('claim at playback start suppresses repeats and an early reload', async () => {
  const { api, entries, fresh } = await session();
  assert.equal(api.shouldPlayIntro('/'), true);
  api.markIntro(); // Called before GSAP initialization, not only on completion.
  assert.equal(entries.get(api.INTRO_SESSION_KEY), 'complete');
  assert.equal(api.shouldPlayIntro('/'), false);
  assert.equal((await fresh()).shouldPlayIntro('/'), false);
});

test('a genuinely fresh session may play again', async () => {
  const first = await session(); first.api.markIntro();
  const next = await session();
  assert.equal(next.api.shouldPlayIntro('/'), true);
});

test('existing started or completed sessions stay consumed', async () => {
  for (const stored of ['started', 'complete']) {
    const { api } = await session({ stored });
    assert.equal(api.shouldPlayIntro('/'), false);
  }
});

test('reduced motion bypasses and consumes the session', async () => {
  const { api, entries } = await session({ reduced: true });
  assert.equal(api.shouldPlayIntro('/'), false);
  assert.equal(entries.get(api.INTRO_SESSION_KEY), 'complete');
});

test('direct categories stay functional without playing later on return home', async () => {
  for (const category of ['sports', 'cultural', 'technical']) {
    const { api } = await session();
    assert.equal(api.shouldPlayIntro('/' + category), false);
    assert.equal(api.shouldPlayIntro('/'), false);
  }
});

test('blocked storage never throws and in-memory state survives remounts', async () => {
  const { api } = await session({ blocked: true });
  assert.equal(api.shouldPlayIntro('/'), true);
  api.markIntro();
  assert.equal(api.shouldPlayIntro('/'), false);
});
