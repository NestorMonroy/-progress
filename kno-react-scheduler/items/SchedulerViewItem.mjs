/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as i from "react";
import { SchedulerItem as oe } from "./SchedulerItem.mjs";
import { first as se, calculateOrder as ce, intersects as z } from "../utils/index.mjs";
import { getRect as q, setRect as ae } from "../views/common/utils.mjs";
import { BORDER_WIDTH as S } from "../constants/index.mjs";
import { useInternationalization as de } from "@progress/kno-react-intl";
import { SchedulerItemContent as B } from "./SchedulerItemContent.mjs";
import { useDir as ue, IconWrap as x } from "@progress/kno-react-common";
import { chevronRightIcon as me, chevronLeftIcon as fe, arrowRotateCwIcon as he, arrowsNoRepeatIcon as ge } from "@progress/kno-svg-icons";
import { useRowSync as we } from "../hooks/useRowSync.mjs";
import { useEditable as ve } from "../hooks/useEditable.mjs";
import { useSchedulerViewItemsContext as Se, useSchedulerViewSlotsContext as Ie } from "../context/SchedulerViewContext.mjs";
import { useSchedulerElementContext as ye } from "../context/SchedulerContext.mjs";
const G = 1, W = 25, Re = i.forwardRef(
  (e, $) => {
    const { item: K, _ref: U, itemRef: j, ...J } = e, b = i.useRef(void 0), u = i.useRef(null), O = i.useRef(null), T = i.useRef(null), Q = ve(e.editable);
    i.useImperativeHandle(O, () => ({ props: e, element: u.current && u.current.element })), i.useImperativeHandle($, () => O.current), i.useImperativeHandle(U, () => u.current), i.useImperativeHandle(j, () => u.current);
    const X = K || Ee.item, _ = de(), [Z] = Se(), [p] = Ie(), R = ye(), [ee, D] = i.useState(!0), [te, re] = i.useState(!1), f = i.useRef(e.order), F = i.useRef(0), M = ue(R), P = i.useMemo(
      () => {
        var t, r;
        return e.isAllDay ? (t = e.title) != null ? t : "" : `(${_.format("{0:t} - {1:t}", e.zonedStart, e.zonedEnd)}): ${(r = e.title) != null ? r : ""}`;
      },
      [_, e.isAllDay, e.title, e.zonedEnd, e.zonedStart]
    ), k = (t, r) => {
      let d = 1;
      return t.forEach((l) => {
        const a = r.filter((m) => H(l.current.props, m.props));
        a.length > d && (d = a.length);
      }), d;
    }, ne = (t, r) => t.map((l) => r.filter((a) => H(l.current.props, a.props))), ie = (t, r) => {
      var E;
      const d = r.filter((n) => n.props.order !== null && n.props.order !== void 0).map((n) => {
        let o = n.props.start, s = n.props.end;
        if (n.props.isAllDay) {
          o = new Date(o.getFullYear(), o.getMonth(), o.getDate());
          const h = new Date(s.getFullYear(), s.getMonth(), s.getDate());
          s = h.getTime() <= o.getTime() ? new Date(o.getFullYear(), o.getMonth(), o.getDate() + 1) : h;
        }
        return { order: n.props.order, start: o, end: s };
      }), l = Array.from(new Set(d.map((n) => n.order))).sort((n, o) => n - o), a = /* @__PURE__ */ new Map();
      for (const n of d)
        a.has(n.order) || a.set(n.order, []), a.get(n.order).push({ start: n.start, end: n.end });
      const m = [], v = /* @__PURE__ */ new Map();
      for (const n of l) {
        const o = a.get(n);
        let s = -1;
        for (let h = 0; h < m.length; h++)
          if (o.every(
            (I) => m[h].every(
              (y) => !z(y.start, y.end, I.start, I.end, !0)
            )
          )) {
            s = h;
            break;
          }
        s === -1 && (s = m.length, m.push([])), m[s].push(...o), v.set(n, s);
      }
      return (E = v.get(t)) != null ? E : t;
    }, H = (t, r) => z(t.start, t.end, r.start, r.end) && t.group.index === r.group.index && t.range.index === r.range.index && // When slotDuration equals a full day, both daySlots and timeSlots have isAllDay=true,
    // so we need to also check range.isAllDay to distinguish between them.
    (t.range.isAllDay === void 0 || r.range.isAllDay === void 0 || t.range.isAllDay === r.range.isAllDay) && (e.ignoreIsAllDay || t.isAllDay === r.isAllDay), A = () => {
      var I, y, N, L;
      const t = (p || []).filter((c) => c.current && H(c.current.props, e)), r = u.current && u.current.element, d = se(t);
      if (t.length === 0) {
        D(!1);
        return;
      }
      if (!d.current || !r)
        return;
      const l = q(d.current.element), a = [], m = [], v = [];
      (Z || []).forEach((c) => {
        c.current && (c.current.props.dragHint ? m.push(c.current) : c.current.props.resizeHint ? v.push(c.current) : a.push(c.current));
      });
      const E = e.dragHint || e.resizeHint ? ce(
        u.current,
        e.dragHint ? m : v,
        t,
        e.ignoreIsAllDay
      ) : (I = e.order) != null ? I : 0;
      if (!e.vertical && !(e.dragHint || e.resizeHint) && e.order !== null && e.order !== void 0) {
        const c = e.ignoreIsAllDay ? a : a.filter((w) => w.props.isAllDay);
        f.current = ie(e.order, c);
      } else
        f.current = E;
      let n = e.dragHint || e.resizeHint ? k(t, e.dragHint ? m : v) : k(t, a);
      const o = ne(t, a);
      let s = 0;
      const h = !e.vertical && f.current !== null;
      if (o.forEach((c) => {
        let w = 0;
        c.forEach((g) => {
          if (z(g.props.start, g.props.end, e.start, e.end) && !(e.dragHint || e.resizeHint) && g._maxSiblingsPerSlot && g._maxSiblingsPerSlot > n && g.element !== r && (n = g._maxSiblingsPerSlot), !h) {
            const Y = q(g.element);
            g.props.order !== null && g.props.order !== void 0 && g.props.order < f.current && (w = Y.top + Y.height - l.top - S * f.current + G);
          }
        }), w > s && (s = w);
      }), h) {
        const c = (y = e.style) == null ? void 0 : y.height, w = typeof c == "number" ? c : W;
        s = f.current * (w + G);
      }
      if (t.length === 0) {
        D(!1);
        return;
      }
      const V = Q.add ? 20 : 0;
      l.width = e.vertical ? l.width / n - S - V / n : l.width * t.length - S, e.vertical ? l.height = l.height * t.length - S : (e.resizeHint || e.dragHint) && n <= 1 || (l.height = (L = (N = e.style) == null ? void 0 : N.height) != null ? L : W), l.left = e.vertical ? l.left + f.current * l.width + S * f.current : l.left, l.top = e.vertical ? l.top : l.top + s + S * f.current, F.current = n, ae(r, l), re(!0), D(!0);
    }, C = i.useCallback(
      (t) => {
        const r = t && t[0], d = T.current;
        b.current !== void 0 && window.cancelAnimationFrame(b.current), d && r && (d.width !== r.contentRect.width || d.height !== r.contentRect.height) && (b.current = window.requestAnimationFrame(() => {
          A();
        })), T.current = { width: r.contentRect.width, height: r.contentRect.height };
      },
      [A]
    );
    i.useEffect(A);
    const le = u.current && u.current.element ? u.current.element.closest(".k-scheduler-layout") : null;
    return we({
      element: le,
      selector: ".k-resource-row",
      horizontalAttribute: "data-depth-index",
      verticalAttribute: "data-resource-index",
      applyTo: ".k-resource-cell",
      syncHeight: e.isLast
    }), i.useEffect(() => {
      if (!R.current)
        return;
      const t = window.ResizeObserver, r = t && new t(C);
      return r && r.observe(R.current), () => {
        r && r.disconnect();
      };
    }, [C, R]), /* @__PURE__ */ i.createElement(
      X,
      {
        ...J,
        _ref: u,
        _maxSiblingsPerSlot: F,
        _order: f,
        itemRef: u,
        style: {
          visibility: te ? void 0 : "hidden",
          display: ee ? void 0 : "none",
          ...e.style
        }
      },
      !e.resizeHint && /* @__PURE__ */ i.createElement("span", { className: "k-event-actions" }, e.tail && /* @__PURE__ */ i.createElement(
        x,
        {
          name: M === "rtl" ? "chevron-right" : "chevron-left",
          icon: M === "rtl" ? me : fe
        }
      ), e.isRecurring && !e.isException && /* @__PURE__ */ i.createElement(x, { name: "arrow-rotate-cw", icon: he }), !e.isRecurring && e.isException && /* @__PURE__ */ i.createElement(x, { name: "arrows-no-repeat", icon: ge })),
      !e.resizeHint && /* @__PURE__ */ i.createElement("div", { title: P }, !e.isAllDay && /* @__PURE__ */ i.createElement(B, { className: "k-event-time" }, P), /* @__PURE__ */ i.createElement(B, null, e.title))
    );
  }
), Ee = {
  item: oe
};
Re.displayName = "KendoReactSchedulerViewItem";
export {
  Re as SchedulerViewItem,
  Ee as schedulerViewItemDefaultProps
};
