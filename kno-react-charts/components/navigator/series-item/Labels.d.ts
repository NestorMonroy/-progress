/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SeriesLabels } from '../../../common/property-types';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartNavigatorSeriesLabels component.
 */
export interface ChartNavigatorSeriesLabelsProps extends SeriesLabels {
}
/**
 * Represents the knoReact ChartNavigatorSeriesLabels component.
 *
 * @remarks
 * Supported children components are: {@link ChartNavigatorSeriesLabelsFrom}, {@link ChartNavigatorSeriesLabelsTo}.
 */
declare const ChartNavigatorSeriesLabels: React.FunctionComponent<ChartNavigatorSeriesLabelsProps>;
export { ChartNavigatorSeriesLabels };
