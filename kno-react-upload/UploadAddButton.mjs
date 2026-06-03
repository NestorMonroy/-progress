/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as n from "react";
import { classNames as h } from "@progress/kno-react-common";
import { provideLocalizationService as f, registerForLocalization as I } from "@progress/kno-react-intl";
import { Button as g } from "@progress/kno-react-buttons";
import { select as l, messages as v } from "./messages/index.mjs";
import { UploadInput as x } from "./UploadInput.mjs";
const _ = (i) => /* @__PURE__ */ n.createElement("span", null, i.message);
class E extends n.Component {
  constructor() {
    super(...arguments), this._element = null, this._uploadInput = null, this.focus = () => {
      this._element && this._element.focus();
    }, this.onClick = () => {
      this.actionElement && this.actionElement.click(), this.props.onClick.call(void 0, this.props.addButtonIndex);
    }, this.onInputMouseDown = (e) => {
      this._element && (e.preventDefault(), this._element.focus());
    };
  }
  get actionElement() {
    if (this._uploadInput)
      return this._uploadInput.actionElement;
  }
  componentDidUpdate(e) {
    const { navigationIndex: o, addButtonIndex: s, notFocusedIndex: t } = this.props;
    o !== e.navigationIndex && e.navigationIndex !== t && o === s && this._element && this._element.focus();
  }
  render() {
    const {
      navigationIndex: e,
      addButtonIndex: o,
      tabIndex: s,
      id: t,
      ariaControls: c,
      disabled: r,
      ariaExpanded: b,
      selectMessageUI: a,
      ...d
    } = this.props, u = f(this).toLanguageString(l, v[l]), p = a || _;
    return /* @__PURE__ */ n.createElement("div", { className: "k-upload-button-wrap" }, /* @__PURE__ */ n.createElement(
      g,
      {
        type: "button",
        id: t ? `${t}-select-button` : "select-button",
        className: h("k-upload-button", e === o ? "k-focus" : ""),
        tabIndex: s,
        onClick: this.onClick,
        "aria-controls": c || void 0,
        "aria-disabled": r || void 0
      },
      /* @__PURE__ */ n.createElement(p, { message: u })
    ), /* @__PURE__ */ n.createElement(
      x,
      {
        id: t ? `${t}-files` : "files",
        ...d,
        onMouseDown: this.onInputMouseDown,
        ref: (m) => {
          this._uploadInput = m;
        }
      }
    ));
  }
}
I(E);
export {
  E as UploadAddButton
};
