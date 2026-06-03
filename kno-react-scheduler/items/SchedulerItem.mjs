/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as t from "react";
import { useDir as ve, classNames as fe, useDraggable as o, IconWrap as $ } from "@progress/kno-react-common";
import { useInternationalization as he, useLocalization as be } from "@progress/kno-react-intl";
import { xIcon as ze, chevronLeftIcon as Ce, chevronRightIcon as De } from "@progress/kno-svg-icons";
import { deleteTitle as j, messages as G, allDay as J } from "../messages/index.mjs";
import { formatEventTime as Ee } from "../utils/index.mjs";
import { useSchedulerItem as Re } from "../hooks/useSchedulerItem.mjs";
import { useEditable as Me } from "../hooks/useEditable.mjs";
const ye = t.forwardRef(
  (e, Q) => {
    const {
      // Focus
      onFocus: d,
      onBlur: m,
      // Mouse
      onMouseDown: g,
      onClick: k,
      onMouseUp: v,
      onMouseOut: f,
      onMouseOver: h,
      onMouseEnter: b,
      onMouseLeave: z,
      onDoubleClick: C,
      onRemoveClick: D,
      // Keyboard
      onKeyUp: E,
      onKeyDown: R,
      onKeyPress: M,
      // Drag
      onPress: y,
      onDrag: N,
      onRelease: x,
      // Resize
      onResizePress: H,
      onResizeEndDrag: I,
      onResizeRelease: P,
      onResizeStartDrag: S
    } = e, { item: a, element: F } = Re(e, Q), K = ve(F), w = t.useRef(null), L = t.useRef(null), O = t.useRef(null), U = t.useRef(null), l = Me(e.editable), c = he(), q = be(), B = q.toLanguageString(j, G[j]), A = q.toLanguageString(J, G[J]), s = e.group.resources.find(
      (n) => !!(n.colorField && n[n.colorField] !== "" && n[n.colorField] !== void 0)
    ), r = s && s.colorField && s[s.colorField], V = e.tabIndex !== void 0 ? e.tabIndex === null ? void 0 : e.tabIndex : e.selected ? 0 : -1, X = t.useMemo(
      () => fe(
        {
          "k-event": !e.resizeHint,
          "k-selected": e.selected && l.select,
          "k-event-drag-hint": e.dragHint,
          "k-scheduler-marquee": e.resizeHint,
          "k-marquee": e.resizeHint,
          "k-first": e.resizeHint && !e.tail,
          "k-last": e.resizeHint && !e.head
        },
        e.className
      ),
      [e.resizeHint, e.selected, e.dragHint, e.tail, e.head, e.className, l.select]
    ), Y = t.useMemo(
      () => `${e.title}, ${Ee(
        c,
        e.zonedStart,
        e.zonedEnd,
        e.isAllDay,
        A
      )}`,
      [c, e.isAllDay, e.title, e.zonedEnd, e.zonedStart, A]
    ), Z = t.useMemo(
      () => ({
        cursor: "pointer",
        userSelect: "none",
        borderColor: e.resizeHint ? void 0 : r,
        backgroundColor: e.resizeHint ? void 0 : r,
        touchAction: "none",
        ...e.style
      }),
      [r, e.style, e.resizeHint]
    ), _ = t.useCallback(
      (n) => {
        d && d.call(void 0, {
          syntheticEvent: n,
          target: a.current
        });
      },
      [d, a]
    ), p = t.useCallback(
      (n) => {
        m && m.call(void 0, {
          syntheticEvent: n,
          target: a.current
        });
      },
      [m, a]
    ), ee = t.useCallback(
      (n) => {
        g && g.call(void 0, {
          syntheticEvent: n,
          target: a.current
        });
      },
      [g, a]
    ), te = t.useCallback(
      (n) => {
        k && k.call(void 0, {
          syntheticEvent: n,
          target: a.current
        });
      },
      [k, a]
    ), ne = t.useCallback(
      (n) => {
        v && v.call(void 0, {
          syntheticEvent: n,
          target: a.current
        });
      },
      [v, a]
    ), ae = t.useCallback(
      (n) => {
        h && h.call(void 0, {
          syntheticEvent: n,
          target: a.current
        });
      },
      [h, a]
    ), le = t.useCallback(
      (n) => {
        f && f.call(void 0, {
          syntheticEvent: n,
          target: a.current
        });
      },
      [f, a]
    ), re = t.useCallback(
      (n) => {
        b && b.call(void 0, {
          syntheticEvent: n,
          target: a.current
        });
      },
      [b, a]
    ), oe = t.useCallback(
      (n) => {
        z && z.call(void 0, {
          syntheticEvent: n,
          target: a.current
        });
      },
      [z, a]
    ), ce = t.useCallback(
      (n) => {
        C && C.call(void 0, {
          syntheticEvent: n,
          target: a.current
        });
      },
      [C, a]
    ), se = t.useCallback(
      (n) => {
        D && D.call(void 0, {
          syntheticEvent: n,
          target: a.current
        });
      },
      [D, a]
    ), ie = t.useCallback(
      (n) => {
        R && R.call(void 0, {
          syntheticEvent: n,
          target: a.current
        });
      },
      [R, a]
    ), ue = t.useCallback(
      (n) => {
        M && M.call(void 0, {
          syntheticEvent: n,
          target: a.current
        });
      },
      [M, a]
    ), de = t.useCallback(
      (n) => {
        E && E.call(void 0, {
          syntheticEvent: n,
          target: a.current
        });
      },
      [E, a]
    ), me = t.useCallback(
      (n) => {
        y && y.call(void 0, {
          dragEvent: n,
          target: a.current
        });
      },
      [y, a]
    ), ge = t.useCallback(
      (n) => {
        N && N.call(void 0, {
          dragEvent: n,
          target: a.current
        });
      },
      [N, a]
    ), ke = t.useCallback(
      (n) => {
        x && x.call(void 0, {
          dragEvent: n,
          target: a.current
        });
      },
      [x, a]
    ), i = t.useCallback(
      (n) => {
        H && H.call(void 0, {
          dragEvent: n,
          target: a.current
        });
      },
      [H, a]
    ), T = t.useCallback(
      (n) => {
        S && S.call(void 0, {
          dragEvent: n,
          target: a.current
        });
      },
      [S, a]
    ), W = t.useCallback(
      (n) => {
        I && I.call(void 0, {
          dragEvent: n,
          target: a.current
        });
      },
      [I, a]
    ), u = t.useCallback(
      (n) => {
        P && P.call(void 0, {
          dragEvent: n,
          target: a.current
        });
      },
      [P, a]
    );
    return o(F, {
      onPress: me,
      onDrag: ge,
      onRelease: ke
    }), o(w, {
      onPress: i,
      onDrag: W,
      onRelease: u
    }), o(L, {
      onPress: i,
      onDrag: T,
      onRelease: u
    }), o(O, {
      onPress: i,
      onDrag: T,
      onRelease: u
    }), o(U, {
      onPress: i,
      onDrag: W,
      onRelease: u
    }), /* @__PURE__ */ t.createElement(
      "div",
      {
        ref: F,
        id: e.id,
        style: Z,
        tabIndex: V,
        className: X,
        role: "button",
        "aria-label": Y,
        onFocus: _,
        onBlur: p,
        onMouseUp: ne,
        onMouseDown: ee,
        onClick: te,
        onMouseOver: ae,
        onMouseOut: le,
        onMouseEnter: re,
        onMouseLeave: oe,
        onDoubleClick: ce,
        onKeyDown: ie,
        onKeyPress: ue,
        onKeyUp: de,
        "data-group-index": e.group.index,
        "data-range-index": e.range.index
      },
      e.children,
      !e.resizeHint && /* @__PURE__ */ t.createElement("span", { className: "k-event-actions" }, l.remove && /* @__PURE__ */ t.createElement(
        "a",
        {
          tabIndex: -1,
          "aria-hidden": "true",
          className: "k-link k-event-delete",
          title: B,
          "aria-label": B,
          onClick: se
        },
        /* @__PURE__ */ t.createElement($, { name: "x", icon: ze })
      ), e.head && /* @__PURE__ */ t.createElement(
        $,
        {
          name: K === "rtl" ? "chevron-left" : "chevron-right",
          icon: K === "rtl" ? Ce : De
        }
      )),
      l.resize && e.vertical && /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("span", { className: "k-resize-handle k-resize-n", ref: O }), /* @__PURE__ */ t.createElement("span", { className: "k-resize-handle k-resize-s", ref: U })),
      l.resize && !e.vertical && /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("span", { className: "k-resize-handle k-resize-w", ref: L }), /* @__PURE__ */ t.createElement("span", { className: "k-resize-handle k-resize-e", ref: w })),
      e.resizeHint && /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("div", { className: "k-marquee-color", style: { borderColor: r, backgroundColor: r } }), /* @__PURE__ */ t.createElement("div", { className: "k-marquee-text" }, !e.tail && /* @__PURE__ */ t.createElement("div", { className: "k-label-top" }, c.formatDate(e.zonedStart, e.format)), !e.head && /* @__PURE__ */ t.createElement("div", { className: "k-label-bottom" }, c.formatDate(e.zonedEnd, e.format))))
    );
  }
);
ye.displayName = "KendoReactSchedulerItem";
export {
  ye as SchedulerItem
};
