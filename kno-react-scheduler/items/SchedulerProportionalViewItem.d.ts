/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SchedulerItemProps, SchedulerItemHandle } from './SchedulerItem.js';
import { SchedulerViewItemHandle, SchedulerViewItemProps } from './SchedulerViewItem.js';
import * as React from 'react';
/**
 * Represents a customized `viewItem` component which position itself proportionally to the duration of the item.
 *
 * This is a composite component of the [`SchedulerItem`](components/scheduler/api/scheduleritem), extending it to provide extended positioning inside a view.
 */
export declare const SchedulerProportionalViewItem: React.ForwardRefExoticComponent<SchedulerViewItemProps & React.RefAttributes<SchedulerViewItemHandle>>;
export declare const schedulerProportionalViewItemDefaultProps: {
    item: React.ForwardRefExoticComponent<SchedulerItemProps & React.RefAttributes<SchedulerItemHandle>>;
};
