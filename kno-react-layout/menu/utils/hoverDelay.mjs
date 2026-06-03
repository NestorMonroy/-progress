/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function n(e) {
  return e.hoverOpenDelay !== void 0 ? e.hoverOpenDelay : e.openOnClick ? 0 : 100;
}
function o(e) {
  return e.hoverCloseDelay !== void 0 ? e.hoverCloseDelay : 100;
}
export {
  o as getHoverCloseDelay,
  n as getHoverOpenDelay
};
