/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartNavigatorSeries component.
 */
export interface ChartNavigatorSeriesProps {
    /**
     * The child components of the ChartNavigatorSeries. Supported child components are: ChartNavigatorSeriesItem.
     */
    children?: React.ReactNode;
}
/**
 * Represents the knoReact ChartNavigatorSeries component.
 *
 * @remarks
 * Supported children components are: {@link ChartNavigatorSeriesItem}.
 */
declare const ChartNavigatorSeries: React.FunctionComponent<ChartNavigatorSeriesProps>;
export { ChartNavigatorSeries };
