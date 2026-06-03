/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
import * as n from "react";
import a from "prop-types";
import { PagerNumericButtons as Be } from "./PagerNumericButtons.mjs";
import { PagerInput as Oe } from "./PagerInput.mjs";
import { PagerPageSizes as Ae } from "./PagerPageSizes.mjs";
import { Button as We } from "@progress/kno-react-buttons";
import { pagerAriaRoleDescription as qe, pagerPage as Fe, pagerTotalPages as $e, pagerOf as He, pagerInfo as _e, pagerAriaKeyshortcuts as je, pagerFirstPage as Ge, pagerPreviousPage as Ue, pagerNextPage as Ve, pagerLastPage as Je } from "../messages/index.mjs";
import { useLocalization as Qe, useInternationalization as Xe } from "@progress/kno-react-intl";
import { classNames as Z, kendoThemeMaps as Ye, Keys as c, focusFirstFocusableChild as Ze, enableNavigatableContainer as et, disableNavigatableContainer as tt, keepFocusInContainer as st, TABBABLE_ELEMENTS as at } from "@progress/kno-react-common";
import { getL10NMessage as f, translateMessage as T, getFirstButtonProps as nt, getPrevButtonProps as rt, getNextButtonProps as it, getLastButtonProps as ot } from "./utils.mjs";
const ee = n.forwardRef((g, te) => {
  const {
    buttonCount: B = h.buttonCount,
    info: se = h.info,
    type: ae = h.type,
    size: m = h.size,
    disabled: C = h.disabled,
    total: E,
    skip: x,
    take: D,
    className: ne,
    style: re,
    pageSizes: O,
    pageSizeValue: ie,
    previousNext: oe,
    responsive: L = h.responsive,
    messagesMap: i,
    dir: A,
    navigatable: v,
    adaptive: le,
    adaptiveTitle: ce
  } = g, o = Qe(), w = Xe(), R = n.useRef({ element: null, props: g }), P = n.useRef(null), K = n.useRef(0), W = n.useRef(null), q = n.useRef(null), F = n.useRef(null), $ = n.useRef(null), H = n.useRef(null), ge = n.useRef(null), d = n.useRef([
    W,
    q,
    F,
    $,
    H
  ]), k = n.useRef([]), [lt, ue] = n.useReducer((e) => e + 1, 0);
  n.useImperativeHandle(
    R,
    () => ({
      get element() {
        return fe();
      },
      props: g
    })
  ), n.useImperativeHandle(te, () => R.current);
  const fe = () => P.current;
  n.useEffect(() => {
    const e = P.current;
    if (!e)
      return;
    _();
    const t = window.ResizeObserver, s = t && new t(_);
    return s && s.observe(e), () => {
      s && s.disconnect();
    };
  }, []);
  const z = A === "rtl", l = Math.floor(x / D) + 1, p = Math.ceil((E || 0) / D), b = (e, t) => {
    g.onPageChange && e > 0 && e <= p && g.onPageChange({
      target: R.current,
      skip: (e - 1) * g.take,
      take: g.take,
      syntheticEvent: t,
      nativeEvent: t.nativeEvent,
      targetEvent: t
    });
  }, de = (e) => {
    const t = P.current, s = e.keyCode;
    !t || !v || ((s === c.home || e.metaKey && s === c.left) && b(1, e), (s === c.end || e.metaKey && s === c.right) && b(p, e), document.activeElement === t ? (s === c.enter && (Ze(t), et(t)), (s === c.left || s === c.up) && b(l - 1, e), (s === c.right || s === c.down) && b(l + 1, e)) : (s === c.esc && (t.focus(), tt(t)), st(e, t, at)));
  }, _ = () => {
    const e = P.current;
    if (!e)
      return;
    let t = 0;
    const s = e.clientWidth || 0, y = parseInt(window.getComputedStyle(e).gap || "0", 10), M = Array.from(e.children).reduce((r, u) => (r += Math.ceil(u.clientWidth || 0), r), 0), I = Array.from(e.children).length;
    if (t = M + (I - 1) * y, L && t > s) {
      const r = [...d.current], u = r.shift();
      K.current = t, d.current = r, u && (k.current = [u, ...k.current]);
    } else if (L && s > K.current) {
      const r = [...k.current], u = r.shift();
      k.current = r, u && (d.current = [...d.current, u]), K.current = t;
    }
    ue();
  }, pe = (e, t) => {
    const s = {
      target: R == null ? void 0 : R.current,
      syntheticEvent: t.syntheticEvent,
      nativeEvent: t.nativeEvent,
      targetEvent: t,
      ...e
    };
    g.onPageChange && g.onPageChange(s);
  }, me = f(Ge, i), be = f(Ue, i), ve = f(Ve, i), Re = f(Je, i), j = f(_e, i), G = f(je, i), U = f(Fe, i), V = f(He, i), N = f($e, i), he = `${o.toLanguageString(
    U.messageKey,
    U.defaultMessage
  )} ${w.format(o.toLanguageString(N.messageKey, N.defaultMessage), [
    l
  ])} ${o.toLanguageString(V.messageKey, V.defaultMessage)} ${w.format(
    o.toLanguageString(N.messageKey, N.defaultMessage),
    [p]
  )}`, Ce = o.toLanguageString(qe, "pager"), S = (e, t, s, y, M, I) => /* @__PURE__ */ n.createElement(
    We,
    {
      fillMode: "flat",
      size: m,
      className: t,
      icon: y,
      svgIcon: M,
      title: s,
      "aria-label": s,
      "aria-disabled": I,
      tabIndex: v ? -1 : void 0,
      onClick: (r) => {
        r.preventDefault(), b(e, r);
      }
    }
  ), Pe = O && /* @__PURE__ */ n.createElement(
    Ae,
    {
      pageChange: pe,
      pageSize: D,
      pageSizes: O,
      value: ie,
      messagesMap: i,
      size: m,
      navigatable: v,
      pagerSizesRef: H,
      pagerSizesTitleRef: $,
      visibleElementsRef: d,
      adaptive: le,
      adaptiveTitle: ce
    }
  ), ye = se && d.current.length >= 4 && /* @__PURE__ */ n.createElement("span", { className: "k-pager-info", ref: q }, w.format(o.toLanguageString(j.messageKey, j.defaultMessage), [
    Math.min(x + 1, E),
    Math.min(x + D, E),
    E
  ])), Me = ae === "numeric" && d.current.length === 5 ? /* @__PURE__ */ n.createElement(
    Be,
    {
      buttonCount: B || 0,
      totalPages: p,
      currentPage: l,
      pageChange: b,
      messagesMap: i,
      size: m,
      navigatable: v,
      pagerNumericButtonsRef: W
    }
  ) : /* @__PURE__ */ n.createElement(
    Oe,
    {
      buttonCount: B || 0,
      totalPages: p,
      currentPage: l,
      pageChange: b,
      messagesMap: i,
      size: m,
      navigatable: v,
      pagerInputTitleRef: F,
      visibleElementsRef: d
    }
  );
  let J, Q, X, Y;
  if (oe) {
    const e = T(o, me), {
      rtlClass: t,
      rtlIcon: s,
      isDisabledClass: y,
      isDisabled: M
    } = nt(z, l, C);
    J = S(1, y, e, t, s, M);
    const I = T(o, be), {
      rtlClass: r,
      rtlIcon: u,
      isDisabledClass: Ie,
      isDisabled: Ee
    } = rt(z, l, C);
    Q = S(l - 1, Ie, I, r, u, Ee);
    const De = T(o, ve), {
      rtlClass: ke,
      rtlIcon: ze,
      isDisabledClass: Ne,
      isDisabled: Se
    } = it(z, l, p, C);
    X = S(l + 1, Ne, De, ke, ze, Se);
    const Te = T(o, Re), {
      rtlClass: xe,
      rtlIcon: Le,
      isDisabledClass: we,
      isDisabled: Ke
    } = ot(z, l, p, C);
    Y = S(p, we, Te, xe, Le, Ke);
  }
  return /* @__PURE__ */ n.createElement(
    "div",
    {
      ref: P,
      className: Z(
        "k-pager",
        {
          [`k-pager-${Ye.sizeMap[m] || m}`]: m,
          "k-pager-responsive": L,
          "k-disabled": C
        },
        ne
      ),
      style: re,
      role: "application",
      "aria-roledescription": Ce,
      dir: A,
      "aria-keyshortcuts": o.toLanguageString(
        G.messageKey,
        G.defaultMessage
      ),
      "aria-label": he,
      tabIndex: v ? 0 : void 0,
      onKeyDown: de
    },
    /* @__PURE__ */ n.createElement("div", { className: Z("k-pager-numbers-wrap"), ref: ge }, J, Q, Me, X, Y),
    Pe,
    ye
  );
}), h = {
  buttonCount: 10,
  info: !0,
  type: "numeric",
  size: void 0,
  disabled: !1,
  responsive: !0
};
ee.displayName = "Pager";
ee.propTypes = {
  className: a.string,
  style: a.object,
  total: a.number.isRequired,
  skip: a.number.isRequired,
  take: a.number.isRequired,
  buttonCount: a.number,
  info: a.bool,
  type: a.oneOf(["numeric", "input"]),
  pageSizes: a.oneOfType([
    a.arrayOf(a.number.isRequired),
    a.arrayOf(a.oneOfType([a.number.isRequired, a.string.isRequired]).isRequired)
  ]),
  previousNext: a.bool,
  onPageChange: a.func,
  messagesMap: a.func,
  size: a.oneOf(["small", "medium", "large"]),
  dir: a.string,
  disabled: a.bool,
  responsive: a.bool,
  adaptive: a.bool,
  adaptiveTitle: a.string
};
export {
  ee as Pager
};
