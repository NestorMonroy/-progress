/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as r from "react";
import { Editor as d } from "./Editor.mjs";
import { useMergedRef as f, useWebMcpRegister as m } from "@progress/kno-react-common";
const a = r.forwardRef((e, t) => {
  const [o, i] = f(t);
  return m("editor", o, e, e.webMcp), /* @__PURE__ */ r.createElement(d, { ...e, ref: i });
});
a.displayName = "KendoReactEditor";
export {
  a as EditorWrapper
};
