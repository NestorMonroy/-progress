/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
import * as a from "react";
import { Draggable as k, IconWrap as l, Keys as r } from "@progress/kno-react-common";
import { sortAscSmallIcon as C, sortDescSmallIcon as D, xCircleIcon as R } from "@progress/kno-svg-icons";
const I = (n) => {
  const o = a.useRef(null), s = (e) => {
    const t = o.current && o.current.element;
    t && n.onPress && n.onPress(e.event, t);
  }, i = (e) => {
    const t = o.current && o.current.element;
    t && n.onDrag && n.onDrag(e.event, t);
  }, m = (e) => {
    o.current && o.current.element && n.onRelease && n.onRelease(e.event);
  }, u = (e) => {
    if (e.preventDefault(), n.onSortChange) {
      const t = n.dir === "asc" ? "desc" : "asc";
      n.onSortChange(e, t);
    }
  }, d = (e) => {
    (e.keyCode === r.delete || e.keyCode === r.backspace) && (e.preventDefault(), e.stopPropagation(), n.onRemove && n.onRemove(e));
  }, f = (e) => {
    e.preventDefault(), e.stopPropagation(), n.onRemove && n.onRemove(e);
  }, g = (e) => {
    const t = {
      title: n.title,
      dir: n.dir,
      index: n.index
    };
    n.onContextMenu && n.onContextMenu.call(void 0, e, { dataItem: { ...t } });
  }, { dir: c, title: h } = n;
  return /* @__PURE__ */ a.createElement(k, { onPress: s, onDrag: i, onRelease: m, ref: o }, /* @__PURE__ */ a.createElement(
    "div",
    {
      className: "k-chip",
      onClick: u,
      onContextMenu: g,
      onKeyDown: d,
      tabIndex: 0,
      role: "button",
      style: { touchAction: "none" }
    },
    /* @__PURE__ */ a.createElement("span", null, /* @__PURE__ */ a.createElement(
      l,
      {
        name: "sort-" + c + "-small",
        icon: c === "asc" ? C : D,
        size: "small"
      }
    )),
    /* @__PURE__ */ a.createElement("span", { className: "k-chip-content" }, /* @__PURE__ */ a.createElement("span", { className: "k-chip-label" }, h)),
    /* @__PURE__ */ a.createElement("span", { className: "k-chip-actions" }, /* @__PURE__ */ a.createElement("span", { className: "k-chip-action k-chip-remove-action", onClick: f }, /* @__PURE__ */ a.createElement(l, { name: "x-circle", icon: R, size: "small" })))
  ));
};
export {
  I as GroupingIndicator
};
