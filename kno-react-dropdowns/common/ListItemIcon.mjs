/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as a from "react";
import { IconWrap as r, toIconName as n } from "@progress/kno-react-common";
const m = ({ icon: e, svgIcon: t }) => t || e ? /* @__PURE__ */ a.createElement("span", { className: "k-list-item-icon-wrapper", role: "presentation" }, /* @__PURE__ */ a.createElement(
  r,
  {
    className: "k-list-item-icon",
    name: e ? n(e) : void 0,
    icon: t,
    "aria-hidden": "true"
  }
)) : null;
export {
  m as ListItemIcon
};
