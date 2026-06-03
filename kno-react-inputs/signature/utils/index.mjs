/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function n(r, t) {
  let e = r;
  for (; e && e !== t; )
    e = e.parentNode;
  return !!e;
}
export {
  n as hasParent
};
