/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as t from "react";
import { View as O } from "./View.mjs";
import { CalendarViewEnum as o } from "../models/CalendarViewEnum.mjs";
import { classNames as U } from "@progress/kno-react-common";
import { cloneDate as P } from "@progress/kno-date-math";
import { MIN_DATE as j, MAX_DATE as B } from "../../utils.mjs";
const w = 2, a = {
  showWeekNumbers: !1,
  views: w,
  take: w,
  allowReverse: !0,
  weekDaysFormat: "short",
  min: j,
  max: B
}, h = t.forwardRef(
  (y, R) => {
    const {
      showWeekNumbers: p = a.showWeekNumbers,
      allowReverse: u = a.allowReverse,
      weekDaysFormat: D = a.weekDaysFormat,
      min: C = a.min,
      max: E = a.max,
      activeView: r,
      bus: N,
      cellUID: b,
      focusedDate: A,
      onChange: m,
      onWeekSelect: f,
      selectionRange: d,
      service: L,
      value: S,
      onCellEnter: T,
      cell: V,
      weekCell: H,
      showOtherMonthDays: W,
      dates: g,
      verticalView: k
    } = y, x = !!(p && r === o.month), v = () => {
      if (!n.current)
        return;
      const e = n.current.querySelector("td.k-focus"), s = n.current.querySelector(".k-state-pending-focus");
      e && e[0] && e[0].classList.remove("k-focus"), s && s.classList.add("k-focus"), i.current = !0;
    }, z = () => {
      if (!n.current)
        return;
      const e = n.current.querySelector("td.k-focus");
      e && e.classList.remove("k-focus"), i.current = !1;
    }, F = (e) => {
      if (e.start === null || e.end === null)
        return e;
      const s = e.end < e.start;
      return {
        start: s ? e.end : e.start,
        end: s ? e.start : e.end
      };
    }, _ = (e, s, c) => {
      f && c && f(e, s, c);
    }, I = (e, s = !1) => {
      if (m) {
        const c = {
          syntheticEvent: e.syntheticEvent,
          nativeEvent: e.nativeEvent,
          value: P(e.value),
          target: l.current,
          isTodayClick: s
        };
        m(c);
      }
    }, l = t.useRef(null);
    t.useImperativeHandle(
      l,
      () => ({
        element: n.current,
        focusActiveDate: v,
        blurActiveDate: z
      })
    ), t.useImperativeHandle(
      R,
      () => l.current
    );
    const n = t.useRef(null), i = t.useRef(!1);
    t.useEffect(() => {
      i.current && v();
    });
    const M = u ? F(d) : d, q = U("k-calendar-view k-align-items-start k-justify-content-center", {
      "k-vstack": k,
      "k-hstack": !k,
      "k-calendar-monthview": r === o.month,
      "k-calendar-yearview": r === o.year,
      "k-calendar-decadeview": r === o.decade,
      "k-calendar-centuryview": r === o.century
    });
    return /* @__PURE__ */ t.createElement("div", { ref: n, className: q }, g.map((e) => /* @__PURE__ */ t.createElement("table", { className: "k-calendar-table", key: e.getTime(), role: "grid" }, /* @__PURE__ */ t.createElement(
      O,
      {
        bus: N,
        weekDaysFormat: D,
        service: L,
        key: e.getTime(),
        direction: "horizontal",
        activeView: r,
        cellUID: b,
        viewDate: e,
        min: C,
        max: E,
        focusedDate: A,
        selectionRange: M,
        selectedDate: S,
        showWeekNumbers: x,
        onChange: I,
        onWeekSelect: _,
        onCellEnter: T,
        cell: V,
        weekCell: H,
        showOtherMonthDays: W,
        allowReverse: u
      }
    ))));
  }
);
h.displayName = "KendoReactHorizontalViewList";
const K = h;
K.defaultProps = a;
export {
  K as HorizontalViewList,
  a as horizontalViewListDefaultProps
};
