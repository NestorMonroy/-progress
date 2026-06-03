/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Pane } from '../common/property-types';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartPane component ([see example](components/charts/chart/elements/panes)).
 */
export interface ChartPaneProps extends Pane {
}
/**
 * Represents the knoReact ChartPane component.
 *
 * @remarks
 * Supported children components are: {@link ChartPaneTitle}.
 */
declare const ChartPane: React.FunctionComponent<ChartPaneProps>;
export { ChartPane };
