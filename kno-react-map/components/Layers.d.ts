/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as React from 'react';
/**
 * Represents the props of the knoReact MapLayers component.
 */
export interface MapLayersProps {
    /**
     * The child layer components.
     */
    children?: React.ReactNode;
}
/**
 * Represents the knoReact MapLayers component.
 *
 * @remarks
 * Supported children components are: {@link MapShapeLayer}, {@link MapBubbleLayer}, {@link MapMarkerLayer}, {@link MapTileLayer}.
 */
declare const MapLayers: React.FunctionComponent<MapLayersProps>;
export { MapLayers };
