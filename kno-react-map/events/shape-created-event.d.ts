/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { MapLayer, MapShapeCreatedEvent, Location } from '@progress/kno-charts';
import { Element } from '@progress/kno-drawing';
import { Map } from '../Map.js';
import { BaseEvent } from './base-event.js';
/**
 * Fires when a shape is created, but is not rendered yet.
 */
export declare class ShapeCreatedEvent extends BaseEvent implements MapShapeCreatedEvent {
    /**
     * The shape layer instance.
     */
    layer: MapLayer;
    /**
     * The shape instance.
     */
    shape: Element;
    /**
     * The original data item for this Shape.
     */
    dataItem: any;
    /**
     * The shape location
     */
    location: Location;
    /**
     * @hidden
     */
    constructor(e: any, target: Map);
}
