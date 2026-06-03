/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as u from "react";
import { listStyle as y, toggleList as f } from "@progress/kno-editor-common";
import { SplitButton as h } from "@progress/kno-react-buttons";
import { listsTypes as I } from "../config/toolsSettings.mjs";
import { useLocalization as K } from "@progress/kno-react-intl";
import { messages as g } from "../messages/index.mjs";
const L = (s, a) => {
  const { from: e, to: l } = s.selection;
  let i = null;
  return s.doc.nodesBetween(e, l, (r) => (i = i || (r.type === a ? r : null), !i)), i;
}, B = (s) => {
  let a = !1;
  const e = s.view, l = I, i = s.listType, r = K();
  let m = [...s.items || []], n, c;
  if (e) {
    const t = e.state, o = t && t.schema.nodes;
    n = o && L(t, o[l.orderedList]), c = o && L(t, o[l.bulletList]), a = !!(i === l.orderedList ? n && !c : !n && c);
  }
  const p = (t) => {
    e && (f(e.state, e.dispatch, e, { listType: i, ...l, listAttrs: {} }, "InsertList"), e.focus());
  }, x = (t) => {
    if (e) {
      const o = t.item.style ? { style: "list-style-type: " + t.item.style + ";" } : {}, d = n || c;
      if (d && y(d.attrs) !== t.item.style) {
        const v = e.state.selection.$head.posAtIndex(0, -2) - 1;
        e.dispatch(e.state.tr.setNodeMarkup(v, e.state.schema.nodes[i], o));
      } else
        f(e.state, e.dispatch, e, { listType: i, ...l, listAttrs: o }, "InsertList");
      e.focus();
    }
  };
  if (m = m.map((t) => ({
    ...t,
    text: t.textKey ? r.toLanguageString(t.textKey, g[t.textKey]) : t.text
  })), a && (n || c)) {
    const t = y((n || c).attrs);
    m = m.map((o, d) => ({
      ...o,
      selected: t ? o.style === t : d === 0
    }));
  }
  return /* @__PURE__ */ u.createElement(
    "span",
    {
      onMouseDown: (t) => {
        t.preventDefault();
      }
    },
    /* @__PURE__ */ u.createElement(
      h,
      {
        textField: "text",
        items: m,
        icon: s.icon,
        svgIcon: s.svgIcon,
        onButtonClick: p,
        onItemClick: x,
        buttonClass: a ? "k-selected" : void 0,
        title: s.title !== void 0 ? s.title : r.toLanguageString(s.titleKey, g[s.titleKey])
      }
    )
  );
};
export {
  B as ListTool
};
