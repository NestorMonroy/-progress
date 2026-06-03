/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { PreventableEvent as t } from "./preventable-event.mjs";
class n extends t {
  /**
   * @hidden
   */
  constructor(r, e) {
    super(e), this.marker = r.marker, this.layer = r.layer;
  }
}
export {
  n as MarkerCreatedEvent
};
