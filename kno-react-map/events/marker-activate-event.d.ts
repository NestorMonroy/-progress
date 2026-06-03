/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { MapLayer, MapMarker, MapMarkerActivateEvent } from '@progress/kno-charts';
import { Map } from '../Map.js';
import { BaseEvent } from './base-event.js';
/**
 * Fires when a marker has been displayed and has a DOM element assigned.
 */
export declare class MarkerActivateEvent extends BaseEvent implements MapMarkerActivateEvent {
    /**
     * The marker instance.
     */
    marker: MapMarker;
    /**
     * The marker layer instance.
     */
    layer: MapLayer;
    /**
     * @hidden
     */
    constructor(e: MapMarkerActivateEvent, target: Map);
}
