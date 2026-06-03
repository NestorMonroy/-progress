/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SeriesDefaults } from '../common/property-types';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartSeriesDefaults component ([see example](components/charts/chart/elements/series#toc-default-series-configuration)).
 */
export interface ChartSeriesDefaultsProps extends SeriesDefaults {
}
/**
 * Represents the knoReact ChartSeriesDefaults component.
 *
 * @remarks
 * Supported children components are: {@link ChartSeriesDefaultsLabels}, {@link ChartSeriesDefaultsTooltip}, {@link ChartSeriesDefaultsNotes}.
 */
declare const ChartSeriesDefaults: React.FunctionComponent<ChartSeriesDefaultsProps>;
export { ChartSeriesDefaults };
