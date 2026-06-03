/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { MapLayer, MapMarker, MapMarkerCreatedEvent } from '@progress/kno-charts';
import { Map } from '../Map.js';
import { PreventableEvent } from './preventable-event.js';
/**
 * Fires when a marker has been created and is about to be displayed.
 *
 * Cancelling the event prevents the marker from being shown.
 */
export declare class MarkerCreatedEvent extends PreventableEvent implements MapMarkerCreatedEvent {
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
    constructor(e: MapMarkerCreatedEvent, target: Map);
}
