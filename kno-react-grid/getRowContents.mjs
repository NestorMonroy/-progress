/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as Q from "react";
import { getter as f, classNames as U } from "@progress/kno-react-common";
import { tableKeyboardNavigationTools as W } from "@progress/kno-react-data-tools";
import { isSorted as X, resolveCells as Y } from "./utils/index.mjs";
import { GridCell as Z } from "./cells/datacell/GridCell.mjs";
import { GridCellServer as ee } from "./cells/datacell/GridCellServer.mjs";
import { GridEditCell as le } from "./cells/editcell/GridEditCell.mjs";
import { GridEditCellServer as te } from "./cells/editcell/GridEditCellServer.mjs";
function ce(c, y, l, w, A, G, a) {
  const {
    leafColumns: g,
    columnsState: N,
    idPrefix: x,
    gridClasses: _,
    unstyled: D,
    localization: H,
    intl: K,
    cells: O,
    isRowReorderable: P,
    sort: R,
    editable: V,
    isClient: m,
    isEditDialog: B,
    dataItemKey: t,
    select: v,
    highlight: C
  } = c;
  let h = !1;
  const d = v && t && f(t)(l.dataItem) !== void 0 ? v[f(t)(l.dataItem)] : void 0, s = C && t && f(t)(l.dataItem) !== void 0 ? C[f(t)(l.dataItem)] : void 0;
  return {
    row: (c.hasDynamicColSpan ? c.getCellsToRender(l.dataItem) : c.cellsToRender).map(({ columnIndex: i, colSpan: $ }) => {
      var b, I, S, T, k, E;
      const e = g[i], p = N[i], z = (I = (b = e.locked) != null ? b : p == null ? void 0 : p.locked) != null ? I : !1;
      let n;
      if ((S = e.rowSpannable) != null && S.enabled && l.rowType === "data" && e.field && a) {
        const o = e.field ? (k = (T = e.rowSpannable).valueGetter) == null ? void 0 : k.call(T, l.dataItem, e.field) : null;
        n = { value: o, count: 1 }, a[e.field] && ((E = a[e.field]) == null ? void 0 : E.value) === o && a[e.field] !== null ? (a[e.field].count++, n.count = null) : a[e.field] = n;
      }
      const F = e.id ? e.id : i, L = U(_.contentSticky({ locked: z }), e.className), j = e.left !== void 0 ? { left: e.left, right: e.right } : {};
      let u = !1;
      if (e.editable && V) {
        const o = y && t ? y[f(t)(l.dataItem)] : void 0;
        let r;
        typeof o == "boolean" ? r = o : Array.isArray(o) ? r = e.field ? o.indexOf(e.field) > -1 : !1 : r = e.field !== void 0 && o === e.field, r && e.columnType === "data" && (r === !0 || r === e.field) && (h = !0, B || (u = !0));
      }
      const q = e._type === "expand", J = {
        locked: e.locked,
        id: W.generateNavigatableId(
          `${w}-${String(i)}`,
          x,
          q || l.rowType === "groupHeader" || l.rowType === "groupFooter" || e.field === "value" ? "nodata" : "cell"
        ),
        colSpan: $,
        dataItem: l.dataItem,
        field: e.field,
        editor: e.editor,
        format: e.format,
        columnType: e.columnType,
        rowReorderable: P,
        className: L,
        cells: Y(O, e.cells),
        columnIndex: i,
        columnsCount: g.length,
        rowType: l.rowType,
        level: l.level,
        expanded: l.expanded,
        dataIndex: l.dataIndex,
        rowDataIndex: A,
        columnPosition: j,
        style: {},
        ariaColumnIndex: e.ariaColumnIndex,
        isSelected: !!((e == null ? void 0 : e._type) === "edit" ? d : Array.isArray(d) && d.indexOf(i) > -1),
        isHighlighted: !!((e == null ? void 0 : e._type) === "edit" ? s : Array.isArray(s) && s.indexOf(i) > -1),
        isSorted: !!X(e.field, R),
        isInEdit: u,
        isAlt: G,
        unstyled: D,
        group: l.group,
        localization: H,
        intl: K,
        _rowSpan: n
      }, M = e.defaultCell || u && (m ? le : te) || (m ? Z : ee);
      return /* @__PURE__ */ Q.createElement(M, { key: F, cellProps: J });
    }),
    isInEdit: h,
    isSelected: typeof d == "boolean" && d,
    isHighlighted: typeof s == "boolean" && s
  };
}
export {
  ce as getRowContents
};
