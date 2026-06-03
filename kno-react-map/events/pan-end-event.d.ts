/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Location, MapPanEndEvent } from '@progress/kno-charts';
import { Map } from '../Map.js';
import { BaseEvent } from './base-event.js';
/**
 * Fires after the map viewport has been moved.
 */
export declare class PanEndEvent extends BaseEvent implements MapPanEndEvent {
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
    constructor(e: MapPanEndEvent, target: Map);
}
