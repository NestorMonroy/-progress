/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as t from "react";
import { classNames as p, uCalendar as v } from "@progress/kno-react-common";
import { getDate as K, isEqualDate as Se, cloneDate as Ce } from "@progress/kno-date-math";
import { useInternationalization as be } from "@progress/kno-react-intl";
import { Virtualization as Ne } from "../../virtualization/Virtualization.mjs";
import { View as Ve } from "./View.mjs";
import { Header as Te } from "./Header.mjs";
import { WeekNamesService as xe } from "../services/WeekNamesService.mjs";
import { isInRange as Ie, getToday as He, dateInRange as j } from "../../utils.mjs";
import { CalendarViewEnum as u } from "../models/CalendarViewEnum.mjs";
import { TodayCommand as Le } from "./TodayCommand.mjs";
const Oe = 5, E = {
  take: Oe,
  showWeekNumbers: !1,
  weekDaysFormat: "short",
  smoothScroll: !0
}, G = t.forwardRef((J, Q) => {
  const {
    take: H = E.take,
    showWeekNumbers: X = E.showWeekNumbers,
    weekDaysFormat: Z = E.weekDaysFormat,
    smoothScroll: ee = E.smoothScroll,
    activeView: n,
    bus: L,
    cellUID: O,
    dom: a,
    focusedDate: m,
    max: c,
    min: r,
    cell: te,
    onScroll: ne,
    onChange: W,
    service: o,
    value: re,
    weekCell: oe,
    showOtherMonthDays: se,
    headerTitle: ae,
    header: ce,
    shouldScroll: z,
    tabIndex: f,
    unstyled: d
  } = J, S = !!(X && n === u.month), le = Ie(He(), K(r), K(c)), A = () => {
    if (!i.current)
      return;
    const e = i.current.querySelector("td.k-focus"), s = i.current.querySelector(".k-state-pending-focus");
    e && e[0] && e[0].classList.remove("k-focus"), s && s.classList.add("k-focus"), N.current = !0;
  }, ie = () => {
    if (!i.current)
      return;
    const e = i.current.querySelector("td.k-focus");
    e && e.classList.remove("k-focus"), N.current = !1;
  }, F = (e, s = !1) => {
    if (W) {
      const k = {
        syntheticEvent: e.syntheticEvent,
        nativeEvent: e.nativeEvent,
        value: Ce(e.value),
        target: C.current,
        isTodayClick: s
      };
      W(k);
    }
  }, ue = (e) => {
    V.current = !0, F(e, !0);
  }, me = ({ index: e, scrollAction: s, pageAction: k }) => {
    const D = k ? k.skip : void 0;
    if (de((w) => {
      const $ = D !== void 0 ? D : w.skip;
      return w.index !== e || w.skip !== $ ? { index: e, skip: $ } : w;
    }), g.current && s) {
      const w = `translateY(${s.offset}px)`;
      g.current.style.transform = w;
    }
  }, fe = (e) => {
    if (l.current = e, l.current && g.current) {
      const s = -1 * a.headerHeight;
      g.current.style.transform = `translateY(${s}px)`;
      const k = j(m, r, c), D = o.skip(k, r);
      l.current.scrollToIndex(D);
    }
  }, l = t.useRef(null), C = t.useRef(null);
  t.useImperativeHandle(
    C,
    () => ({
      get element() {
        return i.current;
      },
      get virtualization() {
        return l.current;
      },
      focusActiveDate: A,
      blurActiveDate: ie
    })
  ), t.useImperativeHandle(Q, () => C.current);
  const i = t.useRef(null), g = t.useRef(null), b = t.useRef(n), q = t.useRef(m), N = t.useRef(!1), M = t.useRef(!0), V = t.useRef(!1), y = t.useRef(void 0), [B, de] = t.useState(() => {
    const e = o.skip(m, r);
    return { skip: e, index: e };
  });
  t.useEffect(() => {
    if (V.current = !1, y.current !== void 0 && l.current) {
      const e = !!(ee && M.current);
      l.current[e ? "animateToIndex" : "scrollToIndex"](y.current);
    }
    N.current && A(), b.current = n, y.current = void 0;
  });
  const he = be(), ke = new xe(he).getWeekNames(S, Z), h = d && d.uCalendar;
  let Y = 0, T = 0, x = 1;
  a && (Y = (n === u.month ? a.scrollableContentHeight : a.scrollableYearContentHeight) - a.viewHeight(n), T = -1 * a.headerHeight, x = a.viewHeight(n) || 1);
  const we = b.current !== n, R = j(m, r, c), I = we ? o.skip(R, r) : B.skip, P = o.total(r, c), pe = Math.min(P - I, H), ve = o.addToDate(r, I), ge = o.addToDate(r, B.index), U = Array.from({ length: o.rowLength(S) }, (e, s) => s), _ = n !== b.current;
  M.current = !_, (_ || !Se(q.current, R) || V.current || !z || z()) && (y.current = o.skip(R, r)), q.current = R;
  const ye = p(
    v.view({
      c: h,
      month: n === u.month,
      year: n === u.year,
      decade: n === u.decade,
      century: n === u.century
    })
  ), Re = /* @__PURE__ */ t.createElement(
    "table",
    {
      className: p(v.table({ c: h })),
      ref: g,
      role: "grid",
      tabIndex: f != null ? f : 0,
      "aria-activedescendant": O + m.getTime()
    },
    /* @__PURE__ */ t.createElement("colgroup", null, U.map((e) => /* @__PURE__ */ t.createElement("col", { key: e }))),
    o.datesList(ve, pe).map((e) => /* @__PURE__ */ t.createElement(
      Ve,
      {
        key: e.getTime(),
        activeView: n,
        viewDate: e,
        min: r,
        max: c,
        cellUID: O,
        focusedDate: m,
        cell: te,
        selectedDate: re,
        showWeekNumbers: S,
        onChange: F,
        bus: L,
        service: o,
        weekCell: oe,
        showOtherMonthDays: se,
        unstyled: d
      }
    ))
  ), De = n === u.month ? /* @__PURE__ */ t.createElement(
    "table",
    {
      key: "calendar-view-list-weekdays",
      className: p(v.table({ c: h, weekdays: !0 })),
      role: "grid",
      tabIndex: f
    },
    /* @__PURE__ */ t.createElement("colgroup", null, U.map((e) => /* @__PURE__ */ t.createElement("col", { key: e }))),
    /* @__PURE__ */ t.createElement("thead", { className: p(v.thead({ c: h })) }, /* @__PURE__ */ t.createElement("tr", { className: p(v.tr({ c: h })) }, ke.map((e) => /* @__PURE__ */ t.createElement("th", { key: e, className: p(v.th({ c: h })) }, e))))
  ) : null, Ee = /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement(
    Te,
    {
      key: "calendar-view-list-header",
      currentDate: ge,
      min: r,
      max: c,
      activeView: n,
      bus: L,
      service: o,
      headerTitle: ae,
      header: ce,
      unstyled: d,
      commands: /* @__PURE__ */ t.createElement(
        Le,
        {
          min: r,
          max: c,
          onClick: ue,
          disabled: !le,
          tabIndex: f,
          unstyled: d
        }
      )
    }
  ), De, /* @__PURE__ */ t.createElement(
    Ne,
    {
      key: "calendar-view-list-content",
      skip: I,
      take: H,
      total: P,
      itemHeight: x,
      topOffset: T,
      bottomOffset: Y,
      scrollOffsetSize: T,
      maxScrollDifference: x,
      onScroll: ne,
      onScrollAction: me,
      onMount: (e) => !l.current && fe(e),
      tabIndex: f,
      unstyled: d
    },
    Re
  ));
  return /* @__PURE__ */ t.createElement("div", { ref: i, className: ye }, a.didCalculate ? Ee : null);
});
G.displayName = "KendoReactViewList";
const $e = G;
export {
  $e as ViewList,
  E as viewListDefaultProps
};
