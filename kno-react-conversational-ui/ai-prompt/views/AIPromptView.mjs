/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as e from "react";
import { AIPromptContent as B } from "../AIPromptContent.mjs";
import { AIPromptFooter as q } from "../AIPromptFooter.mjs";
import { Button as z, SpeechToTextButton as F } from "@progress/kno-react-buttons";
import { TextArea as j, InputSeparator as G, InputSuffix as O } from "@progress/kno-react-inputs";
import { sparklesIcon as $ } from "@progress/kno-svg-icons";
import { useCustomComponent as P } from "@progress/kno-react-common";
import { AIPromptViewRender as H } from "./AIPromptViewRender.mjs";
import { AIPromptExpander as M } from "../AIPromptExpander.mjs";
import { useAIPromptContext as W } from "../AIPromptContext.mjs";
import { SuggestionGroup as D } from "../../chat/components/SuggestionsGroup.mjs";
import { promptViewDefaults as J } from "./constants.mjs";
const oe = (S) => {
  const {
    promptInput: A = j,
    generateButton: E = z,
    enableSpeechToText: n = !1,
    promptValue: I,
    promptSuggestions: p
  } = S, [r, i] = e.useState(I || ""), [s] = W(), [T, g] = P(E), [C, h] = P(A), R = () => {
    s.onPromptRequest && s.onPromptRequest.call(null, r), i("");
  }, m = e.useRef(null), w = (t) => {
    i(t);
  };
  e.useEffect(() => {
    var t, o;
    (o = (t = m.current) == null ? void 0 : t.element) != null && o.current && requestAnimationFrame(() => {
      var l, c;
      if ((c = (l = m.current) == null ? void 0 : l.element) != null && c.current) {
        const a = m.current.element.current;
        a.style.height = "auto", a.style.height = `${a.scrollHeight}px`;
      }
    });
  }, [r]);
  const V = (t) => {
    i(t.target.value);
  }, b = {
    title: "Generate",
    children: "Generate",
    svgIcon: $
  }, y = {
    placeholder: "Ask or generate content with AI ...",
    rows: 2
  }, d = Object.keys(g).length > 0 ? g : b, k = Object.keys(h).length > 0 ? h : y, x = (t) => {
    const { isFinal: o, alternatives: l } = t;
    if (o && l.length > 0) {
      const c = l[0].transcript, a = (() => {
        const u = r, v = u && !u.endsWith(" ") && !u.endsWith(`
`);
        return u + (v ? " " : "") + c;
      })();
      i(a);
    }
  };
  let f;
  return n && (typeof n == "object" ? f = {
    ...n,
    onResult: n.onResult || x
  } : f = {
    onResult: x
  }), /* @__PURE__ */ e.createElement(H, { name: J.name }, /* @__PURE__ */ e.createElement(B, { streaming: s.streaming, onCancel: s.onCancel }, /* @__PURE__ */ e.createElement(
    C,
    {
      ref: m,
      value: r,
      flow: "vertical",
      textareaStyle: { maxHeight: "110px" },
      autoSize: !0,
      suffix: n ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(G, { orientation: "horizontal" }), /* @__PURE__ */ e.createElement(O, { orientation: "horizontal" }, /* @__PURE__ */ e.createElement(F, { fillMode: "flat", ...f }))) : void 0,
      onChange: V,
      ...k
    }
  ), p && p.length > 0 && /* @__PURE__ */ e.createElement(M, { title: "Prompt Suggestions" }, /* @__PURE__ */ e.createElement(
    D,
    {
      suggestionsView: s.suggestionsView,
      suggestions: p.map((t, o) => ({
        id: o,
        text: t,
        description: t
      })),
      onSuggestionClick: (t) => {
        w(t.text);
      }
    }
  ))), /* @__PURE__ */ e.createElement(q, null, /* @__PURE__ */ e.createElement(
    T,
    {
      themeColor: "primary",
      fillMode: "solid",
      rounded: "full",
      size: "medium",
      onClick: R,
      disabled: !r.trim(),
      ...d
    },
    d.children
  )));
};
export {
  oe as AIPromptView
};
