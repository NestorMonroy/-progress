/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { MapBeforeResetEvent } from '@progress/kno-charts';
import { Map } from '../Map.js';
import { BaseEvent } from './base-event.js';
/**
 * Fires immediately before the map is reset. This event is typically used for cleanup by layer implementers.
 */
export declare class BeforeResetEvent extends BaseEvent implements MapBeforeResetEvent {
    /**
     * @hidden
     */
    constructor(_: any, target: Map);
}
