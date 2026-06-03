/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as l from "react";
import v from "prop-types";
import { provideIntlService as g, registerForIntl as I } from "@progress/kno-react-intl";
import { InstanceObserver as S, chartTheme as y, deepExtend as C, chartBaseTheme as O } from "@progress/kno-charts";
import { validatePackage as D, getLicenseMessage as T, WatermarkOverlay as E, canUseDOM as P } from "@progress/kno-react-common";
import { toggle as b, hasParent as L } from "./utils/index.mjs";
import { create as k } from "./events/chart-event-builder.mjs";
import { toDomEvent as x } from "./events/dom-event.mjs";
import { createStore as f } from "./store/store.mjs";
import { optionsReducer as M, observersReducer as R, themeReducer as U } from "./store/reducer.mjs";
import { SeriesTooltip as W } from "./tooltip/Series.mjs";
import { CrosshairTooltipContainer as F } from "./tooltip/CrosshairContainer.mjs";
import { ChartContext as z } from "./ChartContext.mjs";
import { packageMetadata as w } from "./package-metadata.mjs";
import { DrilldownEvent as _ } from "./events/drilldown-event.mjs";
const m = class m extends l.Component {
  constructor(t) {
    super(t), this.chartInstance = null, this.surface = null, this._element = null, this.optionsStore = {}, this.optionsUnsubscriber = Function.prototype, this.themeStore = {}, this.themeUnsubscriber = Function.prototype, this.observersStore = {}, this.suppressTransitions = !1, this.showLicenseWatermark = !1, this.onRender = (e) => {
      this.chartInstance !== null && (this.surface = e.sender.surface, this.trigger("render", e));
    }, this.onDrilldown = (e) => {
      var i;
      const { series: s } = this.optionsStore.getState(), r = s.find((n) => n.name === e.series.name);
      if (r.drilldownSeriesFactory) {
        const n = "onDrilldown";
        if (this.props.hasOwnProperty(n)) {
          const o = { seriesName: r.name, drilldownValue: e.value }, h = [...((i = this.props.drilldownState) == null ? void 0 : i.steps) || [], o], c = this.props.getTarget(), p = {
            ...e,
            currentState: this.props.drilldownState,
            nextState: { steps: h }
          }, d = new _(p, c);
          this.props[n].call(void 0, d);
        }
      }
      return !0;
    }, this.onLegendItemClick = (e) => {
      if (this.chartInstance !== null)
        if (this.props.onLegendItemClick)
          this.trigger("legendItemClick", e);
        else {
          const { series: s } = this.optionsStore.getState();
          if (!s)
            return;
          let r = {};
          const { seriesIndex: i, pointIndex: n } = e, o = s[i];
          if (n === void 0)
            r = Object.assign({}, o, { visible: b(o.visible) });
          else {
            const h = o.pointVisibility = o.pointVisibility || [];
            h[n] = b(h[n]), r = Object.assign({}, o);
          }
          this.optionsStore.dispatch({
            chartCollectionIdxKey: `series_${i}`,
            payload: r
          }), this.suppressTransitions = !0;
        }
    }, this.onWindowResize = () => {
      this.chartInstance !== null && this.chartInstance.resize();
    }, this.onChartMouseLeave = (e) => {
      const s = x(this, e);
      this.triggerDomEvent("onMouseLeave", s) ? e.preventDefault() : this.chartInstance !== null && this.chartInstance.hideElements();
    }, this.onChildMouseLeave = (e) => {
      const { syntheticEvent: s } = e;
      return this.chartInstance && !L(s.relatedTarget, this.element) && this.chartInstance.hideElements(), !1;
    }, this.showLicenseWatermark = !D(w, { component: "Chart" }), this.licenseMessage = T(w), this.optionsStore = f(M), this.observersStore = f(R), this.childrenObserver = new S(this, { onMouseLeave: "onChildMouseLeave" }), this.state = {
      optionsStore: this.optionsStore,
      observersStore: this.observersStore,
      childrenObserver: this.childrenObserver,
      drilldownState: { steps: [] }
    }, this.themeStore = f(U), this.chartObserver = new S(this, {
      render: "onRender",
      legendItemClick: "onLegendItemClick",
      drilldown: "onDrilldown",
      styleChanged: "onStyleChanged"
    });
  }
  /**
   * @hidden
   */
  get element() {
    return this._element;
  }
  /**
   * @hidden
   */
  static getDerivedStateFromProps(t, e) {
    return {
      ...e,
      drilldownState: t.drilldownState || []
    };
  }
  /**
   * @hidden
   */
  componentDidMount() {
    this._element && (this.readTheme(), this.instantiateCoreChart()), this.optionsUnsubscriber = this.optionsStore.subscribe(this.refresh.bind(this)), this.themeUnsubscriber = this.themeStore.subscribe(this.refresh.bind(this)), window.addEventListener("resize", this.onWindowResize);
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    this.optionsUnsubscriber(), this.themeUnsubscriber(), this.chartInstance !== null && (this.chartInstance.destroy(), this.chartInstance = null), window.removeEventListener("resize", this.onWindowResize);
  }
  /**
   * @hidden
   */
  componentDidUpdate(t) {
    const { dir: e, children: s, ...r } = this.props;
    if (this.chartInstance !== null) {
      const i = g(this), n = this.chartInstance.chartService, o = i.locale !== n._intlService.locale, h = Object.entries(t).filter((c) => c[0] !== "dir" && c[0] !== "children").some((c) => {
        const [p, d] = c;
        return !(r.hasOwnProperty(p) && r[p] === d);
      });
      o && (this.chartInstance.chartService._intlService = i, this.chartInstance.chartService.format._intlService = i, h || this.chartInstance.noTransitionsRedraw()), h && this.refresh(), t.dir !== e && this.chartInstance.setDirection(this.getDirection(e));
    }
  }
  /**
   * @hidden
   */
  render() {
    const { style: t = {}, className: e, wrapper: s, children: r } = this.props, i = Object.assign({}, t, { position: "relative" }), n = l.createElement(
      s,
      {
        className: e,
        style: i,
        key: "chartElement"
      },
      /* @__PURE__ */ l.createElement(
        "div",
        {
          onMouseLeave: this.onChartMouseLeave,
          ref: (o) => {
            this._element = o;
          },
          className: "k-chart-surface"
        },
        r
      ),
      /* @__PURE__ */ l.createElement(l.Fragment, null, this.showLicenseWatermark && /* @__PURE__ */ l.createElement(E, { message: this.licenseMessage }))
    );
    return /* @__PURE__ */ l.createElement(z.Provider, { value: this.state }, /* @__PURE__ */ l.createElement(W, { key: "seriesTooltip" }), /* @__PURE__ */ l.createElement(F, { key: "crosshairTooltips" }), n);
  }
  /**
   * @hidden
   */
  getDirection(t) {
    return (t !== void 0 ? t : P && window.getComputedStyle(this.element).direction || "ltr") === "rtl";
  }
  /**
   * @hidden
   */
  getChartOptions() {
    const {
      renderAs: t,
      pannable: e,
      zoomable: s,
      paneDefaults: r,
      panes: i,
      transitions: n,
      seriesColors: o,
      seriesDefaults: h,
      axisDefaults: c,
      observeStyles: p,
      deriveOptionsFromParent: d
    } = this.props;
    let a = {};
    return t !== void 0 && (a.renderAs = t), e !== void 0 && (a.pannable = e), s !== void 0 && (a.zoomable = s), r !== void 0 && (a.paneDefaults = r), i !== void 0 && (a.panes = i), n !== void 0 && (a.transitions = n), o !== void 0 && (a.seriesColors = o), h !== void 0 && (a.seriesDefaults = h), c !== void 0 && (a.axisDefaults = c), a.observeStyles = p !== void 0 ? p : !0, a = Object.assign(a, this.optionsStore.getState()), d && (a = d(a)), a;
  }
  /**
   * @hidden
   */
  refresh() {
    if (this.chartInstance !== null) {
      const t = this.themeStore.getState(), e = this.getChartOptions(), s = e.transitions;
      this.suppressTransitions && (e.transitions = !1), this.props.onRefresh ? this.props.onRefresh.call(void 0, e, t, this.chartInstance) : this.chartInstance.setOptions(e, t), this.suppressTransitions && (e.transitions = s, this.suppressTransitions = !1);
    }
  }
  /**
   * @hidden
   */
  instantiateCoreChart() {
    const { dir: t, chartConstructor: e } = this.props, s = this.getChartOptions();
    this.chartInstance = new e(this.element, s, this.themeStore.getState(), {
      rtl: this.getDirection(t),
      intlService: g(this),
      observer: this.chartObserver,
      sender: this
    });
  }
  /* Triggers public dom event handlers */
  /**
   * @hidden
   */
  trigger(t, e) {
    const s = this.props.getTarget(), r = k(t, e, s), i = "on" + t.charAt(0).toUpperCase() + t.slice(1), n = this.observersStore.getState();
    let o = !1;
    for (let h = 0; h < n.length; h++)
      n[h].trigger(t, e) && (o = !0);
    return o === !1 && r && this.props.hasOwnProperty(i) ? (this.props[i].call(void 0, r), r.isDefaultPrevented && r.isDefaultPrevented()) : o;
  }
  /* Used by (event)InstanceObserver to check the wrapper for supported events */
  /**
   * @hidden
   */
  requiresHandlers(t) {
    for (let e = 0; e < t.length; e++) {
      const s = t[e], r = "on" + s.charAt(0).toUpperCase() + s.slice(1);
      if (this.props.hasOwnProperty(r))
        return !0;
    }
    return !1;
  }
  /* Triggers private dom event handlers */
  /**
   * @hidden
   */
  triggerDomEvent(t, e) {
    const s = this.observersStore.getState();
    let r = !1;
    for (let i = 0; i < s.length; i++)
      s[i].trigger(t, e) && (r = !0);
    return r;
  }
  /**
   * @hidden
   */
  onStyleChanged() {
    this.suppressTransitions = !0, this.readTheme();
  }
  /**
   * @hidden
   */
  readTheme() {
    if (this._element) {
      const t = y(this._element), e = C({}, O(), t);
      this.themeStore.dispatch({ type: "push", payload: e });
    }
  }
};
m.propTypes = {
  dir: v.string,
  renderAs: v.oneOf(["svg", "canvas"])
}, m.defaultProps = {
  renderAs: "svg"
};
let u = m;
I(u);
export {
  u as BaseChart
};
