/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ValueAxisCrosshair } from '../../common/property-types';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartValueAxisCrosshair component.
 */
export interface ChartValueAxisCrosshairProps extends ValueAxisCrosshair {
    /**
     * @hidden
     */
    children?: React.ReactNode;
}
/**
 * Represents the knoReact ChartValueAxisCrosshair component.
 *
 * @remarks
 * Supported children components are: {@link ChartValueAxisCrosshairTooltip}.
 */
declare const ChartValueAxisCrosshair: React.FunctionComponent<ChartValueAxisCrosshairProps>;
export { ChartValueAxisCrosshair };
