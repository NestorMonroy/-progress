/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as a from "react";
import { weekInYear as re, cloneDate as h } from "@progress/kno-date-math";
import { useInternationalization as se } from "@progress/kno-react-intl";
import { CalendarCell as ce } from "./CalendarCell.mjs";
import { CalendarWeekCell as ie } from "./CalendarWeekCell.mjs";
import { CalendarViewEnum as M } from "../models/CalendarViewEnum.mjs";
import { getToday as S, setTime as me } from "../../utils.mjs";
import { WeekNamesService as ue } from "../services/WeekNamesService.mjs";
import { classNames as r, uCalendar as s } from "@progress/kno-react-common";
const R = (k, f) => {
  const m = f;
  return /* @__PURE__ */ a.createElement("td", { key: k, role: "gridcell", className: r(s.td({ c: m, isEmpty: !0 })) }, " ");
}, p = {
  direction: "vertical",
  selectedDate: S(),
  showWeekNumbers: !1
}, Ee = (k) => {
  const {
    activeRangeEnd: f,
    activeView: m,
    bus: T,
    cellUID: z,
    direction: L = p.direction,
    focusedDate: q,
    weekCell: C,
    max: x,
    weekDaysFormat: O,
    min: P,
    cell: D,
    onCellEnter: E,
    onCellLeave: y,
    onChange: v,
    onWeekSelect: N,
    selectedDate: $ = p.selectedDate,
    selectionRange: A,
    service: w,
    showWeekNumbers: B = p.showWeekNumbers,
    showOtherMonthDays: F,
    viewDate: g,
    allowReverse: H,
    unstyled: d
  } = k, W = L === "horizontal", K = m === M.month, u = !!(B && m === M.month), U = (e, t) => {
    if (v && t) {
      const l = {
        value: h(e),
        target: null,
        nativeEvent: t == null ? void 0 : t.nativeEvent,
        syntheticEvent: t
      };
      v(l);
    }
  }, Y = (e, t, l) => {
    const o = t.findIndex((n) => (n == null ? void 0 : n.value) === e);
    N && l && N(e, o, l);
  }, j = (e) => {
    E && E(h(e));
  }, G = (e) => {
    y && y(h(e));
  }, b = se(), J = new ue(b), c = d && d.uCalendar, Q = (e) => u ? re(e, b.firstDay()) : null, X = (e) => {
    if (!u)
      return null;
    let t = 0, l = e[t];
    for (; !l && t < e.length; )
      l = e[++t];
    return l;
  }, V = (e) => {
    const t = X(e);
    return t ? t.value : null;
  }, Z = (e, t) => {
    if (!V(e))
      return R(`week-cell-${t}`);
    const o = V(e), n = Q(o), i = `kno-react-calendar-week-cell-${n}`, I = {
      value: n,
      firstDate: o,
      weekDays: e,
      unstyled: d,
      onClick: Y
    };
    return C ? /* @__PURE__ */ a.createElement(C, { ...I, key: i }, n) : /* @__PURE__ */ a.createElement(ie, { ...I, key: i }, n);
  }, _ = (e) => e.map((t, l) => {
    if (!t)
      return R(l);
    const o = { "aria-selected": t.isSelected }, n = `kno-react-calendar-cell-${t.value.getTime()}`, i = {
      ...o,
      ...t,
      isDisabled: !t.isInRange,
      view: m,
      showOtherMonthDays: F,
      allowReverse: H,
      activeRangeEnd: f,
      unstyled: d,
      onClick: U,
      onMouseEnter: j,
      onMouseLeave: G
    };
    return D ? /* @__PURE__ */ a.createElement(D, { ...i, key: n }, t.formattedValue) : /* @__PURE__ */ a.createElement(ce, { ...i, key: n }, t.formattedValue);
  }), ee = J.getWeekNames(u, O), te = w.rowLength(u), ne = w.title(g), ae = S(), le = me(g, ae), oe = w.data({
    cellUID: z,
    min: P,
    max: x,
    focusedDate: q,
    isActiveView: !T.canMoveDown(m),
    selectedDate: $,
    selectionRange: A,
    viewDate: le
  });
  return /* @__PURE__ */ a.createElement(a.Fragment, null, K && W && /* @__PURE__ */ a.createElement("thead", { className: r(s.thead({ c })) }, /* @__PURE__ */ a.createElement("tr", { role: "row", className: r(s.tr({ c })) }, ee.map((e) => /* @__PURE__ */ a.createElement("th", { key: e, className: r(s.th({ c })) }, e)))), /* @__PURE__ */ a.createElement("tbody", { className: r(s.tbody({ c })) }, !W && /* @__PURE__ */ a.createElement("tr", { className: r(s.tr({ c })) }, /* @__PURE__ */ a.createElement("th", { scope: "col", colSpan: te, className: r(s.caption({ c })) }, ne)), oe.map((e, t) => {
    var o, n;
    const l = (n = (o = e.find((i) => i != null)) == null ? void 0 : o.value.getTime()) != null ? n : t;
    return /* @__PURE__ */ a.createElement("tr", { role: "row", className: r(s.tr({ c })), key: l }, u && Z(e, t), _(e));
  })));
};
export {
  Ee as View,
  p as viewDefaultProps
};
