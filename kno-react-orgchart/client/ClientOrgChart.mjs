/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as s from "react";
import o from "prop-types";
import { Navigation as A, classNames as z } from "@progress/kno-react-common";
import { loadTheme as J } from "../theming/theme-service.mjs";
import { ORGCHART_CLASSNAME as Q } from "../utils/consts.mjs";
const V = s.createContext({
  cardColors: void 0,
  onExpandChange: void 0,
  onKeyDown: void 0,
  onItemAction: void 0,
  onItemContextMenu: void 0,
  onItemDoubleClick: void 0,
  onGroupAction: void 0,
  onGroupBlur: void 0,
  onGroupFocus: void 0
}), I = (h) => {
  const n = {
    tabIndex: 0,
    navigatable: !0,
    expandField: "expanded",
    ariaLabel: "Org Chart",
    idField: "id",
    childrenField: "items",
    avatarField: "avatar",
    titleField: "title",
    subtitleField: "subtitle",
    ...h
  }, {
    navigatable: b,
    id: X,
    tabIndex: F,
    className: y,
    style: D,
    data: Y,
    groupField: Z,
    cardWidth: ee,
    cardHeight: te,
    groupTitleHeight: ne,
    groupSubtitleHeight: oe,
    verticalLine: re,
    idField: ie,
    childrenField: ae,
    expandField: ce,
    hasChildrenField: le,
    avatarField: se,
    titleField: de,
    subtitleField: ue,
    onExpandChange: ge,
    onItemAction: p,
    onItemDoubleClick: he,
    onItemContextMenu: pe,
    onKeyDown: me,
    onGroupAction: x,
    onGroupBlur: fe,
    onGroupFocus: Fe,
    cardsColors: E,
    ariaLabel: Ce,
    itemRender: ve,
    groupTitleRender: be,
    groupSubtitleRender: xe,
    height: Ee,
    children: ke,
    ...w
  } = n, C = s.useRef(null), c = s.useRef(
    new A({
      tabIndex: F,
      root: C,
      selectors: [n.groupField ? ".k-orgchart-node-group-container" : ".k-orgchart-card"],
      focusOptions: {}
    })
  ), [G, S] = s.useState([]), d = s.useRef(null), R = (e, t, i) => {
    i.preventDefault(), t.focusNext(e);
  }, N = (e, t, i) => {
    i.preventDefault(), t.focusPrevious(e);
  }, O = (e, t, i, r) => {
    var l;
    if (i.preventDefault(), (n.groupField ? r.items.some((f) => f[n.expandField]) : r.item[n.expandField]) && n.onExpandChange)
      n.onExpandChange.call(void 0, r);
    else {
      const v = (l = e.closest(".k-orgchart-group")) == null ? void 0 : l.getAttribute("id"), u = document.querySelector(`[aria-owns="${v}"]`), m = (u == null ? void 0 : u.querySelector(".k-orgchart-card")) || u;
      m ? t.focusElement(m, e) : t.focusPrevious(e);
    }
  }, T = (e, t, i, r) => {
    var u, m;
    i.preventDefault();
    const a = n.groupField ? r.items.some((g) => g[n.expandField]) : r.item[n.expandField], l = n.groupField ? r.items.find((g) => g[n.childrenField]) : r.item[n.childrenField], f = n.groupField ? r.items.some((g) => n.hasChildrenField && g[n.hasChildrenField]) : n.hasChildrenField && r.item[n.hasChildrenField], v = n.groupField ? l && l[n.childrenField] && l[n.childrenField].length : l && l.length;
    if ((f || v) && !a && n.onExpandChange)
      n.onExpandChange.call(void 0, r);
    else {
      const g = n.groupField ? ".k-orgchart-node-group-container" : ".k-orgchart-card", $ = (u = e.closest("[aria-owns]")) == null ? void 0 : u.getAttribute("aria-owns"), k = (m = document.getElementById($)) == null ? void 0 : m.querySelector(g);
      k ? t.focusElement(k, e) : t.focusNext(e);
    }
  }, H = (e, t, i) => {
    i.preventDefault(), t.focusElement(t.first, null);
  }, P = (e, t, i) => {
    i.preventDefault(), t.focusElement(t.last, null);
  }, L = (e, t, i, r) => {
    i.stopPropagation();
    const a = e.className.indexOf("k-orgchart-node-group-container") !== -1;
    if (h.groupField && a) {
      d.current && d.current.first && d.current.focusElement(d.current.first, null);
      return;
    }
    n.onItemAction && n.onItemAction({
      event: i,
      item: r.item
    });
  }, M = (e) => {
    if (h.groupField) {
      const t = e.closest(".k-orgchart-node-group-container");
      t && c.current.focusElement(t, null);
    }
  };
  s.useEffect(() => {
    if (b && c.current.first && c.current.first.setAttribute("tabindex", String(F)), !E) {
      const e = C.current.ownerDocument || document;
      J((t) => {
        S(t);
      }, e);
    }
  }, [b, F]);
  const B = (e) => {
    if (n.navigatable) {
      const t = e.event, i = t.key === " " ? "Space" : t.key, r = h.groupField && t.target.className.indexOf("k-orgchart-card") !== -1 && d.current || c.current, a = t.target.closest(
        r.selectors.join(",")
      );
      switch (i) {
        case "ArrowUp":
          O(a, r, t, e);
          break;
        case "ArrowDown":
          T(a, r, t, e);
          break;
        case "ArrowLeft":
          N(a, r, t);
          break;
        case "ArrowRight":
          R(a, r, t);
          break;
        case "End":
          P(a, r, t);
          break;
        case "Home":
          H(a, r, t);
          break;
        case "Enter":
          L(a, r, t, e);
          break;
        case "Escape":
          M(a);
          break;
      }
    }
  }, K = (e) => {
    if (e.event.stopPropagation(), p && p.call(void 0, e), n.navigatable) {
      const t = e.event.target.closest(".k-orgchart-card");
      t && c.current.focusElement(t, null);
    }
  }, _ = (e) => {
    e.event.stopPropagation(), p && p.call(void 0, e);
  }, q = (e) => {
    e.event.stopPropagation(), p && p.call(void 0, e);
  }, j = (e) => {
    if (x && x.call(void 0, e), n.navigatable) {
      const t = e.event.target.closest(".k-orgchart-node-group-container");
      t && c.current.focusElement(t, null);
    }
  }, U = (e) => {
    d.current = null;
  }, W = (e) => {
    d.current = new A({
      tabIndex: 0,
      root: e.containerRef,
      selectors: [".k-orgchart-card"],
      focusOptions: {}
    });
  };
  return /* @__PURE__ */ s.createElement("div", { style: D, ref: C, className: z(y, Q) }, /* @__PURE__ */ s.createElement(
    V.Provider,
    {
      value: {
        cardColors: E || G,
        onExpandChange: h.onExpandChange,
        onKeyDown: B,
        onItemAction: K,
        onItemDoubleClick: q,
        onItemContextMenu: _,
        onGroupAction: j,
        onGroupBlur: U,
        onGroupFocus: W
      },
      ...w
    },
    h.children
  ));
};
I.propTypes = {
  className: o.string,
  style: o.object,
  id: o.string,
  ariaLabel: o.string,
  idField: o.string,
  childrenField: o.string,
  expandField: o.string,
  titleField: o.string,
  hasChildrenField: o.string,
  subtitleField: o.string,
  avatarField: o.string,
  cardsColors: o.array,
  data: o.array,
  groupField: o.string,
  cardHeight: o.number,
  cardWidth: o.number,
  groupTitleHeight: o.number,
  groupSubtitleHeight: o.number,
  verticalLine: o.number,
  height: o.oneOfType([o.string, o.number]),
  onExpandChange: o.func,
  onItemAction: o.func,
  onItemDoubleClick: o.func,
  onItemContextMenu: o.func,
  onGroupAction: o.func
};
I.displayName = "knoClientOrgChart";
export {
  I as ClientOrgChart,
  V as OrgChartEventsContextContext
};
