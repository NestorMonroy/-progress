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
  constructor(e, t) {
    super(t), this.series = e.series, this.seriesIndex = e.seriesIndex, this.pointIndex = e.pointIndex, this.text = e.text;
  }
  /**
   * @hidden
   */
  preventDefault() {
    super.preventDefault();
  }
}
export {
  i as LegendItemLeaveEvent
};
