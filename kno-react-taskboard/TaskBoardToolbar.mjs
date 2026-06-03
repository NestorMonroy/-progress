/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as a from "react";
import t from "prop-types";
import { classNames as m } from "@progress/kno-react-common";
const o = (e) => {
  const { className: r, style: s, children: l } = e;
  return /* @__PURE__ */ a.createElement("div", { style: s, className: m("k-taskboard-header", r) }, /* @__PURE__ */ a.createElement("div", { className: "k-taskboard-toolbar k-toolbar", role: "toolbar", "aria-label": "Toolbar" }, l));
};
o.propTypes = {
  children: t.node
};
o.displayName = "KendoReactTaskBoardToolbar";
export {
  o as TaskBoardToolbar
};
