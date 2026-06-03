/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as a from "react";
import z from "prop-types";
import { Card as K } from "@progress/kno-react-layout";
import { TASKBOARD_PLACEHOLDER as N } from "./constants.mjs";
import { useLocalization as j } from "@progress/kno-react-intl";
import { taskBoardEditCardButton as B, messages as t, taskBoardDeleteCardButton as p, taskBoardPreviewPaneEditBtn as D, taskBoardPreviewPaneDeleteBtn as T, taskBoardPreviewPanePriorityLabel as w, taskBoardDeleteTaskCancelButton as P, taskBoardDeleteTaskConfirmButton as C, taskBoardDeleteTaskDialogTitle as h, taskBoardDeleteTaskDialogMessage as S } from "./messages/index.mjs";
import { TaskBoardCardHeader as q } from "./card/CardHeader.mjs";
import { TaskBoardCardBody as _ } from "./card/CardBody.mjs";
import { TaskBoardConfirmDialog as F } from "./TaskBoardConfirmDialog.mjs";
import { TaskBoardPreviewDialog as G } from "./card/PreviewDialog.mjs";
import { pencilIcon as J, trashIcon as Q } from "@progress/kno-svg-icons";
const v = (n) => {
  const { onDeleteTask: L, showEditPane: g, task: r, style: b, dragTargetRef: i, elementRef: y } = n, [s, o] = a.useState(!1), [l, m] = a.useState(!1), [E, u] = a.useState(!1), d = a.useRef(null), e = j(), M = [
    {
      text: e.toLanguageString(B, t[B]),
      icon: "pencil",
      svgIcon: J,
      data: () => {
        g(r), o(!s);
      }
    },
    {
      text: e.toLanguageString(p, t[p]),
      icon: "trash",
      svgIcon: Q,
      data: () => {
        m(!l), o(!s);
      }
    }
  ], R = (c) => {
    c.item.data();
  }, I = () => {
    o(!0);
  }, x = () => {
    o(!1);
  }, H = (c) => {
    const k = d.current && d.current.element;
    k && k.contains(c.relatedTarget) || o(!1);
  }, V = () => {
    m(!l);
  }, f = () => {
    u(!0);
  }, A = () => {
    u(!1);
  }, O = () => {
    g(r), f();
  };
  return r.isPlaceholder && i && i.current ? /* @__PURE__ */ a.createElement(
    "div",
    {
      style: { width: i.current.width, height: i.current.height },
      className: "k-taskboard-drag-placeholder",
      [N]: !0
    }
  ) : /* @__PURE__ */ a.createElement(
    n.cardComponent,
    {
      task: r,
      style: b,
      tabIndex: n.tabIndex,
      disabled: n.disabled,
      elementRef: y,
      showMenu: s,
      showDeleteConfirm: l,
      showTaskPreviewPane: E,
      menuItems: M,
      popupRef: d,
      confirmDialogMessage: e.toLanguageString(
        S,
        t[S]
      ),
      confirmDialogTitle: e.toLanguageString(
        h,
        t[h]
      ),
      confirmDialogConfirmButton: e.toLanguageString(
        C,
        t[C]
      ),
      confirmDialogCancelButton: e.toLanguageString(
        P,
        t[P]
      ),
      previewDialogPriorityLabel: e.toLanguageString(
        w,
        t[w]
      ),
      previewDialogDelete: e.toLanguageString(
        T,
        t[T]
      ),
      previewDialogEdit: e.toLanguageString(
        D,
        t[D]
      ),
      onShowPreviewPane: f,
      onClosePreviewPane: A,
      onMenuItemSelect: R,
      onShowMenu: I,
      onHideMenu: x,
      onMenuButtonBlur: H,
      onTaskDelete: L,
      onTaskEdit: O,
      onCloseConfirmDialog: V,
      card: K,
      cardHeader: q,
      cardBody: _,
      confirmDialog: F,
      previewDialog: G
    }
  );
};
v.propTypes = {
  task: z.object.isRequired
};
v.displayName = "KendoReactTaskBoardCardBase";
export {
  v as TaskBoardCardBase
};
