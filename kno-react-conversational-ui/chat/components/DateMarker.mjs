/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as a from "react";
import { useInternationalization as o } from "@progress/kno-react-intl";
const s = ({ item: t, timestampTemplate: m }) => {
  const n = o(), e = m;
  return /* @__PURE__ */ a.createElement("div", { className: "k-timestamp" }, e ? /* @__PURE__ */ a.createElement(e, { item: t }) : n.formatDate(t.timestamp, "D"));
};
export {
  s as default
};
