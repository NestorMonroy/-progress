/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ValueAxis } from '../common/property-types';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartValueAxisItem component ([see example](components/charts/chart/elements/axes#toc-categorical-chart-axes)).
 */
export interface ChartValueAxisItemProps extends ValueAxis {
    /**
     * @hidden
     */
    children?: React.ReactNode;
}
/**
 * Represents the knoReact ChartValueAxisItem component ([see example](components/charts/chart/elements/axes#toc-categorical-chart-axes)).
 *
 * @remarks
 * Supported children components are: {@link ChartValueAxisCrosshair}, {@link ChartValueAxisLabels}, {@link ChartValueAxisNotes}, {@link ChartValueAxisTitle}.
 */
declare const ChartValueAxisItem: React.FunctionComponent<ChartValueAxisItemProps>;
export { ChartValueAxisItem };
