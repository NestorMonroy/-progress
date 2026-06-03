/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * The position of a note label.
 *
 * @example
 * ```jsx
 * import {
 *  Chart,
 *  ChartValueAxis,
 *  ChartValueAxisItem
 * } from '@progress/kno-react-charts';
 *
 * const data = [{value: 1, label: { text: 'Foo' }}];
 * const position = "outside";
 *
 * const ChartContainer = () => (
 *  <Chart>
 *    <ChartValueAxis>
 *      <ChartValueAxisItem notes={{ data, label: { position } }} />
 *    </ChartValueAxis>
 *  </Chart>
 * );
 * ```
 */
export type NoteLabelPosition = 'inside' | 'outside';
