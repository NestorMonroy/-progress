/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { YAxis } from '../common/property-types';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartYAxisItem component ([see example](components/charts/chart/elements/axes#toc-scatter-chart-axes)).
 */
export interface ChartYAxisItemProps extends YAxis {
    /**
     * @hidden
     */
    children?: React.ReactNode;
}
declare const ChartYAxisItem: React.FunctionComponent<ChartYAxisItemProps>;
export { ChartYAxisItem };
