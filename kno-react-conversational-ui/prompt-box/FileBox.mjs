/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as n from "react";
import { Button as L } from "@progress/kno-react-buttons";
import { classNames as z, IconWrap as B, getFileExtensionIcon as N } from "@progress/kno-react-common";
import { xCircleIcon as R } from "@progress/kno-svg-icons";
import { useLocalization as h } from "@progress/kno-react-intl";
import { promptBoxRemoveFile as i, messages as u } from "../messages/index.mjs";
const C = "k-prompt-box", b = 1, F = (e) => "." + e.split(".").pop() || "", M = (e) => {
  if (e == null)
    return "";
  if (e === 0)
    return "0 B";
  const a = 1024, s = ["B", "KB", "MB", "GB", "TB"], o = Math.floor(Math.log(e) / Math.log(a));
  return `${parseFloat((e / Math.pow(a, o)).toFixed(2))} ${s[o]}`;
}, $ = (e) => e ? typeof e == "function" ? e() : e : null, T = ({ files: e, onRemoveFile: a, header: s }) => {
  const o = h(), m = n.useRef(null), [p, f] = n.useState(!1), [d, g] = n.useState(!1), l = n.useCallback(() => {
    const t = m.current;
    if (!t)
      return;
    const { scrollLeft: r, scrollWidth: c, clientWidth: v } = t, x = r === 0, k = r + v >= c - b;
    g(!x), f(!k);
  }, []);
  if (n.useLayoutEffect(() => {
    l();
  }, [e, l]), n.useEffect(() => {
    const t = m.current;
    if (!t)
      return;
    const r = () => l(), c = new ResizeObserver(l);
    return c.observe(t), t.addEventListener("scroll", r, { passive: !0 }), () => {
      t.removeEventListener("scroll", r), c.disconnect();
    };
  }, [l, e.length]), e.length === 0 && !s)
    return null;
  const E = $(s), S = e.length > 0 && /* @__PURE__ */ n.createElement(
    "ul",
    {
      className: z("k-file-box-wrapper", {
        "k-file-box-wrapper-scrollable-start": p,
        "k-file-box-wrapper-scrollable-end": d
      })
    },
    /* @__PURE__ */ n.createElement("div", { className: "k-files-scroll", ref: m }, e.map((t) => /* @__PURE__ */ n.createElement("li", { key: t.name, className: "k-file-box" }, /* @__PURE__ */ n.createElement(B, { size: "xlarge", ...N(F(t.name)) }), /* @__PURE__ */ n.createElement("div", { className: "k-file-info" }, /* @__PURE__ */ n.createElement("span", { className: "k-file-name" }, t.name), /* @__PURE__ */ n.createElement("span", { className: "k-file-size" }, M(t.size))), /* @__PURE__ */ n.createElement(
      L,
      {
        fillMode: "flat",
        size: "xs",
        svgIcon: R,
        onClick: (r) => {
          r.stopPropagation(), a(t.name);
        },
        "aria-label": `${o.toLanguageString(
          i,
          u[i]
        )} ${t.name}`,
        title: `${o.toLanguageString(
          i,
          u[i]
        )} ${t.name}`
      }
    ))))
  );
  return /* @__PURE__ */ n.createElement("div", { className: `${C}-header` }, E, S);
};
export {
  T as FileBox
};
