/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SchedulerSlotHandle } from '../slots/SchedulerSlot.js';
import * as React from 'react';
/**
 * Represents the available `action` types for the `SchedulerSlotsSelectAction` objects.
 *
 * The available actions are:
 * - `SLOTS_SELECT_SELECT`
 * - `SLOTS_SELECT_RESET`
 * - `SLOTS_SELECT_ADD`
 */
export declare enum SLOTS_SELECT_ACTION {
    select = "SLOTS_SELECT_SELECT",
    reset = "SLOTS_SELECT_RESET",
    add = "SLOTS_SELECT_ADD"
}
/**
 * Represents the object passed to the `slots-select` reducer.
 */
export interface SchedulerSlotsSelectAction {
    /**
     * The type of action to perform on slot selection.
     */
    type: SLOTS_SELECT_ACTION;
    /**
     * The reference to the scheduler slot handle.
     */
    slot?: React.RefObject<SchedulerSlotHandle | null>;
}
/** @hidden */
export declare const useSlotsSelection: (_slots: React.RefObject<SchedulerSlotHandle | null>[]) => [React.RefObject<SchedulerSlotHandle | null>[], (action: SchedulerSlotsSelectAction) => void];
