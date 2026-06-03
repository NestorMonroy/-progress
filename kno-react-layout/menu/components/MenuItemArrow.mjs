/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as e from "react";
import { IconWrap as n } from "@progress/kno-react-common";
import { chevronLeftIcon as o, chevronRightIcon as t, chevronDownIcon as c } from "@progress/kno-svg-icons";
import { getChildrenPosition as i } from "../utils/misc.mjs";
const a = "chevron-down", m = "chevron-right", h = "chevron-left", d = (r) => {
  switch (i(r.itemId, r.verticalMenu === !0, r.dir === "rtl")) {
    case "downward":
      return { name: a, icon: c };
    case "rightward":
      return { name: m, icon: t };
    case "leftward":
      return { name: h, icon: o };
    default:
      return {};
  }
}, f = (r) => /* @__PURE__ */ e.createElement(n, { "aria-hidden": !0, ...d(r) });
export {
  f as MenuItemArrow,
  a as downArrowName,
  h as leftArrowName,
  m as rightArrowName
};
