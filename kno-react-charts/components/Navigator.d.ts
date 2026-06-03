/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Navigator } from '../common/property-types';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartNavigator component.
 */
export interface ChartNavigatorProps extends Navigator {
    /**
     * @hidden
     */
    children?: React.ReactNode;
}
/**
 * Represents the knoReact ChartNavigator component.
 *
 * @remarks
 * Supported children components are: {@link ChartNavigatorHint}, {@link ChartNavigatorPane}, {@link ChartNavigatorSelect}, {@link ChartNavigatorSeries}.
 */
declare const ChartNavigator: React.FunctionComponent<ChartNavigatorProps>;
export { ChartNavigator };
