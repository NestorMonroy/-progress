/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as r from "react";
import { AIPromptContent as s } from "../AIPromptContent.mjs";
import { AIPromptViewRender as C } from "./AIPromptViewRender.mjs";
import { useAIPromptContext as f } from "../AIPromptContext.mjs";
import { PanelBar as u, PanelBarItem as I } from "@progress/kno-react-layout";
import { commandsViewDefaults as E } from "./constants.mjs";
const i = (t) => t == null ? void 0 : t.map((e) => /* @__PURE__ */ r.createElement(I, { title: e.text, key: e.id, svgIcon: e.svgIcon, data: e }, e.children && i(e.children || []))), h = (t) => {
  const { commands: e } = t, [n] = f(), c = (p) => {
    var a, l, m;
    const o = (l = (a = p.target) == null ? void 0 : a.props) == null ? void 0 : l.data;
    (m = o.children) != null && m.length || n.onCommandExecute && n.onCommandExecute.call(null, o);
  };
  return /* @__PURE__ */ r.createElement(C, { name: E.name }, /* @__PURE__ */ r.createElement(s, { streaming: n.streaming, onCancel: n.onCancel }, /* @__PURE__ */ r.createElement("div", { className: "k-prompt-view" }, /* @__PURE__ */ r.createElement(u, { onSelect: c, selected: "" }, i(e != null ? e : [])))));
};
export {
  h as AIPromptCommandsView
};
