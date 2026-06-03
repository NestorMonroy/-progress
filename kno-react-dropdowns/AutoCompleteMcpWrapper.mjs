/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as t from "react";
import { AutoComplete as a } from "./AutoComplete/AutoComplete.mjs";
import { useMergedRef as f, useWebMcpRegister as p } from "@progress/kno-react-common";
const c = t.forwardRef((e, o) => {
  const [r, m] = f(o);
  return p("autocomplete", r, e, e.webMcp), /* @__PURE__ */ t.createElement(a, { ...e, ref: m });
});
c.displayName = "knoReactAutoComplete";
export {
  c as AutoCompleteWrapper
};
