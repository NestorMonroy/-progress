/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { YAxisCrosshair } from '../../common/property-types';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartYAxisCrosshair component.
 */
export interface ChartYAxisCrosshairProps extends YAxisCrosshair {
    /**
     * @hidden
     */
    children?: React.ReactNode;
}
/**
 * Represents the knoReact ChartYAxisCrosshair component.
 *
 * @remarks
 * Supported children components are: {@link ChartYAxisCrosshairTooltip}.
 */
declare const ChartYAxisCrosshair: React.FunctionComponent<ChartYAxisCrosshairProps>;
export { ChartYAxisCrosshair };
