/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartCategoryAxis component ([see example](components/charts/chart/elements/axes#toc-categorical-chart-axes)).
 */
export interface ChartCategoryAxisProps {
    /**
     * The child components of the ChartCategoryAxis. Supported child components are: ChartCategoryAxisItem.
     */
    children?: React.ReactNode;
}
/**
 * Represents the knoReact ChartCategoryAxis component.
 *
 * @remarks
 * Supported children components are: {@link ChartCategoryAxisItem}.
 */
declare const ChartCategoryAxis: React.FunctionComponent<ChartCategoryAxisProps>;
export { ChartCategoryAxis };
