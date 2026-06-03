/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as R from "react";
import { GridRow as z } from "./GridRow.mjs";
import { StackedModeRow as B } from "../stacked/StackedModeRow.mjs";
const F = ({
  isStackedMode: T,
  item: r,
  rowId: e,
  dataIndex: o,
  idPrefix: C,
  ariaRowIndex: m,
  absoluteRowIndex: t,
  isAltRow: c,
  isHidden: a,
  isRowReorderable: n,
  rowHeight: p,
  rows: f,
  leafColumns: D,
  groupLevelCount: E,
  stackedLayoutSettings: K,
  cells: M,
  editMode: N,
  isSelected: k,
  isHighlighted: u,
  isInEdit: y,
  preparedCells: l,
  showDetailToggle: j,
  isDetailExpanded: q,
  detailExpandField: v,
  isPinned: G
}) => T ? /* @__PURE__ */ R.createElement(
  B,
  {
    item: r,
    rowId: e,
    dataIndex: o,
    idPrefix: C,
    ariaRowIndex: m,
    absoluteRowIndex: t,
    isAltRow: c,
    isHidden: a,
    isRowReorderable: n,
    rowHeight: p,
    rows: f,
    leafColumns: D,
    groupLevelCount: E,
    stackedLayoutSettings: K,
    cells: M,
    editMode: N,
    isSelected: k,
    isHighlighted: u,
    isInEdit: y,
    preparedCells: l,
    showDetailToggle: j,
    isDetailExpanded: q,
    detailExpandField: v,
    isPinned: G
  }
) : /* @__PURE__ */ R.createElement(
  z,
  {
    key: e,
    dataItem: r.dataItem,
    isAltRow: c,
    isInEdit: y,
    rowType: r.rowType,
    isRowReorderable: n,
    isHidden: a,
    onClick: null,
    onDoubleClick: null,
    rowHeight: p,
    ariaRowIndex: m,
    absoluteRowIndex: t,
    dataIndex: o,
    isSelected: k,
    isHighlighted: u,
    rows: f,
    isPinned: G
  },
  l
);
F.displayName = "KendoReactGridRowRenderer";
export {
  F as GridRowRenderer
};
