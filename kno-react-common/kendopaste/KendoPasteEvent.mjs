/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const o = "kno-populate-event";
function r(t) {
  return new CustomEvent(o, {
    bubbles: !0,
    cancelable: !0,
    detail: { fieldValues: t }
  });
}
function u(t, e) {
  if (!t)
    return !1;
  const n = r(e);
  return t.dispatchEvent(n);
}
function c(t) {
  if (!t)
    return document.body;
  const e = t.closest("form");
  if (e)
    return e;
  const n = t.closest(".k-form");
  return n || document.body;
}
export {
  o as KNO_PASTE_EVENT_NAME,
  r as createKendoPasteEvent,
  u as dispatchKendoPasteEvent,
  c as getKendoPasteEventTarget
};
