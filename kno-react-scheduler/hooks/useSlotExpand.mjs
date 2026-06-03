/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as u from "react";
import { getPadding as x, getRect as H, setRect as y } from "../views/common/utils.mjs";
import { BORDER_WIDTH as k } from "../constants/index.mjs";
import { useIsomorphicLayoutEffect as z } from "@progress/kno-react-common";
import { useSchedulerElementContext as A } from "../context/SchedulerContext.mjs";
const T = (e, t) => {
  const m = u.useRef(void 0), p = u.useRef(0), l = A(), E = () => {
    if (!e.current)
      return;
    const n = e.current.element;
    n && (p.current = n.clientHeight);
  }, a = u.useCallback(() => {
    if (!t || !e.current)
      return;
    const n = e.current.element, h = e.current.props;
    if (!n)
      return;
    const i = x(n), r = /* @__PURE__ */ new Map(), o = h.items.filter((c) => c._ref.current);
    o.forEach((c) => {
      var v, R, b, w;
      if (!c._ref.current)
        return;
      const { height: f } = H(c._ref.current.element), _ = (b = (R = c.order) != null ? R : (v = c._ref.current) == null ? void 0 : v._order) != null ? b : -1;
      ((w = r.get(_)) != null ? w : 0) < f && r.set(_, f);
    });
    const s = Array.from(r.values()).reduce((c, f) => c + f, 0), g = o.length * k * 2 + s - (i || 0) + (typeof t == "object" && t.offsetTop ? t.offsetTop : 0) + (typeof t == "object" && t.offsetBottom ? t.offsetBottom : 0);
    o.length ? g > p.current - i && y(n, { height: g }, !0) : n && (n.style.minHeight = "");
  }, [t, e]), d = u.useCallback(() => {
    m.current !== void 0 && window.cancelAnimationFrame(m.current), m.current = window.requestAnimationFrame(() => {
      a();
    });
  }, [a]);
  z(E, []), u.useEffect(a, [e, e.current && e.current.props, t]), u.useEffect(() => {
    if (!e.current)
      return;
    const i = e.current.props.items.filter((r) => r._ref.current).map((r) => {
      if (!r._ref.current || !r._ref.current.element || !l.current)
        return;
      const o = window.ResizeObserver, s = o && new o(d);
      return s && s.observe(r._ref.current.element), () => {
        s && s.disconnect();
      };
    });
    return () => {
      i.forEach((r) => r && r());
    };
  }, [d, l, e]);
};
export {
  T as useSlotExpand
};
