/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { PreventableEvent as n } from "./PreventableEvent.mjs";
class o extends n {
  /**
   * @hidden
   */
  constructor(t, e, r) {
    super(), this.target = t, this.prevIndex = e, this.element = r;
  }
}
export {
  o as SortableOnDragStartEvent
};
