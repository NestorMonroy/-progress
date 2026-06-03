/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Tooltip } from '../common/property-types';
import { SharedTooltipContext, TooltipContext } from './../tooltip/Context';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartTooltip component ([see example](components/charts/chart/elements/tooltips)).
 */
export interface ChartTooltipProps extends Tooltip {
    /**
     * A function that can be used to create a custom tooltip template.
     *
     * When the `shared` property is set to `true`, the function accepts a `SharedTooltipContext` object as an argument.
     * Otherwise, it accepts a `TooltipContext` object.
     *
     * The function should return a React element that represents the custom tooltip content.
     */
    render?: ((props: TooltipContext) => React.ReactNode) | ((props: SharedTooltipContext) => React.ReactNode);
}
/**
 * Represents the knoReact ChartTooltip component ([see example](components/charts/chart/elements/tooltips)).
 */
declare const ChartTooltip: React.FunctionComponent<ChartTooltipProps>;
export { ChartTooltip };
