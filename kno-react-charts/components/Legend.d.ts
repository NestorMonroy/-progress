/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Legend } from '../common/property-types';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartLegend component ([see example](components/charts/chart/elements/legend)).
 */
export interface ChartLegendProps extends Legend {
    /**
     * @hidden
     */
    children?: React.ReactNode;
}
/**
 * Represents the knoReact ChartLegend component.
 *
 * @remarks
 * Supported children components are: {@link ChartLegendInactiveItems}, {@link ChartLegendItem}, {@link ChartLegendTitle}.
 */
declare const ChartLegend: React.FunctionComponent<ChartLegendProps>;
export { ChartLegend };
