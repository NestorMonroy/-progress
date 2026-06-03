/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as t from "react";
import { Button as l } from "@progress/kno-react-buttons";
import { Input as o } from "@progress/kno-react-inputs";
import { classNames as i } from "@progress/kno-react-common";
import { pencilIcon as c, plusIcon as d, xIcon as m } from "@progress/kno-svg-icons";
const r = (e) => {
  const { edit: a, title: n } = e.column;
  return /* @__PURE__ */ t.createElement("div", { className: "k-taskboard-column-header" }, /* @__PURE__ */ t.createElement("div", { className: "k-taskboard-column-header-text k-text-ellipsis", id: e.columnHeaderId }, a ? /* @__PURE__ */ t.createElement(
    o,
    {
      value: n,
      onChange: e.onTitleChange,
      onBlur: e.onColumnExitEdit,
      autoFocus: !0
    }
  ) : n), /* @__PURE__ */ t.createElement("span", { className: "k-spacer" }), /* @__PURE__ */ t.createElement("div", { className: i("k-taskboard-column-header-actions", { "k-disabled": a }) }, /* @__PURE__ */ t.createElement(
    l,
    {
      fillMode: "flat",
      icon: "pencil",
      svgIcon: c,
      "aria-label": e.editButtonTitle,
      title: e.editButtonTitle,
      onClick: e.onColumnEnterEdit
    }
  ), /* @__PURE__ */ t.createElement(
    l,
    {
      fillMode: "flat",
      icon: "plus",
      svgIcon: d,
      "aria-label": e.addButtonTitle,
      title: e.addButtonTitle,
      onClick: e.onShowAddCardDialog
    }
  ), /* @__PURE__ */ t.createElement(
    l,
    {
      fillMode: "flat",
      icon: "x",
      svgIcon: m,
      "aria-label": e.closeButtonTitle,
      title: e.closeButtonTitle,
      onClick: e.onColumnDelete
    }
  )));
};
r.displayName = "KendoReactTaskBoardColumnHeader";
export {
  r as TaskBoardColumnHeader
};
