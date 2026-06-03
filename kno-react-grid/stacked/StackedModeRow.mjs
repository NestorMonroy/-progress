/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as e from "react";
import { GridGroupCellToggle as H } from "../cells/groupcell/GridGroupCellToggle.mjs";
import { GridRow as O } from "../rows/GridRow.mjs";
import { GridStackedRow as P } from "./GridStackedRow.mjs";
const K = ({
  item: t,
  rowId: d,
  dataIndex: m,
  idPrefix: h,
  ariaRowIndex: u,
  absoluteRowIndex: f,
  isAltRow: k,
  isHidden: x,
  isRowReorderable: F,
  rowHeight: G,
  rows: A,
  leafColumns: p,
  groupLevelCount: y,
  stackedLayoutSettings: I,
  cells: j,
  editMode: D,
  isSelected: v,
  isHighlighted: R,
  isInEdit: E,
  preparedCells: w,
  showDetailToggle: B,
  isDetailExpanded: L,
  detailExpandField: M,
  isPinned: V
}) => {
  var T, $, C;
  if (t.rowType === "data")
    return /* @__PURE__ */ e.createElement(
      P,
      {
        key: d,
        dataItem: t.dataItem,
        columns: p,
        stackedLayoutSettings: I,
        isAltRow: k,
        isSelected: v,
        isInEdit: E,
        cells: j,
        dataIndex: m,
        idPrefix: h,
        ariaRowIndex: u,
        absoluteRowIndex: f,
        groupLevel: y,
        preparedCells: w,
        editMode: D,
        showDetailToggle: B,
        isDetailExpanded: L,
        detailExpandField: M,
        isPinned: V
      }
    );
  const _ = y + 1, S = t.level || 0, b = Math.max(1, _ - S), N = Array.from({ length: S }, (c, r) => /* @__PURE__ */ e.createElement("td", { key: `group-cell-${d}-${r}`, className: "k-table-group-td k-group-cell k-table-td" }));
  let g;
  if (t.rowType === "groupHeader") {
    const c = (T = t.dataItem) == null ? void 0 : T.field, r = ($ = t.dataItem) == null ? void 0 : $.value, i = c !== void 0 ? (() => {
      const l = String(c), n = p.find((o) => o.field === l), s = n == null ? void 0 : n.title;
      return typeof s == "string" && s.length ? s : l;
    })() : void 0;
    let a = "";
    if (c !== void 0) {
      let l;
      r instanceof Date ? l = r.toString() : l = String(r), a = `${i}: ${l}`;
    } else r instanceof Date ? a = r.toString() : r !== void 0 && (a = String(r));
    g = /* @__PURE__ */ e.createElement(e.Fragment, null, N, /* @__PURE__ */ e.createElement("td", { className: "k-table-td", colSpan: b, role: "gridcell", "aria-expanded": t.expanded }, /* @__PURE__ */ e.createElement("p", { className: "k-reset" }, /* @__PURE__ */ e.createElement(
      H,
      {
        id: "",
        dataItem: t.dataItem,
        dataIndex: t.dataIndex,
        field: "value",
        expanded: t.expanded,
        group: t.group,
        columnPosition: {},
        ariaColumnIndex: 1,
        isSelected: !1
      }
    ), /* @__PURE__ */ e.createElement("span", { className: "k-value" }, a))));
  } else {
    const c = p.filter((a) => {
      const l = !!a._type, n = a.isAccessible === !1;
      return !a.hidden && !l && !n && (a.columnType === "data" || a.columnType === void 0);
    }), r = (C = t.dataItem) == null ? void 0 : C.aggregates, i = c.map((a) => {
      const l = a.field;
      if (!l || !r)
        return null;
      const n = r[l];
      if (!n || typeof n != "object")
        return null;
      const s = Object.keys(n).filter((o) => n[o] !== void 0 && n[o] !== null).map((o) => `${o.length ? `${o.charAt(0).toUpperCase()}${o.slice(1)}` : o}: ${String(n[o])}`);
      return s.length === 0 ? null : /* @__PURE__ */ e.createElement("div", { key: `agg-${d}-${l}`, className: "k-grid-template-column" }, /* @__PURE__ */ e.createElement("p", { className: "k-grid-template-column-header" }, a.title || l), /* @__PURE__ */ e.createElement("p", { className: "k-reset" }, s.join(", ")));
    }).filter(Boolean);
    if (t.rowType === "groupFooter" && i.length === 0)
      return /* @__PURE__ */ e.createElement(e.Fragment, { key: d });
    g = /* @__PURE__ */ e.createElement(e.Fragment, null, N, /* @__PURE__ */ e.createElement("td", { className: "k-table-td", colSpan: b }, /* @__PURE__ */ e.createElement("div", { className: "k-grid-column-template" }, i)));
  }
  return /* @__PURE__ */ e.createElement(
    O,
    {
      key: d,
      dataItem: t.dataItem,
      isAltRow: k,
      isInEdit: E,
      rowType: t.rowType,
      isRowReorderable: F,
      isHidden: x,
      onClick: null,
      onDoubleClick: null,
      rowHeight: G,
      ariaRowIndex: u,
      absoluteRowIndex: f,
      dataIndex: m,
      isSelected: v,
      isHighlighted: R,
      rows: A
    },
    g
  );
};
export {
  K as StackedModeRow
};
