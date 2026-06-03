/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ChartingArea } from '../common/property-types';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartArea component ([see example](components/charts/chart/elements/chart-area)).
 */
export interface ChartAreaProps extends ChartingArea {
}
/**
 * Represents the knoReact ChartArea component.
 *
 * @remarks
 * Supported children components are: {@link ChartAreaItem}.
 */
declare const ChartArea: React.FunctionComponent<ChartAreaProps>;
export { ChartArea };
