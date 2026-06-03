/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { headersReducer as n } from "@progress/kno-pivotgrid-common";
import { HEADERS_ACTION as f } from "@progress/kno-pivotgrid-common";
const H = (e, s, r) => [e, (t, d) => {
  const o = n(e, { ...t, tree: s });
  r && r(o, d);
}];
export {
  f as HEADERS_ACTION,
  H as useHeaders
};
