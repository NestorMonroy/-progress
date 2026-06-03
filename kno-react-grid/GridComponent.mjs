/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as n from "react";
import { uGrid as At, hasValidLicense as Ft, getLicenseMessage as Ot, validatePackage as _t, getter as p, classNames as c, WatermarkOverlay as Ze } from "@progress/kno-react-common";
import { getDetailExpandableOptions as Vt, getGroupExpandableOptions as jt, getSelectionOptions as $t, tableKeyboardNavigationTools as j, Pager as Zt, tableKeyboardNavigationBodyAttributes as Ut, tableKeyboardNavigationScopeAttributes as Ue } from "@progress/kno-react-data-tools";
import { GridHierarchyCell as qt } from "./cells/hierarchycell/GridHierarchyCell.mjs";
import { Header as Jt } from "./header/Header.mjs";
import { HeaderRow as Qt } from "./header/HeaderRow.mjs";
import { FilterRow as Xt } from "./header/FilterRow.mjs";
import { GroupPanel as Yt } from "./header/GroupPanel.mjs";
import { Footer as pt } from "./footer/Footer.mjs";
import { isRowReorderEnabled as ea, getRowSpanOptions as qe, getColumnWidth as ee, isSorted as ta, flatData as aa, autoGenerateColumns as la, mapColumns as na, clientColumn as ia, getColSpan as ra, readColumns as oa, getFlatColumnsState as da, getColumnState as te } from "./utils/index.mjs";
import { normalizeAutoProcessData as sa, processData as ma } from "./utils/dataProcessing.mjs";
import { orderBy as Je } from "@progress/kno-data-query";
import { GridGroupCell as ca } from "./cells/groupcell/GridGroupCell.mjs";
import { GridHeaderGroupSpacerCell as ua } from "./header/GridHeaderGroupSpacerCell.mjs";
import { GridHeaderSelectionCell as fa } from "./header/GridHeaderSelectionCell.mjs";
import { GridNoRecords as Qe } from "./components/noRecords/GridNoRecords.mjs";
import { operators as Xe } from "./filterCommon.mjs";
import { FooterRow as ga } from "./footer/FooterRow.mjs";
import { normalize as ba } from "./paging/GridPagerSettings.mjs";
import { packageMetadata as ae } from "./package-metadata.mjs";
import { GridDetailCell as ha } from "./cells/detailcell/GridDetailCell.mjs";
import { GridNoRecordsContainer as Ye } from "./components/noRecords/GridNoRecordsContainer.mjs";
import { GridClientWrapper as pe } from "./GridClientWrapper.mjs";
import { GridColGroup as wa } from "./components/colGroup/GridColGroup.mjs";
import { GridTable as Ca } from "./components/table/GridTable.mjs";
import { GridDropClue as et } from "./components/GridDropClue.mjs";
import { GridDragClue as tt } from "./components/GridDragClue.mjs";
import { GridTableBody as at } from "./components/table/GridTableBody.mjs";
import { PagerContainer as Ra } from "./components/PagerContainer.mjs";
import { GridTableScrollable as ya } from "./components/table/GridTableScrollable.mjs";
import { GridElementContainer as lt } from "./components/GridElementContainer.mjs";
import { GridContainerElementContainer as Ea } from "./components/GridContainerElementContainer.mjs";
import { VirtualScrollHeightContainer as Sa } from "./components/VirtualScrollHeightContainer.mjs";
import { gridAriaLabel as $, messages as nt } from "./messages/index.mjs";
import { GridReorderableRowsContainer as va } from "./components/GridDraggableRowsContainer.mjs";
import { GridRowReorderCell as Ga } from "./cells/rowreordercell/GridRowReorderCell.mjs";
import { GridHeaderRowReorderCell as Ia } from "./header/client/GridHeaderRowReorderCell.mjs";
import { GridLoader as it } from "./components/GridLoader.mjs";
import { gridPremiumFeatures as ka } from "./utils/premium.mjs";
import { LocalizationService as xa, IntlService as Ha } from "@progress/kno-react-intl";
import { getVirtualCellsToRender as La } from "./utils/virtualColumns.mjs";
import { GridEditDialog as Na } from "./components/GridEditDialog.mjs";
import { GridSelectionCellServer as Da } from "./cells/selectioncell/GridSelectionCellServer.mjs";
import { GridSelectionCell as Ta } from "./cells/selectioncell/GridSelectionCell.mjs";
import { GridHierarchyCellServer as Pa } from "./cells/hierarchycell/GridHierarchyCellServer.mjs";
import { GridRowReorderCellServer as Ba } from "./cells/rowreordercell/GridRowReorderCellServer.mjs";
import { GridDetailCellServer as Ma } from "./cells/detailcell/GridDetailCellServer.mjs";
import { GridGroupCellServer as za } from "./cells/groupcell/GridGroupCellServer.mjs";
import { GridPinCell as Ka } from "./cells/pincell/GridPinCell.mjs";
import { GridPinCellServer as Wa } from "./cells/pincell/GridPinCellServer.mjs";
import { GridHeaderPinCell as Aa } from "./header/client/GridHeaderPinCell.mjs";
import { StackedModeColGroup as Fa } from "./stacked/StackedModeComponents.mjs";
import { GridRowRenderer as Oa } from "./rows/GridRowRenderer.mjs";
import { GridDetailRowRenderer as _a } from "./rows/GridDetailRowRenderer.mjs";
import { StickyGroupTable as rt } from "./components/StickyGroupTable.mjs";
import { PinnedRowsTable as ot } from "./components/PinnedRowsTable.mjs";
import { getRowContents as Va } from "./getRowContents.mjs";
const ja = n.forwardRef((e, dt) => {
  var De, Te, Pe, Be, Me, ze, Ke, We, Ae, Fe, Oe, _e, Ve, je;
  const G = e.id + "-role-element-id", E = e.navigatable ? G : "";
  let w = e.columnsState || [];
  const st = (t, i, r, o, a, l, d) => {
    const h = [], F = aa(
      h,
      t,
      i,
      { index: r },
      o !== void 0,
      a,
      l,
      It.defaultExpand,
      d
    );
    return { flattedData: h, resolvedGroupsCount: F };
  }, mt = (t) => {
    const i = t.filter(
      (r) => r && r.type && r.type.displayName === "KendoReactGridColumn"
    );
    return oa(i, w, { prevId: 0, idPrefix: E });
  }, ct = () => {
    const t = [], i = (r, o) => r == null ? void 0 : r.forEach((a) => {
      const l = a.hidden || o;
      t.push({
        ...a,
        hidden: l
      }), i(a.children, l);
    });
    return i(w, !1), t;
  }, ut = (t) => {
    const i = ct();
    return [
      t.filter((r) => {
        var o;
        return !r.hidden && !((o = i.find((a) => a.id === r.id)) != null && o.hidden);
      }),
      t.filter((r) => {
        var o;
        return r.hidden || ((o = i.find((a) => a.id === r.id)) == null ? void 0 : o.hidden);
      })
    ];
  }, ft = (t, i) => {
    s = mt(t), s.filter((a) => !a.hidden).length === 0 && (s = la(
      C,
      e.group,
      {
        column: v.column
      },
      {
        prevId: 0,
        idPrefix: E
      }
    )), bt(s, i);
    const [r, o] = ut(s);
    s = r, ie = o, N = na(s, w, !0), re = s.map(ia);
  }, gt = (t, i) => {
    const r = (o) => {
      var l;
      const a = i.find((d) => d.id === o.id);
      if (a) {
        const d = { ...a };
        return d.children = (l = o.children) == null ? void 0 : l.map(r), d;
      }
      return te(o);
    };
    w = t.filter((o) => o.parentIndex === -1).map(r);
  }, bt = (t, i) => {
    t.filter((l) => l.columnType === "checkbox").forEach((l) => {
      l.width = l.width || "50px", l.defaultCell = e.isClient ? Ta : Da, l.defaultHeaderCell = fa, l._type = "edit";
    }), k !== void 0 && t.filter((l) => l.columnType === "reorder").forEach((l) => {
      l.width = l.width || "50px", l.defaultCell = e.isClient ? Ga : Ba, l.defaultHeaderCell = Ia, l.sortable = !1, l.filterable = !1, l.editable = !1;
    }), e.pinnable && t.filter((l) => l.columnType === "pin").forEach((l) => {
      l.width = l.width || "48px", l.defaultCell = e.isClient ? Ka : Wa, l.defaultHeaderCell = Aa, l.sortable = !1, l.filterable = !1, l.editable = !1;
    });
    const r = da(w);
    gt(t, r);
    const o = {
      id: "",
      resizable: !0,
      width: "32px",
      title: " ",
      declarationIndex: -1,
      orderIndex: -1,
      children: [],
      parentIndex: -1,
      depth: 0,
      colSpan: 0,
      headerColSpan: 0,
      rowSpan: 0,
      left: 0,
      right: 0,
      index: 0,
      rightBorder: !1,
      ariaColumnIndex: 0,
      isAccessible: !0
    };
    let a = 0;
    if (v.enabled && e.detail) {
      const l = {
        ...o,
        _type: "expand",
        id: j.generateNavigatableId(`${a++}`, "expand", "column"),
        defaultCell: e.isClient ? qt : Pa,
        field: v.column,
        headerClassName: c(m.hierarchyCell({}))
      };
      t.unshift(l), w.unshift(r.find((d) => d.id === l.id) || te(l));
    }
    for (let l = 0; l < i; l++) {
      const d = {
        ...o,
        isAccessible: !1,
        defaultCell: e.isClient ? ca : za,
        defaultHeaderCell: ua,
        id: j.generateNavigatableId(`${a++}`, "group", "column"),
        field: "value",
        locked: e.lockGroups
      };
      t.unshift(d), w.unshift(r.find((h) => h.id === d.id) || te(d));
    }
    t.slice(a).forEach((l) => {
      l.parentIndex >= 0 && (l.parentIndex += a), l.rowSpannable = l.rowSpannable !== void 0 ? qe(l.rowSpannable) : me;
    });
  }, le = () => e.isClient ? s : re, ne = (t) => {
    const i = [];
    let r = null, o = 0;
    if (u.forEach((a, l) => {
      let d = parseFloat((a.width || "").toString()) || 10;
      if (typeof (a == null ? void 0 : a.width) == "number" && (a != null && a.minResizableWidth) && (a == null ? void 0 : a.width) < (a == null ? void 0 : a.minResizableWidth) && (d = a == null ? void 0 : a.minResizableWidth), typeof (a == null ? void 0 : a.width) == "number" && (a != null && a.minWidth) && (a == null ? void 0 : a.width) < (a == null ? void 0 : a.minWidth) ? d = a == null ? void 0 : a.minWidth : typeof (a == null ? void 0 : a.width) == "number" && (a != null && a.maxWidth) && (a == null ? void 0 : a.width) > (a == null ? void 0 : a.maxWidth) && (d = a == null ? void 0 : a.maxWidth), o) {
        o--, r && (r.width += d);
        return;
      }
      const h = Math.min(ra(a, t), u.length - l);
      o = h - 1, r = {
        width: d,
        colSpan: h,
        columnIndex: l
      }, i.push(r);
    }), e.columnVirtualization) {
      const a = wt.current || 0, l = Ct.current || parseFloat(((e.style || {}).width || "").toString());
      return La({
        cellModels: i,
        columns: u,
        tableViewPortWidth: l,
        scrollLeft: a
      });
    }
    return i;
  }, ht = () => {
    const { pageable: t, take: i, pageSize: r } = e;
    if (!R)
      return 0;
    if (!t) {
      if (i)
        return i;
      if (r)
        return r;
    }
    const o = e.rowHeight || yt.current, a = Rt.current;
    return a && o ? Math.ceil(a / o * 1.5) : 0;
  };
  let f = [], Z, s = [], ie = [], re = [], N = [[]];
  const wt = e.scrollLeftRef || { current: 0 }, Ct = e.widthRef || { current: 0 }, Rt = e.containerHeightRef || { current: 0 }, yt = e.minRowHeightRef || { current: 0 }, D = e.localization || new xa(e.language), Et = e.intl || new Ha((De = e.locale) != null ? De : "en"), I = e.unstyled, m = I && I.uGrid ? I.uGrid : At, k = ea(e.rowReorderable), R = e.scrollable === "virtual" || e.scrollable === void 0 && e.isClient && Ft(ae) || !1, b = e.dataLayoutMode === "stacked", S = ((Te = e.group) == null ? void 0 : Te.length) || 0, oe = Ot(ae), x = sa(e.autoProcessData);
  let C, y;
  if (Array.isArray(e.data) ? (C = e.data, y = (Pe = e.total) != null ? Pe : C.length) : (C = ((Be = e.data) == null ? void 0 : Be.data) || [], y = (Ke = (ze = e.total) != null ? ze : (Me = e.data) == null ? void 0 : Me.total) != null ? Ke : C.length), x) {
    const t = ma(C, {
      autoProcessData: x,
      group: e.group,
      sort: e.sort,
      filter: e.filter,
      search: e.search,
      pageable: e.pageable,
      take: e.take,
      skip: e.skip,
      total: e.total,
      isVirtualScroll: R,
      includePaging: !0
    });
    C = t.data, y = t.total;
  }
  const B = C.length === y, { size: g } = e, St = typeof e.groupable == "object" && e.groupable.footer || "none", vt = typeof e.groupable == "object" && !!e.groupable.stickyHeaders, Gt = typeof e.groupable == "object" && !!e.groupable.stickyFooters, M = e.groupable === !0 || typeof e.groupable == "object" && e.groupable.enabled !== !1, v = Vt(!!e.detail), It = jt(
    typeof e.groupable == "object" && e.groupable.enabled !== !1 ? e.groupable.expandable : e.groupable
  ), z = !!((We = e.group) != null && We.length), { resolvedGroupsCount: kt, flattedData: xt } = st(
    C,
    St,
    B ? 0 : e.skip || 0,
    e.group,
    e.detailExpand,
    e.groupExpand,
    e.dataItemKey
  );
  f = xt;
  const U = ht(), K = ((Ae = e.virtualSkipRef) == null ? void 0 : Ae.current) || 0;
  let de = y;
  if (R) {
    let t = e.skip || 0;
    if ((z || e.pageable) && (t = K, de = f.length), B || z || e.pageable)
      if (U === 0) {
        const i = Math.min(e.take || e.pageSize || 20, f.length);
        Z = f.slice(t, t + i);
      } else
        Z = f.slice(t, t + U);
  }
  const se = $t(e.selectable), me = qe(e.rowSpannable), Ht = se && se.drag ? "none" : void 0, W = n.useMemo(() => n.Children.toArray(e.children), [e.children]);
  ft(W, kt);
  const q = n.useMemo(() => {
    const t = ka(e, s);
    return {
      premium: t.length > 0,
      features: t
    };
  }, [e, s]), ce = n.useMemo(() => q.premium ? !_t(ae, { component: "Grid", features: q.features }) : !1, [q.premium]), ue = W.map((t) => t && t.type && t.type.displayName === "KendoReactGridToolbar" ? n.cloneElement(t, { ...t.props, _ariaControls: G, ariaLabel: "Top toolbar" }) : null), A = W.filter((t) => t && t.type && t.type.displayName === "KendoReactGridNoRecords"), fe = W.filter(
    (t) => t && t.type && t.type.displayName === "KendoReactGridStatusBar"
  ), u = s.filter((t) => t.children.length === 0), ge = M && !b && /* @__PURE__ */ n.createElement(Yt, { columns: le(), group: e.group || [], ariaControls: G }), be = b ? null : /* @__PURE__ */ n.createElement(
    Jt,
    {
      size: g,
      staticHeaders: e.scrollable !== "none",
      draggable: e.reorderable || M,
      headerRow: /* @__PURE__ */ n.createElement(
        Qt,
        {
          cells: e.cells,
          sort: e.sort,
          sortable: e.sortable,
          group: e.group || [],
          groupable: M,
          filter: e.filter,
          filterable: e.filterable,
          filterOperators: e.filterOperators || Xe,
          columnMenu: e.columnMenu,
          columnMenuIcon: e.columnMenuIcon,
          columns: s,
          columnsMap: N,
          navigatable: !!e.navigatable,
          localization: D,
          unstyled: I,
          columnsState: w,
          headerSelectionValue: !!(e.select && f.filter((t) => t.rowType === "data").every(
            (t) => e.select && e.dataItemKey && p(e.dataItemKey)(t.dataItem) !== void 0 ? e.select[p(e.dataItemKey)(t.dataItem)] : void 0
          ))
        }
      ),
      filterRow: e.filterable && /* @__PURE__ */ n.createElement(
        Xt,
        {
          cells: e.cells,
          size: g,
          columns: s,
          filter: e.filter,
          filterOperators: e.filterOperators || Xe,
          sort: e.sort,
          navigatable: !!e.navigatable,
          ariaRowIndex: N.length + 1,
          localization: D
        }
      ) || void 0,
      cols: u.map((t, i) => /* @__PURE__ */ n.createElement("col", { key: i.toString(), width: ee(t) }))
    }
  ), he = u.findIndex((t) => typeof t.colSpan == "function") > -1;
  let we;
  he || (we = ne(null));
  const J = ((Fe = e.editable) == null ? void 0 : Fe.mode) === "dialog", Lt = (Oe = e.editable) == null ? void 0 : Oe.enabled, Ce = (Ve = (_e = e.editZoneRef) == null ? void 0 : _e.current) != null ? Ve : "body", Nt = Ce === "pinned" ? void 0 : e.edit, Re = Ce === "body" ? void 0 : e.edit, T = {
    leafColumns: u,
    columnsState: w,
    cellsToRender: we,
    getCellsToRender: ne,
    hasDynamicColSpan: he,
    idPrefix: E,
    gridClasses: m,
    unstyled: I,
    localization: D,
    intl: Et,
    cells: e.cells,
    isRowReorderable: k,
    sort: e.sort,
    editable: e.editable,
    isClient: e.isClient,
    isEditDialog: J,
    dataItemKey: e.dataItemKey,
    select: e.select,
    highlight: e.highlight
  }, Dt = 0;
  let Q = null;
  const ye = (t) => t >= f.length - Dt, X = [], Ee = !f.length, Se = n.useMemo(() => {
    var i;
    const t = e.pinnedTopRows || [];
    return x && ((i = e.sort) != null && i.length) ? Je([...t], e.sort) : t;
  }, [e.pinnedTopRows, e.sort, x]), ve = n.useMemo(() => {
    var i;
    const t = e.pinnedBottomRows || [];
    return x && ((i = e.sort) != null && i.length) ? Je([...t], e.sort) : t;
  }, [e.pinnedBottomRows, e.sort, x]), Tt = e.pinnable && Se.length > 0, Pt = e.pinnable && ve.length > 0;
  let P = 0;
  const Bt = n.useMemo(() => {
    const t = /* @__PURE__ */ new Set();
    return e.pinnedTopRows && e.pinnedTopRows.forEach((i) => t.add(i)), e.pinnedBottomRows && e.pinnedBottomRows.forEach((i) => t.add(i)), t;
  }, [e.pinnedTopRows, e.pinnedBottomRows]);
  if (f.length) {
    const t = N.length + (e.filterable ? 1 : 0) + 1;
    let i = e.skip || 0, r = -1, o = 0;
    const a = me.enabled ? {} : void 0;
    if (R) {
      if (K > 0) {
        const l = f.slice(0, K).filter((d) => d.rowType === "data").length;
        r += l, i += K;
      }
      !e.pageable && B && (r += e.skip || 0);
    }
    (Z || f).forEach((l, d) => {
      var $e;
      l.rowType === "data" && r++;
      const h = l.dataIndex % 2 !== 0, F = e.dataItemKey && p(e.dataItemKey)(l.dataItem), O = d + i, _ = F || "ai" + O, L = Va(T, Nt, l, _, r, h, a), Kt = l.rowType === "data" ? Bt.has(l.dataItem) : !1;
      if (P = O + t + o, J && Lt && L.isInEdit && (Q = l.dataItem), X.push(
        /* @__PURE__ */ n.createElement(
          Oa,
          {
            key: _,
            isStackedMode: b,
            item: l,
            rowId: _,
            dataIndex: r,
            idPrefix: E,
            ariaRowIndex: P,
            absoluteRowIndex: O,
            isAltRow: h,
            isHidden: ye(d),
            isRowReorderable: k,
            rowHeight: e.rowHeight,
            rows: e.rows,
            leafColumns: u,
            groupLevelCount: S,
            stackedLayoutSettings: e.stackedLayoutSettings,
            cells: e.cells,
            editMode: ($e = e.editable) == null ? void 0 : $e.mode,
            isSelected: L.isSelected,
            isHighlighted: L.isHighlighted,
            isInEdit: L.isInEdit && !J,
            preparedCells: L.row,
            showDetailToggle: !!e.detail && !!v.enabled,
            isDetailExpanded: !!l.expanded,
            detailExpandField: v.column,
            isPinned: Kt
          }
        )
      ), e.detail && l.rowType === "data" && l.expanded) {
        o++;
        const V = _ + "_1";
        P = O + t + o;
        const Wt = e.isClient ? ha : Ma;
        X.push(
          /* @__PURE__ */ n.createElement(
            _a,
            {
              key: V,
              isStackedMode: b,
              detailRowId: V,
              isHidden: ye(d),
              detailRowHeight: e.detailRowHeight,
              ariaRowIndex: P,
              item: l,
              groupLevelCount: S,
              groupDescriptors: e.group,
              lockGroups: e.lockGroups,
              cells: e.cells,
              leafColumns: u,
              detailExpandableEnabled: !!v.enabled,
              preparedCells: L.row,
              DetailCell: Wt,
              detail: e.detail,
              detailCellId: j.generateNavigatableId(`${V}-dcell`, E),
              detailHierarchyCellId: v.enabled ? j.generateNavigatableId(`${V}-dhcell`, E) : void 0,
              detailTrClassName: c(m.detailTr({ isAlt: h })),
              unstyled: I
            }
          )
        );
      }
    });
  }
  const Ge = {
    size: g,
    total: y,
    skip: e.skip || 0,
    take: (e.take !== void 0 ? e.take : e.pageSize) || 10,
    ...ba(e.pageable || {})
  }, Ie = /* @__PURE__ */ n.createElement(Ra, null, e.pager ? /* @__PURE__ */ n.createElement(e.pager, { ...Ge }) : /* @__PURE__ */ n.createElement(Zt, { className: c(m.pager({})), ...Ge })), Mt = (t, i) => /* @__PURE__ */ n.createElement("col", { key: i.toString(), width: ee(t) }), ke = (je = e.cells) != null && je.footerCell || s.some((t) => {
    var i;
    return !!((i = t.cells) != null && i.footerCell);
  }) ? /* @__PURE__ */ n.createElement(
    pt,
    {
      size: g,
      staticHeaders: e.scrollable !== "none",
      row: /* @__PURE__ */ n.createElement(
        ga,
        {
          cells: e.cells,
          idPrefix: E,
          columns: s,
          ariaRowIndex: P + 1
        }
      ),
      cols: u.map(Mt)
    }
  ) : null, H = b ? /* @__PURE__ */ n.createElement(Fa, { groupLevelCount: S }) : /* @__PURE__ */ n.createElement(wa, null, u.map((t, i) => /* @__PURE__ */ n.createElement(
    "col",
    {
      key: i.toString(),
      className: ta(t.field, e.sort) ? c(m.sorted({})) : void 0,
      width: ee(t)
    }
  ))), xe = e.reorderable || M, { detail: $a, cells: Za, rows: Ua, ...zt } = e, He = /* @__PURE__ */ n.createElement(
    "tbody",
    {
      role: "rowgroup",
      className: c(m.tbody({})),
      ...Ut
    },
    X
  ), Le = Q ? /* @__PURE__ */ n.createElement(Na, { columns: u, customEditDialog: e.editDialog, dataItem: Q }) : null;
  let Y = He;
  k && (Y = /* @__PURE__ */ n.createElement(
    va,
    {
      unstyled: m,
      columns: s,
      rowReorderSettings: e.rowReorderable
    },
    He
  ));
  const Ne = {
    gridRef: dt,
    innerGrid: e.innerGrid,
    gridProps: zt,
    columnsRef: le(),
    hiddenColumnsRef: ie,
    columnsMapRef: N,
    columnsState: w,
    dataRef: f,
    id: G,
    virtualTotal: de,
    isAllData: B,
    virtualPageSize: U,
    isVirtualScroll: R,
    detailExpandable: !!e.detail
  };
  return e.scrollable === "none" ? /* @__PURE__ */ n.createElement(pe, { ...Ne }, /* @__PURE__ */ n.createElement(lt, null, /* @__PURE__ */ n.createElement(
    "div",
    {
      id: e.id,
      style: e.style,
      className: c(m.wrapper({ size: g, isStackedMode: b }), e.className),
      ...Ue
    },
    ue,
    ge,
    /* @__PURE__ */ n.createElement(
      "div",
      {
        className: c(m.ariaRoot({})),
        role: "grid",
        "aria-colcount": u.length,
        "aria-rowcount": y,
        id: G,
        "aria-label": D.toLanguageString($, nt[$])
      },
      /* @__PURE__ */ n.createElement(
        Ca,
        {
          selectable: e.selectable,
          tableClassName: c(m.table({ size: g }))
        },
        H,
        be,
        /* @__PURE__ */ n.createElement(at, { rowReorderable: k }, Y),
        ke
      )
    ),
    Ee && /* @__PURE__ */ n.createElement(Ye, null, A.length ? A : /* @__PURE__ */ n.createElement(Qe, null)),
    xe && /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement(et, null), /* @__PURE__ */ n.createElement(tt, null))
  )), fe, e.pageable && Ie, /* @__PURE__ */ n.createElement(it, { loader: e.loader, showLoader: e.showLoader }), Le, ce && /* @__PURE__ */ n.createElement(Ze, { message: oe })) : /* @__PURE__ */ n.createElement(pe, { ...Ne }, /* @__PURE__ */ n.createElement(lt, null, /* @__PURE__ */ n.createElement(
    "div",
    {
      id: e.id,
      style: e.style,
      className: c(
        m.wrapper({
          size: g,
          virtual: R,
          isStackedMode: b
        }),
        e.className
      ),
      ...Ue
    },
    ue,
    ge,
    /* @__PURE__ */ n.createElement(
      "div",
      {
        className: c(m.ariaRoot({})),
        role: "grid",
        "aria-colcount": u.length,
        "aria-rowcount": y,
        id: G,
        "aria-label": D.toLanguageString($, nt[$])
      },
      be,
      e.isClient && Tt && /* @__PURE__ */ n.createElement(
        ot,
        {
          size: g,
          colGroups: H,
          dataRowContext: T,
          edit: Re,
          position: "top",
          pinnedItems: Se,
          isStackedMode: b,
          groupLevelCount: S,
          stackedLayoutSettings: e.stackedLayoutSettings,
          rowHeight: e.rowHeight,
          rows: e.rows,
          selectable: e.selectable
        }
      ),
      /* @__PURE__ */ n.createElement("div", { className: c(m.container({})), role: "presentation" }, e.isClient && z && vt && /* @__PURE__ */ n.createElement(
        rt,
        {
          size: g,
          colGroups: H,
          dataRowContext: T,
          position: "top",
          isStackedMode: b,
          groupLevelCount: S,
          stackedLayoutSettings: e.stackedLayoutSettings,
          rowHeight: e.rowHeight
        }
      ), /* @__PURE__ */ n.createElement(Ea, null, /* @__PURE__ */ n.createElement("div", { className: c(m.content({})), role: "presentation" }, /* @__PURE__ */ n.createElement("div", { className: c(m.tableWrap({})), role: "presentation" }, /* @__PURE__ */ n.createElement(
        ya,
        {
          selectable: e.selectable,
          tableClassName: c(
            m.table({
              size: g
            })
          ),
          tableStyle: { userSelect: Ht }
        },
        H,
        /* @__PURE__ */ n.createElement(at, { rowReorderable: k }, Y)
      ), Ee && /* @__PURE__ */ n.createElement(Ye, null, A.length ? A : /* @__PURE__ */ n.createElement(Qe, null))), R && /* @__PURE__ */ n.createElement(
        "div",
        {
          className: c(m.heightContainer({})),
          role: "presentation"
        },
        /* @__PURE__ */ n.createElement(Sa, { isVirtualScroll: R })
      ))), e.isClient && z && Gt && /* @__PURE__ */ n.createElement(
        rt,
        {
          size: g,
          colGroups: H,
          dataRowContext: T,
          position: "bottom",
          isStackedMode: b,
          groupLevelCount: S,
          stackedLayoutSettings: e.stackedLayoutSettings,
          rowHeight: e.rowHeight
        }
      )),
      e.isClient && Pt && /* @__PURE__ */ n.createElement(
        ot,
        {
          size: g,
          colGroups: H,
          dataRowContext: T,
          edit: Re,
          position: "bottom",
          pinnedItems: ve,
          isStackedMode: b,
          groupLevelCount: S,
          stackedLayoutSettings: e.stackedLayoutSettings,
          rowHeight: e.rowHeight,
          rows: e.rows,
          selectable: e.selectable
        }
      ),
      ke,
      xe && /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement(et, null), /* @__PURE__ */ n.createElement(tt, null)),
      ce && /* @__PURE__ */ n.createElement(Ze, { message: oe })
    ),
    fe,
    e.pageable && Ie,
    /* @__PURE__ */ n.createElement(it, { loader: e.loader, showLoader: e.showLoader }),
    Le
  )));
});
ja.displayName = "KendoReactGridComponent";
export {
  ja as GridComponent
};
