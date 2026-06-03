/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as i from "react";
import C from "prop-types";
import { getLicenseMessage as en, usePropsContext as tn, validatePackage as nn, useUnstyled as rn, useId as on, useWebMcpRegister as sn, useknoPaste as an, canUseDOM as ot, useAdaptiveModeContext as ln, classNames as L, uDropDownList as P, getTabIndex as dn, IconWrap as cn, createPropsContext as un, Keys as h, WatermarkOverlay as pn, sizeMap as mn, svgIconPropType as fn } from "@progress/kno-react-common";
import { FloatingLabel as gn } from "@progress/kno-react-labels";
import { chevronDownIcon as vn } from "@progress/kno-svg-icons";
import hn from "../common/ListContainer.mjs";
import In from "../common/ListFilter.mjs";
import it from "../common/GroupStickyHeader.mjs";
import yn from "../common/ListDefaultItem.mjs";
import wn from "../common/List.mjs";
import pt from "../common/DropDownBase.mjs";
import { getFilteredData as E, getItemIndexByText as xn, areSame as F, getItemValue as re, isPresent as st, itemIndexStartsWith as Sn, sameCharsOnly as Dn, shuffleData as Cn, matchText as at } from "../common/utils.mjs";
import { packageMetadata as lt } from "../package-metadata.mjs";
import { Button as kn } from "@progress/kno-react-buttons";
import { useLocalization as En } from "@progress/kno-react-intl";
import { dropDownListArrowBtnAriaLabel as dt, messages as Me, dropDownListAdaptiveFilterPlaceholder as ct, listAriaLabel as ut } from "../messages/index.mjs";
import { ActionSheetContent as Ln } from "@progress/kno-react-layout";
import { AdaptiveMode as bn } from "../common/AdaptiveMode.mjs";
const Pn = "Please select a value from the list!", Ke = i.forwardRef((mt, ft) => {
  var tt;
  let Ne = !1;
  const gt = en(lt), n = tn(Fn, mt), {
    delay: vt = z.delay,
    tabIndex: ht = z.tabIndex,
    ignoreCase: J = z.ignoreCase,
    size: H = z.size,
    rounded: Te = z.rounded,
    fillMode: fe = z.fillMode
  } = n;
  if (n.filterable || n.virtual) {
    const e = [];
    n.filterable && e.push("filterable"), n.virtual && e.push("virtualization"), Ne = !nn(lt, {
      component: "DropDownList",
      features: e
    });
  }
  const K = rn(), ge = on(n.id), ve = () => {
    var e;
    if (ot)
      return ((e = V.current) == null ? void 0 : e.ownerDocument) || window.document;
  }, It = () => {
    var e, r;
    (e = t == null ? void 0 : t.current) != null && e.wrapper && ((r = t == null ? void 0 : t.current) == null || r.wrapper.focus({ preventScroll: !0 }));
  }, k = () => {
    let e;
    return W.current !== void 0 && W.current !== null ? e = W.current : n.value !== void 0 ? e = n.value : m.value !== void 0 && m.value !== null ? e = m.value : n.defaultValue !== void 0 && n.defaultValue !== null && (e = n.defaultValue), !st(e) && n.defaultItem !== void 0 && n.defaultItem !== null && (e = n.defaultItem), e;
  }, yt = () => {
    const { dataItemKey: e } = n, r = E(n), o = k();
    return r.findIndex((l) => F(l, o, e));
  }, he = () => n.required !== void 0 ? n.required : z.required, Ie = () => {
    const e = n.validationMessage !== void 0, r = k(), o = !he() || r !== null && r !== "" && r !== void 0, l = n.valid !== void 0 ? n.valid : o;
    return {
      customError: e,
      valid: l,
      valueMissing: r === null
    };
  }, wt = () => n.validityStyles !== void 0 ? n.validityStyles : z.validityStyles, oe = (e) => {
    ie.current = !0, e.focus(), window.setTimeout(() => ie.current = !1, 30);
  }, ye = () => {
    X.current && oe(X.current), n.adaptive && setTimeout(() => {
      X.current && oe(X.current);
    }, 300);
  }, xt = i.useCallback((e) => {
    for (const r of e)
      Wt(r.target.clientWidth);
  }, []), Oe = () => {
    var e;
    (e = Ce.current) != null && e.setCustomValidity && Ce.current.setCustomValidity(
      Ie().valid ? "" : n.validationMessage || Pn
    );
  }, A = (e, r) => {
    const o = k();
    F(o, e, n.dataItemKey) || (n.value === void 0 && (r.data.value = e), t.current.updateComponentArgs({ value: e }), W.current = e, r.events.push({ type: "onChange" }));
  }, M = (e) => {
    var r;
    (r = t == null ? void 0 : t.current) == null || r.applyState(e), W.current = void 0;
  }, Q = (e, r) => {
    var u;
    const { virtual: o, dataItemKey: l, defaultItem: a } = n, c = E(n), p = o ? o.skip : 0, f = k(), d = e === -1 && a !== void 0 ? a : c[e - p], g = !F(d, f, l);
    A(d, r), g && ((u = t == null ? void 0 : t.current) == null || u.triggerPageChangeCornerItems(d, r));
  }, B = (e, r, o) => {
    var D, v;
    const { defaultItem: l, dataItemKey: a, virtual: c = { skip: 0, total: 0, pageSize: 0 } } = n, p = k(), f = E(n), d = (D = t == null ? void 0 : t.current) == null ? void 0 : D.vs, g = f.findIndex((I) => F(I, p, a)), u = (v = t == null ? void 0 : t.current) == null ? void 0 : v.navigation.navigate({
      current: c.skip + g,
      max: (d != null && d.enabled ? c.total : f.length) - 1,
      min: l !== void 0 ? -1 : 0,
      keyCode: r,
      skipItems: o || void 0
    });
    u !== void 0 && Q(u, e), M(e);
  }, St = (e) => {
    V.current = e, t.current.wrapper = e;
  }, Dt = (e) => /* @__PURE__ */ i.createElement(
    "select",
    {
      name: n.name,
      ref: (r) => {
        Ce.current = r;
      },
      tabIndex: -1,
      "aria-hidden": !0,
      title: n.label,
      style: { opacity: 0, width: 1, border: 0, zIndex: -1, position: "absolute", left: "50%" }
    },
    /* @__PURE__ */ i.createElement("option", { value: n.valueMap ? n.valueMap.call(void 0, e) : e })
  ), we = () => {
    const {
      textField: e,
      dataItemKey: r,
      virtual: o = { skip: 0 },
      focusedItemIndex: l = Sn,
      filterable: a,
      skipDisabledItems: c = !0
    } = n, p = k(), f = E(n), d = n.filter ? n.filter : m.text;
    return c && e && !d && !p ? f.findIndex((g) => !g.disabled) : st(p) && d === void 0 || a && d === "" ? f.findIndex((g) => F(g, p, r)) : d ? ke.current ? l(f, d, e) : f.findIndex((g) => F(g, p, r)) : o.skip === 0 ? 0 : -1;
  }, ze = (e, r) => r !== void 0 && r !== -1 && e && e.length > 0 && e[r].disabled, xe = () => {
    const e = E(n), r = t.current.initState(), o = we();
    ze(e, o) && (A(null, r), M(r));
  }, Se = (e) => {
    if (e.isPropagationStopped())
      return;
    const r = t.current.initState();
    r.syntheticEvent = e, m.focused || (r.data.focused = !0), xe(), t.current.togglePopup(r), M(r);
  }, He = (e) => {
    var O, pe, G, me, j, nt, rt;
    e && e.target instanceof Element && e.target.nodeName === "INPUT" && e.stopPropagation && e.stopPropagation();
    const {
      filterable: r,
      disabled: o,
      defaultItem: l,
      leftRightKeysNavigation: a = !0,
      virtual: c = { skip: 0, total: 0, pageSize: 0 },
      dataItemKey: p,
      groupField: f = "",
      textField: d,
      skipDisabledItems: g = !0
    } = n, u = E(n), D = k(), v = u.findIndex((w) => F(w, D, p)), I = n.opened !== void 0 ? n.opened : m.opened, s = e.keyCode, N = s === h.home || s === h.end, b = s === h.up || s === h.down, Y = !I && (e.altKey && s === h.down || s === h.enter || s === h.space), ne = I && (e.altKey && s === h.up || s === h.esc), ce = a && (s === h.left || s === h.right), ue = b || ce && !r || N, y = t.current.initState();
    if (y.syntheticEvent = e, !o) {
      if (N && ((O = t == null ? void 0 : t.current) != null && O.vs.enabled))
        s === h.home ? c.skip !== 0 ? ((pe = t == null ? void 0 : t.current) == null || pe.triggerOnPageChange(y, 0, c.pageSize), q.current = !0) : A(u[0], y) : c.skip < c.total - c.pageSize ? ((G = t == null ? void 0 : t.current) == null || G.triggerOnPageChange(
          y,
          c.total - c.pageSize,
          c.pageSize
        ), q.current = !0) : A(u[u.length - 1], y);
      else if (I && s === h.pageUp)
        e.preventDefault(), (me = t == null ? void 0 : t.current) == null || me.scrollPopupByPageSize(-1);
      else if (I && s === h.pageDown)
        e.preventDefault(), (j = t == null ? void 0 : t.current) == null || j.scrollPopupByPageSize(1);
      else if (I && s === h.enter) {
        const w = we();
        ze(u, w) ? (A(null, y), M(y)) : Q(w, y), (nt = t == null ? void 0 : t.current) == null || nt.togglePopup(y), e.preventDefault();
      } else if (Y || ne)
        ne && xe(), (rt = t == null ? void 0 : t.current) == null || rt.togglePopup(y), e.preventDefault();
      else if (ue) {
        if (ke.current = !1, f !== "" && d)
          if (!g && I)
            B(y, s);
          else {
            let w;
            if (s === h.down || s === h.right) {
              const x = u.slice(v + 1).find((S) => !S.disabled);
              w = x && u.indexOf(x);
            } else if (s === h.up || s === h.left) {
              let x;
              if (v === 0 && l)
                w = -1;
              else if (v === -1)
                x = u, w = u.findIndex((S) => !S.disabled);
              else {
                x = u.slice(0, v);
                let S = x.pop();
                for (; S && S.disabled; )
                  S = x.pop();
                w = S && u.indexOf(S);
              }
            }
            if (w !== void 0) {
              const x = w - v;
              B(y, s, x);
            } else w === void 0 && v === u.length - 1 && B(y, s);
          }
        else if (!g && I || N)
          B(y, s);
        else if (d) {
          let w;
          if (s === h.down || s === h.right) {
            const x = u.slice(v + 1).find((S) => !S.disabled);
            w = x && u.indexOf(x);
          } else if (s === h.up || s === h.left) {
            let x;
            if (v === 0 && l)
              w = -1;
            else if (v === -1)
              x = u, w = u.findIndex((S) => !S.disabled);
            else {
              x = u.slice(0, v);
              let S = x.pop();
              for (; S && S.disabled; )
                S = x.pop();
              w = S && u.indexOf(S);
            }
          }
          if (w !== void 0) {
            const x = w - v;
            B(y, s, x);
          } else w === void 0 && v === u.length - 1 && B(y, s);
        } else
          B(y, s);
        e.preventDefault();
      }
      M(y);
    }
  }, Ct = (e) => {
    const r = t.current.initState();
    r.syntheticEvent = e.syntheticEvent, n.filter === void 0 && (r.data.text = e.target.value), t.current.filterChanged(e.target.value, r), ke.current = !0, M(r), R({ group: void 0, text: String(e.target.value) });
  }, Ae = (e) => {
    const r = n.filter !== void 0 ? n.filter : m.text;
    return n.filterable && /* @__PURE__ */ i.createElement(
      In,
      {
        value: r,
        ref: (o) => {
          X.current = o && o.element;
        },
        onChange: Ct,
        onKeyDown: He,
        size: e ? "large" : H,
        rounded: Te,
        fillMode: fe,
        renderListFilterWrapper: !0,
        placeholder: be.toLanguageString(
          ct,
          Me[ct]
        )
      }
    );
  }, kt = (e) => {
    var o;
    const r = t.current.initState();
    r.syntheticEvent = e, (o = t == null ? void 0 : t.current) == null || o.togglePopup(r), A(n.defaultItem, r), M(r);
  }, Et = () => {
    const { textField: e, defaultItem: r, dataItemKey: o } = n, l = k();
    return r !== void 0 && /* @__PURE__ */ i.createElement(
      yn,
      {
        defaultItem: r,
        textField: e,
        selected: F(l, r, o),
        key: "defaultitemkey",
        onClick: kt
      }
    );
  }, Lt = (e, r) => {
    var o;
    (o = t == null ? void 0 : t.current) == null || o.handleItemClick(e, r), W.current = void 0;
  }, bt = (e) => {
    const { vs: r, list: o } = t.current;
    r.scrollHandler(e);
    const { groupField: l } = n;
    let a = E(n);
    if (!(!l || !a.length) && l) {
      const c = We.current = We.current || (r.enabled ? r.itemHeight : o ? o.children[0].offsetHeight : 0), f = e.target.scrollTop - r.skip * c;
      a = t.current.getGroupedDataModernMode(a, l);
      let d = a[0][l];
      for (let g = 1; g < a.length && !(c * g > f); g++)
        a[g] && a[g][l] && (d = a[g][l]);
      d !== m.group && R({ group: d });
    }
  }, Be = () => {
    var s;
    const {
      textField: e,
      dataItemKey: r,
      virtual: o = { skip: 0, total: void 0 },
      groupHeaderItemRender: l,
      listNoDataRender: a,
      itemRender: c
    } = n, p = E(n), f = K && K.uDropDownList, d = t.current.vs, g = o.skip, u = n.opened !== void 0 ? n.opened : m.opened, D = t.current.getPopupSettings(), v = `translateY(${d.translate}px)`, I = k();
    return /* @__PURE__ */ i.createElement(
      wn,
      {
        id: Ge,
        show: u,
        data: p.slice(),
        focusedIndex: we(),
        value: I,
        textField: e,
        valueField: r,
        optionsGuid: $e,
        groupField: n.groupField,
        ariaLabel: be.toLanguageString(ut, Me[ut]),
        listRef: (N) => {
          d.list = t.current.list = N;
        },
        wrapperStyle: { maxHeight: _ ? void 0 : D.height },
        wrapperCssClass: L(P.listContent({ c: f })),
        listStyle: d.enabled ? { transform: v } : void 0,
        key: "listkey",
        skip: g,
        onClick: Lt,
        itemRender: c,
        groupHeaderItemRender: l,
        noDataRender: a,
        onScroll: bt,
        wrapperRef: d.scrollerRef,
        scroller: (s = t == null ? void 0 : t.current) == null ? void 0 : s.renderScrollElement(),
        ariaSetSize: o.total
      }
    );
  }, Pt = () => {
    const { groupField: e } = n, r = E(n), o = n.opened !== void 0 ? n.opened : m.opened, l = K && K.uDropDownList, a = {
      title: n.adaptiveTitle || n.label,
      subTitle: n.adaptiveSubtitle,
      expand: o,
      onClose: (p) => Se(p),
      windowWidth: Le,
      mobileFilter: Ae(!0)
    };
    let { group: c } = m;
    return c === void 0 && e !== void 0 && (c = re(r[0], e)), /* @__PURE__ */ i.createElement(bn, { ...a }, /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement("div", { className: L(P.listContainer({ c: l, popup: !1 })) }, Nt())));
  }, Ft = () => {
    m.focused && window.setTimeout(() => {
      m.focused && t.current.wrapper && oe(t.current.wrapper);
    });
  }, Mt = (e) => {
    "onMouseDownOutside" in (n.popupSettings || {}) && n.popupSettings.onMouseDownOutside.call(void 0, e);
  }, Kt = () => {
    const { header: e, footer: r, dir: o, groupField: l, groupStickyHeaderItemRender: a, list: c } = n, p = E(n), f = t.current, d = f.getPopupSettings(), g = n.opened !== void 0 ? n.opened : m.opened, u = d.width !== void 0 ? d.width : f.popupWidth, D = K && K.uDropDownList, v = {
      dir: o !== void 0 ? o : f.dirCalculated,
      width: u,
      popupSettings: {
        ...d,
        popupClass: L(
          d.popupClass,
          P.listContainer({
            c: D,
            popup: !0
          })
        ),
        anchor: d.anchor || V.current,
        show: g,
        onOpen: ye,
        onClose: Ft,
        onMouseDownOutside: Mt
      },
      itemsCount: [p.length]
    };
    let { group: I } = m;
    return I === void 0 && l !== void 0 && (I = re(p[0], l)), /* @__PURE__ */ i.createElement(hn, { ...v }, Ae(!1), e && /* @__PURE__ */ i.createElement("div", { className: L(P.listHeader({ c: D })) }, e), /* @__PURE__ */ i.createElement(
      "div",
      {
        className: L(
          P.list({
            c: D,
            size: H,
            virtual: t.current.vs.enabled
          })
        )
      },
      Et(),
      !c && I && p.length !== 0 && /* @__PURE__ */ i.createElement(it, { group: I, render: a }),
      Be()
    ), r && /* @__PURE__ */ i.createElement("div", { className: L(P.listFooter({ c: D })) }, r), Ne && /* @__PURE__ */ i.createElement(pn, { message: gt }));
  }, Nt = () => {
    const { header: e, footer: r, groupStickyHeaderItemRender: o, groupField: l, list: a } = n, c = E(n), p = K && K.uDropDownList;
    let { group: f } = m;
    return f === void 0 && l !== void 0 && (f = re(c[0], l)), /* @__PURE__ */ i.createElement(i.Fragment, null, e && /* @__PURE__ */ i.createElement("div", { className: L(P.listHeader({ c: p })) }, e), /* @__PURE__ */ i.createElement(
      "div",
      {
        className: L("k-list", {
          [`k-list-${_ ? "lg" : mn[H] || H}`]: _ || H
        })
      },
      !a && f && c.length !== 0 && /* @__PURE__ */ i.createElement(it, { group: f, render: o }),
      Be()
    ), r && /* @__PURE__ */ i.createElement("div", { className: "k-list-footer" }, r));
  }, Tt = (e) => {
    const { dataItemKey: r } = n, o = E(n), l = k();
    let a = o.map((b, Y) => ({ item: b, itemIndex: Y }));
    const c = $.current.word, p = $.current.last, f = Dn(c, p);
    let d = a.length, g = Math.max(
      0,
      o.findIndex((b) => F(b, l, r))
    ), u;
    n.defaultItem && (u = { item: n.defaultItem, itemIndex: -1 }, d += 1, g += 1), g += f ? 1 : 0, a = Cn(a, g, u);
    let D, v, I, s = 0;
    const { textField: N } = n;
    for (; s < d; ) {
      if (D = re(a[s].item, N), v = f && at(D, p, J), I = at(D, c, J), v || I) {
        s = a[s].itemIndex;
        break;
      }
      s++;
    }
    if (s !== d) {
      const b = t.current.initState();
      b.syntheticEvent = e, Q(s, b), M(b), W.current = void 0;
    }
  }, Ot = (e) => {
    clearTimeout(Ve.current), n.filterable || (Ve.current = window.setTimeout(() => $.current.word = "", vt), Tt(e));
  }, zt = (e) => {
    ie.current || t.current.handleFocus(e);
  }, Ht = (e) => {
    if (ie.current || !m.focused)
      return;
    const r = n.opened !== void 0 ? n.opened : m.opened, o = t.current.initState();
    o.syntheticEvent = e, o.data.focused = !1, o.events.push({ type: "onBlur" }), r && xe(), r && !_ && t.current.togglePopup(o), M(o);
  }, At = (e) => {
    if (n.filterable || e.which === 0 || e.keyCode === h.enter)
      return;
    let r = String.fromCharCode(e.charCode || e.keyCode);
    J && (r = r.toLowerCase()), r === " " && e.preventDefault(), $.current = {
      word: $.current.word + r,
      last: $.current.last + r
    }, Ot(e);
  }, Bt = () => {
    const e = t.current.initState();
    e.data.opened = m.opened, t.current.togglePopup(e), M(e);
  }, De = i.useRef(null), V = i.useRef(null), Ce = i.useRef(null), X = i.useRef(null);
  i.useImperativeHandle(
    De,
    () => ({
      get element() {
        return V.current;
      },
      get index() {
        return yt();
      },
      get name() {
        return n.name;
      },
      get validity() {
        return Ie();
      },
      get value() {
        return k();
      },
      get focused() {
        return m.focused;
      },
      get opened() {
        return m.opened;
      },
      focus: It,
      props: n,
      togglePopup: Bt
    })
  ), i.useImperativeHandle(
    ft,
    () => De.current
  ), sn("dropdownlist", De, n, n.webMcp);
  const Ve = i.useRef(null), $ = i.useRef({ word: "", last: "" }), ie = i.useRef(!1), W = i.useRef(null), q = i.useRef(!1), ke = i.useRef(!1), U = i.useRef({}), Ee = i.useRef({}), t = i.useRef(
    new pt({
      props: n,
      setState: () => {
      },
      state: {},
      forceUpdate: () => {
      },
      element: null,
      value: null,
      handleItemSelect: () => {
      }
    })
  ), We = i.useRef(0), Z = i.useRef(null), [m, Vt] = i.useState({}), [Le, Wt] = i.useState(), [, qe] = i.useReducer((e) => e, !0), be = En(), Ue = n.name || n.id, qt = i.useCallback(
    (e) => {
      if (e == null || !t.current)
        return;
      const r = E(n), { textField: o } = n, l = String(e), a = xn(r, l, o, !1, J), c = a !== -1 ? r[a] : void 0;
      if (c !== void 0) {
        const p = t.current.initState();
        p.syntheticEvent = {
          target: V.current
        }, A(c, p), M(p);
      }
    },
    [n, J]
  );
  an(V, {
    fieldName: Ue,
    onValueChange: qt,
    enabled: !!Ue
  });
  const R = (e) => {
    Vt({ ...m, ...e });
  };
  i.useEffect(() => {
    t.current.updateComponentArgs({
      props: n,
      setState: R,
      state: m,
      forceUpdate: qe,
      element: V.current,
      handleItemSelect: Q,
      value: k()
    });
  }, [R, m, qe, Q, k]), i.useEffect(() => {
    var g, u, D, v, I, s, N, b, Y, ne, ce, ue, y;
    const { dataItemKey: e, virtual: r, groupField: o = "", textField: l } = n, a = E(n), c = U.current.virtual ? U.current.virtual.total : 0, p = n.opened !== void 0 ? n.opened : m.opened, f = U.current.opened !== void 0 ? U.current.opened : Ee.current.opened, d = !f && p;
    if ((g = t == null ? void 0 : t.current) == null || g.didUpdate(), (u = t == null ? void 0 : t.current) != null && u.getPopupSettings().animate || d && ye(), r && r.total !== c)
      (D = t == null ? void 0 : t.current) == null || D.vs.calcScrollElementHeight(), (v = t == null ? void 0 : t.current) == null || v.vs.reset();
    else {
      const O = k(), pe = U.current.value !== void 0 ? U.current.value : Ee.current.value;
      let G = a.findIndex((j) => F(j, O, e));
      o !== "" && O && l && (G = (s = (I = t == null ? void 0 : t.current) == null ? void 0 : I.getGroupedDataModernMode(a, o)) == null ? void 0 : s.map((j) => j[l]).indexOf(O[l]));
      const me = !F(pe, O, e);
      d && r ? (N = t == null ? void 0 : t.current) == null || N.scrollToVirtualItem(r, G) : d && !r ? (ye(), a && a.length !== 0 && ((b = t == null ? void 0 : t.current) == null || b.resetGroupStickyHeader(a[0][o], {
        setState: R,
        group: m.group,
        state: m
      })), (Y = t == null ? void 0 : t.current) == null || Y.scrollToItem(G)) : p && f && O && me && !q.current ? (ce = t == null ? void 0 : t.current) == null || ce.scrollToItem(G, (ne = t == null ? void 0 : t.current) == null ? void 0 : ne.vs.enabled) : p && f && q.current && (q.current && r && r.skip === 0 ? (ue = t == null ? void 0 : t.current) == null || ue.vs.reset() : q.current && r && r.skip === r.total - r.pageSize && ((y = t == null ? void 0 : t.current) == null || y.vs.scrollToEnd()));
    }
    q.current = !1, Ee.current = m, U.current = n, Oe();
  }), i.useEffect(() => {
    var e, r;
    return Z.current = ot && window.ResizeObserver && new window.ResizeObserver(xt.bind(void 0)), (e = t == null ? void 0 : t.current) == null || e.didMount(), Oe(), (r = ve()) != null && r.body && Z.current && Z.current.observe(ve().body), () => {
      var o;
      (o = ve()) != null && o.body && Z.current && Z.current.disconnect();
    };
  }, []);
  const _e = ge + "-accessibility-id", Ge = ge + "-listbox-id", $e = ge + "-guid", Ut = be.toLanguageString(
    dt,
    Me[dt]
  ), {
    style: se,
    className: _t,
    label: Pe,
    dir: Gt,
    virtual: T,
    adaptive: Mn,
    dataItemKey: $t,
    disabled: ae,
    loading: Ye,
    iconClassName: je,
    svgIcon: Yt,
    valueRender: Je
  } = n, ee = n.opened !== void 0 ? n.opened : m.opened, le = k(), Fe = re(le, n.textField), Qe = !wt() || Ie().valid, de = t.current, jt = de.vs, te = K && K.uDropDownList;
  jt.enabled = T !== void 0;
  const Xe = ln(), _ = !!(Le && Xe && Le <= Xe.medium && n.adaptive);
  T !== void 0 && (de.vs.skip = T.skip, de.vs.total = T.total, de.vs.pageSize = T.pageSize);
  const Jt = E(n), { focused: Qt } = m, Ze = Jt.findIndex((e) => F(e, le, $t)), Xt = (tt = T == null ? void 0 : T.skip) != null ? tt : 0, Zt = ee && Ze >= 0 ? `k-${$e}-item-${Ze + Xt + 1}` : void 0, Re = /* @__PURE__ */ i.createElement("span", { id: _e, className: L(P.inputInner({ c: te })) }, Fe && /* @__PURE__ */ i.createElement("span", { className: L(P.inputText({ c: te })) }, Fe)), Rt = Je !== void 0 ? Je.call(void 0, Re, le) : Re, et = /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    "span",
    {
      ref: St,
      className: L(
        P.wrapper({
          c: te,
          size: H,
          rounded: Te,
          fillMode: fe,
          focused: Qt,
          disabled: ae,
          invalid: !Qe,
          loading: Ye,
          required: he()
        }),
        _t
      ),
      style: Pe ? { ...se, width: void 0 } : se,
      dir: Gt,
      onMouseDown: ee ? (e) => {
        e.target.nodeName !== "INPUT" && (oe(t.current.wrapper), e.preventDefault());
      } : void 0,
      onFocus: _ ? (e) => Se(e) : zt,
      onBlur: Ht,
      tabIndex: dn(ht, ae),
      accessKey: n.accessKey,
      onKeyDown: He,
      onKeyPress: At,
      onClick: ae ? void 0 : Se,
      role: "combobox",
      "aria-required": he() || void 0,
      "aria-disabled": ae || void 0,
      "aria-haspopup": "listbox",
      "aria-expanded": ee || !1,
      "aria-activedescendant": Zt,
      "aria-label": n.ariaLabel || n.label,
      "aria-labelledby": n.ariaLabelledBy,
      "aria-describedby": n.ariaDescribedBy || (ee ? _e : void 0),
      "aria-controls": ee ? Ge : void 0,
      id: n.id,
      title: n.title
    },
    Rt,
    Ye && /* @__PURE__ */ i.createElement(cn, { className: L(P.loadingIcon({ c: te })), name: "loading" }),
    /* @__PURE__ */ i.createElement(
      kn,
      {
        tabIndex: -1,
        type: "button",
        "aria-label": Ut,
        size: H,
        fillMode: fe,
        className: L(P.inputButton({ c: te })),
        iconClass: je,
        svgIcon: je ? void 0 : Yt || vn,
        onMouseDown: (e) => m.focused && e.preventDefault()
      }
    ),
    Dt(le),
    !_ && Kt()
  ), _ && Pt());
  return Pe ? /* @__PURE__ */ i.createElement(
    gn,
    {
      label: Pe,
      editorValue: Fe,
      editorValid: Qe,
      editorDisabled: n.disabled,
      style: { width: se ? se.width : void 0 },
      children: et
    }
  ) : et;
});
Ke.propTypes = {
  delay: C.number,
  ignoreCase: C.bool,
  iconClassName: C.string,
  svgIcon: fn,
  defaultItem: C.any,
  valueRender: C.func,
  valueMap: C.func,
  validationMessage: C.string,
  required: C.bool,
  id: C.string,
  ariaLabelledBy: C.string,
  ariaDescribedBy: C.string,
  ariaLabel: C.string,
  leftRightKeysNavigation: C.bool,
  title: C.string,
  groupField: C.string,
  list: C.any,
  skipDisabledItems: C.bool
};
const z = {
  delay: 500,
  tabIndex: 0,
  ignoreCase: !0,
  ...pt.defaultProps,
  required: !1,
  size: void 0,
  rounded: void 0,
  fillMode: void 0
};
Ke.displayName = "knoReactDropDownList";
const Fn = un();
Ke.displayName = "knoReactDropDownList";
export {
  Ke as DropDownList,
  Fn as DropDownListPropsContext,
  z as dropDownListDefaultProps
};
