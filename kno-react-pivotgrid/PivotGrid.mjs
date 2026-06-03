/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as t from "react";
import { validatePackage as xe, getLicenseMessage as Ae, useWebMcpRegister as Pe, useCustomComponent as y, useIsomorphicLayoutEffect as Ne, setScrollbarWidth as K, classNames as Te, WatermarkOverlay as De } from "@progress/kno-react-common";
import { packageMetadata as X } from "./package-metadata.mjs";
import { useLocalization as ze } from "@progress/kno-react-intl";
import { emptyCellAriaLabel as j, messages as Le } from "./messages/index.mjs";
import { PivotGridRow as Oe } from "./components/Row.mjs";
import { PivotGridCell as Ge } from "./components/Cell.mjs";
import { useHeaders as $ } from "./hooks/useHeaders.mjs";
import { PivotGridHeaderCell as Ie } from "./components/HeaderCell.mjs";
import { useHorizontalScrollSync as Be } from "./hooks/useHorizontalScrollSync.mjs";
import { useVerticalScrollSync as Me } from "./hooks/useVerticalScrollSync.mjs";
import { PivotGridColumn as Ve } from "./components/Column.mjs";
import { generateKey as C, generateDataKey as We } from "./utils/index.mjs";
import { toTree as _, toRows as qe, toColumns as Fe, toData as Ke, PivotGridNavigation as Xe, HEADERS_ACTION as J } from "@progress/kno-pivotgrid-common";
const je = t.forwardRef((o, Q) => {
  const U = !xe(X, { component: "PivotGrid" }), Y = Ae(X), {
    rows: Z,
    rowAxes: ee,
    columns: te,
    columnAxes: ae,
    data: ne
  } = { ...g, ...o }, s = t.useRef(null), h = t.useRef(null), i = t.useRef(null), f = t.useRef(null), P = t.useRef(null), N = t.useRef(null), E = t.useRef(null), oe = ze(), re = (e, r) => {
    o.onRowAxesChange && o.onRowAxesChange({
      value: e,
      target: h.current,
      syntheticEvent: r
    });
  }, le = (e, r) => {
    o.onColumnAxesChange && o.onColumnAxesChange({
      value: e,
      target: h.current,
      syntheticEvent: r
    });
  }, T = _((Z || []).slice()), [, se] = $((ee || []).slice(), T, re), [D, c, me, z] = qe(T), L = _((te || []).slice()), [, ie] = $((ae || []).slice(), L, le), [w, m, , O] = Fe(L), R = Ke(
    (ne || []).slice(),
    m,
    c,
    O,
    me
  );
  t.useImperativeHandle(h, () => ({
    props: o,
    element: s.current,
    columnHeaderRows: w,
    rowHeaderRows: D,
    dataCells: R,
    rowHeaderBreadth: z,
    columnHeaderBreadth: O
  })), t.useImperativeHandle(Q, () => h.current), Pe("pivotgrid", h, o, o.webMcp);
  const G = [], I = [], B = [], [H, k] = y(o.row || g.row), [S, x] = y(
    o.column || g.column
  ), [ce, de] = y(o.cell || g.cell), [M, V] = y(
    o.headerCell || g.headerCell
  ), ue = o.columnHeadersRow || H, pe = o.columnHeadersColumn || S, he = o.columnHeadersCell || M, fe = o.rowHeadersRow || H, Ce = o.rowHeadersColumn || S, ge = o.rowHeadersCell || M, we = o.dataRow || H, be = o.dataColumn || S;
  for (let e = 0; e < m.length; e++)
    G.push(
      /* @__PURE__ */ t.createElement(
        be,
        {
          key: String(m[e].path),
          ...x,
          path: m[e].path
        }
      )
    ), B.push(
      /* @__PURE__ */ t.createElement(
        pe,
        {
          key: String(m[e].path),
          ...x,
          path: m[e].path
        }
      )
    );
  for (let e = 0; e < z; e++)
    I.push(/* @__PURE__ */ t.createElement(Ce, { key: e, ...x }));
  const ve = (e) => {
    e.target.props.expandable && ie(
      {
        type: J.toggle,
        payload: e.target.props.dataItem.path
      },
      e.syntheticEvent
    );
  }, ye = (e) => {
    e.target.props.expandable && se(
      {
        type: J.toggle,
        payload: e.target.props.dataItem.path
      },
      e.syntheticEvent
    );
  }, W = Be(E, N), Ee = Me(E, P), Re = (e) => {
    W(e), Ee(e);
  }, q = t.useCallback(() => {
    s.current && f.current && (s.current.style.gridTemplateRows = "", s.current.style.gridTemplateRows = `${f.current.offsetHeight}px 1fr`);
  }, []), F = t.useCallback(() => {
    s.current && i.current && (s.current.style.gridTemplateColumns = "", s.current.style.gridTemplateColumns = `${i.current.offsetWidth}px 1fr`);
  }, []), d = t.useRef(new Xe({ tabIndex: o.tabIndex || 0 }));
  t.useEffect(() => {
    if (s.current) {
      const e = o.tabIndex || 0;
      if (d.current.stop(), d.current.tabIndex = e, o.navigatable) {
        d.current.start(s.current);
        const r = d.current.first;
        r && r.setAttribute("tabindex", String(e));
      }
    }
    return () => {
      d.current.stop();
    };
  }, [o.tabIndex, o.navigatable]), t.useEffect(() => {
    d.current.update();
  }), t.useEffect(() => {
    if (f.current) {
      const e = new window.ResizeObserver(() => {
        window.requestAnimationFrame(() => {
          q();
        });
      });
      return e.observe(f.current), () => {
        e.disconnect();
      };
    }
  }, [q]), t.useEffect(() => {
    if (i.current) {
      const e = new window.ResizeObserver(() => {
        window.requestAnimationFrame(() => {
          F();
        });
      });
      return e.observe(i.current), () => {
        e.disconnect();
      };
    }
  }, [F]), Ne(() => {
    if (K(), i.current) {
      const e = new window.ResizeObserver(
        () => window.requestAnimationFrame(() => {
          K();
        })
      );
      return e.observe(i.current), () => {
        e.disconnect();
      };
    }
  }, []);
  const u = new Array(w.length).fill([]).map(() => new Array(m.length));
  w.forEach((e, r) => {
    let a = 0;
    Array.from(e.cells).forEach((n) => {
      const l = !!(n && n.children && n.children.length), A = (n ? C(n.normalizedPath) + (n.total ? "|[TOTAL]" : "") + (l ? "|[EXPANDED]" : "") : "").replace(/\s/g, "-");
      if (n)
        for (let v = 0; v < (n.colSpan || 1); v++) {
          for (let p = 0; p < (n.rowSpan || 1); p++) {
            const He = u[r + p].findIndex(
              (ke, Se) => Se >= a && !ke
            );
            u[r + p][He] = A;
          }
          a++;
        }
    });
  });
  const b = R.map((e) => e.cells.map(
    (r) => We(r.rowTuple.members, r.columnTuple.members).replace(/\s/g, "-")
  ));
  return /* @__PURE__ */ t.createElement(
    "div",
    {
      ref: s,
      id: o.id,
      style: o.style,
      tabIndex: o.navigatable ? void 0 : o.tabIndex,
      className: Te("k-pivotgrid", o.className),
      role: "grid"
    },
    U && /* @__PURE__ */ t.createElement(De, { message: Y }),
    /* @__PURE__ */ t.createElement("span", { className: "k-pivotgrid-empty-cell" }, /* @__PURE__ */ t.createElement("span", { className: "k-sr-only" }, oe.toLanguageString(j, Le[j]))),
    /* @__PURE__ */ t.createElement("div", { ref: N, className: "k-pivotgrid-column-headers", onScroll: W }, /* @__PURE__ */ t.createElement("table", { ref: f, className: "k-pivotgrid-table", role: "none" }, /* @__PURE__ */ t.createElement("colgroup", null, B), /* @__PURE__ */ t.createElement("tbody", { className: "k-pivotgrid-tbody", role: "rowgroup" }, w.map((e, r) => {
      let a = !1;
      return /* @__PURE__ */ t.createElement(ue, { key: e.name, role: "row", ...k }, e.cells.map((n, l) => {
        const A = l !== 0 && !a;
        n && (a = !0);
        const v = n && !!(n.children && n.children.length), p = n && n.hasChildren && (!n.total || n.total && n.parent.total);
        return n ? /* @__PURE__ */ t.createElement(
          he,
          {
            ...V,
            key: u[r][l],
            "data-key": u[r][l],
            id: u[r][l],
            columnPath: n.normalizedPath,
            rowSpan: n.rowSpan || void 0,
            colSpan: n.colSpan || void 0,
            onIconClick: ve,
            dataItem: n,
            expanded: v,
            expandable: p,
            total: n.total,
            first: A,
            root: n.levelNum === 0,
            role: "columnheader"
          },
          n.caption
        ) : null;
      }));
    })))),
    /* @__PURE__ */ t.createElement("div", { ref: P, className: "k-pivotgrid-row-headers" }, /* @__PURE__ */ t.createElement("table", { ref: i, className: "k-pivotgrid-table", role: "none" }, /* @__PURE__ */ t.createElement("colgroup", null, I), /* @__PURE__ */ t.createElement("tbody", { className: "k-pivotgrid-tbody", role: "rowgroup" }, D.map((e, r) => /* @__PURE__ */ t.createElement(
      fe,
      {
        key: C(c[r].path),
        ...k,
        path: c[r].path,
        role: "row",
        ariaOwns: b[r].join(" ")
      },
      e.cells.filter(Boolean).map(
        (a) => a ? /* @__PURE__ */ t.createElement(
          ge,
          {
            ...V,
            key: C(a.normalizedPath) + (a.total ? "|[TOTAL]" : "") + (a.children && a.children.length ? "|[EXPANDED]" : ""),
            "data-key": C(a.normalizedPath) + (a.total ? "|[TOTAL]" : "") + (a.children && a.children.length ? "|[EXPANDED]" : ""),
            rowPath: a.normalizedPath,
            rowSpan: a.rowSpan || void 0,
            colSpan: a.colSpan || void 0,
            dataItem: a,
            expanded: !!(a.children && a.children.length),
            expandable: a.hasChildren && !a.total,
            total: a.total,
            onIconClick: ye,
            root: a.levelNum === 0,
            role: "rowheader"
          },
          a.caption
        ) : null
      )
    ))))),
    /* @__PURE__ */ t.createElement("div", { ref: E, className: "k-pivotgrid-values", onScroll: Re }, /* @__PURE__ */ t.createElement("table", { className: "k-pivotgrid-table", role: "none" }, /* @__PURE__ */ t.createElement("colgroup", null, G), /* @__PURE__ */ t.createElement("tbody", { className: "k-pivotgrid-tbody", role: "none" }, R.map((e, r) => /* @__PURE__ */ t.createElement(
      we,
      {
        key: C(c[r].path),
        ...k,
        path: c[r].path,
        role: "none"
      },
      e.cells.map((a, n) => /* @__PURE__ */ t.createElement(
        ce,
        {
          key: b[r][n],
          "data-key": b[r][n],
          id: b[r][n],
          ...de,
          rowPath: a.rowTuple.members.map((l) => l.name),
          columnPath: a.columnTuple.members.map((l) => l.name),
          dataItem: a,
          total: c[r].total || m[n].total,
          role: "gridcell",
          ariaDescribedby: u.map((l) => l[n]).join(" ")
        },
        a && a.data && a.data.fmtValue ? a.data.fmtValue : " "
      ))
    )))))
  );
}), g = {
  rowAxes: [],
  columnAxes: [],
  data: [],
  row: Oe,
  column: Ve,
  cell: Ge,
  headerCell: Ie
};
je.displayName = "KendoReactPivotGrid";
export {
  je as PivotGrid
};
