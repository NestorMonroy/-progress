/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { CategoryAxisCrosshair } from '../../common/property-types';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartCategoryAxisCrosshair component.
 */
export interface ChartCategoryAxisCrosshairProps extends CategoryAxisCrosshair {
    /**
     * @hidden
     */
    children?: React.ReactNode;
}
/**
 * Represents the knoReact ChartCategoryAxisCrosshair component.
 *
 * @remarks
 * Supported children components are: {@link ChartCategoryAxisCrosshairTooltip}.
 */
declare const ChartCategoryAxisCrosshair: React.FunctionComponent<ChartCategoryAxisCrosshairProps>;
export { ChartCategoryAxisCrosshair };
