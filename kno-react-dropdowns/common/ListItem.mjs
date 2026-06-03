/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as n from "react";
import { useUnstyled as N, classNames as C, uDropDownsBase as p } from "@progress/kno-react-common";
import { getItemValue as o } from "./utils.mjs";
import { Checkbox as S } from "@progress/kno-react-inputs";
import { ListItemIcon as w } from "./ListItemIcon.mjs";
const R = (i) => {
  const {
    selected: r,
    dataItem: e,
    virtual: x,
    disabled: l,
    id: v,
    focused: b,
    render: a,
    actionsField: d,
    descriptionField: m,
    iconField: c,
    svgIconField: s,
    checkboxField: u
  } = i, f = N(), k = f && f.uDropDownsBase, g = (t) => i.onClick(i.index, t), I = () => {
    if (!u)
      return null;
    const t = o(e, u) || !1;
    return /* @__PURE__ */ n.createElement("span", { className: "k-checkbox-wrap" }, /* @__PURE__ */ n.createElement(
      S,
      {
        checked: t,
        onChange: (D) => {
          e.onCheckboxChange && e.onCheckboxChange(e, D.value);
        }
      }
    ));
  }, E = () => d ? o(e, d) : null, F = () => {
    if (!m)
      return null;
    const t = o(e, m);
    return t ? /* @__PURE__ */ n.createElement("span", { className: "k-list-item-description" }, t) : null;
  }, h = /* @__PURE__ */ n.createElement(
    "li",
    {
      id: v,
      role: "option",
      "aria-selected": r,
      "aria-disabled": l ? !0 : void 0,
      className: C(
        p.li({
          c: k,
          selected: r,
          focused: b,
          disabled: l
        })
      ),
      onClick: g,
      style: { position: x ? "relative" : "unset" }
    },
    I(),
    (s || c) && /* @__PURE__ */ n.createElement(
      w,
      {
        icon: c ? o(e, c) : void 0,
        svgIcon: s ? o(e, s) : void 0
      }
    ),
    /* @__PURE__ */ n.createElement("span", { className: C(p.itemText({ c: k })) }, o(e, i.textField).toString()),
    E(),
    F()
  );
  return a !== void 0 ? a(h, i) : h;
};
export {
  R as default
};
