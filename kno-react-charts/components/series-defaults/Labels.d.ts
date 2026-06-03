/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SeriesDefaultsLabels } from '../../common/property-types';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartSeriesDefaultsLabels component ([see example](components/charts/chart/elements/series#toc-default-series-configuration)).
 */
export interface ChartSeriesDefaultsLabelsProps extends SeriesDefaultsLabels {
}
/**
 * Represents the knoReact ChartSeriesDefaultsLabels component.
 *
 * @remarks
 * Supported children components are: {@link ChartSeriesDefaultsLabelsFrom}, {@link ChartSeriesDefaultsLabelsTo}.
 */
declare const ChartSeriesDefaultsLabels: React.FunctionComponent<ChartSeriesDefaultsLabelsProps>;
export { ChartSeriesDefaultsLabels };
