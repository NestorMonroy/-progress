/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { FOCUSABLE_ELEMENTS as b, TABBABLE_ELEMENTS as S } from "@progress/kno-react-common";
import { KEYBOARD_NAV_EDIT_BUTTON_CLASS as B, KEYBOARD_NAV_CANCEL_BUTTON_CLASS as k, KEYBOARD_NAV_FILTER_COL_SUFFIX as T, KEYBOARD_NAV_DATA_ID as g, KEYBOARD_NAV_DATA_LEVEL as f, KEYBOARD_NAV_DATA_BOTTOM_PINNED as w, KEYBOARD_NAV_DATA_TOP_PINNED as h, KEYBOARD_NAV_DATA_BODY as $, KEYBOARD_NAV_DATA_HEADER as O, KEYBOARD_NAV_DATA_SCOPE as F } from "./constants.mjs";
const q = (e, t, r = "cell") => `${t}_${e}_${r}`, R = (e) => {
  if (e)
    return parseInt(e.getAttribute(f) || "", 10);
}, _ = (e) => {
  if (!e)
    return;
  const t = e.getAttribute(g);
  return t || void 0;
}, E = (e) => e ? !!e.getAttribute(g) : !1, L = (e, t = { level: 0 }) => e.querySelector(`[${f}='${t.level}']`), m = (e) => e && e.parentElement && e.parentElement.closest(`[${f}]`), I = (e, t) => e.querySelector(`[${g}='${t}']`), K = (e) => e && e.parentElement && e.parentElement.closest(`[${F}]`), P = (e) => {
  var r;
  const t = ((r = e == null ? void 0 : e.parentElement) == null ? void 0 : r.closest(".k-grid-edit-row")) || null;
  return t == null ? void 0 : t.querySelector("." + k);
}, V = (e) => document.querySelector(`[aria-rowindex="${e}"] .k-grid-remove-command`), a = (e) => document.querySelector(`[data-keyboardnavid="${e}"]`), Y = (e) => {
  var n;
  const t = e && e.parentElement && e.parentElement.closest(".k-table-row");
  let r;
  return (n = t == null ? void 0 : t.parentElement) == null || n.childNodes.forEach((l) => {
    if (t === l) {
      const o = l.previousSibling;
      r = {
        current: t.getAttribute("aria-rowindex"),
        prev: o && o.getAttribute("aria-rowindex")
      };
    }
  }), r;
};
async function x(e, t, r = 5e3) {
  const n = Date.now();
  if (t)
    for (; Date.now() - n < r; ) {
      const l = t.querySelector(e);
      if (l)
        return l;
      await new Promise((o) => setTimeout(o, 20));
    }
  return !1;
}
const U = async (e) => {
  var n;
  const t = ((n = e == null ? void 0 : e.parentElement) == null ? void 0 : n.closest(".k-grid-edit-row")) || null;
  return await x("." + B, t);
}, W = (e) => (e == null ? void 0 : e.closest(".k-table-td")) || null, j = (e) => e.querySelector(`[${O}]`), M = (e) => e.querySelector(`[${$}]`), H = (e) => e.querySelector(`[${h}]`), X = (e) => e.querySelector(`[${w}]`), Ee = (e) => e.querySelector(".k-grid-norecords"), Ae = (e) => {
  const t = e.querySelector(".k-grid-edit-cell"), r = t == null ? void 0 : t.querySelector("input");
  r ? r.focus() : t && t.firstChild.focus();
}, z = (e, t) => {
  const { scope: r, navigationStateRef: n, contextStateRef: l } = e;
  if (!n.current || !r)
    return;
  const o = ne(n.current.navigationMatrix), s = I(r, o);
  p({ elementForFocus: s, contextStateRef: l, event: t });
}, D = (e, t = { focusable: !1 }) => {
  const r = t.focusable ? b : S;
  return Array.from(e.querySelectorAll(r.join(",")));
}, G = (e, t = { level: 0 }) => {
  if (!e)
    return [];
  const r = b.map((n) => n + `[${f}='${t.level}']`).join(",");
  return Array.from(e.querySelectorAll(r));
}, J = (e = { level: 0 }) => {
  const t = b.map((r) => r + `[${f}='${e.level}']`).join(",");
  return (r) => r.matches(t);
}, p = (e) => {
  const { elementForFocus: t, event: r, contextStateRef: n, prevElement: l } = e;
  if (n.current && t && t.focus) {
    r == null || r.preventDefault();
    const o = t.querySelector(".k-checkbox-wrap .k-checkbox");
    o && o.focus ? o.focus() : t.focus(), E(t) && (t.setAttribute("tabIndex", "0"), n.current.activeId = _(t)), l && E(l) && l.setAttribute("tabIndex", "-1");
  }
}, Q = (e) => e.current ? e.current.idPrefix : "", Z = (e, t, r, n, l) => {
  if (!r)
    return [];
  let o = e + (l ? -1 : 1);
  for (; o >= 0 && o < n.length; ) {
    const s = n[o][t];
    if (s !== r)
      return [s, [o, t]];
    o = o + (l ? -1 : 1);
  }
  return [];
}, d = (e, t, r, n, l) => {
  if (!r)
    return [];
  let o = t + (l ? -1 : 1);
  for (; o >= 0 && n[e] && o < n[e].length; ) {
    const s = n[e][o];
    if (s !== r)
      return [s, [e, o]];
    o = o + (l ? -1 : 1);
  }
  return [];
}, A = (e, t) => {
  if (t) {
    for (let r = 0; r < e.length; r++)
      for (let n = 0; n < e[r].length; n++)
        if (e[r][n] === t)
          return [r, n];
  }
}, C = (e, t, r) => {
  let n;
  do
    if (e = e + 1, n = t[r - e], n && n.editable)
      break;
  while (r - e >= 0);
  return n;
}, ee = (e, t, r, n) => {
  var N;
  let l;
  const [o, s] = e;
  let c;
  const i = 0, u = t.length;
  return c = C(i, t, s), c ? l = d(o, c.ariaColumnIndex, r, n, !0) : (c = C(i, t, u), l = d(o - 1, c.ariaColumnIndex, r, n, !0)), {
    prevCell: l && l[0] && a(l[0]),
    elementToFocus: l && l[0] && ((N = a(l[0])) == null ? void 0 : N.getAttribute("role"))
  };
}, v = (e, t, r) => {
  let n;
  do
    if (e = e + 1, n = t[r + e], n && n.editable)
      break;
  while (r + e - 1 < t.length);
  return n;
}, te = (e, t, r, n) => {
  var o;
  let l;
  if (e) {
    const [s, c] = e;
    let i, u = 0;
    i = v(u, t, c), i ? l = d(s, i.ariaColumnIndex, r, n, !0) : (u = -1, i = v(u, t, 0), l = d(s + 1, i.ariaColumnIndex, r, n, !0));
  }
  return {
    nextCell: l && l[0] && a(l[0]),
    elementToFocus: l && l[0] && ((o = a(l[0])) == null ? void 0 : o.getAttribute("role"))
  };
}, re = (e) => e.current ? e.current.navigationMatrix.length : 0, ne = (e) => e.flat().find((t) => t.endsWith("cell")), be = (e) => e.flat().reverse().find((t) => t.endsWith("cell")), ge = (e, t) => e[t][0], Ne = (e, t) => Array.from(e[t]).reverse()[0], le = (e) => e ? `${e}${T}` : "", Ce = (e, t, r) => {
  var l;
  let n;
  if ((l = e.current) != null && l.prevNavigationIndexes) {
    const [o, s] = e.current.prevNavigationIndexes, c = t[o];
    c && c[s] === r ? n = e.current.prevNavigationIndexes : n = A(t, r);
  } else
    n = A(t, r);
  return n;
}, oe = (e) => {
  var t;
  return ((t = m(e)) == null ? void 0 : t.getAttribute("data-keyboardnavid")) || e.getAttribute("data-keyboardnavid");
}, se = (e) => e.closest(".k-grid-stack-cell"), y = (e) => D(e, { focusable: !0 }), ce = (e, t) => {
  var o;
  const r = e.closest(".k-table-td");
  if (!r)
    return null;
  const n = Array.from(r.querySelectorAll(".k-grid-stack-cell")), l = n.indexOf(e);
  return l === -1 ? null : t === "next" ? l < n.length - 1 ? n[l + 1] : n[0] : l > 0 ? n[l - 1] : (o = n.at(-1)) != null ? o : null;
}, ie = (e) => e.closest(".k-table-td, td.k-table-td[tabindex]"), ue = (e, t = 0) => {
  const r = y(e);
  r.length > 0 ? (r[t] || r[0]).focus() : e.focus();
}, ve = {
  generateNavigatableId: q,
  getNavigatableId: _,
  getNavigatableLevel: R,
  getNavigatableElement: L,
  getClosestNavigatableElement: m,
  getActiveNavDataElement: I,
  getClosestScope: K,
  getHeaderElement: j,
  getBodyElement: M,
  getTopPinnedElement: H,
  getBottomPinnedElement: X,
  getFocusableElements: D,
  getNavigatableElements: G,
  filterNavigatableElements: J,
  focusElement: p,
  getIdPrefix: Q,
  isNavigatable: E,
  findNextIdByRowIndex: Z,
  findNextIdByCellIndex: d,
  findId: A,
  getNextNavigationIndex: re,
  getFilterColumnId: le,
  focusFirstDataElement: z,
  getClosestCancelButton: P,
  getClosestEditButton: U,
  getRowAriaRowIndex: Y,
  getRemoveButtonByAriaRowIndex: V,
  getTableCellByKeyboardNavId: a,
  getParentCell: W,
  waitForElementToBeVisible: x,
  getNextEditableCell: te,
  getPrevEditableCell: ee,
  getClosestCellNavId: oe,
  getStackedCellWrapper: se,
  getStackedCellFocusableElements: y,
  getNextStackedCell: ce,
  getStackedCellContainer: ie,
  focusStackedCellElement: ue
};
export {
  J as filterNavigatableElements,
  A as findId,
  d as findNextIdByCellIndex,
  Z as findNextIdByRowIndex,
  p as focusElement,
  z as focusFirstDataElement,
  Ae as focusFirstEditor,
  ue as focusStackedCellElement,
  q as generateNavigatableId,
  I as getActiveNavDataElement,
  M as getBodyElement,
  X as getBottomPinnedElement,
  P as getClosestCancelButton,
  oe as getClosestCellNavId,
  U as getClosestEditButton,
  m as getClosestNavigatableElement,
  K as getClosestScope,
  Ce as getCurrentIdIndexes,
  le as getFilterColumnId,
  ne as getFirstDataCell,
  ge as getFirstRowDataCell,
  D as getFocusableElements,
  j as getHeaderElement,
  Q as getIdPrefix,
  be as getLastDataCell,
  Ne as getLastRowDataCell,
  L as getNavigatableElement,
  G as getNavigatableElements,
  _ as getNavigatableId,
  R as getNavigatableLevel,
  te as getNextEditableCell,
  re as getNextNavigationIndex,
  ce as getNextStackedCell,
  Ee as getNoRecordsElement,
  W as getParentCell,
  ee as getPrevEditableCell,
  V as getRemoveButtonByAriaRowIndex,
  Y as getRowAriaRowIndex,
  ie as getStackedCellContainer,
  y as getStackedCellFocusableElements,
  se as getStackedCellWrapper,
  a as getTableCellByKeyboardNavId,
  H as getTopPinnedElement,
  E as isNavigatable,
  ve as tableKeyboardNavigationTools
};
