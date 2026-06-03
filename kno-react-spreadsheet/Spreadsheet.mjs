/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as r from "react";
import l from "prop-types";
import { ToolbarSeparator as $, Toolbar as ee, ButtonGroup as te, Button as re } from "@progress/kno-react-buttons";
import { TabStrip as ne, TabStripTab as oe } from "@progress/kno-react-layout";
import { Dialog as ae, DialogActionsBar as le } from "@progress/kno-react-dialogs";
import { FormulaInput as H } from "./FormulaInput.mjs";
import { NameBox as se } from "./NameBox.mjs";
import { SheetsBar as ce } from "./SheetsBar.mjs";
import { SpreadsheetWidget as ie } from "@progress/kno-spreadsheet-common";
import { defaultTabs as L } from "./tools/defaultTools.mjs";
import { validatePackage as ue, getLicenseMessage as me, useWebMcpRegister as de, classNames as fe, IconWrap as pe, WatermarkOverlay as ge } from "@progress/kno-react-common";
import { packageMetadata as T } from "./package-metadata.mjs";
import { formulaFxIcon as be } from "@progress/kno-svg-icons";
import { useLocalization as z, useInternationalization as ke } from "@progress/kno-react-intl";
import { saveAs as he } from "@progress/kno-file-saver";
import { Workbook as Se } from "@progress/kno-ooxml";
import { keys as m, messages as g } from "./messages.mjs";
const B = [
  "bold",
  "italic",
  "underline",
  "fontFamily",
  "fontSize",
  "color",
  "background",
  "textAlign",
  "verticalAlign",
  "wrap",
  "gridLines"
], O = {
  Bold: (t) => t.bold,
  Italic: (t) => t.italic,
  Underline: (t) => t.underline,
  FontFamily: (t) => t.fontFamily,
  FontSize: (t) => t.fontSize,
  IncreaseFontSize: (t) => t.fontSize,
  DecreaseFontSize: (t) => t.fontSize,
  TextColor: (t) => t.color,
  BackgroundColor: (t) => t.background,
  Alignment: (t) => ({ textAlign: t.textAlign, verticalAlign: t.verticalAlign }),
  AlignHorizontally: (t) => t.textAlign,
  AlignVertically: (t) => t.verticalAlign,
  TextWrap: (t) => t.wrap,
  GridLines: (t) => t.gridLines,
  AddColumnLeft: (t) => t.selectedHeaders,
  AddColumnRight: (t) => t.selectedHeaders,
  AddRowBelow: (t) => t.selectedHeaders,
  AddRowAbove: (t) => t.selectedHeaders,
  DeleteColumn: (t) => t.selectedHeaders,
  DeleteRow: (t) => t.selectedHeaders
}, M = ":not(.k-dropdownlist button):not(.k-combobox button):not(.k-upload-button):not(.k-colorpicker button):not(.k-split-button .k-split-button-arrow)", Ee = [
  "button" + M,
  ".k-button-group > button" + M,
  ".k-dropdownlist",
  ".k-combobox",
  ".k-colorpicker"
], W = r.forwardRef((t, J) => {
  const K = !ue(T, { component: "Spreadsheet" }), P = me(T), { toolbar: k = L } = t, d = [];
  typeof k == "boolean" ? d.push(...k ? L : []) : d.push(...k);
  const [c, x] = r.useState(null), [D, G] = r.useState(d.findIndex((e) => e.selected) || 0), [ve, U] = r.useState(!1), h = r.useRef(null), y = r.useRef(null), C = r.useRef(null), w = r.useRef(null), a = r.useRef(null), [S, V] = r.useState({}), b = r.useRef({});
  b.current = S;
  const s = r.useRef({});
  s.current = t;
  const E = z(), j = r.useCallback((e) => {
    s.current.onSelect && s.current.onSelect.call(void 0, e);
  }, []), _ = r.useCallback((e) => {
    s.current.onChange && s.current.onChange.call(void 0, e);
  }, []), q = r.useCallback((e) => {
    s.current.onChangeFormat && s.current.onChangeFormat.call(void 0, e);
  }, []), Q = r.useCallback((e) => {
    s.current.onExcelImport && s.current.onExcelImport.call(void 0, e);
  }, []), X = r.useCallback((e) => {
    s.current.onExcelExport && s.current.onExcelExport.call(void 0, e);
  }, []), v = r.useRef(null);
  r.useImperativeHandle(
    v,
    () => ({
      element: h.current,
      get instance() {
        return a.current;
      },
      props: t,
      get view() {
        return a.current.view;
      },
      get workbook() {
        return a.current.workbook;
      },
      executeCommand(e) {
        var n;
        (n = a.current) == null || n.executeCommand(e);
      },
      fromJSON(e) {
        var n;
        return (n = a.current) == null ? void 0 : n.fromJSON(e);
      },
      toJSON() {
        return a.current.toJSON();
      },
      saveJSON() {
        return a.current.saveJSON();
      },
      fromFile(e) {
        return a.current.fromFile(e);
      },
      saveAsExcel(e) {
        var n;
        (n = a.current) == null || n.saveAsExcel({
          ...a.current.options.excel,
          saveAs: he,
          Workbook: Se,
          ...e
        });
      },
      activeSheet(e) {
        var n;
        return (n = a.current) == null ? void 0 : n.activeSheet(e);
      },
      sheets() {
        return a.current.sheets();
      },
      refresh() {
        var e;
        return (e = a.current) == null ? void 0 : e.refresh();
      }
    }),
    [t]
  ), r.useImperativeHandle(J, () => v.current), de("spreadsheet", v, t, t.webMcp);
  const Y = r.useCallback(() => a.current && a.current.view.nameEditor, []), N = r.useCallback((e) => {
    const n = {};
    B.forEach((o) => {
      typeof e.range[o] == "function" ? n[o] = e.range[o]() : o === "gridLines" && (n[o] = e.range.sheet().showGridLines());
    }), n.selectedHeaders = e.range.sheet().selectedHeaders(), (B.some((o) => n[o] !== b.current[o]) || n.selectedHeaders.allCols !== b.current.selectedHeaders.allCols || n.selectedHeaders.allRows !== b.current.selectedHeaders.allRows) && V(n);
  }, []), Z = r.useCallback((e) => {
    const n = e.name, o = m[n];
    x({
      title: e.title === "Error" ? E.toLanguageString(m.error, g[m.error]) : e.title,
      message: o ? E.toLanguageString(o, g[o] || e.text) : e.text,
      close: e.close
    });
  }, []), R = r.useCallback(() => {
    x(null), c == null || c.close();
  }, [c]), f = ke(), A = z();
  r.useEffect(() => {
    var p;
    const e = {
      ...t.defaultProps,
      sheets: window == null ? void 0 : window.structuredClone((p = t.defaultProps) == null ? void 0 : p.sheets),
      messages: {
        workbook: {
          defaultSheetName: A.toLanguageString(
            m.defaultSheetName,
            g[m.defaultSheetName]
          )
        }
      },
      intl: {
        localeInfo: () => f.localeInfo(),
        localeCurrency: () => f.localeCurrency(),
        parseDate: (i, u) => f.parseDate(i, u),
        toString: (i, u) => f.toString(i, u),
        format: (i, ...u) => f.format(i, ...u)
      },
      formulaBarInputRef: y,
      formulaCellInputRef: C,
      nameBoxRef: w
    }, n = new ie(h.current, e);
    a.current = n, n.bind("select", j), n.bind("change", _), n.bind("changeFormat", q), n.bind("excelImport", Q), n.bind("excelExport", X), n.view.bind("update", N), n.view.bind("message", Z);
    const o = n.activeSheet();
    return o && N({ range: o.range(o.activeCell()) }), U(!0), () => {
      n.destroy();
    };
  }, []);
  const I = r.useCallback(
    (e, n) => {
      const o = /* @__PURE__ */ r.createElement(
        e,
        {
          spreadsheetRef: a,
          value: O[e.displayName] ? O[e.displayName](S) : void 0,
          key: n
        }
      );
      return o.type === $ ? /* @__PURE__ */ r.createElement(e, { key: n }) : o;
    },
    [S]
  );
  let F = null;
  return d.length && (F = /* @__PURE__ */ r.createElement(
    ne,
    {
      selected: D,
      animation: !1,
      className: "k-floatwrap k-spreadsheet-tabstrip",
      style: { minHeight: "auto" },
      onSelect: (e) => G(e.selected)
    },
    d.map((e) => {
      const n = e.textKey ? A.toLanguageString(e.textKey, g[e.textKey]) : e.text;
      return /* @__PURE__ */ r.createElement(oe, { key: e.textKey || e.text, title: n }, /* @__PURE__ */ r.createElement(ee, { buttons: Ee, className: "k-spreadsheet-toolbar" }, e.tools.map((o, p) => Array.isArray(o) ? /* @__PURE__ */ r.createElement(te, { key: p }, o.map((i, u) => I(i, u))) : I(o, p))));
    })
  )), /* @__PURE__ */ r.createElement(
    "div",
    {
      ref: h,
      style: t.style,
      className: fe("k-widget k-spreadsheet", t.className),
      role: "application"
    },
    F,
    /* @__PURE__ */ r.createElement("div", { className: "k-spreadsheet-action-bar" }, /* @__PURE__ */ r.createElement(se, { ref: w, nameEditor: Y }), /* @__PURE__ */ r.createElement("div", { className: "k-spreadsheet-formula-bar" }, /* @__PURE__ */ r.createElement(pe, { name: "formula-fx", icon: be }), /* @__PURE__ */ r.createElement(H, { ref: y }))),
    /* @__PURE__ */ r.createElement("div", { className: "k-spreadsheet-view" }, /* @__PURE__ */ r.createElement("div", { className: "k-spreadsheet-fixed-container" }), /* @__PURE__ */ r.createElement("div", { className: "k-spreadsheet-scroller" }, /* @__PURE__ */ r.createElement("div", { className: "k-spreadsheet-view-size" })), /* @__PURE__ */ r.createElement("div", { tabIndex: 0, className: "k-spreadsheet-clipboard", contentEditable: "true" }), /* @__PURE__ */ r.createElement(H, { ref: C, className: "k-spreadsheet-cell-editor" })),
    /* @__PURE__ */ r.createElement(ce, { spreadsheetRef: a }),
    c && /* @__PURE__ */ r.createElement(ae, { title: c.title, onClose: R }, /* @__PURE__ */ r.createElement("div", null, c.message), /* @__PURE__ */ r.createElement(le, { layout: "start" }, /* @__PURE__ */ r.createElement(re, { themeColor: "primary", onClick: R, autoFocus: !0 }, E.toLanguageString(m.ok, g[m.ok])))),
    K && /* @__PURE__ */ r.createElement(ge, { message: P })
  );
});
W.displayName = "KendoReactSpreadsheet";
W.propTypes = {
  className: l.string,
  defaultProps: l.any,
  toolbar: l.oneOfType([l.bool, l.arrayOf(l.any)]),
  style: l.object,
  onSelect: l.func,
  onChange: l.func,
  onChangeFormat: l.func,
  onExcelImport: l.func,
  onExcelExport: l.func
};
export {
  W as Spreadsheet,
  O as toolsValueMap
};
