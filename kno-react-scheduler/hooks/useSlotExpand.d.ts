/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SchedulerSlotHandle } from '../slots/SchedulerSlot.js';
import { SchedulerSlotExpandableConfig } from '../slots/SchedulerViewSlot.js';
import * as React from 'react';
/** @hidden */
export declare const useSlotExpand: (slot: React.RefObject<SchedulerSlotHandle | null>, config?: boolean | SchedulerSlotExpandableConfig) => void;
