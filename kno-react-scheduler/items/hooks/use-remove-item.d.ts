/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DataItem } from '../../models/index.js';
/**
 * Represents the available `action` types for the `SchedulerItemRemoveItemAction` objects.
 *
 * The available types are:
 * - `REMOVE_ITEM_SET`
 * - `REMOVE_ITEM_RESET`
 * - `REMOVE_ITEM_COMPLETE`
 */
export declare enum REMOVE_ITEM_ACTION {
    set = "REMOVE_ITEM_SET",
    reset = "REMOVE_ITEM_RESET",
    complete = "REMOVE_ITEM_COMPLETE"
}
/**
 * Represents the object passed to the `remove-item` reducer.
 */
export type SchedulerItemRemoveItemAction = {
    type: REMOVE_ITEM_ACTION;
    payload?: DataItem;
};
/** @hidden */
export declare const useRemoveItem: (config: {
    series: boolean;
    onDataAction?: any;
}, state: [DataItem, DataItem, any]) => any[];
