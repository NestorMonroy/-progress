/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
class o {
  /**
   * @hidden
   */
  constructor(t, e) {
    this.sender = t, this.syntheticEvent = e;
  }
}
function s(n, t) {
  return new o(n, t);
}
export {
  o as DomEvent,
  s as toDomEvent
};
