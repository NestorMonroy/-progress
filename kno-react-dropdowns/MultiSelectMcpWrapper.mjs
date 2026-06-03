/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as t from "react";
import { MultiSelect as l } from "./MultiSelect/MultiSelect.mjs";
import { useMergedRef as m, useWebMcpRegister as f } from "@progress/kno-react-common";
const o = t.forwardRef((e, r) => {
  const [c, i] = m(r);
  return f("multiselect", c, e, e.webMcp), /* @__PURE__ */ t.createElement(l, { ...e, ref: i });
});
o.displayName = "knoReactMultiSelect";
export {
  o as MultiSelectWrapper
};
