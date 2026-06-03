/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as m from "react";
import { Button as S } from "@progress/kno-react-buttons";
import { hasMark as b, toggleInlineFormat as h } from "@progress/kno-editor-common";
import { onDownPreventDefault as k } from "./utils.mjs";
import { registerForLocalization as F, provideLocalizationService as I } from "@progress/kno-react-intl";
import { messages as c } from "../messages/index.mjs";
var p;
((g) => {
  g.createInlineFormatTool = (o) => {
    const a = class extends m.Component {
      render() {
        const { view: t, render: n, ...u } = this.props, e = t && t.state, { mark: d, altMarks: f, altStyle: v } = o, l = { mark: d, altMarks: f, altStyle: v }, i = I(this), r = o.messages.title, s = /* @__PURE__ */ m.createElement(
          S,
          {
            onClick: () => t && h(
              l,
              e && e.tr.setMeta("commandName", o.commandName)
            )(t.state, t.dispatch),
            selected: !!e && b(e, l),
            togglable: !0,
            ...k,
            title: i.toLanguageString(r, c[r]),
            "aria-label": i.toLanguageString(r, c[r]),
            ...o.props,
            ...u
          }
        );
        return n ? n.call(void 0, s, { view: t }) : s;
      }
    };
    return F(a), a;
  };
})(p || (p = {}));
export {
  p as InlineFormatToolNS
};
