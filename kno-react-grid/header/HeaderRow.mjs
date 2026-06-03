/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as t from "react";
import { GridHeaderCell as F } from "./GridHeaderCell.mjs";
import { uGrid as j, classNames as o, IconWrap as q } from "@progress/kno-react-common";
import { HeaderThElement as J } from "@progress/kno-react-data-tools";
import { sortAriaLabel as y, messages as K } from "../messages/index.mjs";
import { sortAscSmallIcon as Q, sortDescSmallIcon as U } from "@progress/kno-svg-icons";
import { clientColumn as P, isClientReference as G, resolveCells as X } from "../utils/index.mjs";
import { GridHeaderCellContainer as N } from "./client/GridHeaderCellContainer.mjs";
import { HeaderRowDraggable as Y } from "./client/HeaderRowDraggable.mjs";
import { GridHeaderRowContainer as Z } from "./client/GridHeaderRowContainer.mjs";
import { GridHeaderCellElementContainer as _ } from "./client/GridHeaderCellElementContainer.mjs";
import { HeaderCellResizer as $ } from "./client/HeaderCellResizer.mjs";
const p = {
  none: "none",
  asc: "ascending",
  desc: "descending"
}, de = (e) => {
  const R = e.columnsState || [], c = e.unstyled, s = c && c.uGrid ? c.uGrid : j;
  let w = 0, x = -1;
  const A = (a) => {
    if (!e.sort)
      return null;
    const n = o(s.sortIcon({}));
    return a >= 0 && [
      /* @__PURE__ */ t.createElement("span", { key: 1, className: n }, /* @__PURE__ */ t.createElement(
        q,
        {
          name: "sort-" + e.sort[a].dir + "-small",
          icon: e.sort[a].dir === "asc" ? Q : U
        }
      )),
      e.sort.length > 1 && /* @__PURE__ */ t.createElement("span", { key: 2, className: n }, /* @__PURE__ */ t.createElement("span", { className: o(s.sortOrder({})) }, a + 1))
    ];
  }, D = (a) => a.map((n) => {
    var I, M, v;
    const l = e.columns[n], i = R[n], m = (M = (I = l.locked) != null ? I : i == null ? void 0 : i.locked) != null ? M : !1, h = e.sortable && l.sortable, d = e.sort ? e.sort.findIndex((r) => r.field === l.field) : -1, W = d >= 0 && e.sort[d].dir || "none", u = l.columnMenu === null ? null : l.columnMenu || e.columnMenu, O = l.menuIcon || e.columnMenuIcon, T = o(
      o(
        s.headerTh({
          first: l.kFirst,
          filterable: !!u,
          locked: m,
          sorted: e.sort && e.sort.some((r) => r.field === l.field)
        })
      ),
      l.headerClassName
    );
    m === !1 && (l.left = 0);
    const V = e.localization.toLanguageString(y, K[y]), z = l.isAccessible ? {
      ariaSort: p[W],
      role: "columnheader",
      ariaColumnIndex: l.ariaColumnIndex,
      ariaSelected: !1,
      ariaDescription: h ? V : "",
      ariaHasPopup: u ? "dialog" : void 0
    } : {
      role: "presentation"
    }, E = l.declarationIndex >= 0 ? ++x : --w, f = {
      field: l.field,
      title: l.title,
      selectionValue: (v = l.headerSelectionValue) != null ? v : e.headerSelectionValue,
      children: A(d),
      selectionChange: null,
      columnMenuWrapperProps: {
        column: {
          field: l.field,
          title: l.title,
          locked: m,
          filter: l.filter,
          id: l.id
        },
        sortable: h && e.sortable,
        sort: e.sort,
        filter: e.filter,
        filterable: e.filterable && l.filterable,
        filterOperators: e.filterOperators,
        navigatable: e.navigatable,
        group: e.group,
        groupable: e.groupable,
        columnMenu: u,
        columnMenuIcon: O
      }
    }, C = {
      ...z,
      colSpan: l.headerColSpan,
      rowSpan: l.rowSpan,
      className: T,
      columnId: l.id,
      navigatable: l.navigatable,
      role: "columnheader"
    }, b = P(l), S = {
      column: b,
      sortable: e.sortable,
      sort: e.sort,
      columnMenuWrapperProps: f.columnMenuWrapperProps
    }, k = l.defaultHeaderCell ? l.defaultHeaderCell : F, H = [
      /* @__PURE__ */ t.createElement(N, { key: 1, ...S, isClient: G(k) }, /* @__PURE__ */ t.createElement(k, { ...f })),
      /* @__PURE__ */ t.createElement($, { key: 2, column: b })
    ], g = X(e.cells, l.cells);
    if (g && g.headerCell) {
      const r = g.headerCell, B = G(r);
      return /* @__PURE__ */ t.createElement(
        N,
        {
          key: E,
          ...S,
          thProps: C,
          isCustom: !0,
          isClient: B
        },
        /* @__PURE__ */ t.createElement(r, { ...f, thProps: C, index: n }, H)
      );
    }
    return /* @__PURE__ */ t.createElement(_, { key: E, column: b }, /* @__PURE__ */ t.createElement(J, { ...C }, H));
  }), L = e.columns.map(P);
  return /* @__PURE__ */ t.createElement(
    Z,
    {
      sortable: e.sortable,
      sort: e.sort,
      navigatable: e.navigatable,
      groupable: e.groupable,
      columns: L
    },
    e.columnsMap.map((a, n) => /* @__PURE__ */ t.createElement(Y, { key: n, className: o(s.simpleTr({})), ariaRowIndex: n + 1 }, D(a)))
  );
};
export {
  de as HeaderRow
};
