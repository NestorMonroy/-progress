/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ShapeTooltipContext } from '../tooltip/ShapeTooltipContext';
import * as React from 'react';
/**
 * Represents the props of the knoReact ShapeTooltip component.
 */
export interface MapShapeLayerTooltipProps {
    /**
     * The renderer for the shape layer tooltip.
     *
     * @return the content of the tooltip.
     */
    render?: (props: ShapeTooltipContext) => React.ReactNode;
}
/**
 * Represents the knoReact MapShapeLayerTooltip component.
 */
declare const MapShapeLayerTooltip: React.FunctionComponent<MapShapeLayerTooltipProps>;
export { MapShapeLayerTooltip };
