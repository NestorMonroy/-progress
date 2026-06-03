/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SeriesNotes } from '../../common/property-types';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartSeriesNotes component.
 */
export interface ChartSeriesNotesProps extends SeriesNotes {
}
/**
 * Represents the knoReact ChartSeriesNotes component.
 *
 * @remarks
 * Supported children components are: {@link ChartSeriesNotesIcon}, {@link ChartSeriesNotesLabel}.
 */
declare const ChartSeriesNotes: React.FunctionComponent<ChartSeriesNotesProps>;
export { ChartSeriesNotes };
