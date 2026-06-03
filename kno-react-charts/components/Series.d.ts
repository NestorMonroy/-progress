/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartSeries component.
 */
export interface ChartSeriesProps {
    /**
     * The child components of the ChartSeries. Supported child components are: ChartSeriesItem.
     */
    children?: React.ReactNode;
}
/**
 * Represents the knoReact ChartSeries component.
 *
 * @remarks
 * Supported children components are: {@link ChartSeriesItem}.
 */
declare const ChartSeries: React.FunctionComponent<ChartSeriesProps>;
export { ChartSeries };
