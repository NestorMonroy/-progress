/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as t from "react";
import { classNames as i } from "@progress/kno-react-common";
import { TASKBOARD_COLUMN as l, TASKBOARD_ITEM_ID as o, TASKBOARD_ITEM_TYPE as d } from "../constants.mjs";
import { TaskBoardTaskEditPane as a } from "../TaskBoardTaskEditPane.mjs";
const m = (e) => {
  const n = t.useId();
  return /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement(
    "div",
    {
      ref: e.elementRef,
      style: e.style,
      className: i("k-taskboard-column", {
        "k-taskboard-column-edit": e.column.edit
      }),
      tabIndex: e.tabIndex,
      [d]: l,
      [o]: e.column.id
    },
    /* @__PURE__ */ t.createElement(
      e.header,
      {
        column: e.column,
        tasks: e.tasks,
        columnHeaderId: n,
        onTitleChange: e.onTitleChange,
        onColumnExitEdit: e.onColumnExitEdit,
        editButtonTitle: e.editButtonTitle,
        onColumnEnterEdit: e.onColumnEnterEdit,
        addButtonTitle: e.addButtonTitle,
        onShowAddCardDialog: e.onShowAddCardDialog,
        closeButtonTitle: e.closeButtonTitle,
        onColumnDelete: e.onColumnDelete
      }
    ),
    /* @__PURE__ */ t.createElement(e.body, { columnHeaderId: n }, e.children)
  ), e.showAddCard && /* @__PURE__ */ t.createElement(
    e.addCardDialog,
    {
      onClose: e.onCloseDialog,
      onSave: e.onTaskCreate,
      priorities: e.priorities,
      editPane: a
    }
  ), e.showEditCard && e.editedTask && /* @__PURE__ */ t.createElement(
    e.editCardDialog,
    {
      onClose: e.onCloseDialog,
      onSave: e.onTaskEdit,
      task: e.editedTask,
      priorities: e.priorities,
      editPane: a
    }
  ), e.showColumnConfirmDelete && /* @__PURE__ */ t.createElement(
    e.confirmDialog,
    {
      onClose: e.onColumnDelete,
      onConfirm: e.onColumnConfirmDelete,
      dialogMessage: e.confirmDialogMessage,
      dialogTitle: e.confirmDialogTitle,
      dialogConfirmButton: e.confirmDialogConfirmButton,
      dialogCancelButton: e.confirmDialogCancelButton
    }
  ));
};
m.displayName = "KendoReactTaskBoardColumn";
export {
  m as TaskBoardColumn
};
