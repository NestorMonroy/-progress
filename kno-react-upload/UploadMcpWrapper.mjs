/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as r from "react";
import { Upload as d } from "./Upload.mjs";
import { useMergedRef as f, useWebMcpRegister as m } from "@progress/kno-react-common";
const p = r.forwardRef((e, o) => {
  const [a, t] = f(o);
  return m("upload", a, e, e.webMcp), /* @__PURE__ */ r.createElement(d, { ...e, ref: t });
});
p.displayName = "KendoReactUpload";
export {
  p as UploadWrapper
};
