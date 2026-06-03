/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as t from "react";
import { NumericTextBox as m } from "@progress/kno-react-inputs";
import { useTableKeyboardNavigation as o } from "@progress/kno-react-data-tools";
import { TREELIST_COL_INDEX_ATTRIBUTE as r } from "../../constants/index.mjs";
import { getNestedValue as u, classNames as s } from "@progress/kno-react-common";
const f = (e) => {
  const d = t.useCallback(
    (i) => {
      e.onChange && e.onChange({
        dataItem: e.dataItem,
        level: e.level,
        field: e.field,
        syntheticEvent: i.syntheticEvent,
        value: i.value
      });
    },
    [e.onChange, e.dataItem, e.level, e.field]
  ), a = u(e.field, e.dataItem), n = o(e.id), c = s(
    {
      "k-selected": e.isSelected
    },
    e.className
  ), l = /* @__PURE__ */ t.createElement(
    "td",
    {
      style: e.style,
      className: c,
      "aria-colindex": e.ariaColumnIndex,
      "aria-selected": e.isSelected,
      role: "gridcell",
      ...n,
      [r]: e.colIndex
    },
    /* @__PURE__ */ t.createElement(m, { width: "100%", value: a === void 0 ? null : a, onChange: d })
  );
  return e.render ? e.render.call(void 0, l, e) : l;
};
f.displayName = "KendoReactTreeListNumericEditor";
export {
  f as TreeListNumericEditor
};
