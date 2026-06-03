/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as r from "react";
import { TreeList as m } from "./TreeList.mjs";
import { useMergedRef as o, useWebMcpRegister as s } from "@progress/kno-react-common";
const a = r.forwardRef((e, t) => {
  const [i, f] = o(t);
  return s("treelist", i, e, e.webMcp), /* @__PURE__ */ r.createElement(m, { ...e, ref: f });
});
a.displayName = "KendoReactTreeList";
export {
  a as TreeListWrapper
};
