/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as g from "react";
import v from "prop-types";
import { createPropsContext as et, Keys as u, classNames as S, knoThemeMaps as st, IconWrap as B, WatermarkOverlay as it, getLicenseMessage as ot, canUseDOM as z, validatePackage as at, subscribeToknoPaste as nt, withIdHOC as lt, withPropsContext as dt, withAdaptiveModeContext as rt } from "@progress/kno-react-common";
import { plusIcon as ht } from "@progress/kno-svg-icons";
import { FloatingLabel as pt } from "@progress/kno-react-labels";
import { provideLocalizationService as V, registerForLocalization as ct } from "@progress/kno-react-intl";
import ut from "../common/ListContainer.mjs";
import ft from "../common/List.mjs";
import gt from "../common/GroupStickyHeader.mjs";
import mt from "./TagList.mjs";
import vt from "../common/SearchBar.mjs";
import E from "../common/DropDownBase.mjs";
import { ActiveDescendant as w } from "../common/settings.mjs";
import { getFilteredData as x, getItemIndexByText as bt, areSame as F, removeDataItems as D, isPresent as K, getItemValue as _, preventDefaultNonInputs as It, matchTags as A, itemIndexStartsWith as yt } from "../common/utils.mjs";
import { packageMetadata as H } from "../package-metadata.mjs";
import xt from "../common/ClearButton.mjs";
import { AdaptiveMode as St } from "../common/AdaptiveMode.mjs";
import { ActionSheetContent as Ct } from "@progress/kno-react-layout";
import kt from "../common/ListFilter.mjs";
import $ from "../common/withCustomComponent.mjs";
import { listAriaLabel as W, messages as q, chipListAriaLabel as G } from "../messages/index.mjs";
const { sizeMap: P, roundedMap: wt } = st, Tt = "Please enter a valid value!", U = (O) => O.preventDefault(), j = (O) => O === 2, C = class C extends g.Component {
  constructor(l) {
    super(l), this.state = {
      activedescendant: w.PopupList,
      currentValue: []
    }, this._element = null, this._valueItemsDuringOnChange = null, this.base = new E(this), this._tags = [], this._input = null, this._adaptiveInput = null, this._skipFocusEvent = !1, this._lastSelectedOrDeslectedItemIndex = null, this.itemHeight = 0, this.scrollToFocused = !1, this.showLicenseWatermark = !1, this.focus = () => {
      this._input && this._input.focus();
    }, this.handleknoPasteValue = (t) => {
      if (t == null)
        return;
      const e = x(this.props), { textField: o, dataItemKey: s } = this.props, a = String(t).split(",").map((r) => r.trim()).filter((r) => r).reduce((r, p) => {
        const d = bt(e, p, o, !1, !0);
        if (d !== -1) {
          const n = e[d];
          r.some((h) => F(h, n, s)) || r.push(n);
        }
        return r;
      }, []);
      if (a.length === 0)
        return;
      const i = this.base.initState();
      i.syntheticEvent = { target: this._element }, this.triggerOnChange(a, i), this.applyState(i);
    }, this.handleItemSelect = (t, e) => {
      const { dataItemKey: o, virtual: s } = this.props, a = x(this.props), i = s ? s.skip : 0, r = a[t - i], p = this.value.findIndex((h) => F(h, r, o));
      this._lastSelectedOrDeslectedItemIndex = a.findIndex((h) => F(h, r, o));
      let d = [];
      p !== -1 ? (d = this.value, d.splice(p, 1)) : d = [...this.value, r], (this.props.filter !== void 0 ? this.props.filter : this.state.text) && !this.mobileMode && (this.state.text && (e.data.text = ""), this.base.filterChanged("", e)), this._adaptiveInput && this._adaptiveInput.blur(), this.state.focusedIndex !== void 0 && (e.data.focusedIndex = void 0), this.triggerOnChange(d, e), this.base.triggerPageChangeCornerItems(r, e);
    }, this.onTagDelete = (t, e) => {
      const o = this.base.initState();
      o.syntheticEvent = e, this.opened && this.base.togglePopup(o), !this.state.focused && !this.mobileMode && (o.data.focused = !0, this.focus());
      const s = this.value;
      D(s, t, this.props.dataItemKey), this.triggerOnChange(s, o), this.applyState(o);
    }, this.itemFocus = (t, e) => {
      const { allowCustom: o, virtual: s } = this.props, a = x(this.props), i = s ? s.skip : 0, r = s ? s.pageSize : 0, p = this.props.filter !== void 0 ? this.props.filter : this.state.text, { focusedIndex: d } = this.getFocusedState(), n = o && p, h = a[t - i];
      if (s && !h && t >= 0 && d !== t) {
        const f = Math.floor(t / r) * r;
        if (f !== i) {
          this.state.focusedIndex !== t && (e.data.focusedIndex = t, e.data.activedescendant = w.PopupList), this.base.triggerOnPageChange(e, f, r);
          return;
        }
      }
      h && d !== t ? this.state.focusedIndex !== t && (e.data.focusedIndex = t, e.data.activedescendant = w.PopupList) : n && t === -1 && this.state.focusedIndex !== void 0 && (e.data.focusedIndex = void 0), this.base.triggerPageChangeCornerItems(h, e);
    }, this.componentRef = (t) => {
      this._element = t, this.base.wrapper = t;
    }, this.searchbarRef = (t) => {
      const e = this._input = t && t.input;
      e && this.state.focused && window.setTimeout(() => e.focus(), 0);
    }, this.onChangeHandler = (t) => {
      const e = this.base.initState(), o = t.target.value;
      e.syntheticEvent = t, this.props.filter === void 0 && (e.data.text = o), e.data.focusedIndex = void 0, this.opened ? this.scrollToFocused = !0 : (this.base.togglePopup(e), this.setState({ currentValue: this.value })), this.base.filterChanged(o, e), this.applyState(e), this.setState({ group: void 0 });
    }, this.clearButtonClick = (t) => {
      const e = this.base.initState();
      e.syntheticEvent = t, t.stopPropagation(), this.value.length > 0 && this.triggerOnChange([], e), this.state.focusedIndex !== void 0 && (e.data.focusedIndex = void 0), this.opened && this.base.togglePopup(e);
      const o = this.props.filter !== void 0 ? this.props.filter : this.state.text;
      K(o) && o !== "" && this.base.filterChanged("", e), this.state.text && (e.data.text = ""), this._lastSelectedOrDeslectedItemIndex = null, this.applyState(e);
    }, this.onInputKeyDown = (t) => {
      const { textField: e, groupField: o, virtual: s } = this.props, a = x(this.props), i = t.keyCode, r = this.props.filter !== void 0 ? this.props.filter : this.state.text, p = this.props.opened !== void 0 ? this.props.opened : this.state.opened, { focusedItem: d, focusedIndex: n } = this.getFocusedState(), h = this.base.initState();
      if (h.syntheticEvent = t, !r && this.value.length > 0 && (i === u.left || i === u.right || i === u.home || i === u.end || i === u.delete || i === u.backspace) && !t.shiftKey)
        return this.onTagsNavigate(t, h);
      const f = () => {
        t.preventDefault(), this.base.togglePopup(h), this.applyState(h);
      };
      if (this.opened)
        if (i === u.pageUp)
          t.preventDefault(), this.base.scrollPopupByPageSize(-1);
        else if (i === u.pageDown)
          t.preventDefault(), this.base.scrollPopupByPageSize(1);
        else if ((t.ctrlKey || t.metaKey) && t.code === "KeyA") {
          const b = (this.state.value && this.state.value.length) === a.length ? [] : a;
          this.updateStateOnKeyboardNavigation(b, h);
        } else if ((t.ctrlKey || t.metaKey) && t.shiftKey && t.keyCode === u.end) {
          const c = a.slice(this.getFocusedState().focusedIndex);
          this.itemFocus(a.length - 1, h), this.updateStateOnKeyboardNavigation(c, h);
        } else if ((t.ctrlKey || t.metaKey) && t.shiftKey && t.keyCode === u.home) {
          const c = a.slice(0, this.getFocusedState().focusedIndex + 1);
          this.itemFocus(0, h), this.updateStateOnKeyboardNavigation(c, h);
        } else if (t.shiftKey && t.keyCode === u.up) {
          let c;
          const b = this.getLastSelectedOrDeselectedIndex(1, n);
          b === null ? c = n !== 0 ? a.slice(n - 1, n) : [a[n]] : b === n ? c = [a[b - 1]] : n >= 0 && (c = b > n ? a.slice(n - 1, b) : a.slice(b - 1, n)), c && c.length > 0 && (n >= 1 && this.itemFocus(n - 1, h), this.updateStateOnKeyboardNavigation(c, h));
        } else if (t.shiftKey && t.keyCode === u.down) {
          let c;
          const b = this.getLastSelectedOrDeselectedIndex(0, n);
          b === null ? c = n !== a.length - 1 ? a.slice(n, n + 1) : [a[n]] : b === n ? c = a.slice(n, n + 2) : n >= 0 && (c = b > n ? a.slice(n + 1, b + 1) : a.slice(b, n + 2)), c && c.length >= 1 && (this.itemFocus(n + 1, h), this.updateStateOnKeyboardNavigation(c, h));
        } else if (t.altKey && i === u.up)
          f();
        else if (i === u.up || i === u.down) {
          const c = s ? s.skip : 0, b = n - c;
          if (o !== "" && e)
            if (!this.props.skipDisabledItems && p)
              this.onNavigate(h, i);
            else {
              let m = 0;
              if (i === u.down || i === u.right) {
                const I = a.slice(b + 1).find((y) => !y.disabled);
                m = I && a.indexOf(I), m && m !== -1 && (m = m + c);
              } else if (i === u.up || i === u.left) {
                let I;
                if (n === -1)
                  I = a, m = a.findIndex((y) => !y.disabled), m !== -1 && (m = m + c);
                else {
                  I = a.slice(0, b);
                  let y = I.pop();
                  for (; y && y.disabled; )
                    y = I.pop();
                  m = y && a.indexOf(y), m && m !== -1 && (m = m + c);
                }
              }
              if (m) {
                const I = m - n;
                this.onNavigate(h, i, I);
              } else
                this.onNavigate(h, i);
            }
          else if (!this.props.skipDisabledItems && p)
            this.onNavigate(h, i);
          else {
            let m = null;
            if (i === u.down || i === u.right)
              m = a.slice(b + 1).find((I) => !I.disabled);
            else if (i === u.up || i === u.left) {
              const I = a.slice(0, b);
              for (m = I.pop(); m && m.disabled; )
                m = I.pop();
            }
            if (m) {
              const I = a.indexOf(m);
              if (I !== -1) {
                const y = c + I - n;
                this.onNavigate(h, i, y);
              } else
                this.onNavigate(h, i);
            } else
              this.onNavigate(h, i);
          }
          this.applyState(h), t.preventDefault();
        } else i === u.enter ? (t.preventDefault(), this.props.allowCustom && r && d === null ? this.customItemSelect(t) : d && d.disabled ? f() : this.selectFocusedItem(t)) : i === u.esc && f();
      else t.altKey && i === u.down ? f() : i === u.esc && this.clearButtonClick(t);
    }, this.listContainerContent = () => {
      const { header: t, footer: e, allowCustom: o, size: s, groupStickyHeaderItemRender: a, groupField: i, list: r } = this.props, p = x(this.props), d = this.props.filter !== void 0 ? this.props.filter : this.state.text, { focusedType: n } = this.getFocusedState(), h = o && d && /* @__PURE__ */ g.createElement(
        "div",
        {
          className: S("k-list", {
            [`k-list-${P[s] || s}`]: s
          }),
          key: "customitem",
          onClick: this.customItemSelect,
          onMouseDown: U
        },
        /* @__PURE__ */ g.createElement(
          "div",
          {
            className: S("k-list-item k-custom-item", { "k-focus": j(n) }),
            style: { fontStyle: "italic" }
          },
          d,
          /* @__PURE__ */ g.createElement(B, { name: "plus", icon: ht, style: { position: "absolute", right: "0.5em" } })
        )
      );
      let { group: f } = this.state;
      return f === void 0 && i !== void 0 && (f = _(p[0], i)), /* @__PURE__ */ g.createElement(g.Fragment, null, t && /* @__PURE__ */ g.createElement("div", { className: "k-list-header" }, t), h, /* @__PURE__ */ g.createElement(
        "div",
        {
          className: S("k-list", {
            [`k-list-${this.mobileMode ? "lg" : P[s] || s}`]: this.mobileMode || s,
            "k-virtual-list": this.base.vs.enabled
          })
        },
        !r && f && p.length !== 0 && /* @__PURE__ */ g.createElement(gt, { group: f, render: a }),
        this.renderList()
      ), this.showLicenseWatermark && /* @__PURE__ */ g.createElement(it, { message: this.licenseMessage }), e && /* @__PURE__ */ g.createElement("div", { className: "k-list-footer" }, e));
    }, this.renderListContainer = () => {
      const t = this.base, { dir: e } = this.props, o = x(this.props), s = this.base.getPopupSettings(), a = s.width !== void 0 ? s.width : t.popupWidth, i = {
        dir: e !== void 0 ? e : t.dirCalculated,
        width: a,
        popupSettings: {
          ...s,
          popupClass: S(s.popupClass, "k-list-container", "k-multiselect-popup"),
          anchor: s.anchor || this.element,
          show: this.opened,
          onOpen: this.onPopupOpened,
          onClose: this.onPopupClosed
        },
        itemsCount: [o.length, this.value.length]
      };
      return /* @__PURE__ */ g.createElement(ut, { ...i }, this.listContainerContent());
    }, this.renderAdaptiveListContainer = () => {
      const { adaptiveTitle: t, adaptiveSubtitle: e, filterable: o, filter: s } = this.props, { windowWidth: a = 0 } = this.state, i = s !== void 0 ? s : this.state.text, r = o ? /* @__PURE__ */ g.createElement(
        kt,
        {
          value: i,
          ref: (d) => {
            this._adaptiveInput = d && d.element;
          },
          onChange: this.onChangeHandler,
          onKeyDown: this.onInputKeyDown,
          size: "large",
          rounded: this.props.rounded,
          fillMode: this.props.fillMode,
          placeholder: this.props.placeholder
        }
      ) : null, p = {
        title: t || this.props.label,
        subTitle: e,
        expand: this.opened,
        onClose: (d) => this.closePopup(d),
        windowWidth: a,
        mobileFilter: r
      };
      return /* @__PURE__ */ g.createElement(St, { ...p }, /* @__PURE__ */ g.createElement(Ct, null, /* @__PURE__ */ g.createElement("div", { className: "k-list-container" }, this.listContainerContent())));
    }, this.closePopup = (t) => {
      const e = this.base.initState();
      e.syntheticEvent = t, t.stopPropagation(), this.state.focusedIndex !== void 0 && (e.data.focusedIndex = void 0), this.opened && this.base.togglePopup(e), e.events.push({ type: "onClose" });
      const o = this.props.filter !== void 0 ? this.props.filter : this.state.text;
      K(o) && o !== "" && this.base.filterChanged("", e), this.state.text && (e.data.text = ""), this.applyState(e);
    }, this.onCancel = (t) => {
      const e = this.base.initState();
      e.syntheticEvent = t, t.stopPropagation(), this.state.focusedIndex !== void 0 && (e.data.focusedIndex = void 0), this.opened && this.base.togglePopup(e), e.events.push({ type: "onCancel" });
      const o = this.props.filter !== void 0 ? this.props.filter : this.state.text;
      K(o) && o !== "" && this.base.filterChanged("", e), this.state.text && (e.data.text = ""), this.applyState(e);
    }, this.renderList = () => {
      const t = V(this), {
        textField: e,
        listNoDataRender: o,
        itemRender: s,
        groupHeaderItemRender: a,
        dataItemKey: i,
        virtual: r = { skip: 0, total: void 0 }
      } = this.props, p = x(this.props), d = this.base.vs, { focusedIndex: n } = this.getFocusedState(), h = this.base.getPopupSettings(), f = `translateY(${d.translate}px)`;
      return /* @__PURE__ */ g.createElement(
        ft,
        {
          id: this.base.listBoxId,
          show: this.opened,
          data: p.slice(),
          focusedIndex: n - r.skip,
          value: this.value,
          textField: e,
          valueField: i,
          optionsGuid: this.base.guid,
          groupField: this.props.groupField,
          ariaLabel: t.toLanguageString(W, q[W]),
          listRef: (c) => {
            d.list = this.base.list = c;
          },
          wrapperStyle: this.mobileMode ? {} : { maxHeight: h.height },
          wrapperCssClass: "k-list-content",
          listStyle: d.enabled ? { transform: f } : void 0,
          key: "listKey",
          skip: r.skip,
          onClick: this.handleItemClick,
          itemRender: s,
          groupHeaderItemRender: a,
          noDataRender: o,
          onMouseDown: U,
          onBlur: this.handleBlur,
          onScroll: this.onScroll,
          wrapperRef: d.scrollerRef,
          scroller: this.base.renderScrollElement(),
          ariaSetSize: r.total
        }
      );
    }, this.onScroll = (t) => {
      const { vs: e, list: o } = this.base;
      e.scrollHandler(t);
      const { groupField: s } = this.props;
      let a = x(this.props);
      if (!(!s || !a.length) && s) {
        const i = this.itemHeight = this.itemHeight || (e.enabled ? e.itemHeight : o ? o.children[0].offsetHeight : 0), p = t.target.scrollTop - e.skip * i;
        a = this.base.getGroupedDataModernMode(a, s);
        let d = a[0][s];
        for (let n = 1; n < a.length && !(i * n > p); n++)
          a[n] && a[n][s] && (d = a[n][s]);
        d !== this.state.group && this.setState({
          group: d
        });
      }
    }, this.customItemSelect = (t) => {
      const e = this.props.filter !== void 0 ? this.props.filter : this.state.text, { textField: o } = this.props;
      if (!e)
        return;
      const s = this.base.initState();
      s.syntheticEvent = t;
      const a = o ? { [o]: e } : e;
      this.state.text !== void 0 && (s.data.text = ""), s.data.focusedIndex = void 0, this.base.filterChanged("", s);
      const i = [...this.value, a];
      this.triggerOnChange(i, s), this.base.togglePopup(s), this.applyState(s);
    }, this.handleWrapperClick = (t) => {
      const e = this._input;
      !this.opened && e && this.focusElement(e);
      const o = this.base.initState();
      o.syntheticEvent = t, !this.state.focused && !this.mobileMode && (o.events.push({ type: "onFocus" }), o.data.focused = !0), this.mobileMode && (this.setState({ currentValue: this.tagsToRender }), this.mobileMode && window.setTimeout(() => this._adaptiveInput && this._adaptiveInput.focus(), 300)), this.base.togglePopup(o), this.applyState(o);
    }, this.handleItemClick = (t, e) => {
      const o = this.base.initState();
      o.syntheticEvent = e, this.handleItemSelect(t, o), this.props.autoClose && this.base.togglePopup(o), e.stopPropagation(), this.applyState(o);
    }, this.handleBlur = (t) => {
      if (!this.state.focused || this._skipFocusEvent)
        return;
      const e = this.base.initState(), { allowCustom: o, filterable: s } = this.props;
      e.syntheticEvent = t, e.data.focused = !1, e.events.push({ type: "onBlur" }), this.opened && !this.mobileMode && (this.state.opened && (e.data.opened = !1), e.events.push({ type: "onClose" })), !o && !s && this.state.text && (e.data.text = ""), this.applyState(e);
    }, this.handleFocus = (t) => {
      this._skipFocusEvent || this.base.handleFocus(t);
    }, this.onPopupOpened = () => {
      this._input && this.state.focused && !this.mobileMode && this.focusElement(this._input);
    }, this.onPopupClosed = () => {
      this.state.focused && window.setTimeout(() => {
        this.state.focused && this.focusElement(this._input);
      }, 0);
    }, this.setValidity = () => {
      this._input && this._input.setCustomValidity && this._input.setCustomValidity(
        this.validity.valid ? "" : this.props.validationMessage || Tt
      );
    }, this.validate(l), this.licenseMessage = ot(H);
  }
  get _inputId() {
    return this.props.id;
  }
  get document() {
    if (z)
      return this.element && this.element.ownerDocument || document;
  }
  validate(l) {
    if (l.filterable || l.virtual) {
      const t = [];
      l.filterable && t.push("filterable"), l.virtual && t.push("virtualization"), this.showLicenseWatermark = !at(H, {
        component: "MultiSelect",
        features: t
      });
    }
  }
  /** @hidden */
  get element() {
    return this._element;
  }
  /** @hidden */
  get opened() {
    return !!(this.props.opened !== void 0 ? this.props.opened : this.state.opened);
  }
  /** @hidden */
  get tagsToRender() {
    const { tags: l, textField: t } = this.props, e = [];
    return l === void 0 ? this.value.forEach((o) => {
      e.push({ text: _(o, t), data: [o] });
    }) : e.push(...l), e;
  }
  /**
   * The mobile mode of the MultiSelect.
   */
  get mobileMode() {
    var t;
    return !!(this.state.windowWidth && this.props._adaptiveMode && this.state.windowWidth <= ((t = this.props._adaptiveMode) == null ? void 0 : t.medium) && this.props.adaptive);
  }
  /**
   * Represents the value of the MultiSelect.
   */
  get value() {
    const l = [];
    return this._valueItemsDuringOnChange ? l.push(...this._valueItemsDuringOnChange) : this.props.value ? l.push(...this.props.value) : this.state.value ? l.push(...this.state.value) : this.props.defaultValue && l.push(...this.props.defaultValue), l;
  }
  /**
   * Gets the `name` property of the MultiSelect.
   */
  get name() {
    return this.props.name;
  }
  /**
   * Represents the validity state into which the MultiSelect is set.
   */
  get validity() {
    const l = this.props.validationMessage !== void 0, t = !this.required || this.value !== null && this.value.length > 0 && this.value !== void 0, e = this.props.valid !== void 0 ? this.props.valid : t;
    return {
      customError: l,
      valid: e,
      valueMissing: this.value === null
    };
  }
  /** @hidden */
  get required() {
    return this.props.required !== void 0 ? this.props.required : C.defaultProps.required;
  }
  get validityStyles() {
    return this.props.validityStyles !== void 0 ? this.props.validityStyles : C.defaultProps.validityStyles;
  }
  /** @hidden */
  componentDidUpdate(l, t) {
    var h;
    const { virtual: e, groupField: o = "" } = this.props, s = x(this.props), a = e ? e.skip : 0, i = l.virtual ? l.virtual.total : 0, r = l.opened !== void 0 ? l.opened : t.opened, p = !r && this.opened, d = r && !this.opened, n = this.base.getPopupSettings();
    if (this.validate(this.props), this.base.didUpdate(), !n.animate && d && this.onPopupClosed(), e && e.total !== i)
      this.base.vs.calcScrollElementHeight(), this.base.vs.reset();
    else {
      let { focusedItem: f, focusedIndex: c } = this.getFocusedState();
      o !== "" && (c = (h = this.base.getGroupedDataModernMode(s, o)) == null ? void 0 : h.indexOf(f)), p && e ? this.base.scrollToVirtualItem(e, c - a) : p && !e ? (s && s.length !== 0 && this.base.resetGroupStickyHeader(s[0][o], this), this.base.scrollToItem(c)) : this.opened && r && f && this.scrollToFocused && this.base.scrollToItem(c - a);
    }
    this.scrollToFocused = !1, this.setValidity();
  }
  /** @hidden */
  componentDidMount() {
    var t;
    this.observerResize = z && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this)), this.base.didMount(), this.setValidity(), (t = this.document) != null && t.body && this.observerResize && this.observerResize.observe(this.document.body);
    const l = this.props.name || this.props.id;
    this.knoPaste = nt(this._element, {
      fieldName: l,
      onValueChange: (e) => {
        this.handleknoPasteValue(e);
      }
    });
  }
  /** @hidden */
  componentWillUnmount() {
    var l, t;
    (l = this.document) != null && l.body && this.observerResize && this.observerResize.disconnect(), (t = this.knoPaste) == null || t.unsubscribe();
  }
  /** @hidden */
  onNavigate(l, t, e) {
    const { allowCustom: o } = this.props, s = x(this.props), a = this.props.filter !== void 0 ? this.props.filter : this.state.text, { focusedType: i, focusedIndex: r } = this.getFocusedState(), p = o && a, d = j(i), n = this.base, h = n.vs;
    if (this.opened && t === u.up && d)
      this.state.focusedIndex !== void 0 && (l.data.focusedIndex = void 0);
    else {
      const f = n.navigation.navigate({
        keyCode: t,
        current: r,
        max: (h.enabled ? h.total : s.length) - 1,
        min: p ? -1 : 0,
        skipItems: e || void 0
      });
      f !== void 0 && (this.itemFocus(f, l), this.scrollToFocused = !0);
    }
    this.applyState(l);
  }
  /** @hidden */
  render() {
    const {
      style: l,
      className: t,
      label: e,
      dir: o,
      disabled: s,
      textField: a,
      dataItemKey: i,
      virtual: r,
      size: p,
      rounded: d,
      fillMode: n,
      loading: h,
      filter: f
    } = this.props, { text: c, focused: b, focusedTag: m, currentValue: I } = this.state, y = this.base.vs, L = this.props.id || this._inputId;
    y.enabled = r !== void 0, r !== void 0 && (y.skip = r.skip, y.total = r.total, y.pageSize = r.pageSize);
    const k = this.mobileMode && this.opened ? I : this.tagsToRender;
    this.setItems(this.tagsToRender, this._tags);
    const N = !this.validityStyles || this.validity.valid, Y = V(this), J = !!(f !== void 0 ? f : c) || k && k.length > 0, [Q, X] = $(this.props.prefix || g.Fragment), [Z, tt] = $(this.props.suffix || g.Fragment), R = /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(
      "div",
      {
        ref: this.componentRef,
        className: S("k-multiselect k-input", t, {
          [`k-input-${P[p] || p}`]: p,
          [`k-rounded-${wt[d] || d}`]: d,
          [`k-input-${n}`]: n,
          "k-focus": b && !s,
          "k-invalid": !N,
          "k-disabled": s,
          "k-loading": h,
          "k-required": this.required
        }),
        style: e ? { ...l, width: void 0 } : l,
        dir: o,
        onFocus: (T) => {
          this.mobileMode ? this.handleWrapperClick(T) : this.handleFocus(T);
        },
        onBlur: this.handleBlur,
        onClick: this.handleWrapperClick,
        onMouseDown: It
      },
      this.props.prefix && /* @__PURE__ */ g.createElement(Q, { ...X }),
      /* @__PURE__ */ g.createElement("div", { className: S("k-input-values") }, /* @__PURE__ */ g.createElement(
        "div",
        {
          className: S("k-chip-list", { [`k-chip-list-${P[p] || p}`]: p }),
          role: "listbox",
          "aria-label": Y.toLanguageString(G, q[G]),
          "aria-orientation": "horizontal",
          id: "tagslist-" + this.base.guid
        },
        k && k.length > 0 && /* @__PURE__ */ g.createElement(
          mt,
          {
            tagRender: this.props.tagRender,
            onTagDelete: this.onTagDelete,
            data: k,
            guid: this.base.guid,
            focused: m ? k.find((T) => A(T, m, i)) : void 0,
            size: p
          }
        )
      ), this.renderSearchBar(L)),
      h && /* @__PURE__ */ g.createElement(B, { className: "k-input-loading-icon", name: "loading" }),
      this.props.suffix && /* @__PURE__ */ g.createElement(Z, { ...tt }),
      J && /* @__PURE__ */ g.createElement(xt, { onClick: this.clearButtonClick }),
      !this.mobileMode && this.renderListContainer()
    ), this.mobileMode && this.renderAdaptiveListContainer());
    return e ? /* @__PURE__ */ g.createElement(
      pt,
      {
        label: e,
        editorId: L,
        editorValue: c || _(this.value[0], a),
        editorValid: N,
        editorDisabled: s,
        style: { width: l ? l.width : void 0 },
        children: R
      }
    ) : R;
  }
  renderSearchBar(l) {
    const { activedescendant: t, focusedTag: e, currentValue: o } = this.state, { disabled: s, placeholder: a, ariaDescribedBy: i, ariaLabelledBy: r, ariaLabel: p, inputAttributes: d } = this.props, n = !this.mobileMode && (this.props.filter !== void 0 ? this.props.filter : this.state.text) || "", { focusedIndex: h } = this.getFocusedState(), f = this.value.length === 0 && !n ? a : void 0, c = o && o.length > 0 ? void 0 : a, b = t === w.TagsList && e !== void 0 ? `tag-${this.base.guid}-${e.text.replace(/\s+/g, "-")}` : `k-${this.base.guid}-item-${h + 1}`, m = i ? ` ${i}` : "", I = this.value.length > 0 ? `tagslist-${this.base.guid}${m}` : i, y = {
      accessKey: this.props.accessKey,
      tabIndex: this.props.tabIndex
    };
    return /* @__PURE__ */ g.createElement(
      vt,
      {
        id: l,
        name: this.props.name,
        size: Math.max((f || "").length, n.length, 1),
        placeholder: this.mobileMode && this.opened ? c : f,
        value: n,
        onChange: this.onChangeHandler,
        onKeyDown: this.onInputKeyDown,
        ref: this.searchbarRef,
        disabled: s,
        expanded: this.opened,
        ariaControls: this.base.listBoxId,
        role: "combobox",
        activedescendant: b,
        ariaDescribedBy: I,
        ariaLabelledBy: r,
        ariaRequired: this.required,
        ariaLabel: p,
        ariaAutoComplete: "list",
        inputAttributes: d,
        ...y
      }
    );
  }
  onTagsNavigate(l, t) {
    const e = l.keyCode, { focusedTag: o } = this.state, s = this._tags, a = this.props.dataItemKey;
    let i = o ? s.findIndex((d) => A(d, o, a)) : -1, r;
    const p = i !== -1;
    if (e === u.left)
      p ? i = Math.max(0, i - 1) : i = s.length - 1, r = s[i];
    else if (e === u.right)
      i === s.length - 1 ? r = void 0 : p && (i = Math.min(s.length - 1, i + 1), r = s[i]);
    else if (e === u.home && !l.shiftKey)
      r = s[0];
    else if (e === u.end && !l.shiftKey)
      r = s[s.length - 1];
    else if (e === u.delete) {
      if (p) {
        const d = this.value;
        D(d, s[i].data, a), this.triggerOnChange(d, t);
      }
    } else if (e === u.backspace) {
      const d = this.value;
      if (p)
        D(d, s[i].data, a), this.triggerOnChange(d, t);
      else if (!p && s.length) {
        const n = s.pop();
        D(d, n.data, a), this.triggerOnChange(d, t);
      }
    }
    r !== o && (t.data.focusedTag = r, t.data.activedescendant = w.TagsList), this.applyState(t);
  }
  triggerOnChange(l, t) {
    this.props.value === void 0 && (t.data.value = [...l]), this._valueItemsDuringOnChange = [], this.setItems(l, this._valueItemsDuringOnChange), t.events.push({ type: "onChange" });
  }
  selectFocusedItem(l, t) {
    const { virtual: e } = this.props, o = x(this.props), { focusedIndex: s } = t || this.getFocusedState(), a = e ? e.skip : 0;
    o[s - a] !== void 0 && this.handleItemClick(s, l);
  }
  setItems(l, t) {
    t.length = 0, t.push(...l);
  }
  getFocusedState() {
    const { focusedIndex: l } = this.state, t = this.props.filter !== void 0 ? this.props.filter : this.state.text, {
      allowCustom: e,
      dataItemKey: o,
      virtual: s,
      textField: a,
      focusedItemIndex: i = yt,
      skipDisabledItems: r
    } = this.props, p = x(this.props), d = s && s.skip || 0;
    let n;
    if (l !== void 0)
      return {
        focusedIndex: l,
        focusedItem: p[l - d],
        focusedType: 1
        /* ListItem */
      };
    const h = this.value;
    if (e && t)
      return {
        focusedItem: null,
        focusedIndex: -1,
        focusedType: 2
        /* CustomItem */
      };
    if (t)
      return n = i(p, t, a), {
        focusedItem: p[n],
        focusedIndex: n + d,
        focusedType: 1
        /* ListItem */
      };
    if (h.length) {
      const f = h[h.length - 1];
      return n = p.findIndex((c) => F(c, f, o)), p[n] !== void 0 ? {
        focusedIndex: n + d,
        focusedItem: p[n],
        focusedType: 1
        /* ListItem */
      } : { focusedType: 0, focusedIndex: -1 };
    } else if (r && a && !t && d === 0) {
      const f = p.findIndex((c) => !c.disabled);
      return {
        focusedIndex: f,
        focusedItem: p[f - d],
        focusedType: 1
        /* ListItem */
      };
    }
    return d === 0 ? {
      focusedItem: p[0],
      focusedIndex: 0,
      focusedType: 1
      /* ListItem */
    } : { focusedType: 0, focusedIndex: -1 };
  }
  focusElement(l) {
    this._skipFocusEvent = !0, l.focus(), window.setTimeout(() => this._skipFocusEvent = !1, 0);
  }
  applyState(l) {
    this.base.applyState(l), this._valueItemsDuringOnChange = null;
  }
  calculateMedia(l) {
    for (const t of l)
      this.setState({ windowWidth: t.target.clientWidth });
  }
  /**
   * Updates the state of the MultiSelect when the complex keyboard navigation that
   * includes key combinations with the Ctrl/Command, Shift, Home and End keys
   *
   * @param {Array<string | Object>} dataToSet Defines the array of new values that will be applied to the MultiSelect
   * @param {MultiSelectInternalState} state The current state of the MultiSelect
   */
  updateStateOnKeyboardNavigation(l, t) {
    this.setState({ value: l }), this.triggerOnChange(l, t), this.applyState(t);
  }
  /**
   * Returns the last element that was selected or deselected. Needed for the keyboard navigation specifications
   *
   * @param {number} correction A correction is needed depending on if UP or DOWN key is pressed
   */
  getLastSelectedOrDeselectedIndex(l, t) {
    return this._lastSelectedOrDeslectedItemIndex === null && (this._lastSelectedOrDeslectedItemIndex = t), this._lastSelectedOrDeslectedItemIndex !== null ? this._lastSelectedOrDeslectedItemIndex + l : null;
  }
};
C.displayName = "MultiSelect", C.propTypes = {
  ...E.propTypes,
  autoClose: v.bool,
  value: v.arrayOf(v.any),
  defaultValue: v.arrayOf(v.any),
  dataItemKey: v.string,
  placeholder: v.string,
  tags: v.arrayOf(
    v.shape({
      text: v.string,
      data: v.arrayOf(v.any)
    })
  ),
  tagRender: v.func,
  id: v.string,
  ariaLabelledBy: v.string,
  ariaDescribedBy: v.string,
  groupField: v.string,
  list: v.any,
  adaptive: v.bool,
  adaptiveTitle: v.string,
  adaptiveSubtitle: v.string,
  onCancel: v.func,
  skipDisabledItems: v.bool,
  inputAttributes: v.object
}, C.defaultProps = {
  ...E.defaultProps,
  autoClose: !0,
  required: !1,
  size: void 0,
  rounded: void 0,
  fillMode: void 0,
  skipDisabledItems: !0,
  prefix: void 0,
  suffix: void 0
};
let M = C;
const Ft = et(), Dt = lt(
  dt(
    Ft,
    rt(M)
  )
);
Dt.displayName = "knoReactMultiSelect";
ct(M);
export {
  Dt as MultiSelect,
  Ft as MultiSelectPropsContext,
  M as MultiSelectWithoutContext
};
