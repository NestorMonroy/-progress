/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as t from "react";
import { DropDownList as o } from "@progress/kno-react-dropdowns";
import { Button as a } from "@progress/kno-react-buttons";
import { Input as r } from "@progress/kno-react-inputs";
import { Label as i } from "@progress/kno-react-labels";
import { FieldWrapper as n } from "@progress/kno-react-form";
import { valueRender as c, itemRender as d } from "./utils.mjs";
import { xIcon as m } from "@progress/kno-svg-icons";
const l = (e) => /* @__PURE__ */ t.createElement("div", { className: "k-taskboard-pane k-taskboard-edit-pane" }, /* @__PURE__ */ t.createElement("div", { className: "k-taskboard-pane-header" }, /* @__PURE__ */ t.createElement("div", { className: "k-taskboard-pane-header-text" }, e.header), /* @__PURE__ */ t.createElement("span", { className: "k-spacer" }), /* @__PURE__ */ t.createElement("div", { className: "k-taskboard-pane-header-actions" }, /* @__PURE__ */ t.createElement(a, { icon: "x", svgIcon: m, onClick: e.onClose }))), /* @__PURE__ */ t.createElement("div", { className: "k-taskboard-pane-content" }, /* @__PURE__ */ t.createElement("div", { role: "form", "data-role": "form", className: "k-form" }, /* @__PURE__ */ t.createElement(n, null, /* @__PURE__ */ t.createElement(i, { editorId: "title" }, e.titleLabel), /* @__PURE__ */ t.createElement(
  r,
  {
    id: "title",
    onChange: e.onTitleChange,
    value: e.title,
    title: e.titleInputTitle
  }
)), /* @__PURE__ */ t.createElement(n, null, /* @__PURE__ */ t.createElement(i, { editorId: "description" }, e.descriptionLabel), /* @__PURE__ */ t.createElement(
  r,
  {
    id: "description",
    onChange: e.onDescriptionChange,
    value: e.description,
    title: e.descriptionInputTitle
  }
)), /* @__PURE__ */ t.createElement(n, null, /* @__PURE__ */ t.createElement(i, { editorId: "priority" }, e.priorityLabel), /* @__PURE__ */ t.createElement(
  o,
  {
    id: "priority",
    data: e.priorities,
    value: e.priority,
    onChange: e.onPriorityChange,
    itemRender: d,
    valueRender: c,
    textField: "priority",
    dataItemKey: "priority",
    title: e.priorityDropDownTitle
  }
)))), /* @__PURE__ */ t.createElement("div", { className: "k-taskboard-pane-actions k-actions k-hstack k-justify-content-end" }, /* @__PURE__ */ t.createElement(a, { onClick: e.onClose }, e.cancelButton), /* @__PURE__ */ t.createElement(a, { onClick: e.onSave, disabled: !e.title || !e.description }, e.saveButton)));
l.propTypes = {};
l.displayName = "KendoReactTaskBoardEditPane";
export {
  l as TaskBoardTaskEditPane
};
