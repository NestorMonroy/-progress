/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { BubbleLayerOptions } from '@progress/kno-charts';
import * as React from 'react';
/**
 * Represents the props of the knoReact MapBubbleLayer component.
 */
export interface MapBubbleLayerProps extends BubbleLayerOptions {
    /**
     * The child tooltip components.
     */
    children?: React.ReactNode;
}
/**
 * Represents the knoReact MapBubbleLayer component.
 *
 * @remarks
 * Supported children components are: {@link MapBubbleLayerTooltip}.
 */
declare const MapBubbleLayer: React.FunctionComponent<MapBubbleLayerProps>;
export { MapBubbleLayer };
