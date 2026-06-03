/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as r from "react";
import { classNames as u } from "@progress/kno-react-common";
import { InstanceObserver as S } from "@progress/kno-charts";
import { TooltipPopup as d } from "./Popup.mjs";
import { ChartContext as f } from "../ChartContext.mjs";
const x = "k-chart-crosshair-tooltip", v = "k-chart-tooltip-inverse", n = class n extends r.Component {
  constructor(t) {
    super(t), this.context = null, this.state = {
      popupShown: !1
    }, this.chartObserver = new S(this, {
      showTooltip: "onShowTooltip",
      hideTooltip: "onHideTooltip"
    });
  }
  componentDidMount() {
    var t;
    (t = this.context) == null || t.observersStore.dispatch({
      type: "add",
      payload: this.chartObserver
    });
  }
  render() {
    const { popupContend: t, className: o, ...e } = this.state, p = this.state.popupShown ? () => t : Function.prototype, s = u({
      [x]: !0,
      [v]: !!o
    });
    return /* @__PURE__ */ r.createElement(d, { ...e, popupContent: p, className: s });
  }
  componentWillUnmount() {
    var t;
    (t = this.context) == null || t.observersStore.dispatch({
      type: "remove",
      payload: this.chartObserver
    });
  }
  onShowTooltip(t) {
    const { anchor: o, style: e, className: p, crosshair: s, axisName: a, axisIndex: c, value: h } = t, { name: l, index: m } = this.props;
    s && a === l && c === m && this.setState({
      popupShown: !0,
      popupAlign: o.align,
      popupOffset: o.point,
      popupContend: h,
      popupStyles: e,
      className: p
    });
  }
  onHideTooltip() {
    this.setState({
      popupShown: !1,
      popupStyles: {},
      className: void 0
    });
  }
};
n.contextType = f;
let i = n;
export {
  i as CrosshairTooltip
};
