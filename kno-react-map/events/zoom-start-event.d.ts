/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { MapZoomStartEvent } from '@progress/kno-charts';
import { Map } from '../Map.js';
import { PreventableEvent } from './preventable-event.js';
/**
 * Fires when the map zoom level is about to change.
 *
 * Cancelling the event prevents the user action.
 */
export declare class ZoomStartEvent extends PreventableEvent implements MapZoomStartEvent {
    /**
     * The source DOM event instance
     */
    originalEvent: any;
    /**
     * @hidden
     */
    constructor(e: MapZoomStartEvent, target: Map);
}
