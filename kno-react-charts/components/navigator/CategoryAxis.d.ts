/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { CategoryAxis } from '../../common/property-types';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartNavigatorCategoryAxis component.
 */
export interface ChartNavigatorCategoryAxisProps extends CategoryAxis {
}
/**
 * Represents the knoReact ChartNavigatorCategoryAxis component.
 *
 * @remarks
 * Supported children components are: {@link ChartNavigatorCategoryAxisCrosshair}, {@link ChartNavigatorCategoryAxisLabels}, {@link ChartNavigatorCategoryAxisNotes},
 * {@link ChartNavigatorCategoryAxisNotesIcon}, {@link ChartNavigatorCategoryAxisNotesLabel}, {@link ChartNavigatorCategoryAxisSelect}, {@link ChartNavigatorCategoryAxisTitle}.
 */
declare const ChartNavigatorCategoryAxis: React.FunctionComponent<ChartNavigatorCategoryAxisProps>;
export { ChartNavigatorCategoryAxis };
