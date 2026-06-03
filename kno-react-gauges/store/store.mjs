/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { canUseDOM as u } from "@progress/kno-react-common";
const l = 1e3 / 60, T = (i) => {
  let o, s, t = [];
  const n = () => o, c = (e) => {
    o = i(o, e), u && (window.clearTimeout(s), s = window.setTimeout(() => t.forEach((r) => r()), l));
  }, a = (e) => (t.push(e), () => t = t.filter((r) => r !== e));
  return c({}), { getState: n, dispatch: c, subscribe: a };
};
export {
  l as THROTTLE_MS,
  T as createStore
};
