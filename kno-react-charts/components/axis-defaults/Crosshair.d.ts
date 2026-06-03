/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { AxisDefaultsCrosshair } from '../../common/property-types';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartAxisDefaultsCrosshair component.
 */
export interface ChartAxisDefaultsCrosshairProps extends AxisDefaultsCrosshair {
    /**
     * @hidden
     */
    children?: React.ReactNode;
}
/**
 * Represents the knoReact ChartAxisDefaultsCrosshair component.
 *
 * @remarks
 * Supported children components are: {@link ChartAxisDefaultsCrosshairTooltip}.
 */
declare const ChartAxisDefaultsCrosshair: React.FunctionComponent<ChartAxisDefaultsCrosshairProps>;
export { ChartAxisDefaultsCrosshair };
