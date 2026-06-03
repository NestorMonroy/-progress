/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { MapLayer, MapShapeClickEvent } from '@progress/kno-charts';
import { Element } from '@progress/kno-drawing';
import { Map } from '../Map.js';
import { BaseEvent } from './base-event.js';
/**
 * Fires when a shape is clicked or tapped.
 */
export declare class ShapeClickEvent extends BaseEvent implements MapShapeClickEvent {
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
    constructor(e: MapShapeClickEvent, target: Map);
}
