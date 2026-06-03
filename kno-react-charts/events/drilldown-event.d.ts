/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Charts } from '../common/charts';
import { BaseEvent } from './base-event.js';
import { EventSeriesOptions } from '../api-types/event-series-options.interface';
import { SeriesPointType } from '../api-types/series-point.interface';
import { ChartDrilldownState } from '../api-types/chart-drilldown-state.interface';
/**
 * Arguments for the `drilldown` event.
 *
 * See [Drilldown Charts](components/charts/drill-down).
 */
export declare class DrilldownEvent extends BaseEvent {
    /**
     * The clicked series point.
     */
    point: SeriesPointType;
    /**
     * The clicked point series options.
     */
    series: EventSeriesOptions;
    /**
     * The data point value.
     */
    value: any;
    /**
     * The current Chart [drilldown state](components/charts/api/chartprops#toc-drilldownstate).
     */
    currentState: ChartDrilldownState;
    /**
     * The Chart [drilldown state](components/charts/api/chartprops#toc-drilldownstate) that will apply the current drilldown operation.
     *
     * See [Drilldown](components/charts/drill-down) for an application example.
     */
    nextState: ChartDrilldownState;
    /**
     * @hidden
     */
    constructor(e: any, target: Charts);
}
