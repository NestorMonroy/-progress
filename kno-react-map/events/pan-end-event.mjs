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
  constructor(n, t) {
    super(t), this.origin = n.origin, this.center = n.center, this.originalEvent = n.originalEvent;
  }
}
export {
  o as PanEndEvent
};
