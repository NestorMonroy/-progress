/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as r from "react";
import { DateTimePicker as a } from "./datetimepicker/DateTimePicker.mjs";
import { useMergedRef as c, useWebMcpRegister as f } from "@progress/kno-react-common";
const o = r.forwardRef((e, t) => {
  const [i, m] = c(t);
  return f("datetimepicker", i, e, e.webMcp), /* @__PURE__ */ r.createElement(a, { ...e, ref: m });
});
o.displayName = "KendoReactDateTimePicker";
export {
  o as DateTimePickerWrapper
};
