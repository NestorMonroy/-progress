/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SeriesDefaultsNotes } from '../../common/property-types';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartSeriesDefaultsNotes component ([see example](components/charts/chart/elements/series#toc-default-series-configuration)).
 */
export interface ChartSeriesDefaultsNotesProps extends SeriesDefaultsNotes {
}
/**
 * Represents the knoReact ChartSeriesDefaultsNotes component.
 *
 * @remarks
 * Supported children components are: {@link ChartSeriesDefaultsNotesIcon}, {@link ChartSeriesDefaultsNotesLabel}.
 */
declare const ChartSeriesDefaultsNotes: React.FunctionComponent<ChartSeriesDefaultsNotesProps>;
export { ChartSeriesDefaultsNotes };
