/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ShapeLayerOptions } from '@progress/kno-charts';
import * as React from 'react';
/**
 * Represents the props of the knoReact MapShapeLayer component.
 */
export interface MapShapeLayerProps extends ShapeLayerOptions {
    /**
     * The child components. Supports `MapShapeLayerTooltip`.
     */
    children?: React.ReactNode;
}
/**
 * Represents the knoReact MapShapeLayer component.
 *
 * @remarks
 * Supported children components are: {@link MapShapeLayerTooltip}.
 */
declare const MapShapeLayer: React.FunctionComponent<MapShapeLayerProps>;
export { MapShapeLayer };
