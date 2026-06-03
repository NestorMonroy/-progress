/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as l from "react";
import { useInternationalization as T } from "@progress/kno-react-intl";
import { getNestedValue as N, Keys as k, IconWrap as C, classNames as b } from "@progress/kno-react-common";
import { useTableKeyboardNavigation as w } from "@progress/kno-react-data-tools";
import { chevronDownIcon as y, chevronRightIcon as R } from "@progress/kno-svg-icons";
import { TREELIST_PREVENT_SELECTION_ELEMENT as S, TREELIST_COL_INDEX_ATTRIBUTE as L } from "../constants/index.mjs";
const _ = (e) => {
  const { hasChildren: d, level: o = [0], expanded: r, dataItem: i, format: s, id: f, ariaColumnIndex: u, isSelected: m } = e, c = N(e.field, i), h = T(), x = w(f);
  let g = "";
  const v = l.useCallback(
    (a) => {
      a.isDefaultPrevented() || a.keyCode === k.enter && e.expandable && (a.preventDefault(), e.onExpandChange(a, i, o));
    },
    [e.expandable, i, o]
  );
  c != null && (g = s ? h.format(s, c) : c.toString());
  const t = [];
  if (e.expandable) {
    const a = (n) => /* @__PURE__ */ l.createElement("span", { key: n, className: "k-treelist-toggle k-icon k-svg-icon" }, /* @__PURE__ */ l.createElement("svg", { "aria-hidden": "true", focusable: "false", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }));
    t.push(...o.slice(1).map((n, I) => a(I))), d ? t.push(
      /* @__PURE__ */ l.createElement(
        C,
        {
          className: "k-treelist-toggle",
          name: r ? "chevron-down" : "chevron-right",
          icon: r ? y : R,
          key: "expand-collapse",
          onClick: (n) => e.onExpandChange(n.syntheticEvent || n, i, o),
          [S]: !0
        }
      )
    ) : t.push(a(t.length));
  }
  const E = /* @__PURE__ */ l.createElement(
    "td",
    {
      style: e.style,
      className: b("k-table-td", e.className, {
        "k-text-nowrap": e.expandable,
        "k-selected": m
      }),
      colSpan: e.colSpan,
      "aria-colindex": u,
      "aria-expanded": d ? r : void 0,
      "aria-selected": m,
      role: "gridcell",
      onKeyDown: v,
      [L]: e.colIndex,
      ...x
    },
    t,
    g
  );
  return e.render ? e.render.call(void 0, E, e) : E;
};
_.displayName = "KendoReactTreeListCell";
export {
  _ as TreeListCell
};
