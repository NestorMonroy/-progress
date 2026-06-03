/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as n from "react";
import { Card as f } from "@progress/kno-react-layout";
import { classNames as h } from "@progress/kno-react-common";
import { OrgChartEventsContextContext as x } from "./ClientOrgChart.mjs";
const p = (c) => {
  const { node: t, children: i, style: r, ...a } = c, [s, l] = n.useState(!1), e = n.useContext(x), m = (o) => {
    e.onKeyDown && e.onKeyDown.call(void 0, {
      event: o,
      item: t
    });
  }, C = (o) => {
    e.onItemAction && e.onItemAction.call(void 0, {
      event: o,
      item: t
    });
  }, u = (o) => {
    e.onItemContextMenu && e.onItemContextMenu.call(void 0, {
      event: o,
      item: t
    });
  }, d = (o) => {
    e.onItemDoubleClick && e.onItemDoubleClick.call(void 0, {
      event: o,
      item: t
    });
  };
  return /* @__PURE__ */ n.createElement(
    f,
    {
      orientation: null,
      className: h("k-orgchart-card", { "k-focus": s }),
      onClick: C,
      onKeyDown: m,
      onContextMenu: u,
      onDoubleClick: d,
      style: r,
      onFocus: () => l(!0),
      onBlur: () => l(!1),
      ...a
    },
    i
  );
};
export {
  p as OrgChartCard
};
