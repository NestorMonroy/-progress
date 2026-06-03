/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as o from "react";
import t from "prop-types";
import { Popup as pt } from "@progress/kno-react-popup";
import { cloneDate as ue, getDate as gt } from "@progress/kno-date-math";
import { useId as ht, useAdaptiveModeContext as vt, usePropsContext as bt, useWebMcpRegister as wt, useKendoPaste as yt, canUseDOM as se, AsyncFocusBlur as Ct, classNames as ce, kendoThemeMaps as de, createPropsContext as Dt, Keys as O } from "@progress/kno-react-common";
import { calendarIcon as Pt } from "@progress/kno-svg-icons";
import { DateInputInner as kt } from "../dateinput/DateInput.mjs";
import { Calendar as Ot } from "../calendar/components/Calendar.mjs";
import { MIN_DATE as Mt, MAX_DATE as Rt, isInDateRange as fe, setTime as It, nullable as a } from "../utils.mjs";
import { toggleCalendar as me, messages as pe, selectDate as ge } from "../messages/index.mjs";
import { useLocalization as St } from "@progress/kno-react-intl";
import { ToggleButton as _t } from "./ToggleButton.mjs";
import { PickerFloatingLabel as Et } from "../hooks/usePickerFloatingLabel.mjs";
import { ActionSheetContent as Bt } from "@progress/kno-react-layout";
import { AdaptiveMode as Tt } from "../common/AdaptiveMode.mjs";
const he = o.forwardRef((r, ve) => {
  const S = ht(r.id), W = St(), w = vt(), {
    defaultShow: be = i.defaultShow,
    defaultValue: we = i.defaultValue,
    dateInput: ye = i.dateInput,
    calendar: Ce = i.calendar,
    toggleButton: De = i.toggleButton,
    popup: Pe = i.popup,
    disabled: m = i.disabled,
    format: ke = i.format,
    max: y = i.max,
    min: C = i.min,
    popupSettings: D = i.popupSettings,
    tabIndex: Oe = i.tabIndex,
    weekNumber: Me = i.weekNumber,
    validityStyles: q = i.validityStyles,
    size: _ = i.size,
    rounded: E = i.rounded,
    fillMode: B = i.fillMode,
    autoFocus: Re = i.autoFocus,
    show: H,
    autoSwitchParts: Ie,
    autoSwitchKeys: Se,
    twoDigitYearMax: _e,
    ariaLabel: Ee,
    adaptive: Nt,
    adaptiveTitle: Be = r.label || void 0,
    adaptiveSubtitle: Te,
    formatPlaceholder: xe,
    inputAttributes: Ne,
    validationMessage: U,
    visited: At,
    value: T,
    touched: Ft,
    modified: Lt,
    _adaptiveMode: Vt = w,
    valid: Y,
    focusedDate: Ae,
    id: Fe,
    ariaLabelledBy: Le,
    ariaDescribedBy: Ve,
    placeholder: ze,
    onChange: $,
    onOpen: j,
    onClose: X,
    ...Z
  } = bt(xt, r), x = () => {
    if (se)
      return d.current && d.current.ownerDocument || window.document;
  }, s = () => !!(p.windowWidth && w && p.windowWidth <= (w == null ? void 0 : w.medium) && r.adaptive), g = () => {
    const e = M.current !== void 0 ? M.current : T !== void 0 ? T : p.value;
    return e !== null ? ue(e) : null;
  }, l = () => R.current !== void 0 ? R.current : H !== void 0 ? H : p.show, Ke = () => ye || i.dateInput, We = () => De || i.toggleButton, qe = () => Ce || i.calendar, He = () => Pe || i.popup, G = () => r.required !== void 0 ? r.required : !1, N = () => {
    const e = g() || T || null, n = C, u = y, I = fe(e, n, u), V = U !== void 0, z = (!G() || e != null) && I, K = Y !== void 0 ? Y : z;
    return {
      customError: V,
      rangeOverflow: e && u.getTime() < e.getTime() || !1,
      rangeUnderflow: e && e.getTime() < n.getTime() || !1,
      valid: K,
      valueMissing: e === null
    };
  }, Ue = (e) => {
    for (const n of e)
      k({ windowWidth: n.target.clientWidth });
  }, Ye = () => {
    c.current && c.current.focus();
  }, J = (e) => {
    f.current = e;
  }, h = (e) => {
    l() !== e && (k({ show: e }), e && j && j({ target: v.current }), !e && X && X({ target: v.current }));
  }, $e = (e) => {
    const n = g();
    return n && e ? It(e, n) : e;
  }, je = (e) => {
    D != null && D.onMouseDownOutside && D.onMouseDownOutside(e);
  }, A = (e, n) => {
    k({ value: ue(e || void 0) }), M.current = e, R.current = !1, s() || (b.current = !0), $ && $({
      syntheticEvent: n.syntheticEvent,
      nativeEvent: n.nativeEvent,
      value: g(),
      show: l(),
      target: v.current
    }), M.current = void 0, R.current = void 0, h(!1);
  }, Xe = (e) => {
    const n = $e(e.value);
    A(n, e);
  }, Q = () => {
    const { popupClass: e, ...n } = D, u = l(), I = g(), V = I && gt(I), z = ce(e), K = {
      popupClass: "k-datepicker-popup",
      show: u,
      anchor: d.current,
      className: z,
      id: ne,
      anchorAlign: {
        horizontal: "left",
        vertical: "bottom"
      },
      popupAlign: {
        horizontal: "left",
        vertical: "top"
      },
      ...n,
      onMouseDownOutside: je
    }, ie = {
      disabled: m,
      value: V,
      min: C,
      max: y,
      weekNumber: Me,
      focusedDate: Ae,
      className: s() ? "k-calendar-lg" : "",
      navigation: !s(),
      onChange: Xe
    }, le = qe(), mt = He();
    return s() ? /* @__PURE__ */ o.createElement(le, { _ref: J, ...ie }) : /* @__PURE__ */ o.createElement(mt, { ...K }, /* @__PURE__ */ o.createElement(le, { _ref: J, ...ie }));
  }, ee = () => {
    k({ focused: !1 }), h(!1);
  }, Ze = () => {
    const { windowWidth: e = 0 } = p, n = {
      expand: l(),
      onClose: ee,
      title: Be,
      subTitle: Te,
      windowWidth: e
    };
    return /* @__PURE__ */ o.createElement(Tt, { ...n }, /* @__PURE__ */ o.createElement(Bt, null, Q()));
  }, Ge = (e) => {
    A(e.value, e);
  }, Je = () => {
    k({ focused: !0 });
  }, Qe = () => {
    h(!l());
  }, F = () => {
    m || (b.current = !0, h(!l()));
  }, et = (e) => {
    e.preventDefault();
  }, tt = (e) => {
    const { altKey: n, keyCode: u } = e;
    if (u === O.esc && l()) {
      b.current = !0, h(!1);
      return;
    }
    n && (u === O.up || u === O.down) && (e.preventDefault(), e.stopPropagation(), b.current = u === O.up, h(u === O.down));
  }, v = o.useRef(null), d = o.useRef(null), c = o.useRef(null), f = o.useRef(null);
  o.useImperativeHandle(
    v,
    () => ({
      props: r,
      get element() {
        return d.current;
      },
      get calendar() {
        return f.current;
      },
      get dateInput() {
        return c.current;
      },
      get name() {
        return r.name;
      },
      get show() {
        return l();
      },
      get validity() {
        return N();
      },
      get value() {
        return g();
      },
      get mobileMode() {
        return s();
      },
      togglePopup: Qe,
      // Hidden Methods but still accessible
      focus: Ye
    })
  ), o.useImperativeHandle(ve, () => v.current), wt("datepicker", v, r, r.webMcp);
  const M = o.useRef(void 0), R = o.useRef(void 0), nt = o.useRef(null), b = o.useRef(!1), L = o.useRef(!1), P = o.useRef(null), [p, ot] = o.useState({
    value: we,
    show: be,
    focused: !1
  }), [, rt] = o.useReducer((e) => e, !0), te = r.name || S || void 0, at = o.useCallback(
    (e) => {
      if (m)
        return;
      let n = null;
      if (e != null) {
        if (e instanceof Date)
          n = e;
        else if (typeof e == "string" || typeof e == "number") {
          const u = new Date(e);
          isNaN(u.getTime()) || (n = u);
        }
      }
      if (n && fe(n, C, y)) {
        const u = {
          target: d.current,
          currentTarget: d.current
        };
        A(n, { syntheticEvent: u });
      }
    },
    [m, C, y]
  );
  yt(d, {
    fieldName: te,
    onValueChange: at,
    enabled: !!te
  });
  const k = (e) => {
    ot((n) => ({ ...n, ...e }));
  };
  o.useEffect(() => {
    f.current && f.current.element && l() && !L.current && f.current.element.focus({ preventScroll: !0 }), s() && l() && !L.current && setTimeout(() => {
      f.current && f.current.element && f.current.element.focus({ preventScroll: !0 });
    }, 300), c.current && c.current.element && !l() && b.current && c.current.element.focus({ preventScroll: !0 }), L.current = l(), b.current = !1;
  }), o.useEffect(() => {
    var e;
    return P.current = se && window.ResizeObserver && new window.ResizeObserver((n) => Ue(n)), l() && rt(), (e = x()) != null && e.body && P.current && P.current.observe(x().body), () => {
      var n;
      clearTimeout(nt.current), (n = x()) != null && n.body && P.current && P.current.disconnect();
    };
  }, []);
  const ne = S + "-popup-id", it = Q(), lt = Ke(), ut = g(), st = We(), ct = Ze(), oe = !q || N().valid, re = W.toLanguageString(me, pe[me]), dt = Ee || W.toLanguageString(ge, pe[ge]), ft = {
    disabled: m,
    format: ke,
    formatPlaceholder: xe,
    id: Fe,
    ariaLabelledBy: Le,
    ariaDescribedBy: Ve,
    ariaLabel: dt,
    max: y,
    min: C,
    name: r.name,
    onChange: Ge,
    required: r.required,
    _ref: c,
    tabIndex: l() ? -1 : Oe,
    title: r.title,
    valid: N().valid,
    validationMessage: U,
    validityStyles: q,
    value: ut,
    label: void 0,
    placeholder: p.focused ? null : ze,
    ariaExpanded: l(),
    autoFill: r.autoFill,
    twoDigitYearMax: _e,
    enableMouseWheel: r.enableMouseWheel,
    autoCorrectParts: r.autoCorrectParts,
    autoSwitchParts: Ie,
    autoSwitchKeys: Se,
    allowCaretMode: r.allowCaretMode,
    inputAttributes: Ne
  }, ae = /* @__PURE__ */ o.createElement(
    Ct,
    {
      onFocus: Je,
      onBlur: s() ? void 0 : ee,
      onSyncBlur: r.onBlur,
      onSyncFocus: r.onFocus
    },
    (e) => /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement(
      "span",
      {
        ...r.label ? {} : Z,
        ref: d,
        className: ce(
          "k-input",
          "k-datepicker",
          {
            [`k-input-${de.sizeMap[_] || _}`]: _,
            [`k-rounded-${de.roundedMap[E] || E}`]: E,
            [`k-input-${B}`]: B,
            "k-invalid": !oe,
            "k-required": G(),
            "k-disabled": m,
            "k-focus": p.focused
          },
          r.className
        ),
        onKeyDown: tt,
        style: { width: r.width },
        onFocus: s() ? F : e.onFocus,
        onBlur: e.onBlur,
        onClick: s() ? F : void 0
      },
      /* @__PURE__ */ o.createElement(
        lt,
        {
          _ref: c,
          ariaRole: "combobox",
          ariaHasPopup: "grid",
          ariaExpanded: l(),
          ariaControls: l() ? ne : void 0,
          autoFocus: Re,
          ...ft
        }
      ),
      /* @__PURE__ */ o.createElement(
        st,
        {
          type: "button",
          icon: "calendar",
          svgIcon: Pt,
          title: re,
          className: "k-input-button",
          onClick: s() ? void 0 : F,
          "aria-label": re,
          fillMode: B,
          onMouseDown: et
        }
      ),
      !s() && it
    ), s() && ct)
  );
  return r.label ? /* @__PURE__ */ o.createElement(
    Et,
    {
      dateInput: c,
      label: r.label,
      editorId: S,
      editorValid: oe,
      editorDisabled: m,
      children: ae,
      style: { width: r.width },
      ...Z
    }
  ) : ae;
});
he.propTypes = {
  className: t.string,
  defaultShow: t.bool,
  defaultValue: t.instanceOf(Date),
  disabled: t.bool,
  focusedDate: t.instanceOf(Date),
  format: t.oneOfType([
    t.string,
    t.shape({
      skeleton: a(t.string),
      pattern: a(t.string),
      date: a(t.oneOf(["short", "medium", "long", "full"])),
      time: a(t.oneOf(["short", "medium", "long", "full"])),
      datetime: a(t.oneOf(["short", "medium", "long", "full"])),
      era: a(t.oneOf(["narrow", "short", "long"])),
      year: a(t.oneOf(["numeric", "2-digit"])),
      month: a(t.oneOf(["numeric", "2-digit", "narrow", "short", "long"])),
      day: a(t.oneOf(["numeric", "2-digit"])),
      weekday: a(t.oneOf(["narrow", "short", "long"])),
      hour: a(t.oneOf(["numeric", "2-digit"])),
      hour12: a(t.bool),
      minute: a(t.oneOf(["numeric", "2-digit"])),
      second: a(t.oneOf(["numeric", "2-digit"])),
      timeZoneName: a(t.oneOf(["short", "long"]))
    })
  ]),
  formatPlaceholder: t.oneOfType([
    a(
      t.oneOf(["wide", "narrow", "short", "formatPattern"])
    ),
    t.shape({
      year: a(t.string),
      month: a(t.string),
      day: a(t.string),
      hour: a(t.string),
      minute: a(t.string),
      second: a(t.string)
    })
  ]),
  id: t.string,
  ariaLabelledBy: t.string,
  ariaDescribedBy: t.string,
  ariaLabel: t.string,
  min: t.instanceOf(Date),
  max: t.instanceOf(Date),
  name: t.string,
  popupSettings: t.shape({
    animate: a(t.bool),
    appendTo: a(t.any),
    popupClass: a(t.string)
  }),
  show: t.bool,
  tabIndex: t.number,
  title: t.string,
  value: t.instanceOf(Date),
  weekNumber: t.bool,
  width: t.oneOfType([t.number, t.string]),
  validationMessage: t.string,
  required: t.bool,
  valid: t.bool,
  size: t.oneOf(["small", "medium", "large"]),
  rounded: t.oneOf(["small", "medium", "large", "full", "none"]),
  fillMode: t.oneOf(["solid", "flat", "outline"]),
  adaptive: t.bool,
  adaptiveTitle: t.string,
  adaptiveSubtitle: t.string,
  autoFocus: t.bool,
  inputAttributes: t.object
};
const i = {
  defaultShow: !1,
  defaultValue: null,
  dateInput: kt,
  calendar: Ot,
  toggleButton: _t,
  popup: pt,
  disabled: !1,
  format: "d",
  max: Rt,
  min: Mt,
  popupSettings: {},
  tabIndex: 0,
  weekNumber: !1,
  validityStyles: !0,
  size: void 0,
  rounded: void 0,
  fillMode: void 0,
  autoFocus: !1
}, xt = Dt();
he.displayName = "KendoReactDatePicker";
export {
  he as DatePicker,
  xt as DatePickerPropsContext,
  i as datePickerDefaultProps
};
