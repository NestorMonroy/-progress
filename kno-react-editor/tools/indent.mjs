/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as L from "react";
import { Button as k } from "@progress/kno-react-buttons";
import { isIndented as S, hasNode as N, canIndentAsListItem as z, sinkListItem as w, indentBlocks as x } from "@progress/kno-editor-common";
import { onDownPreventDefault as y } from "./utils.mjs";
import { registerForLocalization as B, provideLocalizationService as C } from "@progress/kno-react-intl";
import { messages as b } from "../messages/index.mjs";
import { classNames as D } from "@progress/kno-react-common";
var h;
((T) => {
  T.createIndentTool = (e) => {
    const d = class extends L.Component {
      render() {
        const { view: t, render: l, ...i } = this.props, m = i.dir, o = t && t.state, n = o && o.schema.nodes, s = n && n[e.listsTypes.listItem], r = e.actions, p = !!o && !!s && (S(o, r, m) || r.some((v) => n && n[v.node] && N(o, n[v.node]))) && !N(o, s), I = !!o && z(o, s), g = p || I, f = C(this), a = e.messages.title, c = !g, u = /* @__PURE__ */ L.createElement(
          k,
          {
            onClick: c ? void 0 : () => {
              t && I && s ? w(s)(t.state, t.dispatch) : t && p && x(r, e.commandName, m)(t.state, t.dispatch);
            },
            "aria-disabled": c ? !0 : void 0,
            title: f.toLanguageString(a, b[a]),
            "aria-label": f.toLanguageString(a, b[a]),
            ...y,
            ...e.props,
            ...i,
            className: D(i.className, e.props.className, {
              "k-disabled": c
            })
          }
        );
        return l ? l.call(void 0, u, { view: t }) : u;
      }
    };
    return B(d), d;
  };
})(h || (h = {}));
export {
  h as IndentToolNS
};
