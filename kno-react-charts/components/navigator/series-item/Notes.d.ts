/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SeriesNotes } from '../../../common/property-types';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartNavigatorSeriesNotes component.
 */
export interface ChartNavigatorSeriesNotesProps extends SeriesNotes {
}
/**
 * Represents the knoReact ChartNavigatorSeriesNotes component.
 *
 * @remarks
 * Supported children components are: {@link ChartNavigatorSeriesNotesIcon}, {@link ChartNavigatorSeriesNotesLabel}.
 */
declare const ChartNavigatorSeriesNotes: React.FunctionComponent<ChartNavigatorSeriesNotesProps>;
export { ChartNavigatorSeriesNotes };
