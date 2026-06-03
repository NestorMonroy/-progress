/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * [The series type](components/charts/series-types#series-type)
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
 * const seriesType = "verticalLine";
 *
 * const ChartContainer = () => (
 *  <Chart>
 *    <ChartSeries>
 *      <ChartSeriesItem type="line" data={data} type={seriesType} />
 *    </ChartSeries>
 *  </Chart>
 * );
 * ```
 */
export type SeriesType = 'area' | 'bar' | 'boxPlot' | 'bubble' | 'bullet' | 'candlestick' | 'column' | 'donut' | 'exponentialTrendline' | 'funnel' | 'pyramid' | 'heatmap' | 'horizontalWaterfall' | 'line' | 'linearTrendline' | 'logarithmicTrendline' | 'movingAverageTrendline' | 'ohlc' | 'pie' | 'polarArea' | 'polarLine' | 'polarScatter' | 'polynomialTrendline' | 'powerTrendline' | 'radarArea' | 'radarColumn' | 'radarLine' | 'rangeArea' | 'rangeBar' | 'rangeColumn' | 'scatter' | 'scatterLine' | 'verticalArea' | 'verticalBoxPlot' | 'verticalBullet' | 'verticalLine' | 'verticalRangeArea' | 'waterfall';
