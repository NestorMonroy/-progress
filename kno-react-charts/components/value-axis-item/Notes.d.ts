/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ValueAxisNotes } from '../../common/property-types';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartValueAxisNotes component.
 */
export interface ChartValueAxisNotesProps extends ValueAxisNotes {
    /**
     * The child components of the ChartValueAxisNotes. Supported child components are: ChartValueAxisNotesIcon and ChartValueAxisNotesLabel.
     */
    children?: React.ReactNode;
}
/**
 * Represents the knoReact ChartValueAxisNotes component.
 *
 * @remarks
 * Supported children components are: {@link ChartValueAxisNotesIcon} and {@link ChartValueAxisNotesLabel}.
 */
declare const ChartValueAxisNotes: React.FunctionComponent<ChartValueAxisNotesProps>;
export { ChartValueAxisNotes };
