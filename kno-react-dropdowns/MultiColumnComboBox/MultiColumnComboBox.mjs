/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as e from "react";
import ue from "prop-types";
import { MultiColumnList as de } from "../common/MultiColumnList.mjs";
import { usePropsContext as ce, getScrollbarWidth as pe, getter as T, classNames as x, setScrollbarWidth as me, createPropsContext as fe } from "@progress/kno-react-common";
import { ComboBox as ge, ComboBoxWithoutContext as he } from "../ComboBox/ComboBox.mjs";
import { getItemValue as Ce } from "../common/utils.mjs";
import L from "../common/withCustomComponent.mjs";
const be = (s, g) => s ? typeof s == "number" ? s + "px" : s : g, ke = fe(), P = e.forwardRef(
  (s, g) => {
    const t = ce(ke, s), h = e.useRef(null), i = e.useRef(null), y = pe(), {
      columns: a = l.columns,
      popupSettings: p = l.popupSettings,
      size: z = l.size,
      rounded: O = l.rounded,
      fillMode: $ = l.fillMode,
      className: j,
      prefix: V = void 0,
      suffix: A = void 0,
      onOpen: w,
      onClose: S,
      onFocus: F,
      onBlur: H,
      onChange: R,
      onFilterChange: E,
      onPageChange: N,
      ...D
    } = t;
    e.useImperativeHandle(h, () => {
      var r;
      return {
        element: ((r = i.current) == null ? void 0 : r.element) || null,
        focus() {
          i.current && i.current.focus();
        },
        get value() {
          var o;
          return (o = i.current) == null ? void 0 : o.value;
        },
        get name() {
          var o;
          return (o = i.current) == null ? void 0 : o.name;
        },
        props: t
      };
    }), e.useImperativeHandle(
      g,
      () => h.current
    );
    const d = e.useMemo(() => {
      if (t.groupField !== void 0 && t.data)
        return Ce(t.data[0], t.groupField);
    }, [t.data, t.groupField]), [C, m] = e.useState(d), [M, B] = e.useState(!0), b = e.useRef(null), [J] = V ? L(t.prefix || e.Fragment) : [], [Q] = A ? L(t.suffix || e.Fragment) : [], U = e.useMemo(() => {
      const r = /* @__PURE__ */ e.createElement("th", { className: "k-table-th", colSpan: a.length }, C);
      return /* @__PURE__ */ e.createElement(e.Fragment, null, t.header, /* @__PURE__ */ e.createElement("div", { ref: b, className: "k-table-header-wrap" }, /* @__PURE__ */ e.createElement("table", { className: "k-table", role: "presentation" }, /* @__PURE__ */ e.createElement("colgroup", null, a.map((o, c) => /* @__PURE__ */ e.createElement(
        "col",
        {
          key: o.uniqueKey ? o.uniqueKey : c,
          style: { width: o.width ? o.width : l.width }
        }
      ))), /* @__PURE__ */ e.createElement("thead", { className: "k-table-thead" }, /* @__PURE__ */ e.createElement("tr", { className: "k-table-row" }, a.map((o, c) => /* @__PURE__ */ e.createElement("th", { className: "k-table-th", key: o.uniqueKey ? o.uniqueKey : c }, o.header || " "))), C && M && /* @__PURE__ */ e.createElement("tr", { className: "k-table-group-row" }, t.groupStickyHeaderItemRender ? t.groupStickyHeaderItemRender.call(void 0, r, {}) : r)))));
    }, [t.header, a, C, M]), X = e.useMemo(
      () => (
        // These additional 4px are coming from the child elements side borders (fixes horizontal scrollbar)
        `calc(${a.map((r) => be(r.width, l.width)).filter(Boolean).join(" + ")} + ${y}px + 4px)`
      ),
      [a, y]
    ), q = t.virtual ? t.virtual.skip : 0, Y = e.useCallback(
      (r, o) => {
        const c = a.map((u, ie) => /* @__PURE__ */ e.createElement(
          "span",
          {
            className: t.itemRender ? void 0 : "k-table-td",
            style: t.itemRender ? void 0 : { width: u.width ? u.width : l.width },
            key: u.uniqueKey ? u.uniqueKey : ie
          },
          u.field ? String(T(u.field)(o.dataItem)) : ""
        ));
        let I, f, k, v, K = t.data || [];
        const W = o.index - q;
        t.groupField !== void 0 && (v = T(t.groupField), f = v(K[W]), k = v(K[W - 1]), f && k && f !== k && (I = f));
        const G = e.cloneElement(
          r,
          {
            ...r.props,
            className: x("k-table-row", {
              "k-table-alt-row": o.index % 2 !== 0,
              "k-focus": o.focused,
              "k-selected": o.selected,
              "k-first": !!I,
              "k-disabled": o.dataItem.disabled
            })
          },
          c
        );
        return t.itemRender ? t.itemRender.call(void 0, G, o) : G;
      },
      [a, t.groupField, t.itemRender, t.data, q]
    ), n = e.useCallback((r, o) => {
      r && r.call(void 0, {
        ...o,
        target: h.current
      });
    }, []), Z = e.useCallback(
      (r) => (t.virtual || m(d), n(w, r)),
      [n, w, t.virtual, d]
    ), _ = e.useCallback((r) => n(S, r), [S]), ee = e.useCallback((r) => n(F, r), [F]), te = e.useCallback((r) => n(H, r), [H]), re = e.useCallback((r) => n(R, r), [R]), oe = e.useCallback((r) => n(N, r), [N]), ae = e.useCallback(
      (r) => (m(d), n(E, {
        ...r,
        mobileMode: r.target.mobileMode
      })),
      [E]
    ), ne = e.useCallback((r) => {
      m(r.group);
    }, []), le = e.useCallback((r) => {
      b.current && (b.current.scrollLeft = r.target.scrollLeft);
    }, []);
    e.useEffect(() => {
      me();
    }), e.useEffect(() => {
      const r = t.data;
      m(d), r && r.length !== 0 ? B(!0) : B(!1);
    }, [t.data]);
    const se = e.useCallback((r) => /* @__PURE__ */ e.createElement(de, { ...r }), []);
    return /* @__PURE__ */ e.createElement(
      ge,
      {
        ...D,
        list: se,
        popupSettings: {
          ...p,
          popupClass: x("k-dropdowngrid-popup", p.popupClass),
          width: p.width || X,
          className: p.className
        },
        ref: i,
        header: U,
        itemRender: Y,
        groupHeaderItemRender: t.groupHeaderItemRender,
        size: z,
        rounded: O,
        fillMode: $,
        groupField: t.groupField,
        isMultiColumn: !0,
        onOpen: Z,
        onClose: _,
        onFocus: ee,
        onBlur: te,
        onChange: re,
        onFilterChange: ae,
        onPageChange: oe,
        onGroupScroll: ne,
        onListScroll: le,
        className: x("k-dropdowngrid", j),
        required: t.required,
        adaptive: t.adaptive,
        adaptiveFilter: t.adaptiveFilter,
        adaptiveTitle: t.adaptiveTitle,
        adaptiveSubtitle: t.adaptiveSubtitle,
        footer: t.footer,
        footerClassName: "k-table-footer",
        prefix: J,
        suffix: Q
      }
    );
  }
), ve = {
  ...he.propTypes,
  columns: ue.any.isRequired
}, l = {
  columns: [],
  popupSettings: {},
  width: "200px",
  size: void 0,
  rounded: void 0,
  fillMode: void 0
};
P.displayName = "knoMultiColumnComboBox";
P.propTypes = ve;
export {
  P as MultiColumnComboBox,
  ke as MultiColumnComboBoxPropsContext
};
