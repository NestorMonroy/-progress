/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as l from "react";
import { classNames as S, uCalendar as C } from "@progress/kno-react-common";
const A = (a, s) => {
  const n = Object.getOwnPropertyNames(a), r = Object.getOwnPropertyNames(s);
  if (n.length !== r.length)
    return !1;
  for (let t = 0; t < n.length; t++) {
    const o = n[t];
    if (a[o] !== s[o])
      return !1;
  }
  return !0;
}, I = l.memo(
  (a) => {
    const {
      className: s,
      formattedValue: n,
      isWeekend: r,
      isFocused: t,
      isInRange: o,
      isSelected: u,
      isRangeStart: i,
      isRangeMid: N,
      isRangeEnd: c,
      isRangeSplitStart: y,
      isRangeSplitEnd: k,
      isToday: w,
      isDisabled: O,
      view: D,
      value: d,
      isOtherMonth: e,
      showOtherMonthDays: m,
      allowReverse: g,
      unstyled: p,
      activeRangeEnd: v,
      children: P,
      onClick: E,
      onMouseEnter: f,
      onMouseLeave: h,
      ...b
    } = a, x = (q) => {
      E && E(d, q);
    }, L = () => {
      f && f(d);
    }, T = () => {
      h && h(d);
    }, V = v === "end" && c, j = v === "start" && i, R = p && p.uCalendar, M = S(
      C.td({
        c: R,
        rangeStart: !e && !g && i,
        rangeEnd: !e && !g && c,
        rangeMid: !e && N,
        rangeSplitEnd: !e && k,
        rangeSplitStart: !e && y,
        active: j || V,
        focused: t,
        selected: !e && (u || i || c),
        today: !e && w,
        weekend: r,
        disabled: O,
        isOtherMonth: e,
        isEmpty: !m && e
      }),
      s
    );
    return !m && e ? /* @__PURE__ */ l.createElement("td", { role: "gridcell", className: M }) : /* @__PURE__ */ l.createElement(
      "td",
      {
        ...b,
        className: M,
        onClick: x,
        onMouseEnter: L,
        onMouseLeave: T
      },
      /* @__PURE__ */ l.createElement("span", { className: S(C.link({ c: R })) }, P)
    );
  },
  (a, s) => {
    const { value: n, ...r } = a, { value: t, ...o } = s;
    return (!(n && t) || n.getTime() === t.getTime()) && A(r, o);
  }
);
export {
  I as CalendarCell
};
