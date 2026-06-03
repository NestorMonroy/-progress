/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as o from "react";
import { DateFilterCell as a } from "@progress/kno-react-data-tools";
import { localizeFilter as i, dateFilterOperators as l } from "./utils.mjs";
import { useLocalization as m } from "@progress/kno-react-intl";
const n = function(t) {
  const { operators: e, ...r } = t;
  return /* @__PURE__ */ o.createElement(
    a,
    {
      ariaLabel: "date filter",
      ...i(m(), e || l),
      ...r
    }
  );
};
export {
  n as TreeListDateFilter
};
