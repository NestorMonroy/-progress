/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { MultiPath, Group } from '@progress/kno-drawing';
/**
 * An interface for the plot area of the Chart.
 */
export interface ChartPlotAreaType {
    /**
     * The Drawing `MultiPath` that is used to draw the background.
     */
    backgroundVisual: MultiPath;
    /**
     * The Drawing `Group` that is used to draw the plot area.
     */
    visual: Group;
}
