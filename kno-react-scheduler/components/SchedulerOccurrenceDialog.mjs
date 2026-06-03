/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as e from "react";
import * as T from "react-dom";
import { Dialog as z, DialogActionsBar as y } from "@progress/kno-react-dialogs";
import { useLocalization as B } from "@progress/kno-react-intl";
import { messages as H, deleteRecurringDialogTitle as I, editorRecurringDialogTitle as L, deleteRecurringConfirmation as w, editorRecurringConfirmation as x, deleteOccurrence as A, editorOccurrence as K, deleteSeries as N, editorSeries as P } from "../messages/index.mjs";
import { canUseDOM as U } from "@progress/kno-react-common";
import { Button as s } from "@progress/kno-react-buttons";
const j = e.forwardRef((a, u) => {
  const { isRemove: n, onClose: o, onSeriesClick: i, onOccurrenceClick: l } = a, c = e.useRef(null);
  e.useImperativeHandle(c, () => ({ props: a })), e.useImperativeHandle(
    u,
    () => c.current
  );
  const g = B(), r = (t) => g.toLanguageString(t, H[t]), d = r(K), m = r(P), f = r(x), C = r(L), M = r(A), R = r(N), S = r(I), v = r(w), D = n ? S : C, O = n ? v : f, k = n ? M : d, p = n ? R : m, h = e.useCallback(
    ({ syntheticEvent: t }) => {
      o && o.call(void 0, { syntheticEvent: t, value: null, target: c.current });
    },
    [o]
  ), b = e.useCallback(
    (t) => {
      i && i.call(void 0, { syntheticEvent: t, value: null, target: c.current });
    },
    [i]
  ), E = e.useCallback(
    (t) => {
      l && l.call(void 0, { syntheticEvent: t, value: null, target: c.current });
    },
    [l]
  );
  return U ? T.createPortal(
    /* @__PURE__ */ e.createElement(z, { title: D, onClose: h }, O, /* @__PURE__ */ e.createElement(y, null, /* @__PURE__ */ e.createElement(s, { onClick: E }, k), /* @__PURE__ */ e.createElement(s, { onClick: b }, p))),
    document && document.body
  ) : null;
});
j.displayName = "KendoReactSchedulerSchedulerOccurrenceDialog";
export {
  j as SchedulerOccurrenceDialog
};
