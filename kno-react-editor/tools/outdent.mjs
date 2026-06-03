/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as f from "react";
import { Button as N } from "@progress/kno-react-buttons";
import { isIndented as O, canOutdentAsListItem as h, liftListItem as I, indentBlocks as y } from "@progress/kno-editor-common";
import { onDownPreventDefault as S } from "./utils.mjs";
import { registerForLocalization as k, provideLocalizationService as z } from "@progress/kno-react-intl";
import { messages as v } from "../messages/index.mjs";
import { classNames as w } from "@progress/kno-react-common";
var L;
((T) => {
  T.createOutdentTool = (t) => {
    const i = class extends f.Component {
      render() {
        const { view: o, render: r, ...a } = this.props, e = o && o.state, c = a.dir, l = !!e && O(e, t.actions, c), d = e && e.schema.nodes[t.listsTypes.listItem], m = !!e && h(e, { nodes: t.actions, listsTypes: t.listsTypes }), b = l || m, p = z(this), s = t.messages.title, n = !b, u = /* @__PURE__ */ f.createElement(
          N,
          {
            onClick: n ? void 0 : () => {
              o && m && d ? I(d)(o.state, o.dispatch) : o && l && y(
                t.actions,
                t.commandName,
                c
              )(o.state, o.dispatch);
            },
            "aria-disabled": n ? !0 : void 0,
            title: p.toLanguageString(s, v[s]),
            "aria-label": p.toLanguageString(s, v[s]),
            ...S,
            ...t.props,
            ...a,
            className: w(a.className, t.props.className, {
              "k-disabled": n
            })
          }
        );
        return r ? r.call(void 0, u, { view: o }) : u;
      }
    };
    return k(i), i;
  };
})(L || (L = {}));
export {
  L as OutdentToolNS
};
