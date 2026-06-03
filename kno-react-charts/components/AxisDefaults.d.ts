/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { AxisDefaults } from '../common/property-types';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartAxisDefaults component ([see example](components/charts/chart/elements/axes#toc-default-axis-configuration)).
 */
export interface ChartAxisDefaultsProps extends AxisDefaults {
    /**
     * The child components of the ChartAxisDefaults. Supported child components are: ChartAxisDefaultsCrosshair, ChartAxisDefaultsLabels, ChartAxisDefaultsTitle.
     */
    children?: React.ReactNode;
}
/**
 * Represents the knoReact ChartAxisDefaults component.
 *
 * @remarks
 * Supported children components are: {@link ChartAxisDefaultsCrosshair}, {@link ChartAxisDefaultsLabels}, {@link ChartAxisDefaultsTitle}.
 */
declare const ChartAxisDefaults: React.FunctionComponent<ChartAxisDefaultsProps>;
export { ChartAxisDefaults };
