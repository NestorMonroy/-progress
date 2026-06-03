/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as p from "react";
import { Button as f } from "@progress/kno-react-buttons";
import { onDownPreventDefault as v } from "./utils.mjs";
import { registerForLocalization as b, provideLocalizationService as g } from "@progress/kno-react-intl";
import { messages as d } from "../messages/index.mjs";
import { classNames as N } from "@progress/kno-react-common";
const T = (e, a) => {
  const s = class extends p.Component {
    render() {
      const { view: o, render: i, ...n } = this.props, l = g(this), t = e.messages.title, c = o && o.state, r = c ? !a(c) : !1, m = /* @__PURE__ */ p.createElement(
        f,
        {
          onClick: r ? void 0 : () => o && a(
            o.state,
            (u) => o.dispatch(u.setMeta("commandName", e.commandName))
          ),
          "aria-disabled": r ? !0 : void 0,
          ...v,
          title: l.toLanguageString(t, d[t]),
          "aria-label": l.toLanguageString(t, d[t]),
          ...e.props,
          ...n,
          className: N(n.className, e.props.className, { "k-disabled": r })
        }
      );
      return i ? i.call(void 0, m, { view: o }) : m;
    }
  };
  return b(s), s;
};
export {
  T as createProseMirrorTool
};
