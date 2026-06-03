/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as n from "react";
import d from "prop-types";
import { Navigation as _, classNames as $, dispatchEvent as j } from "@progress/kno-react-common";
import { Button as G } from "@progress/kno-react-buttons";
import { useLocalization as J } from "@progress/kno-react-intl";
import { chevronUpIcon as Q, chevronDownIcon as V, chevronRightIcon as C, chevronLeftIcon as D, chevronDoubleRightIcon as F, chevronDoubleLeftIcon as R, xIcon as W } from "@progress/kno-svg-icons";
import { listBoxActions as T, messages as L } from "./messages/index.mjs";
import { ListBoxContext as X } from "./ListBoxContext.mjs";
const y = [
  { name: "moveUp", iconName: "chevron-up", svgIcon: Q },
  { name: "moveDown", iconName: "chevron-down", svgIcon: V },
  { name: "transferTo", iconName: "chevron-right", svgIcon: C },
  { name: "transferFrom", iconName: "chevron-left", svgIcon: D },
  { name: "transferAllTo", iconName: "chevron-double-right", svgIcon: F },
  { name: "transferAllFrom", iconName: "chevron-double-left", svgIcon: R },
  { name: "remove", iconName: "x", svgIcon: W }
], A = n.forwardRef((h, E) => {
  const {
    tools: f,
    dir: z,
    onToolClick: g,
    size: B = u.size,
    data: s = u.data,
    dataConnected: o = u.dataConnected,
    selectedField: S = u.selectedField
  } = h, b = J(), { listId: P } = n.useContext(X), p = n.useRef(null), I = n.useRef(null), k = n.useCallback(
    () => ({
      onToolClick: g,
      props: h,
      context: {},
      state: {},
      refs: {}
    }),
    []
  );
  n.useImperativeHandle(I, k), n.useImperativeHandle(
    E,
    () => I.current
  );
  const x = (t, e, a) => {
    a.preventDefault(), e.focusNext(t);
  }, w = (t, e, a) => {
    a.preventDefault(), e.focusPrevious(t);
  }, m = n.useMemo(
    () => new _({
      root: p,
      selectors: [".k-button:not([disabled])"],
      tabIndex: 0,
      keyboardEvents: {
        keydown: {
          ArrowDown: x,
          ArrowRight: x,
          ArrowUp: w,
          ArrowLeft: w,
          Enter: (t, e, a) => {
            t.click(), e.focusElement(e.current, t);
          }
        }
      }
    }),
    []
  ), U = n.useCallback(m.triggerKeyboardEvent.bind(m), []);
  n.useEffect(() => (m.initializeRovingTab(), () => m.removeFocusListener()), []);
  const H = (t) => {
    switch (t.name) {
      case "chevron-right":
        return D;
      case "chevron-left":
        return C;
      case "chevron-double-right":
        return R;
      case "chevron-double-left":
        return F;
    }
    return t;
  }, K = (t) => {
    switch (t) {
      case "chevron-right":
        return "chevron-left";
      case "chevron-left":
        return "chevron-right";
      case "chevron-double-right":
        return "chevron-double-left";
      case "chevron-double-left":
        return "chevron-double-right";
    }
    return t;
  }, q = (t, e) => {
    j(g, t, k(), { toolName: e });
  }, O = (t) => {
    let e = !0;
    const a = S || "selected", r = s.length, v = o.length, l = s.findIndex((c) => c[a] === !0) >= 0, i = o.findIndex((c) => c[a] === !0) >= 0;
    switch (t) {
      case "moveUp":
        l ? e = s.length > 0 ? s[0].selected : !0 : i ? e = o.length > 0 ? o[0].selected : !0 : e = !0;
        break;
      case "moveDown":
        l ? e = s[r - 1] ? s[r - 1].selected : !0 : i ? e = o.length > 0 ? o[v - 1].selected : !0 : e = !0;
        break;
      case "transferTo":
        e = !(o && l);
        break;
      case "transferFrom":
        o ? e = !(o && i) : e = !0;
        break;
      case "transferAllTo":
        e = !(o && s.length > 0);
        break;
      case "transferAllFrom":
        e = !(o && o.length > 0);
        break;
      case "remove":
        e = !(l || i);
        break;
    }
    return e;
  }, N = z === "rtl", M = b.toLanguageString(T, L[T]);
  return /* @__PURE__ */ n.createElement(
    "div",
    {
      className: $("k-listbox-actions"),
      ref: p,
      onKeyDown: U,
      role: "toolbar",
      "aria-label": M,
      "aria-controls": P
    },
    f && f.map((t, e) => {
      const a = y.findIndex((c) => c.name === t), r = y[a], v = O(r.name), l = `listbox.${r.name}`, i = b.toLanguageString(l, L[l]);
      return /* @__PURE__ */ n.createElement(
        G,
        {
          size: B,
          key: e,
          disabled: v,
          "data-command": r.name,
          title: i,
          "aria-label": i,
          icon: N ? K(r.iconName) : r.iconName,
          svgIcon: N ? H(r.svgIcon) : r.svgIcon,
          onClick: (c) => {
            c.preventDefault(), q(c, r.name);
          }
        }
      );
    })
  );
}), u = {
  data: [],
  dataConnected: [],
  selectedField: "selected",
  size: void 0
};
A.propTypes = {
  data: d.array.isRequired,
  dataConnected: d.array.isRequired,
  tools: d.array,
  selectedField: d.string,
  dir: d.string,
  size: d.oneOf(["small", "medium", "large"])
};
A.displayName = "ListBoxToolbarInner";
export {
  A as ListBoxToolbar
};
