/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as r from "react";
import { TimePicker as c } from "./timepicker/TimePicker.mjs";
import { useMergedRef as f, useWebMcpRegister as o } from "@progress/kno-react-common";
const a = r.forwardRef((e, i) => {
  const [m, t] = f(i);
  return o("timepicker", m, e, e.webMcp), /* @__PURE__ */ r.createElement(c, { ...e, ref: t });
});
a.displayName = "knoReactTimePicker";
export {
  a as TimePickerWrapper
};
