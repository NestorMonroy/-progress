/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as t from "react";
import { Button as r } from "@progress/kno-react-buttons";
import { useLocalization as s } from "@progress/kno-react-intl";
import { xIcon as c } from "@progress/kno-svg-icons";
import { dialogsWindowCloseButton as a, messages as m } from "./messages/index.mjs";
const b = ({
  children: i,
  onCloseButtonClick: o,
  id: e,
  closeIcon: l
}) => {
  const n = s();
  return /* @__PURE__ */ t.createElement("div", { className: "k-window-titlebar k-dialog-titlebar", id: e }, /* @__PURE__ */ t.createElement("span", { className: "k-window-title k-dialog-title" }, i), l && /* @__PURE__ */ t.createElement("div", { className: "k-window-titlebar-actions k-dialog-titlebar-actions" }, /* @__PURE__ */ t.createElement(
    r,
    {
      "aria-label": n.toLanguageString(
        a,
        m[a]
      ),
      size: "xs",
      onClick: o,
      icon: "x",
      svgIcon: c,
      fillMode: "flat",
      className: "k-window-titlebar-action k-dialog-titlebar-action"
    }
  )));
};
export {
  b as DialogTitleBar
};
