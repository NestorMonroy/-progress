/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartValueAxis component ([see example](components/charts/chart/elements/axes#toc-categorical-chart-axes)).
 */
export interface ChartValueAxisProps {
    /**
     * The child components of the ChartValueAxis. Supported child components are: ChartValueAxisItem.
     */
    children?: React.ReactNode;
}
/**
 * Represents the knoReact ChartValueAxis component ([see example](components/charts/chart/elements/axes#toc-categorical-chart-axes)).
 *
 * @remarks
 * Supported children components are: {@link ChartValueAxisItem}.
 */
declare const ChartValueAxis: React.FunctionComponent<ChartValueAxisProps>;
export { ChartValueAxis };
