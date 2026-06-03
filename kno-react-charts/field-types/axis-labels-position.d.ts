/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * The position of the axis labels.
 *
 * @example
 * ```jsx
 * import { Chart, ChartValueAxis, ChartValueAxisItem } from '@progress/kno-react-charts';
 *
 * const ChartContainer = () => (
 *  <Chart>
 *    <ChartValueAxis>
 *      <ChartValueAxisItem labels={{ position: "end" }}/>
 *    </ChartValueAxis>
 *  </Chart>
 * );
 * ```
 */
export type AxisLabelsPosition = 'start' | 'end' | 'onAxis' | '';
