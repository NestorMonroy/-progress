/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
import * as o from "react";
import { Popup as V } from "@progress/kno-react-popup";
import { useDocument as _, Navigation as H, classNames as U, IconWrap as D, FOCUSABLE_ELEMENTS as q, getActiveElement as J } from "@progress/kno-react-common";
import { moreVerticalIcon as Q } from "@progress/kno-svg-icons";
import { columnMenu as b, messages as X } from "../messages/index.mjs";
import { useLocalization as Y } from "@progress/kno-react-intl";
import { GridContext as Z } from "../utils/GridContext.mjs";
import { GridColumnMenuAdaptiveProvider as O } from "./adaptiveContext/GridColumnMenuAdaptiveContext.mjs";
import { GridAdaptiveColumnMenu as j } from "./adaptiveContent/GridAdaptiveColumnMenu.mjs";
import ee from "react-dom";
const ne = [".k-columnmenu-item-content", ".k-filter-menu-container"].map((r) => q.map((c) => `${r} ${c}`)), oe = [[".k-columnmenu-item"], ...ne], de = (r) => {
  var y;
  const c = o.useContext(Z), [d, M] = o.useState(!1), u = o.useRef(null), a = o.useRef(null), l = o.useRef(null), h = o.useRef(0), A = _(u), { columnMenu: i, ...C } = r, { column: s, columnMenuIcon: g, navigatable: p } = r, T = Y(), w = s.title || s.field, S = w ? `${w} ` : "", x = "#", N = (n) => {
    const e = J(document);
    clearTimeout(h.current), h.current = window.setTimeout(() => {
      !c.mobileMode && e && n.relatedTarget !== u.current && a.current && !a.current.contains(e) && m();
    });
  }, F = () => {
    clearTimeout(h.current);
  }, I = (n) => {
    n.preventDefault(), d && r.onCloseMenu && r.onCloseMenu(), M(!d);
  }, m = () => {
    r.onCloseMenu && r.onCloseMenu(), M(!1), !r.navigatable && u.current && u.current.focus();
  }, K = (n) => {
    var e;
    if (n.key === "Tab") {
      const t = n.target, f = t && ((e = t.closest(".k-grid")) == null ? void 0 : e.getElementsByClassName("k-grid-content")[0]);
      f && f.scrollWidth > f.clientWidth && t.scrollIntoView({ inline: "center" });
    }
  }, E = o.useMemo(() => r.show !== void 0 ? r.show : d, [r.show, d]), R = (n) => {
    var e;
    (e = l.current) == null || e.triggerKeyboardEvent(n);
  }, G = (n) => {
    var e;
    (e = l.current) == null || e.triggerMouseEvent(n);
  }, P = (n, e, t) => {
    t.preventDefault(), t.shiftKey ? e.focusPrevious(n) : e.focusNext(n);
  }, $ = (n, e, t) => {
    n && (t.preventDefault(), n.click());
  }, z = (n, e, t) => {
    t.preventDefault(), m();
  }, B = (n, e, t) => {
    e.focusElement(n);
  }, L = (n) => {
    !n.isAnchorClicked && M(!1);
  }, v = o.useCallback(
    (n, e) => {
      const t = [];
      if (!e || typeof e != "object")
        return !1;
      if (Array.isArray(e.filters)) {
        for (const f of e.filters)
          if (v(n, f))
            return !0;
      }
      return "field" in e && typeof e.field == "string" && t.push(e.field), t.includes(n);
    },
    []
  ), k = o.useCallback((n, e) => !e || !Array.isArray(e) ? !1 : e.some((t) => t.field === n), []), W = o.useMemo(() => s.field && (v(s.field, c.filter) || k(s.field, c.group)), [s.field, c.filter, c.group, v, k]);
  return o.useEffect(() => (E && a.current && (l.current = new H({
    tabIndex: 0,
    root: a,
    selectors: oe,
    keyboardEvents: {
      keydown: { Tab: P, Enter: $, Escape: z }
    },
    mouseEvents: { mousedown: B }
  }), l.current.focusElement(l.current.first, null)), () => {
    l.current && (l.current = null);
  }), [E]), /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement(
    "a",
    {
      className: U("k-grid-header-menu k-grid-column-menu", {
        "k-active": W
      }),
      ref: u,
      onClick: I,
      onKeyDown: K,
      href: x,
      tabIndex: p ? -1 : void 0,
      "aria-label": `${p ? "" : S}${T.toLanguageString(
        b,
        X[b]
      )}`
    },
    g ? /* @__PURE__ */ o.createElement(D, { name: g.name, icon: g }) : /* @__PURE__ */ o.createElement(D, { name: "more-vertical", icon: Q })
  ), /* @__PURE__ */ o.createElement(O, null, c.mobileMode ? /* @__PURE__ */ o.createElement(o.Fragment, null, ee.createPortal(
    /* @__PURE__ */ o.createElement(
      j,
      {
        computedShow: E,
        ColumnMenu: i,
        closeMenu: m
      },
      i && /* @__PURE__ */ o.createElement(i, { ...C, onCloseMenu: m })
    ),
    (y = A()) == null ? void 0 : y.body
  )) : /* @__PURE__ */ o.createElement(
    V,
    {
      anchor: u.current,
      show: E,
      popupClass: "k-grid-columnmenu-popup",
      onMouseDownOutside: L
    },
    /* @__PURE__ */ o.createElement(
      "div",
      {
        ref: a,
        onBlur: N,
        onFocus: F,
        onMouseDown: G,
        onKeyDown: R,
        className: "k-column-menu k-column-menu-md"
      },
      i && /* @__PURE__ */ o.createElement(i, { ...C, onCloseMenu: m })
    )
  )));
};
export {
  de as GridColumnMenuWrapper
};
