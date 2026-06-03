/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as s from "react";
import { Keys as m, classNames as l } from "@progress/kno-react-common";
import { provideLocalizationService as f, registerForLocalization as b } from "@progress/kno-react-intl";
import { clearSelectedFiles as c, messages as d, uploadSelectedFiles as p } from "./messages/index.mjs";
class C extends s.Component {
  constructor() {
    super(...arguments), this._uploadElement = null, this._clearElement = null, this.onClearClick = () => {
      this.props.disabled || this.props.onClear && this.props.onClear.call(void 0);
    }, this.checkEnterKey = (e) => e.keyCode === m.enter, this.onUploadClick = () => {
      this.props.disabled || (this.props.onClick.call(void 0, this.props.uploadButtonIndex), this.props.onUpload && this.props.onUpload.call(void 0));
    };
  }
  componentDidUpdate(e) {
    const { navigationIndex: o, clearButtonIndex: i, uploadButtonIndex: a } = this.props;
    o !== e.navigationIndex && (o === i && this._clearElement && this._clearElement.focus(), o === a && this._uploadElement && this._uploadElement.focus());
  }
  render() {
    const { disabled: e, navigationIndex: o, clearButtonIndex: i, uploadButtonIndex: a, actionsLayout: n } = this.props, r = f(this), u = l("k-actions", "k-hstack", {
      "k-justify-content-start": n === "start",
      "k-justify-content-center": n === "center",
      "k-justify-content-end": n === "end",
      "k-justify-content-stretch": n === "stretched"
    }), k = l(
      "k-button k-button-md k-rounded-md k-button-solid k-button-base",
      "k-clear-selected",
      e ? "k-disabled" : "",
      o === i ? "k-focus" : ""
    ), h = l(
      "k-button k-button-md k-rounded-md k-button-solid k-button-primary",
      "k-primary",
      "k-upload-selected",
      e ? "k-disabled" : "",
      o === a ? "k-focus" : ""
    );
    return /* @__PURE__ */ s.createElement("div", { className: u }, /* @__PURE__ */ s.createElement(
      "button",
      {
        ref: (t) => {
          this._clearElement = t;
        },
        type: "button",
        className: k,
        tabIndex: 0,
        onClick: this.onClearClick,
        onKeyDown: (t) => this.checkEnterKey(t) && this.onClearClick()
      },
      r.toLanguageString(c, d[c])
    ), /* @__PURE__ */ s.createElement(
      "button",
      {
        ref: (t) => {
          this._uploadElement = t;
        },
        type: "button",
        className: h,
        tabIndex: 0,
        onClick: this.onUploadClick,
        onKeyDown: (t) => this.checkEnterKey(t) && this.onUploadClick()
      },
      r.toLanguageString(p, d[p])
    ));
  }
}
b(C);
export {
  C as UploadActionButtons
};
