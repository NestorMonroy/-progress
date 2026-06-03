/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { BaseEvent as o } from "./base-event.mjs";
class i extends o {
  /**
   * @hidden
   */
  constructor(t, s) {
    super(s), this.axis = t.axis, this.from = t.from, this.to = t.to;
  }
}
export {
  i as SelectEndEvent
};
