/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as o from "react";
import { TextFilterCell as i } from "@progress/kno-react-data-tools";
import { localizeFilter as l, textFilterOperators as a } from "./utils.mjs";
import { useLocalization as m } from "@progress/kno-react-intl";
const n = function(t) {
  const { operators: e, ...r } = t;
  return /* @__PURE__ */ o.createElement(
    i,
    {
      ariaLabel: "text filter",
      ...l(m(), e || a),
      ...r
    }
  );
};
export {
  n as TreeListTextFilter
};
