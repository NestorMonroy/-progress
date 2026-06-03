/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { caretAltToRightIcon as l, caretAltToLeftIcon as i, chevronRightIcon as d, chevronLeftIcon as g } from "@progress/kno-svg-icons";
import { messages as v } from "../messages/index.mjs";
const p = (t, s) => s ? s(t) : { messageKey: t, defaultMessage: v[t] }, f = (t, s) => t.toLanguageString(s.messageKey, s.defaultMessage), h = (t, s, e) => {
  const o = t ? "caret-alt-to-right" : "caret-alt-to-left", r = t ? l : i, n = "k-pager-nav k-pager-first" + (s === 1 && !e ? " k-disabled" : "");
  return { rtlClass: o, rtlIcon: r, isDisabledClass: n, isDisabled: s === 1 ? !0 : void 0 };
}, D = (t, s, e) => {
  const o = t ? "chevron-right" : "chevron-left", r = t ? d : g, n = "k-pager-nav" + (s === 1 && !e ? " k-disabled" : "");
  return { rtlClass: o, rtlIcon: r, isDisabledClass: n, isDisabled: s === 1 ? !0 : void 0 };
}, m = (t, s, e, o) => {
  const r = t ? "chevron-left" : "chevron-right", n = t ? g : d, a = "k-pager-nav" + (s >= e && !o ? " k-disabled" : ""), c = s >= e ? !0 : void 0;
  return { rtlClass: r, rtlIcon: n, isDisabledClass: a, isDisabled: c };
}, k = (t, s, e, o) => {
  const r = t ? "caret-alt-to-left" : "caret-alt-to-right", n = t ? i : l, a = "k-pager-nav k-pager-last" + (s >= e && !o ? " k-disabled" : ""), c = s >= e ? !0 : void 0;
  return { rtlClass: r, rtlIcon: n, isDisabledClass: a, isDisabled: c };
};
export {
  h as getFirstButtonProps,
  p as getL10NMessage,
  k as getLastButtonProps,
  m as getNextButtonProps,
  D as getPrevButtonProps,
  f as translateMessage
};
