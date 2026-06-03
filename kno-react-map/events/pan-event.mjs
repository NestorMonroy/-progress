/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { BaseEvent as i } from "./base-event.mjs";
class o extends i {
  /**
   * @hidden
   */
  constructor(t, n) {
    super(n), this.origin = t.origin, this.center = t.center, this.originalEvent = t.originalEvent;
  }
}
export {
  o as PanEvent
};
