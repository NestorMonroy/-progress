/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as e from "react";
import o from "prop-types";
import { Dialog as g, DialogActionsBar as c } from "@progress/kno-react-dialogs";
import { Button as i } from "@progress/kno-react-buttons";
const t = (n) => {
  const { onClose: r, onConfirm: a, dialogMessage: l, dialogTitle: s, dialogConfirmButton: d, dialogCancelButton: m } = n;
  return /* @__PURE__ */ e.createElement(g, { title: s, closeIcon: !1 }, l, /* @__PURE__ */ e.createElement(c, { layout: "end" }, /* @__PURE__ */ e.createElement(i, { onClick: a }, d), /* @__PURE__ */ e.createElement(i, { onClick: r }, m)));
};
t.propTypes = {
  onClose: o.func.isRequired,
  onConfirm: o.func.isRequired,
  dialogMessage: o.string.isRequired,
  dialogTitle: o.string.isRequired,
  dialogConfirmButton: o.string.isRequired,
  dialogCancelButton: o.string.isRequired
};
t.displayName = "KendoReactTaskBoardConfirmDialog";
export {
  t as TaskBoardConfirmDialog
};
