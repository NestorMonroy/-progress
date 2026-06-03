/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as t from "react";
import { Fade as r } from "@progress/kno-react-animation";
import { Notification as l } from "@progress/kno-react-notification";
const c = (o) => {
  const { show: e, text: n } = o, a = () => ({
    position: "absolute",
    top: "90%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1e3,
    pointerEvents: e ? "auto" : "none"
  });
  return /* @__PURE__ */ t.createElement("div", { style: a() }, /* @__PURE__ */ t.createElement(r, null, e && /* @__PURE__ */ t.createElement(l, { type: { style: "inverse" }, closable: !1 }, /* @__PURE__ */ t.createElement("span", null, n))));
};
export {
  c as default
};
