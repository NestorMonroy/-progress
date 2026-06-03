/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as e from "react";
import { classNames as f } from "@progress/kno-react-common";
import { Avatar as A, CardTitle as R, CardSubtitle as b } from "@progress/kno-react-layout";
import { ExpandButton as w } from "../client/ExpandButton.mjs";
import { OrgChartCard as x } from "../client/OrgChartCard.mjs";
import { OrgChartCardBody as O } from "../client/OrgChartCardBody.mjs";
const T = "k-orgchart-node", W = (l) => {
  const h = {
    avatarType: "image"
  }, {
    id: v,
    title: c,
    subtitle: i,
    level: a,
    childLineWidth: s,
    cardWidth: E,
    cardHeight: g,
    verticalLine: p,
    color: k,
    line: N,
    plus: m,
    expanded: t,
    node: r,
    avatar: n,
    avatarType: o,
    itemRender: u,
    showAvatar: C,
    ...y
  } = { ...h, ...l }, d = u;
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      ...y,
      className: f(l.className, T, "k-vstack", "k-align-items-center"),
      role: "treeitem",
      "aria-level": a + 1,
      "aria-keyshortcuts": "Enter",
      "aria-expanded": t != null ? t : void 0,
      "aria-owns": t !== void 0 ? v : void 0,
      "aria-selected": !1
    },
    a !== 0 && /* @__PURE__ */ e.createElement(
      "div",
      {
        className: "k-orgchart-line k-orgchart-line-v k-orgchart-line-v-top",
        style: { height: p }
      }
    ),
    /* @__PURE__ */ e.createElement(x, { node: r, style: { width: E, height: g } }, /* @__PURE__ */ e.createElement(O, { level: a }, d ? /* @__PURE__ */ e.createElement(
      d,
      {
        item: r,
        title: c,
        subtitle: i,
        level: a,
        expanded: t,
        color: k
      }
    ) : /* @__PURE__ */ e.createElement(e.Fragment, null, C && /* @__PURE__ */ e.createElement(A, { type: o, themeColor: "secondary" }, o === "image" ? /* @__PURE__ */ e.createElement("img", { src: n, alt: "knoReact Avatar Customer" }) : n), /* @__PURE__ */ e.createElement("div", { className: "k-card-title-wrap k-vstack" }, /* @__PURE__ */ e.createElement(R, { className: "k-text-ellipsis" }, c), /* @__PURE__ */ e.createElement("span", { className: "k-spacer" }), /* @__PURE__ */ e.createElement(b, { className: "k-text-ellipsis" }, i)), /* @__PURE__ */ e.createElement("span", { className: "k-spacer" }), /* @__PURE__ */ e.createElement("span", { className: "k-orgchart-card-menu", role: "button", "aria-label": "Edit menu", tabIndex: -1 })))),
    N && /* @__PURE__ */ e.createElement("div", { className: "k-orgchart-line k-orgchart-line-v" }),
    m && /* @__PURE__ */ e.createElement(w, { expanded: t, node: r }),
    m && !!s && /* @__PURE__ */ e.createElement("div", { className: "k-orgchart-line k-orgchart-line-h", style: { width: s, marginTop: -15 } })
  );
};
export {
  W as ServerOrgChartNode
};
