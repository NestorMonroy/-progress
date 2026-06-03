/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * Specifies the marker type.
 *
 * > Note that `"rect"` is an alias for `"square"`.
 *
 * @example
 * ```jsx
 * import {
 *  Chart,
 *  ChartSeries,
 *  ChartSeriesItem
 * } from '@progress/kno-react-charts';
 *
 * const data = [1, 2, 3];
 * const markerType = "cross";
 *
 * const ChartContainer = () => (
 *  <Chart>
 *    <ChartSeries>
 *      <ChartSeriesItem type="line" data={data} markers={{ type: markerType }} />
 *    </ChartSeries>
 *  </Chart>
 * );
 * ```
 */
export type MarkerType = 'square' | 'circle' | 'triangle' | 'cross' | 'rect' | 'roundedRect';
