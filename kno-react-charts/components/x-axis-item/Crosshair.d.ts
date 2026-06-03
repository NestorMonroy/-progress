/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { XAxisCrosshair } from '../../common/property-types';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartXAxisCrosshair component.
 */
export interface ChartXAxisCrosshairProps extends XAxisCrosshair {
    /**
     * @hidden
     */
    children?: React.ReactNode;
}
/**
 * Represents the knoReact ChartXAxisCrosshair component.
 *
 * @remarks
 * Supported children components are: {@link ChartXAxisCrosshairTooltip}.
 */
declare const ChartXAxisCrosshair: React.FunctionComponent<ChartXAxisCrosshairProps>;
export { ChartXAxisCrosshair };
