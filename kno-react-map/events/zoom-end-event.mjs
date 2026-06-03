/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { BaseEvent as n } from "./base-event.mjs";
class s extends n {
  /**
   * @hidden
   */
  constructor(t, e) {
    super(e), this.originalEvent = t.originalEvent;
  }
}
export {
  s as ZoomEndEvent
};
