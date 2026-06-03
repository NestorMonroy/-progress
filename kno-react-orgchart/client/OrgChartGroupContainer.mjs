/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as t from "react";
import { classNames as h } from "@progress/kno-react-common";
import { OrgChartEventsContextContext as C } from "./ClientOrgChart.mjs";
const x = (c) => {
  const { nodes: n, children: u, style: a, ...l } = c, [i, s] = t.useState(!1), o = t.useContext(C), r = t.useRef(null), f = (e) => {
    o.onKeyDown && o.onKeyDown({
      event: e,
      items: n
    });
  }, m = (e) => {
    o.onGroupAction && o.onGroupAction({
      event: e,
      items: n
    });
  }, p = (e) => {
    s(!0), o.onGroupFocus && o.onGroupFocus({
      event: e,
      items: n,
      containerRef: r
    });
  }, d = (e) => {
    s(!1), o.onGroupBlur && o.onGroupBlur({
      event: e,
      items: n
    });
  };
  return /* @__PURE__ */ t.createElement(
    "div",
    {
      ref: r,
      className: h("k-orgchart-node-group-container", "k-vstack", { "k-focus": i }),
      style: a,
      onKeyDown: f,
      onClick: m,
      onFocus: p,
      onBlur: d,
      ...l
    },
    u
  );
};
export {
  x as OrgChartGroupContainer
};
