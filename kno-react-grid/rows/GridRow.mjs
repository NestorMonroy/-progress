/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
import * as i from "react";
import { useUnstyled as C, uGrid as T, classNames as k, useDroppable as v } from "@progress/kno-react-common";
import { GRID_ROW_INDEX_ATTRIBUTE as H } from "../constants/index.mjs";
import { GridContext as E } from "../utils/GridContext.mjs";
const P = (e) => {
  var u;
  const n = i.useContext(E), {
    reorderRowDropTargetRef: w,
    reorderRowDragTargetRef: r,
    activeDragRowDataItemRef: R
  } = n, { rowType: o, isAltRow: g, isInEdit: m, isSelected: h, isHighlighted: D, isPinned: f } = e, a = C(), I = a && a.uGrid ? a.uGrid : T, x = k(
    I.tr({
      selected: h,
      highlighted: D,
      isHeader: o === "groupHeader",
      isFooter: o === "groupFooter",
      isMaster: o !== "groupHeader" && o !== "groupFooter",
      isAltRow: g,
      isInEdit: m,
      isPinned: f
    })
  ), l = i.useRef(null);
  v(l, {
    onDragOver: (t) => {
      if (e.isRowReorderable && R.current) {
        const b = t.originalEvent.target;
        w.current = b.closest(".k-table-row");
      }
    },
    onDrop: () => {
      r.current && e.isRowReorderable && (r.current.style.userSelect = "");
    }
  });
  const y = {
    onClick: (t) => n.rowClick(t, e.dataItem),
    onDoubleClick: (t) => n.rowDblClick(t, e.dataItem)
  }, s = {
    ref: l,
    id: e.id,
    ...y,
    className: x,
    style: {
      height: e.rowHeight ? e.rowHeight + "px" : "",
      visibility: e.isHidden ? "hidden" : "",
      userSelect: (u = r == null ? void 0 : r.current) == null ? void 0 : u.style.userSelect
    },
    role: "row",
    "aria-rowindex": e.ariaRowIndex,
    "absolute-row-index": e.absoluteRowIndex,
    [H]: e.rowType === "data" ? e.dataIndex : void 0
  }, c = e.rowType || "data", d = e.rows;
  if (d && d[c]) {
    const t = d[c];
    return /* @__PURE__ */ i.createElement(t, { key: e.absoluteRowIndex, ...e, trProps: s }, e.children);
  }
  return /* @__PURE__ */ i.createElement("tr", { key: e.absoluteRowIndex, ...s }, e.children);
};
export {
  P as GridRow
};
