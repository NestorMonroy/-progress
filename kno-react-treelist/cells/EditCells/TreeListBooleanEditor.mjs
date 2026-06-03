/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as t from "react";
import { useId as m, classNames as o, getNestedValue as s } from "@progress/kno-react-common";
import { useTableKeyboardNavigation as r } from "@progress/kno-react-data-tools";
import { TREELIST_COL_INDEX_ATTRIBUTE as f } from "../../constants/index.mjs";
const h = (e) => {
  const d = t.useCallback(
    (c) => {
      e.onChange && e.onChange({
        dataItem: e.dataItem,
        level: e.level,
        field: e.field,
        syntheticEvent: c,
        value: c.target.checked
      });
    },
    [e.onChange, e.dataItem, e.level, e.field]
  ), a = m(), n = r(e.id), i = o(
    {
      "k-selected": e.isSelected
    },
    e.className
  ), l = /* @__PURE__ */ t.createElement(
    "td",
    {
      style: e.style,
      className: i,
      "aria-colindex": e.ariaColumnIndex,
      "aria-selected": e.isSelected,
      role: "gridcell",
      ...n,
      [f]: e.colIndex
    },
    /* @__PURE__ */ t.createElement(
      "input",
      {
        checked: s(e.field, e.dataItem) || !1,
        id: a,
        type: "checkbox",
        className: "k-checkbox",
        onChange: d
      }
    ),
    /* @__PURE__ */ t.createElement("label", { className: "k-checkbox-label", htmlFor: a })
  );
  return e.render ? e.render.call(void 0, l, e) : l;
};
h.displayName = "KendoReactTreeListBooleanEditor";
export {
  h as TreeListBooleanEditor
};
