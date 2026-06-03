/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as a from "react";
import { BaseGauge as n } from "./BaseGauge.mjs";
import { LinearGauge as u } from "@progress/kno-charts";
import { Group as i } from "@progress/kno-drawing";
import { classNames as o } from "@progress/kno-react-common";
import { resolveGaugeColorsVariables as g } from "./utils/css-variables.mjs";
class f extends a.Component {
  constructor() {
    super(...arguments), this._baseGauge = null, this.getTarget = () => this, this.deriveOptionsFromParent = (e) => {
      const { pointer: t, scale: s } = this.props, r = {
        ...e,
        pointer: t,
        scale: s
      };
      return this.element ? g(r, this.element) : r;
    };
  }
  /**
   * @hidden
   */
  get gaugeInstance() {
    return this._baseGauge !== null ? this._baseGauge.gaugeInstance : null;
  }
  /**
   * The Drawing `Surface` of the Gauge.
   */
  get surface() {
    return this._baseGauge !== null ? this._baseGauge.surface : null;
  }
  /**
   * The DOM element of the Gauge.
   */
  get element() {
    return this._baseGauge !== null ? this._baseGauge.element : null;
  }
  /**
   * @hidden
   */
  render() {
    const { children: e, className: t, ...s } = this.props;
    return /* @__PURE__ */ a.createElement(
      n,
      {
        ...s,
        deriveOptionsFromParent: this.deriveOptionsFromParent,
        ref: (r) => {
          this._baseGauge = r;
        },
        gaugeConstructor: u,
        getTarget: this.getTarget,
        className: o("k-gauge", t)
      },
      e
    );
  }
  /**
   * Exports a Gauge component as a Drawing `Scene`.
   *
   * @param {any} options - The parameters for the export operation.
   * @returns {Promise<Group>} - A promise that returns the root `Group` of the scene.
   */
  exportVisual(e) {
    return this.gaugeInstance !== null ? Promise.resolve(this.gaugeInstance.exportVisual(e)) : Promise.resolve(new i());
  }
}
export {
  f as LinearGauge
};
