/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as e from "react";
import { PromptHeader as I } from "./AIPromptHeader.mjs";
import { promptViewDefaults as M, outputViewDefaults as R } from "./views/constants.mjs";
import { AIPromptContext as b } from "./AIPromptContext.mjs";
import { useWebMcpRegister as x, validatePackage as L, getLicenseMessage as N, classNames as W, WatermarkOverlay as y } from "@progress/kno-react-common";
import { packageMetadata as r } from "../package-metadata.mjs";
const j = (t) => {
  const m = e.useRef(null);
  x("aiprompt", m, t, t.webMcp);
  const n = !L(r, { component: "AIPrompt" }), i = N(r), {
    activeView: o,
    toolbarItems: l,
    children: p,
    onActiveViewChange: s,
    onPromptRequest: u,
    onCommandExecute: g,
    style: f,
    dir: v,
    className: w,
    streaming: d,
    loading: P,
    onCancel: V,
    suggestionsView: a,
    ...h
  } = t, S = l || [M, R], [k, A] = e.useState({ activeView: o }), c = {
    ...k,
    activeView: o,
    streaming: d,
    loading: P,
    suggestionsView: a != null ? a : "classic",
    onCancel: V,
    onActiveViewChange: s,
    onPromptRequest: u,
    onCommandExecute: g
  }, C = (E) => {
    A(E);
  };
  return /* @__PURE__ */ e.createElement(b.Provider, { value: [c, C] }, /* @__PURE__ */ e.createElement("div", { className: W("k-prompt", w), style: f, dir: v, ...h }, /* @__PURE__ */ e.createElement(
    I,
    {
      activeView: c.activeView,
      toolbarItems: S,
      activeViewChange: s
    }
  ), p, n && /* @__PURE__ */ e.createElement(y, { message: i })));
};
export {
  j as AIPrompt
};
