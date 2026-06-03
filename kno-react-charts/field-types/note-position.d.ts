/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * Specifies the position of a note.
 *
 * @example
 * ```jsx
 * import {
 *  Chart,
 *  ChartValueAxis,
 *  ChartValueAxisItem
 * } from '@progress/kno-react-charts';
 *
 * const data = [{value: 1}];
 * const position = "right";
 *
 * const ChartContainer = () => (
 *  <Chart>
 *    <ChartValueAxis>
 *      <ChartValueAxisItem notes={{ data, position }} />
 *    </ChartValueAxis>
 *  </Chart>
 * );
 * ```
 */
export type NotePosition = 'top' | 'bottom' | 'left' | 'right';
