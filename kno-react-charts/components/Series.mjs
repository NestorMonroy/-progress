/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as i from "react";
import { CollectionConfigurationComponent as a } from "./base/CollectionConfigurationComponent.mjs";
import { ChartSeriesItem as m } from "./SeriesItem.mjs";
import { validateChildren as n } from "../utils/index.mjs";
const r = (e) => /* @__PURE__ */ i.createElement(a, { ...e, _chartKey: "series" });
r.propTypes = {
  children: function(e, t, o) {
    return n(e, t, o, m);
  }
};
r.displayName = "ChartSeries";
export {
  r as ChartSeries
};
