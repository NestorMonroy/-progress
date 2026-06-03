/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { TooltipPoint } from './Point.js';
export interface SharedTooltipContext {
    /**
     * The text of the category column in the shared tooltip.
     */
    categoryText?: string;
    /**
     * Determines whether to show color markers for each series in the shared tooltip.
     */
    colorMarker?: boolean;
    /**
     * The number of columns to span in the shared tooltip table.
     */
    colspan: number;
    /**
     * Determines whether to show the series name column in the shared tooltip.
     */
    nameColumn?: boolean;
    /**
     * An array of data points in the shared tooltip.
     */
    points: Array<TooltipPoint>;
}
export interface TooltipContext {
    /**
     * The data point for the tooltip.
     */
    point: TooltipPoint;
}
