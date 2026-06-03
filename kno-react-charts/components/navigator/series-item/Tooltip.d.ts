/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SeriesTooltip } from '../../../common/property-types';
import { TooltipContext } from './../../../tooltip/Context';
import * as React from 'react';
/**
 * Represents the props of the knoReact ChartNavigatorSeriesItemTooltip component.
 */
export interface ChartNavigatorSeriesItemTooltipProps extends SeriesTooltip {
    /**
     * A function that can be used to create a custom tooltip template.
     *
     * The function accepts a `TooltipContext` object as an argument and should return a React element
     * that represents the custom tooltip content.
     */
    render?: (props: TooltipContext) => React.ReactNode;
}
/**
 * Represents the knoReact ChartNavigatorSeriesItemTooltip component.
 */
declare const ChartNavigatorSeriesItemTooltip: React.FunctionComponent<ChartNavigatorSeriesItemTooltipProps>;
export { ChartNavigatorSeriesItemTooltip };
