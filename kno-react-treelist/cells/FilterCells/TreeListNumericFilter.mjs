/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as i from "react";
import { NumericFilterCell as o } from "@progress/kno-react-data-tools";
import { localizeFilter as m, numericFilterOperators as l } from "./utils.mjs";
import { useLocalization as a } from "@progress/kno-react-intl";
const p = function(r) {
  const { operators: e, ...t } = r;
  return /* @__PURE__ */ i.createElement(
    o,
    {
      ariaLabel: "numeric filter",
      ...m(a(), e || l),
      ...t
    }
  );
};
export {
  p as TreeListNumericFilter
};
