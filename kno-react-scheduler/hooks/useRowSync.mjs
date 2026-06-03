/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as f from "react";
import { getPadding as h, setRect as m } from "../views/common/utils.mjs";
import { BORDER_WIDTH as y } from "../constants/index.mjs";
const A = (t) => t.slice(1, t.length), d = (t, l) => {
  const { element: c } = t, s = () => {
    if (!c || !t.syncHeight)
      return;
    const n = [[]];
    Array.from(c.querySelectorAll(t.selector)).filter(
      (e) => !e.classList.contains(A(t.applyTo))
    ).forEach((e) => {
      const i = e.clientHeight, o = e.getAttribute(t.horizontalAttribute), r = e.getAttribute(t.verticalAttribute);
      o === null || r === null || (n[o] || (n[o] = []), (!n[o][r] || i > n[o][r]) && (n[o][r] = i - y));
    }), Array.from(c.querySelectorAll(t.applyTo)).forEach((e) => {
      const i = e.getAttribute(t.horizontalAttribute), o = e.getAttribute(t.verticalAttribute);
      if (i === null || o === null)
        return;
      const r = h(e), u = Math.round(n[i][o] - r);
      m(e, { height: u }, !0);
    });
  };
  f.useEffect(s, l);
};
export {
  d as useRowSync
};
