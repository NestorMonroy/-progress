/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as e from "react";
import { classNames as E, knoThemeMaps as O } from "@progress/kno-react-common";
import { ExpandButton as y } from "../client/ExpandButton.mjs";
import { OrgChartGroupContainer as A } from "../client/OrgChartGroupContainer.mjs";
import { GROUP_TITLE_HEIGHT as C, GROUP_SUBTITLE_HEIGHT as H } from "../utils/consts.mjs";
const L = "k-orgchart-node-group", p = "k-orgchart-node-group-title", u = "k-orgchart-node-group-subtitle", x = (r) => {
  const T = {
    orientation: "horizontal"
  }, {
    id: f,
    title: n,
    subtitle: i,
    line: k,
    plus: s,
    focus: U,
    level: o,
    verticalLine: N,
    childLineWidth: c,
    orientation: a,
    expanded: l,
    nodes: t,
    groupTitleHeight: R,
    groupSubtitleHeight: v,
    groupTitleRender: S,
    groupSubtitleRender: _,
    ...G
  } = { ...T, ...r }, m = S, h = _, g = { height: R || C }, d = { height: v || H };
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      ...G,
      className: E(r.className, L, "k-vstack", "k-align-items-center"),
      role: "group"
    },
    o !== 0 && /* @__PURE__ */ e.createElement(
      "div",
      {
        className: "k-orgchart-line k-orgchart-line-v k-orgchart-line-v-top",
        style: { height: N }
      }
    ),
    /* @__PURE__ */ e.createElement(A, { nodes: t }, m ? /* @__PURE__ */ e.createElement(
      m,
      {
        style: g,
        className: p,
        title: n,
        items: t,
        level: o,
        expanded: l
      }
    ) : /* @__PURE__ */ e.createElement("div", { className: p, style: g }, n), h ? /* @__PURE__ */ e.createElement(
      h,
      {
        style: d,
        className: u,
        subtitle: i,
        items: t,
        level: o,
        expanded: l
      }
    ) : /* @__PURE__ */ e.createElement("div", { className: u, style: d }, i), /* @__PURE__ */ e.createElement(
      "div",
      {
        role: "presentation",
        style: { width: "100%" },
        className: E("k-orgchart-node-container", {
          [`k-${O.orientationMap[a] || a}`]: a
        })
      },
      r.children
    )),
    k && /* @__PURE__ */ e.createElement("div", { className: "k-orgchart-line k-orgchart-line-v" }),
    s && /* @__PURE__ */ e.createElement(y, { expanded: l, nodes: t }),
    s && !!c && /* @__PURE__ */ e.createElement("div", { className: "k-orgchart-line k-orgchart-line-h", style: { width: c, marginTop: -15 } })
  );
};
export {
  x as ServerOrgChartGroup
};
