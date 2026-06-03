/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as r from "react";
import { Chart as m } from "./Chart.mjs";
import { useMergedRef as o, useWebMcpRegister as c } from "@progress/kno-react-common";
const n = r.forwardRef((e, t) => {
  const [a, f] = o(t);
  return c("chart", a, e, e.webMcp), /* @__PURE__ */ r.createElement(m, { ...e, ref: f });
});
n.displayName = "KendoReactChart";
export {
  n as ChartWrapper
};
