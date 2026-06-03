/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { BaseEvent as e } from "./base-event.mjs";
class i extends e {
  // tslint:enable:max-line-length
  /**
   * @hidden
   */
  constructor(s, t) {
    super(t), this.axisRanges = s.axisRanges, this.nativeEvent = s.originalEvent;
  }
}
export {
  i as ZoomEndEvent
};
