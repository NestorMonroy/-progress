/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * The `baseUnit` type of an X or Y axis.
 *
 * @example
 * ```jsx
 * import {
 *  Chart,
 *  ChartXAxis,
 *  ChartXAxisItem,
 *  ChartSeries,
 *  ChartSeriesItem
 * } from '@progress/kno-react-charts';
 *
 * const baseUnit = "months";
 * const data = [[new Date(2000, 0, 1), 1], [new Date(2001, 0, 1), 1]];
 *
 * const ChartContainer = () => (
 *  <Chart>
 *    <ChartXAxis>
 *     <ChartXAxisItem baseUnit={baseUnit} />
 *    </ChartXAxis>
 *    <ChartSeries>
 *      <ChartSeriesItem type="scatter" data={data} />
 *    </ChartSeries>
 *  </Chart>
 * );
 * ```
 */
export type BaseUnit = 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years';
