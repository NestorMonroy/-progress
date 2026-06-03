/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as t from "react";
import { classNames as a } from "@progress/kno-react-common";
import { TASKBOARD_TASK as n, TASKBOARD_ITEM_ID as i, TASKBOARD_ITEM_TYPE as l } from "../constants.mjs";
const o = (e) => /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement(
  e.card,
  {
    key: String(e.task.id),
    ref: e.elementRef,
    style: e.style,
    className: a("k-taskboard-card", {
      "k-disabled": e.disabled
    }),
    [l]: n,
    [i]: e.task.id,
    tabIndex: e.tabIndex,
    role: "listitem"
  },
  /* @__PURE__ */ t.createElement(
    e.cardHeader,
    {
      showMenu: e.showMenu,
      menuItems: e.menuItems,
      popupRef: e.popupRef,
      title: e.task.title,
      task: e.task,
      onShowPreviewPane: e.onShowPreviewPane,
      onShowMenu: e.onShowMenu,
      onHideMenu: e.onHideMenu,
      onMenuButtonBlur: e.onMenuButtonBlur,
      onMenuItemSelect: e.onMenuItemSelect
    }
  ),
  /* @__PURE__ */ t.createElement(e.cardBody, { task: e.task }, e.task.description)
), e.showDeleteConfirm && /* @__PURE__ */ t.createElement(
  e.confirmDialog,
  {
    onConfirm: e.onTaskDelete,
    onClose: e.onCloseConfirmDialog,
    dialogMessage: e.confirmDialogMessage,
    dialogTitle: e.confirmDialogTitle,
    dialogConfirmButton: e.confirmDialogConfirmButton,
    dialogCancelButton: e.confirmDialogCancelButton
  }
), e.showTaskPreviewPane && /* @__PURE__ */ t.createElement(
  e.previewDialog,
  {
    title: e.task.title,
    description: e.task.description,
    priorityLabel: e.previewDialogPriorityLabel,
    delete: e.previewDialogDelete,
    edit: e.previewDialogEdit,
    onClosePreviewPane: e.onClosePreviewPane,
    onTaskDelete: e.onTaskDelete,
    onTaskEdit: e.onTaskEdit,
    priority: e.task.priority
  }
));
o.displayName = "KendoReactTaskBoardCard";
export {
  o as TaskBoardCard
};
