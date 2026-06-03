/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Button as r } from "@progress/kno-react-buttons";
import * as o from "react";
const n = (e) => {
  const { view: a, ...t } = e;
  return /* @__PURE__ */ o.createElement(r, { type: "button", fillMode: "flat", themeColor: "primary", ...t }, e.children);
};
export {
  n as CalendarHeaderTitle
};
