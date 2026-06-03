/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as r from "react";
import { Map as f } from "./Map.mjs";
import { useMergedRef as o, useWebMcpRegister as p } from "@progress/kno-react-common";
const c = r.forwardRef((e, a) => {
  const [t, m] = o(a);
  return p("map", t, e, e.webMcp), /* @__PURE__ */ r.createElement(f, { ...e, ref: m });
});
c.displayName = "KendoReactMap";
export {
  c as MapWrapper
};
