/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as o from "react";
import { Button as i } from "@progress/kno-react-buttons";
import { minusIcon as m, plusIcon as p } from "@progress/kno-svg-icons";
import { OrgChartEventsContextContext as d } from "./ClientOrgChart.mjs";
const C = (e) => {
  const { expanded: n, node: r, nodes: a } = e, t = o.useContext(d), s = (c) => {
    t.onExpandChange && t.onExpandChange.call(void 0, {
      event: c,
      expand: !n,
      item: r,
      items: a
    });
  };
  return /* @__PURE__ */ o.createElement(
    i,
    {
      className: "k-orgchart-button",
      icon: n ? "minus" : "plus",
      tabIndex: -1,
      svgIcon: n ? m : p,
      role: "presentation",
      "aria-hidden": !0,
      onClick: s
    }
  );
};
export {
  C as ExpandButton
};
