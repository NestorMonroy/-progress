/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { BaseUnit } from './base-unit';
/**
 * The `baseUnit` type of the category axis.
 *
 * @example
 * ```jsx
 * import {
 *  Chart,
 *  ChartCategoryAxis,
 *  ChartCategoryAxisItem,
 *  ChartSeries,
 *  ChartSeriesItem
 * } from '@progress/kno-react-charts';
 *
 * const baseUnit = "months";
 * const data = [{ category: new Date(2000, 0, 1), value: 1 }, { category: new Date(2001, 0, 1), value: 1}];
 *
 * const ChartContainer = () => (
 *  <Chart>
 *    <ChartCategoryAxis>
 *     <ChartCategoryAxisItem baseUnit={baseUnit} />
 *    </ChartCategoryAxis>
 *    <ChartSeries>
 *      <ChartSeriesItem categoryField="category" data={data} />
 *    </ChartSeries>
 *  </Chart>
 * );
 * ```
 */
export type CategoryBaseUnit = BaseUnit | 'auto' | 'fit';
