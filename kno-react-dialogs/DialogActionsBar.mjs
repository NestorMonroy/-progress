/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as n from "react";
import t from "prop-types";
import { classNames as c } from "@progress/kno-react-common";
const i = (s) => {
  const e = {
    layout: "stretched",
    ...s
  }, { layout: o, children: a } = e, r = c("k-actions", "k-actions-horizontal", "k-window-actions k-dialog-actions", {
    [`k-actions-${o}`]: o
  });
  return /* @__PURE__ */ n.createElement("div", { className: r }, a);
};
i.propTypes = {
  children: t.any,
  layout: t.oneOf(["start", "center", "end", "stretched"])
};
export {
  i as DialogActionsBar
};
