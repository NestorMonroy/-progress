/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartPanes component.
 */
export interface ChartPanesProps {
    /**
     * The child components of the ChartPanes. Supported child components are: ChartPane.
     */
    children?: React.ReactNode;
}
/**
 * Represents the knoReact ChartPanes component.
 *
 * @remarks
 * Supported children components are: {@link ChartPane}.
 */
declare const ChartPanes: React.FunctionComponent<ChartPanesProps>;
export { ChartPanes };
