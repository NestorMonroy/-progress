/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { PreventableEvent as r } from "./preventable-event.mjs";
class i extends r {
  /**
   * @hidden
   */
  constructor(t, e) {
    super(e), this.originalEvent = t.originalEvent;
  }
}
export {
  i as ZoomStartEvent
};
