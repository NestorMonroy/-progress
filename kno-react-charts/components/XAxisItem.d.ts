/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { XAxis } from '../common/property-types';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartXAxisItem component ([see example](components/charts/chart/elements/axes#toc-scatter-chart-axes)).
 */
export interface ChartXAxisItemProps extends XAxis {
    /**
     * @hidden
     */
    children?: React.ReactNode;
}
/**
 * Represents the knoReact ChartXAxisItem component ([see example](components/charts/chart/elements/axes#toc-scatter-chart-axes)).
 *
 * @remarks
 * Supported children components are: {@link ChartXAxisCrosshair}, {@link ChartXAxisLabels}, {@link ChartXAxisNotes}, {@link ChartXAxisTitle}.
 */
declare const ChartXAxisItem: React.FunctionComponent<ChartXAxisItemProps>;
export { ChartXAxisItem };
