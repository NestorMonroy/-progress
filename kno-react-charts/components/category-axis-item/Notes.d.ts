/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { CategoryAxisNotes } from '../../common/property-types';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartCategoryAxisNotes component.
 */
export interface ChartCategoryAxisNotesProps extends CategoryAxisNotes {
    /**
     * The child components of the ChartCategoryAxisNotes. Supported child components are: ChartCategoryAxisNotesIcon and ChartCategoryAxisNotesLabel.
     */
    children?: React.ReactNode;
}
/**
 * Represents the knoReact ChartCategoryAxisNotes component.
 *  * @remarks
 * Supported children components are: {@link ChartCategoryAxisNotesIcon} and {@link ChartCategoryAxisNotesLabel}.
 */
declare const ChartCategoryAxisNotes: React.FunctionComponent<ChartCategoryAxisNotesProps>;
export { ChartCategoryAxisNotes };
