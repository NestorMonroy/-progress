/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Chart } from '../Chart.js';
import { drawing } from '@progress/kno-drawing';
/**
 * The context for the legend item visual function.
 */
export interface LegendItemVisualArgs {
    /**
     * A function that can be used to get the default visual.
     */
    createVisual: () => drawing.Element;
    /**
     * The options of the legend item.
     */
    options: any;
    /**
     * The index of the point in the series. Available for the Donut, Pie, and Funnel series.
     */
    pointIndex: any;
    /**
     * The instance of the Chart component.
     */
    sender: Chart;
    /**
     * The item series.
     */
    series: any;
}
