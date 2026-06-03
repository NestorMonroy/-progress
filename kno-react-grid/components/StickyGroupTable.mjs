/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
import * as s from "react";
import { useUnstyled as T, uGrid as v, classNames as f, getter as z } from "@progress/kno-react-common";
import { GridContext as F } from "../utils/GridContext.mjs";
import { GridRowRenderer as K } from "../rows/GridRowRenderer.mjs";
import { getRowContents as L } from "../getRowContents.mjs";
const j = ({
  size: p,
  colGroups: u,
  dataRowContext: o,
  position: k,
  isStackedMode: I,
  groupLevelCount: b,
  stackedLayoutSettings: C,
  rowHeight: g
}) => {
  const n = T(), c = n != null && n.uGrid ? n.uGrid : v, e = s.useContext(F), r = k === "top", a = r ? e.stickyHeaderRef : e.stickyFooterRef, R = (r ? e.stickyHeaderItems : e.stickyFooterItems) || [], G = R.length > 0, w = f(c.stickyContainer({ bottom: !r })), E = f(c.table({ size: p })), i = s.useRef(null), H = r ? e.stickyHeaderTableRef : e.stickyFooterTableRef;
  s.useImperativeHandle(H, () => ({
    setWidth: (t) => {
      i.current && (i.current.style.width = t ? t + "px" : "");
    },
    setScrollLeft: (t) => {
      a.current && a.current.scrollLeft !== t && (a.current.scrollLeft = t);
    }
  }));
  const N = s.useCallback(
    (t) => {
      var l;
      (l = e.columnResizeRef) != null && l.current && (r ? e.columnResizeRef.current.colGroupStickyHeader = t : e.columnResizeRef.current.colGroupStickyFooter = t);
    },
    [e.columnResizeRef, r]
  ), S = u ? s.cloneElement(u, { colGroupRef: N }) : null, h = () => R.map((t, l) => {
    const { item: d, flatIndex: y } = t, m = o.dataItemKey && z(o.dataItemKey)(d.dataItem) || "ai" + y, x = L(o, {}, d, m, l, !1);
    return /* @__PURE__ */ s.createElement(
      K,
      {
        key: m,
        isStackedMode: !!I,
        item: d,
        rowId: m,
        dataIndex: -1,
        ariaRowIndex: l,
        absoluteRowIndex: y,
        isAltRow: !1,
        isHidden: !1,
        isRowReorderable: !1,
        rowHeight: g,
        rows: void 0,
        leafColumns: o.leafColumns,
        groupLevelCount: b || 0,
        stackedLayoutSettings: C,
        cells: o.cells,
        isSelected: !1,
        isInEdit: !1,
        preparedCells: x.row,
        showDetailToggle: !1,
        isDetailExpanded: !1
      }
    );
  });
  return /* @__PURE__ */ s.createElement(
    "div",
    {
      ref: a,
      className: w,
      style: {
        display: G ? "" : "none"
      }
    },
    /* @__PURE__ */ s.createElement("table", { ref: i, className: E }, S, /* @__PURE__ */ s.createElement("tbody", { className: f(c.tbody({})) }, h()))
  );
};
export {
  j as StickyGroupTable
};
