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
   * If called, the series visibility is not toggled as a result of clicking the legend item.
   */
  preventDefault() {
    super.preventDefault();
  }
}
export {
  i as LegendItemClickEvent
};
