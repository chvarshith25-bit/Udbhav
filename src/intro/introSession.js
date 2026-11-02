export const INTRO_SESSION_KEY = 'udbhav:intro:v1';
let claimedInMemory = false;

export function markIntro(status = 'complete') {
  claimedInMemory = true;
  try { sessionStorage.setItem(INTRO_SESSION_KEY, status); } catch { /* Private storage: retain this document's session in memory. */ }
}
export function shouldPlayIntro(pathname) {
  let recorded = claimedInMemory;
  try { recorded ||= Boolean(sessionStorage.getItem(INTRO_SESSION_KEY)); } catch { /* Storage may be disabled. */ }
  // A direct category visit consumes this opening, so returning home never interrupts navigation.
  if (recorded || pathname !== '/' || matchMedia('(prefers-reduced-motion: reduce)').matches) {
    markIntro();
    return false;
  }
  return true;
}
