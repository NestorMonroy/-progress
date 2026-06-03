/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as o from "react";
import * as p from "react-dom";
import { Dialog as M, DialogActionsBar as k } from "@progress/kendo-react-dialogs";
import { useLocalization as b } from "@progress/kendo-react-intl";
import { messages as E, deleteDialogTitle as z, deleteConfirmation as I, editorDelete as R, editorCancel as B } from "../messages/index.mjs";
import { canUseDOM as L } from "@progress/kendo-react-common";
import { Button as i } from "@progress/kendo-react-buttons";
const G = (c) => {
  const { onClose: a, onCancel: l, onConfirm: n, dataItem: r } = c, m = b(), t = (e) => m.toLanguageString(e, E[e]), s = t(R), d = t(B), u = t(I), C = t(z), f = o.useCallback(
    ({ syntheticEvent: e }) => {
      a && a.call(void 0, {
        syntheticEvent: e,
        nativeEvent: e && e.nativeEvent,
        dataItem: null
      });
    },
    [a]
  ), g = o.useCallback(
    (e) => {
      l && l.call(void 0, {
        syntheticEvent: e,
        nativeEvent: e && e.nativeEvent,
        dataItem: null
      });
    },
    [l]
  ), v = o.useCallback(
    (e) => {
      n && n.call(void 0, {
        syntheticEvent: e,
        nativeEvent: e && e.nativeEvent,
        dataItem: r
      });
    },
    [n, r]
  ), D = /* @__PURE__ */ o.createElement(M, { title: C, onClose: f }, u, /* @__PURE__ */ o.createElement(k, { layout: "end" }, /* @__PURE__ */ o.createElement(i, { themeColor: "primary", onClick: v }, s), /* @__PURE__ */ o.createElement(i, { onClick: g }, d)));
  return L ? p.createPortal(D, document && document.body) : null;
};
export {
  G as GanttRemoveDialog
};
