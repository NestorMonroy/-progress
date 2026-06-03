/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
import * as n from "react";
import { GridContext as l } from "../../utils/GridContext.mjs";
import { IconWrap as r } from "@progress/kendo-react-common";
import { minusIcon as c, plusIcon as s } from "@progress/kendo-svg-icons";
import { useLocalization as I } from "@progress/kendo-react-intl";
import { detailCollapse as f, detailExpand as u, messages as p } from "../../messages/index.mjs";
import { DETAIL_EXPAND_ACTION as x } from "@progress/kendo-react-data-tools";
const D = (a) => {
  const e = n.useContext(l), o = I(), t = a.expanded, i = t ? f : u, d = o.toLanguageString(i, p[i]);
  return /* @__PURE__ */ n.createElement(
    "a",
    {
      onClick: (m) => {
        m.preventDefault(), e != null && e.itemChange && e.itemChange({
          dataItem: a.dataItem,
          dataIndex: a.dataIndex,
          syntheticEvent: m,
          field: a.field,
          value: !t,
          _expand: !0
        }), a.dataItem[e.dataItemKey] !== void 0 && (e == null || e.dispatchDetailExpand({
          type: x.TOGGLE,
          id: a.dataItem[e.dataItemKey]
        }));
      },
      "aria-label": d,
      href: "#",
      tabIndex: -1
    },
    /* @__PURE__ */ n.createElement(r, { name: t ? "minus" : "plus", icon: t ? c : s })
  );
};
export {
  D as GridHierarchyCellToggle
};
