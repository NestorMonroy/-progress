/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Map } from '../Map.js';
/**
 * @hidden
 */
export declare abstract class BaseEvent {
    /**
     * The `Map` component that triggered the event.
     */
    target: Map;
    /**
     * @hidden
     */
    constructor(target: Map);
}
