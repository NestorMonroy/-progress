/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * The line style of the series.
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
 *
 * const ChartContainer = () => (
 *  <Chart>
 *    <ChartSeries>
 *      <ChartSeriesItem type="line" data={data} style="smooth" />
 *    </ChartSeries>
 *  </Chart>
 * );
 * ```
 */
export type LineStyle = 'normal' | 'step' | 'smooth';
