/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Location, MapClickEvent as BaseMapClickEvent } from '@progress/kno-charts';
import { Map } from '../Map.js';
import { BaseEvent } from './base-event.js';
/**
 * Fires when the user clicks on the map.
 */
export declare class MapClickEvent extends BaseEvent implements BaseMapClickEvent {
    /**
     * The location of the clicked point.
     */
    location: Location;
    /**
     * The source DOM event instance
     */
    originalEvent: any;
    /**
     * @hidden
     */
    constructor(e: BaseMapClickEvent, target: Map);
}
