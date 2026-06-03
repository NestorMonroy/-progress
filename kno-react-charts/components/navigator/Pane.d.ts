/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Pane } from '../../common/property-types';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartNavigatorPane component.
 */
export interface ChartNavigatorPaneProps extends Pane {
}
/**
 * Represents the knoReact ChartNavigatorPane component.
 *
 * @remarks
 * Supported children components are: {@link ChartNavigatorPaneTitle}.
 */
declare const ChartNavigatorPane: React.FunctionComponent<ChartNavigatorPaneProps>;
export { ChartNavigatorPane };
