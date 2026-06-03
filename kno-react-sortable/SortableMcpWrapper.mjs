/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as r from "react";
import { Sortable as f } from "./Sortable.mjs";
import { useMergedRef as m, useWebMcpRegister as c } from "@progress/kno-react-common";
const n = r.forwardRef((e, t) => {
  const [o, a] = m(t);
  return c("sortable", o, e, e.webMcp), /* @__PURE__ */ r.createElement(f, { ...e, ref: a });
});
n.displayName = "KendoReactSortable";
export {
  n as SortableWrapper
};
