/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SeriesLabels } from '../../common/property-types';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartSeriesLabels component ([see example](components/charts/chart/elements/labels#toc-setting-the-appearance)).
 */
export interface ChartSeriesLabelsProps extends SeriesLabels {
    /**
     * @hidden
     */
    children?: React.ReactNode;
}
/**
 * Represents the knoReact ChartSeriesLabels component.
 *
 * @remarks
 * Supported children components are: {@link ChartSeriesLabelsFrom}, {@link ChartSeriesLabelsTo}.
 */
declare const ChartSeriesLabels: React.FunctionComponent<ChartSeriesLabelsProps>;
export { ChartSeriesLabels };
