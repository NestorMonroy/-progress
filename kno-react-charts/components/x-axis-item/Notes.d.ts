/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { XAxisNotes } from '../../common/property-types';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartXAxisNotes component.
 */
export interface ChartXAxisNotesProps extends XAxisNotes {
    /**
     * The child components of the ChartXAxisNotes. Supported child components are: ChartXAxisNotesIcon and ChartXAxisNotesLabel.
     */
    children?: React.ReactNode;
}
/**
 * Represents the knoReact ChartXAxisNotes component.
 *
 * @remarks
 * Supported children components are: {@link ChartXAxisNotesIcon}, {@link ChartXAxisNotesLabel}.
 */
declare const ChartXAxisNotes: React.FunctionComponent<ChartXAxisNotesProps>;
export { ChartXAxisNotes };
