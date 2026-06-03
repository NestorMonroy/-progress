/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { provideLocalizationService as g, registerForLocalization as f } from "@progress/kno-react-intl";
import * as o from "react";
import { selectTitle as b, selectNoFilesTitle as w, messages as n, select as a } from "./messages/index.mjs";
const y = /(chrome)[ \/]([\w.]+)/i, A = /(webkit)[ \/]([\w.]+)/i;
class E extends o.Component {
  constructor() {
    super(...arguments), this._input = null, this.onMouseDown = (t) => {
      this.props.onMouseDown && this.props.onMouseDown(t);
    }, this.onAdd = () => {
      const t = navigator.userAgent, e = this._input;
      e && (this.props.onAdd && e.files && this.props.onAdd.call(void 0, e.files), !t.match(y) && t.match(A) || (e.type = "", e.type = "file"));
    };
  }
  get actionElement() {
    return this._input;
  }
  render() {
    const { multiple: t, async: e, disabled: r, accept: l, hasFiles: c, ariaLabelledBy: p, ariaDescribedBy: d, id: u } = this.props, i = g(this), s = c ? b : w, h = i.toLanguageString(s, n[s]);
    return i.toLanguageString(a, n[a]), /* @__PURE__ */ o.createElement(
      "input",
      {
        id: u,
        ref: (m) => {
          this._input = m;
        },
        className: "k-hidden",
        autoComplete: "off",
        name: e.saveField,
        accept: l,
        type: "file",
        multiple: t,
        disabled: r,
        onChange: this.onAdd,
        onMouseDown: this.onMouseDown,
        title: h,
        tabIndex: -1,
        "data-testid": "upload-input-testid",
        "aria-labelledby": p,
        "aria-describedby": d,
        "aria-hidden": !0
      }
    );
  }
}
f(E);
export {
  E as UploadInput
};
