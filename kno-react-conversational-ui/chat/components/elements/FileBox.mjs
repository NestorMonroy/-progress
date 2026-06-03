/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as a from "react";
import { classNames as I, IconWrap as u, getFileExtensionIcon as k } from "@progress/kno-react-common";
import { DropDownButton as h } from "@progress/kno-react-buttons";
import { downloadIcon as B, moreVerticalIcon as w } from "@progress/kno-svg-icons";
import { useLocalization as F } from "@progress/kno-react-intl";
import { fileActions as l, messages as E } from "../../../messages/index.mjs";
import { useChatContext as C } from "../ChatContext.mjs";
const P = (x) => {
  const { files: c, onFileAction: i, onDownload: r, fileActions: z } = x, { messageFilesLayout: s = "vertical" } = C(), m = F(), p = z || [{ id: "download", label: "Download", svgIcon: B }], f = (e) => {
    if (e == null)
      return "";
    if (e === 0)
      return "0 B";
    const t = 1024, o = ["B", "KB", "MB", "GB", "TB"], n = Math.floor(Math.log(e) / Math.log(t));
    return `${parseFloat((e / Math.pow(t, n)).toFixed(2))} ${o[n]}`;
  }, g = (e) => "." + e.split(".").pop() || "", N = (e, t) => {
    var o, n;
    (n = (o = e.syntheticEvent) == null ? void 0 : o.stopPropagation) == null || n.call(o), e.item.id === "download" && (r == null || r([t])), i == null || i(e.item, e, t);
  }, d = (e) => p.length > 0 && /* @__PURE__ */ a.createElement(
    h,
    {
      fillMode: "flat",
      size: "small",
      svgIcon: w,
      onClick: (t) => {
        t.syntheticEvent.stopPropagation();
      },
      onItemClick: (t) => N(t, e),
      items: p.map((t) => ({
        id: t.id,
        icon: t.icon,
        text: t.label,
        svgIcon: t.svgIcon
      })),
      "aria-label": `${m.toLanguageString(
        l,
        E[l]
      )} ${e.name}`,
      title: `${m.toLanguageString(l, E[l])} ${e.name}`
    }
  ), v = a.useCallback(() => I(
    {
      "k-files-wrap": s === "wrap",
      "k-files-vertical": s === "vertical"
    },
    "k-file-box-wrapper"
  ), [s]);
  return /* @__PURE__ */ a.createElement("ul", { className: v() }, s === "horizontal" ? /* @__PURE__ */ a.createElement("div", { className: "k-files-scroll" }, c.map((e) => /* @__PURE__ */ a.createElement("li", { key: e.name, className: "k-file-box" }, /* @__PURE__ */ a.createElement(u, { size: "xlarge", ...k(g(e.name)) }), /* @__PURE__ */ a.createElement("div", { className: "k-file-info" }, /* @__PURE__ */ a.createElement("span", { className: "k-file-name" }, e.name), /* @__PURE__ */ a.createElement("span", { className: "k-file-size" }, f(e.size))), d(e)))) : c.map((e) => /* @__PURE__ */ a.createElement("li", { key: e.name, className: "k-file-box" }, /* @__PURE__ */ a.createElement(u, { size: "xlarge", ...k(g(e.name)) }), /* @__PURE__ */ a.createElement("div", { className: "k-file-info" }, /* @__PURE__ */ a.createElement("span", { className: "k-file-name" }, e.name), /* @__PURE__ */ a.createElement("span", { className: "k-file-size" }, f(e.size))), d(e))));
};
export {
  P as default
};
