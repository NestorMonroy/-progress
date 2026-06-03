/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Chart } from '../Chart.js';
import { drawing, geometry } from '@progress/kno-drawing';
/**
 * The context for the series label visual function.
 */
export interface SeriesLabelsVisualArgs {
    /**
     * A function that can be used to get the default visual.
     */
    createVisual: () => drawing.Element;
    /**
     * The options of the label.
     */
    options: any;
    /**
     * The rectangle that defines the normal position of the visual.
     */
    rect: geometry.Rect;
    /**
     * The instance of the Chart component.
     */
    sender: Chart;
    /**
     * The text of the label.
     */
    text: string;
}
