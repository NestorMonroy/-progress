/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { StockChartProps } from './StockChartProps';
import { Surface } from '@progress/kno-drawing';
import * as React from 'react';
/**
 * The root StockChart component.
 *
 * @remarks
 * Supported children components are: {@link ChartAxisDefaults}, {@link ChartCategoryAxis}, {@link ChartArea}, {@link ChartNavigator},
 *  {@link ChartLegend}, {@link ChartPane}, {@link ChartPaneDefaults}, {@link ChartPanes}, {@link ChartPlopArea}, {@link ChartPlopArea},
 *  {@link ChartSeries}, {@link ChartSeriesDefaults}, {@link ChartSubTitle}, {@link ChartTitle}, {@link ChartTooltip},
 *  {@link ChartValueAxis}, {@link ChartXAxis}, {@link ChartYAxis}, {@link ChartZoomable}.
 */
export declare class StockChart extends React.Component<StockChartProps, {}> {
    private _baseChart;
    /**
     * @hidden
     */
    get chartInstance(): any;
    /**
     * The Drawing `Surface` of the StockChart.
     */
    get surface(): Surface | null;
    /**
     * The DOM element of the StockChart.
     */
    get element(): HTMLDivElement | null;
    /**
     * @hidden
     */
    deriveOptionsFromParent: (options: any) => any;
    /**
     * @hidden
     */
    onRefresh: (chartOptions: any, themeOptions: any, chartInstance: any) => void;
    /**
     * @hidden
     */
    render(): any;
    private getTarget;
}
