/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as s from "react";
import { Button as l } from "@progress/kno-react-buttons";
import { FindAndReplaceDialog as c } from "../dialogs/FindReplace.mjs";
import { onDownPreventDefault as d } from "./utils.mjs";
import { messages as m } from "../messages/index.mjs";
import { EditorToolsSettings as p } from "../config/toolsSettings.mjs";
import { provideLocalizationService as g, registerForLocalization as h } from "@progress/kno-react-intl";
import { classNames as f } from "@progress/kno-react-common";
const n = p.findAndReplace;
let u = class extends s.Component {
  constructor() {
    super(...arguments), this.state = { showDialog: !1 }, this.onClose = () => this.setState({ showDialog: !1 }), this.onOpen = () => this.setState({ showDialog: !0 });
  }
  /**
   * @hidden
   */
  render() {
    const { view: e, ...o } = this.props, { props: i } = n, r = g(this), a = n.messages.findReplaceToolTitle, t = !e;
    return [
      /* @__PURE__ */ s.createElement(
        l,
        {
          onClick: t ? void 0 : this.onOpen,
          "aria-disabled": t ? !0 : void 0,
          ...d,
          title: r.toLanguageString(a, m[a]),
          key: "tool",
          ...i,
          ...o,
          className: f(o.className, i.className, { "k-disabled": t })
        }
      ),
      this.state.showDialog && e && /* @__PURE__ */ s.createElement(c, { view: e, onClose: this.onClose, dir: o.dir, key: "dialog" })
    ];
  }
};
h(u);
export {
  u as FindAndReplace
};
