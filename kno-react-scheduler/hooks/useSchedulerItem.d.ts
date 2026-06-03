/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SchedulerItemHandle, SchedulerItemProps } from '../items/SchedulerItem.js';
import * as React from 'react';
/** @hidden */
export declare const useSchedulerItem: (props: SchedulerItemProps, ref?: React.Ref<SchedulerItemHandle | null>) => {
    item: React.RefObject<SchedulerItemHandle | null>;
    element: React.RefObject<HTMLDivElement | null>;
};
