/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as l from "react";
import re from "./ListItem.mjs";
import D from "./ListGroupItem.mjs";
import { areSame as M, getItemValue as V } from "./utils.mjs";
import { useLocalization as te } from "@progress/kno-react-intl";
import { nodata as H, messages as ae } from "../messages/index.mjs";
import { useUnstyled as le, classNames as v, uDropDownsBase as h } from "@progress/kno-react-common";
const me = (e) => {
  const U = te(), I = le(), f = I && I.uDropDownsBase, {
    id: S,
    show: k,
    wrapperCssClass: j,
    wrapperStyle: q,
    listStyle: w,
    listRef: C,
    wrapperRef: J,
    listClassName: b,
    ariaLabel: L,
    ariaSetSize: N,
    actionsField: K,
    descriptionField: O,
    iconField: R,
    svgIconField: G,
    checkboxField: P
  } = e, p = (() => {
    const {
      textField: i,
      valueField: r,
      groupField: a,
      isMultiColumn: t,
      optionsGuid: o,
      skip: u = 0,
      virtual: m,
      focusedIndex: z,
      hasDuplicates: W,
      highlightSelected: X = !0,
      value: g,
      data: A,
      itemRender: Y,
      groupHeaderItemRender: Z
    } = e, B = Array.isArray(g);
    let x = 0;
    return A.map((s, n) => {
      const y = u + n, F = u + n + x, _ = W ? g ? z === n : !1 : s.disabled ? !1 : X && (!B && M(s, g, r) || B && g.findIndex((ee) => M(ee, s, r)) !== -1);
      let d, c, E;
      a !== void 0 && (c = V(s, a), n === 0 && e.showFirstGroupHeader && c ? d = c : n > 0 && (E = V(A[n - 1], a), c && E && c !== E && (d = c)));
      const $ = d !== void 0;
      return d !== void 0 && (x += 1), [
        $ && /* @__PURE__ */ l.createElement(
          D,
          {
            id: `k-${o}-item-${F + 1}`,
            virtual: m,
            key: y + "-group-item",
            group: d,
            isMultiColumn: t,
            render: Z,
            iconField: R,
            svgIconField: G,
            groupItem: s
          }
        ),
        /* @__PURE__ */ l.createElement(
          re,
          {
            id: `k-${o}-item-${($ ? F + 1 : F) + 1}`,
            virtual: m,
            dataItem: s,
            selected: _,
            focused: z === n,
            index: y,
            key: y,
            onClick: e.onClick,
            textField: i,
            group: d,
            render: Y,
            disabled: s.disabled,
            actionsField: K,
            descriptionField: O,
            iconField: R,
            svgIconField: G,
            checkboxField: P
          }
        )
      ];
    });
  })(), Q = () => {
    const i = e.noDataRender, r = /* @__PURE__ */ l.createElement("div", { className: v(h.noData({ c: f })), "aria-live": "polite" }, /* @__PURE__ */ l.createElement("div", null, U.toLanguageString(H, ae[H])));
    return i ? i(r) : r;
  }, T = () => {
    if (!e.groupField)
      return /* @__PURE__ */ l.createElement(
        "ul",
        {
          id: S,
          role: "listbox",
          "aria-label": L,
          "aria-hidden": k ? void 0 : !0,
          "aria-setsize": N,
          className: b || v(h.ul({ c: f })),
          ref: C,
          style: w
        },
        p
      );
    const i = [];
    let r = [];
    return p.forEach((a) => {
      Array.isArray(a) && a.forEach((t) => {
        t && t.type === D ? (r.length > 0 && i.push(r), r = [t]) : t && r.push(t);
      });
    }), r.length > 0 && i.push(r), i.map((a) => {
      var u;
      const t = a.find(
        (m) => l.isValidElement(m) && m.type === D
      ), o = (u = t == null ? void 0 : t.props) == null ? void 0 : u.id;
      return /* @__PURE__ */ l.createElement(
        "ul",
        {
          id: o ? void 0 : S,
          key: o || "first-group",
          role: "group",
          "aria-labelledby": o,
          className: b || v(h.ul({ c: f })),
          ref: o ? void 0 : C,
          style: w
        },
        a
      );
    });
  };
  return p.length ? /* @__PURE__ */ l.createElement(
    "div",
    {
      className: j,
      style: q,
      ref: J,
      role: e.groupField ? "listbox" : void 0,
      "aria-label": e.groupField ? L : void 0,
      "aria-hidden": e.groupField && !k ? !0 : void 0,
      "aria-setsize": e.groupField ? N : void 0,
      onMouseDown: e.onMouseDown,
      onBlur: e.onBlur,
      onScroll: e.onScroll,
      unselectable: "on"
    },
    T(),
    e.scroller && /* @__PURE__ */ l.createElement("div", { className: v(h.heightContainer({ c: f })) }, e.scroller)
  ) : Q();
};
export {
  me as default
};
