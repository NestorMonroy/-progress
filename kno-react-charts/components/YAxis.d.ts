/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartXAxis component ([see example](components/charts/chart/elements/axes#toc-scatter-chart-axes)).
 */
export interface ChartYAxisProps {
    /**
     * The child components of the ChartYAxis. Supported child components are: ChartYAxisItem.
     */
    children?: React.ReactNode;
}
/**
 * Represents the knoReact ChartYAxis component ([see example](components/charts/chart/elements/axes#toc-scatter-chart-axes)).
 *
 * @remarks
 * Supported children components are: {@link ChartYAxisItem}.
 */
declare const ChartYAxis: React.FunctionComponent<ChartYAxisProps>;
export { ChartYAxis };
