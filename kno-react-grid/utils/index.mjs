/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as C from "react";
import { gridDefaultProps as p } from "../GridColumn.mjs";
import { getter as S } from "@progress/kno-data-query";
import { findGroupExpand as R, tableKeyboardNavigationTools as b, updateLeft as W, updateRight as F } from "@progress/kno-react-data-tools";
import { ServerFragment as D } from "./_serverModule.mjs";
import { ClientFragment as E } from "./_clientModule.mjs";
import { GridContextMenuItemNames as l } from "../contextMenu/enums.mjs";
import { canUseDOM as M } from "@progress/kno-react-common";
function X(e, t) {
  const r = (e != null ? e : "").split(".");
  let a = t;
  return r.forEach((d) => {
    a = a ? a[d] : void 0;
  }), a;
}
function A(e, t, r, a, d, n, o, i, h, s = 0, f) {
  var c;
  let x = s;
  for (let g = 0; g < t.length; g++) {
    let I;
    if (!d || t[g].value === void 0 || t[g].items === void 0) {
      e[e.length] = {
        dataIndex: a.index,
        dataItem: t[g],
        rowType: "data",
        level: s,
        group: f,
        // This is related to detail-row expansion
        expanded: (c = h ? !!(n != null && n[S(h)(t[g])]) : !1) != null ? c : !1
      }, a.index++;
      continue;
    } else {
      let y;
      f != null && f.parents ? y = [{ field: f.field, value: f.value }, ...f.parents] : f ? y = [f] : y = [], I = {
        field: t[g].field,
        value: t[g].value,
        parents: y
      };
    }
    x = Math.max(x, s + 1);
    let w = !1;
    const v = R(o || [], I);
    v ? w = v.expanded !== !1 : w = i !== !1, e[e.length] = {
      dataIndex: -1,
      dataItem: t[g],
      level: s,
      group: I,
      rowType: "groupHeader",
      expanded: w
    }, w && (I.expanded = w, x = Math.max(
      A(
        e,
        t[g].items,
        r,
        a,
        d,
        n,
        o,
        i,
        h,
        s + 1,
        I
      ),
      x
    )), (r === "always" || w && r === "visible") && (e[e.length] = {
      dataIndex: -1,
      dataItem: t[g],
      rowType: "groupFooter",
      level: s,
      expanded: w
    });
  }
  return x;
}
function H(e, t) {
  for (let r = 0; r < e.length; r++) {
    const a = e[r];
    if (a.locked === void 0) {
      const d = t[a.index];
      d && (a.locked = d.locked);
    }
  }
}
const Y = (e, t) => typeof e.colSpan == "function" ? e.colSpan({ dataItem: t, column: e }) : e.colSpan || 1;
function Z(e, t, r) {
  const a = [[]];
  let d = 0;
  for (let i = e.length - 1; i >= 0; i--)
    d = Math.max(d, e[i].depth), e[i].headerColSpan = e[i].headerColSpan || 1, e[i].children.length > 0 && (e[i].headerColSpan = e[i].children.reduce(
      (h, s) => s.hidden ? h : h + s.headerColSpan,
      0
    ));
  const n = [];
  let o = 1;
  return e.forEach((i, h) => {
    a[i.depth] = a[i.depth] || [];
    let s = !1;
    a[i.depth].length === 0 && (o <= 1 ? o = 1 + (i.children.length > 0 ? 0 : d - i.depth) : (o--, s = !0)), i.rowSpan = 1 + (i.children.length > 0 ? 0 : d - i.depth), i.kFirst = s, i.index = a[i.depth].length, a[i.depth].push(h), i.ariaColumnIndex = n[i.depth] ? n[i.depth] + 1 : 1;
    for (let f = i.depth; f < i.depth + i.rowSpan; f++)
      n[f] = (n[f] || 0) + i.headerColSpan;
  }), H(e, t), W(a, e, r), F(a, e, r), a;
}
function T(e, t, r, a = 0, d = !1) {
  const n = [];
  if (!e)
    return [];
  e && e.length === void 0 && (e = [e]), e.forEach((i, h) => {
    i = i.props ? i.props : i;
    const s = i.id ? i.id : b.generateNavigatableId(`${r.prevId++}`, r.idPrefix, "column"), f = M && i.media && window.matchMedia ? !window.matchMedia(i.media).matches : !1, x = d || f || i.hidden, c = t == null ? void 0 : t.find((I) => I.id === s), g = T(i.children, (c == null ? void 0 : c.children) || [], r, a + 1, x);
    n.push(
      Object.assign(
        { depth: a },
        p,
        g.length ? { cell: () => null, filterCell: () => null } : {},
        i,
        {
          id: s,
          declarationIndex: n.length,
          children: g,
          headerColSpan: 0,
          rowSpan: 0,
          columnType: i.columnType || "data",
          colSpan: i.colSpan || 1,
          isAccessible: !0,
          hidden: x,
          left: null,
          right: null,
          rowSpannable: i.rowSpannable
        },
        c ? { width: c.width, orderIndex: c.orderIndex } : {}
      )
    );
  });
  const o = (i, h) => i.orderIndex === h.orderIndex ? i.declarationIndex - h.declarationIndex : (i.orderIndex || 0) - (h.orderIndex || 0);
  if (n.sort(o), a === 0) {
    const i = [], h = (s, f) => s.forEach((x) => {
      x.parentIndex = f, h(x.children, i.push(x) - 1);
    });
    return h(n, -1), i;
  }
  return n;
}
const k = (e) => Array.isArray(e) ? e : e ? e.data : [];
function _(e, t, r, a) {
  const d = k(e), n = [];
  if (d.length > 0) {
    let o = d[0];
    if (t)
      for (let h = 0; h < t.length; h++)
        o = o.items && o.items[0];
    Object.getOwnPropertyNames(o).forEach((h) => {
      h !== r.column && n.push(
        Object.assign(
          {
            id: b.generateNavigatableId(`${a.prevId++}`, a.idPrefix, "column"),
            declarationIndex: -1,
            parentIndex: -1,
            depth: 0,
            colSpan: 0,
            headerColSpan: 0,
            rowSpan: 0,
            index: 0,
            columnType: "data",
            left: 0,
            right: 0,
            rightBorder: !1,
            children: [],
            ariaColumnIndex: 0,
            isAccessible: !0
          },
          p,
          { field: h }
        )
      );
    });
  }
  return n;
}
const j = (e, t) => {
  var a;
  let r = e[t.parentIndex];
  for (; r; ) {
    if ((a = r.cells) != null && a.footerCell)
      return !0;
    r = e[r.parentIndex];
  }
  return !1;
}, P = (e) => e.filter((t) => {
  var r;
  return j(e, t) ? !1 : !!((r = t.cells) != null && r.footerCell) || !(t.children && t.children.length > 0);
}), G = (e) => {
  let t = e.width;
  return typeof (e == null ? void 0 : e.width) == "number" && (e != null && e.minResizableWidth) && (e == null ? void 0 : e.width) < (e == null ? void 0 : e.minResizableWidth) && (t = e == null ? void 0 : e.minResizableWidth), typeof (e == null ? void 0 : e.width) == "number" && (e != null && e.minWidth) && (e == null ? void 0 : e.width) < (e == null ? void 0 : e.minWidth) ? t = e == null ? void 0 : e.minWidth : typeof (e == null ? void 0 : e.width) == "number" && (e != null && e.maxWidth) && (e == null ? void 0 : e.width) > (e == null ? void 0 : e.maxWidth) && (t = e == null ? void 0 : e.maxWidth), t !== void 0 ? Math.floor(parseFloat(t.toString())) + "px" : void 0;
}, u = (e, t) => t && t.filter((r) => r.field === e).length > 0, B = (e) => (e.sort((t, r) => t.declarationIndex - r.declarationIndex), e.map((t) => {
  const { declarationIndex: r, parentIndex: a, depth: d, headerColSpan: n, rowSpan: o, index: i, kFirst: h, children: s, ...f } = t;
  return s.length ? {
    children: B(s),
    ...f
  } : f;
})), O = (e) => {
  const { cells: t, rowSpannable: r, defaultCell: a, ...d } = e;
  return e.children.length ? {
    ...d,
    children: e.children.map(O)
  } : d;
}, N = (e) => ({
  id: e.id,
  field: e.field,
  title: e.title,
  width: e.width,
  orderIndex: e.orderIndex,
  hidden: !1,
  minWidth: e.minWidth,
  maxWidth: e.maxWidth,
  children: e.children ? z(e.children) : null
}), z = (e) => e.map(N), m = (e) => {
  const t = [], r = (a) => a == null ? void 0 : a.forEach((d) => {
    t.push(d), r(d.children);
  });
  return r(e), t;
}, ee = typeof window != "undefined" && /Firefox/.test(window.navigator.userAgent), te = 17895697, ie = (e) => {
  let t = [];
  return e.sortable && (t = t.concat([l.sortAsc, l.sortDesc])), e.pdf && (t.length && (t = t.concat([l.separator])), t = t.concat([l.exportPDF])), t;
}, re = (e) => {
  let t = [];
  return e.clipboard && (t = t.concat([
    l.copySelection,
    l.copySelectionNoHeaders,
    l.paste
  ])), e.editable && (t.length && (t = t.concat([l.separator])), t = t.concat([
    l.create,
    l.edit,
    l.delete
  ])), e.selectable && (t.length && (t = t.concat([l.separator])), t = t.concat([l.select])), e.rowReorderable && (t.length && (t = t.concat([l.separator])), t = t.concat([l.reorderRow])), e.pdf && (t.length && (t = t.concat([l.separator])), t = t.concat([l.exportPDF])), e.pinnable && (t.length && (t = t.concat([l.separator])), t = t.concat([l.pinRow])), t;
}, ae = (e, t) => {
  if (!(!e && !t))
    return t ? e ? {
      ...e,
      ...t,
      select: {
        ...e.select || {},
        ...t.select || {}
      },
      hierarchy: {
        ...e.hierarchy || {},
        ...t.hierarchy || {}
      },
      group: {
        ...e.group || {},
        ...t.group || {}
      },
      edit: {
        ...e.edit || {},
        ...t.edit || {}
      }
    } : t : e;
}, de = (e) => {
  var r;
  return typeof e == "object" ? (r = e.enabled) != null ? r : !0 : e != null ? e : !1;
}, ne = () => D === E, he = (e) => !!(e && e.$$typeof === Symbol.for("react.client.reference")), fe = (e) => ({
  id: e.id,
  ariaColumnIndex: e.ariaColumnIndex,
  isSelected: e.isSelected,
  isHighlighted: e.isHighlighted,
  isInEdit: e.isInEdit,
  isSorted: e.isSorted,
  isAlt: e.isAlt,
  expanded: e.expanded,
  className: e.className,
  style: e.style,
  field: e.field,
  dataItem: e.dataItem,
  format: e.format,
  colSpan: e.colSpan,
  dataIndex: e.dataIndex,
  columnIndex: e.columnIndex,
  columnsCount: e.columnsCount,
  rowType: e.rowType,
  level: e.level,
  editor: e.editor,
  locked: e.locked,
  isRtl: e.isRtl,
  rowDataIndex: e.rowDataIndex,
  columnPosition: e.columnPosition,
  group: e.group
}), se = (e) => {
  var a, d;
  const t = typeof e == "object" ? (a = e.enabled) != null ? a : !0 : e != null ? e : !1, r = typeof e == "object" ? (d = e.valueGetter) != null ? d : ((n, o) => S(o)(n)) : (n, o) => S(o)(n);
  return { enabled: t, valueGetter: r };
}, $ = (e) => {
  var t;
  return C.isValidElement(e) ? e : (t = C.Children.toArray(e)) == null ? void 0 : t[0];
}, le = (e, t) => {
  const r = $(e);
  return r ? C.cloneElement(r, t) : null;
}, oe = (e) => {
  let t = 0;
  if (e) {
    const r = e.insertRow(0), a = r.insertCell(0);
    a.textContent = "&nbsp;", t = r.getBoundingClientRect().height, e.deleteRow(0);
  }
  return t;
};
export {
  _ as autoGenerateColumns,
  oe as calcRowHeight,
  O as clientColumn,
  le as cloneReactElement,
  ee as firefox,
  te as firefoxMaxHeight,
  A as flatData,
  P as footerColumns,
  fe as getClientCellProps,
  Y as getColSpan,
  N as getColumnState,
  G as getColumnWidth,
  z as getColumnsState,
  k as getDataAsArray,
  re as getDefaultBodyContextMenuItems,
  ie as getDefaultHeadContextMenuItems,
  m as getFlatColumnsState,
  X as getNestedValue,
  $ as getReactElement,
  se as getRowSpanOptions,
  ne as isClient,
  he as isClientReference,
  de as isRowReorderEnabled,
  u as isSorted,
  Z as mapColumns,
  T as readColumns,
  ae as resolveCells,
  B as sanitizeColumns,
  H as syncLockedColumns
};
