/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { BaseEvent as s } from "./base-event.mjs";
class o extends s {
  /**
   * @hidden
   */
  constructor(t, a) {
    super(a), this.layer = t.layer, this.shape = t.shape, this.location = null, t.shape && (this.dataItem = t.shape.dataItem, this.location = t.shape.location);
  }
}
export {
  o as ShapeCreatedEvent
};
