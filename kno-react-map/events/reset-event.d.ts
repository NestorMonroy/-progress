/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { MapResetEvent } from '@progress/kno-charts';
import { Map } from '../Map.js';
import { BaseEvent } from './base-event.js';
/**
 * Fires when the map is reset.
 *
 * This typically occurs on initial load and after a zoom/center change.
 */
export declare class ResetEvent extends BaseEvent implements MapResetEvent {
    /**
     * @hidden
     */
    constructor(_: any, target: Map);
}
