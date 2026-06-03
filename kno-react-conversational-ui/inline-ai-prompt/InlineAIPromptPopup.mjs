/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as c from "react";
import { Popup as f } from "@progress/kno-react-popup";
const l = ({
  show: e = !1,
  anchor: r,
  onOpen: t,
  onClose: o,
  animate: p = !0,
  appendTo: m,
  popupOptions: n = {},
  children: a,
  style: u
}) => /* @__PURE__ */ c.createElement(
  f,
  {
    show: e,
    anchor: r,
    style: u,
    animate: p,
    appendTo: m,
    onOpen: t,
    onClose: o,
    ...n
  },
  a
);
export {
  l as InlineAIPromptPopup
};
