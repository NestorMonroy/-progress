/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { MarkerTooltipContext } from '../tooltip/MarkerTooltipContext';
import * as React from 'react';
/**
 * Represents the props of the knoReact MapMarkerLayerTooltip component.
 */
export interface MapMarkerLayerTooltipProps {
    /**
     * The renderer for the marker layer tooltip.
     *
     * @return the content of the tooltip.
     */
    render?: (props: MarkerTooltipContext) => React.ReactNode;
}
/**
 * Represents the knoReact MapMarkerLayerTooltip component.
 */
declare const MapMarkerLayerTooltip: React.FunctionComponent<MapMarkerLayerTooltipProps>;
export { MapMarkerLayerTooltip };
