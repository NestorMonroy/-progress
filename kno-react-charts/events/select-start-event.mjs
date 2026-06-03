/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { PreventableEvent as s } from "./preventable-event.mjs";
class i extends s {
  /**
   * @hidden
   */
  constructor(t, r) {
    super(r), this.axis = t.axis, this.from = t.from, this.to = t.to;
  }
}
export {
  i as SelectStartEvent
};
