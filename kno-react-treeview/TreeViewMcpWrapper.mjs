/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as r from "react";
import { TreeView as f } from "./TreeView.mjs";
import { useMergedRef as m, useWebMcpRegister as a, withIdHOC as c } from "@progress/kno-react-common";
const n = c(
  f
), w = r.forwardRef((e, t) => {
  const [i, o] = m(t);
  return a("treeview", i, e, e.webMcp), /* @__PURE__ */ r.createElement(n, { ...e, ref: o });
});
w.displayName = "KendoReactTreeView";
export {
  w as TreeViewWrapper
};
