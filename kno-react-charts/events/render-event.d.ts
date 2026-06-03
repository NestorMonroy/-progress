/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Charts } from '../common/charts';
import { BaseEvent } from './base-event.js';
/**
 * Arguments for the `render` event.
 */
export declare class RenderEvent extends BaseEvent {
    /**
     * @hidden
     */
    constructor(_e: any, sender: Charts);
}
