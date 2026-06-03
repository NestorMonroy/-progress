/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { BaseEvent as s } from "./base-event.mjs";
class a extends s {
  /**
   * @hidden
   */
  constructor(t, e) {
    super(e), this.category = t.category, this.nativeEvent = t.originalEvent, this.value = t.value, this.x = t.x, this.y = t.y;
  }
}
export {
  a as PlotAreaClickEvent
};
