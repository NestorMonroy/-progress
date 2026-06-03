/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as o from "react";
import { ComboBox as f } from "./ComboBox/ComboBox.mjs";
import { useMergedRef as a, useWebMcpRegister as c } from "@progress/kno-react-common";
const b = o.forwardRef((e, r) => {
  const [m, t] = a(r);
  return c("combobox", m, e, e.webMcp), /* @__PURE__ */ o.createElement(f, { ...e, ref: t });
});
b.displayName = "knoReactComboBox";
export {
  b as ComboBoxWrapper
};
