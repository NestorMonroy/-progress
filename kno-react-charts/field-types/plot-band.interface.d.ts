/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { PlotBandLabel } from './plot-band-label.interface';
/**
 * A plot band ([see example](components/charts/chart/elements/plot-bands)).
 */
export interface PlotBand {
    /**
     * The color of the plot band.
     */
    color?: string;
    /**
     * The start position of the plot band in axis units.
     */
    from?: number | Date;
    /**
     * The opacity of the plot band.
     */
    opacity?: number;
    /**
     * The end position of the plot band in axis units.
     */
    to?: number | Date;
    /**
     * The label configuration of the plot band.
     *
     * To display a label, set the text option.
     *
     * See [Plot Bands - Labels](components/charts/chart/elements/plot-bands#toc-labels) for sample usage.
     */
    label?: PlotBandLabel;
}
