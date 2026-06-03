/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SchedulerSlotHandle, SchedulerSlotProps } from '../slots/SchedulerSlot.js';
import * as React from 'react';
/** @hidden */
export declare const useSchedulerSlot: (props: SchedulerSlotProps, ref: React.Ref<SchedulerSlotHandle | null>) => {
    slot: React.RefObject<SchedulerSlotHandle | null>;
    element: React.RefObject<HTMLDivElement | null>;
};
