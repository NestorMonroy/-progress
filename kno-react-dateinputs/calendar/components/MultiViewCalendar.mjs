/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as a from "react";
import n from "prop-types";
import { validatePackage as Ft, getLicenseMessage as Tt, usePropsContext as Nt, useId as Pt, classNames as Bt, WatermarkOverlay as Lt, createPropsContext as Kt, Keys as oe } from "@progress/kno-react-common";
import { getDate as O, cloneDate as m, firstDayOfMonth as Wt, lastDayOfMonth as Yt, isEqualDate as Pe, addDays as se } from "@progress/kno-date-math";
import { useInternationalization as _t, useLocalization as Ht } from "@progress/kno-react-intl";
import { Button as Be } from "@progress/kno-react-buttons";
import { chevronRightIcon as Le, chevronLeftIcon as Ke } from "@progress/kno-svg-icons";
import { Action as U } from "../models/NavigationAction.mjs";
import { CalendarViewEnum as X } from "../models/CalendarViewEnum.mjs";
import { EMPTY_SELECTIONRANGE as $t } from "../models/SelectionRange.mjs";
import { Header as zt } from "./Header.mjs";
import { MIN_DATE as jt, MAX_DATE as Gt, viewInRange as ie, dateInRange as q, getToday as J, isInRange as ue, nullable as I } from "../../utils.mjs";
import { prevView as We, messages as Ye, nextView as _e } from "../../messages/index.mjs";
import { BusViewService as Ut } from "../services/BusViewService.mjs";
import { NavigationService as Xt } from "../services/NavigationService.mjs";
import { HorizontalViewList as qt } from "./HorizontalViewList.mjs";
import { TodayCommand as Jt } from "./TodayCommand.mjs";
import { packageMetadata as He } from "../../package-metadata.mjs";
const S = (c, d = u.min, p = u.max) => c instanceof Date && !Array.isArray(c) && ue(O(c), d, p) ? O(c) : null, le = (c, d = u.min, p = u.max) => Array.isArray(c) ? c.filter((k) => ue(k, d, p)).map((k) => O(k)) : null, Q = (c) => typeof c == "object" && !(c instanceof Date) && c !== null && !Array.isArray(c) ? c : $t, $e = (c, d, p) => c || d && d[0] || p && p.start, Qt = (c, d) => c.start === null && d === null ? "start" : c.end === null ? "end" : "start", u = {
  disabled: !1,
  min: jt,
  max: Gt,
  defaultActiveView: "month",
  defaultValue: null,
  topView: "century",
  weekDaysFormat: "short",
  tabIndex: 0,
  bottomView: "month",
  views: 2,
  allowReverse: !1,
  showOtherMonthDays: !1
}, Zt = Kt(), Z = a.forwardRef(
  (c, d) => {
    var Ne;
    const p = a.useMemo(
      () => !Ft(He, { component: "MultiViewCalendar" }),
      []
    ), k = a.useMemo(() => Tt(He), []), P = Nt(Zt, c), de = Pt(P.id), {
      disabled: B = u.disabled,
      min: ze = u.min,
      max: je = u.max,
      defaultActiveView: fe = u.defaultActiveView,
      defaultValue: Ge = u.defaultValue,
      topView: Ue = u.topView,
      bottomView: Xe = u.bottomView,
      weekDaysFormat: qe = u.weekDaysFormat,
      tabIndex: Je = u.tabIndex,
      views: M = u.views,
      allowReverse: me = u.allowReverse,
      showOtherMonthDays: Qe = u.showOtherMonthDays,
      _ref: ve,
      className: Ze,
      weekNumber: et,
      mobileMode: ge,
      focusedDate: tt,
      value: L,
      onChange: K,
      onFocus: we,
      onBlur: De,
      cell: nt,
      weekCell: at,
      headerTitle: pe,
      mode: F,
      activeRangeEnd: W,
      ariaLabelledBy: rt,
      ariaDescribedBy: ct,
      dir: he
    } = P, i = O(ze), l = O(je), Y = X[Xe], _ = X[Ue], H = he === "rtl", ot = de + "-cell-uid", st = de + "-wrapper-id", it = (e) => ({ start: e, end: null }), lt = (e, t) => ({
      start: e.start,
      end: e.end === null && e.start !== null && $.current ? t : e.end
    }), ut = (e, t) => {
      const { end: r, start: o } = t, g = W !== void 0 ? W : z.current, s = t.start !== null && e.getTime() <= t.start.getTime(), y = Q(f), D = S(f, i, l);
      return !me && s ? { start: e, end: y.start } : g !== "end" ? { start: e, end: r } : { start: o || D, end: e };
    }, Ve = (e) => {
      if (!b.current)
        return !1;
      const t = m(C), r = b.current.move(t, e);
      return i <= r && r <= l || b.current.isInSameView(r, i) || b.current.isInSameView(r, l);
    }, ye = (e, t) => !!t && Wt(t) <= e && e <= Yt(t), ee = (e, t) => {
      R.current = !1;
      const r = te(e, t);
      V({ navigateDate: r, focusedDate: r });
    }, te = (e, t) => dt(b.current.move(t, e)), dt = (e) => q(e, i, l), ft = (e) => {
      F === "range" && (R.current = !1, V({
        focusedDate: e
      }));
    }, mt = (e) => {
      e.preventDefault();
    }, vt = (e) => {
      A.current && A.current.focus({ preventScroll: !0 });
    }, gt = (e) => {
      $.current = !0, E.current && (E.current.focusActiveDate(), we && we(e));
    }, wt = (e) => {
      $.current = !1, E.current && (E.current.blurActiveDate(), De && De(e));
    }, Dt = (e) => {
      Ie && ne(e);
    }, Re = () => {
      const e = U.PrevView, t = m(C);
      if (w.activeView > 0 && t.getFullYear() > h.current[0].getFullYear())
        ee(e, te(e, t));
      else {
        const r = ye(t, h.current[1]) ? te(e, t) : t;
        ee(e, r);
      }
    }, be = () => {
      ee(U.NextView, m(C));
    }, pt = (e) => {
      const { keyCode: r, ctrlKey: o, metaKey: g } = e;
      if (r === 84) {
        const s = J();
        R.current = !1, V({ focusedDate: s, navigateDate: s });
      }
      if ((o || g) && (r === oe.left && Re(), r === oe.right && be()), r === oe.enter) {
        const s = {
          syntheticEvent: e,
          nativeEvent: e.nativeEvent,
          value: m(C),
          target: T.current
        };
        ne(s);
      } else {
        const s = q(
          Ce.current.move(
            C,
            Ce.current.action(e),
            w.activeView,
            b.current,
            e
          ),
          i,
          l
        );
        if (Pe(C, s))
          return;
        h.current && b.current && !b.current.isInArray(s, h.current) && V({ navigateDate: s }), R.current = !1, V({ focusedDate: s });
      }
      e.preventDefault();
    }, ht = ({ view: e }) => {
      R.current = !1, ke((t) => ({ ...t, activeView: e, navigateDate: t.focusedDate }));
    }, Vt = (e, t, r) => {
      if (F === "single")
        return;
      const o = 0, g = 6, s = t === o ? e : se(e, -t), y = t === g ? e : se(e, g - t);
      let D = null;
      if (F === "multiple") {
        D = [];
        for (let v = o; v <= g; v++)
          D.push(se(s, v));
        V({ value: D, focusedDate: e });
      }
      if (F === "range" && (D = { start: s, end: y }, V({ value: D, focusedDate: e })), K) {
        const v = {
          syntheticEvent: r,
          nativeEvent: r.nativeEvent,
          value: D,
          target: T.current
        };
        K(v);
      }
    }, ne = (e) => {
      const t = m(e.value), r = x.current.canMoveDown(w.activeView);
      if (B)
        return;
      if (r)
        if (e.isTodayClick)
          x.current.moveToBottom(w.activeView);
        else {
          x.current.moveDown(w.activeView, e.syntheticEvent), V({ focusedDate: t, navigateDate: t });
          return;
        }
      R.current = !0;
      let o;
      const g = le(f, i, l), s = S(f, i, l), y = Q(f), D = W !== void 0 ? W : z.current;
      switch (F) {
        case "single":
          o = m(e.value);
          break;
        case "multiple":
          if (Array.isArray(g)) {
            const v = g.slice();
            let ce = -1;
            v.forEach((It, St) => {
              Pe(It, e.value) && (ce = St);
            }), ce !== -1 ? v.splice(ce, 1) : v.push(m(e.value)), o = v.slice();
          } else s ? o = [m(s), m(e.value)] : o = [m(e.value)];
          break;
        case "range": {
          o = y.start !== null && y.end !== null && D === "start" ? it(e.value) : ut(e.value, y), z.current = D !== "end" ? "end" : "start";
          break;
        }
        default:
          o = m(e.value);
          break;
      }
      if (N.current = o, e.isTodayClick && V({ navigateDate: t }), V({ value: o, focusedDate: t }), N.current = o, K) {
        const v = {
          syntheticEvent: e.syntheticEvent,
          nativeEvent: e.nativeEvent,
          value: o,
          target: T.current
        };
        K(v);
      }
      N.current = void 0;
    }, T = a.useRef(null);
    a.useImperativeHandle(
      T,
      () => ({
        get element() {
          return A.current;
        },
        get focusedDate() {
          return m(C);
        },
        get value() {
          return f;
        },
        get props() {
          return P;
        },
        focus: () => {
          var e;
          return (e = A.current) == null ? void 0 : e.focus();
        }
      })
    ), a.useImperativeHandle(
      d,
      () => T.current
    );
    const A = a.useRef(null), E = a.useRef(null), x = a.useRef(new Ut(ht)), Ce = a.useRef(new Xt(x.current)), N = a.useRef(void 0), $ = a.useRef(!1), R = a.useRef(!1), z = a.useRef("start"), ae = a.useRef(
      ie(X[fe], Y, _)
    ), re = a.useRef(M), h = a.useRef([]), b = a.useRef(null), [w, ke] = a.useState(() => {
      const e = L !== void 0 ? L : Ge, t = S(e, i, l), r = le(e, i, l), o = Q(e), g = $e(t, r, o), s = ie(X[fe], Y, _), y = q(tt || g || J(), i, l);
      return z.current = Qt(o, t), ae.current = s, re.current = M, {
        value: e,
        activeView: s,
        focusedDate: y,
        navigateDate: y
      };
    }), V = (e) => {
      ke((t) => ({ ...t, ...e }));
    };
    a.useEffect(() => {
      R.current = !0;
    }, []), a.useEffect(() => {
      E.current && ($.current ? E.current.focusActiveDate : E.current.blurActiveDate)();
      const e = S(f, i, l), t = S(f, i, l);
      R.current = !!(t && e && t.getTime() && e.getTime()), ae.current = w.activeView, re.current = M;
    }), a.useEffect(() => {
      ve && ve({ element: A.current });
    });
    const yt = _t(), Ee = Ht();
    x.current.configure(Y, _);
    const j = ie(w.activeView, Y, _), G = x.current.service(j, yt);
    b.current = G;
    let f;
    N.current !== void 0 ? f = N.current : L !== void 0 ? f = L : f = w.value;
    const xe = S(f, i, l), Me = le(f, i, l), Oe = Q(f), Ae = $e(xe, Me, Oe), C = q(
      R.current && Ae !== null ? Ae : w.focusedDate,
      i,
      l
    ), Ie = ue(J(), O(i), O(l)), Rt = Bt(
      "k-calendar k-calendar-range",
      {
        "k-disabled": B
      },
      Ze
    ), bt = lt(Oe, C), Ct = Ee.toLanguageString(We, Ye[We]), kt = Ee.toLanguageString(_e, Ye[_e]), Se = !Ve(U.PrevView), Fe = !Ve(U.NextView), Et = { "aria-disabled": Se }, xt = { "aria-disabled": Fe }, Mt = ae.current !== j, Ot = h.current.length > 0 && ye(w.navigateDate, h.current[0]), At = re.current !== M;
    (!Ot || Mt || At) && (h.current = G.datesList(w.navigateDate, M));
    const Te = m((Ne = h.current) != null && Ne[0] ? h.current[0] : J());
    return /* @__PURE__ */ a.createElement(
      "div",
      {
        ref: A,
        className: Rt,
        id: P.id || st,
        "aria-labelledby": rt,
        "aria-describedby": ct,
        tabIndex: B ? void 0 : Je,
        onFocus: gt,
        onBlur: wt,
        onMouseDown: mt,
        onClick: vt,
        onKeyDown: pt,
        "aria-disabled": B,
        dir: he
      },
      /* @__PURE__ */ a.createElement(
        zt,
        {
          key: `.kno.calendar.header.${Te.getTime()}`,
          activeView: j,
          currentDate: Te,
          min: i,
          max: l,
          rangeLength: M,
          bus: x.current,
          service: G,
          headerTitle: pe,
          verticalView: ge,
          commands: /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
            Be,
            {
              type: "button",
              className: "k-calendar-nav-prev",
              icon: H ? "chevron-right" : "chevron-left",
              svgIcon: H ? Le : Ke,
              fillMode: "flat",
              title: Ct,
              disabled: Se,
              onClick: Re,
              ...Et
            }
          ), /* @__PURE__ */ a.createElement(Jt, { min: i, max: l, onClick: Dt, disabled: !Ie }), /* @__PURE__ */ a.createElement(
            Be,
            {
              type: "button",
              className: "k-calendar-nav-next",
              icon: H ? "chevron-left" : "chevron-right",
              svgIcon: H ? Ke : Le,
              fillMode: "flat",
              title: kt,
              disabled: Fe,
              onClick: be,
              ...xt
            }
          ))
        }
      ),
      /* @__PURE__ */ a.createElement(
        qt,
        {
          ref: E,
          dates: h.current,
          activeView: j,
          focusedDate: m(C),
          weekDaysFormat: qe,
          min: i,
          max: l,
          bus: x.current,
          service: G,
          selectionRange: bt,
          value: Me || xe,
          cellUID: ot,
          views: M,
          onChange: ne,
          onWeekSelect: Vt,
          showWeekNumbers: et,
          onCellEnter: ft,
          cell: nt,
          weekCell: at,
          headerTitle: pe,
          verticalView: ge,
          showOtherMonthDays: Qe,
          allowReverse: me
        }
      ),
      p && /* @__PURE__ */ a.createElement(Lt, { message: k })
    );
  }
);
Z.propTypes = {
  activeRangeEnd: n.oneOf(["start", "end"]),
  allowReverse: n.bool,
  bottomView: n.oneOf(["month", "year", "decade", "century"]),
  className: n.string,
  defaultActiveView: n.oneOf(["month", "year", "decade", "century"]),
  defaultValue: n.oneOfType([
    I(n.instanceOf(Date)),
    n.arrayOf(n.instanceOf(Date)),
    n.shape({
      start: I(n.instanceOf(Date)),
      end: I(n.instanceOf(Date))
    })
  ]),
  disabled: n.bool,
  focusedDate: n.instanceOf(Date),
  id: n.string,
  weekDaysFormat: n.oneOf(["narrow", "short", "abbreviated"]),
  ariaLabelledBy: n.string,
  ariaDescribedBy: n.string,
  max: n.instanceOf(Date),
  min: n.instanceOf(Date),
  mode: n.oneOf(["single", "multiple", "range"]),
  onBlur: n.func,
  onChange: n.func,
  onFocus: n.func,
  tabIndex: n.number,
  topView: n.oneOf(["month", "year", "decade", "century"]),
  value: n.oneOfType([
    I(n.instanceOf(Date)),
    n.arrayOf(n.instanceOf(Date)),
    n.shape({
      start: I(n.instanceOf(Date).isRequired),
      end: I(n.instanceOf(Date).isRequired)
    })
  ]),
  views: (c, d, p) => {
    const k = c[d];
    return k !== void 0 && k < 1 ? new Error(
      `Invalid prop '${d}' supplied to'${p}'. The '${d}' property cannot be less than 1'`
    ) : null;
  },
  weekNumber: n.bool,
  showOtherMonthDays: n.bool,
  dir: n.string
};
Z.displayName = "KendoReactMultiViewCalendar";
const pn = Z, hn = Z;
export {
  hn as MultiViewCalendar,
  Zt as MultiViewCalendarPropsContext,
  pn as MultiViewCalendarWithoutContext,
  u as multiViewCalendarDefaultProps
};
