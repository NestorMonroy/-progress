/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as e from "react";
import c from "prop-types";
import { ButtonGroup as X, Button as d, Toolbar as et, ToolbarSpacer as tt } from "@progress/kno-react-buttons";
import { TextBox as ot, InputSeparator as nt, InputSuffix as at } from "@progress/kno-react-inputs";
import { Pager as rt } from "@progress/kno-react-data-tools";
import { Upload as lt } from "@progress/kno-react-upload";
import { ComboBox as ct } from "@progress/kno-react-dropdowns";
import { Loader as st } from "@progress/kno-react-indicators";
import { validatePackage as it, getLicenseMessage as ut, classNames as mt, WatermarkOverlay as dt } from "@progress/kno-react-common";
import { useLocalization as gt } from "@progress/kno-react-intl";
import { zoomOutIcon as ft, zoomInIcon as ht, pointerIcon as vt, handIcon as bt, searchIcon as kt, folderOpenIcon as pt, downloadIcon as yt, printIcon as Ct, convertLowercaseIcon as Et, arrowUpIcon as St, arrowDownIcon as xt, xIcon as wt } from "@progress/kno-svg-icons";
import "pdfjs-dist/build/pdf.worker.min.mjs";
import { packageMetadata as Y } from "./package-metadata.mjs";
import { DEFAULT_ZOOM_LEVEL as Zt, Scroller as Lt, SearchService as zt, scrollToPage as B, removeChildren as z, loadPDF as ee, reloadDocument as It, goToNextSearchMatch as te, goToPreviousSearchMatch as Mt, currentPage as Tt, calculateZoomLevel as Nt, download as Pt, print as Rt } from "@progress/kno-pdfviewer-common";
import { actualWidth as Ft, fitToWidth as Dt, fitToPage as Ot, messages as i, popupBlocked as oe, zoomOut as ne, zoomIn as ae, zoomLevel as re, enableSelection as le, enablePanning as ce, search as I, open as se, download as ie, print as ue, matchCase as me, searchOf as de, prevMatch as ge, nextMatch as fe, close as he } from "./messages.mjs";
const ve = [
  "pager",
  "spacer",
  "zoomInOut",
  "zoom",
  "selection",
  "spacer",
  "search",
  "open",
  "download",
  "print"
], C = {
  minZoom: 0.5,
  maxZoom: 4,
  tools: [...ve],
  zoomRate: 0.25,
  zoomLevels: [
    { id: 1, priority: 1, value: 1, text: "Actual width", type: "ActualWidth", locationString: Ft },
    { id: 2, priority: 2, value: 1, text: "Fit to width", type: "FitToWidth", locationString: Dt },
    { id: 3, priority: 3, value: 1, text: "Fit to page", type: "FitToPage", locationString: Ot },
    { id: 4, priority: 4, value: 0.5, text: "50%", type: "" },
    { id: 5, priority: 5, value: 0.75, text: "75%", type: "" },
    { id: 6, priority: 100, value: 1, text: "100%", type: "" },
    { id: 7, priority: 7, value: 1.25, text: "125%", type: "" },
    { id: 8, priority: 8, value: 1.5, text: "150%", type: "" },
    { id: 9, priority: 9, value: 2, text: "200%", type: "" },
    { id: 10, priority: 10, value: 3, text: "300%", type: "" },
    { id: 11, priority: 11, value: 4, text: "400%", type: "" }
  ],
  defaultZoom: Zt
}, Bt = [
  ".k-toolbar > button",
  ".k-toolbar .k-combobox > input",
  ".k-toolbar .k-button-group > button",
  ".k-toolbar .k-pager > a",
  ".k-toolbar .k-pager input"
], At = (n, x) => n.priority > x.priority ? -1 : n.priority < x.priority ? 1 : 0, be = e.forwardRef((n, x) => {
  const ke = !it(Y, { component: "PDFViewer" }), pe = ut(Y), {
    zoom: A,
    zoomLevels: V = C.zoomLevels,
    defaultZoom: M = C.defaultZoom,
    minZoom: T = C.minZoom,
    maxZoom: N = C.maxZoom,
    zoomRate: w = C.zoomRate
  } = n, s = gt(), l = e.useRef(null), [ye, Z] = e.useState(M), g = A !== void 0 ? A : ye, E = V.slice().sort(At).find((o) => o.value === g) || {
    text: g * 100 + "%",
    value: g,
    id: g,
    locationString: ""
  };
  E.locationString && (E.text = s.toLanguageString(
    E.locationString,
    i[E.locationString]
  ));
  const [m, P] = e.useState(!1), [Ce, f] = e.useState(!0), [k, W] = e.useState(0), [L, K] = e.useState(!0), [Ee, U] = e.useState(!1), [b, R] = e.useState(0), [h, p] = e.useState(0), [y, j] = e.useState(!1), [F, q] = e.useState(""), t = e.useMemo(() => ({}), []);
  t.currentZoom = g, t.props = n;
  const D = e.useCallback((o) => {
    l.current && l.current.style.setProperty("--scale-factor", String(o));
  }, []), v = e.useRef(null), S = e.useRef(null);
  e.useImperativeHandle(
    v,
    () => ({
      get element() {
        return S.current;
      },
      props: n,
      get pages() {
        return t.pages;
      },
      get document() {
        return t.document;
      }
    }),
    []
  ), e.useImperativeHandle(x, () => v.current);
  const Se = e.useCallback(() => {
    if (t.props.onLoad) {
      const o = { target: v.current };
      t.props.onLoad.call(void 0, o);
    }
  }, []), H = e.useCallback(
    (o, a, r) => {
      if (n.onDownload) {
        const u = {
          target: v.current,
          blob: o,
          fileName: a,
          saveOptions: r
        };
        return n.onDownload.call(void 0, u) === !1;
      }
      return !1;
    },
    [n.onDownload]
  ), xe = e.useCallback(() => {
    var o;
    t.scroller && t.scroller.destroy(), t.scroller = new Lt((o = l.current) == null ? void 0 : o.parentNode, {
      filter: ".k-page",
      events: {}
    }), t.scroller.disablePanEventsTracking();
  }, []), we = e.useCallback((o) => {
    const a = Array.from(o.querySelectorAll(".k-text-layer"));
    t.search = new zt({
      textContainers: a || [],
      highlightClass: "k-search-highlight",
      highlightMarkClass: "k-search-highlight-mark",
      charClass: "k-text-char"
    });
  }, []);
  t.done = e.useCallback(({ pdfPages: o, pdfDoc: a, zoom: r }) => {
    t.document = a, t.pages = o, t.zoom = r, xe(), f(!1), P(!0), Se(), l.current && B(l.current, 0);
  }, []), t.error = e.useCallback(
    (o) => {
      if (t.document = null, t.pages = [], f(!1), P(!1), n.onError) {
        const a = typeof o == "string" ? { message: o } : o, r = {
          error: a != null ? a : s.toLanguageString(oe, i[oe]),
          target: v.current
        };
        n.onError.call(void 0, r);
      }
    },
    [n.onError]
  ), e.useEffect(() => {
    l.current && (n.url || n.data || n.arrayBuffer ? (f(!0), z(l.current), ee({
      url: n.url,
      data: n.data,
      arrayBuffer: n.arrayBuffer,
      dom: l.current,
      zoom: t.currentZoom,
      done: t.done,
      error: t.error
    }), D(t.currentZoom)) : (t.document = null, t.pages = [], P(!1), f(!1), z(l.current)));
  }, [n.url, n.data, n.arrayBuffer]);
  const $ = e.useCallback(
    (o, a, r) => {
      l.current && S.current && (f(!0), z(l.current), It({
        pdfDoc: o,
        zoom: a,
        dom: l.current,
        done: (u) => {
          t.pages = u, t.zoom = a, f(!1), l.current && r > 0 && B(l.current, r);
        },
        error: t.error
      }));
    },
    [t]
  );
  e.useEffect(() => {
    D(g), l.current && t.document && g !== t.zoom && $(t.document, g, k);
  }, [g, t.document, t.zoom, $, D, k]), e.useEffect(() => () => {
    t.scroller && t.scroller.destroy(), t.search && t.search.destroy(), t.document = null, t.pages = [];
  }, []);
  const Ze = e.useCallback(() => {
    U(!0), we(l.current);
  }, []), Le = e.useCallback(
    (o) => {
      const a = o.value, r = t.search.search({ text: a, matchCase: y });
      p(r.length ? 1 : 0), R(r.length), q(a);
    },
    [y]
  ), ze = e.useCallback(() => {
    const o = t.search.search({ text: F, matchCase: !y });
    p(o.length ? 1 : 0), R(o.length), j(!y);
  }, [y, F]), Ie = e.useCallback(() => {
    te(t), p(h + 1 > b ? 1 : h + 1);
  }, [h, b]), Me = e.useCallback(() => {
    Mt(t), p(h - 1 < 1 ? b : h - 1);
  }, [h, b]), _ = e.useCallback(() => {
    t.search.destroy(), p(0), R(0), j(!1), q(""), U(!1);
  }, []), Te = e.useCallback(
    (o) => {
      o.key === "Enter" ? (o.preventDefault(), te(t), p(h + 1 > b ? 1 : h + 1)) : o.key === "Escape" && _();
    },
    [h, b]
  ), Ne = e.useCallback(
    (o) => {
      if (l.current) {
        const a = o.skip;
        B(l.current, a);
        const r = {
          page: a + 1,
          target: v.current,
          syntheticEvent: o.syntheticEvent
        };
        n.onPageChange && n.onPageChange.call(void 0, r);
      }
      W(o.skip);
    },
    [k, n.onPageChange]
  ), Pe = e.useCallback(
    (o) => {
      if (S.current) {
        const a = Tt(S.current);
        if (a !== k) {
          W(a);
          const r = {
            page: a + 1,
            target: v.current,
            syntheticEvent: o
          };
          n.onPageChange && n.onPageChange.call(void 0, r);
        }
      }
    },
    [k, n.onPageChange]
  ), Re = e.useCallback(
    (o) => {
      const a = Math.min(t.currentZoom + w, N);
      if (a !== t.currentZoom && t.document && (Z(a), n.onZoom)) {
        const r = {
          zoom: a,
          target: v.current,
          syntheticEvent: o
        };
        n.onZoom.call(void 0, r);
      }
    },
    [t.currentZoom, t.document, w, N, n.onZoom]
  ), Fe = e.useCallback(
    (o) => {
      const a = Math.max(t.currentZoom - w, T);
      if (a !== t.currentZoom && t.document && (Z(a), n.onZoom)) {
        const r = {
          zoom: a,
          target: v.current,
          syntheticEvent: o
        };
        n.onZoom.call(void 0, r);
      }
    },
    [t.currentZoom, t.document, w, T, n.onZoom]
  ), De = e.useCallback(
    (o) => {
      const a = o.value === null ? { text: "100%", value: 1 } : { ...o.value };
      if (a.value === void 0) {
        const u = parseFloat(a.text);
        typeof u == "number" && !Number.isNaN(u) ? a.value = u / 100 : a.value = 1;
      }
      let r = a ? Nt(a.value, a.type, t.currentZoom, l.current) : 1;
      if (r = Math.round(r * 100) / 100, t.currentZoom !== r && t.document && (Z(r), n.onZoom)) {
        const u = {
          zoom: r,
          target: v.current,
          syntheticEvent: o.syntheticEvent
        };
        n.onZoom.call(void 0, u);
      }
    },
    [n.onZoom]
  ), Oe = e.useCallback(() => {
    t.scroller.disablePanEventsTracking(), K(!0);
  }, []), Be = e.useCallback(() => {
    t.scroller.enablePanEventsTracking(), K(!1);
  }, []), Ae = e.useCallback(() => {
    Pt(
      {
        pdf: t.document,
        error: t.error
      },
      n.saveFileName,
      n.saveOptions,
      H
    );
  }, [n.url, n.data, n.arrayBuffer, n.saveFileName, n.saveOptions, H]), Ve = e.useCallback(() => {
    f(!0);
    const o = (r) => {
      f(!1), t.error(r);
    }, a = () => {
      f(!1);
    };
    Rt(t.pages, a, o);
  }, []), We = e.useCallback(
    (o) => {
      const a = o.newState;
      a[0] && a[0].getRawFile && a[0].getRawFile().arrayBuffer().then((u) => {
        if (l.current) {
          f(!0), z(l.current);
          const O = t.props.zoom === void 0 ? M : t.props.zoom;
          ee({
            arrayBuffer: u,
            dom: l.current,
            zoom: O,
            done: t.done,
            error: t.error
          }), Z(O);
        }
      });
    },
    [M]
  ), Ke = e.useCallback((o) => {
    const a = o.target;
    if (a instanceof Element && a.parentNode) {
      const r = a.closest(".k-toolbar"), u = r && r.querySelector(".k-upload input");
      u && u.click();
    }
  }, []), G = Ce && /* @__PURE__ */ e.createElement("div", { className: "k-loader-container k-loader-container-md k-loader-top" }, /* @__PURE__ */ e.createElement("div", { className: "k-overlay" }), /* @__PURE__ */ e.createElement("div", { className: "k-loader-container-inner " }, /* @__PURE__ */ e.createElement(st, { size: "large" }))), Ue = /* @__PURE__ */ e.createElement(X, { className: "k-toolbar-button-group k-button-group-solid" }, /* @__PURE__ */ e.createElement(
    d,
    {
      className: "k-group-start",
      fillMode: "flat",
      themeColor: "base",
      title: s.toLanguageString(ne, i[ne]),
      disabled: g <= T || !m,
      onClick: Fe,
      icon: "zoom-out",
      svgIcon: ft
    }
  ), /* @__PURE__ */ e.createElement(
    d,
    {
      className: "k-group-end",
      fillMode: "flat",
      themeColor: "base",
      title: s.toLanguageString(ae, i[ae]),
      disabled: g >= N || !m,
      onClick: Re,
      icon: "zoom-in",
      svgIcon: ht
    }
  )), je = /* @__PURE__ */ e.createElement(
    ct,
    {
      className: "k-toolbar-combobox",
      disabled: !m,
      data: V.map((o) => ({
        ...o,
        text: o.locationString ? s.toLanguageString(o.locationString, i[o.locationString]) : o.text
      })),
      dataItemKey: "id",
      textField: "text",
      value: m ? E : null,
      allowCustom: !0,
      onChange: De,
      placeholder: s.toLanguageString(re, i[re])
    }
  ), qe = /* @__PURE__ */ e.createElement(
    rt,
    {
      disabled: !m,
      previousNext: !0,
      type: "input",
      skip: k,
      take: 1,
      total: t.pages ? t.pages.length : 0,
      info: !1,
      onPageChange: Ne
    }
  ), He = /* @__PURE__ */ e.createElement(tt, null), $e = /* @__PURE__ */ e.createElement(X, { className: "k-toolbar-button-group k-button-group-solid" }, /* @__PURE__ */ e.createElement(
    d,
    {
      className: "k-group-start",
      fillMode: "flat",
      themeColor: "base",
      title: s.toLanguageString(le, i[le]),
      icon: "pointer",
      svgIcon: vt,
      disabled: !m,
      togglable: !0,
      selected: L && m,
      onClick: Oe
    }
  ), /* @__PURE__ */ e.createElement(
    d,
    {
      className: "k-group-end",
      fillMode: "flat",
      themeColor: "base",
      title: s.toLanguageString(ce, i[ce]),
      icon: "hand",
      svgIcon: bt,
      disabled: !m,
      togglable: !0,
      selected: !L && m,
      onClick: Be
    }
  )), _e = /* @__PURE__ */ e.createElement(
    d,
    {
      className: "k-toolbar-button",
      fillMode: "flat",
      themeColor: "base",
      title: s.toLanguageString(I, i[I]),
      icon: "search",
      svgIcon: kt,
      disabled: !m,
      onClick: Ze
    }
  ), Ge = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    d,
    {
      className: "k-toolbar-button",
      fillMode: "flat",
      themeColor: "base",
      title: s.toLanguageString(se, i[se]),
      icon: "folder-open",
      svgIcon: pt,
      onClick: Ke
    }
  ), /* @__PURE__ */ e.createElement("div", { style: { display: "none" } }, /* @__PURE__ */ e.createElement(
    lt,
    {
      restrictions: { allowedExtensions: [".pdf"] },
      onAdd: We,
      autoUpload: !1,
      defaultFiles: [],
      multiple: !1,
      accept: ".pdf,.PDF",
      withCredentials: !1
    }
  ))), Je = /* @__PURE__ */ e.createElement(
    d,
    {
      className: "k-toolbar-button",
      fillMode: "flat",
      themeColor: "base",
      title: s.toLanguageString(ie, i[ie]),
      icon: "download",
      svgIcon: yt,
      disabled: !m,
      onClick: Ae
    }
  ), Qe = /* @__PURE__ */ e.createElement(
    d,
    {
      className: "k-toolbar-button",
      fillMode: "flat",
      themeColor: "base",
      title: s.toLanguageString(ue, i[ue]),
      icon: "print",
      svgIcon: Ct,
      disabled: !m,
      onClick: Ve
    }
  ), Xe = {
    pager: qe,
    spacer: He,
    zoomInOut: Ue,
    zoom: je,
    selection: $e,
    search: _e,
    open: Ge,
    download: Je,
    print: Qe
  }, Ye = (n.tools || C.tools).map((o, a) => ({
    ...Xe[o],
    key: "toobar-tool-" + o + "-" + a
  })), J = /* @__PURE__ */ e.createElement(et, { buttons: Bt }, ...Ye), Q = /* @__PURE__ */ e.createElement(
    "div",
    {
      className: mt("k-canvas k-pdf-viewer-canvas k-pos-relative k-overflow-auto", {
        "k-enable-text-select": L,
        "k-enable-panning": !L
      }),
      onScroll: Pe
    },
    Ee && /* @__PURE__ */ e.createElement("div", { className: "k-search-panel k-pos-sticky k-top-center" }, /* @__PURE__ */ e.createElement(
      ot,
      {
        value: F,
        onChange: Le,
        placeholder: s.toLanguageString(I, i[I]),
        autoFocus: !0,
        onKeyDown: Te,
        suffix: () => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(nt, null), /* @__PURE__ */ e.createElement(at, null, /* @__PURE__ */ e.createElement(
          d,
          {
            icon: "convert-lowercase",
            svgIcon: Et,
            title: s.toLanguageString(me, i[me]),
            fillMode: "flat",
            togglable: !0,
            selected: y,
            onClick: ze
          }
        )))
      }
    ), /* @__PURE__ */ e.createElement("span", { className: "k-search-matches" }, /* @__PURE__ */ e.createElement("span", null, h), " ", s.toLanguageString(de, i[de]), /* @__PURE__ */ e.createElement("span", null, b)), /* @__PURE__ */ e.createElement(
      d,
      {
        title: s.toLanguageString(ge, i[ge]),
        fillMode: "flat",
        icon: "arrow-up",
        svgIcon: St,
        disabled: b === 0,
        onClick: Me
      }
    ), /* @__PURE__ */ e.createElement(
      d,
      {
        title: s.toLanguageString(fe, i[fe]),
        fillMode: "flat",
        icon: "arrow-down",
        svgIcon: xt,
        disabled: b === 0,
        onClick: Ie
      }
    ), /* @__PURE__ */ e.createElement(
      d,
      {
        title: s.toLanguageString(he, i[he]),
        fillMode: "flat",
        icon: "x",
        svgIcon: wt,
        onClick: _
      }
    )),
    /* @__PURE__ */ e.createElement("div", { ref: l, className: "k-pdf-viewer-pages" })
  );
  return /* @__PURE__ */ e.createElement("div", { className: "k-pdf-viewer", style: n.style, ref: S }, n.onRenderLoader ? n.onRenderLoader.call(void 0, G || null) : G, n.onRenderToolbar ? n.onRenderToolbar.call(void 0, J) : J, n.onRenderContent ? n.onRenderContent.call(void 0, Q) : Q, ke && /* @__PURE__ */ e.createElement(dt, { message: pe }));
});
be.displayName = "knoReactPDFViewer";
be.propTypes = {
  url: c.string,
  data: c.string,
  arrayBuffer: c.any,
  typedArray: c.any,
  style: c.object,
  saveFileName: c.string,
  saveOptions: c.object,
  tools: c.arrayOf(c.oneOf(ve).isRequired),
  zoomLevels: c.arrayOf(c.any),
  zoom: c.number,
  defaultZoom: c.number,
  minZoom: c.number,
  maxZoom: c.number,
  zoomRate: c.number,
  onError: c.func,
  onLoad: c.func,
  onDownload: c.func,
  onRenderToolbar: c.func,
  onRenderContent: c.func,
  onRenderLoader: c.func,
  onZoom: c.func
};
export {
  be as PDFViewer
};
