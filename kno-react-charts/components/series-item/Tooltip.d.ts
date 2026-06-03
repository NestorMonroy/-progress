/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SeriesTooltip } from '../../common/property-types';
import { TooltipContext } from './../../tooltip/Context';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartSeriesItemTooltip component ([see example](components/charts/chart/elements/tooltips)).
 */
export interface ChartSeriesItemTooltipProps extends SeriesTooltip {
    /**
     * A function that can be used to create a custom tooltip template.
     *
     * The function accepts a `TooltipContext` object as an argument and should return a React element
     * that represents the custom tooltip content.
     */
    render?: (props: TooltipContext) => React.ReactNode;
}
/**
 * Represents the knoReact ChartSeriesItemTooltip component ([see example](components/charts/chart/elements/tooltips)).
 */
declare const ChartSeriesItemTooltip: React.FunctionComponent<ChartSeriesItemTooltipProps>;
export { ChartSeriesItemTooltip };
