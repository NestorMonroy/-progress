/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { MapLayer, MapMarker, MapMarkerClickEvent } from '@progress/kno-charts';
import { Map } from '../Map.js';
import { BaseEvent } from './base-event.js';
/**
 * Fires when a marker has been clicked or tapped.
 */
export declare class MarkerClickEvent extends BaseEvent implements MapMarkerClickEvent {
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
    constructor(e: MapMarkerClickEvent, target: Map);
}
