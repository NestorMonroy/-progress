/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { MapLayer, MapShapeMouseEnterEvent } from '@progress/kno-charts';
import { Element } from '@progress/kno-drawing';
import { Map } from '../Map.js';
import { BaseEvent } from './base-event.js';
/**
 * Fires when the mouse enters a shape.
 *
 * > This event fires reliably only for shapes that have set fill color.
 * > The opacity can still be set to 0 so the shapes appear to have no fill.
 */
export declare class ShapeMouseEnterEvent extends BaseEvent implements MapShapeMouseEnterEvent {
    /**
     * The shape layer instance.
     */
    layer: MapLayer;
    /**
     * The shape instance.
     */
    shape: Element;
    /**
     * The source DOM event instance
     */
    originalEvent: any;
    /**
     * @hidden
     */
    constructor(e: MapShapeMouseEnterEvent, target: Map);
}
