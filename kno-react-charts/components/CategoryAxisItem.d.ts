/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { CategoryAxis } from '../common/property-types';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartCategoryAxisItem component ([see example](components/charts/chart/elements/axes#toc-categorical-chart-axes)).
 */
export interface ChartCategoryAxisItemProps extends CategoryAxis {
    /**
     * @hidden
     */
    children?: React.ReactNode;
}
/**
 * Represents the knoReact ChartCategoryAxisItemponent.
 *
 * @remarks
 * Supported children components are: {@link ChartCategoryAxisCrosshair}, {@link ChartCategoryAxisLabels}, {@link ChartCategoryAxisNotes},
 *  {@link ChartCategoryAxisNotesIcon}, {@link ChartCategoryAxisNotesLabel}, {@link ChartCategoryAxisRangeLabels}, {@link ChartCategoryAxisSelect}, {@link ChartCategoryAxisTitle}.
 */
declare const ChartCategoryAxisItem: React.FunctionComponent<ChartCategoryAxisItemProps>;
export { ChartCategoryAxisItem };
