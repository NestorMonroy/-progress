/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as c from "react";
import i from "prop-types";
import { ToolbarSeparator as A, ButtonGroup as N, Toolbar as x, toolbarButtons as F } from "@progress/kno-react-buttons";
import { validatePackage as I, getLicenseMessage as M, classNames as W, WatermarkOverlay as H } from "@progress/kno-react-common";
import { Plugin as E, PluginKey as S, spacesFix as z, caretColor as j, history as K, dropCursor as V, gapCursor as U, tableEditing as q, cspFix as G, Schema as $, marks as R, nodes as J, EditorState as Q, keymap as T, baseKeymap as X, EditorView as Y, getMark as Z } from "@progress/kno-editor-common";
import { defaultStyle as tt, tablesStyles as et, rtlStyles as it } from "./config/defaultStyles.mjs";
import { EditorToolsSettings as st } from "./config/toolsSettings.mjs";
import { EditorDialogs as nt } from "./dialogs/index.mjs";
import { EditorUtils as k } from "./utils/index.mjs";
import { editorPropsKey as B } from "./utils/props-key.mjs";
import { updateEditorValue as ot } from "./utils/controlled-value.mjs";
import { packageMetadata as D } from "./package-metadata.mjs";
import { keys as d, messages as w } from "./messages/index.mjs";
import { provideLocalizationService as O, registerForLocalization as rt } from "@progress/kno-react-intl";
const { link: P, bold: at, italic: lt, underline: ht } = st, _ = class _ extends c.Component {
  constructor(l) {
    super(l), this.state = {
      view: void 0,
      linkDialog: !1
    }, this._element = null, this._contentElement = null, this.iframe = null, this.trOnChange = null, this.htmlOnChange = null, this.showLicenseWatermark = !1, this.focus = () => {
      this.view && this.view.focus();
    }, this.renderDialog = (t, e, s) => this.state[s] && /* @__PURE__ */ c.createElement(
      t,
      {
        view: this.view,
        settings: e,
        dir: this.props.dir,
        onClose: () => this.setState({ [s]: !1 })
      }
    ), this.renderTool = (t, e, s = !1) => {
      const h = /* @__PURE__ */ c.createElement(
        t,
        {
          view: this.view,
          dir: this.props.dir,
          key: e,
          className: s ? "k-toolbar-button" : void 0
        }
      );
      return h.type === A ? /* @__PURE__ */ c.createElement(t, { key: e }) : h;
    }, this.updateTools = (t, e) => {
      this.setState({ view: t });
    }, this.filterTransaction = (t, e) => {
      const s = { target: this, transaction: t, state: e };
      return (this.props.onExecute && this.props.onExecute.call(void 0, s)) !== !1;
    }, this.onPasteHtml = (t) => {
      if (this.props.onPasteHtml && this.pasteEvent) {
        const e = {
          target: this,
          pastedHtml: t,
          nativeEvent: this.pasteEvent
        }, s = this.props.onPasteHtml.call(void 0, e);
        if (this.pasteEvent = void 0, typeof s == "string")
          return s;
      }
      return t;
    }, this.dispatchTransaction = (t) => {
      const e = t.docChanged;
      if (this.props.onChange && e) {
        this.trOnChange = t;
        const s = t.doc, h = t.doc.type.schema, p = {
          target: this,
          value: s,
          html: "",
          transaction: t,
          schema: h
        };
        Object.defineProperty(p, "html", {
          get: () => (this.htmlOnChange = k.getHtml({ doc: s, schema: h }), this.htmlOnChange)
        }), this.props.onChange.call(void 0, p);
      }
      this.view && (this.props.value === void 0 || !e) && this.view.updateState(this.view.state.apply(t));
    }, this.onFocus = (t, e) => {
      if (this.props.onFocus) {
        const s = {
          target: this,
          nativeEvent: e
        };
        this.props.onFocus.call(void 0, s);
      }
      return !1;
    }, this.onBlur = (t, e) => {
      if (this.props.onBlur) {
        const s = {
          target: this,
          nativeEvent: e
        };
        this.props.onBlur.call(void 0, s);
      }
      return !1;
    }, this.onPaste = (t, e) => (this.props.onPasteHtml && (this.pasteEvent = e), !1), this.onIFrameInit = (t) => {
      if (this.props.onIFrameInit) {
        const e = {
          target: this,
          iframe: t
        };
        this.props.onIFrameInit.call(void 0, e);
      }
      return !1;
    }, this.showLicenseWatermark = !I(D, { component: "Editor" }), this.licenseMessage = M(D);
  }
  /**
   * The value of the Editor.
   */
  get value() {
    return this.trOnChange !== null ? this.trOnChange.doc : this.props.value !== void 0 ? this.props.value : this.view ? this.view.state.doc : this.props.defaultContent || "";
  }
  /**
   * Returns the DOM element of the Editor.
   */
  get element() {
    return this._element;
  }
  /**
   * Returns the content-editable DOM element of the Editor.
   */
  get contentElement() {
    return this._contentElement;
  }
  /**
   * Returns the `view` object of the Editor.
   */
  get view() {
    return this._view;
  }
  /**
   * @hidden
   */
  componentDidMount() {
    this.initialize();
  }
  /**
   * @hidden
   */
  componentDidUpdate(l) {
    const { value: t } = this.props, e = this.view;
    t === void 0 || !e || (ot(e, t, l.value, this.trOnChange, this.htmlOnChange), this.trOnChange = null, this.htmlOnChange = null);
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    var t;
    this.view && this.view.destroy(), this._view = void 0;
    const l = (t = this.iframe) == null ? void 0 : t.contentWindow;
    if (l) {
      this._contentElement && this._contentElement.parentNode && this._contentElement.parentNode.removeChild(this._contentElement);
      const e = l.document.head;
      for (; e && e.firstChild; )
        e.removeChild(e.firstChild);
    }
  }
  /**
   * @hidden
   */
  render() {
    const { tools: l = [], defaultEditMode: t = "iframe", preserveWhitespace: e = "full", style: s, className: h } = this.props, p = O(this), u = this.props.ariaLabel || p.toLanguageString(d.contentAreaLabel, w[d.contentAreaLabel]);
    if (this.view) {
      const o = B.getState(this.view.state);
      o.preserveWhitespace = e;
    }
    let m = this.props.contentStyle;
    m === void 0 && (s || {}).height === void 0 && (m = { height: "300px" });
    const f = (o, n) => o.displayName || o.name || `tool-${n}`, b = (o, n) => o.map((r, a) => f(r, a)).join("-") || `group-${n}`, y = l.map(
      (o, n) => Array.isArray(o) ? /* @__PURE__ */ c.createElement(N, { key: b(o, n), className: "k-toolbar-button-group" }, o.map((r, a) => this.renderTool(r, f(r, a)))) : this.renderTool(o, f(o, n), !0)
    );
    return /* @__PURE__ */ c.createElement(
      "div",
      {
        ref: (o) => {
          this._element = o;
        },
        className: W("k-editor", h, { "k-editor-resizable": this.props.resizable }),
        dir: this.props.dir,
        style: s
      },
      y.length > 0 && /* @__PURE__ */ c.createElement(
        x,
        {
          className: "k-editor-toolbar",
          ariaLabel: p.toLanguageString(d.toolbarAriaLabel, w[d.toolbarAriaLabel]),
          keyboardNavigation: this.props.keyboardNavigation
        },
        y
      ),
      t === "iframe" ? /* @__PURE__ */ c.createElement(
        "iframe",
        {
          ref: (o) => {
            this.iframe = o;
          },
          frameBorder: "0",
          title: p.toLanguageString(d.iframeTitle, w[d.iframeTitle]),
          style: m,
          className: "k-iframe"
        }
      ) : /* @__PURE__ */ c.createElement(
        "div",
        {
          ref: (o) => {
            this._contentElement = o;
          },
          style: m,
          className: "k-editor-content",
          role: "textbox",
          "aria-labelledby": this.props.ariaLabelledBy,
          "aria-describedby": this.props.ariaDescribedBy,
          "aria-label": u,
          suppressContentEditableWarning: !0
        }
      ),
      this.renderDialog(nt.InsertLinkDialog, P, "linkDialog"),
      this.showLicenseWatermark && /* @__PURE__ */ c.createElement(H, { message: this.licenseMessage })
    );
  }
  initialize() {
    const l = this.iframe && this.iframe.contentWindow;
    if (l) {
      const n = l.document, r = n.createElement("meta");
      r.setAttribute("charset", "utf-8"), n.head.appendChild(r), this._contentElement = n.createElement("div"), n.body.appendChild(this._contentElement), this._contentElement.classList.add("k-content"), this._contentElement.setAttribute("role", "textbox"), this.props.ariaLabelledBy && this._contentElement.setAttribute("aria-labelledby", this.props.ariaLabelledBy), this.props.ariaDescribedBy && this._contentElement.setAttribute("aria-describedby", this.props.ariaDescribedBy), this._contentElement.setAttribute(
        "aria-label",
        this.props.ariaLabel || O(this).toLanguageString(
          d.contentAreaLabel,
          w[d.contentAreaLabel]
        )
      ), this.iframe && this.props.onIFrameInit ? this.onIFrameInit(this.iframe) : [tt, et, this.props.dir === "rtl" ? it : void 0].forEach((a) => {
        if (a) {
          const v = n.createElement("style");
          v.appendChild(n.createTextNode(a)), n.head.appendChild(v);
        }
      });
    }
    const t = this._contentElement;
    if (!t)
      return;
    const { preserveWhitespace: e = "full" } = this.props, s = [
      // https://prosemirror.net/docs/ref/#state.PluginSpec
      new E({
        view: (() => ({ update: this.updateTools })),
        key: new S("toolbar-tools-update-plugin")
      }),
      new E({
        filterTransaction: this.filterTransaction,
        key: new S("onExecute-event-plugin")
      }),
      new E({
        key: B,
        state: {
          init: () => ({ preserveWhitespace: e }),
          apply: (n, r) => r
        }
      }),
      z(),
      j(),
      K(),
      V(),
      U(),
      q(),
      G()
    ], h = {
      ...k.getShortcuts({
        types: { listItem: "list_item", hardBreak: "hard_break" },
        toolsSettings: { bold: at, italic: lt, underline: ht }
      }),
      "Mod-k": () => {
        const { linkDialog: n } = this.state, r = this.view;
        if (r) {
          const a = r.state, v = a.selection.empty, g = Z(a, a.schema.marks[P.mark]);
          !n && !(v && !g) && this.setState({ linkDialog: !0 });
        }
        return !n;
      },
      "Alt-F10": () => {
        var r;
        const n = (r = this.element) == null ? void 0 : r.querySelector(".k-toolbar");
        if (n) {
          const a = n.querySelector(F.join(","));
          if (a)
            return a.focus(), !0;
        }
        return !1;
      }
    }, { defaultContent: p = "", value: u, onMount: m } = this.props, f = u && typeof u != "string" ? u : k.createDocument(new $({ nodes: J, marks: R }), u || p, {
      preserveWhitespace: e
    }), b = {
      state: Q.create({
        plugins: [...s, T(h), T(X)],
        doc: f
      }),
      transformPastedHTML: this.onPasteHtml,
      dispatchTransaction: this.dispatchTransaction,
      handleDOMEvents: {
        focus: this.onFocus,
        blur: this.onBlur,
        paste: this.onPaste
      },
      handleDrop: (n, r, a, v) => {
        let g = !1;
        return a.content.nodesBetween(0, a.content.size, (L) => {
          g = g || L.type.name === "table_caption_external";
        }), g;
      }
    }, y = { plugins: s, shortcuts: h, target: this, viewProps: b, dom: t }, o = this._view = m && m.call(void 0, y) || new Y({ mount: t }, b);
    this.setState({
      view: o
    });
  }
};
_.propTypes = {
  defaultContent: i.string,
  value: i.oneOfType([i.object, i.string]),
  defaultEditMode: i.oneOf(["iframe", "div"]),
  contentStyle: i.object,
  dir: i.string,
  className: i.string,
  ariaDescribedBy: i.string,
  ariaLabelledBy: i.string,
  ariaLabel: i.string,
  style: i.object,
  tools: i.arrayOf(i.any),
  keyboardNavigation: i.bool,
  resizable: i.bool,
  preserveWhitespace: i.oneOf([!0, !1, "full"]),
  onMount: i.func,
  onFocus: i.func,
  onBlur: i.func,
  onChange: i.func,
  onPasteHtml: i.func,
  onExecute: i.func,
  onIFrameInit: i.func
};
let C = _;
rt(C);
export {
  C as Editor
};
