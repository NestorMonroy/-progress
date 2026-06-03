/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
import * as c from "react";
import { useAdaptiveModeContext as wn, canUseDOM as ae, getActiveElement as yn, useDir as En, setScrollbarWidth as at, cloneArray as xn, useWebMcpRegister as Sn, RowHeightService as kn, getter as te } from "@progress/kno-react-common";
import { filterBy as Dn } from "@progress/kno-data-query";
import { getSelectionOptions as we, populateClipboardData as Kn, ClipboardActionType as ze, getEditableOptions as Gn, tableKeyboardNavigation as ne, ClipboardService as Tn, TableKeyboardNavigationContext as Hn, updateLeft as Mn, updateRight as An, getGroupExpandableOptions as Fn, groupExpandReducer as Ln, getDetailExpandableOptions as Bn, detailExpandReducer as Wn, getSelectedState as ct, editReducer as zn, EDIT_ACTION as On, closestTagName as ye, getSelectedStateFromKeyDown as pn, getColumnIndex as Nn, getRowIndex as Un } from "@progress/kno-react-data-tools";
import { ColumnResize as Vn } from "./drag/ColumnResize.mjs";
import { CommonDragLogic as jn } from "./drag/CommonDragLogic.mjs";
import { useStickyGroups as qn } from "./hooks/useStickyGroups.mjs";
import { getDefaultHeadContextMenuItems as $n, getDefaultBodyContextMenuItems as _n, isRowReorderEnabled as Zn, calcRowHeight as Jn, sanitizeColumns as Xn, getFlatColumnsState as Yn, getDataAsArray as Qn } from "./utils/index.mjs";
import { VirtualScroll as er } from "./VirtualScroll.mjs";
import { GridContextMenu as tr, contextMenuItemsMap as nr } from "./contextMenu/GridContextMenu.mjs";
import { GridContextMenuAnchorPart as dt, GridContextMenuItemNames as Ee } from "./contextMenu/enums.mjs";
import { normalizeSortable as rr, firstLevelSortSeqMap as or } from "./sortCommon.mjs";
import { BasePDFExport as ir } from "./BasePDFExport.mjs";
import { BaseCSVExport as ar } from "./BaseCSVExport.mjs";
import { GridContext as cr } from "./utils/GridContext.mjs";
import { operators as dr } from "./filterCommon.mjs";
const sr = (t, S, b, z) => {
  const re = Object.keys(S.cells).map((k) => b.findIndex((O) => O.field === k)), Z = Object.keys(S.cells).length > 0 ? re : !0;
  return t.reduce((k, O) => (k[O[z != null ? z : "id"]] = Z, k), {});
}, st = (t, S, b, z) => S.reduce((Z, k) => ({
  ...Z,
  ...sr(Dn(t, k), k, b, z)
}), {}), xr = (t) => {
  var it;
  const S = t.gridProps.isClient, [b, z] = c.useState({}), re = wn(), Z = c.useRef(null), k = c.useRef(null), O = c.useRef({}), lt = (e) => {
    e.event.preventDefault(), z({
      ...b,
      show: !0,
      offset: {
        left: e.event.pageX,
        top: e.event.pageY
      },
      dataItem: e.dataItem,
      field: e.field
    });
  }, Oe = () => {
    z({});
  }, ut = (e) => {
    const n = t.gridProps.dataItemKey || "", o = b.dataItem, r = t.gridProps.pinnedTopRows || [], i = t.gridProps.pinnedBottomRows || [], a = n ? o[n] : void 0, d = a !== void 0 && r.some((s) => s[n] === a), l = a !== void 0 && i.some((s) => s[n] === a);
    return e.map((s) => {
      const u = typeof s == "string" ? nr[s] : s;
      return (u == null ? void 0 : u.name) === Ee.pinRow && u.items ? {
        ...u,
        items: u.items.filter((m) => m.name === Ee.pinTop ? !d : m.name === Ee.pinBottom ? !l : m.name === Ee.unpin ? d || l : !0)
      } : s;
    });
  }, y = c.useMemo(() => t.columnsRef.find((e) => e.field === b.field), [t.columnsRef, b]), pe = c.useMemo(() => {
    const e = t.gridProps.sortable && (y == null ? void 0 : y.sortable);
    return $n({
      pdf: !!t.gridProps.pdf,
      sortable: !!e,
      selectable: we(t.gridProps.selectable).enabled,
      clipboard: !!t.gridProps.clipboard
    });
  }, [y, t.gridProps.sortable, t.gridProps.selectable, t.gridProps.clipboard]), Ne = c.useMemo(() => (t.gridProps.sortable && (y == null || y.sortable), _n({
    pdf: !!t.gridProps.pdf,
    selectable: we(t.gridProps.selectable).enabled,
    clipboard: !!t.gridProps.clipboard,
    rowReorderable: Zn(t.gridProps.rowReorderable),
    pinnable: !!t.gridProps.pinnable
  })), [
    y,
    t.gridProps.sortable,
    t.gridProps.selectable,
    t.gridProps.clipboard,
    t.gridProps.pinnable,
    t.gridProps.rowReorderable,
    t.gridProps.pdf
  ]), ce = c.useMemo(() => {
    const e = (y == null ? void 0 : y.contextMenu) || t.gridProps.contextMenu, n = typeof e == "function" ? e(b) : e;
    if (n && b.offset) {
      const o = b.dataItem ? dt.body : dt.head, r = n[o], i = b.dataItem ? Ne : pe;
      let a;
      return r === !0 || r === void 0 ? a = i : r !== !1 && (a = r), t.gridProps.pinnable && a && b.dataItem ? ut(a) : a;
    }
  }, [
    t.gridProps.contextMenu,
    t.gridProps.pinnable,
    b,
    Ne,
    pe,
    y
  ]), gt = (e) => {
    var d, l, s, u, m, w, h, N, g;
    const n = e.event.item, o = {
      target: E.current,
      syntheticEvent: e.event.syntheticEvent,
      nativeEvent: e.event.nativeEvent,
      menuItem: n,
      ...e
    };
    t.gridProps.onContextMenuItemClick && f(t.gridProps.onContextMenuItemClick, o);
    const r = D(), i = {
      selectedField: "",
      componentId: t.id,
      dataItems: r,
      dataItem: e.dataItem,
      startRowIndex: -1,
      endRowIndex: -1,
      startColIndex: -1,
      endColIndex: -1,
      ctrlKey: !1,
      altKey: !1,
      metaKey: !1,
      shiftKey: !1,
      isDrag: !1,
      ...we(t.gridProps.selectable),
      ...o
    }, a = r.findIndex((x) => x === e.dataItem);
    switch ((d = n.data) == null ? void 0 : d.action) {
      case "SortCommand":
        if (y) {
          const x = (l = n.name) == null ? void 0 : l.toLowerCase().includes("asc"), _ = ((s = n.name) == null ? void 0 : s.toLowerCase().includes("desc")) ? "desc" : void 0, W = x ? "asc" : _, ee = n.name ? W : void 0;
          Ue(e.event.syntheticEvent, y, ee);
        }
        break;
      case "SelectRowCommand":
        At(i);
        break;
      case "SelectAllRowsCommand":
        Mt(i);
        break;
      case "ExportPDFCommand":
        Se();
        break;
      case "ClearSelectionCommand":
        Lt(i);
        break;
      case "ReorderRowCommand":
        ie.current = e.dataItem, (u = n.name) != null && u.toLowerCase().includes("rowup") && a > 0 && oe(e.event.syntheticEvent, a - 1, "before"), (m = n.name) != null && m.toLowerCase().includes("rowdown") && a < r.length - 1 && oe(e.event.syntheticEvent, a + 1, "after"), (w = n.name) != null && w.toLowerCase().includes("rowtop") && oe(e.event.syntheticEvent, 0, "before"), (h = n.name) != null && h.toLowerCase().includes("rowbottom") && oe(e.event.syntheticEvent, r.length - 1, "after");
        break;
      case "CopySelectionCommand":
        fe(
          ze.copy,
          e.event.nativeEvent,
          {
            copyHeaders: !((N = n.name) != null && N.toLowerCase().includes("noheaders"))
          },
          e.dataItem,
          e.field
        );
        break;
      case "PasteCommand":
        fe(
          ze.paste,
          e.event.nativeEvent,
          {
            copyHeaders: !((g = n.name) != null && g.toLowerCase().includes("noheaders"))
          },
          e.dataItem,
          e.field
        );
        break;
      case "PinTopCommand":
        se("pinTop", e.dataItem);
        break;
      case "PinBottomCommand":
        se("pinBottom", e.dataItem);
        break;
      case "UnpinCommand":
        se("unpin", e.dataItem);
        break;
    }
    Oe();
  }, de = () => {
    const e = t.columnsRef.filter((n) => n.declarationIndex >= 0 && n.parentIndex === -1);
    return Xn(e);
  }, ft = (e, n, o) => {
    if (t.gridProps.onContextMenu && S) {
      const r = {
        target: E.current,
        syntheticEvent: e,
        nativeEvent: e.nativeEvent,
        dataItem: n,
        field: o
      };
      f(t.gridProps.onContextMenu, r);
    }
    t.gridProps.contextMenu && lt({
      event: e,
      dataItem: n,
      field: o
    });
  }, mt = (e) => {
    var a, d;
    if (e.target !== e.currentTarget)
      return;
    clearTimeout(Fe.current), C.current && (C.current.table = j.current);
    const n = e.currentTarget.scrollLeft, o = e.currentTarget.scrollTop;
    t.gridProps.columnVirtualization && (!K || o === Ae.current) && (Fe.current = window.setTimeout(() => {
      Y();
    }, 0)), t.gridProps.scrollLeftRef && (t.gridProps.scrollLeftRef.current = n), $.current && $.current.setScrollLeft(n), q.current && q.current.setScrollLeft(n), A != null && A.current && A.current.setScrollLeft(n), F != null && F.current && F.current.setScrollLeft(n), L != null && L.current && L.current.setScrollLeft(n), B != null && B.current && B.current.setScrollLeft(n);
    const r = (a = t.gridProps.virtualSkipRef) == null ? void 0 : a.current;
    C.current && o !== Ae.current && C.current.scrollHandler(e);
    const i = K && ((d = t.gridProps.virtualSkipRef) == null ? void 0 : d.current) !== r;
    t.gridProps.onScroll && S && f(t.gridProps.onScroll, {
      ...I(e)
    }), Ae.current = o, i || nt();
  }, Pt = (e) => {
    var o, r;
    const n = e.target;
    if ((e.keyCode === 38 || e.keyCode === 40) && n.closest(".k-grid-sticky-container")) {
      const i = parseInt(((o = n.closest("tr")) == null ? void 0 : o.getAttribute("absolute-row-index")) || "", 10), a = n.getAttribute("data-keyboardnavid");
      if (!isNaN(i) && a && !((r = T.current) == null ? void 0 : r.querySelector(`tr[absolute-row-index="${i}"]`)))
        return Ce.current = {
          navId: a,
          key: e.key,
          code: e.code,
          keyCode: e.keyCode
        }, e.preventDefault(), e.stopPropagation(), Pe({ rowIndex: i }), !0;
    }
    return !1;
  }, ht = () => {
    var a;
    if (!Ce.current || !M.current)
      return;
    const { navId: e, key: n, code: o, keyCode: r } = Ce.current, i = (a = T.current) == null ? void 0 : a.querySelector(
      `[data-keyboardnavid="${e}"]`
    );
    i && i.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: n,
        code: o,
        keyCode: r,
        bubbles: !0,
        cancelable: !0
      })
    );
  }, Rt = (e) => {
    if (Pt(e))
      return;
    ne.onKeyDown(e, {
      navigatable: t.gridProps.navigatable || !1,
      contextStateRef: V,
      navigationStateRef: Q,
      onNavigationAction: vt,
      columns: de()
    }), ne.onGetSnapshotBeforeUpdate({
      document: p(),
      contextStateRef: V,
      navigationStateRef: Q
    });
    const n = {
      dataItems: D(),
      mode: v.mode,
      cell: v.cell,
      componentId: t.id,
      selectedField: "",
      ...I(e)
    };
    t.gridProps.onKeyDown && S && f(t.gridProps.onKeyDown, n);
  }, bt = (e) => {
    ne.onFocus(e, {
      navigatable: !!t.gridProps.navigatable,
      contextStateRef: V
    });
  }, vt = (e) => {
    const { columnsRef: n } = t;
    if (e.action === "moveToNextPage" && zt(e.event), e.action === "moveToPrevPage" && Ot(e.event), e.focusElement && (e.action === "reorderToRight" || e.action === "reorderToLeft")) {
      const o = parseInt(e.focusElement.ariaColIndex, 10) - 1;
      if (!n[o].reorderable)
        return;
      if (e.action === "reorderToRight" && o < t.columnsRef.length - 1) {
        if (n[o + 1].disableReorder)
          return;
        ue(o, o + 1, e.event);
      }
      if (e.action === "reorderToLeft" && o > 0) {
        if (n[o - 1].disableReorder)
          return;
        ue(o, o - 1, e.event);
      }
    }
    if (e.action === "select" && Gt(e.event), t.gridProps.onNavigationAction && S) {
      const o = {
        focusElement: e.focusElement,
        ...I(e.event)
      };
      f(t.gridProps.onNavigationAction, o);
    }
  }, Ct = (e, n) => {
    t.gridProps.onRowClick && ye(e.target, "TD") && f(t.gridProps.onRowClick, {
      dataItem: n,
      ...I(e)
    });
  }, It = (e, n) => {
    t.gridProps.onRowDoubleClick && ye(e.target, "TD") && f(t.gridProps.onRowDoubleClick, {
      dataItem: n,
      ...I(e)
    });
  }, wt = (e) => {
    t.gridProps.onItemChange && f(t.gridProps.onItemChange, {
      ...I(e.syntheticEvent),
      dataItem: e.dataItem,
      field: void 0,
      value: void 0
    });
  }, yt = (e) => {
    t.gridProps.onItemChange && t.gridProps.onEditChange && f(t.gridProps.onEditChange, {
      edit: {},
      ...I(e.syntheticEvent)
    });
  }, Et = (e, n, o) => {
    var r, i;
    if (ot.enabled && ot.mode === "incell" && t.gridProps.dataItemKey) {
      if (t.gridProps.pinnable && t.gridProps.editZoneRef) {
        const d = !!((i = (r = e.target).closest) != null && i.call(r, ".k-grid-pinned-container"));
        t.gridProps.editZoneRef.current = d ? "pinned" : "body";
      }
      const a = zn(t.gridProps.edit, {
        type: On.ENTER_FIELD_EDIT,
        payload: { id: n[t.gridProps.dataItemKey], field: o }
      });
      t.gridProps.onEditChange && f(t.gridProps.onEditChange, {
        edit: a,
        ...I(e)
      });
    }
  }, xt = (e, n) => {
    var r;
    if (Bn(t.detailExpandable).enabled) {
      const i = Wn((r = t.gridProps.detailExpand) != null ? r : {}, e);
      t.gridProps.onDetailExpandChange && f(t.gridProps.onDetailExpandChange, {
        ...I(n),
        detailExpand: i
      });
    }
  }, St = (e, n) => {
    var r;
    const o = Fn(
      typeof t.gridProps.groupable == "object" ? t.gridProps.groupable.expandable !== !1 : t.gridProps.groupable
    );
    if (o.enabled) {
      const i = Ln((r = t.gridProps.groupExpand) != null ? r : [], e, o);
      t.gridProps.onGroupExpandChange && f(t.gridProps.onGroupExpandChange, {
        ...I(n),
        groupExpand: i
      });
    }
    hn(e.group);
  }, kt = c.useCallback(
    (e) => {
      const { dataItemKey: n = "", pinnedTopRows: o = [], pinnedBottomRows: r = [] } = t.gridProps;
      if (!n || !e)
        return "none";
      const i = e[n];
      return o != null && o.some((a) => a[n] === i) ? "top" : r != null && r.some((a) => a[n] === i) ? "bottom" : "none";
    },
    [t.gridProps.pinnedTopRows, t.gridProps.pinnedBottomRows, t.gridProps.dataItemKey]
  ), se = (e, n) => {
    if (!t.gridProps.pinnable)
      return;
    const { dataItemKey: o = "", pinnedTopRows: r = [], pinnedBottomRows: i = [] } = t.gridProps, a = n[o], d = r.filter((u) => u[o] !== a), l = i.filter((u) => u[o] !== a);
    let s;
    switch (e) {
      case "pinTop":
        s = { pinnedTopRows: [...d, n], pinnedBottomRows: l, dataItem: n };
        break;
      case "pinBottom":
        s = { pinnedTopRows: d, pinnedBottomRows: [...l, n], dataItem: n };
        break;
      case "unpin":
        s = { pinnedTopRows: d, pinnedBottomRows: l, dataItem: n };
        break;
      default:
        return;
    }
    t.gridProps.onRowPinChange && f(t.gridProps.onRowPinChange, s);
  }, Ue = (e, n, o) => {
    const { allowUnsort: r, mode: i } = rr(
      t.gridProps.sortable || !1,
      n.sortable || !1
    ), a = (t.gridProps.sort || []).filter((s) => s.field === n.field)[0], d = o || or[r][a && a.dir || ""], l = i === "single" ? [] : (t.gridProps.sort || []).filter((s) => s.field !== n.field);
    d !== "" && n.field && l.push({ field: n.field, dir: d }), je(l, e);
  }, Dt = (e) => {
    t.gridProps.onItemChange && f(t.gridProps.onItemChange, {
      ...I(e.syntheticEvent),
      dataItem: e.dataItem,
      dataIndex: e.dataIndex,
      field: e.field,
      value: e.value
    });
  }, Kt = (e) => {
    var n;
    if (t.gridProps.onSelectionChange && v.enabled) {
      const { event: o, dataItem: r, dataIndex: i, columnIndex: a } = e, d = {
        ...I(o),
        dataItem: r,
        startColIndex: a,
        endColIndex: a,
        startRowIndex: i,
        endRowIndex: i,
        dataItems: D(),
        altKey: !1,
        ctrlKey: !1,
        shiftKey: !1,
        metaKey: !1,
        mode: v.mode,
        cell: v.cell,
        isDrag: !1,
        componentId: t.id,
        selectedField: ""
      };
      f(t.gridProps.onSelectionChange, {
        ...d,
        select: t.gridProps.dataItemKey ? ct({
          event: d,
          selectedState: (n = t.gridProps.select) != null ? n : {},
          dataItemKey: t.gridProps.dataItemKey
        }) : {}
      });
    }
  }, Gt = (e) => {
    var s, u;
    if (!v.enabled || !t.gridProps.dataItemKey)
      return;
    const n = {
      dataItems: D(),
      mode: v.mode,
      cell: v.cell,
      componentId: t.id,
      selectedField: "",
      ...I(e)
    }, o = pn({
      event: n,
      selectedState: (s = t.gridProps.select) != null ? s : {},
      dataItemKey: t.gridProps.dataItemKey
    });
    if (o === t.gridProps.select)
      return;
    const r = e.target, i = ye(r, "TD"), a = ye(r, "TR"), d = Nn(i), l = Un(a);
    if (d !== void 0 && l !== void 0) {
      const m = (u = Qn(t.gridProps.data)) == null ? void 0 : u[l];
      t.gridProps.onSelectionChange && f(t.gridProps.onSelectionChange, {
        ...n,
        select: o,
        dataItem: m,
        startRowIndex: l,
        startColIndex: d,
        startDataItem: m,
        endDataItem: m,
        endRowIndex: l,
        endColIndex: d,
        ctrlKey: e.ctrlKey,
        altKey: e.altKey,
        metaKey: e.metaKey,
        shiftKey: e.shiftKey,
        isDrag: !1
      });
    }
  }, Tt = (e) => {
    if (t.gridProps.onHeaderSelectionChange && v.enabled) {
      const n = D();
      f(t.gridProps.onHeaderSelectionChange, {
        select: e.syntheticEvent.target.checked ? n.reduce((o, r) => (t.gridProps.dataItemKey && te(t.gridProps.dataItemKey)(r) !== void 0 && (o[te(t.gridProps.dataItemKey)(r)] = !0), o), {}) : {},
        field: e.field,
        nativeEvent: e.syntheticEvent && e.syntheticEvent.nativeEvent,
        syntheticEvent: e.syntheticEvent,
        target: E.current,
        dataItems: n
      });
    }
  }, J = (e, n) => {
    t.gridProps.onSelectionChange && v.enabled && f(t.gridProps.onSelectionChange, {
      ...e,
      select: n
    });
  }, Ht = (e, n) => {
    const o = t.gridProps.dataItemKey;
    if (!o || !n)
      return;
    const r = te(o), i = D().findIndex((a) => r(a) === r(n));
    i !== -1 && Ve({
      ...e,
      startRowIndex: i,
      endRowIndex: i
    });
  }, Ve = (e) => {
    var n;
    if (t.gridProps.onSelectionChange && v.enabled) {
      const o = D(), r = o[e.startRowIndex], i = o[e.endRowIndex], a = {
        syntheticEvent: void 0,
        target: E.current,
        selectedField: "",
        componentId: t.id,
        dataItems: o,
        dataItem: null,
        startDataItem: r,
        endDataItem: i,
        ...e
      }, d = ct({
        event: a,
        selectedState: (n = t.gridProps.select) != null ? n : {},
        dataItemKey: t.gridProps.dataItemKey
      });
      J(a, d);
    }
  }, Mt = (e) => {
    if (t.gridProps.onSelectionChange && v.enabled) {
      const n = e.dataItems[0], o = e.dataItems[e.dataItems.length - 1], r = {}, i = {
        ...e,
        startDataItem: n,
        endDataItem: o,
        startRowIndex: 0,
        endRowIndex: e.dataItems.length - 1,
        startColIndex: 0,
        endColIndex: t.columnsRef.length - 1
      };
      e.dataItems.forEach((a) => {
        const l = te(t.gridProps.dataItemKey)(a);
        r[l] = e.cell ? [...Array(t.columnsRef.length).keys()] : !0;
      }), J(i, r);
    }
  }, At = (e) => {
    if (t.gridProps.onSelectionChange && v.enabled) {
      const o = te(t.gridProps.dataItemKey)(e.dataItem), r = 0, i = t.columnsRef.length - 1, a = e.dataItems.findIndex(
        (m) => m[t.gridProps.dataItemKey] === e.dataItem[t.gridProps.dataItemKey]
      ), s = {
        ...e,
        startDataItem: a,
        endDataItem: a,
        startRowIndex: a,
        endRowIndex: a,
        startColIndex: r,
        endColIndex: i
      }, u = e.mode === "multiple" ? t.gridProps.select || {} : {};
      u[o] === !0 || Array.isArray(u[o]) && u[o].length === t.columnsRef.length ? delete u[o] : u[o] = e.cell ? [...Array(t.columnsRef.length).keys()] : !0, J(s, u);
    }
  }, Ft = (e) => {
    if (!v.enabled)
      return;
    const n = D(), o = {
      syntheticEvent: void 0,
      nativeEvent: void 0,
      target: E.current,
      selectedField: "",
      componentId: t.id,
      dataItems: n,
      dataItem: null,
      startDataItem: null,
      endDataItem: null,
      ctrlKey: !1,
      altKey: !1,
      metaKey: !1,
      shiftKey: !1,
      isDrag: !1,
      mode: v.mode,
      cell: v.cell
    };
    if (!e || e.length === 0) {
      const m = {
        ...o,
        startRowIndex: -1,
        endRowIndex: -1,
        startColIndex: -1,
        endColIndex: -1
      };
      J(m, {});
      return;
    }
    const r = st(
      t.gridProps.data,
      e,
      t.columnsRef,
      t.gridProps.dataItemKey
    ), i = {};
    Object.keys(r).forEach((m) => {
      r[m] && (i[m] = v.cell ? [...Array(t.columnsRef.length).keys()] : !0);
    });
    let a = -1, d = -1, l = n[0] || null, s = n[n.length - 1] || null;
    if (t.gridProps.dataItemKey) {
      const m = te(t.gridProps.dataItemKey);
      for (let w = 0; w < n.length; w++) {
        const h = m(n[w]);
        h !== void 0 && r[h] && (a === -1 && (a = w, l = n[w]), d = w, s = n[w]);
      }
    }
    const u = {
      ...o,
      startRowIndex: a,
      endRowIndex: d,
      startColIndex: 0,
      endColIndex: t.columnsRef.length - 1,
      startDataItem: l,
      endDataItem: s
    };
    J(u, i);
  }, Lt = (e) => {
    t.gridProps.onSelectionChange && v.enabled && J(e, {});
  }, X = (e, n, o, r, i) => {
    Wt();
    const a = t.gridProps.onDataStateChange;
    if (e) {
      const d = { ...I(r), ...n, targetEvent: i };
      f(e, d);
    } else a && (O.current = {
      ...O.current,
      ...o
    }, f(a, {
      ...I(r),
      targetEvent: i || {},
      dataState: {
        ...Yt(),
        ...O.current
      }
    }));
  }, le = (e, n, o) => {
    var r;
    K && t.gridProps.pageable && ((r = C.current) == null || r.reset()), X(
      t.gridProps.onPageChange,
      { page: e },
      { skip: e.skip, take: e.take },
      n,
      o
    );
  }, Bt = (e, n, o) => {
    var r;
    t.gridProps.pageable || (r = t.gridProps.group) != null && r.length ? t.gridProps.virtualSkipRef && (t.gridProps.virtualSkipRef.current = e.skip, Y()) : le(e, n, o);
  }, xe = () => {
    let e = t.gridProps.total || 0;
    return Array.isArray(t.gridProps.data) ? e = e || t.gridProps.data.length : t.gridProps.data && (e = e || t.gridProps.data.total), e;
  }, Wt = () => {
    K && t.gridProps.virtualSkipRef && (t.gridProps.virtualSkipRef.current = 0);
  }, zt = (e) => {
    var i, a;
    const n = (a = (i = t.gridProps.take) != null ? i : t.gridProps.pageSize) != null ? a : 0, o = (t.gridProps.skip || 0) + n, r = xe();
    o < r && le({ skip: o, take: n }, e);
  }, Ot = (e) => {
    var r, i;
    const n = (i = (r = t.gridProps.take) != null ? r : t.gridProps.pageSize) != null ? i : 0, o = (t.gridProps.skip || 0) - n;
    o >= 0 && le({ skip: o, take: n }, e);
  }, pt = (e) => {
    le({ skip: e.skip, take: e.take }, e.syntheticEvent, e.targetEvent);
  }, je = (e, n) => {
    X(
      t.gridProps.onSortChange,
      { sort: e },
      { sort: e, ...K && !t.gridProps.pageable ? { skip: 0 } : {} },
      n
    );
  }, Nt = (e, n) => {
    X(
      t.gridProps.onFilterChange,
      { filter: e },
      { filter: e, skip: 0 },
      n
    );
  }, Ut = (e) => {
    if (!e || e.length === 0) {
      qe({});
      return;
    }
    const n = st(
      t.gridProps.data,
      e,
      t.columnsRef,
      t.gridProps.dataItemKey
    );
    qe({ ...n });
  }, qe = (e) => {
    X(
      t.gridProps.onHighlightChange,
      { highlight: e },
      {},
      {}
    );
  }, Vt = (e) => {
    const n = t.gridProps.searchFields || t.columnsRef.map((i) => i.field) || [], o = e.nativeEvent.target.value, r = {
      logic: "or",
      filters: n.filter((i) => i !== void 0).map((i) => {
        var a;
        return typeof i == "string" ? { field: i, value: o, operator: "contains" } : {
          value: o,
          operator: (a = i.operator) != null ? a : "contains",
          field: i.field,
          ignoreCase: i.ignoreCase
        };
      })
    };
    X(
      t.gridProps.onSearchChange,
      {
        search: r
      },
      { skip: 0 },
      e.syntheticEvent
    );
  }, Se = () => {
    var e;
    (e = Z.current) == null || e.save();
  }, $e = async () => {
    var e;
    await ((e = k.current) == null ? void 0 : e.save());
  }, _e = () => {
    var e;
    return ((e = k.current) == null ? void 0 : e.getBlob()) || null;
  }, jt = async (e) => {
    var n, o;
    (n = t.gridProps) != null && n.onPdfExport && await ((o = t.gridProps) == null ? void 0 : o.onPdfExport(e));
  }, qt = (e) => {
    var n, o;
    return (n = t.gridProps) != null && n.onCsvExport ? (o = t.gridProps) == null ? void 0 : o.onCsvExport(e) : e;
  }, ke = (e, n) => {
    const o = n.nativeEvent ? n : { nativeEvent: n.nativeEvent || n.originalEvent };
    let r = {};
    t.isVirtualScroll && e.length && !t.gridProps.pageable && (r = { take: void 0 }), e.length === 0 && t.gridProps.navigatable && (Te.current = !0), X(
      t.gridProps.onGroupChange,
      { group: e },
      { group: e, skip: 0, ...r },
      o
    );
  }, De = (e) => {
    if (t.gridProps.onColumnsStateChange) {
      const n = {
        target: E.current,
        columnsState: e
      };
      f(t.gridProps.onColumnsStateChange, n);
    }
  }, ue = (e, n, o) => {
    const { columnsRef: r, columnsState: i } = t, a = r[e], d = Yn(i), l = a.depth, s = (h) => {
      do
        h++;
      while (h < r.length && r[h].depth > l);
      return h;
    }, u = r.splice(e, s(e) - e);
    r.splice(e < n ? s(n - u.length) : n, 0, ...u), r.filter((h) => h.declarationIndex >= 0).forEach((h, N) => {
      h.orderIndex = N;
      const g = d.find((x) => x.id === h.id);
      g && (g.orderIndex = N);
    });
    const m = r[e].locked && r[n].locked;
    Mn(t.columnsMapRef, r, m || be.current), An(t.columnsMapRef, r, m || be.current), Ge.current && (be.current = !1, Ge.current = !1);
    const w = de();
    if (Y(), t.gridProps.onColumnReorder) {
      const h = {
        target: E.current,
        columns: w,
        columnId: a.id,
        nativeEvent: o
      };
      f(t.gridProps.onColumnReorder, h);
    }
    De(i);
  }, oe = (e, n, o) => {
    const r = typeof t.gridProps.rowReorderable == "object" ? t.gridProps.rowReorderable.enabled : t.gridProps.rowReorderable;
    if (o === "forbidden" || !r || !ie.current)
      return;
    const i = t.dataRef[n];
    t.gridProps.onRowReorder && f(t.gridProps.onRowReorder, {
      draggedDataItems: [ie.current],
      droppedDataItem: i == null ? void 0 : i.dataItem,
      dropPosition: o,
      nativeEvent: e.originalEvent,
      dragEvent: e,
      target: E.current
    }), ie.current = null;
  }, $t = (e, n, o) => {
    if (t.gridProps.group === void 0)
      return;
    const r = t.gridProps.group.slice();
    r.splice(n, 0, ...r.splice(e, 1)), ke(r, o);
  }, Ze = (e, n, o) => {
    const r = t.columnsRef[e].field;
    if (!r)
      return;
    const i = (t.gridProps.group || []).slice();
    i.splice(n, 0, { field: r }), ke(i, o);
  }, _t = (e, n) => {
    const o = U.current.getCurrentGroupsLength;
    Ze(e, o, n);
  }, Ke = () => {
    var e, n, o, r, i, a, d, l, s, u, m, w, h, N;
    if (t.gridProps.dataLayoutMode === "stacked") {
      const g = ((e = M.current) == null ? void 0 : e.offsetWidth) || 0;
      if ((n = P.current) != null && n.colGroupMain && g) {
        const x = P.current.colGroupMain.children, R = x.length - 1;
        if (R >= 0) {
          let _ = 0;
          for (let ee = 0; ee < R; ee++) {
            const In = parseFloat((x[ee].width || 0).toString()) || x[ee].clientWidth;
            _ += In;
          }
          const W = Math.max(0, g - _);
          x[R].width = W + "px", (r = (o = P.current.colGroupHeader) == null ? void 0 : o.children) != null && r[R] && (P.current.colGroupHeader.children[R].width = W + "px"), (a = (i = P.current.colGroupFooter) == null ? void 0 : i.children) != null && a[R] && (P.current.colGroupFooter.children[R].width = W + "px"), (l = (d = P.current.colGroupStickyHeader) == null ? void 0 : d.children) != null && l[R] && (P.current.colGroupStickyHeader.children[R].width = W + "px"), (u = (s = P.current.colGroupStickyFooter) == null ? void 0 : s.children) != null && u[R] && (P.current.colGroupStickyFooter.children[R].width = W + "px"), (w = (m = P.current.colGroupPinnedTop) == null ? void 0 : m.children) != null && w[R] && (P.current.colGroupPinnedTop.children[R].width = W + "px"), (N = (h = P.current.colGroupPinnedBottom) == null ? void 0 : h.children) != null && N[R] && (P.current.colGroupPinnedBottom.children[R].width = W + "px");
        }
      }
      $.current && $.current.setWidth(g), q.current && q.current.setWidth(g), A.current && A.current.setWidth(g), F.current && F.current.setWidth(g), L.current && L.current.setWidth(g), B.current && B.current.setWidth(g), j.current && (j.current.style.width = g ? g + "px" : "");
    } else {
      let g = 0;
      if (!P.current.colGroupMain)
        return;
      const x = P.current.colGroupMain.children;
      for (let R = 0; R < x.length; R++) {
        const _ = x[R].width;
        if (!_) {
          g = 0;
          break;
        }
        g += parseFloat(_.toString());
      }
      g = Math.round(g), $.current && $.current.setWidth(g), q.current && q.current.setWidth(g), A.current && A.current.setWidth(g), F.current && F.current.setWidth(g), L.current && L.current.setWidth(g), B.current && B.current.setWidth(g), j.current && (j.current.style.width = g ? g + "px" : "");
    }
    Ie.current && Zt();
  }, Zt = () => {
    const e = H.current, n = e ? e.scrollWidth > e.clientWidth : !1;
    Ie.current && (Ie.current.style.marginBlockEnd = n ? "var(--kno-scrollbar-width, 0px)" : "");
  }, Je = () => {
    var e;
    t.gridProps.widthRef && (t.gridProps.widthRef.current = ((e = M.current) == null ? void 0 : e.offsetWidth) || 0);
  }, ge = () => {
    var e;
    t.gridProps.containerHeightRef && (t.gridProps.containerHeightRef.current = ((e = H.current) == null ? void 0 : e.offsetHeight) || 0);
  }, Jt = () => {
    const e = t.gridProps.minRowHeightRef;
    if (e && !e.current && !t.gridProps.rowHeight) {
      const n = Jn(T.current);
      n && (e.current = n, Y());
    }
  }, fe = c.useCallback(
    (e, n, o, r, i) => {
      var s;
      if (!Xt() && !o || !e)
        return;
      const a = {
        type: e,
        nativeEvent: n,
        columns: t.columnsRef,
        dataItemKey: t.gridProps.dataItemKey || "",
        dataItem: r,
        field: i,
        ...typeof t.gridProps.clipboard != "boolean" ? t.gridProps.clipboard : {},
        ...o
      }, d = D(), l = Kn({
        event: a,
        data: d,
        selectedState: (s = t.gridProps.select) != null ? s : {},
        previousCopiedItems: tt.current
      });
      e !== ze.paste && (tt.current = l.copiedItems), t.gridProps.onClipboard && S && f(t.gridProps.onClipboard, {
        ...a,
        ...l
      });
    },
    [
      t.gridProps.select,
      t.gridProps.dataItemKey,
      t.gridProps.data,
      t.gridProps.clipboard,
      t.gridProps.onClipboard
    ]
  ), Xt = () => {
    var i, a, d;
    if (!ae)
      return !1;
    const e = yn(p()), n = e ? e.matches(".k-table-td") ? e : (i = p()) == null ? void 0 : i.body : (a = p()) == null ? void 0 : a.body, o = n.closest(".k-grid-container"), r = n && ((d = M.current) == null ? void 0 : d.contains(n));
    return !!(n && r && o);
  }, Xe = (e, n, o, r, i, a, d) => {
    Ke(), be.current = !0, Ge.current = !0, t.gridProps.onColumnResize && S && f(t.gridProps.onColumnResize, {
      columns: de(),
      nativeEvent: r,
      targetColumnId: d,
      index: e,
      newWidth: n,
      oldWidth: o,
      end: i,
      target: E.current
    }), i && De(a);
  }, Yt = () => {
    var e;
    return {
      filter: t.gridProps.filter,
      sort: t.gridProps.sort,
      skip: t.gridProps.skip,
      take: (e = t.gridProps.take) != null ? e : t.gridProps.pageSize,
      group: t.gridProps.group
    };
  }, I = (e) => ({
    nativeEvent: e && e.nativeEvent,
    syntheticEvent: e,
    target: E.current
  }), Qt = (e) => ({
    ...e,
    nativeEvent: void 0,
    syntheticEvent: void 0,
    target: void 0,
    targetEvent: void 0,
    focusElement: void 0
  }), f = (e, n) => {
    if (t.gridProps.isClient) {
      e(n);
      return;
    }
    e(Qt(n));
  }, en = () => {
    var e, n, o;
    if (T.current && ((e = T.current) == null ? void 0 : e.getElementsByClassName("k-grid-edit-row").length) > 0) {
      Me.current = !1, (n = document.activeElement) != null && n.closest(".k-grid-edit-row") ? He.current = document.activeElement : He.current = void 0;
      const r = Array.from((o = T.current) == null ? void 0 : o.getElementsByClassName("k-grid-edit-row"));
      r.length > Be.current.length ? Re.current = r.filter(
        (i) => !Be.current.includes(i)
      )[0] : r.length === 1 && (Re.current = r[0], Me.current = !0), Be.current = r;
    }
  }, D = () => t.dataRef.filter((e) => e.rowType === "data").map((e) => e.dataItem), p = () => {
    var e;
    if (ae)
      return ((e = me()) == null ? void 0 : e.ownerDocument) || document;
  }, me = () => M.current, Pe = c.useCallback(
    (e) => {
      var r, i;
      if (!C.current || !((r = C.current) != null && r.container) || t.gridProps.scrollable === "none")
        return;
      G.current && G.current.disconnect();
      const { rowIndex: n } = e, o = me();
      if (K) {
        const a = ((i = C.current.rowHeightService) == null ? void 0 : i.offset(n)) || 0;
        C.current.container.scroll(0, a);
      } else if (o) {
        const a = n < 1 ? o.querySelector("tbody > tr:nth-child(1)") : o.querySelector(`tbody > tr:nth-child(${n + 1})`);
        a && H.current && (H.current.scrollTop = a.offsetTop);
      }
    },
    [t.gridProps.scrollable]
  ), Ye = (e) => JSON.stringify(e.map((n) => ({ id: n.id, field: n.field, title: n.title, children: n.children }))), tn = () => Ye(vn) === Ye(t.columnsRef), nn = () => {
    ve.current = window.innerWidth, tn() || Y();
  }, rn = () => {
    var a;
    const { virtualTotal: e, virtualPageSize: n, gridProps: o } = t, r = C.current, i = t.gridProps.rowHeight || ((a = o.minRowHeightRef) == null ? void 0 : a.current) || 0;
    r && (r.fixedScroll = o.fixedScroll || !1, r.PageChange = Bt, r.pageSize = n, r.scrollableVirtual = K, r.container = H.current, r.tableBody = T.current, r.scrollHeightContainer = et.current, r.table = j.current, (!r.rowHeightService || r.total !== e) && i && (r.total = e, r.rowHeightService = new kn(e, i)));
  }, Qe = c.useCallback(
    (e) => {
      const n = { rowIndex: Le.current };
      e.forEach((o) => {
        o.boundingClientRect.height !== o.intersectionRect.height && Pe(n);
      });
    },
    [Pe]
  ), Y = () => {
    t.gridProps.forceUpdate && t.gridProps.forceUpdate();
  }, on = (e) => e.left !== void 0 ? We !== "rtl" ? { left: e.left, right: e.right } : { left: e.right, right: e.left } : {}, E = c.useRef(null), C = c.useRef(void 0), P = c.useRef(void 0), U = c.useRef(void 0), V = c.useRef(void 0), Q = c.useRef(void 0), he = c.useRef(void 0), G = c.useRef(null), T = c.useRef(null), an = c.useRef(null), H = c.useRef(null), j = c.useRef(null), cn = c.useRef(null), M = c.useRef(null), et = c.useRef(null), q = c.useRef(null), $ = c.useRef(null), A = c.useRef(null), F = c.useRef(null), L = c.useRef(null), B = c.useRef(null), dn = c.useRef(null), sn = c.useRef(null), Ge = c.useRef(!1), Te = c.useRef(!1), Re = c.useRef(void 0), He = c.useRef(void 0), Me = c.useRef(!1), be = c.useRef(!0), Ae = c.useRef(0), Fe = c.useRef(void 0), Le = c.useRef(void 0), Be = c.useRef([]), tt = c.useRef([]), ve = c.useRef(0), Ce = c.useRef(
    null
  ), ln = typeof t.gridProps.groupable == "object" && !!t.gridProps.groupable.stickyHeaders, un = typeof t.gridProps.groupable == "object" && !!t.gridProps.groupable.stickyFooters, gn = !!((it = t.gridProps.group) != null && it.length), {
    stickyHeaderItems: fn,
    stickyHeaderRef: mn,
    stickyFooterItems: Pn,
    stickyFooterRef: Ie,
    scrollToStickyGroup: hn,
    update: nt
  } = qn({
    enabled: ln,
    enabledFooters: un,
    flatData: t.dataRef,
    containerRef: H,
    tableBodyRef: T,
    rowHeight: t.gridProps.rowHeight,
    isGrouped: gn,
    virtualSkipRef: t.gridProps.virtualSkipRef,
    rowHeightServiceRef: {
      get current() {
        var e;
        return (e = C.current) == null ? void 0 : e.rowHeightService;
      }
    }
  }), ie = c.useRef(null), Rn = c.useRef(null), bn = c.useRef(null), We = En(M), K = t.isVirtualScroll, vn = c.useMemo(() => c.Children.toArray(t.gridProps.children), [t.gridProps.children]), rt = t.gridProps.groupable === !0 || typeof t.gridProps.groupable == "object" && t.gridProps.groupable.enabled !== !1, v = we(t.gridProps.selectable), ot = Gn(t.gridProps.editable), Cn = ve.current && re && ve.current <= re.medium && t.gridProps.adaptive;
  return c.useMemo(() => {
    ne.onConstructor({
      navigatable: !!t.gridProps.navigatable,
      contextStateRef: V,
      navigationStateRef: Q,
      idPrefix: t.id
    }), C.current = new er();
  }, []), c.useMemo(() => {
    var e;
    (e = C.current) == null || e.reset();
  }, [
    t.gridProps.scrollable,
    t.gridProps.total,
    t.gridProps.filter,
    t.gridProps.group,
    rt,
    t.gridProps.sort,
    t.gridProps.rowHeight
  ]), c.useEffect(() => {
    O.current = {};
  }), c.useEffect(() => (t.gridProps.clipboard && (he.current = new Tn(fe), he.current.addEventListeners(p())), () => {
    he.current && he.current.removeEventListeners(p());
  }), [t.gridProps.onClipboard, t.gridProps.clipboard, fe, p]), c.useEffect(() => (Je(), Ke(), at(), ne.onComponentDidMount({
    scope: M.current || void 0,
    contextStateRef: V,
    navigationStateRef: Q
  }), () => {
    clearTimeout(Fe.current);
  }), []), c.useEffect(() => {
    var e;
    Je(), Ke(), at(), K && (ge(), Jt(), (e = C.current) == null || e.update()), nt(), en(), ne.onComponentDidUpdate({
      scope: M.current || void 0,
      contextStateRef: V,
      navigationStateRef: Q,
      focusFirst: Te.current,
      newEditableRow: Re.current,
      singleEditRow: Me.current,
      lastActiveElement: He.current,
      navigatable: t.gridProps.navigatable
    }), ht(), Te.current = !1, Re.current = void 0, Ce.current = void 0;
  }), c.useEffect(() => {
    if (ae) {
      const e = {
        rootMargin: "0px",
        threshold: 0.9
      };
      G.current = window.IntersectionObserver && new window.IntersectionObserver(Qe, e) || null;
    }
    return () => {
      G.current && (G.current.disconnect(), G.current = null);
    };
  }, [Qe]), c.useEffect(() => {
    var n;
    let e;
    return ae && window.ResizeObserver && (e = new window.ResizeObserver(() => {
      nn(), K && ge();
    }), e.observe((n = p()) == null ? void 0 : n.body)), () => {
      e == null || e.disconnect();
    };
  }, []), c.useEffect(() => {
    if (!ae || !window.ResizeObserver || !K || !H.current)
      return;
    const e = () => {
      var i, a;
      const o = ((i = t.gridProps.containerHeightRef) == null ? void 0 : i.current) || 0;
      ge();
      const r = ((a = t.gridProps.containerHeightRef) == null ? void 0 : a.current) || 0;
      (o === 0 && r > 0 || Math.abs(r - o) > 10) && Y();
    }, n = new window.ResizeObserver(e);
    return n.observe(H.current), () => {
      n.disconnect();
    };
  }, [K, ge]), c.useImperativeHandle(
    E,
    () => ({
      get element() {
        return me();
      },
      props: t.gridProps,
      get columns() {
        return de();
      },
      scrollIntoView: (e) => {
        var r;
        if (!((r = C.current) != null && r.container) || t.gridProps.scrollable === "none")
          return;
        const { rowIndex: n } = e;
        Le.current = n;
        const o = me();
        if (G.current && o) {
          G.current.disconnect();
          const i = o.querySelector(`[absolute-row-index="${Le.current}"]`);
          i ? G.current.observe(i) : Pe(e);
        }
      },
      fitColumns: (e) => {
        P.current.dblClickHandler(null, e);
      },
      exportAsPdf: Se,
      saveAsCsv: $e,
      getCsvBlob: _e,
      getTotal: xe,
      getLeafDataItems: D
    })
  ), c.useImperativeHandle(t.gridRef, () => E.current), c.useMemo(() => {
    P.current = new Vn(Xe);
  }, [t.gridProps.onColumnResize, t.columnsRef]), c.useMemo(() => {
    U.current = new jn(ue, $t, Ze);
  }, [
    t.gridProps.onColumnReorder,
    t.gridProps.onGroupChange,
    t.gridProps.group,
    t.columnsRef,
    t.gridProps.groupable
  ]), P.current.resizable = t.gridProps.resizable || !1, P.current.columns = t.columnsRef, P.current.columnsState = xn(t.columnsState), U.current.reorderable = t.gridProps.reorderable || !1, U.current.groupable = rt, U.current.columns = t.columnsRef, U.current.dir = We, rn(), Sn("grid", E, t.gridProps, t.gridProps.webMcp), /* @__PURE__ */ c.createElement(
    cr.Provider,
    {
      value: {
        isClient: S,
        rowReorder: oe,
        activeDragRowDataItemRef: ie,
        reorderRowDragTargetRef: Rn,
        reorderRowDropTargetRef: bn,
        dir: We,
        getCellPositionStyle: on,
        dataItemKey: t.gridProps.dataItemKey,
        columnsState: t.columnsState,
        columnsRef: t.columnsRef,
        hiddenColumnsRef: t.hiddenColumnsRef,
        onColumnsStateChange: De,
        groupable: t.gridProps.groupable,
        group: t.gridProps.group,
        reorderable: t.gridProps.reorderable,
        defaultGroup: t.gridProps.defaultGroup,
        groupChange: ke,
        selectionRelease: Ve,
        pinnedSelectionRelease: Ht,
        pagerPageChange: pt,
        onContextMenu: ft,
        rowClick: Ct,
        rowDblClick: It,
        cellClick: Et,
        headerCellClick: Ue,
        itemChange: Dt,
        onDialogEditCancel: yt,
        onDialogEditSubmit: wt,
        columnReorder: ue,
        onResize: Xe,
        getTotal: xe,
        sortable: t.gridProps.sortable,
        pageable: t.gridProps.pageable,
        pageSize: t.gridProps.pageSize,
        sort: t.gridProps.sort,
        skip: t.gridProps.skip,
        take: t.gridProps.take,
        defaultSort: t.gridProps.defaultSort,
        sortChange: je,
        filterable: t.gridProps.filterable,
        filter: t.gridProps.filter,
        defaultFilter: t.gridProps.defaultFilter,
        filterOperators: t.gridProps.filterOperators || dr,
        getLeafDataItems: D,
        filterChange: Nt,
        applyHighlightDescriptor: Ut,
        applySelectionDescriptor: Ft,
        highlight: t.gridProps.highlight,
        select: t.gridProps.select,
        searchChange: Vt,
        exportAsPdf: Se,
        exportAsCsv: $e,
        getCsvBlob: _e,
        onHeaderSelectionChange: Tt,
        columnGroupChange: _t,
        onKeyDown: Rt,
        onFocus: bt,
        scrollHandler: mt,
        selectionChange: Kt,
        mobileMode: Cn,
        adaptiveColumnMenuRef: ve.current,
        adpativeTitle: t.gridProps.adaptiveTitle,
        adaptive: t.gridProps.adaptive,
        dispatchDetailExpand: xt,
        dispatchGroupExpand: St,
        columnResizeRef: P,
        dragLogicRef: U,
        navigationStateRef: Q,
        tableElementRef: j,
        tableBodyElementRef: T,
        headerElementRef: an,
        containerElementRef: H,
        headTableElementRef: cn,
        elementRef: M,
        virtualScrollHeightContainerRef: et,
        footerRef: q,
        headerRef: $,
        vsRef: C,
        stickyHeaderItems: fn,
        stickyHeaderRef: mn,
        stickyFooterItems: Pn,
        stickyFooterRef: Ie,
        stickyHeaderTableRef: A,
        stickyFooterTableRef: F,
        pinnedTopTableRef: L,
        pinnedBottomTableRef: B,
        pinnedTopRef: dn,
        pinnedBottomRef: sn,
        onRowPin: se,
        getRowPinPosition: kt
      }
    },
    /* @__PURE__ */ c.createElement(Hn.Provider, { value: V.current }, t.children),
    /* @__PURE__ */ c.createElement(
      tr,
      {
        show: b.show && (ce == null ? void 0 : ce.length),
        dataItem: b.dataItem,
        field: b.field,
        items: ce,
        offset: b.offset,
        onClose: Oe,
        onSelect: gt
      }
    ),
    t.gridProps.pdf && /* @__PURE__ */ c.createElement(
      ir,
      {
        gridProps: t.gridProps,
        innerGrid: t.innerGrid,
        pdf: typeof t.gridProps.pdf == "object" ? t.gridProps.pdf : {},
        onPdfExport: jt,
        ref: (e) => Z.current = e
      }
    ),
    t.gridProps.csv && /* @__PURE__ */ c.createElement(
      ar,
      {
        gridProps: t.gridProps,
        csv: typeof t.gridProps.csv == "object" ? t.gridProps.csv : {},
        onCsvExport: qt,
        columnsState: t.columnsState,
        ref: (e) => k.current = e
      }
    )
  );
};
export {
  xr as GridClientWrapper
};
