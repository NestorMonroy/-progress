/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { BaseChartProps } from './BaseChartProps';
/**
 * Represents the props of the knoReact Sparkline component.
 */
export interface SparklineProps extends Omit<BaseChartProps, 'drilldownState' | 'onDrilldown' | 'onLegendItemClick' | 'onLegendItemHover' | 'onNoteClick' | 'onNoteHover' | 'axisLabelClick'> {
    /**
     * The data for the default Sparkline series. Discarded if series are supplied.
     */
    data?: any;
    /**
     * The data for the default Sparkline series. Discarded if series are supplied.
     */
    type?: string;
}
