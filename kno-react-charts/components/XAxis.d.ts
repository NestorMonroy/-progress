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
export interface ChartXAxisProps {
    /**
     * The child components of the ChartXAxis. Supported child components are: ChartXAxisItem.
     */
    children?: React.ReactNode;
}
/**
 * Represents the knoReact ChartXAxis component ([see example](components/charts/chart/elements/axes#toc-scatter-chart-axes)).
 *
 * @remarks
 * Supported children components are: {@link ChartXAxisItem}.
 */
declare const ChartXAxis: React.FunctionComponent<ChartXAxisProps>;
export { ChartXAxis };
