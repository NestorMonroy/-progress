/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as t from "react";
import { useId as o, getNestedValue as s, classNames as m } from "@progress/kno-react-common";
import { useTableKeyboardNavigation as r } from "@progress/kno-react-data-tools";
const b = (e) => {
  const c = t.useCallback(
    (d) => {
      e.selectionChange && e.selectionChange({ syntheticEvent: d });
    },
    [e.selectionChange]
  ), a = o(), l = s(e.field, e.dataItem), i = r(e.id), n = /* @__PURE__ */ t.createElement(
    "td",
    {
      style: e.style,
      className: m("k-table-td", e.className),
      "aria-colindex": e.ariaColumnIndex,
      role: "gridcell",
      ...i
    },
    /* @__PURE__ */ t.createElement(
      "input",
      {
        checked: typeof l == "boolean" && l,
        id: a,
        type: "checkbox",
        className: "k-checkbox",
        onChange: c
      }
    ),
    /* @__PURE__ */ t.createElement("label", { className: "k-checkbox-label", htmlFor: a })
  );
  return e.render ? e.render.call(void 0, n, e) : n;
};
b.displayName = "KendoReactTreeListSelectionCell";
export {
  b as TreeListSelectionCell
};
