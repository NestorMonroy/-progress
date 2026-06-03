/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { messages as p, filterClearButton as i, filterContainsOperator as s, filterNotContainsOperator as x, filterEqOperator as e, filterNotEqOperator as r, filterStartsWithOperator as f, filterEndsWithOperator as O, filterIsNullOperator as o, filterIsNotNullOperator as a, filterIsEmptyOperator as u, filterIsNotEmptyOperator as g, filterGteOperator as q, filterGtOperator as c, filterLteOperator as m, filterLtOperator as E, filterBooleanAll as F, filterIsTrue as I, filterIsFalse as N, filterAfterOrEqualOperator as B, filterAfterOperator as d, filterBeforeOperator as h, filterBeforeOrEqualOperator as y } from "../../messages/index.mjs";
const A = [
  { text: s, operator: "contains" },
  { text: x, operator: "doesnotcontain" },
  { text: e, operator: "eq" },
  { text: r, operator: "neq" },
  { text: f, operator: "startswith" },
  { text: O, operator: "endswith" },
  { text: o, operator: "isnull" },
  { text: a, operator: "isnotnull" },
  { text: u, operator: "isempty" },
  { text: g, operator: "isnotempty" }
], C = [
  { text: e, operator: "eq" },
  { text: r, operator: "neq" },
  { text: q, operator: "gte" },
  { text: c, operator: "gt" },
  { text: m, operator: "lte" },
  { text: E, operator: "lt" },
  { text: o, operator: "isnull" },
  { text: a, operator: "isnotnull" }
], S = [
  { text: e, operator: "eq" },
  { text: r, operator: "neq" },
  { text: B, operator: "gte" },
  { text: d, operator: "gt" },
  { text: h, operator: "lt" },
  { text: y, operator: "lte" },
  { text: o, operator: "isnull" },
  { text: a, operator: "isnotnull" }
], w = [
  { text: F, operator: "" },
  { text: I, operator: !0 },
  { text: N, operator: !1 }
];
function G(l, n) {
  return {
    clearButtonTitle: l.toLanguageString(
      i,
      p[i]
    ),
    operators: n.map((t) => ({
      text: l.toLanguageString(t.text, p[t.text]),
      operator: t.operator
    }))
  };
}
export {
  w as booleanFilterValues,
  S as dateFilterOperators,
  G as localizeFilter,
  C as numericFilterOperators,
  A as textFilterOperators
};
