/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
import * as i from "react";
function u(t, n, o) {
  const [r, c] = i.useState(n);
  return i.useEffect(() => {
    if (!r && window && t.current) {
      const e = window.getComputedStyle(t.current).direction;
      e && c(e);
    }
  }, o), r;
}
export {
  u as useDir
};
