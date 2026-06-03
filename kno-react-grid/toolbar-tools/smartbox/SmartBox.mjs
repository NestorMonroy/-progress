/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as e from "react";
import { SpeechToTextButton as et, Button as tt, SegmentedControl as nt } from "@progress/kno-react-buttons";
import { xIcon as rt, stopIcon as at, arrowUpIcon as st } from "@progress/kno-svg-icons";
import { guid as ot, kendoThemeMaps as it, classNames as B, IconWrap as ce } from "@progress/kno-react-common";
import { useLocalization as lt } from "@progress/kno-react-intl";
import { List as $ } from "@progress/kno-react-dropdowns";
import { Popup as ct } from "@progress/kno-react-popup";
import { createListItemRender as ut, searchModeItemRender as pt, listGroupHeaderRender as ue, NoDataRender as mt } from "./listItemRenders.mjs";
import { smartBoxClearTitle as pe, messages as C, smartBoxSpeechToTextButton as P, smartBoxSubmitPromptButton as L } from "../../messages/index.mjs";
import { useGridAIRequest as dt } from "../../hooks/useGridAIRequest.mjs";
import { GridContext as ht } from "../../utils/GridContext.mjs";
import { useSmartBoxModes as ft } from "./hooks/useSmartBoxModes.mjs";
import { useSmartBoxHistory as gt } from "./hooks/useSmartBoxHistory.mjs";
import { useSmartBoxPopup as St } from "./hooks/useSmartBoxPopup.mjs";
import { useSmartBoxGridState as Ct } from "./hooks/useSmartBoxGridState.mjs";
import { useSmartBoxLabels as kt } from "./hooks/useSmartBoxLabels.mjs";
import { useSmartBoxListData as bt } from "./hooks/useSmartBoxListData.mjs";
import { useSmartBoxSegmentedControl as xt } from "./hooks/useSmartBoxSegmentedControl.mjs";
import { useSmartBoxSearch as Rt } from "./hooks/useSmartBoxSearch.mjs";
import { useDebounce as vt } from "./hooks/useDebounce.mjs";
const It = e.forwardRef((me, de) => {
  var ie;
  const {
    searchConfig: he,
    semanticSearchConfig: fe,
    aiAssistantConfig: ge,
    activeMode: Se,
    dir: Ce = "ltr",
    size: K = "medium",
    placeholder: ke,
    history: be,
    loading: xe = !1,
    promptSuggestionRender: j,
    historyItemRender: J,
    onOpen: Re,
    onClose: ve,
    onFocus: k,
    onBlur: b,
    onSearch: Ie,
    onSemanticSearch: we,
    onAIPromptRequest: F,
    onAIResponseSuccess: H,
    onAIResponseError: z,
    onAICancelRequest: x
  } = me, f = lt(), g = e.useContext(ht), Ee = e.useRef(`k-${ot()}`), d = e.useRef(null), S = e.useRef(null), Q = e.useRef(null), [o, p] = e.useState(""), [De, R] = e.useState(!1), [ye, X] = e.useState(void 0), [Be, Y] = e.useState(null), {
    searchMode: i,
    semanticSearchMode: c,
    aiAssistantMode: a,
    selectedView: n,
    setSelectedViewState: N,
    lastSearchMode: Pe,
    searchHistorySettings: Z,
    semanticSearchHistorySettings: _,
    aiAssistantHistorySettings: T,
    speechToTextButtonSettings: M,
    currentSearchDelay: Le
  } = ft({
    searchConfigProp: he,
    semanticSearchConfigProp: fe,
    aiAssistantConfigProp: ge,
    activeModeProp: Se,
    sharedHistory: be
  }), { currentHistory: v, currentHistorySettings: Fe, addToHistory: q } = gt({
    selectedView: n,
    searchHistorySettings: Z,
    semanticSearchHistorySettings: _,
    aiAssistantHistorySettings: T
  }), { isOpen: O, togglePopup: s } = St({ onOpen: Re, onClose: ve }), { columns: A, gridState: He, gridRef: ze, handleStateChange: Ne } = Ct(g), V = e.useMemo(
    () => (a == null ? void 0 : a.promptSuggestions) || [],
    [a == null ? void 0 : a.promptSuggestions]
  ), { inputPlaceholder: Te, prefixIcon: qe } = kt({
    selectedView: n,
    searchMode: i,
    semanticSearchMode: c,
    aiAssistantMode: a,
    sharedPlaceholder: ke
  }), { searchListData: h, aiAssistantListData: I, searchHistoryListData: w } = bt({
    selectedView: n,
    searchModeEnabled: i == null ? void 0 : i.enabled,
    semanticSearchModeEnabled: c == null ? void 0 : c.enabled,
    promptSuggestions: V,
    currentHistory: v,
    currentHistorySettings: Fe
  }), E = xt({
    searchMode: i,
    semanticSearchMode: c,
    aiAssistantMode: a,
    selectedView: n,
    lastSearchMode: Pe,
    setSelectedViewState: N,
    setInputValue: p
  });
  e.useEffect(() => {
    const t = d.current;
    if (!t)
      return;
    X(t.offsetWidth);
    const r = new ResizeObserver(() => {
      t && X(t.offsetWidth);
    });
    return r.observe(t), () => {
      r.disconnect();
    };
  }, []);
  const m = xe || De, W = !n, Oe = !(i != null && i.enabled) && !(c != null && c.enabled) && !(a != null && a.enabled), Ve = it.sizeMap[K] || "md", { emitSearchEvent: u } = Rt({
    selectedView: n,
    searchMode: i,
    columns: A,
    gridContext: g,
    searchHistorySettings: Z,
    semanticSearchHistorySettings: _,
    addToHistory: q,
    onSearch: Ie,
    onSemanticSearch: we
  }), { sendRequest: ee, cancelRequest: te } = dt({
    requestUrl: a == null ? void 0 : a.requestUrl,
    requestOptions: a == null ? void 0 : a.requestOptions,
    httpClient: a == null ? void 0 : a.httpClient,
    columns: A,
    gridState: He,
    gridRef: ze,
    onPromptRequest: (t) => {
      F == null || F({ requestData: t });
    },
    onResponseSuccess: (t) => {
      R(!1), H == null || H({ response: t });
    },
    onResponseError: (t) => {
      R(!1), z == null || z({ error: t });
    },
    onStateChange: Ne,
    onExportPdf: () => g == null ? void 0 : g.exportAsPdf()
  });
  e.useImperativeHandle(
    de,
    () => ({
      show: () => s(!0),
      hide: () => s(!1)
    }),
    [s]
  );
  const G = vt(Be, Le), ne = e.useRef(u);
  ne.current = u, e.useEffect(() => {
    G !== null && ne.current(G);
  }, [G]);
  const We = e.useCallback(
    (t) => {
      const r = t.target.value;
      p(r), s(!r), (n === "search" || n === "semanticSearch") && Y(r);
    },
    [s, n]
  ), Ge = e.useCallback(() => {
    k == null || k(), o || s(!0);
  }, [k, s, o]), Ue = e.useCallback(
    (t) => {
      var le;
      const r = d.current, l = (le = Q.current) == null ? void 0 : le.element, y = t.relatedTarget, Me = y && (r == null ? void 0 : r.contains(y)), Ae = y && (l == null ? void 0 : l.contains(y));
      !Me && !Ae && (b == null || b(), s(!1));
    },
    [b, s]
  ), $e = e.useCallback(() => {
    o || s(!0);
  }, [s, o]), re = !!((ie = a == null ? void 0 : a.requestOptions) != null && ie.url || a != null && a.requestUrl), U = e.useCallback(() => {
    if (m) {
      x == null || x(), te(), R(!1);
      return;
    }
    o.trim() && (re && R(!0), q("aiAssistant", o, T), s(!1), ee(o.trim()), p(""));
  }, [
    m,
    o,
    T,
    s,
    q,
    ee,
    te,
    re,
    x
  ]), Ke = e.useCallback(
    (t) => {
      t.key === "Enter" && (n === "aiAssistant" ? U() : n === "semanticSearch" && u(o));
    },
    [n, o, u, U]
  ), je = e.useCallback(() => {
    var t;
    s(!O), (t = S.current) == null || t.focus();
  }, [O, s]), Je = e.useCallback(
    (t) => {
      var r;
      t.stopPropagation(), t.preventDefault(), p(""), (r = S.current) == null || r.focus(), s(!0), u("");
    },
    [s, u]
  ), ae = e.useCallback(
    (t) => {
      var r;
      N(t), p(""), Y(null), (r = S.current) == null || r.focus();
    },
    [N]
  ), D = e.useCallback(
    (t) => {
      var r;
      p(t), s(!1), (r = S.current) == null || r.focus(), n !== "aiAssistant" && u(t);
    },
    [n, s, u]
  ), Qe = e.useCallback((t) => {
    if (t.isFinal && t.alternatives.length > 0) {
      const r = t.alternatives[0].transcript;
      p((l) => l ? `${l} ${r}` : r);
    }
  }, []), Xe = e.useMemo(() => n === "aiAssistant" ? v.length === 0 && V.length === 0 : n === "search" || n === "semanticSearch" ? v.length === 0 && h.length === 0 : !1, [n, v.length, V.length, h.length]), se = e.useCallback(
    (t) => {
      const l = (n === "aiAssistant" ? I : w)[t];
      l && D(l.text);
    },
    [n, I, w, D]
  ), Ye = e.useCallback(
    (t) => {
      const r = h[t];
      r && ae(r.mode);
    },
    [h, ae]
  ), oe = e.useMemo(
    () => ut({
      historyItemRender: J,
      promptSuggestionRender: j,
      handleListItemClick: D
    }),
    [J, j, D]
  ), Ze = O && !Oe, _e = () => /* @__PURE__ */ e.createElement(e.Fragment, null, E.items.length > 0 && /* @__PURE__ */ e.createElement(
    nt,
    {
      items: E.items,
      value: E.value,
      onChange: E.onChange,
      size: K,
      layoutMode: "stretch"
    }
  ), (n === "search" || n === "semanticSearch") && h.length > 0 && /* @__PURE__ */ e.createElement(
    $,
    {
      data: h,
      textField: "text",
      descriptionField: "description",
      onClick: Ye,
      itemRender: pt,
      show: !0,
      wrapperCssClass: "k-list k-list-md"
    }
  ), n === "aiAssistant" && I.length > 0 && /* @__PURE__ */ e.createElement(
    $,
    {
      data: I,
      textField: "text",
      groupField: "group",
      svgIconField: "groupSvgIcon",
      descriptionField: "description",
      onClick: se,
      itemRender: oe,
      groupHeaderItemRender: ue,
      showFirstGroupHeader: !0,
      show: !0,
      wrapperCssClass: "k-list k-list-md"
    }
  ), (n === "search" || n === "semanticSearch") && w.length > 0 && /* @__PURE__ */ e.createElement(
    $,
    {
      data: w,
      textField: "text",
      groupField: "group",
      svgIconField: "groupSvgIcon",
      descriptionField: "description",
      onClick: se,
      itemRender: oe,
      groupHeaderItemRender: ue,
      showFirstGroupHeader: !0,
      show: !0,
      wrapperCssClass: "k-list k-list-md"
    }
  ), Xe && /* @__PURE__ */ e.createElement(mt, { selectedView: n }));
  return /* @__PURE__ */ e.createElement("div", { ref: d, className: "k-smart-box-wrapper", dir: Ce, onBlur: Ue }, /* @__PURE__ */ e.createElement(
    "span",
    {
      className: B("k-smart-box", "k-input", `k-input-${Ve}`, {
        "k-loading": m
      })
    },
    !W && /* @__PURE__ */ e.createElement("span", { className: "k-input-prefix k-input-prefix-horizontal" }, /* @__PURE__ */ e.createElement(
      ce,
      {
        className: B("k-icon", {
          "k-accent-icon": n === "aiAssistant" || n === "semanticSearch"
        }),
        icon: qe.svgIcon,
        onClick: je,
        onMouseDown: (t) => {
          "preventDefault" in t && t.preventDefault();
        }
      }
    )),
    /* @__PURE__ */ e.createElement(
      "input",
      {
        ref: S,
        type: "text",
        className: B("k-input-inner", { "k-disabled": W }),
        id: Ee.current,
        placeholder: Te,
        value: o,
        disabled: W,
        onChange: We,
        onFocus: Ge,
        onClick: $e,
        onKeyDown: Ke
      }
    ),
    o.length > 0 && (n === "search" || n === "semanticSearch") && /* @__PURE__ */ e.createElement(
      "span",
      {
        className: "k-clear-value",
        title: f.toLanguageString(
          pe,
          C[pe]
        ),
        role: "button",
        tabIndex: -1,
        onClick: Je,
        onMouseDown: (t) => t.preventDefault()
      },
      /* @__PURE__ */ e.createElement(ce, { className: "k-icon", icon: rt })
    ),
    n === "aiAssistant" && /* @__PURE__ */ e.createElement("span", { className: "k-input-suffix k-input-suffix-horizontal" }, M && /* @__PURE__ */ e.createElement(
      et,
      {
        ...M,
        "aria-label": f.toLanguageString(
          P,
          C[P]
        ),
        title: f.toLanguageString(
          P,
          C[P]
        ),
        onResult: Qe
      }
    ), /* @__PURE__ */ e.createElement(
      tt,
      {
        className: B("k-smart-box-send", {
          "k-processing": m,
          "k-active": m
        }),
        type: "button",
        rounded: "full",
        size: "small",
        title: f.toLanguageString(
          L,
          C[L]
        ),
        "aria-label": f.toLanguageString(
          L,
          C[L]
        ),
        "aria-disabled": o.length === 0,
        svgIcon: m ? at : st,
        disabled: o.length === 0 && !m,
        onClick: U
      }
    ))
  ), /* @__PURE__ */ e.createElement(
    ct,
    {
      ref: Q,
      anchor: d.current,
      show: Ze,
      popupClass: "k-smart-box-popup",
      style: { width: ye },
      anchorAlign: { horizontal: "left", vertical: "bottom" },
      popupAlign: { horizontal: "left", vertical: "top" },
      margin: { horizontal: 0, vertical: 2 },
      onMouseDownOutside: (t) => {
        const r = t.event.target;
        d.current && !d.current.contains(r) && s(!1);
      }
    },
    _e()
  ));
});
It.displayName = "KendoReactSmartBox";
export {
  It as SmartBox
};
