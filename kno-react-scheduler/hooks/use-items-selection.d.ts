/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SchedulerItemHandle } from '../items/SchedulerItem.js';
import * as React from 'react';
/**
 * Represents the available `action` types for the `SchedulerItemsSelectAction` objects.
 *
 * The available types are:
 * - 'ITEMS_SELECT_SELECT`
 * - 'ITEMS_SELECT_SELECT_NEXT`
 * - 'ITEMS_SELECT_SELECT_PREV`
 * - 'ITEMS_SELECT_RESET`
 * - 'ITEMS_SELECT_ADD`
 * - 'ITEMS_SELECT_REMOVE`
 */
export declare enum ITEMS_SELECT_ACTION {
    select = "ITEMS_SELECT_SELECT",
    selectNext = "ITEMS_SELECT_SELECT_NEXT",
    selectPrev = "ITEMS_SELECT_SELECT_PREV",
    reset = "ITEMS_SELECT_RESET",
    add = "ITEMS_SELECT_ADD",
    remove = "ITEMS_SELECT_REMOVE"
}
/**
 * Represents the object passed to the `items-select` reducer.
 */
export interface SchedulerItemsSelectAction {
    /**
     * The type of action to perform on item selection.
     */
    type: ITEMS_SELECT_ACTION;
    /**
     * The reference to the scheduler item handle.
     */
    item?: React.RefObject<SchedulerItemHandle | null>;
    /**
     * Whether to ignore the isAllDay property when performing the action.
     */
    ignoreIsAllDay?: boolean;
}
/** @hidden */
export declare const useItemsSelection: (items: React.RefObject<SchedulerItemHandle | null>[]) => [React.RefObject<SchedulerItemHandle | null>[], (action: SchedulerItemsSelectAction, event: React.SyntheticEvent) => void];
