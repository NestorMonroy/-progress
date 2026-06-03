/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const s = (t, e) => (r) => {
  const { c: n = t } = r;
  return {
    [n[e] || ""]: !0
  };
};
export {
  s as getClassByName
};
