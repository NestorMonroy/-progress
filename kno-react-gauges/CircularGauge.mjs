/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ArcGauge as r } from "./ArcGauge.mjs";
import { CircularGauge as a } from "@progress/kno-charts";
class t extends r {
  constructor() {
    super(...arguments), this.gaugeType = a;
  }
}
export {
  t as CircularGauge
};
