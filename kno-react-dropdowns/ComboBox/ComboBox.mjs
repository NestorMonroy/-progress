/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as c from "react";
import m from "prop-types";
import P from "../common/DropDownBase.mjs";
import { createPropsContext as it, classNames as S, uComboBox as F, Keys as x, validatePackage as ot, getLicenseMessage as at, svgIconPropType as nt, canUseDOM as H, subscribeToknoPaste as lt, IconWrap as rt, WatermarkOverlay as pt, withIdHOC as dt, withPropsContext as ht, withUnstyledHOC as ct, withAdaptiveModeContext as ut } from "@progress/kno-react-common";
import { FloatingLabel as gt } from "@progress/kno-react-labels";
import { getPlainDataDuplicates as mt, getItemIndexByText as L, getFilteredData as I, areSame as w, getItemValue as D, isPresent as k, itemIndexStartsWith as N, suggestValue as ft } from "../common/utils.mjs";
import vt from "../common/SearchBar.mjs";
import bt from "../common/ListContainer.mjs";
import xt from "../common/List.mjs";
import It from "../common/ListFilter.mjs";
import q from "../common/GroupStickyHeader.mjs";
import { packageMetadata as W } from "../package-metadata.mjs";
import yt from "../common/ClearButton.mjs";
import { Button as Ct } from "@progress/kno-react-buttons";
import { chevronDownIcon as St } from "@progress/kno-svg-icons";
import { comboArrowBtnAriaLabelExpand as G, messages as R, comboArrowBtnAriaLabelCollapse as U, listAriaLabel as j } from "../messages/index.mjs";
import { provideLocalizationService as $ } from "@progress/kno-react-intl";
import { ActionSheetContent as Ft } from "@progress/kno-react-layout";
import Y from "../common/withCustomComponent.mjs";
import { AdaptiveMode as kt } from "../common/AdaptiveMode.mjs";
const Dt = "Please enter a valid value!", E = class E extends c.Component {
  constructor(s) {
    super(s), this.state = {}, this.base = new P(this), this._element = null, this._suggested = "", this._skipBlur = !1, this._input = null, this._adaptiveFilterInput = null, this._skipFocus = !1, this.itemHeight = 0, this.duplicates = [], this.hasDuplicates = !1, this.scrollToFocused = !1, this.showLicenseWatermark = !1, this.focus = () => {
      this._input && this._input.focus();
    }, this.checkForDuplicatePlainTextRecords = () => {
      const t = this.props.textField !== void 0, e = this.props.dataItemKey !== void 0;
      if (this.props.data && this.props.data.length > 0 && !t && !e) {
        const a = this.props.data;
        this.duplicates = mt(a), this.hasDuplicates = this.duplicates.length > 0;
      }
    }, this.handleknoPasteValue = (t) => {
      const { data: e, textField: a, allowCustom: r } = this.props;
      if (!e)
        return;
      const l = t != null ? String(t) : "", o = L(e, l, a, !1, !0), p = o !== -1;
      let n = null;
      if (p ? n = e[o] : r && (n = a ? { [a]: l } : l), n === null)
        return;
      const i = this.base.initState();
      i.syntheticEvent = {
        target: this._element,
        currentTarget: this._element,
        nativeEvent: new Event("change", { bubbles: !0 })
      }, this.state.text !== void 0 && (i.data.text = void 0), this.triggerOnChange(n, i), this.applyState(i);
    }, this.handleItemSelect = (t, e) => {
      const { virtual: a, dataItemKey: r } = this.props, l = I(this.props), o = a ? a.skip : 0, p = l[t - o], n = this.hasDuplicates || !w(p, this.value, r);
      this.triggerOnChange(p, e), this.state.text !== void 0 && (e.data.text = void 0), n && this.base.triggerPageChangeCornerItems(p, e);
    }, this.onPopupOpened = () => {
      setTimeout(() => {
        this.mobileMode && this._adaptiveFilterInput && (this._skipBlur = !0, this._adaptiveFilterInput.focus(), this._skipBlur = !1);
      }, 300);
    }, this.componentRef = (t) => {
      this._element = t, this.base.wrapper = t;
    }, this.toggleBtnClick = (t) => {
      this._skipFocus = !0;
      const { skipDisabledItems: e, textField: a } = this.props, r = I(this.props), l = this.getFocusedIndex(), o = this.getCurrentValueDisabledStatus(a, r, l), p = this.props.opened !== void 0 ? this.props.opened : this.state.opened, n = this.base.initState();
      if (n.syntheticEvent = t, !e && a && o && this.clearValueOnToggleBtnClick(t), this.base.togglePopup(n), !p && this.mobileMode) {
        const i = this.props.adaptiveFilter !== void 0 ? this.props.adaptiveFilter : this.state.text || null;
        this.base.filterChanged(i, n);
      }
      this.applyState(n), setTimeout(() => {
        this._skipFocus = !1;
      }, 300);
    }, this.closeOpenedApplyStateNonMobileMode = (t, e) => {
      e && !this.mobileMode && this.base.togglePopup(t);
    }, this.renderMobileListFilter = () => {
      const t = this.props.adaptiveFilter !== void 0 ? this.props.adaptiveFilter : this.state.text, e = D(this.value, this.props.textField), a = k(t) ? t : e;
      return /* @__PURE__ */ c.createElement(
        It,
        {
          value: a,
          ref: (r) => {
            this._adaptiveFilterInput = r && r.element;
          },
          onChange: this.handleMobileFilterChange,
          onKeyDown: this.onInputKeyDown,
          size: "large",
          rounded: this.props.rounded,
          fillMode: this.props.fillMode,
          placeholder: this.props.placeholder
        }
      );
    }, this.listContainerContent = () => {
      const { header: t, footer: e, size: a, groupStickyHeaderItemRender: r, groupField: l, list: o, unstyled: p, virtual: n } = this.props, i = I(this.props), d = p && p.uComboBox;
      let { group: h } = this.state;
      return h === void 0 && l !== void 0 && (h = D(i[0], l)), /* @__PURE__ */ c.createElement(
        "div",
        {
          className: S(
            F.list({
              c: d,
              list: o,
              size: "large",
              tableSize: a,
              virtual: n
            })
          )
        },
        t && /* @__PURE__ */ c.createElement("div", { className: S(F.listHeader({ c: d })) }, t),
        !o && h && i.length !== 0 && /* @__PURE__ */ c.createElement(q, { group: h, render: r }),
        this.renderList(),
        e && /* @__PURE__ */ c.createElement(
          "div",
          {
            className: S(F.listFooter({ c: d }), this.props.footerClassName)
          },
          e
        )
      );
    }, this.handleMobileFilterChange = (t) => {
      const e = this.base.initState();
      e.syntheticEvent = t.syntheticEvent, e.data.text = t.target.value, this.base.filterChanged(t.target.value, e), this.applyState(e);
    }, this.onScroll = (t) => {
      const { vs: e, list: a } = this.base;
      e.scrollHandler(t);
      const { groupField: r } = this.props;
      this.props.onListScroll && this.props.onListScroll(t);
      let l = I(this.props);
      if (!r || !l.length)
        return;
      const o = this.itemHeight = this.itemHeight || (e.enabled ? e.itemHeight : a ? a.children[0].offsetHeight : 0), n = t.target.scrollTop - e.skip * o;
      l = this.base.getGroupedDataModernMode(l, r);
      let i = l[0][r];
      for (let d = 1; d < l.length && !(o * d > n); d++)
        l[d] && l[d][r] && (i = l[d][r]);
      i !== this.state.group && (this.setState({
        group: i
      }), this.props.onGroupScroll && this.props.onGroupScroll.call(void 0, { group: i }));
    }, this.handleItemClick = (t, e) => {
      this.navigationIndex = t, this.base.handleItemClick(t, e), this._valueDuringOnChange = void 0;
    }, this.handleBlur = (t) => {
      if (this.state.focused && !this._skipBlur) {
        const e = this.base.initState(), { textField: a } = this.props, r = I(this.props), l = this.getFocusedIndex(), p = !(l === -1) && this.getCurrentValueDisabledStatus(a, r, l);
        e.data.focused = !1, e.events.push({ type: "onBlur" }), e.syntheticEvent = t, a && p && this.clearValueOnBlur(t), this.applyValueOnRejectSuggestions(t.currentTarget.value, e);
      }
    }, this.onInputClick = (t) => {
      const e = this.props.opened !== void 0 ? this.props.opened : this.state.opened, a = this.props.adaptiveFilter !== void 0 ? this.props.adaptiveFilter : this.state.text || null;
      if (!e && this.mobileMode) {
        const r = this.base.initState();
        r.syntheticEvent = t, this.base.togglePopup(r), this.base.filterChanged(a, r), this.applyState(r);
      }
    }, this.onInputKeyDown = (t) => {
      const { skipDisabledItems: e, textField: a, dataItemKey: r, groupField: l } = this.props, o = I(this.props), p = this.value, n = Math.max(
        0,
        o.findIndex((g) => w(g, p, r))
      ), i = t.keyCode, d = this.props.opened !== void 0 ? this.props.opened : this.state.opened, h = this.base.initState();
      if (h.syntheticEvent = t, !t.altKey && (i === x.up || i === x.down)) {
        if (t.preventDefault(), l !== "" && a)
          if (!this.props.skipDisabledItems && d)
            this.onNavigate(h, i);
          else {
            let g = 0;
            if (i === x.down || i === x.right) {
              const u = o.slice(n + 1 < o.length ? n + 1 : n).find((C) => !C.disabled);
              g = u && o.indexOf(u);
            } else if (i === x.up || i === x.left) {
              let u;
              if (n === 0)
                u = o, g = o.findIndex((C) => !C.disabled);
              else {
                u = o.slice(0, n);
                let C = u.pop();
                for (; C && C.disabled; )
                  C = u.pop();
                g = C && o.indexOf(C);
              }
            }
            if (g !== void 0) {
              const u = g - n;
              this.onNavigate(h, i, u);
            } else g === void 0 && n === o.length - 1 && this.onNavigate(h, i);
          }
        else if (!this.props.skipDisabledItems && d)
          this.onNavigate(h, i);
        else {
          let g = null;
          if (i === x.down || i === x.right)
            g = o.slice(n + 1).find((u) => !u.disabled);
          else if (i === x.up || i === x.left) {
            const u = o.slice(0, n);
            for (g = u.pop(); g && g.disabled; )
              g = u.pop();
          }
          if (g) {
            const u = g.id - n - 1;
            this.onNavigate(h, i, u);
          } else
            this.onNavigate(h, i);
        }
        this.applyState(h);
      }
      const f = () => {
        t.preventDefault(), this.base.togglePopup(h), this.applyState(h);
      }, b = this.getFocusedIndex(), y = b === -1, v = !y && this.getCurrentValueDisabledStatus(a, o, b);
      d ? i === x.pageUp ? (t.preventDefault(), this.base.scrollPopupByPageSize(-1)) : i === x.pageDown ? (t.preventDefault(), this.base.scrollPopupByPageSize(1)) : t.altKey && i === x.up ? f() : i === x.enter ? (t.preventDefault(), (a && !y && t.currentTarget.value ? o[b][a] : void 0) ? !e && a && v ? this.clearValueOnEnterOrEsc(t) : v || this.applyValueOnEnter(t.currentTarget.value, h) : this.applyValueOnEnter(t.currentTarget.value, h)) : i === x.esc && (!e && a && v && this.clearValueOnEnterOrEsc(t), this.applyValueOnRejectSuggestions(t.currentTarget.value, h)) : !d && i === x.esc ? this.clearValueOnEnterOrEsc(t) : t.altKey && i === x.down && f();
    }, this.inputOnChange = (t) => {
      const e = this.base.initState();
      e.syntheticEvent = t;
      const a = this.props.opened !== void 0 ? this.props.opened : this.state.opened, r = t.currentTarget, l = r.value;
      if (this.props.suggest) {
        const o = r.selectionEnd === l.length;
        let p = this.props.filter !== void 0 ? this.props.filter : this.state.text;
        k(p) || (p = D(this.value, this.props.textField) || "");
        const n = p && p === l, i = p && p.length > l.length;
        n || i || !o ? this._suggested = "" : this.suggestValue(l);
      }
      this.props.filter === void 0 && (e.data.text = l), this.state.focusedItem !== void 0 && (e.data.focusedItem = void 0), a ? this.scrollToFocused = !0 : this.base.togglePopup(e), this.base.filterChanged(l, e), this.applyState(e), this.setState({ group: void 0 });
    }, this.clearButtonClick = (t) => {
      const e = this.base.initState();
      e.syntheticEvent = t, t.stopPropagation(), this.clearValue();
    }, this.clearValueOnEnterOrEsc = (t) => {
      const e = this.base.initState();
      e.syntheticEvent = t, t.stopPropagation(), this.clearValue();
    }, this.clearValueOnBlur = (t) => {
      const e = this.base.initState();
      e.syntheticEvent = t, t.stopPropagation(), this.clearValue();
    }, this.clearValueOnToggleBtnClick = (t) => {
      const e = this.base.initState();
      e.syntheticEvent = t, t.stopPropagation(), this.clearValue();
    }, this.setValidity = () => {
      this._input && this._input.setCustomValidity && this._input.setCustomValidity(
        this.validity.valid ? "" : this.props.validationMessage || Dt
      );
    }, this.handleFocus = (t) => {
      if (this._skipFocus)
        return;
      const e = this.base.initState();
      e.syntheticEvent = t, this.mobileMode && !this._skipFocus && (this._skipFocus = !0, this.base.togglePopup(e), this.applyState(e), setTimeout(() => {
        this._skipFocus = !1;
      }, 300)), this.base.handleFocus(t);
    }, this.showLicenseWatermark = !ot(W, { component: "ComboBox" }), this.licenseMessage = at(W);
  }
  get _inputId() {
    return this.props.id;
  }
  get document() {
    if (H)
      return this.element && this.element.ownerDocument || document;
  }
  /** @hidden */
  get element() {
    return this._element;
  }
  /**
   * The mobile mode of the ComboBox.
   */
  get mobileMode() {
    var t;
    return !!(this.state.windowWidth && this.props._adaptiveMode && this.state.windowWidth <= ((t = this.props._adaptiveMode) == null ? void 0 : t.medium) && this.props.adaptive);
  }
  /**
   * The value of the ComboBox.
   */
  get value() {
    if (this._valueDuringOnChange !== void 0)
      return this._valueDuringOnChange;
    if (this.props.value !== void 0)
      return this.props.value;
    if (this.state.value !== void 0)
      return this.state.value;
    if (this.props.defaultValue !== void 0)
      return this.props.defaultValue;
  }
  /**
   * The index of the selected item.
   */
  get index() {
    const { dataItemKey: s } = this.props, t = I(this.props), e = this.value;
    return t.findIndex((a) => w(a, e, s));
  }
  /**
   * Gets the `name` property of the ComboBox.
   */
  get name() {
    return this.props.name;
  }
  /**
   * Represents the validity state into which the component is set.
   */
  get validity() {
    const s = this.props.validationMessage !== void 0, t = !this.required || this.value !== null && this.value !== "" && this.value !== void 0, e = this.props.valid !== void 0 ? this.props.valid : t;
    return {
      customError: s,
      valid: e,
      valueMissing: this.value === null
    };
  }
  get validityStyles() {
    return this.props.validityStyles !== void 0 ? this.props.validityStyles : E.defaultProps.validityStyles;
  }
  /** @hidden */
  get required() {
    return this.props.required !== void 0 ? this.props.required : E.defaultProps.required;
  }
  /** @hidden */
  componentDidUpdate(s, t) {
    var f, b;
    const { dataItemKey: e, virtual: a, groupField: r = "", textField: l } = this.props, o = I(this.props), p = s.virtual ? s.virtual.total : 0, n = this.props.opened !== void 0 ? this.props.opened : this.state.opened, i = s.opened !== void 0 ? s.opened : t.opened;
    s.data !== o && this.checkForDuplicatePlainTextRecords();
    const d = !i && n, h = this.value;
    if (this._valueOnDidUpdate = h, this.base.didUpdate(), a && a.total !== p)
      this.base.vs.calcScrollElementHeight(), this.base.vs.reset();
    else {
      const y = s.value !== void 0 ? s.value : t.value;
      let v = this.hasDuplicates ? this.navigationIndex || 0 : o.findIndex((u) => w(u, h, e));
      l && h && (v = (f = this.base.getGroupedDataModernMode(o, r)) == null ? void 0 : f.map((u) => u[l]).indexOf(h[l]));
      const g = !w(y, h, e);
      if (d && a ? this.base.scrollToVirtualItem(a, v) : d && !a ? (this.onPopupOpened(), o && o.length !== 0 && this.base.resetGroupStickyHeader(o[0][r], this), this.base.scrollToItem(v)) : (this.hasDuplicates || n && i && h && g) && this.base.scrollToItem(v), n && i && this.scrollToFocused) {
        const u = (b = this.props.filter ? this.props.filter : this.state.text) != null ? b : "";
        if (u) {
          const { focusedItemIndex: C = N } = this.props, M = C(o, u, l);
          this.base.scrollToItem(M);
        } else
          this.base.scrollToItem(0);
      }
    }
    this.scrollToFocused = !1, d && this._input && this._input.focus(), this.setValidity();
  }
  /** @hidden */
  componentDidMount() {
    var t;
    this.observerResize = H && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this)), this.base.didMount(), this.setValidity(), (t = this.document) != null && t.body && this.observerResize && this.observerResize.observe(this.document.body), this.checkForDuplicatePlainTextRecords();
    const s = this.props.name || this.props.id;
    this.knoPaste = lt(this._element, {
      fieldName: s,
      onValueChange: (e) => {
        this.handleknoPasteValue(e);
      }
    });
  }
  /** @hidden */
  componentWillUnmount() {
    var s, t;
    (s = this.document) != null && s.body && this.observerResize && this.observerResize.disconnect(), (t = this.knoPaste) == null || t.unsubscribe();
  }
  /** @hidden */
  render() {
    const s = $(this), t = s.toLanguageString(
      G,
      R[G]
    ), e = s.toLanguageString(
      U,
      R[U]
    ), {
      dir: a,
      disabled: r,
      clearButton: l = E.defaultProps.clearButton,
      label: o,
      textField: p,
      className: n,
      style: i,
      loading: d,
      iconClassName: h,
      virtual: f,
      size: b,
      rounded: y,
      fillMode: v,
      opened: g = this.state.opened,
      placeholder: u,
      svgIcon: C,
      unstyled: M
    } = this.props, T = !this.validityStyles || this.validity.valid, O = this.props.filter !== void 0 ? this.props.filter : this.state.text, J = D(this.value, p), B = k(O) ? O : J, Q = l && (!!B || k(this.value)), V = this.base.vs, z = this.props.id || this._inputId, _ = M && M.uComboBox;
    V.enabled = f !== void 0, f !== void 0 && (V.skip = f.skip, V.total = f.total, V.pageSize = f.pageSize);
    const [X, Z] = Y(this.props.prefix || c.Fragment), [tt, et] = Y(this.props.suffix || c.Fragment), A = /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(
      "span",
      {
        className: S(
          F.wrapper({
            c: _,
            size: b,
            rounded: y,
            fillMode: v,
            disabled: r,
            invalid: !T,
            loading: d,
            required: this.required
          }),
          n
        ),
        ref: this.componentRef,
        style: o ? { ...i, width: void 0 } : i,
        dir: a,
        onFocus: this.handleFocus
      },
      this.props.prefix && /* @__PURE__ */ c.createElement(X, { ...Z }),
      this.renderSearchBar(B || "", z, u),
      Q && !d && /* @__PURE__ */ c.createElement(yt, { onClick: this.clearButtonClick, key: "clearbutton" }),
      d && /* @__PURE__ */ c.createElement(
        rt,
        {
          className: S(F.loadingIcon({ c: _ })),
          name: "loading",
          key: "loading"
        }
      ),
      this.props.suffix && /* @__PURE__ */ c.createElement(tt, { ...et }),
      /* @__PURE__ */ c.createElement(
        Ct,
        {
          tabIndex: -1,
          type: "button",
          "aria-label": g ? e : t,
          svgIcon: C || (h ? void 0 : St),
          iconClass: h,
          size: b,
          fillMode: v,
          className: S(F.inputButton({ c: _ })),
          onClick: this.toggleBtnClick,
          onMouseDown: (st) => st.preventDefault()
        }
      ),
      !this.mobileMode && this.renderListContainer()
    ), this.mobileMode && this.renderAdaptiveListContainer());
    return o ? /* @__PURE__ */ c.createElement(
      gt,
      {
        label: o,
        editorId: z,
        editorValue: B,
        editorValid: T,
        editorDisabled: r,
        style: { width: i ? i.width : void 0 },
        children: A,
        unstyled: M
      }
    ) : A;
  }
  /** @hidden */
  onNavigate(s, t, e) {
    const { virtual: a = { skip: 0 } } = this.props, r = I(this.props), l = this.props.filter ? this.props.filter : this.state.text;
    let o = -1, p;
    const n = this.base.vs, i = this.value;
    this._suggested = "";
    const d = this.hasDuplicates && this.duplicates.indexOf(i) !== -1;
    if (o = this.getFocusedIndex(d), o !== -1 && !k(i))
      this.handleItemSelect(o, s);
    else if (l === "")
      this.handleItemSelect(0, s);
    else {
      const h = a.skip + o;
      p = this.base.navigation.navigate({
        keyCode: t,
        current: h,
        max: (n.enabled ? n.total : r.length) - 1,
        min: 0,
        skipItems: e || void 0
      }), p !== void 0 && this.handleItemSelect(p, s);
    }
    this.navigationIndex = p;
  }
  getCurrentValueDisabledStatus(s, t, e) {
    return s && t && t[e] && t[e].disabled;
  }
  applyValueOnEnter(s, t) {
    const { textField: e, allowCustom: a, ignoreCase: r } = this.props, l = I(this.props), o = this.props.opened !== void 0 ? this.props.opened : this.state.opened, n = D(this.value, e) === s ? this.index : L(l, s, e, !1, r), i = n !== -1;
    let d;
    if (this._suggested = "", i)
      d = l[n];
    else if (a)
      d = e !== void 0 ? { [e]: s } : s;
    else
      return this.selectFocusedItem(s, t);
    this.triggerOnChange(d, t), o && this.base.togglePopup(t), this.props.filter === void 0 && this.state.text !== void 0 && (t.data.text = void 0), this.applyState(t);
  }
  applyValueOnRejectSuggestions(s, t) {
    const { textField: e, allowCustom: a, ignoreCase: r } = this.props, l = I(this.props), o = this.props.opened !== void 0 ? this.props.opened : this.state.opened, p = D(this.value, e);
    if (this._suggested = "", s === p || s === "" && !k(p))
      return this.closeOpenedApplyStateNonMobileMode(t, o), this.applyState(t);
    const n = L(l, s, e, !0, r), i = n !== -1;
    let d = null;
    i ? d = l[n] : a && (d = s ? e ? { [e]: s } : s : null), this.triggerOnChange(d, t), this.state.text !== void 0 && (t.data.text = void 0, this.base.filterChanged("", t)), this.closeOpenedApplyStateNonMobileMode(t, o), this.applyState(t);
  }
  selectFocusedItem(s, t) {
    const e = this.props.opened !== void 0 ? this.props.opened : this.state.opened, { textField: a, virtual: r = { skip: 0 }, focusedItemIndex: l = N } = this.props, o = I(this.props), p = r.skip, n = s === "" && p === 0 ? 0 : l(o, s, a);
    return n !== -1 ? this.handleItemSelect(n + p, t) : (this.triggerOnChange(null, t), this.state.text !== void 0 && (t.data.text = void 0)), e && this.base.togglePopup(t), this.applyState(t);
  }
  renderAdaptiveListContainer() {
    const { windowWidth: s = 0 } = this.state, { groupField: t, adaptiveTitle: e = this.props.label, adaptiveSubtitle: a } = this.props, r = I(this.props), l = this.props.opened !== void 0 ? this.props.opened : this.state.opened;
    let { group: o } = this.state;
    o === void 0 && t !== void 0 && (o = D(r[0], t));
    const p = {
      title: e || this.props.label,
      subTitle: a,
      expand: l,
      onClose: (n) => this.toggleBtnClick(n),
      windowWidth: s,
      mobileFilter: this.renderMobileListFilter()
    };
    return /* @__PURE__ */ c.createElement(kt, { ...p }, /* @__PURE__ */ c.createElement(Ft, null, /* @__PURE__ */ c.createElement("div", { className: "k-list-container" }, this.listContainerContent())));
  }
  renderListContainer() {
    const s = this.base, { dir: t, header: e, footer: a, groupField: r, size: l, list: o, virtual: p, groupStickyHeaderItemRender: n, unstyled: i } = this.props, d = I(this.props), h = this.props.opened !== void 0 ? this.props.opened : this.state.opened, f = s.getPopupSettings(), b = f.width !== void 0 ? f.width : s.popupWidth, y = i && i.uComboBox;
    let { group: v } = this.state;
    return v === void 0 && r !== void 0 && (v = D(d[0], r)), /* @__PURE__ */ c.createElement(
      bt,
      {
        width: b,
        popupSettings: {
          ...f,
          anchor: f.anchor || this.element,
          show: h,
          popupClass: S(
            f.popupClass,
            F.listContainer({
              c: y,
              popup: !0
            })
          )
        },
        dir: t !== void 0 ? t : this.base.dirCalculated,
        itemsCount: [d.length]
      },
      /* @__PURE__ */ c.createElement(
        "div",
        {
          className: S(
            F.list({
              c: y,
              list: o,
              size: l,
              tableSize: l,
              virtual: p
            })
          )
        },
        e && /* @__PURE__ */ c.createElement("div", { className: S(F.listHeader({ c: y })) }, e),
        !o && v && d.length !== 0 && /* @__PURE__ */ c.createElement(q, { group: v, render: n }),
        this.renderList(),
        a && /* @__PURE__ */ c.createElement(
          "div",
          {
            className: S(
              F.listFooter({ c: y }),
              this.props.footerClassName
            )
          },
          a
        )
      ),
      this.showLicenseWatermark && /* @__PURE__ */ c.createElement(pt, { message: this.licenseMessage })
    );
  }
  renderList() {
    const s = this.base, t = $(this), {
      textField: e,
      dataItemKey: a,
      listNoDataRender: r,
      itemRender: l,
      groupHeaderItemRender: o,
      virtual: p = { skip: 0, total: void 0 },
      unstyled: n
    } = this.props, i = I(this.props), d = s.getPopupSettings(), h = s.vs, f = p.skip, b = this.props.opened !== void 0 ? this.props.opened : this.state.opened, y = `translateY(${h.translate}px)`, v = b ? this.getFocusedIndex(this.hasDuplicates) : void 0, g = this.props.filter !== void 0 ? this.props.filter : this.state.text, u = D(this.value, e), C = k(g) && g !== u ? null : this.value, M = this.props.list || xt, T = n && n.uComboBox;
    return /* @__PURE__ */ c.createElement(
      M,
      {
        id: s.listBoxId,
        virtual: !!p,
        show: b,
        data: i,
        focusedIndex: v,
        value: C,
        textField: e,
        valueField: a,
        groupField: this.props.groupField,
        isMultiColumn: this.props.isMultiColumn,
        optionsGuid: s.guid,
        hasDuplicates: this.hasDuplicates,
        ariaLabel: t.toLanguageString(j, R[j]),
        listRef: (O) => {
          h.list = this.base.list = O, this.itemHeight = 0;
        },
        wrapperStyle: this.mobileMode ? {} : { maxHeight: d.height },
        wrapperCssClass: S(
          F.listContent({
            c: T,
            virtual: p
          })
        ),
        listStyle: h.enabled ? { transform: y } : void 0,
        key: "listkey",
        skip: f,
        onClick: this.handleItemClick,
        itemRender: l,
        groupHeaderItemRender: o,
        noDataRender: r,
        onMouseDown: (O) => O.preventDefault(),
        onScroll: this.onScroll,
        wrapperRef: h.scrollerRef,
        scroller: this.base.renderScrollElement(),
        ariaSetSize: p.total
      }
    );
  }
  renderSearchBar(s, t, e) {
    const {
      tabIndex: a,
      accessKey: r,
      disabled: l,
      title: o,
      ariaLabelledBy: p,
      ariaDescribedBy: n,
      dataItemKey: i,
      virtual: d = { skip: 0 },
      unstyled: h,
      inputAttributes: f
    } = this.props;
    I(this.props);
    const b = this.props.opened !== void 0 ? this.props.opened : this.state.opened, y = b ? this.getFocusedIndex(this.hasDuplicates) : -1;
    return this._suggested && !w(this._valueOnDidUpdate, this.value, i) && (this._suggested = ""), /* @__PURE__ */ c.createElement(
      vt,
      {
        id: t,
        readOnly: b && this.mobileMode,
        placeholder: e,
        tabIndex: a,
        accessKey: r,
        title: o,
        value: s + this._suggested,
        suggestedText: this._suggested,
        ref: (v) => {
          this._input = v && v.input;
        },
        onClick: this.onInputClick,
        onKeyDown: this.onInputKeyDown,
        onChange: this.inputOnChange,
        onFocus: this.base.handleFocus,
        onBlur: this.handleBlur,
        disabled: l,
        expanded: b,
        owns: this.base.listBoxId,
        activedescendant: b && y >= 0 ? `k-${this.base.guid}-item-${y + d.skip + 1}` : void 0,
        role: "combobox",
        ariaLabelledBy: p,
        ariaLabel: this.props.ariaLabel,
        ariaDescribedBy: n,
        ariaRequired: this.required,
        render: this.props.valueRender,
        ariaControls: b ? this.base.listBoxId : void 0,
        unstyled: h,
        inputAttributes: f
      }
    );
  }
  clearValue() {
    const s = this.base.initState();
    this._suggested = "", this.navigationIndex = void 0, this.base.filterChanged("", s), this.props.filter === void 0 && this.state.text !== void 0 && (s.data.text = void 0), this.triggerOnChange(null, s);
    const t = this.props.opened !== void 0 ? this.props.opened : this.state.opened, e = this.mobileMode;
    t && !e && this.base.togglePopup(s), this.applyState(s);
  }
  triggerOnChange(s, t) {
    const e = this.value;
    !this.hasDuplicates && (!k(e) && !k(s) || w(e, s, this.props.dataItemKey)) || (this.props.value === void 0 && (t.data.value = s), this._valueDuringOnChange = s, t.events.push({ type: "onChange" }));
  }
  getFocusedIndex(s) {
    const t = this.value, {
      textField: e,
      dataItemKey: a,
      virtual: r = { skip: 0 },
      focusedItemIndex: l = N,
      skipDisabledItems: o
    } = this.props, p = I(this.props), n = this.props.filter ? this.props.filter : this.state.text;
    return s && this.navigationIndex !== void 0 ? this.navigationIndex : k(t) && n === void 0 ? p.findIndex((i) => w(i, t, a)) : n ? l(p, n, e) : o && e && !n && r.skip === 0 ? p.findIndex((i) => !i.disabled) : r.skip === 0 ? 0 : -1;
  }
  suggestValue(s) {
    const { data: t, textField: e } = this.props;
    this._suggested = ft(s, t, e);
  }
  applyState(s) {
    this.base.applyState(s), this._valueDuringOnChange = void 0;
  }
  calculateMedia(s) {
    for (const t of s)
      this.setState({ windowWidth: t.target.clientWidth });
  }
};
E.displayName = "ComboBox", E.propTypes = {
  ...P.propTypes,
  size: m.oneOf(["small", "medium", "large"]),
  rounded: m.oneOf(["small", "medium", "large", "full", "none"]),
  fillMode: m.oneOf(["solid", "flat", "outline"]),
  dataItemKey: m.string,
  groupField: m.string,
  isMultiColumn: m.bool,
  suggest: m.bool,
  placeholder: m.string,
  title: m.string,
  allowCustom: m.bool,
  ignoreCase: m.bool,
  clearButton: m.bool,
  iconClassName: m.string,
  svgIcon: nt,
  validationMessage: m.string,
  required: m.bool,
  id: m.string,
  ariaLabelledBy: m.string,
  ariaLabel: m.string,
  ariaDescribedBy: m.string,
  list: m.any,
  valueRender: m.func,
  skipDisabledItems: m.bool,
  inputAttributes: m.object
}, E.defaultProps = {
  ...P.defaultProps,
  size: void 0,
  rounded: void 0,
  fillMode: void 0,
  allowCustom: !1,
  ignoreCase: !1,
  clearButton: !0,
  required: !1,
  isMultiColumn: !1,
  skipDisabledItems: !0,
  prefix: void 0,
  suffix: void 0
};
let K = E;
const wt = it(), Et = dt(
  ht(
    wt,
    ct(
      ut(K)
    )
  )
);
Et.displayName = "knoReactComboBox";
export {
  Et as ComboBox,
  wt as ComboBoxPropsContext,
  K as ComboBoxWithoutContext
};
