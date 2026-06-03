/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as e from "react";
import { Button as A } from "@progress/kno-react-buttons";
import { NumericTextBox as s, ColorPicker as se, Checkbox as Ne, TextBox as L } from "@progress/kno-react-inputs";
import { AutoComplete as ie, DropDownList as d } from "@progress/kno-react-dropdowns";
import { Window as Se, WindowActionsBar as xe } from "@progress/kno-react-dialogs";
import { TabStrip as he, TabStripTab as ce } from "@progress/kno-react-layout";
import { tablePropertiesIcon as Ce, tableAlignMiddleLeftIcon as we, tableAlignMiddleCenterIcon as ye, tableAlignMiddleRightIcon as Re, tableAlignRemoveIcon as Le, positionTopIcon as Ae, positionBottomIcon as Ie, tablePositionStartIcon as Be, tablePositionCenterIcon as Ke, tablePositionEndIcon as Ve } from "@progress/kno-svg-icons";
import { parentNode as Te, onDownPreventDefault as De, popupSettings as c, units as me, borderStyles as ue } from "../utils.mjs";
import { itemRenderWithIcon as k, valueRenderWithIcon as v } from "./tableCellProperties.mjs";
import { useLocalization as ge } from "@progress/kno-react-intl";
import { keys as t, messages as l } from "../../messages/index.mjs";
import { applyTableData as ze, tableDefaultData as He, initialTableData as We, tablePositionStyles as Ue } from "./tablePropsUtils.mjs";
const _e = (o) => {
  const { view: n, ...r } = o, P = ge(), [N, b] = e.useState(!1), g = !!(n && Te(n.state.selection.$from, (i) => i.type.spec.tableRole === "table")), p = e.useCallback(() => {
    b(!0);
  }, []), m = e.useCallback(() => {
    b(!1), n == null || n.focus();
  }, [n]), f = e.useCallback(
    (i) => {
      if (n && i) {
        const u = ze(n.state, i);
        u && n.dispatch(u);
      }
      m();
    },
    [n, m]
  );
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    A,
    {
      type: "button",
      title: P.toLanguageString(t.tableProperties, l[t.tableProperties]),
      icon: "table-properties",
      svgIcon: Ce,
      onClick: p,
      disabled: !g,
      ...De,
      ...r
    }
  ), N && /* @__PURE__ */ e.createElement(Fe, { onClose: m, onSave: f, view: n }));
}, E = [
  {
    textKey: t.tablePropertiesAlignLeft,
    text: l[t.tablePropertiesAlignLeft],
    value: "left",
    icon: "table-align-middle-left",
    svgIcon: we
  },
  {
    textKey: t.tablePropertiesAlignCenter,
    text: l[t.tablePropertiesAlignCenter],
    value: "center",
    icon: "table-align-middle-center",
    svgIcon: ye
  },
  {
    textKey: t.tablePropertiesAlignRight,
    text: l[t.tablePropertiesAlignRight],
    value: "right",
    icon: "table-align-middle-right",
    svgIcon: Re
  },
  {
    textKey: t.tablePropertiesNoAlignment,
    text: l[t.tablePropertiesNoAlignment],
    value: "",
    icon: "align-remove",
    svgIcon: Le
  }
], de = [
  {
    textKey: t.tablePropertiesLeft,
    text: l[t.tablePropertiesLeft],
    value: "left",
    style: {},
    icon: "table-position-left",
    svgIcon: Be
  },
  {
    textKey: t.tablePropertiesCenter,
    text: l[t.tablePropertiesCenter],
    value: "center",
    style: {},
    icon: "table-position-center",
    svgIcon: Ke
  },
  {
    textKey: t.tablePropertiesRight,
    text: l[t.tablePropertiesRight],
    value: "right",
    style: {},
    icon: "table-position-right",
    svgIcon: Ve
  }
].map((o) => ({ ...o, style: Ue[o.value] })), fe = [
  {
    textKey: t.tablePropertiesTop,
    text: l[t.tablePropertiesTop],
    value: "top",
    icon: "position-top",
    svgIcon: Ae
  },
  {
    textKey: t.tablePropertiesBottom,
    text: l[t.tablePropertiesBottom],
    value: "bottom",
    icon: "position-bottom",
    svgIcon: Ie
  }
], be = [
  { textKey: t.tablePropertiesNone, text: l[t.tablePropertiesNone], value: "none" },
  {
    textKey: t.tablePropertiesUsingScopeAttribute,
    text: l[t.tablePropertiesUsingScopeAttribute],
    value: "scope"
  },
  {
    textKey: t.tablePropertiesUsingIdAttributes,
    text: l[t.tablePropertiesUsingIdAttributes],
    value: "id"
  }
], Fe = (o) => {
  const n = e.useMemo(() => {
    const a = o.view && o.view.state;
    return a ? He(a) : We;
  }, [o.view]), r = ge(), [P, N] = e.useState(0), b = e.useCallback((a) => {
    N(a.selected);
  }, []), g = e.useRef(null), p = e.useRef(null), m = e.useRef(null), f = e.useRef(null), i = e.useRef(null), u = e.useRef(null), S = e.useRef(null), I = e.useRef(null), B = e.useRef(null), K = e.useRef(null), x = e.useRef(null), h = e.useRef(null), V = e.useRef(null), T = e.useRef(null), D = e.useRef(null), z = e.useRef(null), H = e.useRef(null), W = e.useRef(null), U = e.useRef(null), F = e.useRef(null), C = e.useRef(null), w = e.useRef(null), y = e.useRef(null), pe = e.useCallback(() => {
    var R, M, G, $, j, q, J, O, Q, X, Y, Z, _, ee, te, ae, le, re, ne, oe;
    const a = {
      rows: ((R = g.current) == null ? void 0 : R.value) || 0,
      columns: ((M = p.current) == null ? void 0 : M.value) || 0,
      width: m.current ? m.current.value : null,
      height: f.current ? f.current.value : null,
      cellSpacing: i.current ? i.current.value : null,
      cellPadding: u.current ? u.current.value : null,
      borderWidth: S.current ? S.current.value : null,
      widthUnit: ((G = I.current) == null ? void 0 : G.value) || "",
      heightUnit: (($ = B.current) == null ? void 0 : $.value) || "",
      position: ((q = (j = K.current) == null ? void 0 : j.value) == null ? void 0 : q.value) || null,
      textAlign: (J = x.current) != null && J.value ? x.current.value.value : null,
      borderStyle: (O = h.current) != null && O.value ? h.current.value.value : null,
      backgroundColor: (Q = V.current) == null ? void 0 : Q.value,
      borderColor: (X = T.current) == null ? void 0 : X.value,
      collapseBorders: !!((Z = (Y = D.current) == null ? void 0 : Y.element) != null && Z.checked),
      id: String(((_ = z.current) == null ? void 0 : _.value) || ""),
      className: String(((ee = H.current) == null ? void 0 : ee.value) || ""),
      caption: String(((te = W.current) == null ? void 0 : te.value) || ""),
      headerRows: ((ae = U.current) == null ? void 0 : ae.value) || 0,
      headerColumns: ((le = F.current) == null ? void 0 : le.value) || 0,
      captionAlignment: (re = C.current) != null && re.value ? C.current.value.value : null,
      captionPosition: (ne = w.current) != null && ne.value ? w.current.value.value : null,
      associateHeaders: (oe = y.current) != null && oe.value ? y.current.value.value : "none"
    };
    o.onSave.call(void 0, a);
  }, [o.onSave]), ke = /* @__PURE__ */ e.createElement("div", { className: "k-form k-form-md" }, /* @__PURE__ */ e.createElement("fieldset", { className: "k-form-fieldset" }, /* @__PURE__ */ e.createElement("div", { className: "k-form-layout k-d-grid k-grid-cols-4 k-gap-x-4" }, /* @__PURE__ */ e.createElement("div", { className: "k-form-field k-col-span-2" }, /* @__PURE__ */ e.createElement("label", { className: "k-label k-form-label" }, r.toLanguageString(
    t.tablePropertiesRows,
    l[t.tablePropertiesRows]
  )), /* @__PURE__ */ e.createElement("div", { className: "k-form-field-wrap" }, /* @__PURE__ */ e.createElement(s, { ref: g, defaultValue: n.rows, min: 1 }))), /* @__PURE__ */ e.createElement("div", { className: "k-form-field k-col-span-2" }, /* @__PURE__ */ e.createElement("label", { className: "k-label k-form-label" }, r.toLanguageString(
    t.tablePropertiesColumns,
    l[t.tablePropertiesColumns]
  )), /* @__PURE__ */ e.createElement("div", { className: "k-form-field-wrap" }, /* @__PURE__ */ e.createElement(s, { ref: p, defaultValue: n.columns, min: 1 }))), /* @__PURE__ */ e.createElement("div", { className: "k-form-field k-col-span-1" }, /* @__PURE__ */ e.createElement("label", { className: "k-label k-form-label" }, r.toLanguageString(
    t.tablePropertiesWidth,
    l[t.tablePropertiesWidth]
  )), /* @__PURE__ */ e.createElement("div", { className: "k-form-field-wrap" }, /* @__PURE__ */ e.createElement(
    s,
    {
      ref: m,
      defaultValue: n.width,
      min: 0,
      placeholder: r.toLanguageString(t.sizeAuto, l[t.sizeAuto])
    }
  ))), /* @__PURE__ */ e.createElement("div", { className: "k-form-field k-col-span-1" }, /* @__PURE__ */ e.createElement("label", { className: "k-label k-form-label" }, " "), /* @__PURE__ */ e.createElement("div", { className: "k-form-field-wrap" }, /* @__PURE__ */ e.createElement(
    ie,
    {
      ref: I,
      defaultValue: n.widthUnit,
      data: me,
      popupSettings: c
    }
  ))), /* @__PURE__ */ e.createElement("div", { className: "k-form-field k-col-span-1" }, /* @__PURE__ */ e.createElement("label", { className: "k-label k-form-label" }, r.toLanguageString(
    t.tablePropertiesHeight,
    l[t.tablePropertiesHeight]
  )), /* @__PURE__ */ e.createElement("div", { className: "k-form-field-wrap" }, /* @__PURE__ */ e.createElement(
    s,
    {
      ref: f,
      defaultValue: n.height,
      min: 0,
      placeholder: r.toLanguageString(t.sizeAuto, l[t.sizeAuto])
    }
  ))), /* @__PURE__ */ e.createElement("div", { className: "k-form-field k-col-span-1" }, /* @__PURE__ */ e.createElement("label", { className: "k-label k-form-label" }, " "), /* @__PURE__ */ e.createElement("div", { className: "k-form-field-wrap" }, /* @__PURE__ */ e.createElement(
    ie,
    {
      ref: B,
      defaultValue: n.heightUnit,
      data: me.filter((a) => a !== "%"),
      popupSettings: c
    }
  ))), /* @__PURE__ */ e.createElement("div", { className: "k-form-field k-col-span-2" }, /* @__PURE__ */ e.createElement("label", { className: "k-label k-form-label" }, r.toLanguageString(
    t.tablePropertiesPosition,
    l[t.tablePropertiesPosition]
  )), /* @__PURE__ */ e.createElement("div", { className: "k-form-field-wrap" }, /* @__PURE__ */ e.createElement(
    d,
    {
      ref: K,
      defaultValue: de.find((a) => a.value === n.position),
      popupSettings: c,
      data: de.map((a) => ({
        ...a,
        text: r.toLanguageString(a.textKey, a.text)
      })),
      textField: "text",
      dataItemKey: "value",
      valueRender: v,
      itemRender: k
    }
  ))), /* @__PURE__ */ e.createElement("div", { className: "k-form-field k-col-span-2" }, /* @__PURE__ */ e.createElement("label", { className: "k-label k-form-label" }, r.toLanguageString(
    t.tablePropertiesAlignment,
    l[t.tablePropertiesAlignment]
  )), /* @__PURE__ */ e.createElement("div", { className: "k-form-field-wrap" }, /* @__PURE__ */ e.createElement(
    d,
    {
      ref: x,
      defaultValue: E.find((a) => a.value === n.textAlign),
      data: E.map((a) => ({ ...a, text: r.toLanguageString(a.textKey, a.text) })),
      textField: "text",
      dataItemKey: "value",
      popupSettings: c,
      valueRender: v,
      itemRender: k
    }
  ))), /* @__PURE__ */ e.createElement("div", { className: "k-form-field k-col-span-2" }, /* @__PURE__ */ e.createElement("label", { className: "k-label k-form-label" }, r.toLanguageString(
    t.tablePropertiesCellSpacing,
    l[t.tablePropertiesCellSpacing]
  )), /* @__PURE__ */ e.createElement("div", { className: "k-form-field-wrap" }, /* @__PURE__ */ e.createElement(
    s,
    {
      ref: i,
      defaultValue: n.cellSpacing,
      placeholder: r.toLanguageString(t.sizeAuto, l[t.sizeAuto]),
      min: 0
    }
  ))), /* @__PURE__ */ e.createElement("div", { className: "k-form-field k-col-span-2" }, /* @__PURE__ */ e.createElement("label", { className: "k-label k-form-label" }, r.toLanguageString(
    t.tablePropertiesCellPadding,
    l[t.tablePropertiesCellPadding]
  )), /* @__PURE__ */ e.createElement("div", { className: "k-form-field-wrap" }, /* @__PURE__ */ e.createElement(
    s,
    {
      ref: u,
      defaultValue: n.cellPadding,
      placeholder: r.toLanguageString(t.sizeAuto, l[t.sizeAuto]),
      min: 0
    }
  ))), /* @__PURE__ */ e.createElement("div", { className: "k-form-field k-col-span-full" }, /* @__PURE__ */ e.createElement("label", { className: "k-label k-form-label" }, r.toLanguageString(
    t.tablePropertiesTableBackground,
    l[t.tablePropertiesTableBackground]
  )), /* @__PURE__ */ e.createElement("div", { className: "k-form-field-wrap" }, /* @__PURE__ */ e.createElement(se, { ref: V, defaultValue: n.backgroundColor }))), /* @__PURE__ */ e.createElement("div", { className: "k-form-field k-col-span-1" }, /* @__PURE__ */ e.createElement("label", { className: "k-label k-form-label" }, r.toLanguageString(
    t.tablePropertiesBorderWidth,
    l[t.tablePropertiesBorderWidth]
  )), /* @__PURE__ */ e.createElement("div", { className: "k-form-field-wrap" }, /* @__PURE__ */ e.createElement(s, { ref: S, defaultValue: n.borderWidth, min: 0 }))), /* @__PURE__ */ e.createElement("div", { className: "k-form-field k-col-span-1" }, /* @__PURE__ */ e.createElement("label", { className: "k-label k-form-label" }, r.toLanguageString(
    t.tablePropertiesBorderColor,
    l[t.tablePropertiesBorderColor]
  )), /* @__PURE__ */ e.createElement("div", { className: "k-form-field-wrap" }, /* @__PURE__ */ e.createElement(se, { ref: T, defaultValue: n.borderColor }))), /* @__PURE__ */ e.createElement("div", { className: "k-form-field k-col-span-2" }, /* @__PURE__ */ e.createElement("label", { className: "k-label k-form-label" }, r.toLanguageString(
    t.tablePropertiesBorderStyle,
    l[t.tablePropertiesBorderStyle]
  )), /* @__PURE__ */ e.createElement("div", { className: "k-form-field-wrap" }, /* @__PURE__ */ e.createElement(
    d,
    {
      ref: h,
      defaultValue: ue.find((a) => a.value === n.borderStyle),
      popupSettings: c,
      data: ue.map((a) => ({
        ...a,
        text: r.toLanguageString(a.textKey, a.text)
      })),
      textField: "text",
      dataItemKey: "value"
    }
  ))), /* @__PURE__ */ e.createElement("div", { className: "k-form-field k-col-span-full" }, /* @__PURE__ */ e.createElement("div", { className: "k-form-field-wrap" }, /* @__PURE__ */ e.createElement(
    Ne,
    {
      ref: D,
      className: "k-checkbox-wrap",
      label: r.toLanguageString(
        t.tablePropertiesCollapseBorders,
        l[t.tablePropertiesCollapseBorders]
      ),
      defaultChecked: n.collapseBorders
    }
  )))))), ve = /* @__PURE__ */ e.createElement("div", { className: "k-form k-form-md" }, /* @__PURE__ */ e.createElement("fieldset", { className: "k-form-fieldset" }, /* @__PURE__ */ e.createElement("div", { className: "k-form-layout k-d-grid" }, /* @__PURE__ */ e.createElement("div", { className: "k-form-field" }, /* @__PURE__ */ e.createElement("label", { className: "k-label k-form-label" }, r.toLanguageString(t.tablePropertiesId, l[t.tablePropertiesId])), /* @__PURE__ */ e.createElement("div", { className: "k-form-field-wrap" }, /* @__PURE__ */ e.createElement(L, { ref: z, defaultValue: n.id }))), /* @__PURE__ */ e.createElement("div", { className: "k-form-field" }, /* @__PURE__ */ e.createElement("label", { className: "k-label k-form-label" }, r.toLanguageString(
    t.tablePropertiesCssClass,
    l[t.tablePropertiesCssClass]
  )), /* @__PURE__ */ e.createElement("div", { className: "k-form-field-wrap" }, /* @__PURE__ */ e.createElement(L, { ref: H, defaultValue: n.className }))), /* @__PURE__ */ e.createElement("fieldset", { className: "k-form-fieldset" }, /* @__PURE__ */ e.createElement("legend", { className: "k-form-legend" }, r.toLanguageString(
    t.tablePropertiesAccessibility,
    l[t.tablePropertiesAccessibility]
  )), /* @__PURE__ */ e.createElement("div", { className: "k-d-grid k-grid-cols-4 k-gap-x-4" }, /* @__PURE__ */ e.createElement("div", { className: "k-form-field k-col-span-full" }, /* @__PURE__ */ e.createElement("label", { className: "k-label k-form-label" }, r.toLanguageString(
    t.tablePropertiesCaption,
    l[t.tablePropertiesCaption]
  )), /* @__PURE__ */ e.createElement("div", { className: "k-form-field-wrap" }, /* @__PURE__ */ e.createElement(L, { ref: W, defaultValue: n.caption }))), /* @__PURE__ */ e.createElement("div", { className: "k-form-field k-col-span-2" }, /* @__PURE__ */ e.createElement("label", { className: "k-label k-form-label" }, r.toLanguageString(
    t.tablePropertiesCaptionPosition,
    l[t.tablePropertiesCaptionPosition]
  )), /* @__PURE__ */ e.createElement("div", { className: "k-form-field-wrap" }, /* @__PURE__ */ e.createElement(
    d,
    {
      ref: w,
      defaultValue: fe.find(
        (a) => a.value === n.captionPosition
      ),
      data: fe.map((a) => ({
        ...a,
        text: r.toLanguageString(a.textKey, a.text)
      })),
      popupSettings: c,
      textField: "text",
      dataItemKey: "value",
      valueRender: v,
      itemRender: k
    }
  ))), /* @__PURE__ */ e.createElement("div", { className: "k-form-field k-col-span-2" }, /* @__PURE__ */ e.createElement("label", { className: "k-label k-form-label" }, r.toLanguageString(
    t.tablePropertiesCaptionAlignment,
    l[t.tablePropertiesCaptionAlignment]
  )), /* @__PURE__ */ e.createElement("div", { className: "k-form-field-wrap" }, /* @__PURE__ */ e.createElement(
    d,
    {
      ref: C,
      defaultValue: E.find((a) => a.value === n.captionAlignment),
      data: E.map((a) => ({
        ...a,
        text: r.toLanguageString(a.textKey, a.text)
      })),
      popupSettings: c,
      textField: "text",
      dataItemKey: "value",
      valueRender: v,
      itemRender: k
    }
  ))), /* @__PURE__ */ e.createElement("div", { className: "k-form-field k-col-span-1" }, /* @__PURE__ */ e.createElement("label", { className: "k-label k-form-label" }, r.toLanguageString(
    t.tablePropertiesHeaderRows,
    l[t.tablePropertiesHeaderRows]
  )), /* @__PURE__ */ e.createElement("div", { className: "k-form-field-wrap" }, /* @__PURE__ */ e.createElement(s, { ref: U, defaultValue: n.headerRows, min: 0 }))), /* @__PURE__ */ e.createElement("div", { className: "k-form-field k-col-span-1" }, /* @__PURE__ */ e.createElement("label", { className: "k-label k-form-label" }, r.toLanguageString(
    t.tablePropertiesHeaderCols,
    l[t.tablePropertiesHeaderCols]
  )), /* @__PURE__ */ e.createElement("div", { className: "k-form-field-wrap" }, /* @__PURE__ */ e.createElement(s, { ref: F, defaultValue: n.headerColumns, min: 0 }))), /* @__PURE__ */ e.createElement("div", { className: "k-form-field k-col-span-2" }, /* @__PURE__ */ e.createElement("label", { className: "k-label k-form-label" }, r.toLanguageString(
    t.tablePropertiesAssociateHeaders,
    l[t.tablePropertiesAssociateHeaders]
  )), /* @__PURE__ */ e.createElement("div", { className: "k-form-field-wrap" }, /* @__PURE__ */ e.createElement(
    d,
    {
      ref: y,
      defaultValue: be.find(
        (a) => a.value === n.associateHeaders
      ),
      data: be.map((a) => ({
        ...a,
        text: r.toLanguageString(a.textKey, a.text)
      })),
      popupSettings: c,
      textField: "text",
      dataItemKey: "value"
    }
  )))))))), Ee = /* @__PURE__ */ e.createElement(he, { selected: P, onSelect: b, animation: !1, keepTabsMounted: !0 }, /* @__PURE__ */ e.createElement(
    ce,
    {
      title: r.toLanguageString(
        t.tablePropertiesGeneral,
        l[t.tablePropertiesGeneral]
      )
    },
    ke
  ), /* @__PURE__ */ e.createElement(
    ce,
    {
      title: r.toLanguageString(
        t.tablePropertiesAdvanced,
        l[t.tablePropertiesAdvanced]
      )
    },
    ve
  )), Pe = [
    /* @__PURE__ */ e.createElement(A, { onClick: o.onClose, key: "cancel" }, r.toLanguageString(t.tablePropertiesCancel, l[t.tablePropertiesCancel])),
    /* @__PURE__ */ e.createElement(A, { themeColor: "primary", key: "save", onClick: pe }, r.toLanguageString(t.tablePropertiesSave, l[t.tablePropertiesSave]))
  ];
  return /* @__PURE__ */ e.createElement(
    Se,
    {
      className: "k-editor-window k-editor-table-wizard-window",
      title: r.toLanguageString(t.tableProperties, l[t.tableProperties]),
      onClose: o.onClose,
      key: "dialog",
      style: { userSelect: "none" },
      width: 480,
      height: 630,
      modal: !0,
      minimizeButton: () => null,
      maximizeButton: () => null,
      resizable: !1
    },
    Ee,
    /* @__PURE__ */ e.createElement(xe, { layout: "end" }, ...Pe)
  );
};
export {
  _e as TableProperties
};
