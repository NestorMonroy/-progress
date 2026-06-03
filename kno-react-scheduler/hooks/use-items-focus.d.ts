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
 * Represents the available `action` types for the `SchedulerItemsFocusAction` objects.
 *
 * The available types are:
 * - `ITEMS_FOCUS_NEXT`
 * - `ITEMS_FOCUS_PREV`
 */
export declare enum ITEMS_FOCUS_ACTION {
    next = "ITEMS_FOCUS_NEXT",
    prev = "ITEMS_FOCUS_PREV"
}
/**
 * Represents the object passed to the `items-focus` reducer.
 */
export interface SchedulerItemsFocusAction {
    /**
     * The type of focus action to perform on the item.
     */
    type: ITEMS_FOCUS_ACTION;
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
export declare const useItemsFocus: (items: React.RefObject<SchedulerItemHandle | null>[]) => [[], (action: SchedulerItemsFocusAction, event: React.SyntheticEvent) => void];
