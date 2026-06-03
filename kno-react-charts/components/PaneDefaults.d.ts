/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { PaneDefaults } from '../common/property-types';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartPaneDefaults component ([see example](components/charts/chart/elements/panes)).
 */
export interface ChartPaneDefaultsProps extends PaneDefaults {
    /**
     * @hidden
     */
    children?: React.ReactNode;
}
/**
 * Represents the knoReact ChartPaneDefaults component.
 *
 * @remarks
 * Supported children components are: {@link ChartPaneDefaultsTitle}.
 */
declare const ChartPaneDefaults: React.FunctionComponent<ChartPaneDefaultsProps>;
export { ChartPaneDefaults };
