/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { BubbleTooltipContext } from '../tooltip/BubbleTooltipContext';
import * as React from 'react';
/**
 * Represents the props of the knoReact BubbleTooltip component.
 */
export interface MapBubbleLayerTooltipProps {
    /**
     * The renderer for the bubble layer tooltip.
     *
     * @return the content of the tooltip.
     */
    render?: (props: BubbleTooltipContext) => React.ReactNode;
}
/**
 * Represents the knoReact MapBubbleLayerTooltip component.
 */
declare const MapBubbleLayerTooltip: React.FunctionComponent<MapBubbleLayerTooltipProps>;
export { MapBubbleLayerTooltip };
