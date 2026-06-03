/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { MarkerLayerOptions } from '@progress/kno-charts';
import * as React from 'react';
/**
 * Represents the props of the knoReact MapMarkerLayer component.
 */
export interface MapMarkerLayerProps extends MarkerLayerOptions {
    /**
     * The template which renders the content of the marker.
     *
     * Accepts a string template or a function that receives the data item and returns an HTML string.
     *
     * @example
     * ```tsx
     * <MapMarkerLayer
     *   template={(dataItem) => `<span>${dataItem.name}</span>`}
     * />
     * ```
     */
    template?: string | ((dataItem: any) => string);
    /**
     * The child components. Supports `MapMarkerLayerTooltip`.
     */
    children?: React.ReactNode;
}
/**
 * Represents the knoReact MapMarkerLayer component.
 *
 * @remarks
 * Supported children components are: {@link MapMarkerLayerTooltip}.
 */
declare const MapMarkerLayer: React.FunctionComponent<MapMarkerLayerProps>;
export { MapMarkerLayer };
