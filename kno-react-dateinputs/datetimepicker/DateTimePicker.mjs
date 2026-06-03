/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as n from "react";
import e from "prop-types";
import { Popup as ie } from "@progress/kno-react-popup";
import { cloneDate as P } from "@progress/kno-date-math";
import { createPropsContext as se, Keys as d, canUseDOM as C, subscribeToknoPaste as oe, AsyncFocusBlur as ae, classNames as S, uDateTimePicker as T, withIdHOC as ne, withPropsContext as re, withUnstyledHOC as le, withAdaptiveModeContext as he } from "@progress/kno-react-common";
import { calendarIcon as de } from "@progress/kno-svg-icons";
import { DateInputInner as ue } from "../dateinput/DateInput.mjs";
import { Button as pe } from "@progress/kno-react-buttons";
import { isInDateRange as M, MIN_DATE as ce, MAX_DATE as me, MAX_TIME as fe, MIN_TIME as ge } from "../utils.mjs";
import { dateTimePickerCancel as O, messages as u, dateTimePickerSet as x, selectDateAndTime as k, toggleDateTimeSelector as m } from "../messages/index.mjs";
import { provideLocalizationService as p, registerForLocalization as ve } from "@progress/kno-react-intl";
import { DateTimeSelector as be } from "./DateTimeSelector.mjs";
import { isInTimeRange as we } from "../timepicker/utils.mjs";
import { PickerFloatingLabel as ye } from "../hooks/usePickerFloatingLabel.mjs";
import { AdaptiveMode as Se } from "../common/AdaptiveMode.mjs";
import { ActionSheetContent as Te } from "@progress/kno-react-layout";
const a = class a extends n.Component {
  constructor(i) {
    super(i), this._element = null, this._dateInput = n.createRef(), this._dateTimeSelector = null, this.shouldFocusDateInput = !1, this.prevShow = !1, this.handleSmartPasteValue = (t) => {
      if (t instanceof Date && !isNaN(t.getTime())) {
        this.applyknoPasteDate(t);
        return;
      }
      const s = t != null ? String(t) : "";
      if (!s)
        return;
      const o = new Date(s);
      isNaN(o.getTime()) || this.applyknoPasteDate(o);
    }, this.applyknoPasteDate = (t) => {
      if (!M(t, this.min, this.max))
        return;
      const s = new Event("change", { bubbles: !0 }), o = {
        target: this._element,
        currentTarget: this._element,
        nativeEvent: s
      };
      this.handleValueChange({
        syntheticEvent: o,
        nativeEvent: s,
        value: t
      });
    }, this.focus = () => {
      const t = this.dateInputElement();
      t && t.focus();
    }, this.renderPicker = () => {
      const { disabled: t, minTime: s, maxTime: o, format: h, calendar: l, cancelButton: r, weekNumber: g, focusedDate: c, unstyled: v } = this.props;
      return /* @__PURE__ */ n.createElement(
        be,
        {
          ref: (b) => {
            this._dateTimeSelector = b;
          },
          cancelButton: r,
          steps: this.props.steps,
          value: this.value,
          onChange: this.handleValueChange,
          onReject: this.handleReject,
          disabled: t,
          weekNumber: g,
          min: this.min,
          max: this.max,
          minTime: s,
          maxTime: o,
          focusedDate: c,
          format: h,
          calendar: l,
          mobileMode: this.mobileMode,
          footerActions: !this.mobileMode,
          unstyled: v
        }
      );
    }, this.renderAdaptivePopup = () => {
      const { windowWidth: t = 0 } = this.state, s = p(this).toLanguageString(
        O,
        u[O]
      ), o = p(this).toLanguageString(
        x,
        u[x]
      ), h = {
        expand: this.show,
        onClose: this.handleBlur,
        title: this.props.adaptiveTitle || this.props.label,
        subTitle: this.props.adaptiveSubtitle,
        windowWidth: t,
        footer: {
          cancelText: s,
          onCancel: (l) => {
            var r;
            return (r = this._dateTimeSelector) == null ? void 0 : r.handleReject(l);
          },
          applyText: o,
          onApply: (l) => {
            var r;
            return (r = this._dateTimeSelector) == null ? void 0 : r.handleAccept(l);
          }
        }
      };
      return /* @__PURE__ */ n.createElement(Se, { ...h }, /* @__PURE__ */ n.createElement(Te, null, this.renderPicker()));
    }, this.handleReject = () => {
      this.shouldFocusDateInput = !0, this.setShow(!1);
    }, this.handleValueChange = (t) => {
      this.setState({
        value: P(t.value || void 0)
      }), this.valueDuringOnChange = t.value, this.showDuringOnChange = !1, this.mobileMode || (this.shouldFocusDateInput = !0);
      const { onChange: s } = this.props;
      s && s.call(void 0, {
        syntheticEvent: t.syntheticEvent,
        nativeEvent: t.nativeEvent,
        value: this.value,
        show: this.show,
        target: this
      }), this.valueDuringOnChange = void 0, this.showDuringOnChange = void 0, this.setShow(!1);
    }, this.handleFocus = () => {
      this.setState({ focused: !0 });
    }, this.handleBlur = () => {
      this.setState({ focused: !1 }), this.setShow(!1);
    }, this.handleClick = () => {
      this.props.disabled || (this.shouldFocusDateInput = !0, this.setShow(!this.show));
    }, this.handleIconMouseDown = (t) => {
      t.preventDefault();
    }, this.handleKeyDown = (t) => {
      const { altKey: s, keyCode: o } = t;
      if (o === d.esc) {
        this.shouldFocusDateInput = !0, this.setShow(!1);
        return;
      }
      s && (o === d.up || o === d.down) && (t.preventDefault(), t.stopPropagation(), this.shouldFocusDateInput = o === d.up, this.setShow(o === d.down));
    }, this.dateInputElement = () => this.dateInput && this.dateInput.element || this.element && this.element.querySelector(".k-dateinput > input.k-input-inner"), this.state = {
      value: this.props.defaultValue || a.defaultProps.defaultValue,
      show: this.props.defaultShow || a.defaultProps.defaultShow,
      focused: !1
    };
  }
  get _popupId() {
    return this.props.id + "-popup-id";
  }
  get document() {
    if (C)
      return this.element && this.element.ownerDocument || document;
  }
  /**
   * Gets the wrapping element of the DateTimePicker.
   */
  get element() {
    return this._element;
  }
  /**
   * Gets the DateInput component inside the DateTimePicker component.
   */
  get dateInput() {
    return this._dateInput.current;
  }
  /**
   * Gets the value of the DateTimePicker.
   */
  get value() {
    const i = this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value;
    return i !== null ? P(i) : null;
  }
  /**
   * Gets the popup state of the DateTimePicker.
   */
  get show() {
    return this.showDuringOnChange !== void 0 ? this.showDuringOnChange : this.props.show !== void 0 ? this.props.show : this.state.show;
  }
  /**
   * Gets the `name` property of the DateTimePicker.
   */
  get name() {
    return this.props.name;
  }
  /**
   * Returns a boolean value indicating whether the DateTimePicker is in mobile mode.
   */
  get mobileMode() {
    var t;
    return !!(this.state.windowWidth && this.props._adaptiveMode && this.state.windowWidth <= ((t = this.props._adaptiveMode) == null ? void 0 : t.medium) && this.props.adaptive);
  }
  get min() {
    return this.props.min !== void 0 ? this.props.min : a.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : a.defaultProps.max;
  }
  /**
   * Represents the validity state into which the DateTimePicker is set.
   */
  get validity() {
    const i = M(this.value, this.min, this.max) && we(this.value, this.props.minTime || ge, this.props.maxTime || fe), t = this.props.validationMessage !== void 0, s = (!this.required || this.value !== null) && i, o = this.props.valid !== void 0 ? this.props.valid : s;
    return {
      customError: t,
      rangeOverflow: this.value && this.max.getTime() < this.value.getTime() || !1,
      rangeUnderflow: this.value && this.value.getTime() < this.min.getTime() || !1,
      valid: o,
      valueMissing: this.value === null
    };
  }
  /**
   * @hidden
   */
  get validityStyles() {
    return this.props.validityStyles !== void 0 ? this.props.validityStyles : a.defaultProps.validityStyles;
  }
  /**
   * @hidden
   */
  get required() {
    return this.props.required !== void 0 ? this.props.required : !1;
  }
  /**
   * @hidden
   */
  get dateInputComp() {
    return this.props.dateInput || a.defaultProps.dateInput;
  }
  /**
   * @hidden
   */
  componentDidMount() {
    var t;
    this.observerResize = C && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this)), this.show && this.forceUpdate(), (t = this.document) != null && t.body && this.observerResize && this.observerResize.observe(this.document.body);
    const i = this.props.name || this.props.id;
    this.knoPaste = oe(this._element, {
      fieldName: i,
      onValueChange: (s) => {
        this.handleSmartPasteValue(s);
      }
    });
  }
  /**
   * @hidden
   */
  componentDidUpdate() {
    const i = this.dateInputElement();
    this._dateTimeSelector && this.show && !this.prevShow && this._dateTimeSelector.focus({ preventScroll: !0 }), this.mobileMode && this.show && !this.prevShow && setTimeout(() => {
      this._dateTimeSelector && this._dateTimeSelector.focus({ preventScroll: !0 });
    }, 300), i && !this.show && this.shouldFocusDateInput && i.focus({ preventScroll: !0 }), this.prevShow = this.show, this.shouldFocusDateInput = !1;
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    var i, t;
    clearTimeout(this.nextTickId), (i = this.document) != null && i.body && this.observerResize && this.observerResize.disconnect(), (t = this.knoPaste) == null || t.unsubscribe();
  }
  /**
   * @hidden
   */
  render() {
    const {
      size: i = a.defaultProps.size,
      rounded: t = a.defaultProps.rounded,
      fillMode: s = a.defaultProps.fillMode,
      autoFocus: o = a.defaultProps.autoFocus,
      inputAttributes: h,
      disabled: l,
      tabIndex: r,
      title: g,
      id: c,
      format: v,
      formatPlaceholder: b,
      min: E,
      max: F,
      className: A,
      width: N,
      name: R,
      validationMessage: B,
      required: z,
      validityStyles: _,
      minTime: K,
      maxTime: L,
      ariaLabelledBy: V,
      ariaDescribedBy: q,
      popup: U = ie,
      unstyled: w,
      autoFill: j,
      twoDigitYearMax: H,
      enableMouseWheel: W,
      autoCorrectParts: X,
      autoSwitchParts: Y,
      autoSwitchKeys: Z,
      allowCaretMode: G
    } = this.props, y = w && w.uDateTimePicker, D = !this.validityStyles || this.validity.valid, J = p(this).toLanguageString(
      k,
      u[k]
    ), Q = {
      id: c,
      ariaLabelledBy: V,
      ariaDescribedBy: q,
      ariaLabel: J,
      format: v,
      formatPlaceholder: b,
      disabled: l,
      title: g,
      validityStyles: _,
      validationMessage: B,
      required: z,
      min: E,
      max: F,
      minTime: K,
      maxTime: L,
      name: R,
      tabIndex: this.show ? -1 : r,
      valid: this.validity.valid,
      value: this.value,
      onChange: this.handleValueChange,
      steps: this.props.steps,
      label: void 0,
      placeholder: this.state.focused ? null : this.props.placeholder,
      ariaExpanded: this.show,
      unstyled: w,
      autoFill: j,
      twoDigitYearMax: H,
      enableMouseWheel: W,
      autoCorrectParts: X,
      autoSwitchParts: Y,
      autoSwitchKeys: Z,
      allowCaretMode: G
    }, I = /* @__PURE__ */ n.createElement(
      ae,
      {
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onSyncFocus: this.props.onFocus,
        onSyncBlur: this.props.onBlur
      },
      ({ onFocus: $, onBlur: ee }) => /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement(
        "div",
        {
          ref: (te) => {
            this._element = te;
          },
          className: S(
            T.wrapper({
              c: y,
              size: i,
              fillMode: s,
              rounded: t,
              disabled: l,
              required: this.required,
              invalid: !D
            }),
            { "k-focus": this.state.focused },
            A
          ),
          onKeyDown: this.handleKeyDown,
          style: { width: N },
          onFocus: this.mobileMode ? this.handleClick : $,
          onBlur: ee,
          onClick: this.mobileMode ? this.handleClick : void 0
        },
        /* @__PURE__ */ n.createElement(
          this.dateInputComp,
          {
            _ref: this._dateInput,
            ariaRole: "combobox",
            ariaControls: this.show ? this._popupId : void 0,
            ariaHasPopup: "dialog",
            autoFocus: o,
            inputAttributes: h,
            ...Q
          }
        ),
        /* @__PURE__ */ n.createElement(
          pe,
          {
            tabIndex: -1,
            type: "button",
            icon: "calendar",
            svgIcon: de,
            onMouseDown: this.handleIconMouseDown,
            onClick: this.mobileMode ? void 0 : this.handleClick,
            title: p(this).toLanguageString(
              m,
              u[m]
            ),
            className: S(T.inputButton({ c: y })),
            fillMode: s,
            "aria-label": p(this).toLanguageString(
              m,
              u[m]
            )
          }
        ),
        /* @__PURE__ */ n.createElement(
          U,
          {
            show: this.show,
            animate: this.element !== null,
            anchor: this.element,
            popupClass: S(T.popup({ c: y })),
            id: this._popupId,
            anchorAlign: {
              horizontal: "left",
              vertical: "bottom"
            },
            popupAlign: {
              horizontal: "left",
              vertical: "top"
            }
          },
          !this.mobileMode && this.renderPicker()
        )
      ), this.mobileMode && this.renderAdaptivePopup())
    );
    return this.props.label ? /* @__PURE__ */ n.createElement(
      ye,
      {
        dateInput: this._dateInput,
        label: this.props.label,
        editorId: c,
        editorValid: D,
        editorDisabled: this.props.disabled,
        children: I,
        style: { width: this.props.width }
      }
    ) : I;
  }
  setShow(i) {
    const { onOpen: t, onClose: s } = this.props;
    this.show !== i && (this.setState({ show: i }), i && t && t.call(void 0, {
      target: this
    }), !i && s && s.call(void 0, {
      target: this
    }));
  }
  nextTick(i) {
    clearTimeout(this.nextTickId), this.nextTickId = window.setTimeout(() => i());
  }
  calculateMedia(i) {
    for (const t of i)
      this.setState({ windowWidth: t.target.clientWidth });
  }
};
a.displayName = "DateTimePicker", a.propTypes = {
  className: e.string,
  defaultShow: e.bool,
  defaultValue: e.instanceOf(Date),
  disabled: e.bool,
  focusedDate: e.instanceOf(Date),
  format: e.oneOfType([
    e.string,
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
    e.oneOf([
      "wide",
      "narrow",
      "short",
      "formatPattern"
    ]),
    e.shape({
      year: e.string,
      month: e.string,
      day: e.string,
      hour: e.string,
      minute: e.string,
      second: e.string
    })
  ]),
  id: e.string,
  ariaLabelledBy: e.string,
  ariaDescribedBy: e.string,
  min: e.instanceOf(Date),
  max: e.instanceOf(Date),
  name: e.string,
  popupSettings: e.shape({
    animate: e.bool,
    appendTo: e.any,
    popupClass: e.string
  }),
  dateInput: e.elementType,
  show: e.bool,
  tabIndex: e.number,
  title: e.string,
  value: e.instanceOf(Date),
  weekNumber: e.bool,
  width: e.oneOfType([e.number, e.string]),
  validationMessage: e.string,
  required: e.bool,
  validate: e.bool,
  valid: e.bool,
  cancelButton: e.bool,
  size: e.oneOf(["small", "medium", "large"]),
  rounded: e.oneOf(["small", "medium", "large", "full", "none"]),
  fillMode: e.oneOf(["solid", "flat", "outline"]),
  autoFocus: e.bool,
  inputAttributes: e.object
}, a.defaultProps = {
  defaultShow: !1,
  defaultValue: null,
  disabled: !1,
  format: "g",
  // general date and time pattern (short time): "M/d/y h:mm a" for en.
  max: me,
  min: ce,
  popupSettings: {},
  tabIndex: 0,
  weekNumber: !1,
  validityStyles: !0,
  cancelButton: !0,
  dateInput: ue,
  size: void 0,
  rounded: void 0,
  fillMode: void 0,
  autoFocus: !1
};
let f = a;
const De = se(), Ie = ne(
  re(
    De,
    le(
      he(f)
    )
  )
);
Ie.displayName = "knoReactDateTimePicker";
ve(f);
export {
  Ie as DateTimePicker,
  De as DateTimePickerPropsContext,
  f as DateTimePickerWithoutContext
};
