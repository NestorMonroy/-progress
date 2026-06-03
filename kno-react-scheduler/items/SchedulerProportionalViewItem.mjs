/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as n from "react";
import { SchedulerItem as me } from "./SchedulerItem.mjs";
import { intersects as T, first as B, last as K, calculateProportionalOrder as de } from "../utils/index.mjs";
import { getRect as A, setRect as fe } from "../views/common/utils.mjs";
import { BORDER_WIDTH as S } from "../constants/index.mjs";
import { useInternationalization as he } from "@progress/kno-react-intl";
import { SchedulerItemContent as j } from "./SchedulerItemContent.mjs";
import { useDir as ge, IconWrap as H } from "@progress/kno-react-common";
import { chevronRightIcon as Se, chevronLeftIcon as ve, arrowRotateCwIcon as we, nonRecurrenceIcon as xe } from "@progress/kno-svg-icons";
import { useSchedulerViewItemsContext as Re, useSchedulerViewSlotsContext as Ie } from "../context/SchedulerViewContext.mjs";
import { useSchedulerElementContext as Te } from "../context/SchedulerContext.mjs";
import { useRowSync as Ee } from "../hooks/useRowSync.mjs";
const ye = 1, J = 25, _e = n.forwardRef(
  (e, Q) => {
    const { item: U, _ref: X, itemRef: Y, ...Z } = e, E = n.useRef(void 0), o = n.useRef(null), P = n.useRef(null), z = n.useRef(null);
    n.useImperativeHandle(P, () => ({ props: e, element: o.current && o.current.element })), n.useImperativeHandle(Q, () => P.current), n.useImperativeHandle(X, () => o.current), n.useImperativeHandle(Y, () => o.current);
    const ee = U || De.item, p = he(), [te] = Re(), [re] = Ie(), x = Te(), [ne, b] = n.useState(!0), [ie, ce] = n.useState(!1), C = n.useRef(0), f = n.useRef(null), h = n.useRef([]), O = ge(x), k = n.useMemo(
      () => {
        var i, r;
        return e.isAllDay ? (i = e.title) != null ? i : "" : `(${p.format("{0:t} - {1:t}", e.zonedStart, e.zonedEnd)}): ${(r = e.title) != null ? r : ""}`;
      },
      [p, e.isAllDay, e.title, e.zonedEnd, e.zonedStart]
    ), oe = (i, r) => {
      let c = 0;
      return r.forEach((l) => {
        l._order !== void 0 && l._order !== null && c < l._order && (c = l._order);
      }), c + 1;
    }, se = (i, r, c) => {
      const [l, d] = r, a = new Date(
        Math.min(
          d.props.end.getTime() - c,
          Math.max(e.start.getTime(), l.props.start.getTime())
        )
      ), g = new Date(
        Math.max(a.getTime() + c, Math.min(e.end.getTime(), d.props.end.getTime()))
      );
      return i.filter((u) => {
        const R = Math.max(
          Math.min(d.props.end.getTime() - c, u.props.start.getTime()),
          l.props.start.getTime()
        ), v = Math.min(
          Math.max(R + c, u.props.end.getTime()),
          d.props.end.getTime()
        );
        return u.props.id !== e.id && u.props.group.index === e.group.index && u.props.range.index === e.range.index && (e.ignoreIsAllDay || u.props.isAllDay === e.isAllDay) && T(new Date(R), new Date(v), a, g) && T(l.props.start, d.props.end, u.props.start, u.props.end);
      });
    }, le = (i, r) => i.group.index === r.group.index && i.range.index === r.range.index && // When slotDuration equals a full day, both daySlots and timeSlots have isAllDay=true,
    // so we need to also check range.isAllDay to distinguish between them.
    (i.range.isAllDay === void 0 || r.range.isAllDay === void 0 || i.range.isAllDay === r.range.isAllDay) && (e.ignoreIsAllDay || i.isAllDay === r.isAllDay), y = () => {
      var G, L, W, $, q;
      const i = re.filter((t) => t.current && le(t.current.props, e)).sort((t, w) => t.current.props.start.getTime() - w.current.props.start.getTime()), r = i.filter(
        (t) => T(t.current.props.start, t.current.props.end, e.start, e.end)
      ), c = o.current && o.current.element;
      if (!c || !r.length)
        return;
      const l = B(i), d = K(i), a = B(r), g = K(r);
      if (!a.current || !o.current || !g.current || !l.current || !d.current)
        return;
      if (!T(a.current.props.start, g.current.props.end, e.start, e.end)) {
        b(!1);
        return;
      }
      const _ = [], u = [], R = [], v = A(a.current.element), D = (e.vertical ? v.height : v.width) / (a.current.props.end.getTime() - a.current.props.start.getTime()), N = (e.vertical ? J : 8) / D, I = (Math.min(e.start.getTime(), g.current.props.end.getTime() - N) - a.current.props.start.getTime()) * D, F = Math.floor(
        Math.min(e.end.getTime(), g.current.props.end.getTime()) - Math.max(e.start.getTime(), a.current.props.start.getTime())
      ) * D;
      (te || []).forEach((t) => {
        t.current && (t.current.props.dragHint ? u.push(t.current) : t.current.props.resizeHint ? R.push(t.current) : _.push(t.current));
      }), h.current = se(_, [l.current, d.current], N), f.current = e.resizeHint || e.dragHint ? 0 : de(o.current, h.current);
      let m = 1;
      e.resizeHint || e.dragHint || (m = oe(o.current, h.current), h.current.forEach((t) => {
        t._maxSiblingsPerSlot && m < t._maxSiblingsPerSlot && (m = t._maxSiblingsPerSlot);
      }), h.current.forEach((t) => {
        t._maxSiblingsPerSlot !== void 0 && t._maxSiblingsPerSlot !== null && t._maxSiblingsPerSlot < m && (t._maxSiblingsPerSlot = m);
      }));
      let M = 0;
      const s = v;
      h.current.forEach((t) => {
        let w = 0;
        t._order !== void 0 && t._order !== null && t._order < f.current && (w = A(t.element).top + A(t.element).height - s.top - S * f.current + ye), w > M && (M = w);
      });
      const ue = 20;
      s.width = e.vertical ? s.width / m - S - ue / m : F - S, e.vertical ? s.height = F - S : (e.resizeHint || e.dragHint) && m <= 1 || (s.height = (L = (G = e.style) == null ? void 0 : G.height) != null ? L : J), s.left = e.vertical ? s.left + ((W = f.current) != null ? W : 0) + S * (($ = f.current) != null ? $ : 0) * s.width : s.left + (I < 0 ? 0 : I), s.top = e.vertical ? s.top + (I < 0 ? 0 : I) : s.top + M + S * ((q = f.current) != null ? q : 0), C.current = m, fe(c, s), ce(!0), b(!0);
    }, V = n.useCallback(
      (i) => {
        const r = i && i[0], c = z.current;
        E.current !== void 0 && window.cancelAnimationFrame(E.current), c && r && (c.width !== r.contentRect.width || c.height !== r.contentRect.height) && (E.current = window.requestAnimationFrame(() => {
          y();
        })), z.current = { width: r.contentRect.width, height: r.contentRect.height };
      },
      [y]
    );
    n.useEffect(y);
    const ae = o.current && o.current.element ? o.current.element.closest(".k-scheduler-layout") : null;
    return Ee({
      element: ae,
      selector: ".k-resource-row",
      horizontalAttribute: "data-depth-index",
      verticalAttribute: "data-resource-index",
      applyTo: ".k-resource-cell",
      syncHeight: e.isLast
    }), n.useEffect(() => {
      if (!x.current)
        return;
      const i = window.ResizeObserver, r = i && new i(V);
      return r && r.observe(x.current), () => {
        r && r.disconnect();
      };
    }, [V, x]), /* @__PURE__ */ n.createElement(
      ee,
      {
        ...Z,
        _ref: o,
        _order: f,
        _maxSiblingsPerSlot: C,
        _siblings: h,
        itemRef: o,
        style: {
          visibility: ie ? void 0 : "hidden",
          display: ne ? void 0 : "none",
          ...e.style
        }
      },
      !e.resizeHint && /* @__PURE__ */ n.createElement("span", { className: "k-event-actions" }, e.tail && /* @__PURE__ */ n.createElement(
        H,
        {
          name: O === "rtl" ? "chevron-right" : "chevron-left",
          icon: O === "rtl" ? Se : ve
        }
      ), e.isRecurring && !e.isException && /* @__PURE__ */ n.createElement(H, { name: "reload", icon: we }), !e.isRecurring && e.isException && /* @__PURE__ */ n.createElement(H, { name: "non-recurrence", icon: xe })),
      !e.resizeHint && /* @__PURE__ */ n.createElement("div", { title: k }, !e.isAllDay && /* @__PURE__ */ n.createElement(j, { className: "k-event-time" }, k), /* @__PURE__ */ n.createElement(j, null, e.title))
    );
  }
), De = {
  item: me
};
_e.displayName = "KendoReactSchedulerProportionalViewItem";
export {
  _e as SchedulerProportionalViewItem,
  De as schedulerProportionalViewItemDefaultProps
};
