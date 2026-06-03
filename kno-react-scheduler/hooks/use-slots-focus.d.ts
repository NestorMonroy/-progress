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
 * Represents the available `action` types for the `SchedulerSlotsFocusAction` objects.
 *
 * The available actions are:
 * - `SLOT_FOCUS_UP`
 * - `SLOT_FOCUS_DOWN`
 * - `SLOT_FOCUS_LEFT`
 * - `SLOT_FOCUS_RIGHT`
 */
export declare enum SLOTS_FOCUS_ACTION {
    up = "SLOT_FOCUS_UP",
    down = "SLOT_FOCUS_DOWN",
    left = "SLOT_FOCUS_LEFT",
    right = "SLOT_FOCUS_RIGHT"
}
/**
 * Represents the object passed to the `slots-focus` reducer.
 */
export interface SchedulerSlotsFocusAction {
    /**
     * The type of focus action to perform on the slot.
     */
    type: SLOTS_FOCUS_ACTION;
    /**
     * The reference to the scheduler slot handle.
     */
    slot: React.RefObject<SchedulerSlotHandle | null>;
}
/** @hidden */
export declare const useSlotsFocus: (slots: React.RefObject<SchedulerSlotHandle | null>[]) => [React.RefObject<SchedulerSlotHandle | null>[], (action: SchedulerSlotsFocusAction, event: React.SyntheticEvent) => void];
/** @hidden */
export declare const findUpSlot: (target: React.RefObject<SchedulerSlotHandle | null>, all: React.RefObject<SchedulerSlotHandle | null>[]) => React.RefObject<SchedulerSlotHandle | null> | undefined;
/** @hidden */
export declare const findLeftSlot: (target: React.RefObject<SchedulerSlotHandle | null>, all: React.RefObject<SchedulerSlotHandle | null>[]) => React.RefObject<SchedulerSlotHandle | null> | undefined;
/** @hidden */
export declare const findRightSlot: (target: React.RefObject<SchedulerSlotHandle | null>, all: React.RefObject<SchedulerSlotHandle | null>[]) => React.RefObject<SchedulerSlotHandle | null> | undefined;
/** @hidden */
export declare const findDownSlot: (target: React.RefObject<SchedulerSlotHandle | null>, all: React.RefObject<SchedulerSlotHandle | null>[]) => React.RefObject<SchedulerSlotHandle | null> | undefined;
