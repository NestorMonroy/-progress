/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * The dash line type.
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
 *      <ChartSeriesItem type="line" data={data} dashType="dot" />
 *    </ChartSeries>
 *  </Chart>
 * );
 * ```
 */
export type DashType = 'dash' | 'dashDot' | 'dot' | 'longDash' | 'longDashDot' | 'longDashDotDot' | 'solid';
