/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ChartDrilldownState } from '../api-types/chart-drilldown-state.interface';
/**
 * Arguments for the `drilldownStateChange` event on the Chart Breadcrumb.
 *
 * See [Drilldown Charts](components/charts/drill-down).
 */
export declare class DrilldownStateChangeEvent {
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
    constructor(e: any);
}
