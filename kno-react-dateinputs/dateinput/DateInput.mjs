/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as a from "react";
import e from "prop-types";
import { cloneDate as S, isEqual as ze } from "@progress/kno-date-math";
import { Button as ne } from "@progress/kno-react-buttons";
import { chevronUpIcon as je, chevronDownIcon as Ke } from "@progress/kno-svg-icons";
import { useInternationalization as Ue, useLocalization as We } from "@progress/kno-react-intl";
import { createPropsContext as Je, useId as Ye, useUnstyled as Xe, usePropsContext as ae, classNames as I, uDateInput as E, getActiveElement as re } from "@progress/kno-react-common";
import { FloatingLabel as Ze } from "@progress/kno-react-labels";
import { DateInput as Ge } from "@progress/kno-dateinputs-common";
import { DEFAULT_FORMAT_PLACEHOLDER as $e, DEFAULT_FORMAT as Qe, isInRange as et } from "./utils.mjs";
import { MAX_TIME as tt, MIN_TIME as nt, MIN_DATE as at, MAX_DATE as rt, nullable as u } from "../utils.mjs";
import { increaseValue as p, messages as P, decreaseValue as R } from "../messages/index.mjs";
import { isInTimeRange as it } from "../timepicker/utils.mjs";
import lt from "../common/ClearButton.mjs";
import { DateInputIntl as ot } from "./dateInputIntl.mjs";
const ut = "Please enter a valid value!";
function le(t, m) {
  var ee, te;
  const ue = Ye(t.id), se = Ue(), O = We(), ce = Xe(), H = ae(ie, t).unstyled || ce, {
    format: L = l.format,
    defaultValue: de = l.defaultValue,
    size: fe = l.size,
    rounded: me = l.rounded,
    fillMode: ge = l.fillMode,
    formatPlaceholder: ve = l.formatPlaceholder,
    spinners: he = l.spinners,
    disabled: w = l.disabled,
    min: ye = l.min,
    max: be = l.max,
    minTime: Ie = l.minTime,
    maxTime: Ee = l.maxTime,
    validityStyles: Oe = l.validityStyles,
    validationMessage: q = l.validationMessage,
    placeholder: g = l.placeholder,
    enableMouseWheel: we = l.enableMouseWheel,
    autoCorrectParts: xe = l.autoCorrectParts,
    autoSwitchParts: Ce = l.autoSwitchParts,
    allowCaretMode: De = l.allowCaretMode,
    twoDigitYearMax: Te = l.twoDigitYearMax,
    ariaHasPopup: Me = l.ariaHasPopup,
    autoFocus: v = l.autoFocus
  } = ae(ie, t), x = (n) => {
    Fe((r) => ({ ...r, ...n }));
  }, d = () => A.value ? A.value : M.current !== void 0 ? M.current : i.current && i.current.value, z = () => {
    const n = i.current && i.current.currentText || "", r = d();
    return g != null && !A.focused && !r ? g : n;
  }, j = () => t.required !== void 0 ? t.required : !1, V = () => {
    const n = d() || t.value, r = ye, b = be, _ = et(n, r, b) && it(n, Ie, Ee), F = q !== void 0, B = (!j() || n != null) && _, qe = t.valid !== void 0 ? t.valid : B;
    return {
      customError: F,
      rangeOverflow: n && b.getTime() < n.getTime() || !1,
      rangeUnderflow: n && n.getTime() < r.getTime() || !1,
      valid: qe,
      valueMissing: n === null
    };
  }, Se = () => {
    o.current && o.current.focus();
  }, K = () => new ot(se), C = () => {
    const n = d();
    return {
      format: L,
      steps: t.steps,
      formatPlaceholder: ve,
      placeholder: g,
      selectPreviousSegmentOnBackspace: !0,
      value: t.value !== void 0 ? t.value : n,
      intlService: K(),
      autoFill: t.autoFill !== void 0 ? t.autoFill : !1,
      enableMouseWheel: we,
      autoCorrectParts: xe,
      autoSwitchParts: Ce,
      autoSwitchKeys: t.autoSwitchKeys || [],
      twoDigitYearMax: Te,
      allowCaretMode: De
    };
  }, pe = (n) => {
    s.current && s.current.classList.add("k-focus"), x({ focused: !0 }), v && X(!0);
  }, Pe = (n) => {
    s.current && s.current.classList.remove("k-focus"), x({ focused: !1 });
  }, Re = (n, r) => typeof n != typeof r ? !0 : typeof n == "string" && typeof r == "string" ? n !== r : typeof n == "object" && typeof r == "object" ? JSON.stringify(n) !== JSON.stringify(r) : !1, Le = (n) => typeof n == "string" ? n : {
    inputFormat: n,
    displayFormat: n
  }, U = (n) => {
    M.current = d(), t.value === void 0 && x({ value: n.value !== void 0 ? n.value : null }), Be(), f.current = n, M.current = void 0;
  }, W = (n) => {
    t.onChange && t.onChange(n);
  }, J = (n) => {
    re(document) === o.current && n.preventDefault();
  }, Ve = () => new Ge(o.current, {
    ...C(),
    format: Le(C().format),
    events: {
      focus: pe,
      blur: Pe,
      valueChange: U,
      click: W
    }
  }), Y = () => {
    o.current && o.current.setCustomValidity && o.current.setCustomValidity(
      V().valid ? "" : q || l.validationMessage
    );
  }, X = a.useCallback(
    (n) => {
      var r;
      if (o.current && v && n) {
        const b = (i == null ? void 0 : i.current).currentText, _ = (i == null ? void 0 : i.current).currentText.search(/[^a-zA-Z]/), F = b[_], B = b.split(F)[0].length;
        s.current && s.current.classList.add("k-focus"), (r = i == null ? void 0 : i.current) == null || r.selectNearestSegment(B);
      }
    },
    [v]
  ), Ne = (n) => {
    !o.current || !i.current || U(n);
  }, Ae = (n) => {
    n.preventDefault();
    const r = re(document);
    o.current && r !== o.current && o.current.focus({ preventScroll: !0 });
  }, c = (n) => {
    const r = d();
    f.current && t.onChange && !ze(f.current.oldValue, r) && t.onChange.call(void 0, {
      syntheticEvent: n,
      nativeEvent: f.current.event,
      value: f.current.value,
      target: D.current
    }), f.current = null;
  }, ke = (n) => {
    var r;
    (r = i.current) == null || r.modifyDateSegmentValue(1), c(n);
  }, _e = (n) => {
    var r;
    (r = i.current) == null || r.modifyDateSegmentValue(-1), c(n);
  }, D = a.useRef(null), o = a.useRef(null), s = a.useRef(null);
  a.useImperativeHandle(
    D,
    () => ({
      props: t,
      get options() {
        return C();
      },
      get text() {
        return z();
      },
      get element() {
        return o.current;
      },
      get name() {
        return t.name;
      },
      get value() {
        return d();
      },
      get validity() {
        return V();
      },
      // hidden methods
      focus: Se,
      updateOnPaste: Ne
    })
  ), a.useImperativeHandle(m, () => D.current);
  const i = a.useRef(null), T = a.useRef(null), N = a.useRef(!1), M = a.useRef(null), f = a.useRef(null), h = a.useRef(t), [A, Fe] = a.useState({
    value: t.value === void 0 ? de : null,
    focused: !1
  }), [, Be] = a.useReducer((n) => n + 1, 0);
  a.useLayoutEffect(() => {
    N.current || (i.current = Ve(), T.current = i.current.dateObject, N.current = !0);
  }, []), a.useEffect(() => {
    Y();
    const n = s.current || o.current;
    return N.current || n && n.addEventListener("wheel", J, { passive: !1 }), v && (x({ focused: !0 }), X(!0)), () => {
      n && n.removeEventListener("wheel", J);
    };
  }, []), a.useEffect(() => {
    Y(), i.current && (T.current = i.current.dateObject, (Re(h.current.format, L) || h.current.readonly !== t.readonly || JSON.stringify(h.current.steps) !== JSON.stringify(t.steps) || K().locale !== i.current.options.intlService.locale) && i.current.setOptions(C(), !0), h.current.value !== t.value && (T.current.getValue() !== null || t.value !== null) && T.current.setValue(t.value), t.ariaExpanded !== void 0 && t.ariaExpanded && (i.current.options.placeholder = null), t.ariaExpanded !== void 0 && !t.ariaExpanded && (i.current.options.placeholder = g), i.current.refreshElementValue(), h.current = {
      format: L,
      readonly: t.readonly,
      ariaExpanded: t.ariaExpanded,
      steps: t.steps,
      value: t.value
    });
  });
  const Z = t.id || ue + "-accessibility-id", y = H && H.uDateInput, G = z(), k = !Oe || V().valid;
  a.useImperativeHandle(t._ref, () => D.current);
  const $ = /* @__PURE__ */ a.createElement(
    "input",
    {
      ref: (n) => {
        o.current = n;
      },
      role: t.ariaRole || void 0,
      readOnly: t.readonly,
      tabIndex: t.tabIndex || 0,
      disabled: w,
      title: (ee = t.title) != null ? ee : G,
      type: "text",
      spellCheck: !1,
      autoComplete: "off",
      autoCorrect: "off",
      autoFocus: v,
      className: I(E.inputInner({ c: y })),
      id: Z,
      value: G,
      "aria-label": t.ariaLabel,
      "aria-labelledby": t.ariaLabelledBy,
      "aria-describedby": t.ariaDescribedBy,
      "aria-haspopup": Me,
      "aria-disabled": w || void 0,
      "aria-expanded": t.ariaExpanded,
      "aria-controls": t.ariaControls,
      "aria-required": t.required,
      "aria-invalid": !k || void 0,
      onKeyDown: c,
      onChange: c,
      onWheel: c,
      onInput: c,
      onClick: c,
      name: t.name,
      ...t.inputAttributes
    }
  ), Q = /* @__PURE__ */ a.createElement(
    "span",
    {
      ref: (n) => {
        s.current = n;
      },
      style: t.label ? void 0 : { width: t.width },
      dir: t.dir,
      className: I(
        E.wrapper({
          c: y,
          size: fe,
          fillMode: ge,
          rounded: me,
          disabled: w,
          required: j(),
          invalid: !k
        }),
        t.className
      )
    },
    $,
    t.children,
    t.clearButton && t.value && /* @__PURE__ */ a.createElement(lt, { onClick: W, key: "clearbutton" }),
    he && /* @__PURE__ */ a.createElement("span", { className: I(E.inputSpinner({ c: y })), onMouseDown: Ae }, /* @__PURE__ */ a.createElement(
      ne,
      {
        tabIndex: -1,
        type: "button",
        className: I(E.spinnerIncrease({ c: y })),
        icon: "chevron-up",
        svgIcon: je,
        "aria-label": O.toLanguageString(p, P[p]),
        title: O.toLanguageString(p, P[p]),
        onClick: ke
      }
    ), /* @__PURE__ */ a.createElement(
      ne,
      {
        tabIndex: -1,
        type: "button",
        className: I(E.spinnerDecrease({ c: y })),
        icon: "chevron-down",
        svgIcon: Ke,
        "aria-label": O.toLanguageString(R, P[R]),
        title: O.toLanguageString(R, P[R]),
        onClick: _e
      }
    ))
  ), He = t.label ? /* @__PURE__ */ a.createElement(
    Ze,
    {
      label: t.label,
      editorId: Z,
      editorValue: (te = o.current) == null ? void 0 : te.value,
      editorValid: k,
      editorDisabled: w,
      children: Q,
      style: { width: t.width }
    }
  ) : Q;
  return { inputElement: $, wrappedElement: He };
}
const oe = a.forwardRef((t, m) => le(t, m).wrappedElement), st = a.forwardRef((t, m) => le(t, m).inputElement);
st.displayName = "KendoReactDateInputInner";
oe.propTypes = {
  value: e.instanceOf(Date),
  format: e.oneOfType([
    u(e.string),
    e.shape({
      skeleton: e.string,
      pattern: e.string,
      date: e.oneOf(["short", "medium", "long", "full"]),
      time: e.oneOf(["short", "medium", "long", "full"]),
      datetime: e.oneOf(["short", "medium", "long", "full"]),
      era: e.oneOf(["narrow", "short", "long"]),
      year: e.oneOf(["numeric", "2-digit"]),
      month: e.oneOf(["numeric", "2-digit", "narrow", "short", "long"]),
      day: e.oneOf(["numeric", "2-digit"]),
      weekday: e.oneOf(["narrow", "short", "long"]),
      hour: e.oneOf(["numeric", "2-digit"]),
      hour12: e.bool,
      minute: e.oneOf(["numeric", "2-digit"]),
      second: e.oneOf(["numeric", "2-digit"]),
      timeZoneName: e.oneOf(["short", "long"])
    })
  ]),
  formatPlaceholder: e.oneOfType([
    u(
      e.oneOf(["wide", "narrow", "short", "formatPattern"])
    ),
    e.shape({
      year: u(e.string),
      month: u(e.string),
      day: u(e.string),
      hour: u(e.string),
      minute: u(e.string),
      second: u(e.string)
    })
  ]),
  width: e.oneOfType([e.string, e.number]),
  tabIndex: e.number,
  title: e.string,
  steps: e.shape({
    year: u(e.number),
    month: u(e.number),
    day: u(e.number),
    hour: u(e.number),
    minute: u(e.number),
    second: u(e.number)
  }),
  min: e.instanceOf(Date),
  max: e.instanceOf(Date),
  disabled: e.bool,
  spinners: e.bool,
  name: e.string,
  dir: e.string,
  label: e.node,
  id: e.string,
  ariaLabelledBy: e.string,
  ariaDescribedBy: e.string,
  ariaLabel: e.string,
  ariaRole: e.string,
  ariaHasPopup: e.oneOfType([
    e.bool,
    e.oneOf(["grid", "dialog"])
  ]),
  ariaExpanded: e.oneOfType([e.bool]),
  onChange: e.func,
  validationMessage: e.string,
  required: e.bool,
  valid: e.bool,
  size: e.oneOf(["small", "medium", "large"]),
  rounded: e.oneOf(["small", "medium", "large", "full", "none"]),
  fillMode: e.oneOf(["solid", "flat", "outline"]),
  autoFocus: e.bool,
  inputAttributes: e.object
};
const l = {
  format: Qe,
  defaultValue: null,
  size: void 0,
  rounded: void 0,
  fillMode: void 0,
  formatPlaceholder: $e,
  spinners: !1,
  disabled: !1,
  max: S(rt),
  min: S(at),
  minTime: S(nt),
  maxTime: S(tt),
  validityStyles: !0,
  validationMessage: ut,
  placeholder: null,
  enableMouseWheel: !0,
  autoCorrectParts: !0,
  autoSwitchParts: !0,
  allowCaretMode: !1,
  twoDigitYearMax: 68,
  ariaHasPopup: void 0,
  autoFocus: !1
}, ie = Je();
oe.displayName = "KendoReactDateInput";
export {
  oe as DateInput,
  st as DateInputInner,
  ie as DateInputPropsContext,
  l as dateInputDefaultProps
};
