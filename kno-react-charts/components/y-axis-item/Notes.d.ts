/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { YAxisNotes } from '../../common/property-types';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartYAxisNotes component.
 */
export interface ChartYAxisNotesProps extends YAxisNotes {
}
/**
 * Represents the knoReact ChartYAxisNotes component.
 *
 * @remarks
 * Supported children components are: {@link ChartYAxisNotesIcon}, {@link ChartYAxisNotesLabel}.
 */
declare const ChartYAxisNotes: React.FunctionComponent<ChartYAxisNotesProps>;
export { ChartYAxisNotes };
