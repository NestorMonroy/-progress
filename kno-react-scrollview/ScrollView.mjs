/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as e from "react";
import s from "prop-types";
import { validatePackage as re, getLicenseMessage as se, useRtl as ne, useWebMcpRegister as oe, KEYS as f, classNames as K, IconWrap as M, WatermarkOverlay as ce } from "@progress/kno-react-common";
import { packageMetadata as T } from "./package-metadata.mjs";
import { chevronRightIcon as O, chevronLeftIcon as z } from "@progress/kno-svg-icons";
import { useLocalization as ie } from "@progress/kno-react-intl";
import { slideAriaRoleDescription as W, messages as h, carouselAriaRoleDescription as H, previous as B, next as $ } from "./messages.mjs";
const j = e.forwardRef((p, F) => {
  const Y = !re(T, { component: "ScrollView" }), _ = se(T), {
    className: E,
    style: q,
    children: I,
    pagerOverlay: d = m.pageOverlay,
    pageable: G = m.pageable,
    arrows: J = m.arrows,
    endless: r = m.endless,
    activeView: Q = m.activeView,
    automaticViewChange: R = m.automaticViewChange,
    automaticViewChangeInterval: N = m.automaticViewChangeInterval
  } = p, [a, n] = e.useState(Q || 1), o = e.useRef(null), v = e.useRef(null), k = e.useRef(null), l = e.Children.toArray(I), b = ne(o, p.dir), c = b === "rtl", y = e.useId(), w = ie(), U = w.toLanguageString(
    W,
    h[W]
  ), X = w.toLanguageString(
    H,
    h[H]
  ), V = e.useCallback(() => {
    o.current && o.current.focus();
  }, []), L = e.useCallback(
    () => ({
      element: o.current,
      focus: V
    }),
    [V]
  );
  e.useImperativeHandle(F, L);
  const D = e.useRef(null);
  e.useImperativeHandle(D, L), oe("scrollview", D, p, p.webMcp);
  const u = e.useCallback(() => {
    r ? a > 1 ? n(a - 1) : n(l.length) : a > 1 && n(a - 1);
  }, [a, l.length, r]), g = e.useCallback(() => {
    r ? a < l.length ? n(a + 1) : n(1) : a < l.length && n(a + 1);
  }, [a, l.length, r]), x = e.useCallback(
    (t) => {
      var A, P;
      const i = t.target;
      i.classList.contains("k-scrollview-prev") ? (u(), !((r || a > 2) && l.length > 0) && ((A = o.current) == null || A.focus())) : i.classList.contains("k-scrollview-next") && (g(), !((r || a < l.length - 1) && l.length > 0) && ((P = o.current) == null || P.focus()));
    },
    [a, l.length, r]
  );
  e.useEffect(() => {
    const t = l.length;
    v.current && (v.current.style.setProperty("--kno-scrollview-views", `${t}`), v.current.style.setProperty("--kno-scrollview-current", `${a}`));
  }, [l, a, b]);
  function S() {
    k.current && clearTimeout(k.current);
  }
  e.useEffect(() => {
    if (R)
      return S(), k.current = setTimeout(
        () => n((t) => t === l.length ? r ? 1 : t : t + 1),
        N
      ), () => {
        S();
      };
  }, [R, N, l.length, a, r]);
  const C = e.useCallback(
    (t) => {
      switch (t.key) {
        case f.left:
          t.preventDefault(), c ? g() : u();
          break;
        case f.right:
          t.preventDefault(), c ? u() : g();
          break;
        case f.space:
          t.preventDefault(), x(t);
          break;
        case f.enter:
          t.preventDefault(), x(t);
          break;
      }
    },
    [c, g, u]
  ), Z = e.useMemo(
    () => K(
      "k-scrollview",
      {
        "k-scrollview-light": d === "light",
        "k-scrollview-dark": d === "dark"
      },
      E
    ),
    [E, d]
  ), ee = e.Children.map(I || null, (t, i) => /* @__PURE__ */ e.createElement("div", { className: "k-scrollview-view", role: "listitem", "aria-roledescription": U }, t)), te = e.useCallback(() => {
    let t;
    return t = a > 1, (r || t) && l.length > 0;
  }, [a, l.length, r]), ae = e.useCallback(() => {
    let t;
    return t = a < l.length, (r || t) && l.length > 0;
  }, [a, l.length, r]);
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      className: Z,
      style: q,
      ref: o,
      tabIndex: 0,
      dir: b,
      onKeyDown: C,
      role: "application",
      "aria-roledescription": X
    },
    /* @__PURE__ */ e.createElement(
      "div",
      {
        className: "k-scrollview-wrap k-scrollview-animate",
        ref: v,
        id: y,
        role: "list"
      },
      ee
    ),
    /* @__PURE__ */ e.createElement("div", { className: "k-scrollview-elements" }, J && /* @__PURE__ */ e.createElement(e.Fragment, null, te() && /* @__PURE__ */ e.createElement(
      "span",
      {
        className: "k-scrollview-prev",
        "aria-label": w.toLanguageString(B, h[B]),
        role: "button",
        tabIndex: 0,
        onClick: u,
        onKeyDown: C,
        "aria-controls": y
      },
      /* @__PURE__ */ e.createElement(
        M,
        {
          name: c ? "chevron-right" : "chevron-left",
          icon: c ? O : z,
          size: "xxxlarge"
        }
      )
    ), ae() && /* @__PURE__ */ e.createElement(
      "span",
      {
        className: "k-scrollview-next",
        "aria-label": w.toLanguageString($, h[$]),
        role: "button",
        tabIndex: 0,
        onClick: g,
        onKeyDown: C,
        "aria-controls": y
      },
      /* @__PURE__ */ e.createElement(
        M,
        {
          name: c ? "chevron-left" : "chevron-right",
          icon: c ? z : O,
          size: "xxxlarge"
        }
      )
    )), G && /* @__PURE__ */ e.createElement("div", { className: "k-scrollview-nav-wrap" }, /* @__PURE__ */ e.createElement("div", { className: "k-scrollview-nav" }, l.map((t, i) => /* @__PURE__ */ e.createElement(
      "span",
      {
        className: K("k-link", {
          "k-primary": a === i + 1
        }),
        key: i + 1,
        onClick: () => n(i + 1)
      }
    ))))),
    /* @__PURE__ */ e.createElement("div", { "aria-live": "polite", className: "k-sr-only" }),
    Y && /* @__PURE__ */ e.createElement(ce, { message: _ })
  );
});
j.propTypes = {
  activeView: s.number,
  arrows: s.bool,
  automaticViewChange: s.bool,
  automaticViewChangeInterval: s.number,
  children: s.any,
  className: s.string,
  dir: s.string,
  endless: s.bool,
  pageable: s.bool,
  pageOverlay: s.string,
  style: s.object
};
const m = {
  activeView: 1,
  arrows: !0,
  automaticViewChange: !0,
  automaticViewChangeInterval: 5e3,
  endless: !1,
  pageable: !0,
  pageOverlay: "none"
};
j.displayName = "KendoScrollView";
export {
  j as ScrollView
};
