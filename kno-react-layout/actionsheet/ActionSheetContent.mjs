/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as o from "react";
import n from "prop-types";
import { classNames as s } from "@progress/kno-react-common";
const a = "ActionSheetContent", e = (t) => /* @__PURE__ */ o.createElement("div", { className: s("k-actionsheet-content", t.className) }, t.children);
e.propTypes = {
  className: n.string
};
e.displayName = a;
e.propTypes = {
  children: n.any
};
export {
  e as ActionSheetContent,
  a as contentDisplayName
};
