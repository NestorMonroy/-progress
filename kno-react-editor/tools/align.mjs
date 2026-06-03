/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as l from "react";
import { Button as u } from "@progress/kno-react-buttons";
import { EditorToolsSettings as v } from "../config/toolsSettings.mjs";
import { isAligned as L, alignBlocks as S } from "@progress/kno-editor-common";
import { onDownPreventDefault as T } from "./utils.mjs";
import { registerForLocalization as b, provideLocalizationService as h } from "@progress/kno-react-intl";
import { messages as m } from "../messages/index.mjs";
const { alignRemove: p } = v, C = (t) => {
  const a = class extends l.Component {
    render() {
      const { view: o, render: r, ...g } = this.props, i = o && o.state, n = !!i && L(i, t.actions), d = n ? p.actions : t.actions, f = n ? p.commandName : t.commandName, s = h(this), e = t.messages.title, c = /* @__PURE__ */ l.createElement(
        u,
        {
          onClick: () => o && S(d, f)(o.state, o.dispatch),
          selected: n,
          togglable: !0,
          ...T,
          title: s.toLanguageString(e, m[e]),
          "aria-label": s.toLanguageString(e, m[e]),
          ...t.props,
          ...g
        }
      );
      return r ? r.call(void 0, c, { view: o }) : c;
    }
  };
  return b(a), a;
};
export {
  C as createAlignTool
};
