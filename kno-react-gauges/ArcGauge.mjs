/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as u from "react";
import { BaseGauge as o } from "./BaseGauge.mjs";
import { ArcGauge as g } from "@progress/kno-charts";
import { ArcCenter as l } from "./ArcCenter.mjs";
import { drawDOM as m, Group as c } from "@progress/kno-drawing";
import { classNames as p } from "@progress/kno-react-common";
import { resolveGaugeColorsVariables as h } from "./utils/css-variables.mjs";
class O extends u.Component {
  constructor() {
    super(...arguments), this._baseGauge = null, this.gaugeType = g, this.getTarget = () => this, this.deriveOptionsFromParent = (e) => {
      const { value: r, color: t, colors: s, opacity: a, scale: n } = this.props, i = {
        ...e,
        value: r,
        color: t,
        colors: s,
        opacity: a,
        scale: n
      };
      return this.element ? h(i, this.element) : i;
    };
  }
  /**
   * @hidden
   */
  get gaugeInstance() {
    return this._baseGauge ? this._baseGauge.gaugeInstance : null;
  }
  /**
   * The Drawing `Surface` of the Gauge.
   */
  get surface() {
    return this._baseGauge ? this._baseGauge.surface : null;
  }
  /**
   * The DOM element of the Gauge.
   */
  get element() {
    return this._baseGauge ? this._baseGauge.element : null;
  }
  /**
   * @hidden
   */
  render() {
    const { children: e, arcCenterRender: r, centerRender: t, className: s, ...a } = this.props;
    return /* @__PURE__ */ u.createElement(
      o,
      {
        ...a,
        deriveOptionsFromParent: this.deriveOptionsFromParent,
        ref: (n) => {
          this._baseGauge = n;
        },
        gaugeConstructor: this.gaugeType,
        getTarget: this.getTarget,
        className: p("k-gauge k-arcgauge", s)
      },
      e,
      /* @__PURE__ */ u.createElement(l, { render: t || r })
    );
  }
  /**
   * Exports a Gauge component as a Drawing `Scene`.
   *
   * @param {any} options - The parameters for the export operation.
   * @returns {Promise<Group>} - A promise that returns the root `Group` of the scene.
   */
  exportVisual(e) {
    return this.gaugeInstance !== null && this.element ? m(this.element, e) : Promise.resolve(new c());
  }
}
export {
  O as ArcGauge
};
