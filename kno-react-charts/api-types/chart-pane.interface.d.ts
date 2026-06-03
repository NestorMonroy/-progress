/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Group } from '@progress/kno-drawing';
/**
 * An interface for the Chart panes.
 */
export interface ChartPaneType {
    /**
     * The group which holds the Drawing elements of the Chart.
     */
    chartsVisual: Group;
    /**
     * The Drawing group that is used to draw the pane.
     */
    visual: Group;
}
