/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const n = (t, e) => t === e.length - 1, s = (t, e) => {
  const o = n(t, e);
  return t === 0 && !o ? "top" : o ? "bot" : "mid";
};
export {
  s as getNodePosition
};
