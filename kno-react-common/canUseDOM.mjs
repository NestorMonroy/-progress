/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const e = !!// from fbjs
(typeof window != "undefined" && window.document && window.document.createElement);
export {
  e as canUseDOM
};
