/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
import * as r from "react";
import { useTableKeyboardNavigation as f } from "../navigation/hooks.mjs";
import { disableNavigatableContainer as b } from "@progress/kno-react-common";
const h = (t) => {
  const {
    ariaSort: i,
    colSpan: n,
    rowSpan: o,
    columnId: l,
    navigatable: a,
    ariaColumnIndex: c,
    ariaLabel: s,
    ariaSelected: d,
    ariaDescription: v,
    ariaHasPopup: m,
    ...u
  } = t, p = f(l, a), e = r.useRef(null);
  return r.useEffect(() => {
    e.current && a && b(e.current);
  }, [a]), /* @__PURE__ */ r.createElement(
    "th",
    {
      ref: e,
      "aria-sort": i,
      "aria-label": s,
      "aria-colindex": c,
      "aria-selected": d,
      "aria-haspopup": m || void 0,
      colSpan: n,
      rowSpan: o,
      ...p,
      ...u
    },
    t.children
  );
};
h.displayName = "KendoReactHeaderThElement";
export {
  h as HeaderThElement
};
