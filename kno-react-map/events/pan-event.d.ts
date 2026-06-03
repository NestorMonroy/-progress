/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Location, MapPanEvent } from '@progress/kno-charts';
import { Map } from '../Map.js';
import { BaseEvent } from './base-event.js';
/**
 * Fires while the map viewport is being moved.
 */
export declare class PanEvent extends BaseEvent implements MapPanEvent {
    /**
     * The map origin (top left or NW corner).
     */
    origin: Location;
    /**
     * The current map center.
     */
    center: Location;
    /**
     * The source DOM event instance
     */
    originalEvent: any;
    /**
     * @hidden
     */
    constructor(e: MapPanEvent, target: Map);
}
