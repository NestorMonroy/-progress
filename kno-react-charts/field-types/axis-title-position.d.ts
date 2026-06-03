/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * The position of an axis title.
 *
 * @example
 * ```jsx
 * import { Chart, ChartValueAxis, ChartValueAxisItem } from '@progress/kno-react-charts';
 *
 * const ChartContainer = () => (
 *  <Chart>
 *    <ChartValueAxis>
 *      <ChartValueAxisItem title={{ text: 'Title', position: "top" }}/>
 *    </ChartValueAxis>
 *  </Chart>
 * );
 * ```
 */
export type AxisTitlePosition = 'top' | 'bottom' | 'left' | 'right' | 'center';
