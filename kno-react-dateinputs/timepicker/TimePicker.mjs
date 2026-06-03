/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as n from "react";
import e from "prop-types";
import { Popup as Y } from "@progress/kno-react-popup";
import { cloneDate as y } from "@progress/kno-date-math";
import { createPropsContext as $, classNames as m, uTimePicker as g, Keys as d, validatePackage as ee, getLicenseMessage as te, canUseDOM as T, subscribeToknoPaste as ie, AsyncFocusBlur as se, WatermarkOverlay as oe, withIdHOC as ne, withPropsContext as ae, withUnstyledHOC as re, withAdaptiveModeContext as le } from "@progress/kno-react-common";
import { clockIcon as he } from "@progress/kno-svg-icons";
import { provideLocalizationService as de, registerForLocalization as ue } from "@progress/kno-react-intl";
import { packageMetadata as C } from "../package-metadata.mjs";
import { timePickerSet as I, messages as u, toggleClock as f, timePickerCancel as pe, selectTime as M, toggleTimeSelector as P } from "../messages/index.mjs";
import { DateInputInner as ce } from "../dateinput/DateInput.mjs";
import { TimeSelector as me } from "./TimeSelector.mjs";
import { MIN_TIME as ge, MAX_TIME as fe, setTime as D, MIDNIGHT_DATE as ve } from "../utils.mjs";
import { isInRange as O, isSmallerThanMin as we, isBiggerThanMax as be } from "./utils.mjs";
import { PickerFloatingLabel as Se } from "../hooks/usePickerFloatingLabel.mjs";
import { Button as ye } from "@progress/kno-react-buttons";
import { AdaptiveMode as Te } from "../common/AdaptiveMode.mjs";
import { ActionSheetContent as Ce } from "@progress/kno-react-layout";
const a = class a extends n.Component {
  constructor(s) {
    super(s), this._element = null, this._dateInput = n.createRef(), this._timeSelector = null, this.shouldFocusDateInput = !1, this.prevShow = !1, this.showLicenseWatermark = !1, this.handleknoPasteValue = (t) => {
      if (t instanceof Date && !isNaN(t.getTime())) {
        this.applyknoPasteTime(t);
        return;
      }
      const i = t != null ? String(t) : "";
      if (!i)
        return;
      const o = new Date(i);
      isNaN(o.getTime()) || this.applyknoPasteTime(o);
    }, this.applyknoPasteTime = (t) => {
      const i = this.normalizeTime(t);
      if (!O(i, this.min, this.max))
        return;
      const o = new Event("change", { bubbles: !0 }), r = {
        target: this._element,
        currentTarget: this._element,
        nativeEvent: o
      };
      this.handleValueChange({
        syntheticEvent: r,
        nativeEvent: o,
        value: i
      });
    }, this.focus = () => {
      this.dateInput && this.dateInput.focus();
    }, this.renderTimeSelector = () => {
      const { smoothScroll: t, cancelButton: i, nowButton: o, disabled: r, format: h, steps: l, unstyled: c } = this.props;
      return /* @__PURE__ */ n.createElement(
        me,
        {
          ref: this.setTimeSelectorRef,
          mobileMode: this.mobileMode,
          show: this.show,
          cancelButton: i,
          disabled: r,
          nowButton: o,
          format: h,
          min: this.min,
          max: this.max,
          steps: l,
          smoothScroll: t,
          value: this.value,
          footer: !this.mobileMode,
          handleTimeChange: this.mobileMode && this.handleTimeChange,
          onChange: this.handleValueChange,
          onReject: this.handleValueReject,
          unstyled: c
        }
      );
    }, this.renderPopup = () => {
      const { popupClass: t, ...i } = this.popupSettings, { unstyled: o } = this.props, r = o && o.uTimePicker, h = m(t), l = {
        popupClass: g.popup({ c: r }),
        show: this.show,
        animate: this.element !== null,
        anchor: this.element,
        className: h,
        id: this._popupId,
        anchorAlign: {
          horizontal: "left",
          vertical: "bottom"
        },
        popupAlign: {
          horizontal: "left",
          vertical: "top"
        },
        ...i
      };
      return this.props.popup ? /* @__PURE__ */ n.createElement(this.props.popup, { ...l }, this.renderTimeSelector()) : /* @__PURE__ */ n.createElement(Y, { ...l }, this.renderTimeSelector());
    }, this.renderAdaptivePopup = () => {
      const { windowWidth: t = 0 } = this.state, i = {
        expand: this.show,
        onClose: this.handleBlur,
        title: this.props.adaptiveTitle || this.props.label,
        subTitle: this.props.adaptiveSubtitle,
        windowWidth: t,
        footer: {
          cancelText: this.localizationService.toLanguageString(f, u[pe]),
          onCancel: this.handleValueReject,
          applyText: this.localizationService.toLanguageString(I, u[I]),
          onApply: (o) => this.handleValueChange(o)
        }
      };
      return /* @__PURE__ */ n.createElement(Te, { ...i }, /* @__PURE__ */ n.createElement(Ce, null, this.renderTimeSelector()));
    }, this.setTimeSelectorRef = (t) => {
      this._timeSelector = t;
    }, this.nextValue = (t, i) => t.value !== void 0 ? t.value : i.value, this.nextShow = (t, i) => t.show !== void 0 ? t.show : i.show, this.handleInputValueChange = (t) => {
      const i = this.mergeTime(t.value);
      this.handleValueChange({ ...t, value: i });
    }, this.handleTimeChange = (t) => {
      this.setState({ candidate: t.time });
    }, this.handleValueChange = (t) => {
      this.setState({
        value: y(t.value || this.state.candidate)
      }), this.valueDuringOnChange = t.value, this.showDuringOnChange = !1, this.mobileMode || (this.shouldFocusDateInput = !0);
      const { onChange: i } = this.props, o = this.valueDuringOnChange !== void 0 ? this.value : this.state.candidate || this.value;
      i && i.call(void 0, {
        syntheticEvent: t.syntheticEvent,
        nativeEvent: t.nativeEvent,
        value: o,
        show: this.show,
        target: this
      }), this.valueDuringOnChange = void 0, this.showDuringOnChange = void 0, this.setState({ candidate: null }), this.setShow(!1);
    }, this.handleFocus = () => {
      this.setState({ focused: !0 });
    }, this.handleBlur = () => {
      this.setState({ focused: !1 }), this.setShow(!1);
    }, this.handleValueReject = (t) => {
      this.setShow(!1);
    }, this.handleClick = (t) => {
      this.props.disabled || (this.shouldFocusDateInput = !0, this.setShow(!this.show));
    }, this.handleIconMouseDown = (t) => {
      t.preventDefault();
    }, this.handleKeyDown = (t) => {
      const { altKey: i, keyCode: o } = t;
      if (o === d.esc) {
        this.shouldFocusDateInput = !0, this.setShow(!1);
        return;
      }
      i && (o === d.up || o === d.down) && (t.preventDefault(), t.stopPropagation(), this.shouldFocusDateInput = o === d.up, this.setShow(o === d.down));
    }, this.showLicenseWatermark = !ee(C, { component: "TimePicker" }), this.licenseMessage = te(C), this.state = {
      value: this.props.defaultValue || a.defaultProps.defaultValue,
      show: this.props.defaultShow || a.defaultProps.defaultShow,
      focused: !1,
      candidate: null
    }, this.normalizeTime = this.normalizeTime.bind(this), this.setShow = this.setShow.bind(this), this.mergeTime = this.mergeTime.bind(this);
  }
  get _popupId() {
    return this.props.id + "-popup-id";
  }
  get document() {
    if (T)
      return this.element && this.element.ownerDocument || document;
  }
  /**
   * Gets the wrapping element of the TimePicker.
   */
  get element() {
    return this._element;
  }
  /**
   * Gets the DateInput component inside the TimePicker component.
   */
  get dateInput() {
    return this._dateInput.current;
  }
  /**
   * Gets the TimeSelector component inside the TimePicker component.
   */
  get timeSelector() {
    return this._timeSelector;
  }
  /**
   * Gets the value of the TimePicker.
   */
  get value() {
    const s = this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value;
    return s !== null ? y(s) : null;
  }
  /**
   * Gets the popup state of the TimeSelector.
   */
  get show() {
    return this.showDuringOnChange !== void 0 ? this.showDuringOnChange : this.props.show !== void 0 ? this.props.show : this.state.show;
  }
  /**
   * Gets the `name` property of the TimePicker.
   */
  get name() {
    return this.props.name;
  }
  /**
   * Represents the validity state into which the TimePicker is set.
   */
  get validity() {
    const s = this.value && this.normalizeTime(this.value), t = this.normalizeTime(this.min), i = this.normalizeTime(this.max), o = O(s, t, i), r = this.props.validationMessage !== void 0, h = (!this.required || this.value !== null) && o, l = this.props.valid !== void 0 ? this.props.valid : h;
    return {
      customError: r,
      rangeOverflow: be(s, i),
      rangeUnderflow: we(s, t),
      valid: l,
      valueMissing: this.value === null
    };
  }
  /**
   * Returns a boolean value indicating whether the TimePicker is in mobile mode.
   */
  get mobileMode() {
    var t;
    return !!(this.state.windowWidth && this.props._adaptiveMode && this.state.windowWidth <= ((t = this.props._adaptiveMode) == null ? void 0 : t.medium) && this.props.adaptive);
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
  get popupSettings() {
    return this.props.popupSettings || a.defaultProps.popupSettings;
  }
  get min() {
    return this.props.min !== void 0 ? this.props.min : a.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : a.defaultProps.max;
  }
  get dateInputComp() {
    return this.props.dateInput || a.defaultProps.dateInput;
  }
  get localizationService() {
    return de(this);
  }
  /**
   * @hidden
   */
  componentDidMount() {
    var t;
    this.observerResize = T && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this)), this.show && this.forceUpdate(), (t = this.document) != null && t.body && this.observerResize && this.observerResize.observe(this.document.body);
    const s = this.props.name || this.props.id;
    this.knoPaste = ie(this._element, {
      fieldName: s,
      onValueChange: (i) => {
        this.handleknoPasteValue(i);
      }
    });
  }
  /**
   * @hidden
   */
  componentDidUpdate() {
    this._timeSelector && this.show && !this.prevShow && this._timeSelector.focusActiveList(), this.mobileMode && this.show && !this.prevShow && setTimeout(() => {
      this._timeSelector && this._timeSelector.focusActiveList();
    }, 300), this.dateInput && this.dateInput.element && !this.show && this.shouldFocusDateInput && this.dateInput.element.focus({ preventScroll: !0 }), this.prevShow = this.show, this.shouldFocusDateInput = !1;
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    var s, t;
    (s = this.document) != null && s.body && this.observerResize && this.observerResize.disconnect(), (t = this.knoPaste) == null || t.unsubscribe();
  }
  /**
   * @hidden
   */
  render() {
    const {
      size: s = a.defaultProps.size,
      rounded: t = a.defaultProps.rounded,
      fillMode: i = a.defaultProps.fillMode,
      disabled: o,
      tabIndex: r,
      title: h,
      id: l,
      className: c,
      format: z,
      formatPlaceholder: k,
      width: x,
      name: E,
      steps: R,
      validationMessage: V,
      required: B,
      validityStyles: L,
      ariaLabelledBy: A,
      ariaDescribedBy: F,
      unstyled: v,
      enableMouseWheel: N,
      autoCorrectParts: K,
      autoSwitchParts: _,
      autoSwitchKeys: q,
      allowCaretMode: W,
      inputAttributes: U
    } = this.props, w = v && v.uTimePicker, b = !this.validityStyles || this.validity.valid, j = this.localizationService.toLanguageString(M, u[M]), H = {
      disabled: o,
      format: z,
      formatPlaceholder: k,
      id: l,
      ariaLabelledBy: A,
      ariaDescribedBy: F,
      ariaLabel: j,
      max: this.normalizeTime(this.max),
      min: this.normalizeTime(this.min),
      name: E,
      onChange: this.handleInputValueChange,
      required: B,
      steps: R,
      tabIndex: this.show ? -1 : r,
      title: h,
      valid: this.validity.valid,
      validationMessage: V,
      validityStyles: L,
      value: this.value && this.normalizeTime(this.value),
      label: void 0,
      placeholder: this.state.focused ? null : this.props.placeholder,
      ariaHasPopup: "dialog",
      ariaExpanded: this.show,
      enableMouseWheel: N,
      autoCorrectParts: K,
      autoSwitchParts: _,
      autoSwitchKeys: q,
      allowCaretMode: W,
      inputAttributes: U
    }, G = this.localizationService.toLanguageString(f, u[f]), X = this.localizationService.toLanguageString(
      P,
      u[P]
    ), S = /* @__PURE__ */ n.createElement(
      se,
      {
        onFocus: this.handleFocus,
        onBlur: this.mobileMode ? void 0 : this.handleBlur,
        onSyncBlur: this.props.onBlur,
        onSyncFocus: this.props.onFocus
      },
      ({ onFocus: Z, onBlur: J }) => /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement(
        "span",
        {
          ref: (Q) => {
            this._element = Q;
          },
          className: m(
            g.wrapper({
              c: w,
              size: s,
              rounded: t,
              fillMode: i,
              invalid: !b,
              required: this.required,
              disabled: o
            }),
            { "k-focus": this.state.focused },
            c
          ),
          onKeyDown: this.handleKeyDown,
          style: { width: x },
          onFocus: this.mobileMode ? this.handleClick : Z,
          onBlur: J,
          onClick: this.mobileMode ? this.handleClick : void 0
        },
        /* @__PURE__ */ n.createElement(
          this.dateInputComp,
          {
            _ref: this._dateInput,
            ariaRole: "combobox",
            ariaControls: this.show ? this._popupId : void 0,
            ...H
          }
        ),
        /* @__PURE__ */ n.createElement(
          ye,
          {
            tabIndex: -1,
            type: "button",
            icon: "clock",
            svgIcon: he,
            onMouseDown: this.handleIconMouseDown,
            onClick: this.mobileMode ? void 0 : this.handleClick,
            title: X,
            className: m(g.inputButton({ c: w })),
            fillMode: i,
            "aria-label": G
          }
        ),
        !this.mobileMode && this.renderPopup()
      ), this.mobileMode && this.renderAdaptivePopup(), this.showLicenseWatermark && /* @__PURE__ */ n.createElement(oe, { message: this.licenseMessage }))
    );
    return this.props.label ? /* @__PURE__ */ n.createElement(
      Se,
      {
        dateInput: this._dateInput,
        label: this.props.label,
        editorId: l,
        editorValid: b,
        editorDisabled: this.props.disabled,
        children: S,
        style: { width: this.props.width }
      }
    ) : S;
  }
  normalizeTime(s) {
    return D(ve, s);
  }
  setShow(s) {
    const { onOpen: t, onClose: i } = this.props;
    this.show !== s && (this.setState({ show: s }), s && t && t.call(void 0, {
      target: this
    }), !s && i && i.call(void 0, {
      target: this
    }));
  }
  mergeTime(s) {
    return this.value && s ? D(this.value, s) : s;
  }
  calculateMedia(s) {
    for (const t of s)
      this.setState({ windowWidth: t.target.clientWidth });
  }
};
a.displayName = "TimePicker", a.propTypes = {
  className: e.string,
  cancelButton: e.bool,
  nowButton: e.bool,
  defaultShow: e.bool,
  defaultValue: e.instanceOf(Date),
  disabled: e.bool,
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
  steps: e.shape({
    hour: e.number,
    minute: e.number,
    second: e.number
  }),
  smoothScroll: e.bool,
  tabIndex: e.number,
  title: e.string,
  value: e.instanceOf(Date),
  width: e.oneOfType([e.number, e.string]),
  validationMessage: e.string,
  required: e.bool,
  validate: e.bool,
  valid: e.bool,
  size: e.oneOf(["small", "medium", "large"]),
  rounded: e.oneOf(["small", "medium", "large", "full", "none"]),
  fillMode: e.oneOf(["solid", "flat", "outline"]),
  inputAttributes: e.object
}, a.defaultProps = {
  defaultShow: !1,
  defaultValue: null,
  disabled: !1,
  format: "t",
  max: fe,
  min: ge,
  popupSettings: {},
  tabIndex: 0,
  steps: {},
  validityStyles: !0,
  dateInput: ce,
  size: void 0,
  rounded: void 0,
  fillMode: void 0
};
let p = a;
const Ie = $(), Me = ne(
  ae(
    Ie,
    re(le(p))
  )
);
Me.displayName = "knoReactTimePicker";
ue(p);
export {
  Me as TimePicker,
  Ie as TimePickerPropsContext,
  p as TimePickerWithoutContext
};
